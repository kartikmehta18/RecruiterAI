
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


function Page() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

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
        if (!formData?.jobPosition || !formData?.jobDescription || formData.duration || !formData?.types) {
            return toast("❌ Please enter alldetails");
        }
        setStep(step + 1);
        return toast("🚀 Lets go to next");
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
                : step == 2 ? <QuestionList formData={formData}/> : null}
        </div>
    );
}

export default Page;
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Progress } from "@/components/ui/progress";
// import { ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";
// import FormContainer from './_components/FormContainer';

// function Page() {
//     const router = useRouter();
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({});

//     const onHandleInputChange = (field, value) => {
//         setFormData((prev) => ({
//             ...prev,
//             [field]: value
//         }));
//     };

//     // Update step based on formData
//     useEffect(() => {
//         // You can decide when to increment step, for example when all required fields are filled
//         if (formData.jobPosition) {
//             setStep(2);  // Increment step based on form data
//         }
//         if ( formData.jobDescription) {
//             setStep(3);  // Increment step based on form data
//         }
//         if ( formData.types) {
//             setStep(4);  // Increment step based on form data
//         }

//         console.log(formData);  // Logs updated formData after each change
//     }, [formData]);  // Will trigger when formData changes

//     return (
//         <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
//             <div className="flex gap-5 item-center">
//                 <ArrowLeft onClick={() => router.back()} className="mt-[6px] cursor-pointer hover:rotate-20 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
//                 <h2 className="font-bold text-2xl">Create New <span className="italic font-caramel text-primary"> Interview</span></h2>
//             </div>
//             <Progress value={step * 33.33} className="my-5" />
//             <FormContainer onHandleInputChange={onHandleInputChange} />
//         </div>
//     );
// }

// export default Page;
