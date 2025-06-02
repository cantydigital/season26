export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Feeling perpetually "in beta"? Yeah, me too.
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Your mid-20s. That weird, wonderful limbo where you're supposedly a "real adult" but still Google "how to
              unclog a drain" at 2 AM. You're building a career (or maybe just surviving one), navigating complex
              friendships and relationships, wrestling with identity, and constantly asking: "Am I doing this right?"
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              <strong className="text-terracotta">Season 26 is my answer to that chaos.</strong> Forget picture-perfect.
              This blog is my commitment to capturing Year 26 – one messy, insightful, photo-filled month at a time.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              It's about embracing the <strong>"Life in Progress"</strong> state, celebrating the small wins, learning
              from the spectacular face-plants, and finding the humour in the sheer absurdity of figuring it all out.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Person journaling with coffee"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-sage text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Month 3 of 12</p>
              <p className="text-sm opacity-90">Currently documenting...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
