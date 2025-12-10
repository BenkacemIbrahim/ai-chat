import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "getting-started-ai-chat",
    title: "Getting Started with NeuralChat: Your Complete Guide",
    excerpt:
      "Learn how to make the most of NeuralChat's AI capabilities, from using demo credentials to customizing your experience.",
    author: "Sarah Chen",
    date: "2024-01-15",
    category: "Tutorial",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "demo-login-features",
    title: "Exploring NeuralChat with Demo Access",
    excerpt:
      "Discover all the features available through our demo login and see why thousands choose NeuralChat for their AI needs.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    category: "Features",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "ai-personalization",
    title: "Personalizing Your AI: Themes, Languages, and Personas",
    excerpt:
      "A deep dive into NeuralChat's customization options and how to create the perfect AI assistant for your workflow.",
    author: "Dr. Emily Watson",
    date: "2024-01-10",
    category: "Customization",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "voice-interaction-guide",
    title: "Voice Interaction: The Future of AI Communication",
    excerpt:
      "How voice-enabled AI is changing the way we interact with technology and tips for getting the most from voice features.",
    author: "David Kim",
    date: "2024-01-08",
    category: "Technology",
    readTime: "6 min read",
    featured: false,
  },
]

export function BlogPosts() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Featured Article</h2>
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-700 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Badge className="bg-gray-600 text-white">{featuredPost.category}</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{featuredPost.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{featuredPost.excerpt}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <span className="font-medium">Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Regular Posts */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{post.readTime}</div>
                    <Link href={`/blog/${post.id}`}>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                        <span className="text-sm font-medium">Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
