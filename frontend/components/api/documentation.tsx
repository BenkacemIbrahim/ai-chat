import { Button } from "@/components/ui/button"
import { Book, Code, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    icon: Book,
    title: "API Reference",
    description: "Complete documentation for all endpoints, parameters, and response formats.",
    link: "/docs/api-reference",
  },
  {
    icon: Code,
    title: "SDKs & Libraries",
    description: "Official SDKs for Python, JavaScript, Go, and more programming languages.",
    link: "/docs/sdks",
  },
  {
    icon: MessageCircle,
    title: "Tutorials",
    description: "Step-by-step guides to help you build amazing applications with CHATAI.",
    link: "/docs/tutorials",
  },
]

export function Documentation() {
  return (
    <section className="py-24 px-4" id="documentation">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Documentation & Resources</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to integrate CHATAI into your applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300 group"
            >
              <resource.icon className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
              <Link href={resource.link}>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 group-hover:border-gray-400"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-900/30 border border-gray-800 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our developer support team is here to help you integrate CHATAI into your applications. Get personalized
            assistance and technical guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-full px-8">Contact Support</Button>
            </Link>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8">
              Join Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
