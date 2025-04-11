import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Tag } from "lucide-react"
import JournalEntryList from "@/components/journal-entry-list"

export default function JournalPage() {
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Journal Entries</h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Journal History</CardTitle>
          <CardDescription>Browse and search through all your journal entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input type="text" placeholder="Search entries..." className="w-full px-4 py-2 border rounded-md" />
                <span className="absolute right-3 top-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Date
              </Button>
              <Button variant="outline" size="sm">
                <Tag className="mr-2 h-4 w-4" />
                Tags
              </Button>
              <Button variant="outline" size="sm">
                <Clock className="mr-2 h-4 w-4" />
                Duration
              </Button>
            </div>
          </div>

          <JournalEntryList />
        </CardContent>
      </Card>
    </div>
  )
}

