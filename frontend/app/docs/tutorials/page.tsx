import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DocsNavigation } from "@/components/docs/docs-navigation"
import { TutorialsGuide } from "@/components/docs/tutorials-guide"

export default function TutorialsPage() {
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
              <TutorialsGuide />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
