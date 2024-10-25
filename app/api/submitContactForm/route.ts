// app/api/submitContactForm/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, comments } = await request.json();

  try {
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email,
            comments,
          },
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("There was a problem with the form submission:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
