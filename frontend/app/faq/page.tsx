import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { HelpSearch } from "@/components/help-search"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <p className="nav-text text-gray-400 text-sm font-mono mb-4">[ SUPPORT ]</p>
            <h1 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">Help Center</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 font-futuristic-body">
              Find answers to common questions and get the help you need
            </p>
            <HelpSearch />
          </div>
          <FAQSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
