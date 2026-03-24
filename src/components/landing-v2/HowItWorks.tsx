import { Search, UserPlus, CreditCard, Users } from "lucide-react"
import { GradientBg } from "@/components/GradientBg"

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Your deal is waiting",
    desc: "Every offer is hand-picked and vetted by our team. Browse, pick your platform, and click through.",
  },
  {
    num: "02",
    icon: UserPlus,
    title: "Sign up. Cashback starts automatically.",
    desc: "Register through our link and your earnings begin straight away. No promo codes, no manual claims.",
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Withdraw real USDC, anytime",
    desc: "Your earnings build in the background. Hit 50 USDC and cash out whenever you want.",
  },
  {
    num: "04",
    icon: Users,
    title: "Then earn 40% of your friends' cashback too",
    desc: "Share your referral link. Every time a friend earns, you get a cut on top of your own.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative border-b overflow-hidden">
      <GradientBg />
      <div className="relative z-10 container py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Four simple steps to start earning</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-5xl font-black text-white/10 mb-3" style={{ fontFamily: "'Funnel Display', sans-serif" }}>{step.num}</div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <step.icon className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
