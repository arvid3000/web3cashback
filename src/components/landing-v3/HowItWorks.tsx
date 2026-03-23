import { Search, UserPlus, CreditCard, Users } from "lucide-react"
import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Choose an Offer",
    desc: "Explore cashback deals from top crypto platforms, each one vetted by our team.",
  },
  {
    num: "02",
    icon: UserPlus,
    title: "Sign Up & Play",
    desc: "Register through our link — tracking starts automatically. No codes needed.",
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Get Paid",
    desc: "Withdraw your USDC earnings anytime — minimum 50 USDC.",
  },
  {
    num: "04",
    icon: Users,
    title: "Refer Friends To Earn More",
    desc: "Share your referral link and earn up to 40% of your friends' cashback.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative border-b overflow-hidden">
      <GradientBg />
      <div className="relative z-10 container py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl text-white" style={headingWrap}>
            <span style={headingBase}>Four simple steps to </span>
            <span style={headingAccent}>start earning</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-5xl font-black text-white/10 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{step.num}</div>
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
