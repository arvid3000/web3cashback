import { useRef } from "react"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"

const tiers = [
  {
    name: "Bronze",
    threshold: "500 USDC earned",
    cashback: "Up to 10%",
    referral: "20%",
    dark: false,
    bg: "linear-gradient(135deg, #fff5eb 0%, #f0d9b5 40%, #e8c49a 100%)",
    blob1: "rgba(205,133,63,0.35)",
    blob2: "rgba(255,200,120,0.25)",
    textColor: "#1a1008",
    mutedColor: "rgba(26,16,8,0.5)",
    accentColor: "#a0621a",
  },
  {
    name: "Silver",
    threshold: "500+ USDC earned",
    cashback: "Up to 15%",
    referral: "25%",
    dark: false,
    bg: "linear-gradient(135deg, #f0f2f5 0%, #dde1e7 50%, #c8cdd6 100%)",
    blob1: "rgba(160,168,185,0.5)",
    blob2: "rgba(190,196,210,0.4)",
    textColor: "#1a1f2e",
    mutedColor: "rgba(26,31,46,0.5)",
    accentColor: "#5a6478",
  },
  {
    name: "Gold",
    threshold: "2,500+ USDC earned",
    cashback: "Up to 20%",
    referral: "30%",
    dark: false,
    bg: "linear-gradient(135deg, #fffbeb 0%, #fde68a 40%, #f59e0b 100%)",
    blob1: "rgba(245,158,11,0.4)",
    blob2: "rgba(252,211,77,0.3)",
    textColor: "#1c1007",
    mutedColor: "rgba(28,16,7,0.5)",
    accentColor: "#92400e",
  },
  {
    name: "Supernova",
    threshold: "10,000+ USDC earned",
    cashback: "Up to 25%",
    referral: "40%",
    dark: true,
    bg: "linear-gradient(135deg, #0d0520 0%, #1d1854 50%, #2d0a40 100%)",
    blob1: "rgba(188,60,200,0.4)",
    blob2: "rgba(67,46,245,0.35)",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.5)",
    accentColor: "#d966e8",
  },
]

type Tier = typeof tiers[number]

function TierCard({ tier }: { tier: Tier }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transform = `perspective(1200px) rotateX(${y * 8}deg) rotateY(${-x * 8}deg)`
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`
    card.style.transition = `transform 0.5s ease`
  }

  const onMouseEnter = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = `transform 0.1s ease`
  }

  const isSupernova = tier.name === 'Supernova'

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[320px] cursor-pointer"
      style={{
        ...(isSupernova ? {
          background: 'linear-gradient(135deg, #0d0520, #1d1854, #3b0f5e, #bc3cc8, #432ef5, #1a0a30, #0d0520)',
          backgroundSize: '400% 400%',
          animation: 'supernova-bg 8s ease infinite',
        } : { background: tier.bg }),
        transition: 'transform 0.5s ease',
        willChange: 'transform',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {/* Gradient blobs */}
      <div
        className="absolute w-[70%] aspect-square rounded-full blur-3xl pointer-events-none"
        style={{
          background: tier.blob1,
          bottom: '-20%', right: '-20%',
          opacity: isSupernova ? 1 : 0.8,
          animation: isSupernova ? 'supernova-orb 10s ease-in-out infinite' : undefined,
        }}
      />
      <div
        className="absolute w-[50%] aspect-square rounded-full blur-2xl pointer-events-none"
        style={{
          background: tier.blob2,
          top: '20%', left: '-10%',
          opacity: isSupernova ? 0.8 : 0.6,
          animation: isSupernova ? 'supernova-orb 14s ease-in-out infinite reverse' : undefined,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: tier.mutedColor, ...headingBase }}>
          {tier.threshold}
        </p>
        <h3 className="text-2xl" style={{ ...headingAccent, fontWeight: 700, color: tier.textColor }}>
          {tier.name}
        </h3>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex flex-col gap-3 mt-auto pt-8">
        <div>
          <p className="text-xs mb-0.5" style={{ color: tier.mutedColor }}>Cashback up to</p>
          <p className="text-3xl" style={{ color: tier.accentColor }}>
            <span style={{ ...headingAccent, fontWeight: 700 }}>{tier.cashback.replace('Up to ', '')}</span>
          </p>
        </div>
        <div>
          <p className="text-xs mb-0.5" style={{ color: tier.mutedColor }}>Referral rate</p>
          <p className="text-xl" style={{ color: tier.textColor }}>
            <span style={{ ...headingAccent, fontWeight: 700 }}>{tier.referral}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export function Tiers() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-foreground mb-6" style={headingWrap}>
          <span style={headingBase}>More activity, </span>
          <span style={headingAccent}>more rewards</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mb-16">
          Your tier is based on your total cashback + referral rewards over the last 12 months.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}
