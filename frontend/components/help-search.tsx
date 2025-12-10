"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function HelpSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search for help articles, guides, or FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-14 pl-12 pr-32 text-lg rounded-2xl border-2 border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-400 focus:border-gray-500"
        />
        <Button
          type="submit"
          className="absolute right-2 top-2 h-10 px-6 bg-white text-black hover:bg-gray-200 rounded-xl"
        >
          Search
        </Button>
      </div>
    </form>
  )
}
