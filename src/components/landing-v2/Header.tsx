import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { VariantNav } from "@/components/VariantNav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/">
          <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-6" />
        </Link>
        <VariantNav />
        <Button variant="ghost" size="sm">My Account</Button>
      </div>
    </header>
  )
}
