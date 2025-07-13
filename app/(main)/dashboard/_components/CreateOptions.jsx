import React from 'react'
import { Video ,Phone } from 'lucide-react';

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-20 mt-5'>

      <div className='p-5 rounded-xl bg-white w-full border'>
        <Video className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
        <h2 className='font-bold' >Create New <span className='text-primary italic font-caramel'>Interview</span></h2>
        <p className="text-gray-500">Create AI Interview and schedule then with Candidates</p>

      </div>
      <div className='p-5 rounded-xl bg-white w-full border'>
        <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
        <h2 className='font-bold' >Create Phone Screening <sapn className='text-primary italic font-caramel'>Call</sapn></h2>
        <p className="text-gray-500"> Schedule Phone Screening with Candidates</p>

      </div>



    </div>
  )
}

export default CreateOptions