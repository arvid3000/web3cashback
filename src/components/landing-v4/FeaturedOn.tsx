export function FeaturedOn() {
  const logos = [
    { src: "/brands/ccn-logo.svg", alt: "CCN" },
    { src: "/brands/cm.svg",       alt: "CoinMarketCap" },
    { src: "/brands/webo.svg",     alt: "Webo" },
  ]

  return (
    <div className="max-w-6xl mx-auto px-8 py-4 flex items-center gap-6">
      <span className="text-sm shrink-0" style={{ color: '#9B3FF0' }}>Featured on</span>
      <div className="flex items-center gap-8">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-6 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200"
          />
        ))}
      </div>
    </div>
  )
}
