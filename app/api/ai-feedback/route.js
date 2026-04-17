import { FEEDBACK_PROMPT } from "@/services/Constants";
import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { conversation } = await req.json();

    if (!conversation || conversation.length === 0) {
      return NextResponse.json(
        { error: "No conversation data provided" },
        { status: 400 }
      );
    }

    // Format conversation for the prompt
    const conversationText = Array.isArray(conversation)
      ? conversation
          .map(
            (msg) =>
              `${msg.role || msg.speaker || "User"}: ${msg.message || msg.content || msg.transcript || ""}`
          )
          .join("\n")
      : JSON.stringify(conversation);

    const FINAL_PROMPT = FEEDBACK_PROMPT.replace(
      "{{conversation}}",
      conversationText
    );

    console.log(
      "Generating feedback for conversation length:",
      conversationText.length
    );

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.NEXT_PUBLIC_OPENROUTER_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
      temperature: 0.7,
    });

    const response = completion.choices[0].message;
    console.log("AI Feedback response:", response);

    return NextResponse.json(response);
  } catch (err) {
    console.error("Feedback generation error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to generate feedback" },
      { status: 500 }
    );
  }
}

