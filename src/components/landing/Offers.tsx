import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Category = "casino" | "exchange" | "defi" | "wallet"

interface Offer {
  initials: string
  name: string
  category: Category
  cashback: string
  desc: string
  features: string[]
  note: string
  popular?: boolean
}

const offers: Offer[] = [
  {
    initials: "LH",
    name: "LuckyHash Casino",
    category: "casino",
    cashback: "Up to 18% cashback",
    desc: "Provably fair games with instant crypto withdrawals. Top-rated crypto casino.",
    features: ["Provably fair games", "Instant crypto withdrawals"],
    note: "Min. $50 deposit required",
    popular: true,
  },
  {
    initials: "CS",
    name: "CryptoStake Casino",
    category: "casino",
    cashback: "Up to 15% cashback",
    desc: "One of the most trusted crypto casinos with provably fair games.",
    features: ["Mobile-first design", "Provably fair games"],
    note: "Min. $25 deposit required",
  },
  {
    initials: "BC",
    name: "BetChain Casino",
    category: "casino",
    cashback: "Up to 12% cashback",
    desc: "Get up to 12% cashback on your play at BetChain Casino. Wide game selection.",
    features: ["Wide game selection", "New accounts only"],
    note: "Credited by the 10th monthly",
  },
  {
    initials: "TF",
    name: "TradeFlow Exchange",
    category: "exchange",
    cashback: "Up to 8% cashback",
    desc: "Get up to 8% cashback on all trading fees. Covers spot, margin, and futures trading.",
    features: ["API trading support", "Institutional-grade security"],
    note: "KYC required · Min $500/mo volume",
  },
  {
    initials: "SH",
    name: "SafeHold Wallet",
    category: "wallet",
    cashback: "Up to 5% cashback",
    desc: "Get up to 5% cashback on Pro subscription and swap fees.",
    features: ["Multi-chain support", "Open-source codebase"],
    note: "No minimum balance required",
  },
  {
    initials: "DV",
    name: "DeFi Yield Vault",
    category: "defi",
    cashback: "Up to 12% cashback",
    desc: "Get up to 12% cashback on yield farming fees. Deposit into any supported vault.",
    features: ["Non-custodial · Audited by Certik", "Auto-compounding vaults"],
    note: "Min. $100 deposit · ETH, ARB, Base",
  },
]

const categoryStyles: Record<Category, { topBorder: string; badge: string; avatar: string; label: string }> = {
  casino: {
    topBorder: "border-t-[hsl(252,95%,85%)]",
    badge: "bg-[hsl(250,100%,95%)] text-[hsl(263,83%,58%)] border border-[hsl(252,95%,85%)]",
    avatar: "bg-[hsl(263,83%,58%)]",
    label: "Casino",
  },
  exchange: {
    topBorder: "border-t-[hsl(213,94%,78%)]",
    badge: "bg-[hsl(214,95%,93%)] text-[hsl(217,91%,40%)] border border-[hsl(213,94%,78%)]",
    avatar: "bg-[hsl(217,91%,50%)]",
    label: "Exchange",
  },
  defi: {
    topBorder: "border-t-[hsl(142,71%,73%)]",
    badge: "bg-[hsl(139,76%,93%)] text-[hsl(142,72%,30%)] border border-[hsl(142,71%,73%)]",
    avatar: "bg-[hsl(142,72%,36%)]",
    label: "DeFi",
  },
  wallet: {
    topBorder: "border-t-[hsl(186,94%,69%)]",
    badge: "bg-[hsl(183,100%,90%)] text-[hsl(192,91%,30%)] border border-[hsl(186,94%,69%)]",
    avatar: "bg-[hsl(192,91%,36%)]",
    label: "Wallet",
  },
}

const stats = [
  { value: "6+", label: "Vetted Partners" },
  { value: "18%", label: "Max Cashback Rate" },
  { value: "4", label: "Loyalty Tiers" },
  { value: "$0", label: "Cost to You" },
  { value: "12", label: "New partnerships launching" },
]

export function Offers() {
  return (
    <section className="border-b">
      <div className="container py-14 md:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Available Offers</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Start earning cashback today</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer) => {
            const styles = categoryStyles[offer.category]
            return (
              <div
                key={offer.name}
                className={cn(
                  "relative rounded-xl bg-card flex flex-col overflow-hidden hover:shadow-lg transition-all duration-200 border border-t-[3px]",
                  styles.topBorder
                )}
              >
                {offer.popular && (
                  <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    ⭐ Popular
                  </div>
                )}
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white", styles.avatar)}>
                      {offer.initials}
                    </div>
                    <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", styles.badge)}>
                      {styles.label}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-0.5 text-foreground">{offer.name}</h3>
                  <p className="text-xl font-extrabold text-primary mb-3">{offer.cashback}</p>
                  <p className="text-sm text-muted-foreground mb-4">{offer.desc}</p>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    {offer.features.map((f) => <li key={f}>✓ {f}</li>)}
                    <li>⚠ {offer.note}</li>
                  </ul>
                </div>
                <div className="p-5 pt-0">
                  <Button className="w-full h-9 text-sm">Claim Cashback</Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-xl bg-muted/50 p-5 flex flex-wrap gap-8 justify-center">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
