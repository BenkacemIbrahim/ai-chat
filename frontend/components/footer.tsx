import Link from "next/link"

const footerSections = [
  {
    title: "TRY CHATAI ON",
    links: [
      { name: "Web", href: "/chat" },
      { name: "iOS", href: "#" },
      { name: "Android", href: "#" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { name: "CHATAI", href: "/chat" },
      { name: "API", href: "/api" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "Company", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "News", href: "/blog" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Privacy policy", href: "/privacy" },
      { name: "Security", href: "/security" },
      { name: "Legal", href: "/legal" },
      { name: "Status", href: "/status" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-400 text-sm font-medium mb-6 tracking-wider">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white hover:text-gray-300 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 CHATAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/security" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Security
              </Link>
              <Link href="/status" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
