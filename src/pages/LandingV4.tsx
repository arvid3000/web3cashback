import { Header } from "@/components/landing-v4/Header"
import { Hero } from "@/components/landing-v4/Hero"
import { Offers } from "@/components/landing-v4/Offers"
import { HowItWorks } from "@/components/landing-v4/HowItWorks"
import { Tiers } from "@/components/landing-v4/Tiers"
import { FAQ } from "@/components/landing-v4/FAQ"
import { CTA } from "@/components/landing-v4/CTA"
export function LandingV4() {
  return (
    <div className="variant-v4 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Offers />
        <HowItWorks />
        <Tiers />
        <FAQ />
        <CTA />
      </main>
    </div>
  )
}
