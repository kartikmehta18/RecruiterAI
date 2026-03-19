// "use client"
// import React, { useContext, useEffect, useState } from 'react'
// import { InterviewDataContext } from '@/context/InterviewDataContext'
// import { Timer, Mic, Phone } from "lucide-react"
// import Image from "next/image"
// import Vapi from '@vapi-ai/web';
// import AlertConfirmation from './_components/AlertConfirmation';
// import TimerComponent from './_components/TimerCmponent';
// import { toast } from 'sonner';
// import { axios } from 'axios'



// function StartInterview() {
//   const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
//   const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   const [activeUser, setActiveUser] = useState(false);
//   const [isInterviewActive, setIsInterviewActive] = useState(false);
//   const [conversation, setConversation] = useState();


//   useEffect(() => {
//     // startCall();
//   }, [])

//   const startCall = () => {
//     let questionList;
//     interviewInfo?.interviewData?.questionList.forEach((item, inedx) => {
//       questionList = item?.question + ',' + questionList
//     })


//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: "Hi" + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition + "?",
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
// You are an AI voice assistant conducting interviews.
// Your job is to ask candidates provided interview questions, assess their responses.
// Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
// "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let’s get started with a few questions!"
// Ask one question at a time and wait for the candidate’s response before proceeding. Keep the questions clear and concise. Below Are the questions ask one by one:
// Questions: `+ questionList + `
// If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
// "Need a hint? Think about how React tracks component updates!"
// Provide brief, encouraging feedback after each answer. Example:
// "Nice! That’s a solid answer."
// "Hmm, not quite! Want to try again?"
// Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
// After 5–7 questions, wrap up the interview smoothly by summarizing their performance. Example:
// "That was great! You handled some tough questions well. Keep sharpening your skills!"
// End on a positive note:
// "Thanks for chatting! Hope to see you crushing projects soon!"

// Key Guidelines:
// ✅ Be friendly, engaging, and witty ✏️
// ✅ Keep responses short and natural, like a real conversation
// ✅ Adapt based on the candidate’s confidence level
// ✅ Ensure the interview remains focused on React
//         `.trim(),
//           },
//         ],
//       },
//     };


//     vapi.start(assistantOptions);
//     console.log(questionList);
//   }


//   const stopInterview = () => {
//     vapi.stop()
//   }

//   vapi.on('call-start', () => {
//     console.log('Call started');
//     toast("🚀 Interview Started");
//     setActiveUser(false);
//     setIsInterviewActive(true);
//   });

//   vapi.on('call-end', () => {
//     console.log('Call ended');
//     toast("🚀 Interview Ended");
//     GenerateFeedback();
//     setActiveUser(true);
//     setIsInterviewActive(false);

//   });

//   vapi.on('message', (message) => {
//     // if (message.type === 'transcript') {
//     //   console.log(`${message.role}: ${message.transcript}`);
//     // }
//     console.log(message?.conversation);
//     setConversation(message?.conversation);
//   });

//   const GenerateFeedback = async () => {

//     const result = await axios.post('/api/ai-feedback', {
//       conversation: conversation
//     });
//     console.log(result?.data);
//     const Content = result.data.content;
//     const FINAL_CONTENT = Content.replace('```json', '').replace('```', '');
//     console.log(FINAL_CONTENT);
//   }


//   return (
//     <div className="p-20 lg:px-48 xl:px-56">
//       <h2 className='font-bold text-xl flex justify-between items-center'>
//         AI Interview Session
//         <div className="flex gap-2 items-center">
//           <TimerComponent isInterviewActive={isInterviewActive} />
//         </div>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5  ">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <div className='relative'>
//             {!activeUser && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping" />}
//             <Image src={"/ai.webp"} alt="1"
//               width={100}
//               height={100}
//               className="w-[60px] h-[60px] rounded-full object-cover"
//             />

//           </div>
//           <h2>AI Recruiter</h2>
//         </div>
//         <div className="bg-white h-[400px] rounded-lg border flex  flex-col gap-3 items-center justify-center">
//           <div className='relative'>

//             {!activeUser && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping" />}
//             <h2 className=" text-white text-2xl bg-primary p-2 rounded-full px-5 py-4" >
//               {interviewInfo?.userName[0]}
//             </h2>
//           </div>
//           <h2 className=" text-black text-2xl" >
//             {interviewInfo?.userName}
//           </h2>
//         </div>

