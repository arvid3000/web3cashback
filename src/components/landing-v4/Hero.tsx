import { useEffect, useRef } from "react"
import { ArrowRight, UserCircle } from "lucide-react"
import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"
import { Link } from "react-router-dom"

const featuredLogos = [
  { src: "/brands/ccn-logo.svg", alt: "CCN" },
  { src: "/brands/cm.svg",       alt: "CoinMarketCap" },
  { src: "/brands/webo.svg",     alt: "Webo" },
]

export function Hero() {
  const bgRef      = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const coinRef    = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef    = useRef<HTMLDivElement>(null)

  // 3D tilt on hover
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width  - 0.5  // -0.5 to 0.5
      const y = (e.clientY - rect.top)  / rect.height - 0.5
      card.style.transform = `perspective(1200px) rotateX(${y * 6}deg) rotateY(${-x * 6}deg)`
    }
    const onMouseLeave = () => {
      card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`
    }

    card.addEventListener("mousemove", onMouseMove)
    card.addEventListener("mouseleave", onMouseLeave)
    return () => {
      card.removeEventListener("mousemove", onMouseMove)
      card.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      if (rect.bottom < 0) return
      const scrolled = -rect.top

      if (bgRef.current)      bgRef.current.style.transform      = `translateY(${scrolled * 0.15}px)`
      if (contentRef.current) contentRef.current.style.transform = `translateY(${scrolled * 0.07}px)`
      if (coinRef.current)    coinRef.current.style.transform    = `translate(28%, calc(12% + ${scrolled * 0.25}px))`
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="px-8 pt-6 pb-0 max-w-6xl mx-auto" ref={sectionRef}>
      <div
        ref={cardRef}
        className="relative rounded-2xl overflow-hidden border border-white/10 md:aspect-[85.6/48] flex flex-col"
        style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
      >

        {/* Background layer */}
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <GradientBg />
        </div>

        {/* Coin — separate layer, faster parallax */}
        <img
          ref={coinRef}
          src="/coin.png"
          alt="Coin"
          className="hidden md:block absolute right-0 bottom-0 w-[55%] max-w-none object-contain drop-shadow-2xl animate-float will-change-transform"
          style={{ transform: 'translate(28%, 12%)' }}
        />

        {/* Content layer */}
        <div ref={contentRef} className="relative z-10 flex flex-col flex-1 justify-between p-10 will-change-transform">

          {/* Top nav */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-6" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <button className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <UserCircle className="w-5 h-5" />
              Log in
            </button>
          </div>

          {/* Bottom row: text left, featured on right */}
          <div className="flex items-end justify-between">

            {/* Text */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]" style={headingWrap}>
                <span style={headingAccent}>Earn crypto</span>{" "}
                <span style={headingBase}>on every bet, trade &amp; transaction</span>
              </h1>
              <p className="text-white/70 mt-4 text-lg leading-relaxed max-w-md">
                Web3Cashback connects you to the top crypto platforms and pays you back every time you play or trade. Real revenue share, paid in USDC.
              </p>
              <div className="mt-8">
                <button
                className="inline-flex items-center gap-2 px-8 h-12 rounded-xl text-white font-medium text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(180deg, #9B3FF0 0%, #7B22D0 100%)',
                  boxShadow: '0 0 28px rgba(155, 63, 240, 0.55), 0 0 8px rgba(155, 63, 240, 0.35), inset 0 1px 0 rgba(255,255,255,0.18)',
                  border: '1px solid rgba(180, 100, 255, 0.45)',
                }}
              >
                Start Earning
                <ArrowRight className="h-4 w-4" />
              </button>
              </div>
            </div>

            {/* Featured on — bottom right inside hero */}
            <div className="hidden md:flex flex-col items-end gap-3 pb-1">
              <span className="text-xs text-white/50 uppercase tracking-widest">Featured on</span>
              <div className="flex items-center gap-5">
                {featuredLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-5 object-contain"
                    style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
