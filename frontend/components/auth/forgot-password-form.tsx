"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, ArrowLeft, CheckCircle, Info, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      toast({
        title: "Reset link sent!",
        description: "Check your email for password reset instructions.",
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl flex items-center justify-center shadow-2xl">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Check your email</h1>
          <p className="text-gray-400">We've sent password reset instructions to {email}</p>
        </div>

        <Card className="bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
          <CardContent className="space-y-6 pt-6">
            <Alert className="bg-blue-900/20 border-blue-700/50 backdrop-blur-sm">
              <Info className="h-4 w-4 text-blue-400" />
              <AlertDescription className="text-blue-300">
                <div className="space-y-2">
                  <p className="font-medium">Didn't receive the email?</p>
                  <ul className="text-sm space-y-1">
                    <li>• Check your spam or junk folder</li>
                    <li>• Make sure you entered the correct email address</li>
                    <li>• Wait a few minutes for the email to arrive</li>
                  </ul>
                </div>
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setEmail("")
                }}
                variant="outline"
                className="w-full h-12 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-gray-600 rounded-xl"
              >
                Try different email
              </Button>
              <Link href="/auth/login">
                <Button className="w-full h-12 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-xl">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to sign in
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl">
          <img src="/images/chatai-logo.png" alt="CHATAI" className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Reset your password</h1>
        <p className="text-gray-400">Enter your email and we'll send you a reset link</p>
      </div>

      <Card className="bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-xl font-semibold text-white text-center">Forgot your password?</CardTitle>
          <CardDescription className="text-gray-400 text-center">
            No worries, we'll send you reset instructions
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
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
                  placeholder="Enter your email address"
                  className="pl-10 h-12 bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500/20 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending reset link...
                </div>
              ) : (
                <div className="flex items-center">
                  Send reset link
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="pt-6">
          <div className="w-full text-center">
            <Link
              href="/auth/login"
              className="text-sm text-gray-400 hover:text-gray-300 inline-flex items-center transition-colors"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back to sign in
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* Help Section */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 mb-2">Still having trouble?</p>
        <Link href="/contact" className="text-xs text-gray-400 hover:text-gray-300 underline">
          Contact our support team
        </Link>
      </div>
    </div>
  )
}
