"use client"

import React,{useEffect} from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Clock, Info, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient';

function Interview() {

    const { interview_id } = useParams();
    console.log(interview_id)

    useEffect(()=>{
    interview_id && GetInterviewDetails();
    },[interview_id])


    const GetInterviewDetails = async () => {

        let { data: Interviews, error } = await supabase
            .from('Interviews')
            .select("jobPosition,jobDescription,interviewDuration,types")
            .eq("interview_id",interview_id)
            console.log(Interviews)

    }


    return (
        <div className="px-10 md:px-28 lg:px-48 xl:px-80 mt-7">
            <div className="flex flex-col items-center justify-center lg:px-32 xl:px-52 mb-10  shadow border rounded-xl border-blue-100 p-7">
                <Image src={'/logo.png'} alt='logo' width={100} height={100}
                    className="w-[140px] mt-2 "
                />
                <h2 className="mt-3">AI-Powered Interview<span className=" italic font-caramel text-primary"> Platform</span></h2>

                <Image src={'/interview.webp'} alt='interview' width={500} height={500}
                    className="w-[280px] my-6"
                />

                <h2 className="font-bold text-xl">Full Stack Developer Interview</h2>
                <h2 className="flex gap-2 items-center  text-gray-500 mt-3"> <Clock className="h-4 w-4" /> 30 Minuts</h2>

                <div className="w-full p-2 ">
                    <h2 className="font-medium"> Enter your full name</h2>
                    <Input className="mt-2" placeholder='e.g kartik mehta' />
                </div>


                <div className="p-3 bg-blue-50 flex gap-4 rounded-ld m-4 ">
                    <Info className=" text-primary" />
                    <div className=" ">
                        <h2 className="font-bold"> Before you begin</h2>
                        <ul className="">
                            <li className="text-sm text-primary">Test your camera and microphone</li>
                            <li className="text-sm text-primary"> Ensure you have stable internet connections</li>
                            <li className="text-sm text-primary"> Find a Quite place for interview</li>
                        </ul>
                    </div>
                </div>
                <Button className="mt-5 w-full cursor-pointer font-bold"> <Video />Join Interview</Button>
            </div>
        </div>
    )
}

export default Interview