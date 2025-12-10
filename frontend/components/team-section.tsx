import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Dr. Alexandra Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI Research Director at DeepMind. PhD in Machine Learning from MIT with 15+ years in AI development.",
    image: "/placeholder.svg?height=400&width=400",
    imageAlt: "Professional headshot of Dr. Alexandra Chen, Asian woman in business attire with confident smile",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Thompson",
    role: "CTO & Co-Founder",
    bio: "Ex-Principal Engineer at OpenAI. Expert in large language models, distributed systems, and AI infrastructure.",
    image: "/placeholder.svg?height=400&width=400",
    imageAlt: "Professional headshot of Marcus Thompson, African American man with glasses and tech background",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Head of AI Research",
    bio: "Former Senior Scientist at Google Brain. Specialist in natural language processing and conversational AI.",
    image: "/placeholder.svg?height=400&width=400",
    imageAlt: "Professional headshot of Dr. Elena Vasquez, Hispanic woman with warm smile in modern office setting",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Mitchell",
    role: "Head of Product",
    bio: "Former VP of Product at Anthropic. Expert in AI safety, user experience, and product strategy for AI applications.",
    image: "/placeholder.svg?height=400&width=400",
    imageAlt: "Professional headshot of James Mitchell, Caucasian man with beard in casual business attire",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Engineering",
    bio: "Former Staff Engineer at Tesla AI. Specialist in machine learning infrastructure and scalable AI systems.",
    image: "/placeholder.svg?height=400&width=400",
    imageAlt: "Professional headshot of Dr. Priya Sharma, Indian woman with confident expression in tech environment",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Robert Kim",
    role: "Head of Design",
    bio: "Former Design Lead at Apple. Expert in human-computer interaction and AI interface design with 12+ years experience.",
    image: "/placeholder.svg?height=400&width=400",
    imageAlt: "Professional headshot of Robert Kim, Korean American man with creative background and design elements",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          The brilliant minds behind ChatAI, working to make AI more helpful and accessible
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="group text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="relative mb-6">
              <div className="relative overflow-hidden rounded-2xl border-4 border-gray-700 group-hover:border-gray-500 transition-colors duration-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.imageAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-gray-900 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-gray-400 font-medium mb-3">{member.role}</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
            <div className="flex justify-center space-x-3">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800/20"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800/20"
                  aria-label={`${member.name} Twitter profile`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/50"
                  aria-label={`${member.name} GitHub profile`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