//       </div>
//       <div className=" flex items-center gap-5 justify-center mt-5">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white cursor-pointer rounded-full" />

//         <AlertConfirmation stopInterviewCall={() => stopInterview()}>

//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white cursor-pointer rounded-full"

//           />
//         </AlertConfirmation>

//       </div>
//       <h2 className=" text-sm text-gray-400 text-center mt-5 ">Interview in Progress...</h2>
//     </div>

//   )
// }

// export default StartInterview
"use client";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { InterviewDataContext } from '@/context/InterviewDataContext';
import { Timer, Mic, Phone } from "lucide-react";
import Image from "next/image";
import Vapi from '@vapi-ai/web';
import AlertConfirmation from './_components/AlertConfirmation';
import TimerComponent from './_components/TimerCmponent';
import { toast } from 'sonner';
import axios from 'axios';
import { supabase } from './../../../../services/supabaseClient';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);
  const vapiRef = useRef(null);
  const [activeUser, setActiveUser] = useState(false);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [conversation, setConversation] = useState(null);
  const conversationRef = useRef(null);
  const { interview_id } = useParams();
  const router = useRouter();

  // Keep conversationRef in sync with state
  useEffect(() => {
    conversationRef.current = conversation;
  }, [conversation]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;

    if (!apiKey) {
      console.error("VAPI_PUBLIC_KEY is not configured");
      toast.error("❌ Voice service not configured. Please contact support.");
      return;
    }

    console.log("Initializing Vapi with key:", apiKey.substring(0, 8) + "...");
    vapiRef.current = new Vapi(apiKey);

    const vapi = vapiRef.current;

    vapi.on('call-start', () => {
      console.log('Call started');
      toast("🚀 Interview Started");
      setActiveUser(false);
      setIsInterviewActive(true);
    });

    vapi.on('call-end', () => {
      console.log('Call ended');
      toast("✅ Interview Ended");
      setActiveUser(true);
      setIsInterviewActive(false);
      // Use ref to get latest conversation
      if (conversationRef.current) {
        GenerateFeedback(conversationRef.current);
      }
    });

    vapi.on('speech-start', () => {
      console.log('AI speaking');
      setActiveUser(false);
    });

    vapi.on('speech-end', () => {
      console.log('AI stopped speaking');
      setActiveUser(true);
    });

    vapi.on('message', (message) => {
      console.log('Message received:', message);

      // Handle transcript messages (conversation updates)
      if (message?.type === 'transcript') {
        console.log(`${message?.role}: ${message?.transcript}`);
        // Conversation is stored in context after each message
      }

      // Handle status updates
      if (message?.type === 'status-update') {
        console.log('Status update:', message?.status, message?.endedReason);

        if (message?.status === 'in-progress') {
          console.log('Interview initializing...');
        } else if (message?.status === 'ended') {
          const endReasons = {
            'pipeline-error-playht-request-timed-out': 'Voice service timeout',
            'pipeline-error-deepgram-request-timed-out': 'Speech recognition timeout',
            'pipeline-error-openai-request-timed-out': 'AI processing timeout',
            'backend-connection-lost': 'Connection lost',
            'max-duration-exceeded': 'Interview time limit exceeded',
          };
          const reason = endReasons[message?.endedReason] || message?.endedReason || 'Unknown reason';
          console.error('Interview ended:', reason);
          toast.error(`⚠️ Interview ended: ${reason}`);
        }
      }

      // Store conversation data if available
      if (message?.conversation) {
        console.log('Updating conversation:', message.conversation);
        setConversation(message.conversation);
      }
    });

    vapi.on('error', (error) => {
      console.error('Vapi Error:', error);

      let errorMessage = 'Interview Error';

      // Parse different error formats
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (error?.error?.message) {
        errorMessage = error.error.message;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.errorMsg) {
        errorMessage = error.errorMsg;
      } else if (error instanceof Response) {
        errorMessage = `API Error: ${error.status} ${error.statusText}`;
      } else if (typeof error === 'object') {
        errorMessage = JSON.stringify(error).slice(0, 100);
      }

      console.error('Parsed error message:', errorMessage);
      toast.error(`❌ ${errorMessage}`);
      setIsInterviewActive(false);
      setActiveUser(true);
    });

    return () => {
      if (vapi) {
        vapi.removeAllListeners();
        try {
          vapi.stop();
        } catch (e) {
          console.log("Vapi already stopped");
        }
      }
    };
  }, []);

  const startCall = () => {
    if (!interviewInfo?.interviewData?.questionList) {
      toast.error("❌ Interview data missing");
      return;
    }

    if (!vapiRef.current) {
      toast.error("❌ Voice system not initialized");
      return;
    }

    const questionList = interviewInfo?.interviewData?.questionList
      ?.map((item) => `- ${item?.question}`)
      .join("\n");

    // Complete assistant configuration for Vapi
    const assistantConfig = {
      name: "AI Recruiter",
      firstMessage: `Hi ${interviewInfo?.userName}, ready for your ${interviewInfo?.interviewData?.jobPosition} interview?`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "google",
        voiceId: "en-US-Standard-A",
      },
      model: {
        provider: "openai",
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content: `You are an AI recruiter. Ask these interview questions one by one, wait for responses, and provide feedback.\n\nQuestions:\n${questionList}`,
          },
        ],
      },
    };

    console.log("Starting call with config:", assistantConfig);

    vapiRef.current
      .start(assistantConfig)
      .then(() => {
        console.log("Call started successfully");
      })
      .catch((err) => {
        console.error("Failed to start call - Full error:", err);

        let errorMsg = "Failed to start interview";

        // Try to extract detailed error message
        if (err?.error?.error?.message?.[0]) {
          errorMsg = err.error.error.message[0];
        } else if (err?.error?.message?.[0]) {
          errorMsg = err.error.message[0];
        } else if (err?.message) {
          errorMsg = err.message;
        }

        console.error("Extracted error:", errorMsg);
        toast.error(`❌ ${errorMsg}`);
        setIsInterviewActive(false);
      });
  };

  const stopInterview = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  const GenerateFeedback = async (conversationData) => {
    if (!conversationData) {
      console.error("No conversation data available");
      toast.error("❌ No conversation data to generate feedback");
      return;
    }

    try {
      toast("⏳ Generating feedback...");
      const result = await axios.post('/api/ai-feedback', {
        conversation: conversationData
      });
      const Content = result.data.content;
      const FINAL_CONTENT = Content.replace('```json', '').replace('```', '');
      console.log("Feedback:", FINAL_CONTENT);

      const { data, error } = await supabase
        .from("interview-feedback")
        .insert([{
          userName: interviewInfo?.userName,
          userEmail: interviewInfo?.userEmail,
          interview_id: interview_id,
          feedback: JSON.parse(FINAL_CONTENT),
          recommended: false
        }])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        toast.error("❌ Failed to save feedback");
        return;
      }

      console.log("Feedback saved:", data);
      toast.success("✅ Feedback Generated Successfully");
      router.replace('/interview/' + interview_id + '/completed');
    } catch (err) {
      console.error("Feedback generation failed:", err);
      toast.error("❌ Failed to generate feedback");
    }
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className='font-bold text-xl flex justify-between items-center'>
        AI Interview Session
        <div className="flex gap-2 items-center">
          <TimerComponent isInterviewActive={isInterviewActive} />
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        {/* AI Recruiter */}
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <div className='relative'>
            {!activeUser && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping" />}
            <Image
              src={"/ai.webp"}
              alt="AI"
              width={100}
              height={100}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
          </div>
          <h2>AI Recruiter</h2>
        </div>

        {/* User */}
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <div className='relative'>
            {!activeUser && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping" />}
            <h2 className="text-white text-2xl bg-primary p-2 rounded-full px-5 py-4">
              {interviewInfo?.userName?.[0]}
            </h2>
          </div>
          <h2 className="text-black text-2xl">
            {interviewInfo?.userName}
          </h2>
        </div>
      </div>

      {/* Call Controls */}
      <div className="flex items-center gap-5 justify-center mt-5">
        <Mic
          className="h-12 w-12 p-3 bg-gray-500 text-white cursor-pointer rounded-full"
          onClick={startCall}
        />
        <AlertConfirmation stopInterviewCall={stopInterview}>
          <Phone className="h-12 w-12 p-3 bg-red-500 text-white cursor-pointer rounded-full" />
        </AlertConfirmation>
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-5">
        Interview {isInterviewActive ? "in Progress..." : "Ready to Start"}
      </h2>
    </div>
  );
}

export default StartInterview;
