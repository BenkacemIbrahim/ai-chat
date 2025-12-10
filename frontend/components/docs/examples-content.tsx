import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, ExternalLink, Play } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    title: "Simple Chat Completion",
    description: "Basic chat completion with a single message",
    difficulty: "Beginner",
    category: "Chat",
    code: {
      curl: `curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {"role": "user", "content": "Explain quantum computing in simple terms"}
    ]
  }'`,
      python: `import requests

response = requests.post(
    "https://api.chatai.ai/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    },
    json={
        "model": "chatai-3",
        "messages": [
            {"role": "user", "content": "Explain quantum computing in simple terms"}
        ]
    }
)

print(response.json()["choices"][0]["message"]["content"])`,
      javascript: `const response = await fetch('https://api.chatai.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'chatai-3',
    messages: [
      {role: 'user', content: 'Explain quantum computing in simple terms'}
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,
    },
  },
  {
    title: "Conversation with Context",
    description: "Multi-turn conversation maintaining context",
    difficulty: "Beginner",
    category: "Chat",
    code: {
      curl: `curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What is the capital of France?"},
      {"role": "assistant", "content": "The capital of France is Paris."},
      {"role": "user", "content": "What is its population?"}
    ]
  }'`,
      python: `messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is the capital of France?"},
    {"role": "assistant", "content": "The capital of France is Paris."},
    {"role": "user", "content": "What is its population?"}
]

response = requests.post(
    "https://api.chatai.ai/v1/chat/completions",
    headers={"Authorization": f"Bearer {api_key}"},
    json={"model": "chatai-3", "messages": messages}
)`,
      javascript: `const messages = [
  {role: 'system', content: 'You are a helpful assistant.'},
  {role: 'user', content: 'What is the capital of France?'},
  {role: 'assistant', content: 'The capital of France is Paris.'},
  {role: 'user', content: 'What is its population?'}
];

const response = await fetch('https://api.chatai.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({model: 'chatai-3', messages})
});`,
    },
  },
  {
    title: "Streaming Response",
    description: "Stream responses in real-time for better UX",
    difficulty: "Intermediate",
    category: "Streaming",
    code: {
      curl: `curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {"role": "user", "content": "Write a short story about AI"}
    ],
    "stream": true
  }' \\
  --no-buffer`,
      python: `import requests

response = requests.post(
    "https://api.chatai.ai/v1/chat/completions",
    headers={"Authorization": f"Bearer {api_key}"},
    json={
        "model": "chatai-3",
        "messages": [{"role": "user", "content": "Write a short story about AI"}],
        "stream": True
    },
    stream=True
)

for line in response.iter_lines():
    if line:
        print(line.decode('utf-8'))`,
      javascript: `const response = await fetch('https://api.chatai.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'chatai-3',
    messages: [{role: 'user', content: 'Write a short story about AI'}],
    stream: true
  })
});

const reader = response.body.getReader();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(new TextDecoder().decode(value));
}`,
    },
  },
  {
    title: "Function Calling",
    description: "Use functions to extend AI capabilities",
    difficulty: "Advanced",
    category: "Functions",
    code: {
      curl: `curl -X POST "https://api.chatai.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $CHATAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatai-3",
    "messages": [
      {"role": "user", "content": "What is the weather like in San Francisco?"}
    ],
    "functions": [
      {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {"type": "string", "description": "City name"}
          },
          "required": ["location"]
        }
      }
    ]
  }'`,
      python: `functions = [
    {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string", "description": "City name"}
            },
            "required": ["location"]
        }
    }
]

response = requests.post(
    "https://api.chatai.ai/v1/chat/completions",
    headers={"Authorization": f"Bearer {api_key}"},
    json={
        "model": "chatai-3",
        "messages": [{"role": "user", "content": "What is the weather like in San Francisco?"}],
        "functions": functions
    }
)`,
      javascript: `const functions = [{
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {type: 'string', description: 'City name'}
    },
    required: ['location']
  }
}];

const response = await fetch('https://api.chatai.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'chatai-3',
    messages: [{role: 'user', content: 'What is the weather like in San Francisco?'}],
    functions
  })
});`,
    },
  },
]

// Custom Difficulty Badge Component (same as tutorials page)
const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-600/30 to-emerald-500/30 border-2 border-emerald-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🟢",
          text: "text-emerald-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-emerald-500/20 rounded-lg blur-md",
        }
      case "Intermediate":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-600/30 to-amber-500/30 border-2 border-amber-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🟡",
          text: "text-amber-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-amber-500/20 rounded-lg blur-md",
        }
      case "Advanced":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-600/30 to-red-500/30 border-2 border-red-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🔴",
          text: "text-red-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-red-500/20 rounded-lg blur-md",
        }
      default:
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-600/30 to-gray-500/30 border-2 border-gray-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "⚪",
          text: "text-gray-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-gray-500/20 rounded-lg blur-md",
        }
    }
  }

  const styles = getDifficultyStyles(difficulty)

  return (
    <div className={styles.container}>
      <div className={styles.glow}></div>
      <span className="text-sm mr-1 relative z-10">{styles.icon}</span>
      <span className={`${styles.text} relative z-10`}>{difficulty}</span>
    </div>
  )
}

// Custom Category Badge Component
const CategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-400/30 rounded-full backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-full blur-sm"></div>
      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
      <span className="text-slate-300 font-medium text-sm tracking-wide ml-2 relative z-10">{category}</span>
    </div>
  )
}

export function ExamplesContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Code Examples</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Ready-to-use code examples for common ChatAI API use cases. Copy, paste, and customize for your applications.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-12">
        {examples.map((example, index) => (
          <Card key={index} className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <DifficultyBadge difficulty={example.difficulty} />
                  <CategoryBadge category={example.category} />
                </div>
                <Link href={`/chat?example=${encodeURIComponent(example.title.toLowerCase().replace(/\s+/g, "-"))}`}>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Try it
                  </Button>
                </Link>
              </div>
              <CardTitle className="text-white">{example.title}</CardTitle>
              <p className="text-gray-400">{example.description}</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                  <TabsTrigger value="curl" className="text-gray-300">
                    cURL
                  </TabsTrigger>
                  <TabsTrigger value="python" className="text-gray-300">
                    Python
                  </TabsTrigger>
                  <TabsTrigger value="javascript" className="text-gray-300">
                    JavaScript
                  </TabsTrigger>
                </TabsList>

                {Object.entries(example.code).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="mt-6">
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <pre className="text-gray-300">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* More Examples */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need More Examples?</h3>
          <p className="text-gray-300 mb-6">
            Check out our comprehensive tutorials and community examples for more advanced use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs/tutorials">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2">
                View Tutorials
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://github.com/chatai/examples" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
                Community Examples
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
