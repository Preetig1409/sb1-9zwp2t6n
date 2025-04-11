import { Card, CardContent } from "@/components/ui/card"

export default function EntrySummary() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Daily Summary</h3>
        <p className="text-muted-foreground leading-relaxed">
          Today began with a reflective morning session where I set intentions for the day ahead. I focused on three
          main priorities: finalizing the client presentation, scheduling the team meeting for next week, and dedicating
          time to personal development.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          My overall mood was positive and energetic, with a sense of clarity about upcoming challenges. I expressed
          gratitude for the supportive team environment and recent progress on the project. There was some concern about
          the tight deadline for the client deliverable, but I outlined a practical approach to address this.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Key events included a brief conversation with Ramesh about resource allocation and a reminder to schedule a
          doctor's appointment. The reflection concluded with setting tomorrow's priorities and a commitment to maintain
          work-life balance.
        </p>
      </CardContent>
    </Card>
  )
}

