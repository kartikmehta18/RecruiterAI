import { FEEDBACK_PROMPT } from "@/services/Constants";
import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { conversation } = await req.json();
  const FINAL_PROMPT = FEEDBACK_PROMPT.replace(
    "{{conversation}}",
    JSON.stringify(conversation)
  );


  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.NEXT_PUBLIC_OPENROUTER_KEY,
    });

    const completion = await openai.chat.completions.create({
      // model: "google/gemini-2.0-flash-exp:free",
      model: "openai/gpt-3.5-turbo",

      messages: [{ role: "user", content: FINAL_PROMPT }],
    });
    console.log(completion.choices[0].message);
    return NextResponse.json(completion.choices[0].message);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
