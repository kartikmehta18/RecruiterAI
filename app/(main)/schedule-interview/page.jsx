"use client";
import React, { useEffect, useState } from "react";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/services/supabaseClient";
import InterviewCard from "./../dashboard/_components/InterviewCard";
import { useUser } from "@/app/provider";

function ScheduleInterview() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      GetInterview();
    }
  }, [user?.email]);

  const GetInterview = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Interviews")
        .select(
          "jobPosition, interviewDuration, interview_id, interview-feedback(userEmail)"
        ) // rename to your actual relation name
        .eq("userEmail", user?.email)
        .order("id", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        return;
      }

      setInterviewList(data ?? []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl">
        Interview List with candidate feedback
      </h2>

      {!loading && interviewList.length === 0 && (
        <div className="p-5 flex flex-col items-center gap-3 border bg-blue-50 border-blue-200 rounded-xl mt-5">
          <Video className="h-10 w-10 text-primary" />
          <h2>You don't have any interview created</h2>
          <Link href="/dashboard/create-interview">
            <Button className="cursor-pointer hover:animate-pulse">
              + Create New Interview
            </Button>
          </Link>
        </div>
      )}

      {loading && <div className="mt-5">Loading interviews...</div>}

      {!loading && interviewList.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {interviewList.map((interview, index) => (
            <InterviewCard
              Interviews={interview}
              key={index}
              viewDetail={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ScheduleInterview;


// "use client";
// import React, { useEffect, useState } from "react";
// import { supabase } from "@/services/supabaseClient";
// import { useUser } from "@/app/provider";

// function ScheduleInterview() {
//   const { user } = useUser();
//   const [interviews, setInterviews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     if (user?.email) {
//       GetInterview(user.email);
//     }
//   }, [user?.email]);

//   const GetInterview = async() => {
//     try {
//       setLoading(true);
//       setErr(null);

//       const { data, error } = await supabase
//         .from("Interviews")
//         .select(
//           "jobPosition, interviewDuration, interview_id, interview-feedback(userEmail)"
//         ) // Adjust relation name if needed
//         .eq("userEmail", user?.email)
//         .order("interview_id", { ascending: false });

//       if (error) throw error;

//       setInterviews(data ?? []);
//       console.log("Interviews:", data);
//     } catch (e) {
//       console.error(e);
//       setErr(e?.message ?? "Failed to load interviews");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">ScheduleInterview</h2>

//       {loading && <div>Loading interviews…</div>}

//       {err && <div className="text-red-500">Error: {err}</div>}

//       {!loading && !err && (
//         <>
//           {interviews.length === 0 ? (
//             <div>No interviews found.</div>
//           ) : (
//             <ul className="space-y-2">
//               {interviews.map((it) => (
//                 <li key={it.interview_id} className="p-3 rounded border">
//                   <div>Position: {it.jobPosition}</div>
//                   <div>Duration: {it.interviewDuration}</div>

//                   {it.interview_feedback?.length > 0 && (
//                     <div>
//                       Feedback from:{" "}
//                       {it.interview_feedback
//                         .map((f) => f.userEmail)
//                         .join(", ")}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default ScheduleInterview;
