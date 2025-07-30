import React from 'react'
import { Video, Phone } from 'lucide-react';
import Link from 'next/link';

function CreateOptions() {
  return (
    <div className='grid grid-cols-1 gap-10  lg:grid-cols-2 lg:gap-20 md:grid-cols-2 md:gap-20 xl:grid-cols-2 xl:gap-20  mt-5'>
      <Link href="/dashboard/create-interview">
        <div className='p-5 rounded-xl bg-white w-full border'>
          <Video className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
          <h2 className='font-bold' >Create New <span className='text-primary italic font-caramel'>Interview</span></h2>
          <p className="text-gray-500">Create AI Interview and schedule then with Candidates</p>
        </div>
      </Link>

      <div className='p-5 rounded-xl bg-white w-full border'>
        <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
        <h2 className='font-bold' >Create Phone Screening <span className='text-primary italic font-caramel'>Call</span></h2>
        <p className="text-gray-500"> Schedule Phone Screening with Candidates</p>

      </div>



    </div>
  )
}

export default CreateOptions