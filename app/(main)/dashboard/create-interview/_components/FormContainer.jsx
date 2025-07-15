// import React, { useState, useEffect } from 'react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/Button"
// import { Textarea } from "@/components/ui/textarea"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { InterviewType } from "@/services/Constants"
// import { Sparkles } from "lucide-react"


// function FormContainer({ onHandleInputChange }) {
//     const [selectedType, setSelectedType] = useState('');  // Change to single string instead of array

//     const handleInterviewTypeChange = (type) => {
//         const newType = selectedType === type ? '' : type;  // Toggle selection
//         setSelectedType(newType);
//         onHandleInputChange("type", newType);  // Send single type instead of array
//     };

//     return (
//         <div className="p-5 bg-white rounded-lg border">
//             <div>
//                 <h2 className="text-sm font-medium">Job Position</h2>
//                 <Input
//                     onChange={(event) => onHandleInputChange("jobPosition", event.target.value)}
//                     placeholder="Enter job position"
//                     className="mt-2 border border-blue-100" />
//             </div>
//             <div className="mt-5">
//                 <h2 className="text-sm font-medium">Job Description</h2>
//                 <Textarea
//                     onChange={(event) => onHandleInputChange("jobDescription", event.target.value)}
//                     className="mt-2 border border-blue-100 h-[200px]"
//                     placeholder="Enter detailed job description"
//                 />
//             </div>
//             <div className="mt-5">
//                 <h2 className="text-sm font-medium">Interview Duration</h2>
//                 <Select onValueChange={(value) => {
//                     const duration = parseInt(value);
//                     onHandleInputChange("interviewDuration", isNaN(duration) ? value : duration);
//                 }}>
//                     <SelectTrigger className="w-full mt-2 border border-blue-100">
//                         <SelectValue placeholder="Select Duration" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="5">5 Min</SelectItem>
//                         <SelectItem value="15">15 Min</SelectItem>
//                         <SelectItem value="30">30 Min</SelectItem>
//                         <SelectItem value="45">45 Min</SelectItem>
//                         <SelectItem value="60">60 Min</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>
//             <div className="mt-5">
//                 <h2 className="text-sm font-medium">Interview Type</h2>
//                 <div className="flex gap-3 mt-2 flex-wrap">
//                     {InterviewType.map((type, index) => (
//                         <div 
//                             key={index} 
//                             className={`flex gap-2 cursor-pointer p-1 px-2 bg-white border border-blue-100 rounded-2xl hover:bg-secondary ${
//                                 selectedType === type.title ? ' border-blue-500 ' : ''
//                             }`}
//                             onClick={() => handleInterviewTypeChange(type.title)}
//                         >
//                             <type.icon className="w-6 h-6 text-primary" />
//                             <span className="ml-2">{type.title}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="mt-5 cursor-pointer flex justify-end">
//                 <Button >Generate Questions <Sparkles /></Button>
//             </div>
//         </div>
//     )
// }

// export default FormContainer

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InterviewType } from "@/services/Constants";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

function FormContainer({ onHandleInputChange ,GoToNext }) {
    const [selectedTypes, setSelectedTypes] = useState([]);  // Using array for multiple selections

    // Toggle interview type selection
    const handleInterviewTypeChange = (type) => {
        setSelectedTypes((prev) => {
            const newTypes = prev.includes(type) 
                ? prev.filter((t) => t !== type)  // Remove type
                : [...prev, type];  // Add type

            // Update parent state with new selection
            onHandleInputChange("types", newTypes);
            return newTypes;  // Return the updated array to set the new state
        });
    };

    // UseEffect to log form data in the parent whenever it changes
    useEffect(() => {
        console.log(selectedTypes); // This will log selected types in console after each change
    }, [selectedTypes]); // This will trigger whenever selectedTypes changes

    return (
        <div className="p-5 bg-white rounded-lg border">
            <div>
                <h2 className="text-sm font-medium">Job Position</h2>
                <Input
                    onChange={(event) => onHandleInputChange("jobPosition", event.target.value)}
                    placeholder="Enter job position"
                    className="mt-2 border border-blue-100"
                />
            </div>
            <div className="mt-5">
                <h2 className="text-sm font-medium">Job Description</h2>
                <Textarea
                    onChange={(event) => onHandleInputChange("jobDescription", event.target.value)}
                    className="mt-2 border border-blue-100 h-[200px]"
                    placeholder="Enter detailed job description"
                />
            </div>
            <div className="mt-5">
                <h2 className="text-sm font-medium">Interview Duration</h2>
                <Select onValueChange={(value) => {
                    const duration = parseInt(value);
                    onHandleInputChange("interviewDuration", isNaN(duration) ? value : duration);
                }}>
                    <SelectTrigger className="w-full mt-2 border border-blue-100">
                        <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5">5 Min</SelectItem>
                        <SelectItem value="15">15 Min</SelectItem>
                        <SelectItem value="30">30 Min</SelectItem>
                        <SelectItem value="45">45 Min</SelectItem>
                        <SelectItem value="60">60 Min</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-5">
                <h2 className="text-sm font-medium">Interview Type</h2>
                <div className="flex gap-3 mt-2 flex-wrap">
                    {InterviewType.map((type, index) => (
                        <div
                            key={index}
                            className={`flex gap-2 cursor-pointer p-1 px-2 bg-white border border-blue-100 rounded-2xl hover:bg-secondary ${selectedTypes.includes(type.title) ? 'border-blue-500' : ''}`}
                            onClick={() => handleInterviewTypeChange(type.title)}
                        >
                            <type.icon className="w-6 h-6 text-primary" />
                            <span className="ml-2">{type.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-5 cursor-pointer flex justify-end">
                <Button onClick={()=>GoToNext()} >Generate Questions <Sparkles /></Button>
            </div>
        </div>
    );
}

export default FormContainer;
