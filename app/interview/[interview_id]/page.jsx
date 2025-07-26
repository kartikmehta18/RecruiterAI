
// "use client"
// import React, { useEffect, useState, useContext } from 'react'
// import Image from 'next/image'
// import { useRouter, useParams } from 'next/navigation'
// import { Clock, Info, Video, Loader2Icon } from 'lucide-react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { supabase } from '@/services/supabaseClient'
// import { toast } from 'sonner'
// import { InterviewDataContext } from '@/context/InterviewDataContext'

// function Interview() {
//     const { interview_id } = useParams()
//     const [interviewData, setInterviewData] = useState(null)
//     const [userName, setUserName] = useState('')
//     const [email, setEmail] = useState('')
//     const [loading, setLoading] = useState(false)
//     const { setInterviewInfo } = useContext(InterviewDataContext)
//     const router = useRouter()

//     useEffect(() => {
//         if (interview_id) {
//             GetInterviewDetails()
//         }
//     }, [interview_id])

//     const GetInterviewDetails = async () => {
//         setLoading(true)
//         try {
//             const { data: Interviews, error } = await supabase
//                 .from('Interviews')
//                 .select("jobPosition,jobDescription,interviewDuration,types")
//                 .eq("interview_id", interview_id)

//             if (error) throw error;

//             if (!Interviews || Interviews.length === 0) {
//                 toast('❌ No interview found with this id')
//                 setInterviewData(null)
//             } else {
//                 setInterviewData(Interviews[0])
//             }

//         } catch (error) {
//             toast('Incorrect interview id')
//             console.error("Error fetching interview details:", error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     const onJoinInterview = async () => {
//         setLoading(true)
//         try {
//             const { data: Interviews, error } = await supabase
//                 .from('Interviews')
//                 .select("*")
//                 .eq("interview_id", interview_id)

//             if (error || !Interviews || Interviews.length === 0) {
//                 toast('Something went wrong. Try again!')
//                 setLoading(false)
//                 return
//             }

