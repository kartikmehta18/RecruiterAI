import React from 'react'
import moment from 'moment';
import { Button } from "@/components/ui/button";
import { Copy, Share2, ArrowRight } from "lucide-react"
import { toast } from "sonner";
import Link from "next/link"
function InterviewCard({ Interviews, viewDetail = false }) {
  const url = process.env.NEXT_PUBLIC_BASE_URL + '/' + Interviews?.interview_id;
  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast("🔗 Link copied to clipboard!");
  }
  const handleShare = async () => {

    const shareData = {
      title: 'Interview Invite',
      text: 'Join this interview using the link below:',
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // fallback if Web Share API is not supported
      alert("Sharing is not supported in this browser.");
    }
  };
  return (


    <div className="p-5 bg-white rounded-lg border mt-5">
      <div className="flex items-center justify-between">
        <div className=" w-[40px] h-[40px] bg-primary rounded-full" />
        <h2> {moment(Interviews?.created_at).format('MMMM Do YYYY,')}</h2>

      </div>
      <h2 className="mt-3 font-bold text-lg "> {Interviews.jobPosition}</h2>
      <h2 className="mt-2 font-bold text-gray-400 flex justify-between "> {Interviews?.interviewDuration} Min⏰ 
         <span className="italic font-caramel text-green-500"> {Interviews['interview-feedback']?.length} Candidate🤵</span>
      </h2>

      {!viewDetail ? <div className="flex justify-between items-center mt-4">
        <Button className="cursor-pointer" variant="outline" onClick={onCopyLink}> <Copy /> Copy link</Button>
        <Button className="cursor-pointer" onClick={handleShare}> <Share2 className="mr-2" /> Send</Button>
      </div>
        :
        <Link href={'/schedule-interview/' +Interviews?.interview_id + "/details"}>
        <div className=" flex justify-end">
          <Button variant="outline" className="w-full cursor-pointer"> <ArrowRight />View Detail</Button>
        </div>
        </Link>

      }


    </div>
  )
}

export default InterviewCard