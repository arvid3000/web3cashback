import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const steps = [
  {
    num: "1",
    title: "Choose an Offer",
    desc: "Explore cashback deals from top crypto platforms, each one vetted by our team.",
  },
  {
    num: "2",
    title: "Sign Up & Play",
    desc: "Register through our link — tracking starts automatically. No codes needed.",
  },
  {
    num: "3",
    title: "Get Paid",
    desc: "Withdraw your USDC earnings anytime — minimum 50 USDC.",
  },
  {
    num: "4",
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
            <div key={step.num} className="relative flex items-start gap-4">
              <div className="text-9xl text-white/10 shrink-0" style={{ ...headingAccent, lineHeight: 1, marginTop: '-0.15em' }}>{step.num}</div>
              <div>
                <h3 className="text-base text-white mb-1" style={headingBase}>{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
