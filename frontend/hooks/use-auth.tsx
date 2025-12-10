"use client"

import { useState, useEffect, createContext, useContext } from "react"
import type { ReactNode } from "react"
import type { User } from "@/lib/auth"

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
    fetch("http://localhost:8000/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })
    if (!res.ok) {
      throw new Error("Invalid credentials")
    }
    const data = await res.json()
    localStorage.setItem("auth_token", data.token)
    localStorage.setItem("auth_user", JSON.stringify(data.user))
    setUser(data.user as User)
  }

  const register = async (name: string, email: string, password: string) => {
    const res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
      credentials: "include",
    })
    if (!res.ok) {
      throw new Error("Registration failed")
    }
    const data = await res.json()
    localStorage.setItem("auth_token", data.token)
    localStorage.setItem("auth_user", JSON.stringify(data.user))
    setUser(data.user as User)
  }

  const logout = () => {
    const token = localStorage.getItem("auth_token")
    if (token) {
      fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      }).catch(() => {})
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
