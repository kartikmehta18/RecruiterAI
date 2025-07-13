"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import Link from "next/link"; // Make sure to import Link
import { SideBarOptions } from "@/services/Constants";
import {usePathname } from "next/navigation"

export function AppSidebar() {

const path = usePathname();
console.log(path);

    return (
        <Sidebar>
            <SidebarHeader className="flex items-center mt-5 flex-col">
                <img src={'/logo.png'} alt='logo' width={200} height={100} className='w-[150px]' />

                <Button className="w-full mt-5 cursor-pointer">
                    <Plus />
                    Create New Interview
                </Button>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {SideBarOptions.map((option, index) => (
                            <SidebarMenuItem key={index} className="p-1">
                                <SidebarMenuButton asChild  className={`p-5 ${path== option.path &&'bg-blue-50'}`}>
                                    <Link href={option.path}>
                                        <div className="flex items-center gap-2">

                                            <option.icon className={` ${path== option.path &&'text-primary'}`} />
                                            <span className={`text-[16px]  ${path== option.path &&'text-primary'}`}>{option.name}</span>
                                        </div>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    );
}
