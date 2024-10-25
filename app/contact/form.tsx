"use client";

import { Button, CircularProgress, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import submitContactForm from "@/data/contact/submitContactForm";

type ContactFormProps = {
  userEmail?: string;
};

const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
  await submitContactForm({ formData: data });
};

const schema = z.object({
  email: z.string().email(),
  comments: z.string(),
});

export type ContactFormData = z.infer<typeof schema>;

const ContactForm = ({ userEmail }: ContactFormProps) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: {
      errors,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      isValid,
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    reset(
      {
        email: "",
        comments: "",
      },
      { keepIsSubmitted: true }
    );
  }, [isSubmitSuccessful]);

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col mb-4 max-w-96">
          <Controller
            control={control}
            defaultValue={userEmail ? userEmail : ""}
            name="email"
            render={({ field }) => (
              <Input
                required
                placeholder="Email address..."
                type="email"
                {...field}
              />
            )}
            rules={{ required: true }}
          />
          {errors.email && <p className="text-red">Email is required</p>}

          <Controller
            control={control}
            name="comments"
            render={({ field }) => (
              <Textarea
                required
                minRows={8}
                placeholder="Comments..."
                {...field}
              />
            )}
            rules={{ required: true }}
          />
          {errors.comments && (
            <p className="text-red"> Comments are required</p>
          )}

          <Button color="secondary" isDisabled={!isValid} type="submit">
            {isSubmitting ? <CircularProgress /> : "Submit"}
          </Button>

          {isSubmitted && (
            <p className="text-success">
              Form submitted successfully! We&apos;ll be in touch soon.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
