"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function InterviewComplete() {
   const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [router]);


    return (
        <div className='min-h-screen  flex flex-col items-center justify-center p-4'>
            <Image src={'/check.webp'} alt='check' width={50} height={50} className="w-[80px] mt-2" />

            <h2 className=' text-2xl font-bold'> Interview <span className="italic font-caramel text-primary">Complete</span></h2>
            <h2 className='text-gray-400'>Thank you for your participation!</h2>


            <div className="flex justify-center mt-8 ">
                <div className="relative w-full max-w-2xl">
                    <Image
                        src="/candidate.jpg"
                        alt="Interview completion illustration showing interviewer and candidate"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-md"
                        priority
                    />
                </div>
            </div>


            {/* What's Next Section */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <Rocket className="w-8 h-8 text-white" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{"What's Next?"}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our team will review your responses and get back to you within 2-3 business days. We appreciate your
                        time and interest in joining our team.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button size="lg" className="px-8">
                        View Dashboard
                    </Button>

                </div>
            </div>

            {/* Footer Note */}
            <div className="pt-8 text-sm text-gray-500">
                <p>
                    Questions? Contact us at{" "}
                    <a href="mailto:kartikmehta650@gmail.com" className="text-blue-600 hover:underline">
                        kartikmehta650@gmail.com
                    </a>
                </p>
            </div>


        </div>
    )
}

export default InterviewComplete;