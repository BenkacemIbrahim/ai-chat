"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Bell, Shield, MessageCircle } from "lucide-react"

export function AccountSettings() {
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="space-y-6">
      {/* Quick Chat Access */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6 text-gray-400" />
              <div>
                <h3 className="font-semibold text-white">Ready to Chat?</h3>
                <p className="text-sm text-gray-400">
                  Your account is all set up. Start a conversation with your AI assistant.
                </p>
              </div>
            </div>
            <Link href="/chat">
              <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                Open Chat
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <User className="w-5 h-5 mr-2 text-gray-400" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                defaultValue="John Doe"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="john@example.com"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
              Update Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Bell className="w-5 h-5 mr-2 text-gray-400" />
              Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="text-white">
                Email Notifications
              </Label>
              <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
