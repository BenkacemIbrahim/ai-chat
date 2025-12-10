"use client"

import { TrendingUp } from "lucide-react"

const usageData = [
  { day: "Mon", messages: 45 },
  { day: "Tue", messages: 52 },
  { day: "Wed", messages: 38 },
  { day: "Thu", messages: 61 },
  { day: "Fri", messages: 55 },
  { day: "Sat", messages: 32 },
  { day: "Sun", messages: 28 },
]

export function UsageChart() {
  const maxMessages = Math.max(...usageData.map((d) => d.messages))

  return (
    <div className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Weekly Usage</h3>
        <div className="flex items-center text-green-400">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">+12%</span>
        </div>
      </div>

      <div className="space-y-4">
        {usageData.map((data, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-8 text-xs text-gray-400">{data.day}</div>
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(data.messages / maxMessages) * 100}%` }}
              />
            </div>
            <div className="w-8 text-xs text-gray-400 text-right">{data.messages}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Total messages this week: {usageData.reduce((sum, d) => sum + d.messages, 0)}
      </div>
    </div>
  )
}
