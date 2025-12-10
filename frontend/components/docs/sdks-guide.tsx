import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const sdks = [
  {
    name: "Python",
    version: "v1.2.0",
    install: "pip install chatai",
    example: `import chatai

client = chatai.Client(api_key="your-api-key")

response = client.chat.completions.create(
    model="chatai-3",
    messages=[
        {"role": "user", "content": "Hello, ChatAI!"}
    ]
)

print(response.choices[0].message.content)`,
    features: ["Async support", "Streaming responses", "Type hints", "Error handling"],
  },
  {
    name: "Node.js",
    version: "v1.1.0",
    install: "npm install chatai",
    example: `const ChatAI = require('chatai');

const client = new ChatAI({
  apiKey: 'your-api-key'
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'chatai-3',
    messages: [
      { role: 'user', content: 'Hello, ChatAI!' }
    ]
  });
  
  console.log(response.choices[0].message.content);
}

main();`,
    features: ["Promise-based", "TypeScript support", "Streaming", "Middleware"],
  },
  {
    name: "Go",
    version: "v1.0.0",
    install: "go get github.com/chatai/chatai-go",
    example: `package main

import (
    "context"
    "fmt"
    "github.com/chatai/chatai-go"
)

func main() {
    client := chatai.NewClient("your-api-key")
    
    resp, err := client.CreateChatCompletion(
        context.Background(),
        chatai.ChatCompletionRequest{
            Model: "chatai-3",
            Messages: []chatai.ChatCompletionMessage{
                {
                    Role:    "user",
                    Content: "Hello, ChatAI!",
                },
            },
        },
    )
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(resp.Choices[0].Message.Content)
}`,
    features: ["Context support", "Structured errors", "HTTP client config", "Retry logic"],
  },
  {
    name: "Java",
    version: "v1.0.0",
    install: "implementation 'com.chatai:chatai-java:1.0.0'",
    example: `import com.chatai.ChatAI;
import com.chatai.model.ChatCompletionRequest;
import com.chatai.model.ChatMessage;

public class Example {
    public static void main(String[] args) {
        ChatAI client = ChatAI.builder()
            .apiKey("your-api-key")
            .build();
            
        ChatCompletionRequest request = ChatCompletionRequest.builder()
            .model("chatai-3")
            .message(ChatMessage.of("user", "Hello, ChatAI!"))
            .build();
            
        var response = client.createChatCompletion(request);
        System.out.println(response.getChoices().get(0).getMessage().getContent());
    }
}`,
    features: ["Builder pattern", "Immutable objects", "Reactive streams", "Spring Boot starter"],
  },
]

export function SdksGuide() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">SDKs & Libraries</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          Official SDKs and community libraries to integrate ChatAI into your applications quickly and easily.
        </p>
      </div>

      {/* Official SDKs */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Official SDKs</h2>
        <div className="space-y-8">
          {sdks.map((sdk, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CardTitle className="text-white">{sdk.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {sdk.version}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View on GitHub
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="install" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                    <TabsTrigger value="install" className="text-gray-300">
                      Installation
                    </TabsTrigger>
                    <TabsTrigger value="example" className="text-gray-300">
                      Example
                    </TabsTrigger>
                    <TabsTrigger value="features" className="text-gray-300">
                      Features
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="install" className="mt-6">
                    <div className="bg-gray-800 rounded-lg p-4 font-mono">
                      <code className="text-green-400">{sdk.install}</code>
                    </div>
                  </TabsContent>

                  <TabsContent value="example" className="mt-6">
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>{sdk.example}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {sdk.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Libraries */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Community Libraries</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Ruby</CardTitle>
              <p className="text-gray-400">Unofficial Ruby gem for ChatAI API</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <code className="text-green-400">gem install chatai-ruby</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Maintained by community</span>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">PHP</CardTitle>
              <p className="text-gray-400">Community-maintained PHP library</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <code className="text-green-400">composer require chatai/chatai-php</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Maintained by community</span>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">C#</CardTitle>
              <p className="text-gray-400">.NET library for ChatAI integration</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <code className="text-green-400">dotnet add package ChatAI.NET</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Maintained by community</span>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Rust</CardTitle>
              <p className="text-gray-400">Async Rust crate for ChatAI API</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <code className="text-green-400">cargo add chatai</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Maintained by community</span>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    View on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Ready to Get Started?</h3>
          <p className="text-gray-300 text-center mb-6">
            Choose your preferred language and start building with ChatAI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs/quick-start">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2">Quick Start Guide</Button>
            </Link>
            <Link href="/docs/api-reference">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
                API Reference
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
