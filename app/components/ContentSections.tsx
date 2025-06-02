import { Calendar, BookOpen, Heart, Camera } from "lucide-react"

const sections = [
  {
    icon: Calendar,
    title: "The Monthly Dispatch",
    subtitle: "The Real Deal Monthly Updates",
    description:
      "No fluff, just honest recaps. Expect candid talk on career shifts (the exciting promotions and the soul-crushing Mondays), travel adventures (from dream getaways to budget hostel mishaps), personal goals (the ambitious ones I nail and the ones I quietly abandon by week two), and the general state of my mid-20s existence.",
    keywords: "monthly life updates, career journey 20s, travel experiences 20s, personal goals tracking",
    color: "bg-terracotta",
  },
  {
    icon: BookOpen,
    title: "Hard-Won Wisdom",
    subtitle: "Lessons from the Trenches (of My 20s)",
    description:
      "I've stumbled, learned (sometimes the hard way), and lived to tell the tale. This space shares those vital lessons: setting boundaries that actually stick, managing millennial burnout, handling finances without panic attacks, the evolving nature of friendship, and why self-compassion isn't just a buzzword.",
    keywords: "life lessons 20s, navigating your 20s, millennial burnout, setting boundaries",
    color: "bg-sage",
  },
  {
    icon: Heart,
    title: "Heart & Mind Unpacked",
    subtitle: "Personal Essays: Digging Deeper",
    description:
      "This is where we get real. Introspective essays exploring the nitty-gritty of mental health (anxiety, therapy, finding calm), the complexities of modern relationships (dating, breakups, deep friendships), the ongoing quest for self-growth, and confronting the elusive quarter-life crisis.",
    keywords: "mental health blog 20s, anxiety in mid-20s, therapy journey, modern relationships",
    color: "bg-dusty-rose",
  },
  {
    icon: Camera,
    title: "Life Through a Lens",
    subtitle: "Photo Diaries: Moments Captured",
    description:
      "Sometimes words aren't enough. My photo diaries offer glimpses into the year – the breathtaking views, the quiet coffee shop mornings, the spontaneous adventures, the perfectly imperfect everyday moments. Unfiltered snapshots of Season 26 unfolding.",
    keywords: "photo diary blog, life in pictures, documenting 20s, visual storytelling",
    color: "bg-warm-gray",
  },
]

export default function ContentSections() {
  return (
    <section className="py-20 px-4 bg-cream/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Here's What You'll Find Inside</h2>
          <div className="w-24 h-1 bg-terracotta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${section.color} p-6 text-white`}>
                <section.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <h4 className="text-lg opacity-90">{section.subtitle}</h4>
              </div>

              <div className="p-6">
                <p className="text-charcoal/80 leading-relaxed mb-4">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
