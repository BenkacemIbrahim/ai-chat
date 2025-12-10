import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogPosts } from "@/components/blog/blog-posts"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <p className="nav-text text-gray-400 text-sm font-mono mb-4">[ NEWS ]</p>
            <h1 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">CHATAI Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-futuristic-body">
              Insights, tutorials, and updates from the world of AI conversation
            </p>
          </div>
          <BlogPosts />
        </div>
      </div>
      <Footer />
    </div>
  )
}
