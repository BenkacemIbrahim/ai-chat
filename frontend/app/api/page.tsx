import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { APIHero } from "@/components/api/api-hero"
import { APIFeatures } from "@/components/api/api-features"
import { CodeExamples } from "@/components/api/code-examples"
import { PricingTiers } from "@/components/api/pricing-tiers"
import { Documentation } from "@/components/api/documentation"

export default function APIPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <APIHero />
        <APIFeatures />
        <CodeExamples />
        <PricingTiers />
        <Documentation />
      </div>
      <Footer />
    </div>
  )
}
