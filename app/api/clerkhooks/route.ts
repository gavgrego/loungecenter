import { createWebhooksHandler } from "@brianmmdev/clerk-webhooks-handler";
import { Stripe } from "stripe";
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const handler = createWebhooksHandler({
  onUserCreated: async (user) => {
    // 👉 Parse the unsafe_metadata from the user payload
    const { cardToken, priceId } = user.unsafe_metadata;

    if (!cardToken || !priceId) {
      return;
    }

    // 👉 Stripe operations will go here...
    const pm = await stripe.paymentMethods.create({
      type: "card",
      card: {
        token: cardToken as string,
      },
    });

    const customer = await stripe.customers.create({
      email: user?.email_addresses[0].email_address,
      payment_method: pm.id,
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      default_payment_method: pm.id,
      items: [
        {
          price: priceId as string,
        },
      ],
    });

    await clerkClient.users.updateUser(user.id, {
      publicMetadata: {
        stripeCustomerId: customer.id,
        stripeSubscriptionId: subscription.id,
      },
    });
  },
});

export const POST = handler.POST;
