import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II Compliance",
    description: "We maintain SOC 2 Type II compliance with regular third-party security audits.",
  },
  {
    icon: Eye,
    title: "Zero Data Retention",
    description: "We don't store your conversation data unless explicitly requested for your account.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Our infrastructure is hosted on secure cloud platforms with 24/7 monitoring.",
  },
]

const certifications = [
  { name: "SOC 2 Type II", status: "Certified", date: "2024" },
  { name: "ISO 27001", status: "In Progress", date: "2024" },
  { name: "GDPR Compliant", status: "Certified", date: "2024" },
  { name: "CCPA Compliant", status: "Certified", date: "2024" },
]

export function SecurityContent() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Overview */}
      <div className="text-center">
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Security is at the core of everything we do. We implement industry-leading security practices to protect your
          data and ensure the integrity of our AI services.
        </p>
      </div>

      {/* Security Features */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <feature.icon className="w-6 h-6 mr-3 text-gray-400" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Data Protection */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Protection</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Data Encryption</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Data in Transit</span>
                  <span className="text-green-400 font-mono">TLS 1.3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Data at Rest</span>
                  <span className="text-green-400 font-mono">AES-256</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">API Keys</span>
                  <span className="text-green-400 font-mono">Encrypted</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Database</span>
                  <span className="text-green-400 font-mono">Encrypted</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Access Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Multi-factor authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Role-based access control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Regular access reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Principle of least privilege</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Compliance */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  {cert.status === "Certified" ? (
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
                  ) : (
                    <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{cert.status}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Practices */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Practices</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Monitoring & Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 security monitoring</li>
                <li>• Automated threat detection</li>
                <li>• Real-time alerting</li>
                <li>• Incident response team</li>
                <li>• Security information and event management (SIEM)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Vulnerability Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Regular security assessments</li>
                <li>• Penetration testing</li>
                <li>• Automated vulnerability scanning</li>
                <li>• Patch management</li>
                <li>• Bug bounty program</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Employee Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Security awareness training</li>
                <li>• Background checks</li>
                <li>• Secure development practices</li>
                <li>• Regular security updates</li>
                <li>• Incident response training</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Responsible Disclosure */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Responsible Disclosure</h3>
          <p className="text-gray-300 text-center mb-6">
            We welcome security researchers to help us maintain the security of our platform. If you discover a security
            vulnerability, please report it responsibly.
          </p>
          <div className="text-center">
            <p className="text-gray-400 mb-4">Report security issues to:</p>
            <p className="text-white font-mono">security@chatai.ai</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
