"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MessageCircle, Coffee, Instagram, Send, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    description: "For collaborations, deep thoughts, or just to say hi",
    contact: "hello@season26.com",
    response: "Usually reply within 24-48 hours",
  },
  {
    icon: Instagram,
    title: "Instagram DMs",
    description: "Quick questions or sharing your own Season 26 moments",
    contact: "@season26blog",
    response: "Check daily, respond when I can",
  },
  {
    icon: Coffee,
    title: "Coffee Chat",
    description: "If you're in Melbourne and want to chat over a flat white",
    contact: "Drop me a line first!",
    response: "Always up for meeting fellow life-in-progress people",
  },
]

const inquiryTypes = [
  {
    title: "Collaboration Inquiries",
    description: "Brand partnerships, guest posts, or creative projects that align with Season 26's vibe",
    icon: Heart,
  },
  {
    title: "Personal Questions",
    description: "Life advice, quarter-life crisis solidarity, or sharing your own journey",
    icon: MessageCircle,
  },
  {
    title: "Media & Press",
    description: "Interview requests, podcast appearances, or media opportunities",
    icon: Send,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "", inquiryType: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sage/10 to-terracotta/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Let's Chat!</h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Whether you want to collaborate, share your own Season 26 story, or just say g'day – I'd love to hear from
            you. Seriously, don't be shy!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">How to Reach Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <method.icon className="w-12 h-12 text-terracotta mx-auto mb-4" />
                  <CardTitle className="text-xl text-charcoal">{method.title}</CardTitle>
                  <CardDescription className="text-charcoal/70">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-sage mb-2">{method.contact}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
                    <Clock className="w-4 h-4" />
                    <span>{method.response}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-20 px-4 bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">What Can We Chat About?</h2>
          <div className="space-y-6">
            {inquiryTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <type.icon className="w-6 h-6 text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{type.title}</h3>
                  <p className="text-charcoal/80">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Send Me a Message</h2>
            <p className="text-charcoal/70">
              Fill out the form below and I'll get back to you as soon as I can. Promise I read every single message!
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What should I call you?"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-charcoal mb-2">
                  What's this about?
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-terracotta focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="collaboration">Collaboration Inquiry</option>
                  <option value="personal">Personal Question/Story</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Just Saying Hi</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="What's on your mind?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell me what's going on! Don't worry about being formal – just be yourself."
                />
              </div>

              <Button type="submit" className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3 text-lg">
                Send Message
              </Button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent!</h3>
              <p className="text-charcoal/80 mb-6">
                Thanks for reaching out! I'll get back to you within 24-48 hours. In the meantime, why not check out my
                latest blog post?
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-sage text-sage hover:bg-sage hover:text-white"
              >
                Send Another Message
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Quick Answers</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-2">Do you respond to every message?</h3>
              <p className="text-charcoal/80">
                I read every single email and DM. Sometimes it takes me a day or two to respond properly, but I always
                get back to people. Life gets busy, but connecting with readers is one of my favorite parts of this
                whole blogging thing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-2">Are you open to collaborations?</h3>
              <p className="text-charcoal/80">
                Yes, but I'm pretty selective! I only work with brands and projects that genuinely align with Season
                26's values and would actually be useful to my readers. No dodgy weight loss teas or get-rich-quick
                schemes, thanks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-2">Can we meet for coffee in Melbourne?</h3>
              <p className="text-charcoal/80">
                I love meeting readers! Drop me an email first so we can chat about it. I'm always up for a good
                conversation over a flat white, especially if you're going through your own quarter-life crisis and need
                someone who gets it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
