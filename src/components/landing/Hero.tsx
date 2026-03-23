import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="border-b">
      <div className="container py-8 md:py-11">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              <span style={{ color: '#4A52B8' }}>Earn crypto back</span>{" "}
              on every bet, trade &amp; transaction
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-lg">
              Web3Cashback connects you to the top crypto platforms and pays you back every time you play or trade. Real revenue share, paid in USDC.
            </p>
            <div className="mt-8">
              <Button size="lg" className="px-8 h-12 text-base">
                Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-5xl mb-2 opacity-30">📊</div>
                <p className="text-sm opacity-50">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
