"use client"
import React, { useContext, useEffect } from 'react'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { Timer, Mic, Phone } from "lucide-react"
import Image from "next/image"
import Vapi from '@vapi-ai/web';
import AlertConfirmation from './_components/AlertConfirmation';



function StartInterview() {
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

  useEffect(() => {
    startCall();
  }, [])

  const startCall = () => {
    let questionList;
    interviewInfo?.interviewData?.questionList.forEach((item, inedx) => {
      questionList = item?.question + ',' + questionList
    })


    const assistantOptions = {
      name: "AI Recruiter",
      firstMessage: "Hi" + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition + "?",
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer",
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
You are an AI voice assistant conducting interviews.
Your job is to ask candidates provided interview questions, assess their responses.
Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
"Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let’s get started with a few questions!"
Ask one question at a time and wait for the candidate’s response before proceeding. Keep the questions clear and concise. Below Are the questions ask one by one:
Questions: `+ questionList + `
If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
"Need a hint? Think about how React tracks component updates!"
Provide brief, encouraging feedback after each answer. Example:
"Nice! That’s a solid answer."
"Hmm, not quite! Want to try again?"
Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
After 5–7 questions, wrap up the interview smoothly by summarizing their performance. Example:
"That was great! You handled some tough questions well. Keep sharpening your skills!"
End on a positive note:
"Thanks for chatting! Hope to see you crushing projects soon!"

Key Guidelines:
✅ Be friendly, engaging, and witty ✏️
✅ Keep responses short and natural, like a real conversation
✅ Adapt based on the candidate’s confidence level
✅ Ensure the interview remains focused on React
        `.trim(),
          },
        ],
      },
    };


    vapi.start(assistantOptions);
    console.log(questionList);
  }


  const stopInterview = () => {
    vapi.stop()
  }


  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className='font-bold text-xl flex justify-between'>AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
          00.00.00
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5  ">
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <Image src={"/ai.webp"} alt="1"
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h2>AI Recruiter</h2>
        </div>
        <div className="bg-white h-[400px] rounded-lg border flex  flex-col gap-3 items-center justify-center">
          <h2 className=" text-white text-2xl bg-primary p-2 rounded-full px-5 py-4" >
            {interviewInfo?.userName[0]}
          </h2>
          <h2 className=" text-black text-2xl" >
            {interviewInfo?.userName}
          </h2>
        </div>

      </div>
      <div className=" flex items-center gap-5 justify-center mt-5">
        <Mic className="h-12 w-12 p-3 bg-gray-500 text-white cursor-pointer rounded-full" />

        <AlertConfirmation stopInterviewCall={() => stopInterview()}>

          <Phone className="h-12 w-12 p-3 bg-red-500 text-white cursor-pointer rounded-full"

          />
        </AlertConfirmation>

      </div>
      <h2 className=" text-sm text-gray-400 text-center mt-5 ">Interview in Progress...</h2>
    </div>

  )
}

export default StartInterview