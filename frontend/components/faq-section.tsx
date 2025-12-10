"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "Click the 'Get Started' button on our homepage and follow the simple registration process. You can sign up with email or use Google/GitHub authentication. Alternatively, try our demo account with email: demo@chatapp.com and password: Demo123!",
      },
      {
        question: "Can I try NeuralChat without signing up?",
        answer:
          "Yes! Visit our chat page to see a preview of NeuralChat's capabilities and explore customization options. For full access, use our demo credentials: demo@chatapp.com / Demo123! or create your own account.",
      },
      {
        question: "What's the difference between preview mode and full access?",
        answer:
          "Preview mode shows sample conversations and lets you explore preferences, but you can't send real messages. Full access (after login) provides unlimited conversations, voice interaction, personalized settings, and chat history.",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        question: "Can NeuralChat help with coding?",
        answer:
          "NeuralChat can generate, debug, and explain code in 100+ programming languages. It understands context and can help with everything from simple scripts to complex applications. This feature is available after login.",
      },
      {
        question: "How do I customize my AI experience?",
        answer:
          "After logging in, visit your Dashboard > Preferences to customize themes, languages, AI personality, voice settings, and accessibility options. You can preview these options on the chat page before logging in.",
      },
      {
        question: "Does it support voice interaction?",
        answer:
          "Yes, NeuralChat supports both voice input and output with advanced speech synthesis technology. Enable this feature in your preferences after logging in.",
      },
    ],
  },
  {
    category: "Account & Access",
    questions: [
      {
        question: "What are the demo credentials?",
        answer:
          "Use email: demo@chatapp.com and password: Demo123! to test all premium features. The demo account provides full access to chat, preferences, and dashboard features.",
      },
      {
        question: "Why do I need to log in to chat?",
        answer:
          "Login ensures personalized experiences, saves your chat history, maintains your preferences, and provides access to advanced features like voice interaction and custom AI personalities.",
      },
      {
        question: "How is my data protected?",
        answer:
          "We use bank-level encryption and follow strict privacy policies. Your conversations are encrypted in transit and at rest. You have full control over your data and can delete it anytime from your account settings.",
      },
    ],
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{category.category}</h2>
          <div className="space-y-4">
            {category.questions.map((faq, questionIndex) => {
              const itemId = `${categoryIndex}-${questionIndex}`
              const isOpen = openItems.includes(itemId)

              return (
                <div
                  key={questionIndex}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors"
                    onClick={() => toggleItem(itemId)}
                  >
                    <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
