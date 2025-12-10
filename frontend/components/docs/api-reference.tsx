import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Custom Method Badge Component
const MethodBadge = ({ method }: { method: string }) => {
  const getMethodStyles = (method: string) => {
    switch (method) {
      case "GET":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600/30 to-blue-500/30 border-2 border-blue-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          text: "text-blue-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-blue-500/20 rounded-lg blur-md",
        }
      case "POST":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-600/30 to-emerald-500/30 border-2 border-emerald-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          text: "text-emerald-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-emerald-500/20 rounded-lg blur-md",
        }
      case "PUT":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-600/30 to-amber-500/30 border-2 border-amber-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          text: "text-amber-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-amber-500/20 rounded-lg blur-md",
        }
      case "DELETE":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-600/30 to-red-500/30 border-2 border-red-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          text: "text-red-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-red-500/20 rounded-lg blur-md",
        }
      default:
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-600/30 to-gray-500/30 border-2 border-gray-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          text: "text-gray-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-gray-500/20 rounded-lg blur-md",
        }
    }
  }

  const styles = getMethodStyles(method)

  return (
    <div className={styles.container}>
      <div className={styles.glow}></div>
      <span className={`${styles.text} relative z-10`}>{method}</span>
    </div>
  )
}

// Custom Required Badge Component
const RequiredBadge = () => {
  return (
    <div className="relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-600/30 to-red-500/30 border-2 border-red-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform">
      <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-md"></div>
      <span className="text-red-200 font-bold text-xs uppercase tracking-wider relative z-10">required</span>
    </div>
  )
}

// Custom Type Badge Component
const TypeBadge = ({ type }: { type: string }) => {
  return (
    <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-400/30 rounded-full backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-full blur-sm"></div>
      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
      <span className="text-slate-300 font-medium text-sm tracking-wide ml-2 relative z-10">{type}</span>
    </div>
  )
}

const endpoints = [
  {
    method: "POST",
    path: "/v1/chat/completions",
    title: "Chat Completions",
    description: "Create a chat completion response",
    parameters: [
      { name: "model", type: "string", required: true, description: "ID of the model to use" },
      { name: "messages", type: "array", required: true, description: "List of messages in the conversation" },
      { name: "temperature", type: "number", required: false, description: "Sampling temperature (0-2)" },
      { name: "max_tokens", type: "number", required: false, description: "Maximum tokens to generate" },
      { name: "stream", type: "boolean", required: false, description: "Whether to stream responses" },
    ],
  },
  {
    method: "POST",
    path: "/v1/completions",
    title: "Text Completions",
    description: "Create a text completion",
    parameters: [
      { name: "model", type: "string", required: true, description: "ID of the model to use" },
      { name: "prompt", type: "string", required: true, description: "The prompt to complete" },
      { name: "temperature", type: "number", required: false, description: "Sampling temperature (0-2)" },
      { name: "max_tokens", type: "number", required: false, description: "Maximum tokens to generate" },
    ],
  },
  {
    method: "GET",
    path: "/v1/models",
    title: "List Models",
    description: "List available models",
    parameters: [],
  },
]

export function ApiReferenceContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">API Reference</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Complete reference for the ChatAI API. All endpoints, parameters, and response formats.
        </p>
      </div>

      {/* Base URL */}
      <Card className="bg-gray-900/30 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Base URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-800 rounded-lg p-4 font-mono">
            <code className="text-green-400">https://api.chatai.ai</code>
          </div>
        </CardContent>
      </Card>

      {/* Authentication */}
      <Card className="bg-gray-900/30 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Authentication</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            All API requests require authentication using your API key in the Authorization header:
          </p>
          <div className="bg-gray-800 rounded-lg p-4 font-mono">
            <code className="text-gray-300">Authorization: Bearer YOUR_API_KEY</code>
          </div>
        </CardContent>
      </Card>

      {/* Endpoints */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Endpoints</h2>
        <div className="space-y-8">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <MethodBadge method={endpoint.method} />
                  <code className="text-gray-300 font-mono">{endpoint.path}</code>
                </div>
                <CardTitle className="text-white">{endpoint.title}</CardTitle>
                <p className="text-gray-400">{endpoint.description}</p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="parameters" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                    <TabsTrigger value="parameters" className="text-gray-300">
                      Parameters
                    </TabsTrigger>
                    <TabsTrigger value="example" className="text-gray-300">
                      Example
                    </TabsTrigger>
                    <TabsTrigger value="response" className="text-gray-300">
                      Response
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="parameters" className="mt-6">
                    {endpoint.parameters.length > 0 ? (
                      <div className="space-y-4">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="border-l-2 border-gray-700 pl-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <code className="text-blue-400 font-mono">{param.name}</code>
                              <TypeBadge type={param.type} />
                              {param.required && <RequiredBadge />}
                            </div>
                            <p className="text-gray-300 text-sm">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400">No parameters required.</p>
                    )}
                  </TabsContent>

                  <TabsContent value="example" className="mt-6">
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>
                          {endpoint.method === "POST" && endpoint.path.includes("chat")
                            ? `curl -X POST "https://api.chatai.ai${endpoint.path}" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ],
    "temperature": 0.7,
    "max_tokens": 150
  }'`
                            : endpoint.method === "POST" && endpoint.path.includes("completions")
                              ? `curl -X POST "https://api.chatai.ai${endpoint.path}" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "prompt": "Complete this sentence:",
    "temperature": 0.7,
    "max_tokens": 100
  }'`
                              : `curl -X GET "https://api.chatai.ai${endpoint.path}" \\
  -H "Authorization: Bearer $CHATAI_API_KEY"`}
                        </code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="response" className="mt-6">
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>
                          {endpoint.path.includes("chat")
                            ? `{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "chatai-3",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}`
                            : endpoint.path.includes("completions")
                              ? `{
  "id": "cmpl-123",
  "object": "text_completion",
  "created": 1677652288,
  "model": "chatai-3",
  "choices": [{
    "text": "This is a completed sentence.",
    "index": 0,
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}`
                              : `{
  "object": "list",
  "data": [
    {
      "id": "chatai-3",
      "object": "model",
      "created": 1677610602,
      "owned_by": "chatai"
    },
    {
      "id": "chatai-2",
      "object": "model",
      "created": 1677610602,
      "owned_by": "chatai"
    }
  ]
}`}
                        </code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Error Codes */}
      <Card className="bg-gray-900/30 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Error Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">400 - Bad Request</h4>
                <p className="text-gray-400 text-sm">Invalid request parameters</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">401 - Unauthorized</h4>
                <p className="text-gray-400 text-sm">Invalid or missing API key</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">429 - Rate Limited</h4>
                <p className="text-gray-400 text-sm">Too many requests</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">500 - Server Error</h4>
                <p className="text-gray-400 text-sm">Internal server error</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
