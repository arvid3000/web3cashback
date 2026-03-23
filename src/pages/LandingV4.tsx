import { Header } from "@/components/landing-v4/Header"
import { Hero } from "@/components/landing-v4/Hero"
import { Offers } from "@/components/landing-v4/Offers"
import { HowItWorks } from "@/components/landing-v4/HowItWorks"
import { WhySection } from "@/components/landing-v4/WhySection"
import { FAQ } from "@/components/landing-v4/FAQ"
import { CTA } from "@/components/landing-v4/CTA"
import { Footer } from "@/components/landing-v4/Footer"

export function LandingV4() {
  return (
    <div className="variant-v4 min-h-screen flex flex-col bg-background">
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
