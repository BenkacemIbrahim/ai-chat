"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, User, Zap, Sparkles, Code, Globe, Mic } from "lucide-react"

const mockConversations = [
  {
    id: 1,
    user: "How can you help me with coding?",
    ai: "I can assist with coding in 100+ programming languages! I can help you write functions, debug code, explain complex algorithms, review your code for best practices, and even help you learn new frameworks. What programming challenge are you working on?",
    category: "Code Assistant",
  },
  {
    id: 2,
    user: "Write a creative story about space exploration",
    ai: "**The Last Signal**\n\nCaptain Elena Rodriguez stared at the mysterious signal emanating from the edge of the solar system. After months of deep space travel, her crew had finally reached the source—a crystalline structure that seemed to pulse with its own inner light.\n\n'It's beautiful,' whispered her engineer, Dr. Chen, as they approached in their shuttle. The structure was massive, easily the size of a small moon, with geometric patterns that shifted and changed as they watched.\n\nSuddenly, the crystal began to resonate, and Elena realized they weren't just discovering something new—they were being welcomed home.",
    category: "Creative Writing",
  },
  {
    id: 3,
    user: "Explain quantum computing in simple terms",
    ai: "Think of classical computers as very fast librarians who can only read one book at a time. They process information bit by bit, like flipping coins that land either heads (1) or tails (0).\n\nQuantum computers are like magical librarians who can read ALL the books in the library simultaneously! They use 'quantum bits' or 'qubits' that can be heads, tails, or both at the same time (called superposition).\n\nThis allows them to explore many possible solutions to a problem all at once, making them incredibly powerful for specific tasks like cryptography, drug discovery, and optimization problems.",
    category: "Education",
  },
]

export function MockChatInterface() {
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const conversation = mockConversations[currentConversation]
    setIsTyping(true)
    setDisplayedText("")

    const fullText = conversation.ai
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [currentConversation])

  const nextConversation = () => {
    setCurrentConversation((prev) => (prev + 1) % mockConversations.length)
  }

  const conversation = mockConversations[currentConversation]

  return (
    <div className="flex flex-col h-full">
      {/* Demo Controls */}
      <div className="p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Badge
              variant="outline"
              className="bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {conversation.category}
            </Badge>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              Sample conversation {currentConversation + 1} of {mockConversations.length}
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={nextConversation}>
            Next Example
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* User Message */}
        <div className="flex gap-3 flex-row-reverse">
          <Avatar className="w-8 h-8 mt-1">
            <AvatarFallback className="bg-gray-100 dark:bg-gray-900">
              <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 max-w-[80%] text-right">
            <div className="inline-block p-4 rounded-2xl bg-gray-700 text-white">
              <p className="text-white">{conversation.user}</p>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-3">
          <Avatar className="w-8 h-8 mt-1">
            <AvatarFallback className="bg-gray-600">
              <Zap className="w-4 h-4 text-white" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 max-w-[80%]">
            <div className="inline-block p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {displayedText.split("\n").map((line, index) => (
                  <p key={index} className={index === 0 ? "mt-0" : ""}>
                    {line}
                  </p>
                ))}
                {isTyping && <span className="animate-pulse">▋</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { icon: Code, title: "Code Generation", desc: "Write, debug, and explain code" },
            { icon: Globe, title: "50+ Languages", desc: "Communicate in any language" },
            { icon: Mic, title: "Voice Enabled", desc: "Speak and hear responses" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white text-sm">{feature.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Input (Disabled) */}
      <div className="p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="flex items-end space-x-2">
          <div className="flex-1 relative">
            <Input
              placeholder="This is a preview - log in to start chatting..."
              className="min-h-[48px] pr-12 resize-none rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              disabled
            />
          </div>
          <Button disabled className="h-12 w-12 rounded-2xl bg-gray-600 hover:bg-gray-700 opacity-50">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
