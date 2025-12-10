"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, User, Settings, LogOut } from "lucide-react"
import { LogoutModal } from "@/components/ui/logout-modal"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

const navigation = [
  { name: "CHATAI", href: "/chat" },
  { name: "API", href: "/api" },
  { name: "COMPANY", href: "/about" },
  { name: "FEATURES", href: "/features" },
  { name: "CAREERS", href: "/careers" },
  { name: "NEWS", href: "/blog" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()
  const { toast } = useToast()

  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  const handleLogoutConfirm = async () => {
    setIsLoggingOut(true)

    // Simulate logout delay for better UX
    setTimeout(() => {
      logout()
      setIsLoggingOut(false)
      setShowLogoutModal(false)
      toast({
        title: "Logged out successfully",
        description: "You have been safely logged out of your account.",
      })
      router.push("/")
    }, 1000)
  }

  const handleLogoutCancel = () => {
    setShowLogoutModal(false)
  }

  // If user is logged in and on chat page, don't show navbar
  if (user && pathname === "/chat") {
    return null
  }

  // If user is logged in on other pages, show floating icons
  if (user) {
    return (
      <>
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-gray-900/80 backdrop-blur-md rounded-full p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gray-700 text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-white">{user.name}</p>
                    <p className="w-[200px] truncate text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="text-white hover:bg-gray-800">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard?tab=preferences" className="text-white hover:bg-gray-800">
                    <Settings className="mr-2 h-4 w-4" />
                    Preferences
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem
                  onClick={handleLogoutClick}
                  className="text-red-400 hover:bg-gray-800 hover:text-red-300"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <LogoutModal
          isOpen={showLogoutModal}
          onClose={handleLogoutCancel}
          onConfirm={handleLogoutConfirm}
          isLoading={isLoggingOut}
        />
      </>
    )
  }

  // Default navbar for non-logged-in users
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/chatai-logo.png" alt="CHATAI" className="w-10 h-10" />
            <span className="logo-text text-xl font-bold text-white">CHATAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-text text-sm font-medium transition-colors hover:text-white ${
                  pathname === item.href ? "text-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="button-text border-gray-600 text-white hover:bg-gray-800 rounded-full px-6"
              >
                TRY CHATAI
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-text text-sm font-medium transition-colors hover:text-white ${
                    pathname === item.href ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="button-text w-full border-gray-600 text-white hover:bg-gray-800 rounded-full"
                  >
                    TRY CHATAI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
