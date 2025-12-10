import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LegalContent } from "@/components/legal/legal-content"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Legal documents and compliance information for CHATAI services.
            </p>
          </div>
          <LegalContent />
        </div>
      </div>
      <Footer />
    </div>
  )
}
