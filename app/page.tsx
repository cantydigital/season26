import type { Metadata } from "next"
import Hero from "./components/Hero"
import About from "./components/About"
import ContentSections from "./components/ContentSections"
import Newsletter from "./components/Newsletter"

export const metadata: Metadata = {
  title: "Season 26: Life in Progress - Your Unfiltered Journey Through the Messy, Magical Mid-20s",
  description:
    "Join me for Season 26 - documenting my real, raw, beautifully uncertain 26th year. Monthly updates on career wobbles, relationship rollercoasters, mental health check-ins, and tiny triumphs.",
  keywords:
    "Season 26 blog, mid-20s life blog, personal growth journey, quarter-life crisis blog, navigating your 20s, millennial life, mental health blog 20s",
  openGraph: {
    title: "Season 26: Life in Progress",
    description: "Your unfiltered journey through the messy, magical mid-20s",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <About />
      <div id="monthly-dispatch">
        <ContentSections />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
    </main>
  )
}
