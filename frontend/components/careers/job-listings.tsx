import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users } from "lucide-react"

const jobs = [
  {
    id: "sr-ai-research-engineer",
    title: "Senior AI Research Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Lead research and development of next-generation AI models and algorithms.",
    requirements: [
      "PhD in AI/ML or equivalent experience",
      "5+ years in AI research",
      "Published papers in top-tier conferences",
    ],
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, responsive user interfaces for our AI chat platform.",
    requirements: ["3+ years React/Next.js experience", "TypeScript proficiency", "UI/UX design sensibility"],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Drive product strategy and roadmap for our AI conversation platform.",
    requirements: ["5+ years product management", "AI/ML product experience", "Data-driven decision making"],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Scale our infrastructure to support millions of AI conversations.",
    requirements: ["Kubernetes/Docker expertise", "Cloud platforms (AWS/GCP)", "Infrastructure as code"],
  },
  {
    id: "ai-safety-researcher",
    title: "AI Safety Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Ensure our AI systems are safe, aligned, and beneficial for humanity.",
    requirements: ["PhD in relevant field", "AI safety research experience", "Ethics and alignment focus"],
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Lead marketing initiatives to grow our user base and brand awareness.",
    requirements: ["5+ years marketing experience", "B2B/B2C marketing", "Growth marketing expertise"],
  },
]

export function JobListings() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join our team and help build the future of AI conversation
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <Link href={`/careers/apply/${job.id}`} className="mt-4 lg:mt-0">
                  <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-full px-6">Apply Now</Button>
                </Link>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

              <div>
                <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                <ul className="text-gray-400 space-y-1">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Don't see a role that fits? We're always looking for exceptional talent.</p>
          <Link href="/careers/general-application">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 rounded-full px-8">
              Send us your resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
