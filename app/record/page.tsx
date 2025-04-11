"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mic, Upload } from "lucide-react"
import AudioRecorder from "@/components/audio-recorder"
import AudioUploader from "@/components/audio-uploader"

export default function RecordPage() {
  const [activeTab, setActiveTab] = useState("record")

  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">New Journal Entry</h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Create a New Entry</CardTitle>
          <CardDescription>Record your thoughts or upload an audio file to create a new journal entry</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="entry-title">Entry Title</Label>
            <Input id="entry-title" placeholder="e.g., Morning Reflection, Meeting with Ramesh" />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-4 grid grid-cols-2">
              <TabsTrigger value="record">
                <Mic className="mr-2 h-4 w-4" />
                Record Voice
              </TabsTrigger>
              <TabsTrigger value="upload">
                <Upload className="mr-2 h-4 w-4" />
                Upload Audio
              </TabsTrigger>
            </TabsList>
            <TabsContent value="record">
              <AudioRecorder />
            </TabsContent>
            <TabsContent value="upload">
              <AudioUploader />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

