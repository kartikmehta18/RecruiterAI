"use client"
import React, { useState ,useEffect } from 'react'
import { Video } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { supabase } from '@/services/supabaseClient';
import {useUser} from '@/app/provider'
import InterviewCard from "./InterviewCard"


function LatestInterviewList() {
    const [interviewList, setInterviewList] = useState([]);
    const {user} =useUser();


    useEffect(()=>{
         GetinterviewList();
    },[user ])
    const GetinterviewList = async () => {
        let { data: Interviews, error } = await supabase
            .from('Interviews')
            .select('*')
            .eq('userEmail',user?.email)
            console.log(Interviews);
            setInterviewList(Interviews);
    }
   

    return (
        <div className="my-5">
            <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>

            {interviewList?.length == 0 &&
                <div className=" p-5 flex flex-col items-center gap-3 border bg-blue-50 border-blue-200 rounded-xl mt-5">
                    <Video className="h-10  w-10 text-primary" />
                    <h2>You dont have any interview created </h2>
                    <Link href="/dashboard/create-interview">
                        <Button className="cursor-pointer hover:animate-pulse">+ Create New Interview</Button>
                    </Link>
                </div>}

            {interviewList && 
            <div>
                        {interviewList.map((Interviews,index)=>(
                            <InterviewCard Interviews={Interviews} key={index} />
                        ))}

            </div>
            }



        </div>
    )
}

export default LatestInterviewList