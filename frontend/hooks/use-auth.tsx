"use client"

import { useState, useEffect, createContext, useContext } from "react"
import type { ReactNode } from "react"
import type { User } from "@/lib/auth"
import { API_URL } from "@/lib/config"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  updatePreferences: (preferences: Partial<User["preferences"]>) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
    if (!token) {
      setIsLoading(false)
      return
    }
    fetch(`${API_URL}/api/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Unauthorized")
        const data = await res.json()
        localStorage.setItem("auth_user", JSON.stringify(data))
        setUser(data as User)
      })
      .catch(() => {
        localStorage.removeItem("auth_token")
        localStorage.removeItem("auth_user")
        setUser(null)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      })
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        let errorMessage = errorData.message || "Invalid credentials"
        if (errorData.errors) {
          const firstError = Object.values(errorData.errors)[0]
          if (Array.isArray(firstError)) {
            errorMessage = firstError[0] as string
          } else if (typeof firstError === 'string') {
            errorMessage = firstError
          }
        }
        throw new Error(errorMessage)
      }
      const data = await res.json()
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("auth_user", JSON.stringify(data.user))
      setUser(data.user as User)
    } catch (error: any) {
      console.error("Login error:", error)
      throw error
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
      })
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        let errorMessage = errorData.message || "Registration failed"
        if (errorData.errors) {
          const firstError = Object.values(errorData.errors)[0]
          if (Array.isArray(firstError)) {
            errorMessage = firstError[0] as string
          } else if (typeof firstError === 'string') {
            errorMessage = firstError
          }
        }
        throw new Error(errorMessage)
      }
      const data = await res.json()
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("auth_user", JSON.stringify(data.user))
      setUser(data.user as User)
    } catch (error: any) {
      console.error("Registration error:", error)
      throw error
    }
  }

  const logout = () => {
    const token = localStorage.getItem("auth_token")
    if (token) {
      fetch(`${API_URL}/api/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      }).catch(() => { })
    }
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
    setUser(null)
  }

  const updatePreferences = (preferences: Partial<User["preferences"]>) => {
    if (!user) return
    const updated = { ...user, preferences: { ...user.preferences, ...preferences } }
    localStorage.setItem("auth_user", JSON.stringify(updated))
    setUser(updated)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updatePreferences }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
