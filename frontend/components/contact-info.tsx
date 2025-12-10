import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    details: ["hello@chatai.ai", "support@chatai.ai"],
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567"],
    description: "Mon-Fri from 8am to 6pm PST",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 AI Street", "San Francisco, CA 94105"],
    description: "Visit our headquarters",
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: ["24/7 Chat Support", "Email: 24 hours"],
    description: "We're here when you need us",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Get in touch</h2>
        <p className="text-gray-400 mb-8">
          We'd love to hear from you. Choose the best way to reach out and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-900/30 border border-gray-800">
            <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-gray-900/20 border border-gray-700">
        <h3 className="font-semibold mb-2 text-gray-100">Need immediate help?</h3>
        <p className="text-gray-300 mb-4">Check out our comprehensive help center with guides, tutorials, and FAQs.</p>
        <Button className="bg-white text-black hover:bg-gray-200">Visit Help Center</Button>
      </div>
    </div>
  )
}
