import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"

export default function GeneralApplicationPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="container mx-auto max-w-3xl px-4">
          <Link href="/careers" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to careers
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">General Application</h1>
            <p className="text-gray-400">
              Don't see a specific role that matches your skills? We're always looking for exceptional talent to join
              our team. Submit your information and we'll reach out if there's a good fit.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Application Form</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                  LinkedIn Profile
                </label>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                  Portfolio/Website
                </label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">
                  Departments You're Interested In *
                </label>
                <select
                  id="department"
                  className="w-full rounded-md bg-gray-800 border border-gray-700 text-white py-2 px-3 focus:ring-2 focus:ring-white focus:border-white [&>option]:bg-gray-800 [&>option]:text-white"
                  style={{ colorScheme: "dark" }}
                  required
                >
                  <option value="" className="bg-gray-800 text-white">
                    Select a department
                  </option>
                  <option value="engineering" className="bg-gray-800 text-white">
                    Engineering
                  </option>
                  <option value="research" className="bg-gray-800 text-white">
                    Research
                  </option>
                  <option value="product" className="bg-gray-800 text-white">
                    Product
                  </option>
                  <option value="design" className="bg-gray-800 text-white">
                    Design
                  </option>
                  <option value="marketing" className="bg-gray-800 text-white">
                    Marketing
                  </option>
                  <option value="sales" className="bg-gray-800 text-white">
                    Sales
                  </option>
                  <option value="operations" className="bg-gray-800 text-white">
                    Operations
                  </option>
                  <option value="other" className="bg-gray-800 text-white">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                  Resume/CV *
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-300" />
                      <p className="mb-2 text-sm text-gray-300">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">PDF, DOCX or RTF (MAX. 5MB)</p>
                    </div>
                    <input id="resume-upload" type="file" className="hidden" accept=".pdf,.docx,.rtf" required />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Please upload your most recent resume or CV. Accepted formats: PDF, DOCX, RTF
                </p>
              </div>

              <div>
                <label htmlFor="statement" className="block text-sm font-medium text-gray-300 mb-2">
                  Personal Statement
                </label>
                <Textarea
                  id="statement"
                  placeholder="Tell us about yourself, your skills, and why you'd like to join our team..."
                  className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                />
              </div>

              <div>
                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
