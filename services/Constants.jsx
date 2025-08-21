// import { LayoutDashboard,
//     Settings,
//     WalletCards,
//     List,
//     Calender
//  } from "lucide-react"

import { LayoutDashboard, Settings, WalletCards, List, Component, Calendar, Puzzle, User2Icon, Code2Icon, BriefcaseBusinessIcon } from 'lucide-react';


export const SideBarOptions = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        name: "Schedule Interview",
        icon: Calendar,
        path: "/schedule-interview",
    },
    {
        name: "All Interview",
        icon: List,
        path: "/all-interview",
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: "/billings",
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/settings",
    },
]

export const InterviewType = [
    {
        title: "Technical",
        icon: Code2Icon
    },
    {
        title: "Behavioral",
        icon: User2Icon
    },
    {
        title: "Experience",
        icon: BriefcaseBusinessIcon
    },
    {
        title: "Problem Solving",
        icon: Puzzle
    },
    {
        title: "Leadership",
        icon: Component
    },

]





export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}
Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depending on interview duration.
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type}} interview.
Format your response in JSON format with an array list of questions.
Example format:
interviewQuestions = [
  {
    question: "",
    type: 'Technical/Behavioral/Experience/Problem Solving/Leadership'
  },
  {
    ...
  }
]

The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`;


export const FEEDBACK_PROMPT = `{{conversation}}
Depends on this Interview Conversation between assistant and user,
Give me feedback for user interview. Give me rating out of 10 for technical Skills,
Communication, Problem Solving, Experience. Also give me summery in 3 lines
about the interview and one line to let me know whether is recommanded
for hire or not with msg. Give me response in JSON format
{
   feedback:{
      rating:{
         techicalSkills:5,
         communication:6,
         problemSolving:4,
         experince:7
      },
      summery:<in 3 Line>,
      Recommendation:"" (in "Yes/No") ,
      RecommendationMsg:""
   }
}`
