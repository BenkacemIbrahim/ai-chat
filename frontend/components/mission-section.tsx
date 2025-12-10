import { Target, Users, Lightbulb, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize access to advanced AI technology, making intelligent assistance available to everyone, everywhere.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We're constantly pushing the boundaries of what's possible with AI, developing cutting-edge solutions for real-world problems.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    description:
      "Technology should serve humanity. We design AI that augments human capabilities rather than replacing them.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our vision is a world where language barriers don't exist and knowledge is accessible to all.",
  },
]

export function MissionSection() {
  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Founded in 2023 by a team of AI researchers and engineers, NeuralChat was born from a simple belief:
              artificial intelligence should be accessible, helpful, and human-friendly.
            </p>
            <p>
              We've assembled a world-class team of experts in machine learning, natural language processing, and user
              experience design to create the most advanced AI assistant available today.
            </p>
            <p>
              Our commitment to privacy, security, and ethical AI development guides everything we do, ensuring that our
              technology benefits everyone while respecting individual rights and freedoms.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/20 p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-2">2023</div>
                <div className="text-sm text-gray-300">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-2">50K+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-2">25+</div>
                <div className="text-sm text-gray-300">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <value.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
            <p className="text-gray-300 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
