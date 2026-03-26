import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { HeroBackground } from "@/components/hero-background"
import { Footer } from "@/components/footer"
import { SupportForm } from "@/components/support-form"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Calendar,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Support | AI & Automation Help | Automaly",
  description:
    "Get technical support or ask questions about AI and automation. Contact Automaly's team of experts via form, email, live chat, or book a consultation.",
  openGraph: {
    title: "Support | AI & Automation Help | Automaly",
    description:
      "Get technical support from Automaly's AI & Automation experts. Submit a ticket, schedule a consultation, or chat live.",
    url: "https://www.automaly.io/support",
  },
  alternates: {
    canonical: "https://www.automaly.io/support",
  },
}

/* ── Contact Methods ────────────────────────────────────────────────── */

const contactMethods = [
  {
    icon: Mail,
    label: "Existing customer?",
    title: "Submit a ticket for our Technical Support team",
    cta: "Support Tickets",
    href: "mailto:support@automaly.io",
    external: true,
  },
  {
    icon: Calendar,
    label: "Fancy a consultation?",
    title: "Schedule a consultation with our automation experts",
    cta: "Reserve Now",
    // TODO: Replace with Calendly integration when migration plan is ready
    href: "/services/ai-readiness-assessment",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "Join live chat",
    title: "Chat live or leave us a message",
    cta: "Start Chat",
    href: "mailto:hello@automaly.io",
    external: true,
  },
]

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Background Image - optimized with Next.js Image priority loading */}
          <HeroBackground
            src="/images/support-hero.webp"
            alt="Isometric 3D illustration of hexagonal stacked platforms with translucent cubes and glowing circuit pathways"
            fallbackColor="#4c1d95"
            overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(76, 29, 149, 0.7) 0%, rgba(76, 29, 149, 0.4) 60%, rgba(76, 29, 149, 0.2) 100%)"
            objectFit="cover"
            positionClassName="object-top"
          />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
            <div className="max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Customer Support
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                <span className="text-white">{"Require support? Our team is "}</span>
                <span className="text-brand-orange">ready to help</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
                Our team of AI & Automation experts are ready to provide you
                with technical support or answer any questions you have on
                business process improvement.
              </p>
              <p className="mt-4 text-sm text-white/60">
                You can get in touch with us using one of the ways below.
              </p>
            </div>
          </div>
        </section>

        {/* Support Form + Contact Methods */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              {/* Form */}
              <div className="flex-1">
                <div className="rounded-2xl border border-brand-purple/20 bg-white p-8 shadow-sm lg:p-10">
                  <h2 className="text-2xl font-bold text-foreground">
                    Your AI or Automation support query
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">
                    Fill in your details and describe what you need help with.
                    {"We'll"} get back to you as soon as possible.
                  </p>
                  <SupportForm />
                </div>
              </div>

              {/* Contact Methods Sidebar */}
              <div className="w-full shrink-0 space-y-5 lg:w-[380px]">
                <h2 className="text-2xl font-bold text-foreground">
                  Other ways to contact us
                </h2>
                <p className="text-sm text-foreground/70">
                  Choose the option that works best for you.
                </p>

                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.cta}
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-brand-purple/20 bg-white p-6 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                          {method.label}
                        </p>
                        <h3 className="mt-1 text-sm font-semibold leading-snug text-foreground">
                          {method.title}
                        </h3>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-purple transition-colors group-hover:text-brand-orange">
                          {method.cta}
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </a>
                  )
                })}

                {/* Direct email note */}
                <div className="rounded-xl border border-dashed border-brand-purple/20 bg-white/50 p-5 text-center">
                  <p className="text-xs text-foreground/70">
                    Prefer email? Reach us directly at
                  </p>
                  <a
                    href="mailto:hello@automaly.io"
                    className="mt-1 inline-block text-sm font-semibold text-brand-purple hover:underline"
                  >
                    hello@automaly.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Help CTA */}
        <section className="brand-gradient py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Looking for something else?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 text-pretty">
              Explore our resources for guides on AI and automation, or book a
              consultation to discuss your business needs.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <Link href="/blog">
                  Browse Resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="gap-2 border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/services/ai-readiness-assessment">
                  AI Readiness Assessment
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
