import React from 'react'

function QuestionList({formData}) {

  useEffect(()=>{
    if(formdata){
      GenerateQuestionList();
    }
  },[formData])

  const GenerateQuestionList =()=>{
    
  }

  
  return (
    <div>QuestionList</div>
  )
}

export default QuestionList