import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Zap, Shield } from "lucide-react"

export function APIHero() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm font-mono mb-4">[ API ]</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Build with CHATAI</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Integrate the power of advanced AI into your applications with our comprehensive API. Get started in minutes
            with our developer-friendly tools and extensive documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/docs/api-reference">
              <Button className="px-8 py-3 bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-full font-medium">
                GET API KEY
              </Button>
            </Link>
            <Link href="#documentation">
              <Button
                variant="outline"
                className="px-8 py-3 border-gray-600 text-white hover:bg-gray-700 rounded-full font-medium"
              >
                VIEW DOCS
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
            <p className="text-gray-400">
              Simple REST API with comprehensive SDKs for all major programming languages.
            </p>
          </div>
          <div className="text-center p-6">
            <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-400">
              Optimized infrastructure delivering responses in milliseconds with 99.9% uptime.
            </p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Enterprise Ready</h3>
            <p className="text-gray-400">
              Bank-level security, compliance, and scalability for mission-critical applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
