import { Button } from "@/components/ui/button"

interface Offer {
  logo: string
  name: string
  cashback: string
  desc: string
  features: string[]
  note: string
}

const offers: Offer[] = [
  {
    logo: "/betpanda.svg",
    name: "Betpanda",
    cashback: "Up to 18% cashback",
    desc: "Provably fair games with instant crypto withdrawals. Top-rated crypto casino.",
    features: ["Provably fair games", "Instant crypto withdrawals"],
    note: "Min. $50 deposit required",
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

const interRegular: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontWeight: 400 }
const playfairItalic: React.CSSProperties = { fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }

export function Offers() {
  return (
    <section className="border-b">
      <div className="container py-14 md:py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest mb-2 text-foreground" style={interRegular}>Available Offers</p>
          <h2 className="text-2xl md:text-3xl text-foreground" style={interRegular}>Start earning cashback today</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className="rounded-xl bg-card flex flex-col overflow-hidden hover:shadow-lg transition-all duration-200 border border-border"
            >
              <div className="p-5 flex-1">
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center overflow-hidden">
                    <img src={offer.logo} alt={offer.name} className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <h3 className="text-base mb-0.5 text-foreground" style={interRegular}>{offer.name}</h3>
                <p className="text-xl text-foreground mb-3">
                  <span style={interRegular}>{offer.cashback.replace(' cashback', '')} </span>
                  <span style={playfairItalic}>cashback</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4" style={interRegular}>{offer.desc}</p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4" style={interRegular}>
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

        <div className="mt-6 rounded-xl border border-dashed border-border bg-card px-5 py-4 flex items-center gap-5">
          <div className="flex -space-x-2 shrink-0">
            {[0,1,2,3].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-muted border-2 border-background flex items-center justify-center text-muted-foreground text-sm">
                +
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground" style={interRegular}>100+ brands coming soon</p>
            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1" style={interRegular}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              New crypto partnerships launching within the next 12 months
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
