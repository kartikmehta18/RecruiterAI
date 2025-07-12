import { LayoutDashboard,
    Settings,
    WalletCards,
    List,
    Calender
 } from "lucide-react"

export const SideBarOptions =[
    {
        name:"Dashboard",
        icon:LayoutDashboard,
        path:"/dashboard",
    },
    {
        name:"Schedule Interview",
        icon:Calender,
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