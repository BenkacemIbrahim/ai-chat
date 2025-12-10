"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
  },
  {
    question: "Is there a free trial for Pro plans?",
    answer: "Yes, we offer a 14-day free trial for Pro plans. No credit card required to start your trial.",
  },
  {
    question: "What happens if I exceed my message limit?",
    answer:
      "On the Free plan, you'll be notified when approaching your limit. Pro and Enterprise plans have unlimited messages.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.",
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
        <p className="text-slate-600 dark:text-slate-300">Everything you need to know about our pricing</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700"
          >
            <button
              className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
