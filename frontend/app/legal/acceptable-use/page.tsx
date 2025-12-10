import { AcceptableUseContent } from "@/components/legal/acceptable-use-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AcceptableUsePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Acceptable Use Policy</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Guidelines for appropriate use of CHATAI services and prohibited activities.
            </p>
          </div>
          <AcceptableUseContent />
        </div>
      </div>
      <Footer />
    </>
  )
}
