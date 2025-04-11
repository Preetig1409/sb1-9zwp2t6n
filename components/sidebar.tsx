"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Mic, BookOpen, CheckSquare, BarChart2, Settings, Menu, X } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Record",
      path: "/record",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      name: "Journal",
      path: "/journal",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Action Items",
      path: "/tasks",
      icon: <CheckSquare className="h-5 w-5" />,
    },
    {
      name: "Insights",
      path: "/insights",
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} className="bg-background">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden", isOpen ? "block" : "hidden")}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-background border-r transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-primary">EvolvAI</h2>
            <p className="text-sm text-muted-foreground">Audio Journal & Insights</p>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {routes.map((route) => (
              <Link key={route.path} href={route.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className={cn("w-full justify-start", pathname === route.path && "bg-primary/10 text-primary")}
                >
                  {route.icon}
                  <span className="ml-2">{route.name}</span>
                </Button>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent-foreground font-medium">JD</span>
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">Free Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

