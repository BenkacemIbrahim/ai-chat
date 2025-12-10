"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "per month",
    description: "Perfect for experimentation and small projects",
    features: ["1,000 API calls per month", "Basic models access", "Community support", "Standard rate limits"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "Ideal for production applications and growing businesses",
    features: [
      "100,000 API calls per month",
      "All models including CHATAI-3",
      "Priority support",
      "Higher rate limits",
      "Advanced analytics",
      "Custom fine-tuning",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large-scale applications with custom requirements",
    features: [
      "Unlimited API calls",
      "Dedicated infrastructure",
      "SLA guarantees",
      "Custom model training",
      "24/7 dedicated support",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingTiers() {
  const router = useRouter()
  const { user } = useAuth()

  const handlePlanSelect = (planName: string) => {
    switch (planName) {
      case "Free":
        if (user) {
          router.push("/dashboard")
        } else {
          router.push("/auth/signup")
        }
        break
      case "Pro":
        if (user) {
          router.push("/dashboard?upgrade=pro")
        } else {
          router.push("/auth/signup?plan=pro")
        }
        break
      case "Enterprise":
        router.push("/contact?plan=enterprise")
        break
    }
  }

  return (
    <section className="py-24 px-4 bg-gray-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">API Pricing</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">Transparent pricing that scales with your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border-2 transition-all duration-300 ${
                tier.popular
                  ? "border-gray-500 bg-gray-900/50 scale-105"
                  : "border-gray-800 bg-gray-900/30 hover:border-gray-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period !== "contact us" && <span className="text-gray-400 ml-2">/{tier.period}</span>}
                </div>
                <p className="text-gray-400">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePlanSelect(tier.name)}
                className={`w-full ${tier.popular ? "bg-gray-600 hover:bg-gray-700" : ""}`}
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
