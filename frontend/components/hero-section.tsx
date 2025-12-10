"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUp, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [searchInput, setSearchInput] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/auth/login")
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 via-transparent to-transparent"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Large CHATAI text */}
        <h1 className="hero-title text-8xl md:text-9xl lg:text-[12rem] font-bold mb-8 text-gray-400">CHATAI</h1>

        {/* Search input */}
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-12">
          <Input
            placeholder="What do you want to build?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="h-16 text-lg px-6 pr-16 bg-gray-900/50 border-gray-700 rounded-full backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-gray-700 font-futuristic-body"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-2 h-12 w-12 rounded-full bg-gray-700 hover:bg-gray-600"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </form>

        {/* Announcement */}
        <div className="mb-12">
          <p className="text-lg text-gray-300 mb-6 font-futuristic-body">
            We are thrilled to unveil <span className="mono-accent text-gray-300">CHATAI 3</span>, our most advanced
            model yet,
            <br />
            blending superior reasoning with extensive pretraining knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button className="button-text px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-medium">
                BUILD WITH CHATAI
              </Button>
            </Link>
            <Link href="/features">
              <Button
                variant="outline"
                className="button-text px-8 py-3 border-gray-600 text-white hover:bg-gray-800 rounded-full font-medium"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  )
}
