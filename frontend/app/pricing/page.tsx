"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { X, User, Settings, LogOut } from "lucide-react"
import { LogoutModal } from "@/components/ui/logout-modal"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing-cards"
import { PricingFAQ } from "@/components/pricing-faq"

export default function PricingPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  const handleLogoutConfirm = async () => {
    setIsLoggingOut(true)

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

  const handleClose = () => {
    router.push("/chat")
  }

  return (
    <>
      <div className={`min-h-screen bg-black text-white ${!user ? "pre-login-page" : ""}`}>
        {/* Header for non-logged-in users */}
        {!user && <Navbar />}

        {/* Header for logged-in users */}
        {user && (
          <header className="bg-gray-900/80 backdrop-blur-md">
            <div className="px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-1">
                <img src="/images/chatai-logo.png" alt="CHATAI" className="w-14 h-14" />
                <span className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                  CHATAI
                </span>
              </div>

              {/* Right side - Close and User dropdown */}
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8 rounded-full">
                  <X className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="w-[200px] truncate text-sm text-gray-400">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem asChild>
                      <div onClick={() => router.push("/dashboard")} className="text-white hover:bg-gray-800">
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <div
                        onClick={() => router.push("/dashboard?tab=preferences")}
                        className="text-white hover:bg-gray-800"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Preferences
                      </div>
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
          </header>
        )}

        <div className={user ? "pt-0" : "pt-20"}>
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1
                className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6 ${!user ? "section-title" : ""}`}
              >
                Simple, Transparent Pricing
              </h1>
              <p className={`text-xl text-gray-400 max-w-3xl mx-auto ${!user ? "font-futuristic-body" : ""}`}>
                Choose the perfect plan for your needs. Upgrade or downgrade at any time.
              </p>
            </div>
            <PricingCards />
            <PricingFAQ />
          </div>
        </div>

        {/* Footer for non-logged-in users */}
        {!user && <Footer />}
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
