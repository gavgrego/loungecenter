"use client";

import * as React from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Card, Input, Button, CircularProgress } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

const VerificationForm = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const { register, handleSubmit, getValues, control, formState } = useForm({
    shouldUseNativeValidation: true
  });

  const onSubmit = async () => {
    if (!isLoaded && !signUp) return null;

    try {
      const signInAttempt = await signUp.attemptEmailAddressVerification({
        code: getValues("code")
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });

        router.push("/?verified=true");
      } else {
      }
    } catch (err) {}
  };

  return (
    <div className="mt-10 flex items-center justify-center ">
      {/* need to figure out why onsubmit form functionality is not working and just refreshed the page */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full sm:w-96 p-4">
          <div>
            <Controller
              control={control}
              name="code"
              render={() => (
                <Input
                  required
                  id="code"
                  label="Enter your verification code"
                  {...register("code", {
                    required: true,
                    minLength: 6,
                    maxLength: 6
                  })}
                />
              )}
            />
          </div>
          {/* TODO: Add terms of service checkbox */}
          <p className="my-2">
            Once you submit your verification code, you will be charged and your
            subscription will be activated.{"  "}
            <strong>You can cancel your subscription at any time.</strong>
          </p>
          <div className="grid w-full">
            {formState.isSubmitting ? (
              <CircularProgress />
            ) : (
              <Button
                color="secondary"
                isDisabled={!formState.isValid}
                type="submit"
              >
                Verify and Confirm Subscription
              </Button>
            )}
          </div>
        </Card>
      </form>
    </div>
  );
};

export default VerificationForm;
