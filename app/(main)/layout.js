import React from 'react'
import DashboardProvider from './provider';
import Welcome from './dashboard/_components/Welcome';
function DashboardLayout({ children }) {
  return (
    <div className='bg-gray-100 '>
      <DashboardProvider>
        <div className="p-6"></div>
        <Welcome/>
        {children}
      </DashboardProvider>
    </div>
  )
}

export default DashboardLayout