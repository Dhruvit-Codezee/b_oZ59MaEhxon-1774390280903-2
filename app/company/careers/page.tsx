import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { clientQuotes } from "@/lib/testimonials"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Quote,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Progress Your AI & Automation Career | Automaly",
  description:
    "Join Automaly's team of AI and automation experts. We offer flexible, remote-based opportunities helping fast-growth businesses increase productivity with the power of AI.",
  openGraph: {
    title: "Careers | Progress Your AI & Automation Career | Automaly",
    description:
      "Join our team of AI and Automation experts to help fast-growth businesses increase productivity and reduce costs with the power of AI and automation.",
    url: "https://www.automaly.io/company/careers",
  },
  alternates: {
    canonical: "https://www.automaly.io/company/careers",
  },
}

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Background Image - optimized with Next.js Image priority loading */}
          <HeroBackground
            src="/images/careers-hero.webp"
            alt="Isometric 3D illustration of stacked platforms representing career growth with glowing circuit pathways"
            fallbackColor="#3b0d7e"
            overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(59, 13, 126, 0.7) 0%, rgba(59, 13, 126, 0.4) 60%, rgba(59, 13, 126, 0.2) 100%)"
          />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
            <div className="max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Careers at Automaly
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                <span className="text-white">Your Career +</span>{" "}
                <span className="text-brand-orange">Automaly</span>{" "}
                <span className="text-white">= Success!</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
                Join our team of AI and Automation experts to help fast-growth
                businesses increase productivity and reduce costs with the
                power of AI and automation.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  asChild
                  variant="orange" className="gap-2"
                >
                  <a href="mailto:hello@automaly.io?subject=Current%20Vacancies&body=Hello%20Team%0A%0AI%27m%20interested%20in%20finding%20out%20more%20about%20the%20current%20opportunities%20at%20Automaly.%20%0A">
                    <Mail className="h-4 w-4" />
                    Apply Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200"
                >
                  <Link href="/company/about">
                    Learn About Automaly
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Growth stat */}
              <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                  <TrendingUp className="h-6 w-6 text-brand-orange" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-brand-orange">17%</p>
                  <p className="text-xs text-white/70">
                    Annual Marketing Automation Growth (2021-2028)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                The Impact You'll Make
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What our <span className="text-brand-purple">clients</span> say
              </h2>
              <p className="mt-3 text-sm text-foreground/60">
                Every team member at Automaly contributes directly to outcomes like these.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {clientQuotes.map((t) => (
                <div
                  key={t.name}
                  className="relative flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-7"
                >
                  <Quote className="absolute right-6 top-6 h-7 w-7 text-brand-purple/10" />
                  <p className="flex-1 text-sm leading-relaxed text-foreground/70 italic">
                    {`"${t.quote}"`}
                  </p>
                  <div className="mt-6 border-t border-brand-purple/20 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-foreground/70">
                      {t.role} | {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="brand-gradient py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Zap className="mx-auto mb-4 h-8 w-8 text-brand-orange" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Contact Us to Apply for a Position
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              We're always on the lookout for new talent and we offer flexible,
              remote-based opportunities. Contact us to learn more about current
              and future career opportunities at Automaly, Premier Pipedrive
              Partner and stellar AI & Automation consultancy!
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <a href="mailto:hello@automaly.io?subject=Current%20Vacancies&body=Hello%20Team%0A%0AI%27m%20interested%20in%20finding%20out%20more%20about%20the%20current%20opportunities%20at%20Automaly.%20%0A">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="gap-2 border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/company/about">
                  Learn About Automaly
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/55">
              Email us directly at{" "}
              <a
                href="mailto:hello@automaly.io"
                className="text-white/80 underline hover:text-white"
              >
                hello@automaly.io
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
