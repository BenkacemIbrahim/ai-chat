import Link from "next/link"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    date: "JANUARY 15, 2025",
    title: "Demo Login Features: Experience CHATAI Without Commitment",
    description:
      "Discover how our new demo login system lets you explore CHATAI's powerful features instantly, without requiring account creation or payment information.",
    category: "FEATURES",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "CHATAI demo interface showing instant access features",
    label: "DEMO ACCESS",
    href: "/blog/demo-login-features",
  },
  {
    date: "JANUARY 10, 2025",
    title: "AI Personalization: How CHATAI Learns Your Preferences",
    description:
      "Discover how our advanced personalization engine adapts to your communication style, preferences, and workflow to deliver increasingly relevant responses.",
    category: "AI TECH",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "AI personalization dashboard showing adaptive learning patterns",
    label: "PERSONALIZATION",
    href: "/blog/ai-personalization",
  },
  {
    date: "JANUARY 5, 2025",
    title: "Voice Interaction Guide: Talk Naturally with CHATAI",
    description:
      "Master the art of voice interaction with CHATAI. Learn tips, tricks, and best practices for seamless voice-powered conversations with our AI assistant.",
    category: "GUIDE",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Person using voice interaction with CHATAI on various devices",
    label: "VOICE GUIDE",
    href: "/blog/voice-interaction-guide",
  },
]

export function NewsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-gray-400 text-sm font-mono mb-4">[ BLOG ]</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Latest news</h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 rounded-full px-6">
              EXPLORE MORE
            </Button>
          </Link>
        </div>

        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 0 ? "order-2 md:order-1" : "order-2"}`}>
                <p className="text-gray-400 text-sm font-mono mb-4">{item.date}</p>
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-sm">{item.category}</span>
                  <Link href={item.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-700 rounded-full"
                    >
                      READ
                    </Button>
                  </Link>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? "order-1 md:order-2" : "order-1"} relative`}>
                <div className="relative overflow-hidden rounded-lg border border-gray-800">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.imageAlt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 via-gray-500/10 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold bg-black/40 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs text-gray-300 font-medium">{item.category}</span>
                    </div>
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
