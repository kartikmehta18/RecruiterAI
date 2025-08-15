import React from 'react'
import { Button } from "@/components/ui/button";
import moment from "moment";

import { Progress } from '@/components/ui/progress';
import {

    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function FeedbackDialog({ candidate }) {
    const feedback = candidate?.feedback?.feedback
    const fb = (feedback?.feedback ?? feedback) || {};

    // Make an array you can safely map
    let summaryArray = [];
    if (Array.isArray(fb.summary)) {
        summaryArray = fb.summary;
    } else if (typeof fb.summary === "string") {
        // If stored as JSON array string, parse
        if (fb.summary.trim().startsWith("[")) {
            try {
                summaryArray = JSON.parse(fb.summary);
            } catch {
                summaryArray = [fb.summary]; // fallback
            }
        } else {
            summaryArray = [fb.summary]; // plain text → single item
        }
    }



    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-primary">
                        View Details
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Feedback</DialogTitle>
                        <DialogDescription asChild>
                            <div className="mt-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex min-w-0 items-center gap-4">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                candidate.userName || "User"
                                            )}&background=random&color=fff`}
                                            alt={candidate.userName || "User"}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div className="min-w-0">
                                            <h3 className="font-medium text-primary">
                                                {candidate.userName || "Unnamed"}
                                            </h3>
                                            <p className="truncate text-sm text-gray-500">
                                                {candidate.userEmail || "No email"}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Completed on: {candidate?.created_at
                                                    ? moment(candidate.created_at).format("MMMM Do YYYY")
                                                    : "—"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: action */}
                                    <div className="flex gap-10 items-center">
                                        <h2 className="text-sm font-bold text-primary">
                                            7/10
                                        </h2>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bold mt-2">Skills Assisment</h2>
                                    <div className="mt-3 grid grid-cols-2 gap-10">
                                        <div >
                                            <h2 className="flex justify-between"> Technical Skills <span>{feedback?.rating.technicalSkills}/10</span></h2>
                                            <Progress value={feedback?.rating.technicalSkills * 10} max={10} className="mt-1" />
                                        </div>
                                        <div >
                                            <h2 className="flex justify-between"> Communication Skills <span>{feedback?.rating.communication}/10</span></h2>
                                            <Progress value={feedback?.rating.technicalSkills * 10} max={10} className="mt-1" />
                                        </div>
                                        <div >
                                            <h2 className="flex justify-between"> Problem Solving <span>{feedback?.rating.problemSolving}/10</span></h2>
                                            <Progress value={feedback?.rating.technicalSkills * 10} max={10} className="mt-1" />
                                        </div>
                                        <div >
                                            <h2 className="flex justify-between"> Experience  <span>{feedback?.rating.experience}/10</span></h2>
                                            <Progress value={feedback?.rating.experience * 10} max={10} className="mt-1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h2 className="font-bold">Performance Summary</h2>
                                    <div className="mt-2 rounded-lg bg-secondary p-3">
                                        {summaryArray.length > 0 ? (
                                            summaryArray.map((summary, index) => (
                                                <p key={index} className="text-sm text-gray-700">
                                                    {summary}
                                                </p>
                                            ))
                                        ) : (
                                            <p className="text-sm text-gray-400">No summary available.</p>
                                        )}
                                    </div>
                                </div>

                                <div className={`p-4 mt-10 flex items-center justify-between rounded-md ${feedback?.Recommendation == 'No' ? 'bg-red-100' : 'bg-green-100'}`}>
                                  <div className="">
                                      <h2 className={`font-bold ${feedback?.Recommendation == 'No' ? 'text-red-800' : 'text-green-800'}`}>Recommendation Msg:</h2>
                                        <p className={`mt-1 ${feedback?.Recommendation == 'No' ? 'text-red-600' : 'text-green-600'}`}>{feedback?.RecommendationMsg}</p>
                                    </div>
                                    <Button  className={`mt-1 cursor-pointer ${feedback?.Recommendation == 'No' ? 'bg-red-600' : 'bg-green-600'}`}>Send Message</Button>
                                    </div>


                                </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default FeedbackDialog