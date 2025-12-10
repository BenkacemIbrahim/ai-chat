import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"
import { MissionSection } from "@/components/mission-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <p className="nav-text text-gray-400 text-sm font-mono mb-4">[ COMPANY ]</p>
            <h1 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">About CHATAI</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-futuristic-body">
              We're building the future of AI conversation, making advanced AI accessible to everyone
            </p>
          </div>
          <MissionSection />
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
