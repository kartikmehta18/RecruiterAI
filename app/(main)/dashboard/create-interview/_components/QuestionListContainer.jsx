
import React from 'react'

function QuestionListContainer({ questions }) {
    return (
        <div>
            <h2 className='font-bold text-lg mb-5'>Generated Interview question</h2>
            <div className="p-5 border border-gray-200 rounded-xl ">
                {questions.map((item, index) => (
                    <div key={index} className="p-3 mt-2 border border-gray-200 rounded-2xl">
                        <h2 className="font-medium">{item.question}</h2>
                        <h2 className="italic font-caramel text-primary">{item.type}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionListContainer