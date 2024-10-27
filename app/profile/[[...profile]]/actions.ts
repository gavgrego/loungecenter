"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const updatePriortityPass = async (value: boolean) => {
  const { userId, sessionClaims } = auth();

  if (!userId) return;

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      unsafeMetadata: {
        ...sessionClaims?.unsafeMetadata,
        // make this type safe
        hasPriorityPass: value,
      },
    });
    revalidatePath("/profile");
    return value;
  } catch {
    throw new Error("Failed to update Priority Pass status");
  }
};
