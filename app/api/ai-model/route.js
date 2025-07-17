import OpenAI from "openai";
import { NextResponse } from "next/server";
import {QUESTIONS_PROMPT} from "@/services/Constants";

export async function POST(req) {
  const { jobPosition, jobDescription, duration, type } = await req.json();
  const FINAL_PROMPT = QUESTIONS_PROMPT
    .replace("{{jobTitle}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{duration}}", duration)
    .replace("{{type}}", type);

  console.log(FINAL_PROMPT);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.NEXT_PUBLIC_OPENROUTER_KEY,
    });

    const completion = await openai.chat.completions.create({
      // model: "google/gemini-2.0-flash-exp:free",
      model: "openai/gpt-3.5-turbo",
      
      messages: [
        { role: "user", content: FINAL_PROMPT }
      ],
   
      //   messages: [{ role: "user", content: "Say this is a test" }],
    });
    console.log(completion.choices[0].message);
    return NextResponse.json(completion.choices[0].message);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
