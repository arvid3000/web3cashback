import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const steps = [
  {
    num: "1",
    sublabel: "Pick your platform",
    titleBase: "Your deal is ",
    titleAccent: "waiting",
    desc: "Every offer is hand-picked and vetted by our team. Browse, pick your platform, and click through.",
  },
  {
    num: "2",
    sublabel: "Takes 2 minutes",
    titleBase: "Cashback starts ",
    titleAccent: "automatically",
    desc: "Register through our link and your earnings begin straight away. No promo codes, no manual claims.",
  },
  {
    num: "3",
    sublabel: "From day one",
    titleBase: "Withdraw real USDC, ",
    titleAccent: "anytime",
    desc: "Your earnings build in the background. Hit 50 USDC and cash out whenever you want.",
  },
  {
    num: "4",
    sublabel: "On top of your own",
    titleBase: "Earn 40% of your friends' ",
    titleAccent: "cashback too",
    desc: "Share your referral link. Every time a friend earns, you get a cut on top of your own.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-10 md:py-16">
      <div className="container flex flex-col gap-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-foreground" style={headingWrap}>
          <span style={headingBase}>Four simple steps to </span>
          <span style={headingAccent}>start earning</span>
        </h2>

        {/* Sub-labels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 -mb-8">
          {steps.map((step) => (
            <p key={step.num} className="text-xs uppercase tracking-widest text-muted-foreground">
              {step.sublabel}
            </p>
          ))}
        </div>

        {/* Step connector: circles with lines between them */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div
                className="w-9 h-9 rounded-full border bg-background flex items-center justify-center shrink-0 relative z-10"
                style={{
                  animation: 'step-glow 4.8s ease-in-out infinite',
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                <span className="text-sm" style={{ ...headingAccent, fontWeight: 400 }}>
                  {step.num}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-border" style={{ marginRight: 'calc(-2rem - 1px)' }} />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num}>
              <h3 className="text-xl text-foreground mb-3" style={headingWrap}>
                <span style={headingBase}>{step.titleBase}</span>
                <span style={headingAccent}>{step.titleAccent}</span>
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
