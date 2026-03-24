import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const steps = [
  {
    num: "1",
    title: "Your deal is waiting",
    desc: "Every offer is hand-picked and vetted by our team. Browse, pick your platform, and click through.",
  },
  {
    num: "2",
    title: "Sign up. Cashback starts automatically.",
    desc: "Register through our link and your earnings begin straight away. No promo codes, no manual claims.",
  },
  {
    num: "3",
    title: "Withdraw real USDC, anytime",
    desc: "Your earnings build in the background. Hit 50 USDC and cash out whenever you want.",
  },
  {
    num: "4",
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
