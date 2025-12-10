import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Code, Shield, Zap } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  {
    title: "Quick Start",
    description: "Get up and running with ChatAI API in minutes",
    icon: Zap,
    href: "/docs/quick-start",
    color: "text-blue-400",
  },
  {
    title: "API Reference",
    description: "Complete API documentation and endpoints",
    icon: Code,
    href: "/docs/api-reference",
    color: "text-green-400",
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides and examples",
    icon: Book,
    href: "/docs/tutorials",
    color: "text-purple-400",
  },
  {
    title: "Security",
    description: "Best practices for secure implementation",
    icon: Shield,
    href: "/docs/security",
    color: "text-orange-400",
  },
]

export function DocsContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Everything you need to integrate ChatAI into your applications. From quick start guides to comprehensive API
          references.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {quickLinks.map((link, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all group">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <link.icon className={`w-6 h-6 mr-3 ${link.color}`} />
                  {link.title}
                </CardTitle>
                <p className="text-gray-400">{link.description}</p>
              </CardHeader>
              <CardContent>
                <Link href={link.href}>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800 group-hover:border-gray-600"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Get Your API Key</h3>
                <p className="text-gray-300 mb-4">
                  Sign up for a ChatAI account and generate your API key from the dashboard.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <code className="text-green-400">export CHATAI_API_KEY="your-api-key-here"</code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Make Your First Request</h3>
                <p className="text-gray-300 mb-4">Send a simple chat completion request to get started.</p>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>{`curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {"role": "user", "content": "Hello, ChatAI!"}
    ]
  }'`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Explore Advanced Features</h3>
                <p className="text-gray-300">
                  Discover streaming responses, function calling, and other advanced capabilities in our comprehensive
                  guides.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Endpoints */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Popular Endpoints</h2>
        <div className="space-y-4">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white mb-2">Chat Completions</h4>
                  <p className="text-gray-400 text-sm">Generate conversational responses</p>
                  <code className="text-green-400 text-sm">POST /v1/chat/completions</code>
                </div>
                <Link href="/docs/api-reference#chat-completions">
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View Docs
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white mb-2">Text Completions</h4>
                  <p className="text-gray-400 text-sm">Complete text prompts</p>
                  <code className="text-green-400 text-sm">POST /v1/completions</code>
                </div>
                <Link href="/docs/api-reference#completions">
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View Docs
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white mb-2">Models</h4>
                  <p className="text-gray-400 text-sm">List available models</p>
                  <code className="text-green-400 text-sm">GET /v1/models</code>
                </div>
                <Link href="/docs/api-reference#models">
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View Docs
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Support */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-6">Can't find what you're looking for? Our support team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2">Contact Support</Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
                View FAQ
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
