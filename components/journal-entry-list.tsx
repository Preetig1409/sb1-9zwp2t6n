import { Card, CardContent } from "@/components/ui/card"
import { Mic, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const journalEntries = [
  {
    id: "1",
    title: "Morning Reflection",
    date: "April 5, 2025",
    duration: "8:32",
    tags: ["Personal", "Reflection"],
    summary:
      "Reflected on yesterday's achievements and set intentions for today. Discussed upcoming project deadlines and personal goals.",
  },
  {
    id: "2",
    title: "Meeting with Ramesh",
    date: "April 4, 2025",
    duration: "15:47",
    tags: ["Professional", "Meeting"],
    summary:
      "Discussed project timeline and resource allocation. Ramesh suggested new approach for the client presentation next week.",
  },
  {
    id: "3",
    title: "Client Briefing with Anil",
    date: "April 3, 2025",
    duration: "22:15",
    tags: ["Professional", "Client"],
    summary:
      "Reviewed project requirements with Anil. Identified key deliverables and established communication protocols for the project.",
  },
  {
    id: "4",
    title: "Evening Thoughts",
    date: "April 2, 2025",
    duration: "5:18",
    tags: ["Personal", "Reflection"],
    summary: "Reflected on the day's accomplishments and areas for improvement. Set priorities for tomorrow.",
  },
  {
    id: "5",
    title: "Team Standup",
    date: "April 1, 2025",
    duration: "12:05",
    tags: ["Professional", "Meeting"],
    summary: "Weekly team standup meeting. Discussed progress on current projects and blockers.",
  },
]

export default function JournalEntryList() {
  return (
    <div className="space-y-4">
      {journalEntries.map((entry) => (
        <Link href={`/entry/${entry.id}`} key={entry.id}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{entry.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-2">{entry.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{entry.duration}</span>
                  </div>
                  <div className="mt-1">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded mr-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{entry.summary}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

