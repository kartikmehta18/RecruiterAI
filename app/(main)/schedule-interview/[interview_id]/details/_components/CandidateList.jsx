import React from "react";
import moment from "moment";

import FeedbackDialog from "./FeedbackDialog"

function CandidateList({ detail = [] }) {
  // Helper function to extract average score from feedback
  const getAverageScore = (candidate) => {
    let feedbackData = candidate?.feedback;

    // If feedback is stored as JSON string, parse it
    if (typeof feedbackData === 'string') {
      try {
        feedbackData = JSON.parse(feedbackData);
      } catch (e) {
        return "—";
      }
    }

    const averageScore = feedbackData?.averageScore || feedbackData?.feedback?.averageScore;
    return averageScore ? `${averageScore}/10` : "—";
  };

  return (
    <div>
      <h3 className="my-5 text-2xl font-bold">
        Candidates {detail.length}
      </h3>

      {detail.map((candidate, index) => (
        <div
          key={index}
          className="mt-4 flex items-center justify-between gap-4 rounded-xl border bg-white p-4"
        >
          {/* Left: avatar + text */}
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
            <h2 className="text-sm font-bold text-green-500">
              {getAverageScore(candidate)}
            </h2>
            <FeedbackDialog candidate={candidate} />
          </div>
        </div>
      ))}

      {detail.length === 0 && (
        <p className="text-sm text-gray-400">No candidates yet.</p>
      )}
    </div>
  );
}

export default CandidateList;
