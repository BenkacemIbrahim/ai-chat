import { MessageCircle, Code, BookOpen } from "lucide-react"

const products = [
  {
    title: "ChatAI",
    description:
      "ChatAI is your cosmic guide, now accessible on chatai.com, iOS, and Android. Explore the universe with AI.",
    icon: MessageCircle,
    image: "/placeholder.svg?height=200&width=300",
    imageAlt: "ChatAI interface showing conversation with AI assistant on multiple devices",
  },
  {
    title: "API",
    description:
      "Supercharge your applications with ChatAI's enhanced speed, precision, and multilingual capabilities.",
    icon: Code,
    image: "/placeholder.svg?height=200&width=300",
    imageAlt: "Code editor showing ChatAI API integration with syntax highlighting",
  },
  {
    title: "Developer Docs",
    description:
      "Learn how to quickly install ChatAI at the heart of your applications and explore guides covering common use cases.",
    icon: BookOpen,
    image: "/placeholder.svg?height=200&width=300",
    imageAlt: "Documentation website with code examples and integration guides",
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm font-mono mb-4">[ PRODUCTS ]</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white">AI for all humanity</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              <div className="mb-6">
                <product.icon className="w-8 h-8 text-gray-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg border border-gray-800/50 bg-gradient-to-br from-gray-800/20 to-transparent">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-medium">Live Demo Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
