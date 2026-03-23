import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <a href="/">
          <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-6" />
        </a>
        <Button variant="ghost" size="sm">My Account</Button>
      </div>
    </header>
  )
}
