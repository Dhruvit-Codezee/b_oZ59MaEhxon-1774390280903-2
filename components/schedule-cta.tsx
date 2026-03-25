import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ScheduleCTA() {
  return (
    <section className="bg-section-lavender py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Win the technology race
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Schedule a call today to discover how AI and automation can
              transform your business operations.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-purple/20 bg-white p-8 shadow-sm text-center">
            <p className="text-lg font-semibold text-foreground">
              Ready to get started?
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Book a 30-minute consultation with our AI & Automation
              experts. No obligation, just practical advice.
            </p>
            <p className="mt-3 text-xs text-foreground/70">
              Our clients save an average of{" "}
              <span className="font-semibold text-brand-orange">260+ hours annually</span>{" "}
              with ROI realised within 90 days.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <CalendlyButton
                size="lg"
                variant="orange"
                calendlyType="assessment"
                className="w-full gap-2"
              >
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="w-full gap-2 border-brand-purple/30 text-brand-purple font-semibold hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-200"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
