import { DocsNavigation } from "@/components/docs/docs-navigation"
import { DocsContent } from "@/components/docs/docs-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="w-64 flex-shrink-0">
              <DocsNavigation />
            </aside>
            <main className="flex-1">
              <DocsContent />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
