"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Book, Code, Shield, Zap, Key, FileText, Layers } from "lucide-react"

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { name: "Overview", href: "/docs", icon: Book },
      { name: "Quick Start", href: "/docs/quick-start", icon: Zap },
      { name: "Authentication", href: "/docs/authentication", icon: Key },
    ],
  },
  {
    title: "API Reference",
    items: [
      { name: "API Reference", href: "/docs/api-reference", icon: Code },
      { name: "Examples", href: "/docs/examples", icon: FileText },
      { name: "SDKs", href: "/docs/sdks", icon: Layers },
    ],
  },
  {
    title: "Guides",
    items: [
      { name: "Tutorials", href: "/docs/tutorials", icon: Book },
      { name: "Security", href: "/docs/security", icon: Shield },
    ],
  },
]

export function DocsNavigation() {
  const pathname = usePathname()

  return (
    <nav className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Documentation</h2>
      </div>

      {navigationItems.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors",
                      isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-900",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
