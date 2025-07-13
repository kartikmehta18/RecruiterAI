"use client"
import React, { useState } from 'react'
import { Video } from 'lucide-react';
import { Button } from "@/components/ui/button";

function LatestInterviewList() {
    const [interviewList, setInterviewList] = useState([]);

    return (
        <div className="my-5">
            <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>

            {interviewList?.length == 0 &&
                <div className=" p-5 flex flex-col items-center gap-3 border bg-blue-50 border-blue-200 rounded-xl mt-5">
                    <Video className="h-10  w-10 text-primary" />
                    <h2>You dont have any interview created </h2>
                    <Button>+ Create ew Interview</Button>
                </div>}



        </div>
    )
}

export default LatestInterviewList