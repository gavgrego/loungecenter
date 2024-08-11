"use client";

import { User } from "@clerk/nextjs/dist/types/server";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";

import { submitForm } from "../actions";

type ContactFormProps = {
  user?: User | null;
};

const ContactForm = ({ user }: ContactFormProps) => {
  const [state, submit, isPending] = useFormState(submitForm, {
    status: "idle",
  });

  return (
    <div>
      <form action={submit}>
        <div className="flex gap-3 flex-col mb-4 max-w-96">
          <Input
            required
            defaultValue={user ? user?.emailAddresses[0].toString() : ""}
            disabled={isPending}
            name="email"
            placeholder="email address"
            type="text"
          />
          <Textarea
            required
            disabled={isPending}
            name="comments"
            placeholder="Comments..."
          />
          <Button disabled={isPending} type="submit">
            Submit
          </Button>
        </div>

        {state.status === "success" && <p>Form submitted!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
