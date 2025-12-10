import { StatusContent } from "@/components/status/status-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">System Status</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time status and performance metrics for all CHATAI services.
            </p>
          </div>
          <StatusContent />
        </div>
      </div>
      <Footer />
    </div>
  )
}
