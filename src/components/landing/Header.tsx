import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tighter text-foreground">
          Web3Cashback
        </a>
        <Button variant="ghost" size="sm">My Account</Button>
      </div>
    </header>
  )
}
