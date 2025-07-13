
"use client";
import React ,{useState} from 'react'
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import FormContainer from './_components/FormContainer';
function page() {
    const router = useRouter();
   const [step, setStep]= useState(1);
   const [formData , setFormData]= useState();

    const onHandleInputChange=(field, value)=>{
        setFormData(prev=>({
            ...prev,
            [field]: value
        }))
        console.log(formData);
    }

    return (
    
        <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
            <div className="flex gap-5 item-center">
                <ArrowLeft onClick={()=>router.back()} className="mt-[6px] cursor-pointer hover:rotate-20 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                <h2 className="font-bold text-2xl">Create New <span className="italic font-caramel text-primary"> Interview</span></h2>
                
            </div>
            <Progress value={step*33.33} className="my-5" />
            <FormContainer onHandleInputChange={onHandleInputChange}/>
        </div>
    )
}

export default page