import { DocsNavigation } from "@/components/docs/docs-navigation"
import { AuthenticationContent } from "@/components/docs/authentication-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AuthenticationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="w-64 flex-shrink-0">
              <DocsNavigation />
            </aside>
            <main className="flex-1">
              <AuthenticationContent />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
