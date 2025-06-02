"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-terracotta to-dusty-rose text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Navigate the Chaos Together?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Subscribe for Monthly Updates: Get the latest Season 26 dispatch – monthly reflections, essays, and photo
          diaries – delivered straight to your inbox. No spam, just real talk.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-charcoal"
            />
            <Button type="submit" className="bg-white text-terracotta hover:bg-cream px-8">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-xl">
            <Check className="w-6 h-6" />
            <span>Thanks for subscribing! Check your inbox soon.</span>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold mb-2">This Blog is For You If:</h3>
            <p className="opacity-90">
              You're navigating your mid or late 20s and feel more "work-in-progress" than "finished product."
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">You Crave:</h3>
            <p className="opacity-90">
              Honest stories about career pivots, adult friendships, mental health, and personal growth – minus the
              toxic positivity.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">You're Looking For:</h3>
            <p className="opacity-90">A sense of community and the comforting reminder: "Oh good, it's not just me."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
