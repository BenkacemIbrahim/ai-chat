import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { NewsSection } from "@/components/news-section"
import { UniverseSection } from "@/components/universe-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <HeroSection />
      <UniverseSection />
      <ProductsSection />
      <FeaturesSection />
      <NewsSection />
      <Footer />
    </div>
  )
}
