import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <div className="px-8 pt-6 pb-0 bg-background max-w-6xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 md:aspect-[85.6/48] flex flex-col">
        <GradientBg />

        {/* Coin — absolutely positioned, right side */}
        <img
          src="/coin.png"
          alt="Coin"
          className="hidden md:block absolute right-0 bottom-0 w-[55%] max-w-none object-contain drop-shadow-2xl animate-float translate-x-[15%] translate-y-[22%] z-0"
        />

        {/* Inner layout: nav top, text bottom */}
        <div className="relative z-10 flex flex-col flex-1 justify-between p-10">

          {/* Top nav */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-6" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <Button variant="outline" size="sm" className="text-white border-white/40 hover:bg-white/10 hover:text-white bg-transparent">
              Sign Up
            </Button>
          </div>

          {/* Text — anchored to bottom */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]" style={headingWrap}>
              <span style={headingAccent}>Earn crypto</span>{" "}
              <span style={headingBase}>on every bet, trade &amp; transaction</span>
            </h1>
            <p className="text-white/70 mt-4 text-lg leading-relaxed max-w-md">
              Web3Cashback connects you to the top crypto platforms and pays you back every time you play or trade. Real revenue share, paid in USDC.
            </p>
            <div className="mt-8">
              <Button size="lg" className="px-8 h-12 text-base">
                Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
