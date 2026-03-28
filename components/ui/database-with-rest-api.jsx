"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths */}
      <svg
        className="h-full sm:w-full text-gray-300"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        {/* Buttons - Light mode */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          <g>
            <rect fill="#0377fc" x="14" y="5" width="34" height="10" rx="5" />
            <DatabaseIcon x="18" y="7.5" />
            <text x="28" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              {badgeTexts?.first || "GET"}
            </text>
          </g>
          <g>
            <rect fill="#0377fc" x="60" y="5" width="34" height="10" rx="5" />
            <DatabaseIcon x="64" y="7.5" />
            <text x="74" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              {badgeTexts?.second || "POST"}
            </text>
          </g>
          <g>
            <rect fill="#0377fc" x="108" y="5" width="34" height="10" rx="5" />
            <DatabaseIcon x="112" y="7.5" />
            <text x="122" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              {badgeTexts?.third || "PUT"}
            </text>
          </g>
          <g>
            <rect fill="#0377fc" x="150" y="5" width="40" height="10" rx="5" />
            <DatabaseIcon x="154" y="7.5" />
            <text x="165" y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
              {badgeTexts?.fourth || "DELETE"}
            </text>
          </g>
        </g>
        <defs>
          <mask id="db-mask-1">
            <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="db-mask-2">
            <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="db-mask-3">
            <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="db-mask-4">
            <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#0377fc"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-primary/10" />
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-gray-200 bg-white px-2 py-1 shadow-sm sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3 text-primary" />
          <span className="ml-2 text-[10px] text-gray-700">
            {title || "AI-Powered Interview Pipeline"}
          </span>
        </div>
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border border-gray-200 bg-white font-semibold text-xs text-primary shadow-md">
          {circleText || "AI"}
        </div>
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-gray-50 px-3 text-xs border border-gray-200 flex items-center gap-2 text-gray-700 shadow-sm">
            <HeartHandshakeIcon className="size-4 text-primary" />
            <span>{buttonTexts?.first || "RecruiterAI"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-gray-50 px-3 text-xs sm:flex border border-gray-200 items-center gap-2 text-gray-700 shadow-sm">
            <Folder className="size-4 text-primary" />
            <span>{buttonTexts?.second || "Interviews"}</span>
          </div>
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-primary/20 bg-primary/5"
            animate={{ scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-primary/15 bg-primary/5"
            animate={{ scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-primary/10 bg-primary/5"
            animate={{ scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-primary/5 bg-primary/5"
            animate={{ scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatabaseWithRestApi;

const DatabaseIcon = ({ x = "0", y = "0" }) => (
  <svg
    x={x}
    y={y}
    xmlns="http://www.w3.org/2000/svg"
    width="5"
    height="5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);
