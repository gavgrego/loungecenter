"use client";

import { User } from "@clerk/nextjs/dist/types/server";
import { Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { submitForm } from "../actions";
import SubmitButton from "@/components/form/SubmitButton";

type ContactFormProps = {
  userEmail?: string;
};

const ContactForm = ({ userEmail }: ContactFormProps) => {
  const [state, submit] = useFormState(submitForm, {
    status: "idle"
  });

  return (
    <div className="mt-4">
      <form action={submit}>
        <div className="flex gap-3 flex-col mb-4 max-w-96">
          <Input
            required
            defaultValue={userEmail ? userEmail : ""}
            name="email"
            placeholder="Email address..."
            type="text"
          />
          <Textarea required name="comments" placeholder="Comments..." />
          <SubmitButton />
        </div>

        {state.status === "success" && <p>Form submitted!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
