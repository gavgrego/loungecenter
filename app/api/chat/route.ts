import { createAnthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

// Allow streaming responses up to 10 seconds
export const maxDuration = 30;

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const results = await streamText({
    model: anthropic("claude-3-5-sonnet-20240620"),
    system:
      "Use the website https://lounge.center to find answers, and link the person to the URL where you found the info.  Remember, a lounge page URL is formatted as https://lounge.center/lounges/the lounges airport code/SLUG.  Don't mention that you're checking lounge.center when replying.  But always link to the page where you found the info.  ",
    messages: convertToCoreMessages(messages),
  });

  return results.toTextStreamResponse();
}
