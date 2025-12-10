import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

export default function ChatAI3BetaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>February 19, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>CHATAI Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Product</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ChatAI 3 Beta — The Age of Reasoning Agents</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are thrilled to unveil an early preview of ChatAI 3, our most advanced model yet, blending superior
              reasoning with extensive pretraining knowledge.
            </p>
          </header>

          {/* Featured image */}
          <div className="mb-12">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="ChatAI 3 Beta visualization"
              className="w-full h-96 object-cover rounded-lg border border-gray-800"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Reasoning Capabilities</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  ChatAI 3 represents a quantum leap in artificial intelligence reasoning. Our new model demonstrates
                  unprecedented capabilities in complex problem-solving, multi-step reasoning, and contextual
                  understanding that rivals human-level performance across diverse domains.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Built on our proprietary neural architecture, ChatAI 3 combines the breadth of knowledge from massive
                  pretraining with sophisticated reasoning mechanisms that allow it to tackle problems that previously
                  required human expertise.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Advanced Reasoning:</strong> Solve complex mathematical problems,
                      logical puzzles, and multi-step analytical tasks with unprecedented accuracy.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Code Understanding:</strong> Generate, debug, and optimize code
                      across multiple programming languages with deep contextual awareness.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Scientific Analysis:</strong> Process and analyze scientific data,
                      research papers, and complex theoretical concepts.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Creative Problem Solving:</strong> Approach challenges with
                      innovative solutions and creative thinking patterns.
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Performance Benchmarks</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  ChatAI 3 achieves state-of-the-art performance across multiple evaluation benchmarks:
                </p>
                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Mathematical Reasoning</h4>
                      <p className="text-gray-400 text-sm">GSM8K: 94.2% accuracy</p>
                      <p className="text-gray-400 text-sm">MATH: 87.3% accuracy</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Code Generation</h4>
                      <p className="text-gray-400 text-sm">HumanEval: 91.5% pass rate</p>
                      <p className="text-gray-400 text-sm">MBPP: 88.7% pass rate</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Reading Comprehension</h4>
                      <p className="text-gray-400 text-sm">SQuAD 2.0: 96.1% F1 score</p>
                      <p className="text-gray-400 text-sm">DROP: 92.4% F1 score</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Common Sense</h4>
                      <p className="text-gray-400 text-sm">CommonsenseQA: 89.6% accuracy</p>
                      <p className="text-gray-400 text-sm">HellaSwag: 95.3% accuracy</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Beta Access</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're rolling out ChatAI 3 Beta to select users and developers. This early access program allows us to
                  gather feedback and refine the model before general availability.
                </p>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold text-white mb-3">How to Get Access</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    <li>Sign up for our beta program at chatai.ai/beta</li>
                    <li>Complete the application form with your use case</li>
                    <li>Wait for approval (typically 1-2 weeks)</li>
                    <li>Receive your beta API key and documentation</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Looking Forward</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  ChatAI 3 represents just the beginning of our journey toward artificial general intelligence. We're
                  committed to responsible AI development and will continue to improve safety, alignment, and
                  capabilities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We expect to release ChatAI 3 for general availability in Q2 2025, with additional features and
                  improvements based on beta feedback.
                </p>
              </section>
            </div>
          </article>

          {/* Call to action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-900/20 to-gray-800/20 border border-gray-800 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience ChatAI 3?</h3>
            <p className="text-gray-300 mb-6">
              Join our beta program and be among the first to experience the future of AI reasoning.
            </p>
            <Link href="/auth/signup">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium">
                Apply for Beta Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
