import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Scale, Eye, ArrowRight } from "lucide-react"

const legalDocuments = [
  {
    icon: FileText,
    title: "Terms of Service",
    description: "Terms and conditions for using CHATAI services",
    lastUpdated: "January 15, 2024",
    href: "/terms",
  },
  {
    icon: Eye,
    title: "Privacy Policy",
    description: "How we collect, use, and protect your information",
    lastUpdated: "January 15, 2024",
    href: "/privacy",
  },
  {
    icon: Shield,
    title: "Security Policy",
    description: "Our security practices and data protection measures",
    lastUpdated: "January 10, 2024",
    href: "/security",
  },
  {
    icon: Scale,
    title: "Acceptable Use Policy",
    description: "Guidelines for appropriate use of our services",
    lastUpdated: "December 20, 2023",
    href: "/legal/acceptable-use",
  },
]

const complianceInfo = [
  {
    title: "GDPR Compliance",
    description: "We comply with the General Data Protection Regulation for EU users",
    details: ["Data subject rights", "Lawful basis for processing", "Data protection officer"],
  },
  {
    title: "CCPA Compliance",
    description: "California Consumer Privacy Act compliance for California residents",
    details: ["Right to know", "Right to delete", "Right to opt-out"],
  },
  {
    title: "SOC 2 Type II",
    description: "Security, availability, and confidentiality controls",
    details: ["Annual audits", "Third-party verification", "Continuous monitoring"],
  },
]

export function LegalContent() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Overview */}
      <div className="text-center">
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Our legal documents outline the terms, policies, and practices that govern your use of CHATAI services. We're
          committed to transparency and compliance with applicable laws and regulations.
        </p>
      </div>

      {/* Legal Documents */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Legal Documents</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {legalDocuments.map((doc, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all group">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <doc.icon className="w-6 h-6 mr-3 text-gray-400" />
                  {doc.title}
                </CardTitle>
                <p className="text-gray-400">{doc.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Last updated: {doc.lastUpdated}</span>
                  <Link href={doc.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-white hover:bg-gray-800 group-hover:border-gray-600"
                    >
                      Read Document
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance Information */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance & Regulations</h2>
        <div className="space-y-6">
          {complianceInfo.map((info, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">{info.title}</CardTitle>
                <p className="text-gray-400">{info.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Data Processing */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Processing Information</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Data We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Account information (email, name)</li>
                <li>• Usage data and analytics</li>
                <li>• API usage and conversation data</li>
                <li>• Technical information (IP, browser)</li>
                <li>• Payment information (processed by third parties)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate information</li>
                <li>• Delete your account and data</li>
                <li>• Export your data</li>
                <li>• Restrict data processing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Legal Inquiries</h3>
          <p className="text-gray-300 text-center mb-6">
            For legal questions, compliance inquiries, or to exercise your data rights, please contact our legal team.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-white mb-2">General Legal</h4>
              <p className="text-gray-400">legal@chatai.ai</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Privacy & Data</h4>
              <p className="text-gray-400">privacy@chatai.ai</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Security</h4>
              <p className="text-gray-400">security@chatai.ai</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
