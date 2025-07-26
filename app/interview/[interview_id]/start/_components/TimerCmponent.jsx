"use client"
import React, { useState, useEffect, useContext } from 'react'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { Clock } from 'lucide-react'

function TimerComponent({ isInterviewActive = false }) {
  const { interviewInfo } = useContext(InterviewDataContext)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  // Get interview duration in minutes from context
  const totalDurationMinutes = interviewInfo?.interviewData?.interviewDuration || 30
  const totalDurationSeconds = totalDurationMinutes * 60

  // Start/stop timer based on interview activity
  useEffect(() => {
    setIsRunning(isInterviewActive)
  }, [isInterviewActive])

  useEffect(() => {
    let interval = null

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevTime => {
          const newTime = prevTime + 1
          // Continue counting even after duration is reached to show overtime
          return newTime
        })
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Calculate remaining time
  const remainingTime = Math.max(0, totalDurationSeconds - elapsedTime)
  const isOvertime = elapsedTime > totalDurationSeconds
  const overtimeSeconds = isOvertime ? elapsedTime - totalDurationSeconds : 0

  // Calculate progress percentage (cap at 100%)
  const progressPercentage = Math.min((elapsedTime / totalDurationSeconds) * 100, 100)

  return (
    <div className="flex flex-col items-end text-sm">
      <div className="flex items-center gap-2 mb-1">
        <Clock className="h-4 w-4 text-gray-500" />
        <div className={`font-mono text-base font-bold ${
          isOvertime ? 'text-red-500' : 
          remainingTime <= 300 ? 'text-amber-500' : // 5 minutes warning
          'text-gray-700'
        }`}>
          {isOvertime ? 
            `+${formatTime(overtimeSeconds)}` : 
            formatTime(remainingTime)
          }
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-2">
        {formatTime(elapsedTime)} / {formatTime(totalDurationSeconds)}
      </div>
      
      <div className="w-32 bg-gray-200 rounded-full h-2 relative">
        <div 
          className={`h-2 rounded-full transition-all duration-1000 ${
            isOvertime ? 'bg-red-500' : 
            remainingTime <= 300 ? 'bg-amber-500' :
            'bg-blue-500'
          }`}
          style={{ 
            width: `${progressPercentage}%` 
          }}
        />
        {isOvertime && (
          <div className="absolute -top-1 -right-1 w-1 h-4 bg-red-500 rounded animate-pulse" />
        )}
      </div>
      
      {!isRunning && elapsedTime === 0 && (
        <div className="text-xs text-gray-400 mt-1">Ready to start</div>
      )}
      {isOvertime && (
        <div className="text-xs text-red-500 mt-1 font-medium">Overtime!</div>
      )}
      {remainingTime <= 300 && remainingTime > 0 && (
        <div className="text-xs text-amber-500 mt-1 font-medium">5 min left</div>
      )}
    </div>
  )
}

export default TimerComponent