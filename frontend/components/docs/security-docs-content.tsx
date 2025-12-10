import { Card, CardContent } from "@/components/ui/card"
import { Shield, Key, Lock, AlertTriangle, CheckCircle } from "lucide-react"

export function SecurityDocsContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Security Best Practices</h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Learn how to secure your CHATAI integration and protect your data. Following these best practices will help
          ensure your application remains secure.
        </p>
      </div>

      {/* API Key Security */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Key className="w-6 h-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-white">API Key Security</h2>
        </div>
        <p className="text-gray-300">
          Your API keys grant access to your CHATAI account and resources. Protecting them is critical to maintaining
          the security of your application.
        </p>

        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Store API Keys Securely</h4>
                <p className="text-gray-300">
                  Never hardcode API keys in your source code or client-side JavaScript. Instead, use environment
                  variables or a secure secrets management system.
                </p>
                <div className="bg-black/50 rounded-lg p-3 mt-2">
                  <code className="text-gray-300 text-sm">
                    # Good practice - using environment variables
                    <br />
                    api_key = os.environ.get("CHATAI_API_KEY")
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Use Server-Side Requests</h4>
                <p className="text-gray-300">
                  Make API calls from your server, not directly from the client. This prevents exposing your API key to
                  users.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Rotate API Keys Regularly</h4>
                <p className="text-gray-300">
                  Periodically generate new API keys and deprecate old ones, especially after team member changes or
                  potential security incidents.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 text-xs">✗</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Never Commit API Keys to Version Control</h4>
                <p className="text-gray-300">
                  Avoid committing API keys to Git repositories, even private ones. Use .gitignore to exclude .env files
                  and other files containing secrets.
                </p>
                <div className="bg-black/50 rounded-lg p-3 mt-2">
                  <code className="text-gray-300 text-sm">
                    # Add to .gitignore
                    <br />
                    .env
                    <br />
                    .env.local
                    <br />
                    secrets.json
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Security */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-white">Data Security</h2>
        </div>
        <p className="text-gray-300">
          Protect sensitive data when using CHATAI services to ensure privacy and compliance with regulations.
        </p>

        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Minimize Sensitive Data</h4>
                <p className="text-gray-300">
                  Only send the data necessary for your use case. Avoid including PII, financial data, or other
                  sensitive information unless absolutely required.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Use Data Redaction</h4>
                <p className="text-gray-300">
                  Implement data redaction techniques to remove sensitive information before sending data to the API.
                </p>
                <div className="bg-black/50 rounded-lg p-3 mt-2">
                  <code className="text-gray-300 text-sm">
                    # Example of redacting sensitive information
                    <br />
                    def redact_pii(text):
                    <br />
                    &nbsp;&nbsp;# Replace email addresses
                    <br />
                    &nbsp;&nbsp;text = re.sub(r'[\w\.-]+@[\w\.-]+', '[EMAIL]', text)
                    <br />
                    &nbsp;&nbsp;# Replace phone numbers
                    <br />
                    &nbsp;&nbsp;text = re.sub(r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b', '[PHONE]', text)
                    <br />
                    &nbsp;&nbsp;return text
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Secure Data Storage</h4>
                <p className="text-gray-300">
                  If you store conversation history or generated content, ensure it's encrypted at rest and access is
                  properly restricted.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Implement Data Retention Policies</h4>
                <p className="text-gray-300">
                  Define and enforce data retention policies to ensure data is not kept longer than necessary.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Security */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Lock className="w-6 h-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-white">Application Security</h2>
        </div>
        <p className="text-gray-300">
          Secure your application to prevent unauthorized access and protect against common vulnerabilities.
        </p>

        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Implement Rate Limiting</h4>
                <p className="text-gray-300">
                  Add rate limiting to your application to prevent abuse and protect against denial-of-service attacks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Validate User Input</h4>
                <p className="text-gray-300">
                  Always validate and sanitize user input before sending it to the API to prevent injection attacks and
                  unexpected behavior.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Implement Proper Authentication</h4>
                <p className="text-gray-300">
                  Use strong authentication mechanisms for your application users, such as OAuth 2.0, JWT, or
                  multi-factor authentication.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Keep Dependencies Updated</h4>
                <p className="text-gray-300">
                  Regularly update your dependencies, including the CHATAI SDK, to benefit from security patches and
                  improvements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Safety */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-white">Content Safety</h2>
        </div>
        <p className="text-gray-300">
          Implement safeguards to prevent the generation and distribution of harmful or inappropriate content.
        </p>

        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Use Content Filtering</h4>
                <p className="text-gray-300">
                  Implement content filtering for both user inputs and AI-generated outputs to prevent harmful content.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Set Appropriate Model Parameters</h4>
                <p className="text-gray-300">
                  Configure model parameters like temperature and top_p to control the randomness and creativity of
                  generated content.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Implement Human Review</h4>
                <p className="text-gray-300">
                  For high-risk applications, consider implementing human review of AI-generated content before
                  publishing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Provide User Reporting Mechanisms</h4>
                <p className="text-gray-300">
                  Allow users to report inappropriate or harmful content generated by your application.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Checklist */}
      <div className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border border-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Security Checklist</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Store API keys securely using environment variables</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Make API calls server-side, not client-side</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Implement proper authentication and authorization</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Validate and sanitize all user inputs</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Implement rate limiting and monitoring</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Use HTTPS for all API requests</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Implement content filtering for inputs and outputs</h4>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Keep all dependencies updated</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
