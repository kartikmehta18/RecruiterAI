"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "sonner";
import { Loader2Icon, PlusIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import QuestionListContainer from './QuestionListContainer';
import { supabase } from './../../../../../services/supabaseClient';
import { useUser } from "@/app/provider"
import { v4 as uuidv4 } from 'uuid';

function QuestionList({ formData,onCreateLink }) {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { user } = useUser();
  const [saveLoading, setSaveLoading] = useState(false);


  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData])

  const GenerateQuestionList = async () => {
    console.log("Sending data to server:", formData)
    setLoading(true);

    try {
      const result = await axios.post('/api/ai-model', {
        ...formData
      });
      console.log("Generated Questions:", result.data);
      const Content = result.data.content;
      const FINAL_CONTENT = Content.replace('```json', '').replace('```', '');
      // TEMPORARY WORKAROUND: Convert JS-like object string to valid JSON
      let fixedContent = FINAL_CONTENT.trim();
      // If it starts with 'interviewQuestions:', wrap it in curly braces
      if (fixedContent.startsWith('interviewQuestions')) {
        fixedContent = `{${fixedContent}}`;
      }
      fixedContent = fixedContent
        .replace(/([a-zA-Z0-9_]+):/g, '"$1":') // property names
        .replace(/'([^']+)'/g, '"$1"');        // single-quoted strings
      let parsedQuestions = [];
      try {
        const parsed = JSON.parse(fixedContent);
        parsedQuestions = parsed.interviewQuestions || [];
        setQuestions(parsedQuestions);
        console.log('Parsed interviewQuestions:', parsedQuestions);
      } catch (parseError) {
        toast("Error parsing questions from server response.");
        console.error('Parsing error:', parseError, 'Content:', fixedContent);
        setQuestions([]);
      }
      setLoading(false);

    } catch (error) {
      toast("Error generating questions:");
      setLoading(false);
    }
  }

  const onFinish = async () => {
    setSaveLoading(true);
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from('Interviews')
      .insert([
        {
          ...formData,
          questionList: questions,
          userEmail: user?.email,
          interview_id: interview_id,
        },

      ])
      .select()
    setSaveLoading(false);
    console.log("okii", data);
    onCreateLink(interview_id)

  }


  return (
    <>
      {loading && <div className="p-5 bg-blue-50 rounded-xl border border-gray-300 flex gap-5 item-center ">
        <Loader2Icon className="animate-spin" />
        <div>
          <h2 className=" font-medium font-caramel">Generating Interview Questions</h2>
          <p className="text-primary"> Our AI is crafting personalized questions bases on your job position</p>
        </div>
      </div>}
      {/* <div>QuestionList</div> */}

      {questions?.length > 0 &&

        <div>
          {/* <h2 className='font-bold text-lg'>Generated Interview question</h2>
        <div className="p-5 border border-gray-200 rounded-xl">
          {questions.map((item, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-2xl">
              <h2 className="font-medium">{item.question}</h2>
              <h2 className="italic font-caramel text-primary">{item.type}</h2>
            </div>
          ))}
        </div> */}
          <QuestionListContainer questions={questions} />
        </div>
      }
      <Button className="flex justifi-end mt-10 " onClick={() => { onFinish() }} disabled={saveLoading}>
        {saveLoading && <Loader2 className="animate-spin" />}
        Create Interview Link & Finish
      </Button>


    </>
  )
}

export default QuestionList


// "use client"
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { toast } from "sonner";
// import { Loader2Icon } from "lucide-react";


// function QuestionList({ formData }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (formData) {
//       GenerateQuestionList();
//     }
//   }, [formData]);

//   const GenerateQuestionList = async () => {
//     setLoading(true);

//     try {
//         console.log("Sending data to server:", formData);
//       const result = await axios.post('/api/ai-model', {
//         ...formData
//       });
//       setLoading(false);
//       // Assuming you want to do something with the result, like setting questions
//       console.log(result.data);
//     } catch (error) {
//       setLoading(false);
//       // Log the error details for debugging
//       console.error("Error details:", error);
//       toast.error("Error generating questions: " + (error.response?.data?.message || "Something went wrong"));
//     }
//   }

//   return (
//     <>
//       {loading && (
//         <div className="p-5 bg-blue-50 rounded-xl border border-gray-100 flex gap-5 items-center">
//           <Loader2Icon className="animate-spin" />
//           <div>
//             <h2>Generating Interview Questions</h2>
//             <p>Our AI is crafting personalized questions based on your job position.</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default QuestionList;
