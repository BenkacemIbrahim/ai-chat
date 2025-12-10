import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

export default function SeriesCFundingPage() {
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
                <span>December 23, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>CHATAI Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Company</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ChatAI raises $6B Series C</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are partnering with A16Z, Blackrock, Fidelity Management & Research Company, Kingdom Holdings,
              Lightspeed, MGX, Morgan Stanley, OIA, QIA, Sequoia Capital, Valor Equity Partners and Vy Capital, amongst
              others.
            </p>
          </header>

          {/* Featured image */}
          <div className="mb-12">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Series C funding announcement"
              className="w-full h-96 object-cover rounded-lg border border-gray-800"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">A Milestone in AI Development</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Today marks a significant milestone in ChatAI's journey. We're thrilled to announce the completion of
                  our Series C funding round, raising $6 billion to accelerate the development of artificial general
                  intelligence and expand our global impact.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This funding round represents one of the largest investments in AI technology to date, reflecting the
                  confidence our investors have in our mission to create safe, beneficial AI that serves humanity.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">World-Class Investor Partnership</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're honored to partner with some of the world's most respected investment firms and institutions:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Lead Investors</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Andreessen Horowitz (A16Z)</li>
                      <li>• Sequoia Capital</li>
                      <li>• Lightspeed Venture Partners</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Strategic Partners</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• BlackRock</li>
                      <li>• Fidelity Management</li>
                      <li>• Morgan Stanley</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Global Investors</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Kingdom Holdings</li>
                      <li>• Qatar Investment Authority (QIA)</li>
                      <li>• Mubadala (MGX)</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Additional Partners</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Valor Equity Partners</li>
                      <li>• Vy Capital</li>
                      <li>• Ontario Investment Authority (OIA)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Accelerating Our Mission</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This funding will enable us to accelerate our research and development efforts across several key
                  areas:
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">🧠 Advanced AI Research</h4>
                    <p className="text-gray-300">
                      Expanding our research team and computational resources to push the boundaries of AI capabilities,
                      safety, and alignment.
                    </p>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">🌍 Global Infrastructure</h4>
                    <p className="text-gray-300">
                      Building world-class infrastructure to serve millions of users globally with low latency and high
                      reliability.
                    </p>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">👥 Talent Acquisition</h4>
                    <p className="text-gray-300">
                      Recruiting the world's best AI researchers, engineers, and safety experts to join our mission.
                    </p>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">🛡️ Safety & Alignment</h4>
                    <p className="text-gray-300">
                      Investing heavily in AI safety research to ensure our systems remain beneficial and aligned with
                      human values.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Market Impact</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Since our last funding round, ChatAI has achieved remarkable growth and adoption:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white mb-2">100M+</div>
                    <div className="text-gray-400">Monthly Active Users</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white mb-2">50K+</div>
                    <div className="text-gray-400">Enterprise Customers</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white mb-2">1B+</div>
                    <div className="text-gray-400">API Calls Daily</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Looking Ahead</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With this funding, we're positioned to accelerate our roadmap toward artificial general intelligence
                  while maintaining our commitment to safety and beneficial outcomes for humanity.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our immediate priorities include the general release of ChatAI 3, expansion into new markets, and
                  continued investment in AI safety research. We're also exploring partnerships with governments and
                  institutions to ensure AI benefits are distributed equitably.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We're grateful for the trust our investors have placed in us and excited about the future we're
                  building together. This is just the beginning of our journey to create AI that truly serves humanity.
                </p>
              </section>
            </div>
          </article>

          {/* Call to action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-900/20 to-gray-800/20 border border-gray-800 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-gray-300 mb-6">
              We're hiring world-class talent to help us build the future of AI. Explore opportunities to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium">
                  View Open Positions
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
