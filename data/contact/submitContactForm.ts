import { ContactFormData } from "@/app/contact/form";

type SubmitContactFormProps = {
  formData: ContactFormData;
};

const submitContactForm = async ({ formData }: SubmitContactFormProps) => {
  const { email, comments } = formData;

  try {
    const response = await fetch("/api/submitContactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        comments
      })
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Form submitted successfully:", result);
  } catch (error) {
    console.error("There was a problem with the form submission:", error);
  }
};

export default submitContactForm;
