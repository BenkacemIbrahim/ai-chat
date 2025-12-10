"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Code, Mic, Eye } from "lucide-react"

const showcaseFeatures = [
  {
    id: "chat",
    icon: MessageCircle,
    title: "Natural Conversation",
    description: "Experience human-like conversations with context awareness and emotional intelligence.",
    demo: "Ask me anything about quantum physics, creative writing, or help with your daily tasks.",
  },
  {
    id: "code",
    icon: Code,
    title: "Code Assistant",
    description: "Generate, debug, and explain code with advanced programming knowledge.",
    demo: '// Generate a React component\nfunction UserProfile({ user }) {\n  return (\n    <div className="profile">\n      <h2>{user.name}</h2>\n      <p>{user.email}</p>\n    </div>\n  )\n}',
  },
  {
    id: "voice",
    icon: Mic,
    title: "Voice Interaction",
    description: "Speak naturally and hear responses with advanced speech technology.",
    demo: '🎤 "Hey NeuralChat, can you help me write a professional email?"',
  },
  {
    id: "vision",
    icon: Eye,
    title: "Vision Analysis",
    description: "Analyze images, charts, and documents with computer vision.",
    demo: "📊 Upload charts, diagrams, or photos for instant analysis and insights.",
  },
]

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState("chat")

  const currentFeature = showcaseFeatures.find((f) => f.id === activeFeature) || showcaseFeatures[0]

  return (
    <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Interactive Demo</h3>
        <p className="text-slate-600 dark:text-slate-300">Explore our key features in action</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {showcaseFeatures.map((feature) => (
          <Button
            key={feature.id}
            variant={activeFeature === feature.id ? "default" : "outline"}
            className={`h-auto p-4 flex flex-col items-center space-y-2 ${
              activeFeature === feature.id ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white" : ""
            }`}
            onClick={() => setActiveFeature(feature.id)}
          >
            <feature.icon className="w-6 h-6" />
            <span className="text-sm font-medium">{feature.title}</span>
          </Button>
        ))}
      </div>

      <div className="bg-white/50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
            <currentFeature.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{currentFeature.title}</h4>
            <p className="text-slate-600 dark:text-slate-300">{currentFeature.description}</p>
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 font-mono text-sm">
          <pre className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">{currentFeature.demo}</pre>
        </div>
      </div>
    </div>
  )
}
