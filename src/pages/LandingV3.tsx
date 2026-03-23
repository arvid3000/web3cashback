import { Header } from "@/components/landing-v3/Header"
import { Hero } from "@/components/landing-v3/Hero"
import { Offers } from "@/components/landing-v3/Offers"
import { HowItWorks } from "@/components/landing-v3/HowItWorks"
import { WhySection } from "@/components/landing-v3/WhySection"
import { FAQ } from "@/components/landing-v3/FAQ"
import { CTA } from "@/components/landing-v3/CTA"
import { Footer } from "@/components/landing-v3/Footer"

export function LandingV3() {
  return (
    <div className="variant-v3 min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Offers />
        <HowItWorks />
        <WhySection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
