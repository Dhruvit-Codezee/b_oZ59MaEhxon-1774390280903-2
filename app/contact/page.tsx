import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { HeroBackground } from "@/components/hero-background"
import { Footer } from "@/components/footer"
import { SupportForm } from "@/components/support-form"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  Mail,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Automaly",
  description:
    "Contact Automaly to discuss how AI and automation can improve your business. Book a consultation, send us a message, or email us directly.",
  openGraph: {
    title: "Contact Us | Automaly",
    description:
      "Get in touch with Automaly's AI & Automation consultants. Book a consultation or send us a message.",
    url: "https://www.automaly.io/contact",
  },
  alternates: {
    canonical: "https://www.automaly.io/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Background Image - optimized with Next.js Image priority loading */}
          <HeroBackground
            src="/images/contact-hero.webp"
            alt="Isometric 3D illustration of a processor chip with glowing circuit pathways"
            fallbackColor="#2e1065"
            overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(46, 16, 101, 0.7) 0%, rgba(46, 16, 101, 0.4) 60%, rgba(46, 16, 101, 0.2) 100%)"
            objectFit="cover"
            positionClassName="object-top"
          />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
            <div className="max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Contact Us
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                <span className="text-white">{"Let's talk about "}</span>
                <span className="text-brand-orange">your growth</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
                Whether you have a specific project in mind or want to explore how
                AI and automation can improve your business, our team is ready to
                help.
              </p>
              <p className="mt-4 text-sm text-white/60">
                Our clients save an average of{" "}
                <span className="font-semibold text-brand-orange">260+ hours annually</span>{" "}
                with{" "}
                <span className="font-semibold text-brand-orange">ROI realised within 90 days</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              {/* Form */}
              <div className="flex-1">
                <div className="rounded-2xl border border-brand-purple/20 bg-white p-8 shadow-sm lg:p-10">
                  <h2 className="text-2xl font-bold text-foreground">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">
                    Tell us about your business and what you are looking to
                    achieve. {"We'll"} get back to you promptly.
                  </p>
                  <SupportForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full shrink-0 space-y-6 lg:w-[380px]">
                {/* Book a call */}
                <div className="rounded-2xl border border-brand-purple/20 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10">
                    <Calendar className="h-5 w-5 text-brand-purple" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    Book a Discovery Call
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    Schedule a 30-minute call with one of our AI & Automation
                    experts. No obligation, just practical advice.
                  </p>
                  <p className="mt-2 text-xs text-foreground/70">
                    <span className="font-semibold text-foreground/60">260+ hours saved</span> per client annually
                  </p>
                  <CalendlyButton
                    variant="orange"
                    calendlyType="assessment"
                    className="mt-5 gap-2"
                  >
                    Book Your Assessment
                    <ArrowRight className="h-4 w-4" />
                  </CalendlyButton>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-brand-purple/20 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10">
                    <Mail className="h-5 w-5 text-brand-purple" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    Email us directly
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    For general enquiries, partnerships, or anything else.
                  </p>
                  <a
                    href="mailto:hello@automaly.io"
                    className="mt-4 inline-block text-sm font-semibold text-brand-purple hover:underline"
                  >
                    hello@automaly.io
                  </a>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="brand-gradient py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 text-pretty">
              Our AI Readiness Assessment identifies your highest-impact
              automation opportunities and gives you a clear, prioritised action
              plan.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <Link href="/services/ai-readiness-assessment">
                  AI Readiness Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="gap-2 border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
