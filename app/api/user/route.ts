import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const { userId, sessionClaims } = auth();

  await clerkClient.users.deleteUser(userId as string);
  await stripe.customers.del(
    sessionClaims?.publicMetadata.stripeCustomerId as string
  );

  return NextResponse.json({ success: true });
}
