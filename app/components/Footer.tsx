import Link from "next/link"
import { Instagram, Twitter, Mail, Coffee, Heart, BookOpen, Camera, Calendar } from "lucide-react"

const footerSections = [
  {
    title: "Content",
    links: [
      { name: "Monthly Dispatch", href: "#monthly-dispatch", icon: Calendar },
      { name: "Hard-Won Wisdom", href: "#wisdom", icon: BookOpen },
      { name: "Personal Essays", href: "#essays", icon: Heart },
      { name: "Photo Diaries", href: "#photos", icon: Camera },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "About Me", href: "#about", icon: Coffee },
      { name: "Contact", href: "#contact", icon: Mail },
      { name: "Newsletter", href: "#newsletter", icon: Mail },
    ],
  },
  {
    title: "Follow",
    links: [
      { name: "Instagram", href: "https://instagram.com", icon: Instagram },
      { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-terracotta" />
              <span className="font-bold text-xl">
                Season <span className="text-terracotta">26</span>
              </span>
            </div>
            <p className="text-white/80 text-sm">
              Season 26 isn't about having it all figured out. It's about showing up for the messy, magnificent process
              of becoming. Thanks for being here for the ride.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-terracotta transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-terracotta transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-terracotta transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-white/60">
            &copy; {new Date().getFullYear()} Season 26: Life in Progress. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
