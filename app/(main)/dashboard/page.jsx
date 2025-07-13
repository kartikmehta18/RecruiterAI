import React from 'react'
import Welcome from './_components/Welcome';
import CreateOptions from './_components/CreateOptions';
import LatestInterviewList from './_components/LatestInterviewList';


function Dashboard() {
  return (
    <div>
      {/* <Welcome/> */}
      <h2 className='my-3 font-bold text-2xl'>Dashboard</h2>
      <CreateOptions/>
      <LatestInterviewList/>
    </div>
  )
}

export default Dashboard
