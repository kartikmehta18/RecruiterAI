import React from 'react'
import DashboardProvider from './provider';
function DashboardLayout({ children }) {
  return (
    <div className='bg-gray-100 '>
      <DashboardProvider>
        <div className="p-10"></div>
        {children}
      </DashboardProvider>
    </div>
  )
}

export default DashboardLayout