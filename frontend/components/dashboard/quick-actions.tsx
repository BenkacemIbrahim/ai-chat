"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Zap, Settings, BarChart3 } from "lucide-react"

export function QuickActions() {
  return (
    <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Zap className="w-5 h-5 mr-2 text-gray-400" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/chat">
            <Button className="w-full h-16 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 flex flex-col items-center justify-center space-y-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Start Chat</span>
            </Button>
          </Link>
          <Link href="/dashboard?tab=preferences">
            <Button
              variant="outline"
              className="w-full h-16 flex flex-col items-center justify-center space-y-1 border-gray-700 hover:bg-gray-800 text-white"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm">Preferences</span>
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              className="w-full h-16 flex flex-col items-center justify-center space-y-1 border-gray-700 hover:bg-gray-800 text-white"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">Upgrade</span>
            </Button>
          </Link>
          <Link href="/features">
            <Button
              variant="outline"
              className="w-full h-16 flex flex-col items-center justify-center space-y-1 border-gray-700 hover:bg-gray-800 text-white"
            >
              <Zap className="w-5 h-5" />
              <span className="text-sm">Features</span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
