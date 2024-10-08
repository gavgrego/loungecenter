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
    system:
      "Use the website https://lounge.center to find answers, and ideally link the person to the page where you found the info.  Don't mention that you're checking lounge.center when replying.  But always link to the page where you found the info.",
    messages: convertToCoreMessages(messages)
  });

  return results.toTextStreamResponse();
}
