import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-card">
      <div className="container py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Ready to start earning?</h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg">
          Browse our vetted cashback offers and start getting paid back today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="px-8 h-12 text-base">
            Start Earning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 text-base">
            Learn More About Web3Cashback
          </Button>
        </div>
      </div>
    </section>
  )
}
