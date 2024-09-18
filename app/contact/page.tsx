import { currentUser } from "@clerk/nextjs/server";

import ContactForm from "./form";

const ContactPage = async () => {
  const user = await currentUser();

  // let's fetch user data here and send to form to prefill data if possible
  return (
    <div>
      <h1 className="mb-4">Contact</h1>
      <p>
        Questions? Comments? See blatantly incorrect data? Please let me know.
      </p>
      <p className="text-xs">
        Any correction of verifiable incorrect info will automatically enter you
        to win LoungeVault merch.
      </p>
      <ContactForm user={user} />
    </div>
  );
};

export default ContactPage;
