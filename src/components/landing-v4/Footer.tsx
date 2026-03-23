export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">© 2026 <img src="/w3c-logo.svg" alt="Web3Cashback" className="h-3.5 inline-block align-middle" /></p>
        <nav className="flex items-center gap-5">
          <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>
      </div>
    </footer>
  )
}
