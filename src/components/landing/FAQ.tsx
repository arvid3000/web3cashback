import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "How does Web3Cashback make money?",
    a: "We earn a revenue share from our partner platforms when you sign up through us. Instead of keeping all of it, we pass the majority back to you as cashback. We win when you win.",
  },
  {
    q: "How is cashback calculated?",
    a: "Cashback is based on real revenue generated from your activity — not deposits. The exact rate depends on the partner and your loyalty tier. Everything is transparently shown in your dashboard.",
  },
  {
    q: "When do I get paid?",
    a: "Cashback is credited monthly in USDC. You can withdraw anytime — minimum 50 USDC, no waiting periods.",
  },
  {
    q: "Do I need to do anything special to start earning?",
    a: "Just sign up through one of our partner links. Tracking starts automatically — no promo codes or forms needed.",
  },
  {
    q: "Are more platforms and verticals coming?",
    a: "Yes! We're actively expanding to cover more exchanges, DeFi protocols, and new verticals. Stay tuned for announcements.",
  },
  {
    q: "What is the loyalty program?",
    a: "The more you earn through Web3Cashback (your own cashback + referral rewards), the higher your status climbs. Higher status means boosted cashback rates and bigger referral percentages.",
  },
]

export function FAQ() {
  return (
    <section className="border-b">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Frequently asked questions</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
