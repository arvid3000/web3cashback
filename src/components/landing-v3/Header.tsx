import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { VariantNav } from "@/components/VariantNav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md" style={{ background: '#1d1854', borderColor: 'rgba(255,255,255,0.1)' }}>
      <div className="container flex h-14 items-center justify-between">
        <Link to="/">
          <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-6" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <VariantNav />
        <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">My Account</Button>
      </div>
    </header>
  )
}
