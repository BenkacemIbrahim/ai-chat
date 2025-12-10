"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AvailableSection() {
  const platforms = [
    { name: "CHATAI WEB", href: "/chat", active: true },
    { name: "IOS", href: "#", active: false },
    { name: "ANDROID", href: "#", active: false },
  ]

  const games = [
    { name: "PONG", active: true },
    { name: "TETRIS", active: false },
    { name: "SNAKE", active: false },
    { name: "ASTEROIDS", active: false },
  ]

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/20 border border-gray-700/30 mb-8">
            <span className="text-gray-400 text-sm font-medium tracking-wide">MULTI-PLATFORM ACCESS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
            Available{" "}
            <span className="text-transparent bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text">anywhere</span>.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Access your AI assistant across all your devices. Seamless conversations that follow you everywhere.
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className={`group px-8 py-4 rounded-full border-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  platform.active
                    ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white border-transparent shadow-lg shadow-gray-500/25"
                    : "bg-transparent text-white border-gray-600 hover:border-gray-400 hover:bg-gray-900/20"
                }`}
              >
                <span className="flex items-center">
                  {platform.name}
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Deep dive with DeepSearch Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/20 border border-gray-700/30 mb-8">
            <span className="text-gray-400 text-sm font-medium tracking-wide">DEEP DIVE WITH DEEPSEARCH</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Uncover insights with{" "}
            <span className="text-transparent bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text">
              AI-powered search
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Leverage the power of DeepSearch to find relevant information quickly and efficiently with CHATAI.
          </p>
          <Link href="/auth/login">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Search now
            </Button>
          </Link>
        </div>

        {/* Interactive Demo Section */}
        <div className="relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 via-gray-700/10 to-gray-600/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/20 border border-gray-700/30 mb-6">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-gray-400 text-sm font-medium">INTERACTIVE DEMO</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Play</h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Experience AI-powered gaming. Choose from classic games enhanced with intelligent features.
              </p>
            </div>

            {/* Game Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {games.map((game) => (
                <button
                  key={game.name}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    game.active
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg shadow-gray-500/25"
                      : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700"
                  }`}
                >
                  {game.name}
                </button>
              ))}
            </div>

            {/* Game Interface */}
            <div className="relative">
              <div className="bg-black/80 rounded-2xl border border-gray-700/50 overflow-hidden">
                {/* Game Screen Header */}
                <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <img src="/images/chatai-logo.png" alt="CHATAI" className="w-6 h-6" />
                      <span className="text-white font-medium">CHATAI Gaming Console</span>
                    </div>
                    <div className="text-green-400 text-sm font-mono">ONLINE</div>
                  </div>
                </div>

                {/* Game Area */}
                <div className="h-80 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gray-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
                  </div>

                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <img src="/images/chatai-logo.png" alt="CHATAI" className="w-8 h-8" />
                    </div>
                    <h4 className="text-white text-xl font-semibold mb-2">Game Ready</h4>
                    <p className="text-gray-400 text-sm">Click any game above to start playing</p>
                  </div>
                </div>

                {/* Game Footer */}
                <div className="bg-gray-800/30 px-6 py-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-gray-400 text-sm">
                        Score: <span className="text-white font-mono">0</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        Level: <span className="text-white font-mono">1</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-xs mb-1">POWERED BY</p>
                      <div className="text-white font-bold text-sm tracking-wider">CHATAI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
