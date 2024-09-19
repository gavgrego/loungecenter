import { auth } from "@clerk/nextjs/server";

import ContactForm from "./form";

const ContactPage = async () => {
  const user = auth();
  const userEmail = user.sessionClaims?.userEmail;

  return (
    <div>
      <h1 className="mb-4">Contact</h1>
      <p>Questions? Comments? See incorrect data? Please let me know.</p>
      <p className="text-xs">
        * Any correction of verifiable incorrect info will automatically enter
        you to win LoungeVault merch!
      </p>
      <ContactForm userEmail={userEmail} />
    </div>
  );
};

export default ContactPage;
