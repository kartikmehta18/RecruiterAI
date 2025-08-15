"use client"
import React, { useEffect } from 'react'
import { useParams } from "next/navigation"
import { useUser } from "@/app/provider"
import { supabase } from '@/services/supabaseClient';
function InterviewDetails() {
    const { interview_id } = useParams();
    const { user } = useUser();
    useEffect(() => {
        user && GetInterviewDetails();
    }, [user])

    const GetInterviewDetails = async () => {
        const result = await supabase
            .from("Interviews")
            .select(
                "jobPosition, interviewDuration, interview_id, interview-feedback(userEmail)"
            ) // rename to your actual relation name
            .eq("userEmail", user?.email)
            .eq("interview_id", interview_id)
        console.log(result);
    }
    return (
        <div className="mt-5">
            <h2 className="font-bold text-2xl ">Interview Details</h2>
        </div>
    )
}

export default InterviewDetails