"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Settings, Lock, ArrowRight, Play, Zap } from "lucide-react"
import { PreferencesPanel } from "@/components/chat/preferences-panel"
import { MockChatInterface } from "@/components/chat/mock-chat-interface"

export function ChatPreview() {
  const [activeTab, setActiveTab] = useState<"chat" | "preferences">("chat")

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900/30 to-black py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Experience{" "}
            <span className="text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text">
              CHATAI
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our AI assistant's capabilities and customize your experience before diving into real conversations.
          </p>
        </div>

        {/* Main Preview Container */}
        <div className="relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 via-gray-700/10 to-gray-600/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl">
            {/* Tab Navigation */}
            <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-white font-semibold">CHATAI Preview Console</span>
                  </div>
                  <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    Live Demo
                  </Badge>
                </div>

                <div className="flex space-x-1 bg-gray-900/50 rounded-xl p-1">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeTab === "chat"
                        ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    AI Chat Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("preferences")}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeTab === "preferences"
                        ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <Settings className="w-4 h-4 inline mr-2" />
                    Customization
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="h-[600px] overflow-hidden">
              {activeTab === "chat" ? <MockChatInterface /> : <PreferencesPanel />}
            </div>

            {/* Enhanced Login CTA */}
            <div className="bg-gradient-to-r from-gray-800/80 via-gray-900/80 to-gray-800/80 backdrop-blur-sm border-t border-gray-700/50">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Ready to unlock the full AI experience?</h3>
                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        Log in to start real conversations with our advanced AI assistant. Access unlimited messages,
                        voice interaction, and personalized settings.
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Zap className="w-4 h-4 mr-1 text-gray-400" />
                          Unlimited conversations
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Settings className="w-4 h-4 mr-1 text-gray-400" />
                          Custom preferences
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MessageCircle className="w-4 h-4 mr-1 text-green-400" />
                          Voice interaction
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 flex-shrink-0">
                    <Link href="/auth/login">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try Demo Login
                      </Button>
                    </Link>
                    <Link href="/auth/signup">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Start Chatting Free
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                    <span>✓ No credit card required</span>
                    <span>✓ Free forever plan</span>
                    <span>✓ Instant access</span>
                    <span>✓ Demo credentials available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
