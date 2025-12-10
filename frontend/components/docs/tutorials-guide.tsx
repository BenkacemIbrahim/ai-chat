import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const tutorials = [
  {
    title: "Building Your First Chatbot",
    description: "Learn how to create a simple chatbot using the ChatAI API",
    difficulty: "Beginner",
    duration: "15 min",
    author: "ChatAI Team",
    tags: ["Chat", "Beginner", "JavaScript"],
    href: "/chat?tutorial=first-chatbot",
  },
  {
    title: "Implementing Streaming Responses",
    description: "Add real-time streaming to your chat applications",
    difficulty: "Intermediate",
    duration: "25 min",
    author: "ChatAI Team",
    tags: ["Streaming", "Real-time", "Advanced"],
    href: "/chat?tutorial=streaming",
  },
  {
    title: "Function Calling with ChatAI",
    description: "Extend your AI with custom functions and tools",
    difficulty: "Advanced",
    duration: "35 min",
    author: "ChatAI Team",
    tags: ["Functions", "Tools", "Advanced"],
    href: "/chat?tutorial=function-calling",
  },
  {
    title: "Building a Code Assistant",
    description: "Create an AI-powered code completion and review tool",
    difficulty: "Intermediate",
    duration: "30 min",
    author: "ChatAI Team",
    tags: ["Code", "Assistant", "Development"],
    href: "/chat?tutorial=code-assistant",
  },
  {
    title: "Multi-language Translation App",
    description: "Build a real-time translation application",
    difficulty: "Beginner",
    duration: "20 min",
    author: "ChatAI Team",
    tags: ["Translation", "Multilingual", "React"],
    href: "/chat?tutorial=translation-app",
  },
  {
    title: "Content Moderation System",
    description: "Implement AI-powered content moderation",
    difficulty: "Advanced",
    duration: "40 min",
    author: "ChatAI Team",
    tags: ["Moderation", "Safety", "Enterprise"],
    href: "/chat?tutorial=content-moderation",
  },
]

// Custom Difficulty Badge Component (similar to status page badges)
const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-600/30 to-emerald-500/30 border-2 border-emerald-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🟢",
          text: "text-emerald-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-emerald-500/20 rounded-lg blur-md",
        }
      case "Intermediate":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-600/30 to-amber-500/30 border-2 border-amber-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🟡",
          text: "text-amber-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-amber-500/20 rounded-lg blur-md",
        }
      case "Advanced":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-600/30 to-red-500/30 border-2 border-red-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🔴",
          text: "text-red-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-red-500/20 rounded-lg blur-md",
        }
      default:
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-600/30 to-gray-500/30 border-2 border-gray-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "⚪",
          text: "text-gray-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-gray-500/20 rounded-lg blur-md",
        }
    }
  }

  const styles = getDifficultyStyles(difficulty)

  return (
    <div className={styles.container}>
      <div className={styles.glow}></div>
      <span className="text-sm mr-1 relative z-10">{styles.icon}</span>
      <span className={`${styles.text} relative z-10`}>{difficulty}</span>
    </div>
  )
}

// Custom Tag Badge Component (similar to status page badges)
const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-400/30 rounded-full backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-full blur-sm"></div>
      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
      <span className="text-slate-300 font-medium text-sm tracking-wide ml-2 relative z-10">{tag}</span>
    </div>
  )
}

export function TutorialsGuide() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Tutorials</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Step-by-step guides to help you build amazing applications with ChatAI. From basic chatbots to advanced AI
          systems.
        </p>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-800">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">New to ChatAI?</h3>
              <p className="text-gray-300 mb-4">Start with our quick start guide to get up and running in minutes.</p>
              <Link href="/docs/quick-start">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Quick Start Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tutorials Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">All Tutorials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <DifficultyBadge difficulty={tutorial.difficulty} />
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{tutorial.author}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                  {tutorial.title}
                </CardTitle>
                <p className="text-gray-400">{tutorial.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag, tagIndex) => (
                      <TagBadge key={tagIndex} tag={tag} />
                    ))}
                  </div>
                  <Link href={tutorial.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-white hover:bg-gray-800 group-hover:border-gray-600"
                    >
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recommended Learning Path</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white">Start with the Basics</h4>
                  <p className="text-gray-400">Learn API fundamentals and build your first chatbot</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white">Add Advanced Features</h4>
                  <p className="text-gray-400">Implement streaming, function calling, and specialized applications</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white">Build Production Systems</h4>
                  <p className="text-gray-400">Learn about scaling, monitoring, and enterprise features</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
          <p className="text-gray-300 mb-6">
            Connect with other developers, share your projects, and get help from the ChatAI community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2">Join Discord</Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
              GitHub Discussions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
