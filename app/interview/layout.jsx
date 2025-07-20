import React from 'react'
import InterviewHeader from "./_components/InterviewHeader"
function InterviewLayout({children}) {
  return (
    <div className="bg-secondary h-screen">
            <InterviewHeader />
        {children}
        </div>
  )
}

export default InterviewLayout