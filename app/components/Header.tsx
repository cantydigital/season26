"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-terracotta" />
            <span className="font-bold text-xl text-charcoal">
              Season <span className="text-terracotta">26</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal/80 hover:text-terracotta transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-terracotta hover:bg-terracotta/90 text-white">Subscribe</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-charcoal hover:text-terracotta"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-charcoal hover:bg-cream hover:text-terracotta"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-3">
              <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
