import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { Calendar } from "lucide-react"
import Image from "next/image"
export function CTASection() {
  return (
    <section id="ai-assessment" className="brand-gradient py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
          Unlock Growth with{" "}
          <span className="text-brand-orange">AI & Automation</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 text-pretty">
          Our <strong className="text-brand-orange">AI Readiness Assessment</strong> offers a clear view of where AI and automation can bring the most value to your business. We evaluate your processes, systems, and data to identify practical opportunities and create a detailed implementation roadmap.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/55">
          Start with a clear strategy before committing to change.
        </p>

        {/* No Risk Guarantee */}
        <div className="mx-auto mt-6 max-w-md rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
          <p className="text-center text-sm font-medium text-white/80">
            <strong className="text-brand-orange">No Risk Guarantee:</strong>{" "}
            If we can{"'"}t identify at least 5 AI & Automation opportunities with positive ROI, our assessment fee is refunded.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
            <Image
              src="/images/team/rohit-cto.webp"
              alt="Rohit, CTO at Automaly"
              fill
              loading="lazy"
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">Chat with Rohit, our CTO</p>
            <p className="text-xs text-white/55">Expose hidden growth opportunities</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Clients save an average of <strong className="font-semibold text-brand-orange">260+ hours annually</strong> - ROI realised within 90 days.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CalendlyButton
            size="lg"
            variant="orange"
            calendlyType="assessment"
            className="gap-2"
          >
            <Calendar className="h-5 w-5" />
            Book Your Assessment
          </CalendlyButton>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200"
          >
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>

        {/* GDPR compliance badge */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded">
            <Image
              src="/images/badges/gdpr.webp"
              alt="GDPR Compliant"
              fill
              loading="lazy"
              sizes="32px"
              className="object-cover"
            />
          </div>
          <p className="text-xs text-white/55">GDPR Compliant. NDA available on request.</p>
        </div>

        <p className="mt-4 text-sm text-white/60">
          Can{"'"}t find a suitable time? Email us at{" "}
          <a
            href="mailto:hello@automaly.io"
            className="text-white/80 hover:text-white underline"
          >
            hello@automaly.io
          </a>
        </p>
      </div>
    </section>
  )
}
