import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Play, Shield, Zap, Users } from "lucide-react"

export default function DemoLoginFeaturesPage() {
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
              <p className="text-gray-400 text-sm font-mono mb-4">JANUARY 15, 2025</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Demo Login Features: Experience CHATAI Without Commitment
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Discover how our new demo login system lets you explore CHATAI's powerful features instantly, without
                requiring account creation or payment information.
              </p>
            </div>

            <div className="relative mb-12">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="CHATAI demo interface showing login screen"
                className="w-full h-64 md:h-96 object-cover rounded-lg border border-gray-800"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">What's New in Demo Login</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                We're excited to introduce our new demo login feature that removes barriers to experiencing CHATAI.
                Whether you're evaluating AI solutions for your business or simply curious about our capabilities, you
                can now dive right in.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Zap className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Instant Access</h3>
                  <p className="text-gray-400">
                    Start chatting immediately with no signup required. Experience our AI in seconds, not minutes.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Shield className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Privacy First</h3>
                  <p className="text-gray-400">
                    Demo sessions are completely anonymous. No personal data collection during trial usage.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Users className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Full Features</h3>
                  <p className="text-gray-400">
                    Access all core CHATAI features including advanced reasoning, code generation, and analysis.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">How It Works</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                The demo login process is designed to be as frictionless as possible:
              </p>

              <ol className="list-decimal list-inside space-y-4 text-gray-300 mb-8">
                <li>Click "Try Demo" on our homepage or chat page</li>
                <li>Choose from preset conversation starters or ask your own questions</li>
                <li>Experience CHATAI's responses in real-time</li>
                <li>Upgrade to a full account when you're ready for unlimited access</li>
              </ol>

              <h2 className="text-3xl font-bold mb-6">Perfect for Evaluation</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">This feature is particularly valuable for:</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
                <li>Enterprise teams evaluating AI solutions</li>
                <li>Developers testing integration possibilities</li>
                <li>Students and researchers exploring AI capabilities</li>
                <li>Anyone curious about conversational AI</li>
              </ul>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Try?</h3>
                <p className="text-gray-400 mb-6">
                  Experience CHATAI's demo login feature today and see why thousands of users choose our platform for
                  their AI needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/chat">
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8">Start Demo Now</Button>
                  </Link>
                  <Link href="/pricing">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8"
                    >
                      View Pricing
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
