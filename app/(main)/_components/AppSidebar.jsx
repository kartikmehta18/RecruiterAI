import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import {Plus}  from 'lucide-react';
import SideBarOptions from "@/services/Constants"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="flex items-center mt-5">
                <img src={'./logo.png'} alt='logo' width={200} height={100}
                    className='w-[150px]' />

                <Button
                className="w-full mt-5"
                >
                    <Plus />
                    Create New Interview
                </Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup >
                     <SidebarContent>
                        <SidebarMenu>
                            {SideBarOptions.map(()=>{

                            })}
                        </SidebarMenu>
                         </SidebarContent>
                </SidebarGroup >
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}