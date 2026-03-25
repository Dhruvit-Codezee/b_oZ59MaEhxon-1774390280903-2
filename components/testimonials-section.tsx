import Link from "next/link"
import Image from "next/image"
import { CalendlyButton } from "@/components/calendly-button"
import { Quote, CheckCircle2, ArrowRight } from "lucide-react"

interface ClientStory {
  name: string
  slug: string
  tldr: string
  about: string
  industry: string
  size: string
  challenge: string
  whatWeDid: string
  deliverables: string[]
  metric: { value: string; label: string }
  before: string
  after: string
  quote: string
  quoteAuthor: string
  quoteRole: string
  logos: { src: string; alt: string; width: number; height: number; darkBg?: boolean; size?: "sm" | "md" | "lg" }[]
}

const clientStories: ClientStory[] = [
  {
    name: "RankedRight",
    slug: "rankedright",
    tldr: "RevOps transformation built the engine that led to acquisition by Lansweeper",
    before: "Unstructured CRM, no scalable sales ops",
    after: "Automated pipelines, scalable inbound & outbound",
    about:
      "RankedRight offers a cybersecurity platform that automates vulnerability triage based on your specific business rules, optimising resource allocation and enhancing security operations. Acquired by Lansweeper.",
    industry: "IT & Cyber Security",
      size: "250 employees | Acquired by Lansweeper",
    challenge:
      "RankedRight faced significant challenges in scaling their operations rapidly after securing funding. Their CRM and operational processes were unstructured, leading to limited sales operations and inefficiencies.",
    whatWeDid: "RevOps, Airtable & Automation",
    deliverables: [
      "Provided specialised RevOps consulting services",
      "Implemented Airtable for scalability and efficiency",
      "Implemented tailored automation of core processes",
      "Integrated Airtable with existing operational systems",
      "Implemented scalable inbound and outbound sales processes",
    ],
    metric: { value: "Acquired", label: "By Lansweeper" },
    quote:
      "Automaly have really understood our needs as a business and delivered quality advice, support, and software training at every step to help support our ambitious growth goals.",
    quoteAuthor: "Thomas McKenzie",
    quoteRole: "CEO | RankedRight Ltd",
    logos: [
      {
        src: "/images/clients/ranked-right-logo.png",
        alt: "RankedRight logo",
        width: 160,
        height: 40,
      },
      {
        src: "/images/clients/lansweeper-logo.jpg",
        alt: "Lansweeper logo",
        width: 40,
        height: 40,
        darkBg: true,
      },
    ],
  },
  {
    name: "ethiXbase",
    slug: "ethixbase",
    tldr: "CRM overhaul saved 260+ hours/year",
    before: "15 manual processes, fragmented CRM",
    after: "3 automated workflows, unified CRM",
    about:
      "Ethixbase360 delivers comprehensive compliance solutions, providing businesses with the tools to assess risks, manage third-party relationships, and ensure compliance.",
    industry: "Software Development",
    size: "51 - 200 employees | £30M",
    challenge:
      "Ethixbase faced substantial challenges due to increased incoming demand and a need to automate their outbound processes more effectively. Their existing CRM system was inadequate, leading to inefficiencies and time-consuming manual tasks.",
    whatWeDid: "CRM Build & Marketing Automation",
    deliverables: [
      "Implemented a new, advanced CRM system",
      "Automated key outbound process workflows",
      "Integrated CRM with existing tech platforms",
      "Built an automated process to enrich business data",
    ],
    metric: { value: ">260", label: "Hours saved per annum" },
    quote:
      "Automaly assisted us with our marketing automation programme. From the initial onboarding sessions through to ongoing support they have been first class throughout and I would highly recommend them.",
    quoteAuthor: "Joe Struggles",
    quoteRole: "CMO | Ethixbase",
    logos: [
      {
        src: "/images/clients/ethixbase360-logo.webp",
        alt: "Ethixbase360 logo - compliance solutions provider",
        width: 240,
        height: 72,
      },
    ],
  },
  {
    name: "Pattrn Data",
    slug: "pattrn-data",
    tldr: "AI chatbot development secured a 6-figure contract",
    before: "Manual customer service, high support burden",
    after: "Intelligent chatbot, automated knowledge base",
    about:
      "Pattrn Data are experts in Data Analysis and AI, offering a range of services to multinational corporations. They deploy patented technology to swiftly and accurately analyse data.",
    industry: "Business Consulting & Services",
    size: "20 employees",
    challenge:
      "Pattrn Data's client aimed to enhance their customer service, efficiently manage complex requests, and lessen their support team's burden. They required a streamlined solution for rapid, accurate customer interactions.",
    whatWeDid: "AI Development & Automation Consulting",
    deliverables: [
      "Developed an intelligent Chatbot for the client",
      "Trained an LLM to handle complex customer service requests",
      "Mapped and automated key customer service processes",
      "Created a centralised knowledge base & data store",
      "API development to call external data sources",
    ],
    metric: { value: "6-Figure", label: "Contract secured" },
    quote:
      "As a result of Automaly's work we secured a 6-figure contract with a new customer. Their consultancy was first class, and the team consistently went the extra mile with service.",
    quoteAuthor: "Denise Parmer",
    quoteRole: "COO | Pattrn Data",
    logos: [
      {
        src: "/images/clients/pattrn-data-logo.webp",
        alt: "Pattrn Data logo - geometric dot pattern with company name",
        width: 160,
        height: 160,
        darkBg: true,
        size: "lg",
      },
    ],
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-section-lavender py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Real results from real businesses
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Client Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/60 text-pretty">
            Discover how Automaly has helped organisations across various industries implement AI and automation to drive measurable outcomes and accelerate growth.
          </p>

          {/* Aggregate metrics */}
          <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-8">
            {[
              { value: "3", label: "Industries transformed" },
              { value: "260+", label: "Hours saved annually" },
              { value: "£100K+", label: "Revenue generated" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <span className="h-8 w-px bg-brand-purple/15" aria-hidden="true" />}
                <div className="text-center">
                  <p className="text-xl font-bold text-brand-orange sm:text-2xl">{stat.value}</p>
                  <p className="text-xs text-foreground/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Cards - Horizontal Layout */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientStories.map((story, storyIndex) => {
            const isFeatured = storyIndex === 0
            return (
              <article
                key={story.name}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${
                  isFeatured
                    ? "border-brand-orange/30 ring-1 ring-brand-orange/10"
                    : "border-brand-purple/20"
                }`}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <div className="border-b border-brand-orange/10 bg-brand-orange/5 px-4 py-2">
                    <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                      Featured
                    </p>
                  </div>
                )}

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Logo */}
                  <div className="mb-4 flex items-center justify-center">
                    {story.logos.slice(0, 1).map((logo) => (
                      <div
                        key={logo.alt}
                        className="flex h-16 items-center justify-center overflow-hidden rounded-lg"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height}
                          loading="lazy"
                          className="max-h-14 w-auto object-contain"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* TL;DR */}
                  <div className="mb-3 rounded-lg bg-brand-purple/5 px-3 py-2">
                    <p className="text-xs font-medium text-foreground/80 line-clamp-2">
                      {story.tldr}
                    </p>
                  </div>

                  {/* Industry & Size tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    <span className="inline-flex rounded-full bg-brand-lavender px-2 py-0.5 text-xs font-medium text-brand-purple">
                      {story.industry}
                    </span>
                  </div>

                  {/* Metric highlight */}
                  <div className="mb-4 flex items-center gap-3 rounded-lg bg-brand-orange/5 px-3 py-2.5">
                    <span className="text-2xl font-bold text-brand-orange">
                      {story.metric.value}
                    </span>
                    <span className="text-xs font-medium text-foreground/70">
                      {story.metric.label}
                    </span>
                  </div>

                  {/* Before / After compact */}
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    <div className="rounded-md border border-destructive/20 bg-destructive/5 px-2 py-1.5">
                      <p className="text-xs font-semibold uppercase text-destructive/80">Before</p>
                      <p className="text-xs text-foreground/70 line-clamp-2">{story.before}</p>
                    </div>
                    <div className="rounded-md border border-green-500/20 bg-green-500/5 px-2 py-1.5">
                      <p className="text-xs font-semibold uppercase text-green-700">After</p>
                      <p className="text-xs text-foreground/70 line-clamp-2">{story.after}</p>
                    </div>
                  </div>

                  {/* Quote - condensed */}
                  <div className="mt-auto rounded-lg border border-brand-purple/8 bg-brand-lavender/50 p-3">
                    <div className="flex gap-2">
                      <Quote className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple/25" />
                      <div>
                        <p className="text-xs leading-relaxed text-foreground/70 italic line-clamp-3">
                          {`"${story.quote}"`}
                        </p>
                        <p className="mt-2 text-xs font-semibold text-foreground">
                          {story.quoteAuthor}
                        </p>
                        <p className="text-xs text-foreground/60">
                          {story.quoteRole}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA link */}
                  <Link
                    href={`/case-studies/${story.slug}`}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-purple/20 bg-brand-purple/5 px-3 py-2 text-xs font-medium text-brand-purple transition-all duration-200 hover:bg-brand-purple/10 hover:border-brand-purple/30 group-hover:bg-brand-purple group-hover:text-white"
                  >
                    Read case study
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA - after social proof, invite action */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-foreground/70">
            See the same results in your business.
          </p>
          <CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
            Book Your Assessment
            <ArrowRight className="h-4 w-4" />
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}
