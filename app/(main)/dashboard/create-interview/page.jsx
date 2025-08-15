
// "use client";
// import React ,{useState} from 'react'
// import { Progress } from "@/components/ui/progress"
// import { ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";
// import FormContainer from './_components/FormContainer';
// function page() {
//     const router = useRouter();
//    const [step, setStep]= useState(1);
//    const [formData , setFormData]= useState();

//     const onHandleInputChange=(field, value)=>{
//         setFormData(prev=>({
//             ...prev,
//             [field]: value
//         }))
//         console.log(formData);
//     }

//     return (

//         <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
//             <div className="flex gap-5 item-center">
//                 <ArrowLeft onClick={()=>router.back()} className="mt-[6px] cursor-pointer hover:rotate-20 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
//                 <h2 className="font-bold text-2xl">Create New <span className="italic font-caramel text-primary"> Interview</span></h2>

//             </div>
//             <Progress value={step*33.33} className="my-5" />
//             <FormContainer onHandleInputChange={onHandleInputChange}/>
//         </div>
//     )
// }

// export default page

"use client";
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import { toast } from "sonner"
import InterviewLink from './_components/InterviewLink';
import {useUser} from "@/app/provider"


function Page() {
    const router = useRouter();
    const [step, setStep] = useState(1); /// remove this
    const [formData, setFormData] = useState({});
    const [interviewId, setInterviewId] = useState();
    const {user}=useUser()

    const onHandleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };





    useEffect(() => {
        // Increment step by 1 each time formData changes
        console.log(formData);  // Now the updated formData will be logged here after every change.
    }, [formData]);  // Will log every time formData changes


    const onGoToNext = () => {

        if(user?.credits<=0)
        {
            toast(" 0 credit left")
            return;
        }

        if (!formData?.jobPosition || !formData?.jobDescription || formData.duration || !formData?.types) {
            return toast("❌ Please enter alldetails");
        }
        setStep(step + 1);
        return toast("🚀 Lets go to next");
    }


    const onCreateLink = (interview_id) => {
        setInterviewId(interview_id);
        setStep(step + 1);
    }




    return (
        <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
            <div className="flex gap-5 item-center">
                <ArrowLeft onClick={() => router.back()} className="mt-[6px] cursor-pointer hover:rotate-20 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                <h2 className="font-bold text-2xl">Create New <span className="italic font-caramel text-primary"> Interview</span></h2>
            </div>
            <Progress value={step * 33.33} className="my-5" />
            {step == 1 ? <FormContainer onHandleInputChange={onHandleInputChange}
                GoToNext={() => onGoToNext()} />
                : step == 2 ?
                 <QuestionList formData={formData} onCreateLink={(interview_id) => onCreateLink()} /> : 
                 step == 3 ? 
                 <InterviewLink interview_id={interviewId}
                 fromData={formData}
                 /> : null}
        </div>
    );
}

export default Page;
