import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

export function Hero() {
  return (
    <section className="relative border-b overflow-hidden">
      <GradientBg />
      <div className="relative z-10 container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]" style={headingWrap}>
              <span style={headingAccent}>Earn crypto</span>{" "}
              <span style={headingBase}>on every bet, trade &amp; transaction</span>
            </h1>
            <p className="text-white/70 mt-4 text-lg leading-relaxed max-w-lg">
              Web3Cashback connects you to the top crypto platforms and pays you back every time you play or trade. Real revenue share, paid in USDC.
            </p>
            <div className="mt-8">
              <Button size="lg" className="px-8 h-12 text-base">
                Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <img
              src="/coin.png"
              alt="Coin"
              className="w-full max-w-[640px] object-contain drop-shadow-2xl opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
