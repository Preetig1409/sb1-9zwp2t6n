import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const gratitudeItems = [
  {
    id: "1",
    content: "Grateful for the supportive team at work during the challenging project phase.",
  },
  {
    id: "2",
    content: "Thankful for the family dinner last night that helped me relax and recharge.",
  },
  {
    id: "3",
    content: "Appreciative of the morning routine that helps me start the day with clarity and focus.",
  },
]

export default function EntryGratitude() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Heart className="h-5 w-5 mr-2 text-accent" />
          Gratitude
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-6">
          AI-generated insights based on tone and content of your journal entry.
        </p>

        <div className="space-y-4">
          {gratitudeItems.map((item) => (
            <div key={item.id} className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">{item.content}</p>
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

