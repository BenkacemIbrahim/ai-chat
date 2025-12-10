import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"

export function QuickStartContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Quick Start</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Get up and running with the ChatAI API in just a few minutes. This guide will walk you through making your
          first API call.
        </p>
      </div>

      {/* Prerequisites */}
      <Card className="bg-gray-900/30 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Prerequisites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">A ChatAI account (sign up for free)</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Basic knowledge of HTTP requests</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">A programming language of your choice</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Get API Key */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Step 1: Get Your API Key</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-300">First, you'll need to get your API key from the ChatAI dashboard:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>
                  <Link href="/auth/signup" className="text-blue-400 hover:underline">
                    Sign up for a ChatAI account
                  </Link>{" "}
                  if you haven't already
                </li>
                <li>
                  Navigate to the{" "}
                  <Link href="/dashboard" className="text-blue-400 hover:underline">
                    API Keys section
                  </Link>{" "}
                  in your dashboard
                </li>
                <li>Click "Create new secret key"</li>
                <li>Copy your API key and store it securely</li>
              </ol>
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Important:</strong> Keep your API key secure and never share it publicly. Treat it like a
                  password.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 2: Make Your First Request */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Step 2: Make Your First Request</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
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
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="text-gray-300">
                      <code>{`curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {
        "role": "user",
        "content": "Hello, ChatAI! How are you today?"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 150
  }'`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="python" className="mt-6">
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="text-gray-300">
                      <code>{`import requests
import json

url = "https://api.chatai.ai/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "model": "chatai-3",
    "messages": [
        {
            "role": "user",
            "content": "Hello, ChatAI! How are you today?"
        }
    ],
    "temperature": 0.7,
    "max_tokens": 150
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(result["choices"][0]["message"]["content"])`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="javascript" className="mt-6">
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="text-gray-300">
                      <code>{`fetch('https://api.chatai.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'chatai-3',
    messages: [
      {
        role: 'user',
        content: 'Hello, ChatAI! How are you today?'
      }
    ],
    temperature: 0.7,
    max_tokens: 150
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.choices[0].message.content);
});`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="node" className="mt-6">
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="text-gray-300">
                      <code>{`const axios = require('axios');

const response = await axios.post(
  'https://api.chatai.ai/v1/chat/completions',
  {
    model: 'chatai-3',
    messages: [
      {
        role: 'user',
        content: 'Hello, ChatAI! How are you today?'
      }
    ],
    temperature: 0.7,
    max_tokens: 150
  },
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data.choices[0].message.content);`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Step 3: Understanding the Response */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Step 3: Understanding the Response</h2>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <p className="text-gray-300 mb-4">The API will return a JSON response like this:</p>
            <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
                <code>{`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "chatai-3",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! I'm doing great, thank you for asking. How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 13,
    "completion_tokens": 17,
    "total_tokens": 30
  }
}`}</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white">Key Response Fields:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
                  <li>
                    <code className="text-blue-400">choices[0].message.content</code> - The AI's response
                  </li>
                  <li>
                    <code className="text-blue-400">usage</code> - Token usage information for billing
                  </li>
                  <li>
                    <code className="text-blue-400">finish_reason</code> - Why the response ended (stop, length, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Explore the API</CardTitle>
              <p className="text-gray-400">Learn about all available endpoints and parameters</p>
            </CardHeader>
            <CardContent>
              <Link href="/docs/api-reference">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  API Reference
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Follow Tutorials</CardTitle>
              <p className="text-gray-400">Build real applications with step-by-step guides</p>
            </CardHeader>
            <CardContent>
              <Link href="/docs/tutorials">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  View Tutorials
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Use SDKs</CardTitle>
              <p className="text-gray-400">Official libraries for popular programming languages</p>
            </CardHeader>
            <CardContent>
              <Link href="/docs/sdks">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Browse SDKs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Security Best Practices</CardTitle>
              <p className="text-gray-400">Learn how to implement ChatAI securely</p>
            </CardHeader>
            <CardContent>
              <Link href="/docs/security">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Security Guide
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Support */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-6">If you run into any issues or have questions, we're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2">Contact Support</Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
                View FAQ
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
