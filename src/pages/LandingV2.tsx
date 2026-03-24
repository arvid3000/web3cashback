import { Header } from "@/components/landing-v2/Header"
import { Hero } from "@/components/landing-v2/Hero"
import { Offers } from "@/components/landing-v2/Offers"
import { HowItWorks } from "@/components/landing-v2/HowItWorks"
import { WhySection } from "@/components/landing-v2/WhySection"
import { FAQ } from "@/components/landing-v2/FAQ"
import { CTA } from "@/components/landing-v2/CTA"
import { Footer } from "@/components/landing-v2/Footer"

export function LandingV2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
