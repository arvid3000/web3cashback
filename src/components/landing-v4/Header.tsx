import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { VariantNav } from "@/components/VariantNav"

export function Header() {
  const [visible, setVisible] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 60) {
        setVisible(false)
      } else if (y < lastY.current) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-md transition-transform duration-300"
      style={{
        background: '#1d1854',
        borderColor: 'rgba(255,255,255,0.1)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="container flex h-14 items-center justify-between">
        <Link to="/">
          <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-6" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <VariantNav />
        <Button variant="outline" size="sm" className="text-white border-white/40 hover:bg-white/10 hover:text-white bg-transparent">
          Sign Up
        </Button>
      </div>
    </header>
  )
}
