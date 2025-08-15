"use client"
import React ,{useState}from 'react'
import { Clock, Calendar, Tag ,} from "lucide-react"
import moment from 'moment';

function InterviewDetail({ interviewDetail }) {
   const [showAll, setShowAll] = useState(false);

  const questions = interviewDetail?.questionList ?? [];
  const visibleQuestions = showAll ? questions : questions.slice(0, 4);
  return (
    <div className="p-5 bg-white rounded-lg border ">
      <h2 className='font-bold '>{interviewDetail?.jobPosition}</h2>
      <div className='mt-4 flex justify-between lg:pr-52 xl:pr-52'>

        <div>
          <h2 className='text-sm text-gray-500'>Duration</h2>
          <h2 className='flex text-sm font-bold items-center gap-3'> <Clock className="h-4 w-4" />{interviewDetail?.interviewDuration} Min</h2>
        </div>

        <div>
          <h2 className='text-sm text-gray-500'>Created at</h2>
          <h2 className='flex text-sm font-bold items-center gap-3'> <Calendar className="h-4 w-4" />{moment(interviewDetail?.created_at).format('MMMM Do YYYY,')}</h2>
        </div>

        <div>
          <h2 className='text-sm text-gray-500'>Type</h2>
          <h2 className="flex text-sm font-bold items-center gap-3">
            <Tag className="h-4 w-4" />
            {(() => {
              try {
                const typesArray = interviewDetail?.types
                  ? JSON.parse(interviewDetail.types)
                  : [];
                return typesArray.length > 0
                  ? typesArray.join(", ")
                  : "No types";
              } catch {
                return "Invalid types";
              }
            })()}
          </h2>

        </div>

      </div>
      <div className="mt-5">
        <h2 className='font-bold '>Job Description</h2>
        <p className='text-sm leading-6'>{interviewDetail?.jobDescription}</p>
      </div>
      <div className="mt-5">
        <h2 className='font-bold '>Interview Questions</h2>
        {/* <div className="">
          {interviewDetail?.questionList.map((item, index) => (
            <h2 className="p-3 mt-2 border border-gray-200 rounded-2xl ">{index +1}.{item?.question} </h2>
          ))}
          </div> */}
          <div>
      {visibleQuestions.map((item, index) => (
        <h2
          key={index}
          className="p-3 mt-2 border border-gray-200 rounded-2xl"
        >
     
          {index + 1}. {item?.question}
        </h2>
      ))}

      {questions.length > 4 && !showAll && (
        <div
          className="mt-2 text-blue-500 text-sm font-medium cursor-pointer"
          onClick={() => setShowAll(true)}
        >
          Read more
        </div>
      )}
    </div>
  
    </div>

    
    </div >
  )
}

export default InterviewDetail