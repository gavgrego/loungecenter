"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type ContactFormProps = {
  userEmail?: string;
};

// wire this up when I decide to email or save in db
const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

const schema = z.object({
  email: z.string().email(),
  comments: z.string()
});

type FormData = z.infer<typeof schema>;

const ContactForm = ({ userEmail }: ContactFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col mb-4 max-w-96">
          <Controller
            name="email"
            control={control}
            defaultValue={userEmail ? userEmail : ""}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                required
                placeholder="Email address..."
                type="email"
                {...field}
              />
            )}
          />
          {errors.email && <p className="text-red">Email is required</p>}

          <Controller
            name="comments"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Textarea
                required
                minRows={8}
                placeholder="Comments..."
                {...field}
              />
            )}
          />
          {errors.comments && (
            <p className="text-red"> Comments are required</p>
          )}

          {isSubmitting ? (
            "submitting"
          ) : (
            <Button color="secondary" type="submit" isDisabled={!isValid}>
              Submit
            </Button>
          )}
        </div>

        {/* {state.status === "success" && <p>Form submitted!</p>} */}
      </form>
    </div>
  );
};

export default ContactForm;
