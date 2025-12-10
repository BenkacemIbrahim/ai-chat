"use client"

import Image from "next/image"

export function InterfaceSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gray-400 mb-4 tracking-wider">[ ASK ANYTHING ]</div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Get unfiltered answers from ChatAI</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tap into the now with real-time search, pulling fresh, relevant data from the web instantly.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              {/* Desktop Interface */}
              <div className="bg-black/80 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Image src="/images/chatai-logo.png" alt="ChatAI" width={16} height={16} />
                  </div>
                  <span className="text-white font-medium">ChatAI</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-white text-lg mb-2">Welcome to ChatAI</h3>
                  <p className="text-gray-400 text-sm">How can I help you today?</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <input
                    type="text"
                    placeholder="What do you want to know?"
                    className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 text-xs text-gray-400">
                  <span>🔍 Research</span>
                  <span>📊 Reference</span>
                  <span>🧠 Analyze Data</span>
                  <span>💡 Create Images</span>
                  <span>📝 Code</span>
                </div>
              </div>

              {/* Mobile Interface */}
              <div className="bg-black/80 rounded-xl p-4 w-48 ml-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-sm font-medium">ChatAI 3</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                  </div>

                  <div className="text-xs text-gray-400">Custom Default Storyteller Researcher</div>

                  <div className="bg-gray-800/50 rounded p-2">
                    <div className="text-xs text-gray-400">Ask a model to activate Voice</div>
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
