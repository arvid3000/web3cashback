import { useEffect, useRef, useState } from "react"
import { ArrowRight, UserCircle, Sun, Moon } from "lucide-react"
import { GradientBg } from "@/components/GradientBg"
import { headingAccent, headingBase, headingWrap } from "@/lib/typography"
import { Link } from "react-router-dom"

const featuredLogos = [
  { src: "/brands/ccn-logo.svg", alt: "CCN" },
  { src: "/brands/cm.svg",       alt: "CoinMarketCap" },
  { src: "/brands/webo.svg",     alt: "Webo" },
]

export function Hero() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

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
      if (coinRef.current) {
        const mobile = window.innerWidth < 768
        coinRef.current.style.transform = mobile
          ? `translate(30%, calc(45% + ${scrolled * 0.25}px))`
          : `translate(28%, calc(12% + ${scrolled * 0.25}px))`
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="px-8 pt-12 pb-16 max-w-6xl mx-auto" ref={sectionRef}>
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
          className="absolute object-contain drop-shadow-2xl animate-float will-change-transform
                     right-0 bottom-0 w-[75%] max-w-none
                     md:w-[55%]"
          style={{ transform: 'translate(30%, 45%)' }}
        />

        {/* Content layer */}
        <div ref={contentRef} className="relative z-10 flex flex-col flex-1 justify-between p-5 md:p-10 will-change-transform">

          {/* Top nav */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src="/w3c-logo.svg" alt="Web3Cashback" className="hidden md:block h-6" style={{ filter: 'brightness(0) invert(1)' }} />
              <img src="/w3c-icon.svg" alt="Web3Cashback" className="block md:hidden h-5" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button className="hidden md:flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                <UserCircle className="w-5 h-5" />
                Log in
              </button>
            </div>
          </div>

          {/* Bottom row: text left, featured on right */}
          <div className="flex items-end justify-between mt-8 md:mt-0">

            {/* Text */}
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-white leading-[1.1]" style={headingWrap}>
                <span style={headingAccent}>Earn crypto</span>{" "}
                <span style={headingBase}>on every bet, trade &amp; transaction</span>
              </h1>
              <p className="text-white/70 mt-4 text-lg leading-relaxed max-w-md">
                Web3Cashback connects you to the top crypto platforms and pays you back every time you play or trade.{" "}
                <span style={headingAccent}>Real revenue share, paid in{" "}</span>
                <span className="inline-flex items-center gap-1 align-middle" style={headingAccent}>
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <circle cx="16" cy="16" r="16" fill="#2775CA"/>
                    <path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.232-2.196-.696-2.196-1.512 0-.816.584-1.348 1.752-1.348 1.05 0 1.636.35 1.928 1.21a.482.482 0 00.458.308h1.048a.44.44 0 00.44-.452v-.044a3.256 3.256 0 00-2.92-2.66V9.5a.48.48 0 00-.48-.48h-.992a.48.48 0 00-.48.48v.968c-1.784.232-2.92 1.4-2.92 2.916 0 2.008 1.232 2.78 3.792 3.084 1.7.232 2.244.58 2.244 1.488 0 .908-.8 1.532-1.888 1.532-1.492 0-2.008-.636-2.184-1.512a.484.484 0 00-.468-.38h-1.096a.44.44 0 00-.44.452v.044c.232 1.736 1.4 2.94 3.068 3.22v.984a.48.48 0 00.48.48h.992a.48.48 0 00.48-.48v-.968c1.8-.268 2.922-1.5 2.922-3.204z" fill="white"/>
                  </svg>
                  USDC
                </span>.
              </p>
              <div className="mt-8">
                <button
                className="inline-flex items-center gap-2 px-8 h-12 rounded-xl text-white font-medium text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(180deg, #432ef5 0%, #3221cc 100%)',
                  boxShadow: '0 0 28px rgba(67, 46, 245, 0.55), 0 0 8px rgba(67, 46, 245, 0.35), inset 0 1px 0 rgba(255,255,255,0.18)',
                  border: '1px solid rgba(104, 88, 255, 0.45)',
                }}
              >
                Start Earning
                <ArrowRight className="h-4 w-4" />
              </button>
              </div>

              {/* Featured on — mobile only, under CTA */}
              <div className="flex md:hidden flex-col gap-2 mt-6">
                <span className="text-xs text-white/50 uppercase tracking-widest">Featured on</span>
                <div className="flex items-center gap-4">
                  {featuredLogos.map((logo) => (
                    <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-4 object-contain"
                      style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                  ))}
                </div>
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
