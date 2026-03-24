import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { Offers } from "@/components/landing/Offers"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { WhySection } from "@/components/landing/WhySection"
import { FAQ } from "@/components/landing/FAQ"
import { CTA } from "@/components/landing/CTA"
import { Footer } from "@/components/landing/Footer"

export function LandingV1() {
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
