import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PrivacyContent } from "@/components/legal/privacy-content"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
          <PrivacyContent />
        </div>
      </div>
      <Footer />
    </div>
  )
}
