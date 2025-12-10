import { Brain, Zap, Shield, Globe, Code, Mic } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced Reasoning",
    description: "Superior cognitive abilities with extensive pretraining knowledge for complex problem solving.",
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Optimized performance with instant responses and real-time processing capabilities.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and privacy protection with zero data retention policies.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available worldwide with support for 50+ languages and cultural understanding.",
  },
  {
    icon: Code,
    title: "Developer Ready",
    description: "Comprehensive API access with extensive documentation and integration guides.",
  },
  {
    icon: Mic,
    title: "Voice Enabled",
    description: "Natural voice interaction with advanced speech recognition and synthesis.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6">Built for the future</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-futuristic-body">
            Experience the next generation of AI with advanced capabilities designed for professionals and creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="card-title text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-futuristic-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