//             setInterviewInfo({
//                 userName: userName,
//                 userEmail: userEmail,
//                 interviewData: Interviews[0],
//             })
//             // setInterviewInfo(Interviews[0])
//             router.push(`/interview/${interview_id}/start`)
//         } catch (err) {
//             toast('Unable to join interview.')
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="px-10 md:px-28 lg:px-48 xl:px-80 mt-7">
//             <div className="flex flex-col items-center justify-center lg:px-32 xl:px-52 mb-10 shadow border rounded-xl border-blue-100 p-7">
//                 <Image src={'/logo.png'} alt='logo' width={100} height={100}
//                     className="w-[140px] mt-2 "
//                 />
//                 <h2 className="mt-3">
//                     AI-Powered Interview
//                     <span className="italic font-caramel text-primary"> Platform</span>
//                 </h2>
//                 <Image src={'/interview.webp'} alt='interview' width={500} height={500}
//                     className="w-[280px] my-6"
//                 />
//                 <h2 className="font-bold text-xl">{interviewData?.jobPosition ?? " "}</h2>
//                 <h2 className="flex gap-2 items-center text-gray-500 mt-3">
//                     <Clock className="h-4 w-4" /> {interviewData?.interviewDuration} Minutes
//                 </h2>
//                 <div className="w-full p-2 ">
//                     <h2 className="font-medium">Enter your full name</h2>
//                     <Input className="mt-2" placeholder='e.g Kartik Mehta' value={userName} onChange={(e) => setUserName(e.target.value)} />
//                 </div>
//                 <div className="w-full p-2 ">
//                     <h2 className="font-medium">Enter your Email</h2>
//                     <Input className="mt-2" placeholder='e.g example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="p-3 bg-blue-50 flex gap-4 rounded-ld m-4 ">
//                     <Info className="text-primary" />
//                     <div>
//                         <h2 className="font-bold">Before you begin</h2>
//                         <ul>
//                             <li className="text-sm text-primary">Test your camera and microphone</li>
//                             <li className="text-sm text-primary">Ensure you have stable internet connection</li>
//                             <li className="text-sm text-primary">Find a quiet place for interview</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <Button className="mt-5 w-full cursor-pointer font-bold"
//                     disabled={loading || !userName.trim()}
//                     onClick={onJoinInterview}>
//                     <Video /> {loading && <Loader2Icon className="animate-spin" />} Join Interview
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default Interview
"use client"
import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { Clock, Info, Video, Loader2Icon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import { toast } from 'sonner'
import { InterviewDataContext } from '@/context/InterviewDataContext'

function Interview() {
  const { interview_id } = useParams()
  const [interviewData, setInterviewData] = useState(null)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { setInterviewInfo } = useContext(InterviewDataContext)
  const router = useRouter()

  useEffect(() => {
    if (interview_id) {
      GetInterviewDetails()
    }
  }, [interview_id])

  const GetInterviewDetails = async () => {
    setLoading(true)
    try {
      const { data: Interviews, error } = await supabase
        .from('Interviews')
        .select("jobPosition,jobDescription,interviewDuration,types")
        .eq("interview_id", interview_id)

      if (error) throw error

      if (!Interviews || Interviews.length === 0) {
        toast('❌ No interview found with this id')
        setInterviewData(null)
      } else {
        setInterviewData(Interviews[0])
      }
    } catch (error) {
      toast('Incorrect interview id')
      console.error("Error fetching interview details:", error)
    } finally {
      setLoading(false)
    }
  }

  const onJoinInterview = async () => {
    setLoading(true)
    try {
      const { data: Interviews, error } = await supabase
        .from('Interviews')
        .select("*")
        .eq("interview_id", interview_id)

      if (error || !Interviews || Interviews.length === 0) {
        toast('Something went wrong. Try again!')
        return
      }

      setInterviewInfo({
        userName: userName,
        userEmail: email,
        interviewData: Interviews[0],
      })

      router.push(`/interview/${interview_id}/start`)
    } catch (err) {
      toast('Unable to join interview.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-80 mt-7">
      <div className="flex flex-col items-center justify-center lg:px-32 xl:px-52 mb-10 shadow border rounded-xl border-blue-100 p-7">
        <Image src={'/logo.png'} alt='logo' width={100} height={100} className="w-[140px] mt-2" />
        <h2 className="mt-3">
          AI-Powered Interview
          <span className="italic font-caramel text-primary"> Platform</span>
        </h2>
        <Image src={'/interview.webp'} alt='interview' width={500} height={500} className="w-[280px] my-6" />
        <h2 className="font-bold text-xl">{interviewData?.jobPosition ?? " "}</h2>
        <h2 className="flex gap-2 items-center text-gray-500 mt-3">
          <Clock className="h-4 w-4" /> {interviewData?.interviewDuration} Minutes
        </h2>

        <div className="w-full p-2">
          <h2 className="font-medium">Enter your full name</h2>
          <Input
            className="mt-2"
            placeholder="e.g Kartik Mehta"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="w-full p-2">
          <h2 className="font-medium">Enter your Email</h2>
          <Input
            className="mt-2"
            placeholder="e.g example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="p-3 bg-blue-50 flex gap-4 rounded-lg m-4">
          <Info className="text-primary" />
          <div>
            <h2 className="font-bold">Before you begin</h2>
            <ul>
              <li className="text-sm text-primary">Test your camera and microphone</li>
              <li className="text-sm text-primary">Ensure you have stable internet connection</li>
              <li className="text-sm text-primary">Find a quiet place for interview</li>
            </ul>
          </div>
        </div>

        <Button
          className="mt-5 w-full cursor-pointer font-bold"
          disabled={loading || !userName.trim() || !email.trim()}
          onClick={onJoinInterview}
        >
          <Video className="mr-2" />
          {loading ? <Loader2Icon className="animate-spin" /> : 'Join Interview'}
        </Button>
      </div>
    </div>
  )
}

export default Interview
