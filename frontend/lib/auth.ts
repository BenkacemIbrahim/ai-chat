export interface User {
  id: string
  email: string
  name: string
  plan: "free" | "pro" | "enterprise"
  preferences: {
    theme: "light" | "dark" | "system"
    language: string
    aiPersona: string
    voiceEnabled: boolean
    highContrast: boolean
    fontSize: "small" | "medium" | "large"
  }
}

export const DEMO_CREDENTIALS = {
  email: "demo@chatapp.com",
  password: "Demo123!",
}

export const DEMO_USER: User = {
  id: "demo-user",
  email: "demo@chatapp.com",
  name: "Demo User",
  plan: "pro",
  preferences: {
    theme: "system",
    language: "en",
    aiPersona: "professional",
    voiceEnabled: true,
    highContrast: false,
    fontSize: "medium",
  },
}

export class AuthService {
  private static readonly AUTH_KEY = "neuralchat_auth"
  private static readonly SESSION_KEY = "neuralchat_session"

  static login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
          const sessionData = {
            user: DEMO_USER,
            timestamp: Date.now(),
            expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
          }

          localStorage.setItem(this.AUTH_KEY, JSON.stringify(sessionData))
          sessionStorage.setItem(this.SESSION_KEY, "active")
          resolve(DEMO_USER)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  static logout(): void {
    localStorage.removeItem(this.AUTH_KEY)
    sessionStorage.removeItem(this.SESSION_KEY)
  }

  static getCurrentUser(): User | null {
    try {
      const authData = localStorage.getItem(this.AUTH_KEY)
      const sessionActive = sessionStorage.getItem(this.SESSION_KEY)

      if (!authData || !sessionActive) return null

      const { user, expiresAt } = JSON.parse(authData)

      if (Date.now() > expiresAt) {
        this.logout()
        return null
      }

      return user
    } catch {
      return null
    }
  }

  static isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }

  static updateUserPreferences(preferences: Partial<User["preferences"]>): void {
    const user = this.getCurrentUser()
    if (!user) return

    const updatedUser = {
      ...user,
      preferences: { ...user.preferences, ...preferences },
    }

    const authData = JSON.parse(localStorage.getItem(this.AUTH_KEY) || "{}")
    authData.user = updatedUser
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(authData))
  }
}
