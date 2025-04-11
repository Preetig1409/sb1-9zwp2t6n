import { Card, CardContent } from "@/components/ui/card"
import { Mic, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const recentEntries = [
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
]

export default function RecentEntries() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recentEntries.map((entry) => (
        <Link href={`/entry/${entry.id}`} key={entry.id}>
          <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mic className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{entry.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-2">{entry.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{entry.duration}</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded mr-1 mb-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">{entry.summary}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

