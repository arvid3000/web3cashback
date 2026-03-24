import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

export function CTA() {
  return (
    <div className="px-8 pb-0 max-w-6xl mx-auto">
      {/* Card with top rounding only — bottom bleeds off page */}
      <div className="relative rounded-t-2xl overflow-hidden border border-white/10 border-b-0">
        <GradientBg />

        {/* CTA content */}
        <div className="relative z-10 py-20 md:py-28 text-center px-8">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={headingWrap}>
            <span style={headingBase}>Ready to start </span>
            <span style={headingAccent}>earning?</span>
          </h2>
          <p className="text-white/60 mb-10 max-w-lg mx-auto text-lg">
            Browse our vetted cashback offers and start getting paid back today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-8 h-12 rounded-xl text-white font-medium text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(180deg, #432ef5 0%, #3221cc 100%)',
                boxShadow: '0 0 28px rgba(67,46,245,0.55), 0 0 8px rgba(67,46,245,0.35), inset 0 1px 0 rgba(255,255,255,0.18)',
                border: '1px solid rgba(104,88,255,0.45)',
              }}
            >
              Start Earning <ArrowRight className="h-4 w-4" />
            </button>
            <Button variant="outline" size="lg" className="h-12 text-base border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
              Learn More About Web3Cashback
            </Button>
          </div>
        </div>

        {/* Footer inside the card */}
        <div className="relative z-10 border-t border-white/10 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/50">
            © 2026 <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-3.5 inline-block align-middle" style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
          </p>
          <nav className="flex items-center gap-5">
            <a href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy</a>
            <a href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</a>
          </nav>
        </div>
      </div>
    </div>
  )
}
