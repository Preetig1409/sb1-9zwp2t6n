import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Calendar, Edit, Plus } from "lucide-react"
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

const actionItems = [
  {
    id: "1",
    task: "Call Ramesh about project timeline",
    dueDate: "April 7, 2025",
    completed: false,
  },
  {
    id: "2",
    task: "Schedule doctor's appointment",
    dueDate: "April 8, 2025",
    completed: false,
  },
]

export default function EntryActionItems() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Action Items</h3>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">Tasks automatically detected from your journal entry.</p>

        <div className="space-y-3">
          {actionItems.map((item) => (
            <div key={item.id} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
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
              </div>
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
                      <Input id="task" defaultValue={item.task} />
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
                      <Checkbox id="completed" checked={item.completed} />
                      <label htmlFor="completed">Mark as completed</label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

