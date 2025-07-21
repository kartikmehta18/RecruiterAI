import React ,{useContext} from 'react'
import { InterviewDataContext } from '@/context/InterviewDataContext'

function StartInterview() {
  const {interviewInfo, setInterviewInfo}=useContext(InterviewDataContext);
  
  return (
    <div>StartInterview
      
    </div>
  )
}

export default StartInterview