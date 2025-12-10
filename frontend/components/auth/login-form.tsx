"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, Info, Play, ArrowRight, Github } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { DEMO_CREDENTIALS } from "@/lib/auth"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { toast } = useToast()
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await login(email, password)
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      })
      router.push("/chat")
    } catch (err) {
      setError("Invalid credentials. Please try the demo account or check your login details.")
    } finally {
      setIsLoading(false)
    }
  }

  const useDemoCredentials = () => {
    setEmail(DEMO_CREDENTIALS.email)
    setPassword(DEMO_CREDENTIALS.password)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl">
          <img src="/images/chatai-logo.png" alt="CHATAI" className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-gray-400">Sign in to continue to CHATAI</p>
      </div>

      <Card className="bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-xl font-semibold text-white text-center">Sign in to your account</CardTitle>
          <CardDescription className="text-gray-400 text-center">
            Enter your credentials to access your AI assistant
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Demo Credentials Alert */}
          <Alert className="bg-blue-900/20 border-blue-700/50 backdrop-blur-sm">
            <Info className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-300">
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <strong>Try our demo:</strong>
                  <div className="mt-1 space-y-1">
                    <div className="font-mono text-xs bg-blue-900/30 px-2 py-1 rounded">{DEMO_CREDENTIALS.email}</div>
                    <div className="font-mono text-xs bg-blue-900/30 px-2 py-1 rounded">
                      {DEMO_CREDENTIALS.password}
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={useDemoCredentials}
                  className="ml-3 border-blue-600 text-blue-300 hover:bg-blue-900/30 hover:border-blue-500"
                >
                  <Play className="w-3 h-3 mr-1" />
                  Use Demo
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          {error && (
            <Alert variant="destructive" className="bg-red-900/20 border-red-700/50 backdrop-blur-sm">
              <AlertDescription className="text-red-300">{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">
                Email address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-gray-700/50 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-12 h-12 bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-gray-700/50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-700/50 no-scale"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded bg-gray-800 border-gray-600 text-gray-600 focus:ring-gray-500 focus:ring-offset-0"
                />
                <Label htmlFor="remember" className="text-sm text-gray-300 font-normal">
                  Remember me
                </Label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center">
                  Sign in
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="bg-gray-700/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-3 text-gray-400 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-12 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-gray-600 rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              className="h-12 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-gray-600 rounded-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </CardContent>

        <CardFooter className="pt-6">
          <p className="text-sm text-gray-400 text-center w-full">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-gray-300 hover:text-white font-medium transition-colors">
              Create account
            </Link>
          </p>
        </CardFooter>
      </Card>

      {/* Security Notice */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Protected by enterprise-grade security. Your data is encrypted and secure.
        </p>
      </div>
    </div>
  )
}
