import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Calendar, Edit, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const tasks = [
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
  {
    id: "4",
    task: "Review quarterly goals",
    dueDate: "April 15, 2025",
    source: "Team Standup",
    completed: false,
  },
  {
    id: "5",
    task: "Send follow-up email to client",
    dueDate: "April 6, 2025",
    source: "Client Briefing with Anil",
    completed: true,
  },
]

export default function TaskList({ filter = "all" }: { filter?: "all" | "pending" | "completed" }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "pending") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <Card key={task.id} className={task.completed ? "opacity-60" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Checkbox id={`task-${task.id}`} checked={task.completed} />
              <div className="flex-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {task.task}
                </label>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Due: {task.dueDate}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Source: {task.source}</div>
              </div>
              <div className="flex gap-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Task</DialogTitle>
                      <DialogDescription>Make changes to your task here.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="task">Task</Label>
                        <Input id="task" defaultValue={task.task} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="due-date">Due Date</Label>
                        <Input id="due-date" type="date" defaultValue="2025-04-07" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reminder">Reminder</Label>
                        <Input id="reminder" type="date" defaultValue="2025-04-06" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="completed" checked={task.completed} />
                        <label htmlFor="completed">Mark as completed</label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

