import { Brain, Shield, Zap, Globe, Code, Mic, Eye, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Powered by the latest GPT-4 and custom-trained models for superior understanding and responses.",
    category: "AI Technology",
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description: "Get instant answers with our optimized infrastructure and edge computing network.",
    category: "Performance",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and zero data retention policies.",
    category: "Security",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Communicate naturally in over 50 languages with native-level fluency and cultural awareness.",
    category: "Multilingual",
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Generate, debug, and explain code in 100+ programming languages with context awareness.",
    category: "Development",
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Speak naturally and hear responses with advanced speech recognition and synthesis.",
    category: "Voice AI",
  },
  {
    icon: Eye,
    title: "Vision Capabilities",
    description: "Analyze images, charts, and documents with advanced computer vision technology.",
    category: "Multimodal",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share conversations, create team workspaces, and collaborate on AI-assisted projects.",
    category: "Collaboration",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your AI assistant anytime, anywhere with 99.9% uptime guarantee.",
    category: "Reliability",
  },
]

export function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{feature.category}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
