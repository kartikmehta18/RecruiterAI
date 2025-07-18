"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

function QuestionList({ formData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (formData) {
      // GenerateQuestionList();
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
      setLoading(false);

    } catch (error) {
      toast("Error generating questions:");
      setLoading(false);
    }
  }


  return (
    <>
      {loading && <div className="p-5 bg-blue-50 rounded-xl border border-gray-300 flex gap-5 item-center ">
        <Loader2Icon className="animate-spin" />
        <div>
          <h2>Generating Interview Questions</h2>
          <p className="text-"> Our AI is crafting personalized questions bases on your job position</p>
        </div>

      </div>}
      {/* <div>QuestionList</div> */}
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
