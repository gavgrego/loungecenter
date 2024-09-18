"use client";

import { User } from "@clerk/nextjs/dist/types/server";
import { Button, CircularProgress, Input, Textarea } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";
import { submitForm } from "../actions";
import SubmitButton from "@/components/form/SubmitButton";

type ContactFormProps = {
  user?: User | null;
};

const ContactForm = ({ user }: ContactFormProps) => {
  const [state, submit] = useFormState(submitForm, {
    status: "idle"
  });

  return (
    <div className="mt-4">
      <form action={submit}>
        <div className="flex gap-3 flex-col mb-4 max-w-96">
          <Input
            required
            defaultValue={user ? user?.emailAddresses[0].toString() : ""}
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
