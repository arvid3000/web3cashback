import { DollarSign, Users, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const features = [
  {
    icon: DollarSign,
    bgImage: "/smiley.jpeg",
    titleBase: "Transparency ",
    titleAccent: "First",
    desc: "We share exactly how we make money. Our revenue comes from partner commissions — and we pass the majority back to you.",
  },
  {
    icon: Users,
    bgImage: "/community.jpeg",
    titleBase: "Community-",
    titleAccent: "Driven",
    desc: "Our loyalty and referral programs are designed so that everyone benefits. The more the community grows, the better the rewards.",
  },
  {
    icon: Shield,
    bgImage: "/shield.jpeg",
    titleBase: "Trust & ",
    titleAccent: "Security",
    desc: "Every partner on our platform is vetted. We only list licensed, reputable operators so you can use our cashback links with confidence.",
  },
  {
    icon: Zap,
    bgImage: "/lightning-bold-full.jpeg",
    titleBase: "Aligned ",
    titleAccent: "Incentives",
    desc: "We don't win unless you do. Our business model is built on sharing revenue — not selling your data or charging hidden fees.",
  },
]

const tiers = [
  {
    name: "Bronze",
    threshold: "≤ 500 USDC earned",
    cashback: "Up to 10%",
    referral: "20%",
    dot: "bg-[hsl(33,60%,80%)]",
    accent: "hsl(33,60%,50%)",
  },
  {
    name: "Silver",
    threshold: "> 500 USDC earned",
    cashback: "Up to 15%",
    referral: "25%",
    dot: "bg-[hsl(218,11%,75%)]",
    accent: "hsl(218,11%,45%)",
  },
  {
    name: "Gold",
    threshold: "> 2,500 USDC earned",
    cashback: "Up to 20%",
    referral: "30%",
    dot: "bg-[hsl(38,92%,70%)]",
    accent: "hsl(38,92%,40%)",
  },
  {
    name: "Supernova",
    threshold: "> 10,000 USDC earned",
    cashback: "Up to 25%",
    referral: "40%",
    dot: "bg-[hsl(235,60%,75%)]",
    accent: "#bc3cc8",
  },
]

function FeatureCard({ f }: { f: typeof features[0] }) {
  return (
    <div
      className="group p-5 rounded-xl border relative overflow-hidden aspect-square flex flex-col justify-end"
      style={f.bgImage ? { backgroundImage: `url(${f.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {!f.bgImage && (
        <div className="mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#4A52B8]/10 flex items-center justify-center">
            <f.icon className="h-5 w-5 text-[#bc3cc8]" />
          </div>
        </div>
      )}
      {f.bgImage && (
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1d1854ee 40%, transparent 100%)' }} />
      )}
      <div className="relative z-10">
        <h3 className={`text-base mb-1 ${f.bgImage ? 'text-white' : 'text-foreground'}`} style={headingWrap}>
          <span style={headingBase}>{f.titleBase}</span>
          <span style={headingAccent}>{f.titleAccent}</span>
        </h3>
        <p className={`text-xs leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500 ease-out ${f.bgImage ? 'text-white/70' : 'text-muted-foreground'}`}>{f.desc}</p>
      </div>
    </div>
  )
}

export function WhySection() {
  return (
    <section className="border-b">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#bc3cc8] uppercase tracking-widest mb-3">Why Web3Cashback</p>
          <h2 className="text-3xl md:text-4xl text-foreground" style={headingWrap}>
            <span style={headingBase}>We're in this </span>
            <span style={headingAccent}>together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The more active you are → the more we earn → and the more you earn.
          </p>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((f) => <FeatureCard key={f.titleBase} f={f} />)}
        </div>

        {/* Tier heading */}
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl text-foreground mb-3" style={headingWrap}>
            <span style={headingBase}>More activity, </span>
            <span style={headingAccent}>more rewards</span>
          </h3>
          <p className="text-muted-foreground max-w-lg">
            Your tier is based on your total cashback + referral rewards over the last 12 months.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-xl border bg-card p-6 flex flex-col gap-4">
              {/* Dot + name */}
              <div className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full shrink-0", tier.dot)} />
                <span className="text-sm font-semibold text-foreground">{tier.name}</span>
              </div>

              {/* Threshold */}
              <p className="text-xs text-muted-foreground">{tier.threshold}</p>

              {/* Cashback */}
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Cashback</p>
                <p className="text-2xl font-semibold text-foreground" style={{ color: tier.accent }}>
                  {tier.cashback}
                </p>
              </div>

              {/* Referral */}
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Referral rate</p>
                <p className="text-lg font-semibold text-foreground">{tier.referral}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
