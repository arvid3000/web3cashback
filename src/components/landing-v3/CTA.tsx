import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBg } from "@/components/GradientBg"

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <GradientBg />
      <div className="relative z-10 container py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to start earning?</h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto text-lg">
          Browse our vetted cashback offers and start getting paid back today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="px-8 h-12 text-base" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', letterSpacing: 0 }}>
            Start Earning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 text-base border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', letterSpacing: 0 }}>
            Learn More About Web3Cashback
          </Button>
        </div>
      </div>
    </section>
  )
}
