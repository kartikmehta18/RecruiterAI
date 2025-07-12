"use client"
import React from 'react'

import { useUser } from "../../../provider"
function Welcome() {
    const { user } = useUser();
    console.log(user);

    return (
        <div>
            <div className="p-5 rounded-xl bg-white w-full border flex justify-between items-center">
                <div className=" font-bold">Welcome Back,
                    <span className=" ml-2 italic font-caramel text-primary">{user?.name}👋</span>
                    <h2 className='text-gray-500 font-normal'>AI-driven Interviews, Hassel-Free Hiring</h2>
                </div>
                    <img   className="rounded-full "src={user?.picture} alt="userimg"
                    width={50} height={50}
                    />
            </div>



        </div>
    )
}

export default Welcome