import { Brain, Users, Zap, Globe } from "lucide-react"

const values = [
  {
    icon: Brain,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI, constantly exploring new frontiers in artificial intelligence.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    description:
      "Technology should serve humanity. We design AI that augments human capabilities rather than replacing them.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description:
      "We iterate quickly, learn from failures, and ship products that make a real difference in people's lives.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our vision is a world where language barriers don't exist and knowledge is accessible to all.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The principles that guide everything we do at CHATAI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              <value.icon className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
