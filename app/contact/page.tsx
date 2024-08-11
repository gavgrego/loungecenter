import { currentUser } from "@clerk/nextjs/server";

import ContactForm from "./form";

const ContactPage = async () => {
  const user = await currentUser();

  // let's fetch user data here and send to form to prefill data if possible
  return (
    <div>
      <h1 className="mb-4">Contact</h1>
      <ContactForm user={user} />
    </div>
  );
};

export default ContactPage;
