import { createAnthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, generateText, streamText } from "ai";

// Allow streaming responses up to 10 seconds
export const maxDuration = 10;

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const results = await streamText({
    model: anthropic("claude-3-5-sonnet-20240620"),
    messages: convertToCoreMessages(messages)
  });

  return results.toTextStreamResponse();
}
