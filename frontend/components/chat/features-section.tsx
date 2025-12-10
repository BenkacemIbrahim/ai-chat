"use client"

import { CheckCircle, Circle } from "lucide-react"
import Link from "next/link"

export function FeaturesSection() {
  const searchSteps = [
    { text: "Thought for 15 seconds", completed: true },
    { text: "Searched 4 websites", completed: true },
    { text: "Thought for 6 seconds", completed: true },
    { text: "Searched 7 websites", completed: false, active: true },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* DeepSearch Section */}
          <div className="bg-gray-900/30 rounded-3xl border border-gray-800 p-8">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2">Deep dive with</h3>
              <h4 className="text-3xl md:text-4xl font-light text-gray-400">DeepSearch</h4>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Explore the depths of information with DeepSearch, uncovering rare insights and buried data effortlessly.
            </p>

            <Link href="/auth/login">
              <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full hover:border-white transition-all mb-8">
                SEARCH NOW ↗
              </button>
            </Link>

            <div className="bg-black/50 rounded-xl p-6">
              <div className="space-y-4">
                {searchSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : step.active ? (
                      <div className="w-5 h-5 border-2 border-green-500 rounded-full animate-pulse" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-500" />
                    )}
                    <span className={`text-sm ${step.completed || step.active ? "text-white" : "text-gray-500"}`}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ChatAI Think Section */}
          <div className="bg-gray-900/30 rounded-3xl border border-gray-800 p-8">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2">Find meaning with</h3>
              <h4 className="text-3xl md:text-4xl font-light text-gray-400">ChatAI Think</h4>
            </div>

            <div className="bg-black/50 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <div className="text-white font-medium mb-2">Thought for 5 seconds</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The question "What is the meaning of life?" is one that has puzzled humanity for centuries, and it's
                    not something that comes with a simple, universal answer. Instead, it's a deeply personal and
                    complex idea that can look very different depending on who's asking and what they value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
