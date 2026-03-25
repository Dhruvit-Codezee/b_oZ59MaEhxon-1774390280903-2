"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Users,
  Calculator,
  Settings,
  ShieldAlert,
  Scale,
  Rocket,
  Palette,
  UserSearch,
  Gavel,
  Landmark,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"

/* ── Standard nav items (simple dropdowns) ────────────────────────────── */

const navItemsBefore = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Readiness Assessment", href: "/services/ai-readiness-assessment" },
      { label: "Sales & Marketing Automation", href: "/services/sales-marketing" },
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Operational Automation", href: "/services/operational-automation" },
      { label: "System and Data Integration", href: "/services/system-data-integration" },
      { label: "Secure AI Implementation", href: "/services/secure-ai-implementation" },
    ],
  },
]

const navItemsAfter = [
  {
    label: "Pricing",
    href: "/pricing",
    children: [
      { label: "Pricing Options", href: "/pricing" },
      { label: "Pricing FAQ", href: "/pricing#faq" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "AI Readiness Assessment", href: "/services/ai-readiness-assessment" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
]

/* ── Use Cases mega-menu data ─────────────────────────────────────────── */

const useCasesByFunction = [
  { label: "AI & Automation for Sales & Marketing", href: "/use-cases/sales-marketing-automation", Icon: TrendingUp },
  { label: "AI & Automation for HR", href: "/use-cases/hr-automation", Icon: Users },
  { label: "AI & Automation for Finance", href: "/use-cases/finance-automation", Icon: Calculator },
  { label: "AI & Automation for Operations", href: "/use-cases/operations-automation", Icon: Settings },
  { label: "AI & Automation for Cybersecurity", href: "/use-cases/cybersecurity-automation", Icon: ShieldAlert },
  { label: "AI & Automation for Legal", href: "/use-cases/legal-automation", Icon: Scale },
]

const useCasesBySector = [
  { label: "Tech Startups", href: "/use-cases/tech-startups", Icon: Rocket },
  { label: "Digital Agencies", href: "/use-cases/digital-agencies", Icon: Palette },
  { label: "Recruitment", href: "/use-cases/recruitment", Icon: UserSearch },
  { label: "Legal Services", href: "/use-cases/legal-services", Icon: Gavel },
  { label: "MSSPs", href: "/use-cases/mssps", Icon: ShieldAlert },
  { label: "Financial Services", href: "/use-cases/financial-services", Icon: Landmark },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === "Escape") {
      setOpenDropdown(null)
      ;(e.currentTarget as HTMLElement).blur()
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setOpenDropdown((prev) => (prev === label ? null : label))
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/automaly-logo.jpg"
              alt="Automaly"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Services dropdown */}
            {navItemsBefore.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-brand-purple"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onFocus={() => setOpenDropdown(item.label)}
                  onKeyDown={(e) => handleKeyDown(e, item.label)}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                </Link>
                {openDropdown === item.label && item.children && (
                  <div className="absolute left-0 top-full z-50 w-56 rounded-lg border border-border bg-card p-2 shadow-lg" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-brand-lavender hover:text-brand-purple"
                        onBlur={(e) => {
                          if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                            setOpenDropdown(null)
                          }
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Use Cases mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Use Cases")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-brand-purple"
                aria-expanded={openDropdown === "Use Cases"}
                aria-haspopup="true"
                onFocus={() => setOpenDropdown("Use Cases")}
                onKeyDown={(e) => handleKeyDown(e, "Use Cases")}
              >
                Use Cases
                <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </button>

              {openDropdown === "Use Cases" && (
                <div className="absolute right-0 top-full z-50 w-[560px] rounded-xl border border-border bg-card p-0 shadow-xl" role="menu">
                  <div className="flex">
                    {/* By Function column */}
                    <div className="flex-1 border-r border-border p-4">
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                        By Function
                      </p>
                      <div className="space-y-0.5">
                        {useCasesByFunction.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-brand-lavender"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-purple group-hover:text-white">
                              <item.Icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-foreground group-hover:text-brand-purple">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Sector column */}
                    <div className="flex-1 p-4">
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                        By Sector
                      </p>
                      <div className="space-y-0.5">
                        {useCasesBySector.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-brand-lavender"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                              <item.Icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-foreground group-hover:text-brand-purple">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* View all CTA */}
                      <Link
                        href="/use-cases"
                        className="mt-4 flex items-center gap-1.5 rounded-lg border border-brand-purple/30 bg-brand-lavender px-3 py-2.5 text-xs font-semibold text-brand-purple transition-all duration-200 hover:bg-brand-purple/10 hover:border-brand-purple/50"
                      >
                        View all use cases
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing, Resources, Company dropdowns */}
            {navItemsAfter.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-brand-purple"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onFocus={() => setOpenDropdown(item.label)}
                  onKeyDown={(e) => handleKeyDown(e, item.label)}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                </button>
                {openDropdown === item.label && item.children && (
                  <div className="absolute left-0 top-full z-50 w-56 rounded-lg border border-border bg-card p-2 shadow-lg" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-brand-lavender hover:text-brand-purple"
                        onBlur={(e) => {
                          if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                            setOpenDropdown(null)
                          }
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA button - Opens Calendly popup */}
            <CalendlyButton size="sm" variant="orange" calendlyType="assessment" className="ml-4">
              Book Your AI Assessment
            </CalendlyButton>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden" role="dialog" aria-label="Mobile navigation menu">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {/* Services */}
            {navItemsBefore.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-brand-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-md px-6 py-1.5 text-sm text-muted-foreground hover:text-brand-purple"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Use Cases collapsible section */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-foreground"
                onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
              >
                Use Cases
                <ChevronRight
                  className={`h-4 w-4 text-muted-foreground transition-transform ${mobileUseCasesOpen ? "rotate-90" : ""}`}
                />
              </button>

              {mobileUseCasesOpen && (
                <div className="space-y-3 pb-2">
                  {/* By Function */}
                  <div>
                    <p className="px-6 pb-1 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                      By Function
                    </p>
                    {useCasesByFunction.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 rounded-md px-6 py-1.5 text-sm text-muted-foreground hover:text-brand-purple"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.Icon className="h-3.5 w-3.5 text-brand-purple/60" />
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* By Sector */}
                  <div>
                    <p className="px-6 pb-1 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                      By Sector
                    </p>
                    {useCasesBySector.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 rounded-md px-6 py-1.5 text-sm text-muted-foreground hover:text-brand-purple"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.Icon className="h-3.5 w-3.5 text-brand-orange/60" />
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* View all link */}
                  <Link
                    href="/use-cases"
                    className="mx-6 flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View all use cases
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing, Resources, Company */}
            {navItemsAfter.map((item) => (
              <div key={item.label}>
                <span className="block px-3 py-2 text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-md px-6 py-1.5 text-sm text-muted-foreground hover:text-brand-purple"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}

            <CalendlyButton 
              variant="orange" 
              calendlyType="assessment" 
              className="mt-4 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Your AI Assessment
            </CalendlyButton>
          </div>
        </div>
      )}
    </nav>
  )
}
