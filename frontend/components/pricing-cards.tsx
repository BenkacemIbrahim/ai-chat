"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI assistance",
    features: [
      "50 messages per month",
      "Basic AI models",
      "Web interface access",
      "Community support",
      "Standard response time",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "per month",
    description: "Ideal for professionals and power users",
    features: [
      "Unlimited messages",
      "Advanced AI models (GPT-4)",
      "Voice input/output",
      "Priority support",
      "Faster response times",
      "Chat history export",
      "Custom instructions",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "SSO integration",
      "Custom AI training",
      "Dedicated support",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingCards() {
  const router = useRouter()
  const { user } = useAuth()

  const handlePlanSelect = (planName: string) => {
    if (!user) {
      // Redirect to signup for non-authenticated users
      router.push("/auth/signup")
      return
    }

    switch (planName) {
      case "Free":
        // Already on free plan or downgrade
        router.push("/dashboard")
        break
      case "Pro":
        // Redirect to checkout or upgrade flow
        router.push("/dashboard?upgrade=pro")
        break
      case "Enterprise":
        // Redirect to contact sales
        router.push("/contact?plan=enterprise")
        break
      default:
        router.push("/dashboard")
    }
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg ${
            plan.popular
              ? "border-2 border-gray-500 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/20 dark:to-slate-800 shadow-lg scale-105"
              : "border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
              {plan.period !== "contact us" && (
                <span className="text-slate-600 dark:text-slate-300 ml-2">/{plan.period}</span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-300">{plan.description}</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full ${plan.popular ? "bg-gray-600 hover:bg-gray-700" : ""}`}
            variant={plan.popular ? "default" : "outline"}
            onClick={() => handlePlanSelect(plan.name)}
          >
            {plan.cta}
          </Button>
        </div>
      ))}
    </div>
  )
}
