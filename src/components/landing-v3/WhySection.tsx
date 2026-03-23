import { DollarSign, Users, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const features = [
  {
    icon: DollarSign,
    bgImage: "/smiley.jpeg",
    title: "Transparency First",
    desc: "We share exactly how we make money. Our revenue comes from partner commissions — and we pass the majority back to you.",
  },
  {
    icon: Users,
    bgImage: "/community.jpeg",
    title: "Community-Driven",
    desc: "Our loyalty and referral programs are designed so that everyone benefits. The more the community grows, the better the rewards.",
  },
  {
    icon: Shield,
    bgImage: "/shield.jpeg",
    title: "Trust & Security",
    desc: "Every partner on our platform is vetted. We only list licensed, reputable operators so you can use our cashback links with confidence.",
  },
  {
    icon: Zap,
    bgImage: "/lightning-bold-full.jpeg",
    title: "Aligned Incentives",
    desc: "We don't win unless you do. Our business model is built on sharing revenue — not selling your data or charging hidden fees.",
  },
]

const cashbackTiers = [
  { name: "Bronze", threshold: "≤ 500 USDC", reward: "Up to 10%", bg: "bg-[hsl(33,60%,93%)]", color: "text-[hsl(33,60%,50%)]" },
  { name: "Silver", threshold: "> 500 USDC", reward: "Up to 15%", bg: "bg-[hsl(218,11%,93%)]", color: "text-[hsl(218,11%,55%)]" },
  { name: "Gold", threshold: "> 2,500 USDC", reward: "Up to 20%", bg: "bg-[hsl(38,92%,93%)]", color: "text-[hsl(38,92%,45%)]" },
  { name: "Supernova", threshold: "> 10,000 USDC", reward: "Up to 25%", bg: "bg-[hsl(235,60%,93%)]", color: "text-[#4A52B8]" },
]

const referralTiers = [
  { name: "Bronze", rate: "20%", bg: "bg-[hsl(33,60%,93%)]" },
  { name: "Silver", rate: "25%", bg: "bg-[hsl(218,11%,93%)]" },
  { name: "Gold", rate: "30%", bg: "bg-[hsl(38,92%,93%)]" },
  { name: "Supernova", rate: "40%", bg: "bg-[hsl(235,60%,93%)]" },
]

export function WhySection() {
  return (
    <section className="border-b bg-card">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#4A52B8] uppercase tracking-widest mb-3">Why Web3Cashback</p>
          <h2 className="text-3xl md:text-4xl text-foreground" style={headingWrap}>
            <span style={headingBase}>We're in this </span>
            <span style={headingAccent}>together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The more active you are → the more we earn → and the more you earn.
          </p>
        </div>

        {/* Value props */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-5 rounded-xl border relative overflow-hidden aspect-square flex flex-col justify-end"
              style={f.bgImage ? { backgroundImage: `url(${f.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {!f.bgImage && (
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4A52B8]/10 flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-[#4A52B8]" />
                  </div>
                </div>
              )}
              {f.bgImage && (
                <div className="absolute inset-0" style={{ background: '#1d1854bb' }} />
              )}
              <div className="relative z-10">
                <h3 className={`font-bold text-sm mb-1 ${f.bgImage ? 'text-white' : 'text-foreground'}`}>{f.title}</h3>
                <p className={`text-sm leading-relaxed ${f.bgImage ? 'text-white/70' : 'text-muted-foreground'}`}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty table */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">More Activity → More Rewards</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-2">
            Your status unlocks better cashback rates and referral rewards. We use the following formula:
          </p>
          <p className="text-sm font-medium text-foreground mb-8">
            [Your cashback + your referral rewards] over the last rolling 12-month period.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-xl border overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <div className="min-w-[420px]">
              <div className="grid grid-cols-3 bg-muted text-sm font-semibold text-muted-foreground">
                <div className="px-4 py-3 border-r">Status</div>
                <div className="px-4 py-3 border-r">Last 12m Rewards</div>
                <div className="px-4 py-3">Cashback Rewards</div>
              </div>
              {cashbackTiers.map((tier, i) => (
                <div key={tier.name} className={cn("grid grid-cols-3 text-sm", i < cashbackTiers.length - 1 && "border-b")}>
                  <div className="px-4 py-3.5 border-r flex items-center gap-2 font-semibold text-foreground">
                    <div className={cn("w-6 h-6 rounded-full", tier.bg)} />
                    {tier.name}
                  </div>
                  <div className="px-4 py-3.5 border-r text-muted-foreground">{tier.threshold}</div>
                  <div className="px-4 py-3.5 font-medium text-foreground">{tier.reward}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Referral table */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold text-foreground mb-3">Refer your friends to earn more</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Earn up to 40% referral rewards based on your friends' cashback. The higher your status, the bigger your rewards.
          </p>
        </div>

        <div className="max-w-md mx-auto rounded-xl border overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[320px]">
              <div className="grid grid-cols-2 bg-muted text-sm font-semibold text-muted-foreground">
                <div className="px-4 py-3 border-r">Status</div>
                <div className="px-4 py-3">Referral Rewards</div>
              </div>
              {referralTiers.map((tier, i) => (
                <div key={tier.name} className={cn("grid grid-cols-2 text-sm", i < referralTiers.length - 1 && "border-b")}>
                  <div className="px-4 py-3.5 border-r flex items-center gap-2 font-semibold text-foreground">
                    <div className={cn("w-5 h-5 rounded-full", tier.bg)} />
                    {tier.name}
                  </div>
                  <div className="px-4 py-3.5 font-medium text-foreground">{tier.rate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
