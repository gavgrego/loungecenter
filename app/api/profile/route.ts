import { NextRequest, NextResponse } from "next/server";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { userId } = getAuth(req);
  const data = await req.json();

  await clerkClient.users.updateUserMetadata(userId as string, {
    unsafeMetadata: {
      hasPriorityPass: data,
    },
  });

  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest, res: NextResponse) {
  const { userId } = getAuth(req);

  await clerkClient.users.getUser(userId as string);

  return NextResponse.json({ success: true });
}
