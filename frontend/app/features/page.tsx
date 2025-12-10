import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesGrid } from "@/components/features-grid"
import { FeatureShowcase } from "@/components/feature-showcase"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <p className="nav-text text-gray-400 text-sm font-mono mb-4">[ FEATURES ]</p>
            <h1 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">Powerful Features</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-futuristic-body">
              Discover the advanced capabilities that make CHATAI the most intelligent AI assistant
            </p>
          </div>
          <FeaturesGrid />
          <FeatureShowcase />
        </div>
      </div>
      <Footer />
    </div>
  )
}
