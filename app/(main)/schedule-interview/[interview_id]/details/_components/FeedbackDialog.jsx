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
    // Extract feedback from the candidate object - handle different possible structures
    let feedbackData = candidate?.feedback;

    // If feedback is stored as JSON string, parse it
    if (typeof feedbackData === 'string') {
        try {
            feedbackData = JSON.parse(feedbackData);
        } catch (e) {
            console.error("Failed to parse feedback:", e);
            feedbackData = {};
        }
    }

    // Get the rating object - handle nested structure
    const rating = feedbackData?.rating || feedbackData?.feedback?.rating || {};
    const averageScore = feedbackData?.averageScore || 0;
    const recommendation = feedbackData?.recommendation || feedbackData?.Recommendation || "No";
    const recommendationMsg = feedbackData?.recommendationMsg || feedbackData?.RecommendationMsg || "No feedback available";

    // Handle summary - convert to array if needed
    let summaryArray = [];
    const summary = feedbackData?.summary || feedbackData?.feedback?.summary || "";

    if (Array.isArray(summary)) {
        summaryArray = summary;
    } else if (typeof summary === "string" && summary.trim()) {
        summaryArray = [summary]; // plain text → single item
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
                                            {averageScore}/10
                                        </h2>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bold mt-2">Skills Assessment</h2>
                                    <div className="mt-3 grid grid-cols-2 gap-10">
                                        <div >
                                            <h2 className="flex justify-between"> Technical Skills <span>{rating?.technicalSkills || 0}/10</span></h2>
                                            <Progress value={(rating?.technicalSkills || 0) * 10} max={100} className="mt-1" />
                                        </div>
                                        <div >
                                            <h2 className="flex justify-between"> Communication Skills <span>{rating?.communication || 0}/10</span></h2>
                                            <Progress value={(rating?.communication || 0) * 10} max={100} className="mt-1" />
                                        </div>
                                        <div >
                                            <h2 className="flex justify-between"> Problem Solving <span>{rating?.problemSolving || 0}/10</span></h2>
                                            <Progress value={(rating?.problemSolving || 0) * 10} max={100} className="mt-1" />
                                        </div>
                                        <div >
                                            <h2 className="flex justify-between"> Experience  <span>{rating?.experience || 0}/10</span></h2>
                                            <Progress value={(rating?.experience || 0) * 10} max={100} className="mt-1" />
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

                                <div className={`p-4 mt-10 flex items-center justify-between rounded-md ${recommendation === 'No' || recommendation === false ? 'bg-red-100' : 'bg-green-100'}`}>
                                  <div className="">
                                      <h2 className={`font-bold ${recommendation === 'No' || recommendation === false ? 'text-red-800' : 'text-green-800'}`}>Recommendation Msg:</h2>
                                        <p className={`mt-1 ${recommendation === 'No' || recommendation === false ? 'text-red-600' : 'text-green-600'}`}>{recommendationMsg}</p>
                                    </div>
                                    <Button  className={`mt-1 cursor-pointer ${recommendation === 'No' || recommendation === false ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>Send Message</Button>
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