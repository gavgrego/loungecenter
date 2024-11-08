"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const updatePriortityPass = async (value: boolean) => {
  const { userId, sessionClaims } = auth();
  if (!userId) throw new Error("Not authenticated");

  try {
    // Just update the user metadata
    await clerkClient.users.updateUserMetadata(userId, {
      unsafeMetadata: {
        ...sessionClaims?.unsafeMetadata,
        hasPriorityPass: value,
      },
    });

    revalidatePath("/profile");
    return value;
  } catch (error) {
    console.error("Error updating priority pass:", error);
    throw new Error("Failed to update Priority Pass status");
  }
};

export { updatePriortityPass };
