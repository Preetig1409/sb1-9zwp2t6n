"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, File, X, Check } from "lucide-react"

export default function AudioUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type.includes("audio/")) {
        setFile(droppedFile)
      } else {
        alert("Please upload an audio file.")
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setFile(null)
  }

  const uploadFile = () => {
    // Upload file logic would go here
    alert("File uploaded! In a real app, this would process the audio file.")
  }

  return (
    <div className="flex flex-col items-center">
      {!file ? (
        <div
          className={`w-full border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? "border-primary bg-primary/10" : "border-muted-foreground/20"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">Drag and drop your audio file</h3>
          <p className="text-sm text-muted-foreground mb-4">Supports MP3, WAV, M4A (max 100MB)</p>
          <div className="relative">
            <input
              type="file"
              accept="audio/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Browse Files
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full bg-muted p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <File className="h-8 w-8 mr-3 text-primary" />
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={removeFile}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <Button onClick={uploadFile} className="w-full">
            <Check className="mr-2 h-4 w-4" />
            Upload and Process
          </Button>
        </div>
      )}
    </div>
  )
}

