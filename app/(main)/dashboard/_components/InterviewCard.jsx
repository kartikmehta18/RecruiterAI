import React from 'react'
import moment from 'moment';
function InterviewCard({ Interviews }) {
    return (
        <div>
            <div>
                <div className=" w-[40px] h-[40px] bg-primary rounded-full"> </div>
                <h2> {moment(Interviews?.created_at).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                <h2> {Interviews.userEmail}</h2>
                <h2> {Interviews.email}</h2>
                <h2> {Interviews.jobPosition}</h2>
            </div>


        </div>
    )
}

export default InterviewCard