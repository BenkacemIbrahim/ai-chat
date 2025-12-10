import { MessageCircle, Brain, Globe, Code, Mic, Eye } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Chat Completions",
    description: "Generate human-like responses for conversational AI applications with context awareness.",
    endpoint: "/v1/chat/completions",
  },
  {
    icon: Brain,
    title: "Text Generation",
    description: "Create high-quality content, summaries, and creative writing with advanced language models.",
    endpoint: "/v1/completions",
  },
  {
    icon: Globe,
    title: "Translation",
    description: "Translate text between 50+ languages with native-level fluency and cultural understanding.",
    endpoint: "/v1/translate",
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Generate, debug, and explain code in 100+ programming languages with context awareness.",
    endpoint: "/v1/code",
  },
  {
    icon: Mic,
    title: "Speech-to-Text",
    description: "Convert audio to text with high accuracy and support for multiple languages and accents.",
    endpoint: "/v1/audio/transcriptions",
  },
  {
    icon: Eye,
    title: "Vision Analysis",
    description: "Analyze images, extract text, and understand visual content with computer vision capabilities.",
    endpoint: "/v1/vision/analyze",
  },
]

export function APIFeatures() {
  return (
    <section className="py-24 px-4 bg-gray-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful API Endpoints</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Access cutting-edge AI capabilities through our comprehensive API suite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
              <code className="text-sm text-gray-300 bg-gray-800/50 px-2 py-1 rounded">{feature.endpoint}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
