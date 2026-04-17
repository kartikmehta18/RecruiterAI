"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Mic, Phone } from "lucide-react";
import Image from "next/image";
import Vapi from "@vapi-ai/web";
import AlertConfirmation from "./_components/AlertConfirmation";
import TimerComponent from "./_components/TimerCmponent";
import { toast } from "sonner";
import axios from "axios";
import { supabase } from "@/services/supabaseClient";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);

  const vapiRef = useRef(null);
  const startedRef = useRef(false);
  const conversationRef = useRef(null);

  const [activeUser, setActiveUser] = useState(false);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [conversation, setConversation] = useState([]);

  const { interview_id } = useParams();
  const router = useRouter();

  /* =========================
     SYNC CONVERSATION REF
  ==========================*/
  useEffect(() => {
    conversationRef.current = conversation;
  }, [conversation]);

  /* =========================
     INITIALIZE VAPI
  ==========================*/
  useEffect(() => {
    if (!interviewInfo?.interviewData) return;
    if (startedRef.current) return;

    startedRef.current = true;

    const apiKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (!apiKey) {
      console.error("VAPI_PUBLIC_KEY is not configured");
      toast.error("❌ Voice service not configured. Please contact support.");
      return;
    }

    vapiRef.current = new Vapi(apiKey);
    const vapi = vapiRef.current;

    vapi.on("call-start", () => {
      console.log("Call started");
      toast("🚀 Interview Started");
      setActiveUser(false);
      setIsInterviewActive(true);
    });

    vapi.on("call-end", () => {
      console.log("Call ended");
      toast("✅ Interview Ended");
      setActiveUser(true);
      setIsInterviewActive(false);
      // Use ref to get latest conversation
      if (conversationRef.current) {
        GenerateFeedback(conversationRef.current);
      }
    });

    vapi.on("message", (message) => {
      if (message?.conversation) {
        setConversation(message.conversation);
      }
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      toast.error("❌ Interview Error");
      setIsInterviewActive(false);
      setActiveUser(true);
    });

    return () => {
      if (vapi) {
        try {
          vapi.stop();
        } catch (e) {
          console.log("Vapi already stopped");
        }
      }
    };
  }, [interviewInfo]);

  /* =========================
     START CALL
  ==========================*/
  const startCall = () => {
    const vapi = vapiRef.current;
    if (!vapi) return;

    if (!interviewInfo?.interviewData?.questionList) {
      toast.error("❌ Interview data missing");
      return;
    }

    let questionList = "";
    (interviewInfo?.interviewData?.questionList || []).forEach((q) => {
      questionList += q.question + ", ";
    });

    const overrides = {
      firstMessage: `Hi ${interviewInfo?.userName}, ready for your interview for ${interviewInfo?.interviewData?.jobPosition}?`,

      model: {
        provider: "openai",
        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",
            content: `
You are an AI voice assistant conducting interviews.

Candidate Name:
${interviewInfo?.userName}

Job Role:
${interviewInfo?.interviewData?.jobPosition}

Ask the following questions one by one:
${questionList}

Instructions:
- Ask one question at a time
- Wait for candidate answer
- Give short feedback
- Be friendly and natural
- After all questions give summary
- End interview politely
            `.trim(),
          },
        ],
      },
    };

    vapi.start("1aac1b57-4f8f-47e6-a9cf-a4d32741f15d", overrides);
  };

  /* =========================
     STOP INTERVIEW
  ==========================*/
  const stopInterview = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  /* =========================
     GENERATE FEEDBACK
  ==========================*/
  const GenerateFeedback = async (conversationData) => {
    if (!conversationData || conversationData.length === 0) {
      console.error("No conversation data available");
      toast.error("❌ No conversation data to generate feedback");
      return;
    }

    try {
      toast("⏳ Generating genuine feedback...");
      console.log("Conversation data for feedback:", conversationData);

      const result = await axios.post("/api/ai-feedback", {
        conversation: conversationData,
      });

      let content = result.data.content;

      // Clean up the content - remove markdown code blocks
      content = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

      console.log("Raw AI response:", content);

      const parsedFeedback = JSON.parse(content);
      console.log("Parsed feedback:", parsedFeedback);

      // Extract feedback data
      const feedbackData = parsedFeedback.feedback || parsedFeedback;

      // Calculate average score if not already provided
      let averageScore = feedbackData.averageScore;
      if (!averageScore && feedbackData.rating) {
        const scores = Object.values(feedbackData.rating).filter(v => typeof v === 'number');
        averageScore = Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10;
      }

      // Determine recommendation based on average score (>= 60% = recommended, < 60% = not)
      const isRecommended = averageScore >= 6; // 60 out of 100 = 6 out of 10
      const recommendationMsg = isRecommended
        ? `Strong candidate - Average Score: ${averageScore}/10`
        : `Needs improvement - Average Score: ${averageScore}/10`;

      console.log("Average Score:", averageScore, "Recommended:", isRecommended);

      // Prepare final feedback object
      const finalFeedback = {
        ...feedbackData,
        averageScore: averageScore,
        recommendation: isRecommended ? "Yes" : "No",
        recommendationMsg: recommendationMsg,
      };

      // Save to Supabase
      const { data, error } = await supabase
        .from("interview-feedback")
        .insert([
          {
            userName: interviewInfo?.userName,
            userEmail: interviewInfo?.userEmail,
            interview_id: interview_id,
            feedback: finalFeedback,
            recommended: isRecommended,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        toast.error("❌ Failed to save feedback");
        return;
      }

      console.log("Feedback saved successfully:", data);
      toast.success("✅ Feedback Generated Successfully");

      // Redirect to completed page
      setTimeout(() => {
        router.replace(`/interview/${interview_id}/completed`);
      }, 1500);
    } catch (err) {
      console.error("Feedback generation failed:", err);
      toast.error("❌ Failed to generate feedback");
    }
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between items-center">
        AI Interview Session
        <TimerComponent isInterviewActive={isInterviewActive} />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        {/* AI Recruiter */}
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <div className="relative">
            {activeUser && (
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping" />
            )}

            <Image
              src="/ai.webp"
              alt="ai"
              width={100}
              height={100}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
          </div>

          <h2>AI Recruiter</h2>
        </div>

        {/* User */}
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <div className="relative">
            {!activeUser && (
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping" />
            )}

            <h2 className="text-white text-2xl bg-primary p-2 rounded-full px-5 py-4">
              {interviewInfo?.userName?.[0]}
            </h2>
          </div>

          <h2 className="text-black text-2xl">
            {interviewInfo?.userName}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-5 justify-center mt-5">
        <Mic
          className="h-12 w-12 p-3 bg-gray-500 text-white cursor-pointer rounded-full hover:bg-gray-600"
          onClick={startCall}
        />

        <AlertConfirmation stopInterviewCall={stopInterview}>
          <Phone className="h-12 w-12 p-3 bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600" />
        </AlertConfirmation>
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-5">
        {isInterviewActive ? "Interview in Progress..." : "Click mic icon to start interview"}
      </h2>
    </div>
  );
}

export default StartInterview;
