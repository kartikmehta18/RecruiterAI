import React from 'react'
import Welcome from './_components/Welcome';
import CreateOptions from './_components/CreateOptions';

function Dashboard() {
  return (
    <div>
      <Welcome/>
      <h2 className='my-3 font-bold text-2xl'>Dashboard</h2>
      <CreateOptions/>
    </div>
  )
}

export default Dashboard
