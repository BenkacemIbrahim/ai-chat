import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Key, Shield, Copy } from "lucide-react"
import Link from "next/link"

export function AuthenticationContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Authentication</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Learn how to authenticate your requests to the ChatAI API using API keys and best security practices.
        </p>
      </div>

      {/* API Keys Overview */}
      <Card className="bg-gray-900/30 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Key className="w-6 h-6 mr-3 text-blue-400" />
            API Keys
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            ChatAI uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them
            secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and
            so forth.
          </p>
          <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <p className="text-yellow-300 font-semibold mb-1">Security Warning</p>
                <p className="text-yellow-200 text-sm">
                  Never expose your API keys in client-side code, public repositories, or any publicly accessible
                  location.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting API Keys */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Getting Your API Key</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Sign in to your ChatAI account</li>
                <li>Navigate to the API Keys section in your dashboard</li>
                <li>Click "Create new secret key"</li>
                <li>Give your key a descriptive name (optional)</li>
                <li>Copy the key and store it securely</li>
              </ol>
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mt-4">
                <p className="text-blue-300 text-sm">
                  <strong>Tip:</strong> You can create multiple API keys for different applications or environments
                  (development, staging, production).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Using API Keys */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Using API Keys</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <p className="text-gray-300 mb-4">
              Include your API key in the Authorization header of your HTTP requests:
            </p>
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800">
                <TabsTrigger value="curl" className="text-gray-300">
                  cURL
                </TabsTrigger>
                <TabsTrigger value="python" className="text-gray-300">
                  Python
                </TabsTrigger>
                <TabsTrigger value="javascript" className="text-gray-300">
                  JavaScript
                </TabsTrigger>
                <TabsTrigger value="node" className="text-gray-300">
                  Node.js
                </TabsTrigger>
              </TabsList>

              <TabsContent value="curl" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <pre className="text-gray-300">
                    <code>{`curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "chatai-3", "messages": [...]}'`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="python" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <pre className="text-gray-300">
                    <code>{`import os
import requests

api_key = os.getenv("CHATAI_API_KEY")
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

response = requests.post(
    "https://api.chatai.ai/v1/chat/completions",
    headers=headers,
    json={"model": "chatai-3", "messages": [...]}
)`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="javascript" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <pre className="text-gray-300">
                    <code>{`const apiKey = process.env.CHATAI_API_KEY;

fetch('https://api.chatai.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'chatai-3',
    messages: [...]
  })
});`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="node" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <pre className="text-gray-300">
                    <code>{`const ChatAI = require('chatai');

const client = new ChatAI({
  apiKey: process.env.CHATAI_API_KEY
});

const response = await client.chat.completions.create({
  model: 'chatai-3',
  messages: [...]
});`}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Environment Variables */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Environment Variables</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <p className="text-gray-300 mb-4">Store your API key as an environment variable to keep it secure:</p>
            <Tabs defaultValue="bash" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                <TabsTrigger value="bash" className="text-gray-300">
                  Bash/Zsh
                </TabsTrigger>
                <TabsTrigger value="windows" className="text-gray-300">
                  Windows
                </TabsTrigger>
                <TabsTrigger value="env" className="text-gray-300">
                  .env File
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bash" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <code className="text-green-400">export CHATAI_API_KEY="your-api-key-here"</code>
                </div>
              </TabsContent>

              <TabsContent value="windows" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <code className="text-green-400">set CHATAI_API_KEY=your-api-key-here</code>
                </div>
              </TabsContent>

              <TabsContent value="env" className="mt-6">
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <code className="text-green-400">CHATAI_API_KEY=your-api-key-here</code>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Add this to your .env file and load it using a library like dotenv
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Security Best Practices */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Security Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Do's
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Store API keys as environment variables</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Use different keys for different environments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Rotate keys regularly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Monitor API key usage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Use server-side authentication</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Hardcode keys in your source code</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Commit keys to version control</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Use keys in client-side JavaScript</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Share keys via email or chat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Use the same key across all projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Error Handling */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Authentication Errors</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-red-900/20 text-red-400">401</Badge>
                  <span className="font-semibold text-white">Unauthorized</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Your API key is missing, invalid, or has been revoked. Check that you're including the correct key in
                  the Authorization header.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-red-900/20 text-red-400">403</Badge>
                  <span className="font-semibold text-white">Forbidden</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Your API key doesn't have permission to access the requested resource. Check your plan limits and
                  permissions.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-yellow-900/20 text-yellow-400">429</Badge>
                  <span className="font-semibold text-white">Rate Limited</span>
                </div>
                <p className="text-gray-300 text-sm">
                  You've exceeded your rate limit. Wait before making additional requests or upgrade your plan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Management */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">API Key Management</h3>
          <p className="text-gray-300 text-center mb-6">
            Manage your API keys, monitor usage, and configure permissions from your dashboard.
          </p>
          <div className="text-center">
            <Link href="/dashboard">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2">Manage API Keys</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
