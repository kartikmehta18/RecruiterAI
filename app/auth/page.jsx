"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { supabase } from './../../services/supabaseClient';



function login() {
  //use for sign in with google 
  const asyncsignInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })

    if (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col  items-center justify-center h-screen '>
      <div className='flex flex-col items-center justify-center gap-4  rounded-2xl border p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
        <img src={'/logo.png'} alt='logo' width={180} height={180}
          className='w-[180px]' />

        <div className='flex items-center flex-col'>
          <img src={'./login.png'} alt='logo' width={600} height={400}
            className='w-[400px] h-[250px] rounded-2xl' />
          <h1 className='text-2xl font-bold text-center mt-5'>Login to RecruiterAi</h1>
          <p className='text-gray-500 text-center'>Your AI-powered recruitment assistant</p>
          <Button
            onClick={asyncsignInWithGoogle}
            className=" mt-7 w-full bg-gray-950 cursor-pointer ">Login with google  <img className='h-[30px]' src={'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'} /> </Button>
        </div>

      </div>

    </div>
  )
}

export default login
  ;