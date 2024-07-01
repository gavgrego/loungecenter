"use client";

import * as React from "react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import SignUpForm from "./sign-up-form";
import VerificationForm from "./verification-form";

const SignUp = () => {
  const [verifying, setVerifying] = useState(false);
  const options = {
    appearance: {
      theme: "stripe",
    },
  };
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  // 👉 Render the verification form, meaning OTP email has been set
  if (verifying) {
    return <VerificationForm />;
  }

  // 👉 Render the signup form by default
  return (
    <div className="mt-20 flex items-center justify-center">
      {/* @ts-ignore */}
      <Elements options={options} stripe={stripePromise}>
        <SignUpForm setVerifying={setVerifying} />
      </Elements>
    </div>
  );
};

export default SignUp;
