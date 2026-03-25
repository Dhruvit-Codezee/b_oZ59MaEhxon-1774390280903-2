import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "AI Readiness Assessment", href: "/services/ai-readiness-assessment" },
      { label: "Sales & Marketing Automation", href: "/services/sales-marketing" },
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Operational Automation", href: "/services/operational-automation" },
      { label: "System & Data Integration", href: "/services/system-data-integration" },
      { label: "Secure AI Implementation", href: "/services/secure-ai-implementation" },
    ],
  },
  {
    heading: "Pricing",
    links: [
      { label: "Pricing Options", href: "/pricing" },
      { label: "Pricing FAQ", href: "/pricing#faq" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/#testimonials" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
]

const useCasesByFunction = [
  { label: "AI & Automation for Sales & Marketing", href: "/use-cases/sales-marketing-automation" },
  { label: "AI & Automation for HR", href: "/use-cases/hr-automation" },
  { label: "AI & Automation for Finance", href: "/use-cases/finance-automation" },
  { label: "AI & Automation for Operations", href: "/use-cases/operations-automation" },
  { label: "AI & Automation for Cybersecurity", href: "/use-cases/cybersecurity-automation" },
  { label: "AI & Automation for Legal", href: "/use-cases/legal-automation" },
]

const useCasesBySector = [
  { label: "Tech Startups", href: "/use-cases/tech-startups" },
  { label: "Digital Agencies", href: "/use-cases/digital-agencies" },
  { label: "Recruitment", href: "/use-cases/recruitment" },
  { label: "Legal Services", href: "/use-cases/legal-services" },
  { label: "MSSPs", href: "/use-cases/mssps" },
  { label: "Financial Services", href: "/use-cases/financial-services" },
]

export function Footer() {
  return (
    <footer className="brand-gradient">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Standard link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-brand-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Use Cases - split into two sub-groups in one wider column */}
          <div className="col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-white">
              <Link href="/use-cases" className="transition-colors hover:text-brand-orange">
                Use Cases
              </Link>
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0">
              {/* By Function */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-orange/80">
                  By Function
                </p>
                <ul className="space-y-2">
                  {useCasesByFunction.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-brand-orange"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* By Sector */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-orange/80">
                  By Sector
                </p>
                <ul className="space-y-2">
                  {useCasesBySector.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-brand-orange"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/badges/gdpr.webp"
                alt="GDPR Compliant"
                width={32}
                height={32}
                loading="lazy"
                sizes="32px"
                className="h-8 w-8 rounded object-cover"
              />
              <p className="text-xs text-white/55">GDPR Compliant. NDA available on request.</p>
            </div>
            <p className="text-xs text-white/55">
              {"\u00A9"} {new Date().getFullYear()} Automaly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
