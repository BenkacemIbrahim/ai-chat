"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, Clock, TrendingUp, Activity } from "lucide-react"

const services = [
  {
    name: "API Gateway",
    status: "operational",
    uptime: "99.98%",
    responseTime: "45ms",
    description: "Main API endpoint for all requests",
  },
  {
    name: "Chat Completions",
    status: "operational",
    uptime: "99.95%",
    responseTime: "1.2s",
    description: "Chat completion and conversation API",
  },
  {
    name: "Text Generation",
    status: "operational",
    uptime: "99.97%",
    responseTime: "800ms",
    description: "Text completion and generation services",
  },
  {
    name: "Code Generation",
    status: "degraded",
    uptime: "98.5%",
    responseTime: "2.1s",
    description: "Code generation and analysis API",
  },
  {
    name: "Translation API",
    status: "operational",
    uptime: "99.99%",
    responseTime: "300ms",
    description: "Language translation services",
  },
  {
    name: "Web Dashboard",
    status: "operational",
    uptime: "99.96%",
    responseTime: "150ms",
    description: "Web interface and dashboard",
  },
]

const incidents = [
  {
    id: "INC-2024-001",
    title: "Increased latency in Code Generation API",
    status: "investigating",
    severity: "minor",
    startTime: "2024-01-15 14:30 UTC",
    description: "We are investigating reports of increased response times for the Code Generation API.",
    updates: [
      {
        time: "2024-01-15 15:15 UTC",
        message: "We have identified the root cause and are implementing a fix.",
      },
      {
        time: "2024-01-15 14:45 UTC",
        message: "Engineering team has been notified and is investigating the issue.",
      },
    ],
  },
]

const metrics = [
  { name: "Overall Uptime", value: "99.96%", trend: "up" },
  { name: "API Requests/min", value: "125,432", trend: "up" },
  { name: "Avg Response Time", value: "680ms", trend: "down" },
  { name: "Error Rate", value: "0.02%", trend: "down" },
]

// Custom Status Badge Component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "operational":
        return {
          container:
            "relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-full backdrop-blur-sm",
          dot: "w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50",
          text: "text-emerald-300 font-medium text-sm tracking-wide",
          glow: "absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-sm",
        }
      case "degraded":
        return {
          container:
            "relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full backdrop-blur-sm",
          dot: "w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50",
          text: "text-amber-300 font-medium text-sm tracking-wide",
          glow: "absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-sm",
        }
      case "outage":
        return {
          container:
            "relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/30 rounded-full backdrop-blur-sm",
          dot: "w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50",
          text: "text-red-300 font-medium text-sm tracking-wide",
          glow: "absolute inset-0 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-full blur-sm",
        }
      case "investigating":
        return {
          container:
            "relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm",
          dot: "w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50",
          text: "text-blue-300 font-medium text-sm tracking-wide",
          glow: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-sm",
        }
      default:
        return {
          container:
            "relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-400/30 rounded-full backdrop-blur-sm",
          dot: "w-2 h-2 bg-gray-400 rounded-full animate-pulse shadow-lg shadow-gray-400/50",
          text: "text-gray-300 font-medium text-sm tracking-wide",
          glow: "absolute inset-0 bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-full blur-sm",
        }
    }
  }

  const styles = getStatusStyles(status)

  return (
    <div className={styles.container}>
      <div className={styles.glow}></div>
      <div className={styles.dot}></div>
      <span className={`${styles.text} ml-2 relative z-10`}>{status}</span>
    </div>
  )
}

// Custom Severity Badge Component
const SeverityBadge = ({ severity }: { severity: string }) => {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-600/30 to-red-500/30 border-2 border-red-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "⚠️",
          text: "text-red-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-red-500/20 rounded-lg blur-md",
        }
      case "major":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-600/30 to-orange-500/30 border-2 border-orange-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🔶",
          text: "text-orange-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-orange-500/20 rounded-lg blur-md",
        }
      case "minor":
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-600/30 to-yellow-500/30 border-2 border-yellow-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "🔸",
          text: "text-yellow-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-yellow-500/20 rounded-lg blur-md",
        }
      default:
        return {
          container:
            "relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-600/30 to-gray-500/30 border-2 border-gray-400/50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform",
          icon: "ℹ️",
          text: "text-gray-200 font-bold text-xs uppercase tracking-wider",
          glow: "absolute inset-0 bg-gray-500/20 rounded-lg blur-md",
        }
    }
  }

  const styles = getSeverityStyles(severity)

  return (
    <div className={styles.container}>
      <div className={styles.glow}></div>
      <span className="text-sm mr-1 relative z-10">{styles.icon}</span>
      <span className={`${styles.text} relative z-10`}>{severity}</span>
    </div>
  )
}

export function StatusContent() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case "outage":
        return <XCircle className="w-5 h-5 text-red-400" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Overall Status */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
        </div>
        <p className="text-gray-400">Last updated: {currentTime.toLocaleString()}</p>
      </div>

      {/* Key Metrics */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <Activity className="w-5 h-5 text-blue-400" />
                  )}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Status */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Service Status</h3>
        <div className="space-y-4">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h4 className="font-semibold text-white">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-white font-semibold">{service.uptime}</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold">{service.responseTime}</div>
                      <div className="text-gray-400 text-xs">Response</div>
                    </div>
                    <StatusBadge status={service.status} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Active Incidents */}
      {incidents.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Active Incidents</h3>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{incident.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <SeverityBadge severity={incident.severity} />
                      <StatusBadge status={incident.status} />
                    </div>
                  </div>
                  <p className="text-gray-400">{incident.description}</p>
                  <p className="text-gray-500 text-sm">Started: {incident.startTime}</p>
                </CardHeader>
                <CardContent>
                  <h5 className="font-semibold text-white mb-3">Updates</h5>
                  <div className="space-y-3">
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="border-l-2 border-gray-700 pl-4">
                        <div className="text-gray-500 text-xs mb-1">{update.time}</div>
                        <div className="text-gray-300">{update.message}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Historical Uptime */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">90-Day Uptime History</h3>
        <Card className="bg-gray-900/30 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">90 days ago</span>
              <span className="text-gray-400">Today</span>
            </div>
            <div className="flex space-x-1 mb-4">
              {Array.from({ length: 90 }, (_, i) => (
                <div
                  key={i}
                  className={`h-8 flex-1 rounded-sm ${
                    Math.random() > 0.05 ? "bg-green-400" : Math.random() > 0.5 ? "bg-yellow-400" : "bg-red-400"
                  }`}
                  title={`Day ${i + 1}: ${Math.random() > 0.05 ? "Operational" : "Issues"}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded"></div>
                  <span>Operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                  <span>Degraded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded"></div>
                  <span>Outage</span>
                </div>
              </div>
              <span>Overall uptime: 99.96%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subscribe to Updates */}
      <Card className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 border-gray-800">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to status updates and get notified about incidents and maintenance windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-400"
            />
            <button className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
