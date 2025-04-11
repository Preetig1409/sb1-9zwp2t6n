import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, BookOpen } from "lucide-react"

const insights = [
  {
    type: "gratitude",
    content: "Grateful for the supportive team at work during the challenging project phase.",
    source: "Morning Reflection",
    date: "April 5, 2025",
  },
  {
    type: "learning",
    content: "Learned that taking short breaks during focused work sessions improves overall productivity.",
    source: "Meeting with Ramesh",
    date: "April 4, 2025",
  },
  {
    type: "gratitude",
    content: "Thankful for the family dinner last night that helped me relax and recharge.",
    source: "Morning Reflection",
    date: "April 5, 2025",
  },
  {
    type: "learning",
    content:
      "Discovered a more efficient approach to client presentations by focusing on outcomes rather than processes.",
    source: "Client Briefing with Anil",
    date: "April 3, 2025",
  },
]

export default function InsightsOverview() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Heart className="h-5 w-5 mr-2 text-accent" />
              Gratitude
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {insights
                .filter((insight) => insight.type === "gratitude")
                .map((insight, index) => (
                  <div key={index} className="bg-muted p-3 rounded-md">
                    <p className="text-sm">{insight.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      From: {insight.source} • {insight.date}
                    </p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Key Learnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {insights
                .filter((insight) => insight.type === "learning")
                .map((insight, index) => (
                  <div key={index} className="bg-muted p-3 rounded-md">
                    <p className="text-sm">{insight.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      From: {insight.source} • {insight.date}
                    </p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

