import { Heart, Home, Plane, GraduationCap, Shield, Coffee } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs.",
  },
  {
    icon: Home,
    title: "Remote First",
    description: "Work from anywhere with flexible hours and home office setup allowance.",
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge with our unlimited vacation policy.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Shield,
    title: "Equity Package",
    description: "Share in our success with competitive equity compensation for all employees.",
  },
  {
    icon: Coffee,
    title: "Team Retreats",
    description: "Annual company retreats and regular team building activities.",
  },
]

export function Benefits() {
  return (
    <section className="py-24 px-4 bg-gray-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Benefits & Perks</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We believe in taking care of our team so they can do their best work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
