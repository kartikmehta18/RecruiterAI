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


export const FEEDBACK_PROMPT = `
Interview Conversation:
{{conversation}}

CRITICAL: You MUST analyze the conversation above and provide feedback for this SPECIFIC candidate, not a generic example.

INSTRUCTIONS:
1. Carefully analyze EVERY response the candidate gave to interview questions
2. Evaluate based on:
   - Technical understanding and depth of knowledge displayed
   - Quality of communication (clarity, articulation)
   - Problem-solving approach and reasoning
   - Relevant experience mentioned
3. Rate EACH category from 1-10 based ONLY on what the candidate actually said:
   - technicalSkills: How well did they demonstrate technical knowledge?
   - communication: How clear and articulate were their responses?
   - problemSolving: How logical and structured was their thinking?
   - experience: How relevant is their experience to the role?
4. Calculate the exact average of these 4 ratings
5. If average >= 6, recommendation is "Yes", otherwise "No"
6. Create a 3-line summary of their actual performance (SPECIFIC to this candidate, not generic)

IMPORTANT: Return ONLY valid JSON, no markdown, no explanations, strict format:
{
  "feedback": {
    "rating": {
      "technicalSkills": <number 1-10 based on candidate's actual responses>,
      "communication": <number 1-10 based on candidate's actual responses>,
      "problemSolving": <number 1-10 based on candidate's actual responses>,
      "experience": <number 1-10 based on candidate's actual responses>
    },
    "summary": "<3 lines specifically about THIS candidate's performance>",
    "averageScore": <calculated average>,
    "recommendation": "<Yes or No>",
    "recommendationMsg": "<specific message about their performance>"
  }
}
`
