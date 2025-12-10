"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Globe, User, Volume2, Eye, Type, Sparkles, Settings } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

const aiPersonas = [
  {
    id: "professional",
    name: "Professional Assistant",
    description: "Formal, precise, and business-focused responses",
    icon: "👔",
  },
  {
    id: "creative",
    name: "Creative Writer",
    description: "Imaginative, expressive, and artistic responses",
    icon: "🎨",
  },
  {
    id: "teacher",
    name: "Patient Teacher",
    description: "Educational, explanatory, and encouraging responses",
    icon: "📚",
  },
  {
    id: "casual",
    name: "Casual Friend",
    description: "Relaxed, friendly, and conversational responses",
    icon: "😊",
  },
]

export function PreferencesPanel() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedPersona, setSelectedPersona] = useState("professional")
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState("medium")

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Customize Your AI Experience</h2>
        <p className="text-slate-600 dark:text-slate-300">
          Preview how you can personalize NeuralChat to match your preferences
        </p>
      </div>

      {/* Language Selection */}
      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Language
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => setSelectedLanguage(language.code)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedLanguage === language.code
                    ? "border-gray-500 bg-gray-50 dark:bg-gray-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Persona */}
      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            AI Personality
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {aiPersonas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedPersona === persona.id
                    ? "border-gray-500 bg-gray-50 dark:bg-gray-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{persona.icon}</span>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">{persona.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{persona.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Settings */}
      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Advanced Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <div>
                <Label className="font-medium">Voice Interaction</Label>
                <p className="text-sm text-slate-600 dark:text-slate-300">Enable voice input and output</p>
              </div>
            </div>
            <Switch checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Eye className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <div>
                <Label className="font-medium">High Contrast Mode</Label>
                <p className="text-sm text-slate-600 dark:text-slate-300">Improve visibility and readability</p>
              </div>
            </div>
            <Switch checked={highContrast} onCheckedChange={setHighContrast} />
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Type className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <Label className="font-medium">Font Size</Label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["small", "medium", "large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`p-2 rounded-lg border transition-all capitalize ${
                    fontSize === size
                      ? "border-gray-500 bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300"
                      : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview Note */}
      <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border border-gray-200 dark:border-gray-700">
        <Sparkles className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-3" />
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Save Your Preferences</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Log in to save these settings and enjoy a personalized AI experience
        </p>
        <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">
          Available after login
        </Badge>
      </div>
    </div>
  )
}
