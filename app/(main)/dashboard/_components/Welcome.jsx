
"use client"
import React from 'react'
import { useUser } from "../../../provider"

function Welcome() {
    const { user, loading } = useUser(); // Assuming your provider has a loading state
    console.log(user);

    // Skeleton loader component
    const WelcomeSkeleton = () => (
        <div className="p-5 rounded-xl bg-white w-full border flex justify-between items-center">
            <div className="flex-1">
                <div className="flex items-center mb-2">
                    <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-24 ml-2 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
    );

    // Show skeleton while loading or if user data is not available
    if (loading || !user) {
        return (
            <div>
                <WelcomeSkeleton />
            </div>
        );
    }

    // Render actual component when data is loaded
    return (
        <div>
            <div className="p-5 rounded-xl bg-white w-full border flex justify-between items-center">
                <div className="font-bold">
                    Welcome Back,
                    <span className="ml-2 italic font-caramel text-primary">{user?.name}👋</span>
                    <h2 className='text-gray-500 font-normal'>AI-driven Interviews, Hassel-Free Hiring</h2>
                </div>
                <img 
                    className="rounded-full"
                    src={user?.picture} 
                    alt="userimg"
                    width={50} 
                    height={50}
                />
            </div>
        </div>
    );
}

export default Welcome