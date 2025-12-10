import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Mic, Volume2, Headphones, Smartphone } from "lucide-react"

export default function VoiceInteractionGuidePage() {
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
              <p className="text-gray-400 text-sm font-mono mb-4">JANUARY 5, 2025</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Voice Interaction Guide: Talk Naturally with CHATAI
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Master the art of voice interaction with CHATAI. Learn tips, tricks, and best practices for seamless
                voice-powered conversations with our AI assistant.
              </p>
            </div>

            <div className="relative mb-12">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Person using voice interaction with CHATAI on various devices"
                className="w-full h-64 md:h-96 object-cover rounded-lg border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-green-500/10 to-transparent rounded-lg"></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Why Voice Interaction Matters</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Voice interaction represents the most natural form of human communication. With CHATAI's advanced voice
                capabilities, you can have fluid, natural conversations while multitasking, driving, or when typing
                isn't convenient.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Mic className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Natural Speech Recognition</h3>
                  <p className="text-gray-400">
                    Advanced AI understands natural speech patterns, accents, and conversational nuances.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Volume2 className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Expressive Voice Synthesis</h3>
                  <p className="text-gray-400">
                    CHATAI responds with natural-sounding speech that conveys emotion and emphasis appropriately.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Headphones className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Hands-Free Operation</h3>
                  <p className="text-gray-400">
                    Perfect for multitasking, accessibility needs, or when you need to keep your hands free.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <Smartphone className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Cross-Platform Support</h3>
                  <p className="text-gray-400">
                    Voice interaction works seamlessly across desktop, mobile, and smart speaker platforms.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Getting Started with Voice</h2>

              <h3 className="text-2xl font-bold mb-4">Setting Up Voice Interaction</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
                <li>Enable microphone permissions in your browser or app</li>
                <li>Test your microphone quality in the settings panel</li>
                <li>Choose your preferred voice response style</li>
                <li>Set up wake words or push-to-talk preferences</li>
              </ol>

              <h3 className="text-2xl font-bold mb-4">Voice Interaction Best Practices</h3>

              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold mb-3">Speaking Tips</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Speak clearly and at a moderate pace</li>
                  <li>Use natural pauses between thoughts</li>
                  <li>State your request directly and specifically</li>
                  <li>Don't worry about perfect grammar - CHATAI understands context</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold mb-3">Environment Optimization</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Use in quiet environments when possible</li>
                  <li>Position yourself 1-3 feet from your microphone</li>
                  <li>Consider using a headset for better audio quality</li>
                  <li>Minimize background noise and echo</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6">Advanced Voice Features</h2>

              <h3 className="text-2xl font-bold mb-4">Voice Commands</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                CHATAI supports a variety of voice commands for enhanced productivity:
              </p>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-white mb-2">Navigation Commands</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>"Go back" - Return to previous topic</li>
                      <li>"Start over" - Begin new conversation</li>
                      <li>"Repeat that" - Replay last response</li>
                      <li>"Pause" - Stop current playback</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">Content Commands</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>"Make it shorter" - Condense response</li>
                      <li>"Explain more" - Provide detailed explanation</li>
                      <li>"Give me examples" - Add practical examples</li>
                      <li>"Summarize" - Create brief summary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Conversation Flow</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                CHATAI maintains conversation context across voice interactions, allowing for natural follow-up
                questions and references to previous topics without repetition.
              </p>

              <h2 className="text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-2">CHATAI doesn't understand me</h4>
                  <p className="text-gray-400 text-sm">
                    Try speaking more slowly, check your microphone settings, or rephrase your question. CHATAI learns
                    from corrections, so providing feedback helps improve recognition.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-2">Voice responses are too fast/slow</h4>
                  <p className="text-gray-400 text-sm">
                    Adjust the speech rate in your voice settings. You can also say "speak slower" or "speak faster"
                    during conversations for immediate adjustment.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-2">Audio quality issues</h4>
                  <p className="text-gray-400 text-sm">
                    Check your internet connection, try using headphones, or switch to a different microphone. The audio
                    quality test in settings can help diagnose issues.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border border-blue-800/50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Talking?</h3>
                <p className="text-gray-300 mb-6">
                  Voice interaction makes CHATAI more accessible and natural than ever. Start your first voice
                  conversation today and experience the future of AI communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/chat">
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8">Try Voice Chat</Button>
                  </Link>
                  <Link href="/features">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8"
                    >
                      Voice Features
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
