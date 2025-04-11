import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Share, Edit } from "lucide-react"
import Link from "next/link"
import EntrySummary from "@/components/entry-summary"
import EntryDetailedAnalysis from "@/components/entry-detailed-analysis"
import EntryGratitude from "@/components/entry-gratitude"
import EntryLearnings from "@/components/entry-learnings"
import EntryActionItems from "@/components/entry-action-items"

export default function EntryPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Link href="/journal">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Morning Reflection - April 5, 2025</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duration: 8:32</div>
              <div className="text-sm text-muted-foreground">Tags: Personal, Reflection</div>
            </div>
          </div>
          <audio className="w-full" controls>
            <source src="/placeholder-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
          <TabsTrigger value="gratitude">Gratitude</TabsTrigger>
          <TabsTrigger value="learnings">Key Learnings</TabsTrigger>
          <TabsTrigger value="actions">Action Items</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <EntrySummary />
        </TabsContent>
        <TabsContent value="detailed">
          <EntryDetailedAnalysis />
        </TabsContent>
        <TabsContent value="gratitude">
          <EntryGratitude />
        </TabsContent>
        <TabsContent value="learnings">
          <EntryLearnings />
        </TabsContent>
        <TabsContent value="actions">
          <EntryActionItems />
        </TabsContent>
      </Tabs>
    </div>
  )
}

