import { Coffee, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-terracotta/20 to-sage/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Coffee className="w-6 h-6 text-terracotta" />
          <span className="text-sage font-medium">Grab a coffee (or tea, no judgment)</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
          Season 26: Life in <span className="text-terracotta italic">Progress</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Where Figuring It Out is the Whole Point
        </h2>

        <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
          This isn't a highlight reel. It's my real, raw, beautifully uncertain 26th year – documented monthly. Think
          career wobbles, relationship rollercoasters, mental health check-ins, questionable life choices, and the
          occasional tiny triumph. Join me?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 text-lg">
            Read Latest Post
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 text-lg"
          >
            Subscribe for Updates
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-sage" />
      </div>
    </section>
  )
}
