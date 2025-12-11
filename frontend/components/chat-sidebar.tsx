"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Search, MessageCircle, Trash2, Edit, X } from "lucide-react"
import { API_URL } from "@/lib/config"
import { formatDistanceToNow } from "date-fns"

type HistoryItem = {
  id: string
  title: string
  timestamp: string
}

interface ChatSidebarProps {
  onClose?: () => void
}

export function ChatSidebar({ onClose }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [history, setHistory] = useState<HistoryItem[]>([])
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
    if (!token) return
    fetch(`${API_URL}/api/messages`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) return
        const data = await res.json()
        const items = Array.isArray(data?.data) ? data.data : []
        if (items.length === 0) {
          setHistory([])
          return
        }
        const firstUser = items.find((m: any) => m.role === "user")
        const last = items[items.length - 1]
        const titleSource: string = String(firstUser?.content ?? "")
        const title =
          titleSource.length > 80 ? `${titleSource.slice(0, 80).trim()}…` : titleSource.trim() || "Untitled"
        const created = last?.created_at ? new Date(last.created_at) : new Date()
        setHistory([
          {
            id: "current",
            title,
            timestamp: formatDistanceToNow(created, { addSuffix: true }),
          },
        ])
      })
      .catch(() => { })
  }, [])

  const filteredHistory = history.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleNewChat = () => {
    // Refresh the current chat page to start a new conversation
    router.refresh()
    window.location.reload()
  }

  return (
    <div className="h-full w-80 bg-gray-950 border-r border-gray-900 flex flex-col">
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-end p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Header */}
      <div className="p-4">
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={handleNewChat}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Chat History */}
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-2">
          {filteredHistory.map((chat) => (
            <div
              key={chat.id}
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-900 cursor-pointer"
              onClick={onClose} // Close sidebar when chat is selected on mobile
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <MessageCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white truncate">{chat.title}</p>
                  <p className="text-xs text-gray-500">{chat.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500 hover:text-red-400">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-gray-900">
        <div className="text-xs text-gray-500 text-center">
          <p>Free plan: 20/50 messages used</p>
          <Link href="/pricing">
            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-blue-400 hover:text-blue-300">
              Upgrade to Pro
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
