import { Metadata } from "next"
import { MapPin, Coffee, Camera, Plane, Heart, BookOpen } from "lucide-react"
import { generateMetadata } from "../metadata"

export const metadata: Metadata = {
  ...generateMetadata(
    "About Me - Season 26: Life in Progress",
    "Meet Zara - a 26-year-old Aussie navigating the beautiful chaos of mid-20s life in Melbourne. From marketing mishaps to travel adventures, this is my story.",
    "/about",
    "/og-image.jpg"
  ),
  keywords: "about Zara, Australian blogger, mid-20s life, Melbourne lifestyle, personal growth journey"
}

const interests = [
  { icon: Coffee, text: "Flat whites (obviously)" },
  { icon: Camera, text: "Street photography" },
  { icon: Plane, text: "Weekend getaways" },
  { icon: BookOpen, text: "Self-help books (don't judge)" },
  { icon: Heart, text: "Vintage markets" },
]

const timeline = [
  {
    year: "2019",
    title: "Uni Graduate",
    description: "Finished my Bachelor of Communications at RMIT, thinking I had life sorted. Spoiler: I didn't.",
  },
  {
    year: "2020-2022",
    title: "The Corporate Years",
    description:
      "Worked at a big marketing agency in the CBD. Learned heaps, burned out spectacularly, questioned everything.",
  },
  {
    year: "2023",
    title: "The Pivot",
    description:
      "Left the agency life, went freelance, traveled solo through Southeast Asia for 3 months. Game changer.",
  },
  {
    year: "2024",
    title: "Season 26 Begins",
    description: "Started this blog to document the beautiful mess of figuring out who I am and what I actually want.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-terracotta/10 to-sage/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
                G'day, I'm <span className="text-terracotta">Zara</span>
              </h1>
              <div className="flex items-center gap-2 text-sage">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Melbourne, Australia</span>
              </div>
              <p className="text-xl text-charcoal/80 leading-relaxed">
                A 26-year-old Aussie navigating the beautiful chaos of mid-20s life, one flat white and questionable
                life decision at a time.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Zara sitting in a Melbourne cafe with a laptop and coffee"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-terracotta text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Currently:</p>
                <p className="text-sm opacity-90">Freelance marketing + blogging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">The Real Story</h2>
          <div className="prose prose-lg max-w-none text-charcoal/80">
            <p className="text-xl leading-relaxed mb-6">
              Right, so here's the thing – I'm absolutely winging it, and I reckon most of us are. But somewhere between
              my third career crisis and my hundredth "what am I doing with my life?" moment, I figured I might as well
              document the chaos.
            </p>

            <p className="leading-relaxed mb-6">
              I'm originally from a small town outside Brisbane, but Melbourne stole my heart during uni and I've been
              here ever since. There's something about this city – the laneways, the coffee culture, the way you can
              reinvent yourself every few months and nobody bats an eye. Perfect for someone who changes their mind
              about life plans more often than the weather changes here (which is saying something).
            </p>

            <p className="leading-relaxed mb-6">
              After uni, I thought I'd follow the "sensible" path – corporate job, climb the ladder, tick all the boxes.
              And don't get me wrong, I learned heaps working in marketing agencies. But by 25, I was burnt out,
              anxious, and felt like I was living someone else's life. Classic quarter-life crisis stuff, really.
            </p>

            <p className="leading-relaxed mb-6">
              So I did what any rational person would do – I quit my job, booked a one-way ticket to Thailand, and spent
              three months backpacking through Southeast Asia with nothing but a dodgy backpack and way too much
              confidence. Best decision I ever made, honestly. It didn't magically solve all my problems (shocking, I
              know), but it gave me perspective and reminded me that life's too short to spend it doing things that make
              you miserable.
            </p>

            <p className="leading-relaxed">
              Now I'm back in Melbourne, freelancing in marketing and communications, and trying to build a life that
              actually feels like mine. Some days I feel like I've got it sorted, other days I'm googling "how to be an
              adult" at 2am. Season 26 is my way of embracing both sides of that coin and hopefully connecting with
              other people who are figuring it out as they go.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Things That Make Me Happy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <interest.icon className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <p className="text-charcoal font-medium">{interest.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">The Journey So Far</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-terracotta">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-sage rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sage/20 to-terracotta/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-8">What I Believe In</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-charcoal">Authenticity Over Perfection</h3>
              <p className="text-charcoal/80">
                Life's messy, and that's okay. I'd rather share the real story than pretend I've got it all figured out.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-charcoal">Growth Through Discomfort</h3>
              <p className="text-charcoal/80">
                The best things happen when you step outside your comfort zone, even if it's terrifying at first.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-charcoal">Community Over Competition</h3>
              <p className="text-charcoal/80">
                We're all just trying to figure it out. Supporting each other makes the journey so much better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Random Facts About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-charcoal">The Quirky Stuff</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• I've never broken a bone (touch wood)</li>
                <li>• I collect vintage postcards from op shops</li>
                <li>• I can make a mean banana bread (family recipe)</li>
                <li>• I'm weirdly good at pub trivia</li>
                <li>• I have an irrational fear of butterflies</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-charcoal">Current Obsessions</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Learning Spanish on Duolingo (day 127!)</li>
                <li>• Finding the perfect vintage leather jacket</li>
                <li>• Trying every brunch spot in Melbourne</li>
                <li>• True crime podcasts (basic, I know)</li>
                <li>• Planning my next solo adventure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
