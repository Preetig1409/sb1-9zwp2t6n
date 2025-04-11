import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Plus, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const learningItems = [
  {
    id: "1",
    content: "Learned that taking short breaks during focused work sessions improves overall productivity.",
    tag: "Professional Skill",
  },
  {
    id: "2",
    content: "Realized the importance of clear communication when discussing project timelines with team members.",
    tag: "Professional Skill",
  },
  {
    id: "3",
    content: "Discovered that morning reflection helps set a positive tone for the entire day.",
    tag: "Personal Growth",
  },
]

export default function EntryLearnings() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <BookOpen className="h-5 w-5 mr-2 text-primary" />
          Key Learnings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-6">
          Insights, decisions, and reflections extracted from your journal entry.
        </p>

        <div className="space-y-4">
          {learningItems.map((item) => (
            <div key={item.id} className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="text-muted-foreground">{item.content}</p>
              </div>
              <Badge variant="outline" className="flex items-center w-fit">
                <Tag className="h-3 w-3 mr-1" />
                {item.tag}
              </Badge>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Your Own
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

