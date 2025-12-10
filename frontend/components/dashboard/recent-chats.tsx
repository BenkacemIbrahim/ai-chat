import { MessageCircle, Clock } from "lucide-react"

const recentChats = [
  {
    id: "1",
    title: "Help with React components",
    preview: "Can you help me create a reusable button component...",
    timestamp: "2 hours ago",
    messageCount: 12,
  },
  {
    id: "2",
    title: "Python data analysis",
    preview: "I need to analyze this dataset and create visualizations...",
    timestamp: "1 day ago",
    messageCount: 8,
  },
  {
    id: "3",
    title: "Creative writing assistance",
    preview: "Help me write a compelling story about...",
    timestamp: "2 days ago",
    messageCount: 15,
  },
  {
    id: "4",
    title: "Math problem solving",
    preview: "Can you explain this calculus problem step by step...",
    timestamp: "3 days ago",
    messageCount: 6,
  },
]

export function RecentChats() {
  return (
    <div className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Conversations</h3>
      <div className="space-y-4">
        {recentChats.map((chat) => (
          <div
            key={chat.id}
            className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-600 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-white truncate">{chat.title}</h4>
              <div className="flex items-center text-xs text-gray-400 ml-2">
                <MessageCircle className="w-3 h-3 mr-1" />
                {chat.messageCount}
              </div>
            </div>
            <p className="text-sm text-gray-400 truncate mb-2">{chat.preview}</p>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {chat.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
