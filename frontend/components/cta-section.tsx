import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl p-12 md:p-16 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Ready to get started?</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the Future of AI Today</h2>

              <p className="text-xl mb-8 text-gray-100">
                Join thousands of users who are already experiencing the power of advanced AI conversation. Start your
                journey with NeuralChat today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-gray-600"
                  >
                    Try Demo
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-gray-100 mt-6">No credit card required • Free forever plan available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
