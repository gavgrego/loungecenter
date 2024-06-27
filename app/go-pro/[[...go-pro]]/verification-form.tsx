"use client";

import * as React from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Input } from "@nextui-org/react";

import { Button } from "@/components/ui/button";

const VerificationForm = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const router = useRouter();

  // 👉 Handles the verification process once the user has entered the validation code from email
  async function handleVerification(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded && !signUp) return null;

    try {
      // 👉 Use the code provided by the user and attempt verification
      const signInAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // 👉 If verification was completed, set the session to active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/after-sign-up");
      } else {
        // 👉 If the status is not complete. User may need to complete further steps.
      }
    } catch (err) {
      // 👉 Something went wrong...
    }
  }

  return (
    <div className="mt-20 flex items-center justify-center">
      <form onSubmit={handleVerification}>
        <Card className="w-full sm:w-96">
          <div>
            <Input
              required
              id="code"
              label="Enter your verification code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="grid w-full gap-y-4">
            <Button disabled={!isLoaded} type="submit">
              Verify
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default VerificationForm;
