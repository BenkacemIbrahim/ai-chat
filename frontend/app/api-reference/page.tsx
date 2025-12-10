import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DocsNavigation } from "@/components/docs/docs-navigation"
import { ApiReferenceContent } from "@/components/docs/api-reference"

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <DocsNavigation />
            </div>
            <div className="lg:col-span-3">
              <ApiReferenceContent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
