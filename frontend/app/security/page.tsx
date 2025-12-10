import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SecurityContent } from "@/components/legal/security-content"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Security is at the core of everything we do. Learn about our security practices and data protection
              measures.
            </p>
          </div>
          <SecurityContent />
        </div>
      </div>
      <Footer />
    </div>
  )
}
