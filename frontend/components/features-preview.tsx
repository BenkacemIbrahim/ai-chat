import { MessageCircle, Zap, Shield, Globe, Mic, Code } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Engage in human-like conversations with advanced language understanding",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses with our optimized AI infrastructure",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations are encrypted and never stored without permission",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Communicate in over 50 languages with native-level fluency",
  },
  {
    icon: Mic,
    title: "Voice Enabled",
    description: "Speak naturally and hear responses with advanced voice synthesis",
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Get help with programming, debugging, and technical documentation",
  },
]

export function FeaturesPreview() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Powerful Features</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover what makes NeuralChat the most advanced AI assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
