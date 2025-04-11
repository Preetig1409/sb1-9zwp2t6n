"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Pause, Square, Save } from "lucide-react"

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true)
      setIsPaused(false)
      // Start recording logic would go here
    } else {
      setIsPaused(!isPaused)
      // Pause/resume recording logic would go here
    }
  }

  const stopRecording = () => {
    setIsRecording(false)
    setIsPaused(false)
    // Stop recording logic would go here
  }

  const saveRecording = () => {
    // Save recording logic would go here
    alert("Recording saved! In a real app, this would process the audio.")
  }

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md bg-muted p-6 rounded-lg mb-4">
        <div className="flex justify-center mb-4">
          <div className="text-4xl font-mono">{formatTime(recordingTime)}</div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant={isRecording && !isPaused ? "destructive" : "default"}
            size="lg"
            className="rounded-full h-16 w-16"
            onClick={toggleRecording}
          >
            {isRecording && !isPaused ? <Pause className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
          </Button>

          {isRecording && (
            <Button variant="outline" size="lg" className="rounded-full h-16 w-16" onClick={stopRecording}>
              <Square className="h-8 w-8" />
            </Button>
          )}
        </div>

        {isRecording && (
          <div className="flex justify-center mt-4">
            <div className="w-full max-w-xs bg-background rounded-full h-2">
              <div
                className="bg-secondary h-2 rounded-full animate-pulse"
                style={{ width: isPaused ? "0%" : "100%" }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-muted-foreground mb-4">
        {isRecording
          ? isPaused
            ? "Recording paused. Click the microphone to resume."
            : "Recording in progress. Click the pause button to pause."
          : "Click the microphone button to start recording."}
      </div>

      {isRecording && (
        <Button onClick={saveRecording} className="mt-2">
          <Save className="mr-2 h-4 w-4" />
          Save and Process
        </Button>
      )}
    </div>
  )
}

