import { Button } from "@/components/ui/button"

interface Offer {
  logo: string
  name: string
  cashback: string
  desc: string
  features: string[]
  note: string
  popular?: boolean
}

const offers: Offer[] = [
  {
    logo: "/betpanda.svg",
    name: "Betpanda",
    cashback: "Up to 18% cashback",
    desc: "Provably fair games with instant crypto withdrawals. Top-rated crypto casino.",
    features: ["Provably fair games", "Instant crypto withdrawals"],
    note: "Min. $50 deposit required",
    popular: true,
  },
  {
    logo: "/betsio.svg",
    name: "Bets.io",
    cashback: "Up to 15% cashback",
    desc: "One of the most trusted crypto casinos with provably fair games.",
    features: ["Mobile-first design", "Provably fair games"],
    note: "Min. $25 deposit required",
  },
  {
    logo: "/telbet.svg",
    name: "Telbet Casino",
    cashback: "Up to 12% cashback",
    desc: "Wide game selection with fast payouts and generous cashback on every bet.",
    features: ["Wide game selection", "New accounts only"],
    note: "Credited by the 10th monthly",
  },
  {
    logo: "/vave.svg",
    name: "Vave",
    cashback: "Up to 10% cashback",
    desc: "Sports betting and casino in one. Earn cashback on every wager you place.",
    features: ["Sports & casino", "Live betting"],
    note: "KYC required",
  },
  {
    logo: "/cryptogames.svg",
    name: "Crypto Games",
    cashback: "Up to 8% cashback",
    desc: "Classic provably fair crypto games. Simple, transparent and rewarding.",
    features: ["Provably fair", "No KYC required"],
    note: "No minimum deposit",
  },
  {
    logo: "/chancer.svg",
    name: "Chancer.bet",
    cashback: "Up to 12% cashback",
    desc: "Peer-to-peer betting platform with cashback on every prediction market.",
    features: ["P2P betting markets", "On-chain transparency"],
    note: "Min. $10 deposit · ETH, BNB",
  },
]

const badge = "bg-black text-white border border-black"

export function Offers() {
  return (
    <section className="border-b">
      <div className="container py-14 md:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-2">Available Offers</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Start earning cashback today</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className="relative rounded-xl bg-card flex flex-col overflow-hidden hover:shadow-lg transition-all duration-200 border border-border"
            >
              {offer.popular && (
                <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black px-2.5 py-1 text-[11px] font-medium text-white">
                  ⭐ Popular
                </div>
              )}
              <div className="p-5 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center overflow-hidden">
                    <img src={offer.logo} alt={offer.name} className="w-8 h-8 object-contain" />
                  </div>
                  <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", badge)}>
                    Casino
                  </span>
                </div>
                <h3 className="font-bold text-base mb-0.5 text-foreground">{offer.name}</h3>
                <p className="text-xl text-foreground mb-3">
                  {offer.cashback.replace(' cashback', '')}{' '}
                  <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>cashback</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">{offer.desc}</p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                  {offer.features.map((f) => <li key={f}>✓ {f}</li>)}
                  <li>⚠ {offer.note}</li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <Button className="w-full h-9 text-sm">Claim Cashback</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-muted/50 p-5 flex flex-wrap gap-8 justify-center">
          {[
            { value: "6+", label: "Vetted Partners" },
            { value: "18%", label: "Max Cashback Rate" },
            { value: "4", label: "Loyalty Tiers" },
            { value: "$0", label: "Cost to You" },
            { value: "12", label: "New partnerships launching" },
          ].map((s) => (
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
