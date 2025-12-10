import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Brain, Target, Sparkles, TrendingUp } from "lucide-react"

export default function AIPersonalizationPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <p className="text-gray-400 text-sm font-mono mb-4">JANUARY 10, 2025</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Personalization: How CHATAI Learns Your Preferences
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Discover how our advanced personalization engine adapts to your communication style, preferences, and
                workflow to deliver increasingly relevant and helpful responses.
              </p>
            </div>

            <div className="relative mb-12">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="AI personalization dashboard showing user preferences and learning patterns"
                className="w-full h-64 md:h-96 object-cover rounded-lg border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-transparent rounded-lg"></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">The Science of AI Personalization</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                CHATAI's personalization engine goes beyond simple preference storage. It employs advanced machine
                learning techniques to understand your unique communication patterns, work style, and information needs,
                creating a truly personalized AI assistant experience.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Brain className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Adaptive Learning</h3>
                  <p className="text-gray-400">
                    Our AI continuously learns from your interactions, improving response quality and relevance over
                    time.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Target className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Context Awareness</h3>
                  <p className="text-gray-400">
                    CHATAI remembers your project contexts, preferred formats, and communication style across sessions.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Smart Suggestions</h3>
                  <p className="text-gray-400">
                    Receive proactive suggestions and shortcuts based on your usage patterns and current tasks.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
                  <p className="text-gray-400">
                    The system optimizes response speed and accuracy based on your most frequent use cases.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Key Personalization Features</h2>

              <h3 className="text-2xl font-bold mb-4">Communication Style Adaptation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                CHATAI learns whether you prefer concise bullet points or detailed explanations, formal or casual tone,
                technical depth or simplified overviews. This ensures every response matches your preferred
                communication style.
              </p>

              <h3 className="text-2xl font-bold mb-4">Workflow Integration</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The AI recognizes your work patterns and can automatically suggest relevant templates, formats, and
                approaches based on your current project or task context.
              </p>

              <h3 className="text-2xl font-bold mb-4">Privacy-First Learning</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                All personalization happens with your explicit consent and full transparency. You maintain complete
                control over what data is used for personalization and can adjust or reset preferences at any time.
              </p>

              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Real-World Impact</h3>
                <p className="text-gray-300 mb-4">
                  Users report up to 40% improvement in response relevance and 60% reduction in follow-up questions
                  after the personalization engine has learned their preferences.
                </p>
                <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-300">
                  "CHATAI now feels like it truly understands how I work. The responses are exactly what I need,
                  formatted how I like them, without me having to ask."
                </blockquote>
                <p className="text-sm text-gray-400 mt-2">— Sarah Chen, Product Manager</p>
              </div>

              <h2 className="text-3xl font-bold mb-6">Getting Started with Personalization</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Personalization begins working immediately, but you can accelerate the process:
              </p>

              <ol className="list-decimal list-inside space-y-4 text-gray-300 mb-8">
                <li>Complete the optional onboarding questionnaire</li>
                <li>Use the feedback buttons to rate response quality</li>
                <li>Set your preferences in the personalization dashboard</li>
                <li>Engage regularly to help the AI learn your patterns</li>
              </ol>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Experience Personalized AI</h3>
                <p className="text-gray-400 mb-6">
                  Ready to experience AI that truly understands you? Start your personalized CHATAI journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/chat">
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8">
                      Try Personalization
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8"
                    >
                      Learn More
                    </Button>
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
