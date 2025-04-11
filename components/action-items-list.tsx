import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Calendar, Edit } from "lucide-react"

const actionItems = [
  {
    id: "1",
    task: "Call Ramesh about project timeline",
    dueDate: "April 7, 2025",
    source: "Meeting with Ramesh",
    completed: false,
  },
  {
    id: "2",
    task: "Prepare presentation for client meeting",
    dueDate: "April 10, 2025",
    source: "Client Briefing with Anil",
    completed: false,
  },
  {
    id: "3",
    task: "Schedule doctor's appointment",
    dueDate: "April 8, 2025",
    source: "Morning Reflection",
    completed: true,
  },
]

export default function ActionItemsList() {
  return (
    <div className="space-y-3">
      {actionItems.map((item) => (
        <Card key={item.id} className={item.completed ? "opacity-60" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Checkbox id={`task-${item.id}`} checked={item.completed} />
              <div className="flex-1">
                <label
                  htmlFor={`task-${item.id}`}
                  className={`font-medium ${item.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {item.task}
                </label>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Due: {item.dueDate}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Source: {item.source}</div>
              </div>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

