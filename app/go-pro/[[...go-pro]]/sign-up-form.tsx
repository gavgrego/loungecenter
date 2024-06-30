"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  RadioGroup,
  Radio,
  CircularProgress,
} from "@nextui-org/react";

type SignUpFormProps = {
  setVerifying: (val: boolean) => void;
};

const SignUpForm = ({ setVerifying }: SignUpFormProps) => {
  const { isLoaded, signUp } = useSignUp();
  const stripe = useStripe();
  const [isLoading, setIsLoading] = useState(false);

  const [priceId, setPriceId] = useState("");
  const elements = useElements();
  const [email, setEmail] = useState("");

  const onSubmit = async () => {
    setIsLoading(true);
    if (!isLoaded && !signUp) return null;

    try {
      if (!elements || !stripe) {
        return;
      }

      let cardToken = "";
      const cardEl = elements?.getElement("card");

      if (cardEl) {
        const res = await stripe?.createToken(cardEl);

        cardToken = res?.token?.id || "";
      }

      await signUp.create({
        emailAddress: email,
        unsafeMetadata: {
          cardToken,
          priceId,
        },
      });

      await signUp.prepareEmailAddressVerification();

      setVerifying(true);
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <form>
      <Card className="w-full sm:w-96">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <h2 className="text-center">LoungeVault Pro Membership</h2>
            <p className="text-sm text-center">
              Please fill in the details to get started.
            </p>
          </div>
        </CardHeader>
        <CardBody className="grid gap-y-4">
          <div>
            <Input
              required
              aria-label="Email Address"
              id="emailAddress"
              label="Email Address"
              name="emailAddress"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <RadioGroup
              className="mt-2"
              color="secondary"
              defaultValue="monthly"
              value={priceId}
              onValueChange={(e) => setPriceId(e)}
            >
              <div className="flex items-center space-x-2">
                <Radio id="monthly" value="price_1PWOniJ8buZJpCe9xpDhw0g5">
                  <strong>Monthly</strong> ($9.99/month)
                </Radio>
              </div>
              <div className="flex items-center space-x-2">
                <Radio id="yearly" value="price_1PWOoLJ8buZJpCe9ICmwzc71">
                  <strong>Yearly</strong> ($99.99/year){" "}
                  <span className="italic text-sm text-warning">
                    Save $20 a year!
                  </span>
                </Radio>
              </div>
            </RadioGroup>
          </div>

          <h3>Payment details</h3>
          <div className="rounded border p-2 ">
            <CardElement className="text-white" id="card" />
          </div>
        </CardBody>

        <div className="m-2 flex flex-col gap-2">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button disabled={!isLoaded} onClick={onSubmit}>
              Verify Your Email
            </Button>
          )}

          <p className="text-xs">
            After signing up, you will be sent a One Time Password code sent via
            email to verify before being charged.
          </p>
        </div>
      </Card>
    </form>
  );
};

export default SignUpForm;
