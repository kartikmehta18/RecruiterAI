import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from "sonner"
import { Copy, Clock, List, Share2, Mail, Slack, MessageCircleMore, ArrowLeft, Plus } from "lucide-react"
function InterviewLink({ interview_id, formData }) {
  const url = process.env.NEXT_PUBLIC_BASE_URL + '/' + interview_id;
//or Interviews.interview_id
  const GetIntervireUrl = () => {
    return url;
  }

  const handleShare = async () => {
    const url = GetIntervireUrl();
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

  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast("🔗 Link copied to clipboard!");
  }


  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Image src={'/check.webp'} alt='check' height={200} width={200}
        className="w-[50px] h-[50px]" />

      <h2 className="font-bold text-lg mt-4">Your AI Interview is <span className="italic font-caramel text-primary">Ready!!</span></h2>
      <p className="mt-3">Share this link with your candidates to start the interview process</p>

      <div className="w-full p-7 mt-6 rounded-xl bg-white border">
        <div className=" flex  justify-between items-center">
          <h2 className=" font-bold">Interview Link</h2>
          <h2 className=" p-1 px-2 text-primary bg-blue-50 rounded-full border border-blue-100 ">Valid for 30 Days </h2>

        </div>

        <div className=" mt-3 flex item-center gap-3">
          <Input className=" border border-blue-100 rounded-lg" defaultValue={GetIntervireUrl()} disabled={true} />
          <Button onClick={() => onCopyLink()} className="cursor-pointer "><Copy /> Copy</Button>
        </div>
        <hr className=" bg-gray-200 my-5" />

        <div className="flex justify-between gap-5 items-center">
          <h2 className="text-sm text-gray-500 flex gap-2">
            <Clock className="h-4 w-4" />
            {formData?.duration}
          </h2>
          <h2 className="text-sm text-gray-500 flex gap-2">
            <List className="h-4 w-4" />
            10 Questions {formData?.duration}
          </h2>

          <Button
            onClick={handleShare}
            className="flex justify-center gap-4 cursor-pointer"
          >
            <Share2 className="h-5 w-5" />
            Share
          </Button>
        </div>


      </div>

      <div className="mt-5 w-full p-5 rounded-xl bg-white border">
        <h2 className="font-bold">Share <span clasName="italic font-caramel text-primary">Via</span></h2>
        <div className="flex justify-around  lg:gap-7 sm:-gap-2  mt-2">
          <Button onClick={handleShare} variant={'outline'} className='cursor-pointer'> <Slack />Slack</Button>
          <Button onClick={handleShare} variant={'outline'} className='cursor-pointer'> <Mail /> Email</Button>
          <Button onClick={handleShare} variant={'outline'} className='cursor-pointer'> <MessageCircleMore /> whatsapp</Button>
        </div>

        {/* <Button
            onClick={handleShare}
            className=" mt-2 flex justify-center gap-4 cursor-pointer px-10"
          >
            <Share2 className="h-5 w-5" />
            Share
          </Button> */}
      </div>

      <div className="flex justify-between w-full mt-4">

        <Link href={'/dashboard'}>
          <Button variant={'outline'} className=" cursor-pointer"> <ArrowLeft /> Back to Dashboard</Button>
        </Link>
        <Link href={'/dashboard/create-interview'}>
          <Button className=" cursor-pointer"> <Plus /> Create New Interview</Button>
        </Link>


      </div>
    </div>
  )
}

export default InterviewLink