import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const segments = [
  {
    id: "1",
    title: "Morning Intentions",
    category: "Personal",
    startTime: "00:00",
    endTime: "02:15",
    summary:
      "Set intentions for the day focusing on three main priorities: client presentation, team meeting scheduling, and personal development. Discussed approach to balancing these tasks throughout the day.",
  },
  {
    id: "2",
    title: "Project Timeline Discussion",
    category: "Professional",
    startTime: "02:16",
    endTime: "04:45",
    summary:
      "Reflected on conversation with Ramesh about project timeline and resource allocation. Noted concerns about the tight deadline and outlined potential solutions including redistributing tasks and extending working hours if necessary.",
  },
  {
    id: "3",
    title: "Personal Health Reminder",
    category: "Personal",
    startTime: "04:46",
    endTime: "06:30",
    summary:
      "Reminded myself to schedule a doctor's appointment for the annual check-up. Noted the importance of prioritizing health alongside work commitments.",
  },
  {
    id: "4",
    title: "Tomorrow's Planning",
    category: "Personal",
    startTime: "06:31",
    endTime: "08:32",
    summary:
      "Set priorities for tomorrow including finalizing the presentation draft, sending follow-up emails, and allocating time for exercise. Emphasized the importance of maintaining work-life balance.",
  },
]

export default function EntryDetailedAnalysis() {
  return (
    <div className="space-y-4">
      {segments.map((segment) => (
        <Card key={segment.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium">{segment.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>
                    {segment.startTime} - {segment.endTime}
                  </span>
                </div>
              </div>
              <Badge variant={segment.category === "Personal" ? "outline" : "default"}>{segment.category}</Badge>
            </div>
            <p className="text-muted-foreground">{segment.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

