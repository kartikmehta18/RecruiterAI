// import { LayoutDashboard,
//     Settings,
//     WalletCards,
//     List,
//     Calender
//  } from "lucide-react"

import { LayoutDashboard, Settings, WalletCards, List,Component ,Calendar,Puzzle,User2Icon ,Code2Icon, BriefcaseBusinessIcon} from 'lucide-react';


export const SideBarOptions =[
    {
        name:"Dashboard",
        icon:LayoutDashboard,
        path:"/dashboard",
    },
    {
        name:"Schedule Interview",
        icon:Calendar,
        path:"/schedule-interview",
    },
    {
        name:"All Interview",
        icon:List,
        path:"/all-interview",
    },
    {
        name:"Billing",
        icon:WalletCards,
        path:"/billings",
    },
    {
        name:"Settings",
        icon:Settings,
        path:"/settings",
    },
]

export const InterviewType=[
    {
        title:"Technical",
        icon:Code2Icon
    },
    {
        title:"Behavioral",
        icon:User2Icon
    },
    {
        title:"Experience",
        icon:BriefcaseBusinessIcon
    },
    {
        title:"Problem Solving",
        icon:Puzzle
    },
    {
        title:"Leadership",
        icon:Component
    },
    
]