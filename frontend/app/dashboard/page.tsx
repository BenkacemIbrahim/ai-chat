"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentChats } from "@/components/dashboard/recent-chats"
import { UsageChart } from "@/components/dashboard/usage-chart"
import { AccountSettings } from "@/components/dashboard/account-settings"
import { UserPreferences } from "@/components/dashboard/user-preferences"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { LogoutModal } from "@/components/ui/logout-modal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart3, Settings, User, MessageCircle, LogOut, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router])

  useEffect(() => {
    // Check for hash in URL to set active tab
    const hash = window.location.hash.replace("#", "")
    if (hash && ["overview", "preferences", "account"].includes(hash)) {
      setActiveTab(hash)
    }

    // Also check for tab query parameter
    const params = new URLSearchParams(window.location.search)
    const tabParam = params.get("tab")
    if (tabParam && ["overview", "preferences", "account"].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [])

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
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
                    <div
                      onClick={() => router.push("/dashboard")}
                      className="text-white hover:bg-gray-800 cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div
                      onClick={() => router.push("/dashboard?tab=preferences")}
                      className="text-white hover:bg-gray-800 cursor-pointer"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Preferences
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    onClick={handleLogoutClick}
                    className="text-red-400 hover:bg-gray-800 hover:text-red-300 cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <div className="pt-8">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-gray-400">Welcome back, {user.name}! Here's your activity overview.</p>
              </div>
              <Link href="/chat">
                <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chatting
                </Button>
              </Link>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px] bg-gray-900 border border-gray-800">
                <TabsTrigger
                  value="overview"
                  className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger
                  value="preferences"
                  className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                >
                  <Settings className="w-4 h-4" />
                  <span>Preferences</span>
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                >
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <DashboardStats />
                <div className="grid md:grid-cols-3 gap-6">
                  <QuickActions />
                  <RecentChats />
                  <UsageChart />
                </div>
              </TabsContent>

              <TabsContent value="preferences">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Preferences</h2>
                    <p className="text-gray-400">Customize your CHATAI experience</p>
                  </div>
                  <Link href="/chat">
                    <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Try Settings
                    </Button>
                  </Link>
                </div>
                <UserPreferences />
              </TabsContent>

              <TabsContent value="account">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
                    <p className="text-gray-400">Manage your account and security settings</p>
                  </div>
                  <Link href="/chat">
                    <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Back to Chat
                    </Button>
                  </Link>
                </div>
                <AccountSettings />
              </TabsContent>
            </Tabs>
          </div>
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
