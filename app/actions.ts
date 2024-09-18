"use server";

export const submitForm = async (
  prevState: { status: string },
  formData: FormData
) => {
  try {
    // send form data to strapi
    console.log(formData);
    return { status: "success" };
  } catch (error) {
    return { status: "error" };
  }
};
