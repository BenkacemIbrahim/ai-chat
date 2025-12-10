import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <p className="nav-text text-gray-400 text-sm font-mono mb-4">[ CONTACT ]</p>
            <h1 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-futuristic-body">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
