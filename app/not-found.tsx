import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, BookOpen, Headphones } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="relative overflow-hidden bg-section-light pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[140px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-8xl font-bold text-brand-purple/20 sm:text-9xl">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-foreground/60 text-pretty">
              The page you are looking for may have been moved, removed, or
              might never have existed. Here are some helpful links to get you
              back on track.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 border-brand-purple/30 text-brand-purple font-semibold hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-200"
              >
                <Link href="/support">
                  <Headphones className="h-4 w-4" />
                  Get Support
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-section-lavender py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-foreground">
              Popular pages
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Services",
                  description: "AI & automation consulting, CRM builds, and more.",
                  href: "/services",
                  icon: ArrowRight,
                },
                {
                  title: "Blog",
                  description: "Guides and insights on AI, automation, and growth.",
                  href: "/blog",
                  icon: BookOpen,
                },
                {
                  title: "Pricing",
                  description: "ROI-positive engagement models for every business.",
                  href: "/pricing",
                  icon: ArrowRight,
                },
              ].map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-6 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
                >
                  <h3 className="text-base font-semibold text-foreground group-hover:text-brand-purple">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    {link.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-purple">
                    Visit page
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
