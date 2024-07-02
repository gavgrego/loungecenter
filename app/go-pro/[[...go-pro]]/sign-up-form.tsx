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
import { useForm, Controller } from "react-hook-form";

type SignUpFormProps = {
  setVerifying: (val: boolean) => void;
};

const SignUpForm = ({ setVerifying }: SignUpFormProps) => {
  const { isLoaded, signUp } = useSignUp();
  const stripe = useStripe();
  const elements = useElements();
  const [cardValid, setCardValid] = useState(false);
  const [subscription, setSubscription] = useState(
    "price_1PWOniJ8buZJpCe9xpDhw0g5"
  );

  const { register, handleSubmit, getValues, control, formState } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async () => {
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
        emailAddress: getValues("emailAddress"),
        unsafeMetadata: {
          cardToken,
          priceId: subscription,
        },
      });

      await signUp.prepareEmailAddressVerification();

      setVerifying(true);
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              control={control}
              name="emailAddress"
              render={() => (
                <Input
                  label="Email Address"
                  type="email"
                  {...register("emailAddress", { required: true })}
                />
              )}
            />
          </div>

          <div>
            <Controller
              control={control}
              name="subscription"
              render={() => (
                <RadioGroup
                  className="mt-2"
                  color="secondary"
                  value={subscription}
                  onChange={(e) => setSubscription(e.target.value)}
                >
                  <Radio
                    className="flex items-center space-x-2"
                    value="price_1PYEb5J8buZJpCe9V0Zkc9kN"
                  >
                    <strong>Monthly</strong> ($7.99/month)
                  </Radio>
                  <Radio
                    className="flex items-center space-x-2"
                    value="price_1PYEcHJ8buZJpCe92iaen98q"
                  >
                    <strong>Yearly</strong> ($79.99/year){" "}
                    <span className="italic text-sm text-warning">
                      Save 16% a year!
                    </span>
                  </Radio>
                </RadioGroup>
              )}
            />
          </div>

          <h3>Payment details</h3>
          <div className="rounded border p-2 ">
            <CardElement
              className="text-white"
              id="card"
              onChange={(event) => {
                if (event.complete) {
                  setCardValid(true);
                }
              }}
            />
          </div>
        </CardBody>

        <div className="m-2 flex flex-col gap-2">
          {formState.isSubmitting ? (
            <CircularProgress />
          ) : (
            <Button
              color="secondary"
              isDisabled={!formState.isValid || !cardValid}
              type="submit"
            >
              Verify Your Email
            </Button>
          )}

          {formState.errors.root?.message && (
            <p className="text-red-500">{formState.errors.root?.message}</p>
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
