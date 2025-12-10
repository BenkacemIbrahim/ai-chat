import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Minimal Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src="/images/chatai-logo.png" alt="CHATAI" className="w-6 h-6" />
              </div>
              <span className="logo-text text-xl font-bold text-white">CHATAI</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 relative flex items-center justify-center px-4 pt-8">
        <LoginForm />
      </div>

      {/* Copyright Footer */}
      <footer className="relative z-10 py-6 px-4">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-500 text-xs">
            © 2024 CHATAI. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              Terms
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
