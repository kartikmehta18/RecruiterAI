'use client'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { supabase } from './../services/supabaseClient';
import UserDetailContext from '../context/UserDetailContext'

function Provider({ children }) {
 const[user, setUser]=useState();
    useEffect(() => {
        console.log("dev");
        CreateNewUser();
    }, [])


    const CreateNewUser = () => {

        supabase.auth.getUser().then(async ({ data: { user } }) => {

            //wanna check user is exist or not 
            let { data: Users, error } = await supabase
                .from('Users')
                .select("*")
                .eq('email', user.email);


            console.log(Users);

            if (Users?.length == 0) {
                const { data, error } = await supabase
                    .from('Users')
                    .insert([
                        {
                            name: user?.user_metadata?.name,
                            email: user?.email,
                            picture: user?.user_metadata?.picture,
                        },
                    ])
                console.log(data)
                setUser(data);
                return;
                // .select();
            }
            // if not then make new
            setUser(Users[0]);

        })
    }

    return (

        <UserDetailContext.Provider value={{user, setUser}}>
        <div>
            {children}
        </div>
        </UserDetailContext.Provider>
    )
}

export default Provider
// ✅ Custom hook to use context
export const useUser=()=>{
    const context=useContext(UserDetailContext);
    return context;
}
