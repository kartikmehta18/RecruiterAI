"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import { useUser } from "@/app/provider"
import { supabase } from '@/services/supabaseClient';
import InterviewDetail from './_components/InterviewDetail';
import CandidateList from './_components/CandidateList';
function InterviewDetails() {
    const { interview_id } = useParams();
    const { user } = useUser();
    const [interviewDetail,setInterviewDetail]=useState();
    useEffect(() => {
        user && GetInterviewDetails();
    }, [user])

    const GetInterviewDetails = async () => {
        const result = await supabase
            .from("Interviews")
            .select(
                "jobPosition,types,jobDescription,questionList,created_at,interviewDuration, interview_id, interview-feedback(userEmail,userName,feedback,created_at)"
            ) // rename to your actual relation name
            .eq("userEmail", user?.email)
            .eq("interview_id", interview_id)
        console.log(result);
        setInterviewDetail(result?.data[0]);
    }
    return (
        <div className="mt-5">
            <h2 className="font-bold text-2xl ">Interview Details</h2>
            <InterviewDetail  interviewDetail={interviewDetail} />
            <CandidateList detail={interviewDetail?.['interview-feedback']}/>
        </div>
    )
}

export default InterviewDetails