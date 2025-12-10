import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function GettingStartedPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            {/* Article Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-gray-600 text-white">Tutorial</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Getting Started with NeuralChat: Your Complete Guide
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Learn how to make the most of NeuralChat's AI capabilities, from using demo credentials to customizing
                your experience for maximum productivity.
              </p>
              <div className="flex items-center space-x-6 text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Sarah Chen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quick Start with Demo Access</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  The fastest way to experience NeuralChat is through our demo account. No signup required!
                </p>
                <Card className="bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Demo Credentials</h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <strong>Email:</strong>{" "}
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">demo@chatapp.com</code>
                      </div>
                      <div>
                        <strong>Password:</strong>{" "}
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Demo123!</code>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Link href="/auth/login">
                        <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Try Demo Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2>Understanding Preview vs. Full Access</h2>
              <p>NeuralChat offers two ways to explore our platform:</p>
              <ul>
                <li>
                  <strong>Preview Mode:</strong> Visit the chat page without logging in to see sample conversations and
                  explore customization options
                </li>
                <li>
                  <strong>Full Access:</strong> Log in with demo credentials or your account for unlimited
                  conversations, voice interaction, and personalized settings
                </li>
              </ul>

              <h2>Exploring the Chat Interface</h2>
              <p>Once you're logged in, you'll have access to our full-featured chat interface:</p>
              <ul>
                <li>
                  <strong>Real-time conversations</strong> with advanced AI models
                </li>
                <li>
                  <strong>Voice input and output</strong> for hands-free interaction
                </li>
                <li>
                  <strong>Code generation and debugging</strong> in 100+ programming languages
                </li>
                <li>
                  <strong>Multi-language support</strong> for global communication
                </li>
                <li>
                  <strong>Chat history</strong> with search and organization features
                </li>
              </ul>

              <h2>Customizing Your Experience</h2>
              <p>NeuralChat's power lies in its customization. Access your preferences through:</p>
              <ol>
                <li>Navigate to Dashboard → Preferences after logging in</li>
                <li>Choose your preferred theme (Light, Dark, or System)</li>
                <li>Select your language from 50+ supported options</li>
                <li>Pick an AI personality that matches your workflow</li>
                <li>Configure accessibility settings like high contrast and font size</li>
              </ol>

              <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-8">
                <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-2">💡 Pro Tip</h3>
                <p className="text-gray-800 dark:text-gray-200 mb-0">
                  Try different AI personalities for different tasks. Use "Professional Assistant" for business
                  communications, "Creative Writer" for content creation, and "Patient Teacher" for learning new
                  concepts.
                </p>
              </div>

              <h2>Advanced Features</h2>
              <p>Once you're comfortable with the basics, explore these advanced capabilities:</p>
              <ul>
                <li>
                  <strong>Voice Interaction:</strong> Enable voice input/output in preferences for hands-free
                  conversations
                </li>
                <li>
                  <strong>Code Assistant:</strong> Get help with programming, debugging, and technical documentation
                </li>
                <li>
                  <strong>Multi-language Conversations:</strong> Switch languages mid-conversation for global
                  collaboration
                </li>
                <li>
                  <strong>Chat Organization:</strong> Use the sidebar to manage and search through your conversation
                  history
                </li>
              </ul>

              <h2>Getting Help</h2>
              <p>Need assistance? We're here to help:</p>
              <ul>
                <li>
                  Check our{" "}
                  <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:underline">
                    FAQ section
                  </Link>{" "}
                  for common questions
                </li>
                <li>
                  Visit the{" "}
                  <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:underline">
                    Contact page
                  </Link>{" "}
                  for direct support
                </li>
                <li>
                  Explore our{" "}
                  <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:underline">
                    Features page
                  </Link>{" "}
                  for detailed capability overviews
                </li>
              </ul>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 my-8">
                <h3 className="font-semibold mb-3">Ready to Start?</h3>
                <p className="mb-4">
                  You now have everything you need to make the most of NeuralChat. Start with our demo account and
                  explore all the features at your own pace.
                </p>
                <div className="flex space-x-3">
                  <Link href="/auth/login">
                    <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                      Try Demo Account
                    </Button>
                  </Link>
                  <Link href="/chat">
                    <Button variant="outline">Explore Preview</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
