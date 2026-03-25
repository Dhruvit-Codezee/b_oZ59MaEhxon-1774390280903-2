import Image from "next/image"

const logos = [
  { name: "n8n", src: "/images/logos/n8n.svg" },
  { name: "Airtable", src: "/images/logos/airtable.png" },
  { name: "HubSpot", src: "/images/logos/hubspot.png" },
  { name: "Make", src: "/images/logos/make.png" },
  { name: "Salesforce", src: "/images/logos/salesforce.jpg" },
  { name: "Pipedrive", src: "/images/logos/pipedrive.png" },
  { name: "Slack", src: "/images/logos/slack.png" },
  { name: "Notion", src: "/images/logos/notion.svg" },
]

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-center px-8">
      <Image
        src={src}
        alt={`${name} logo`}
        width={120}
        height={40}
        loading="lazy"
        sizes="120px"
        className={`${name === "Salesforce" ? "max-h-12" : "max-h-8"} ${name === "n8n" ? "invert" : ""} object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100`}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  )
}

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-brand-lavender/60 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-foreground/70">
          Custom Built Workflows
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-brand-lavender/60 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-brand-lavender/60 to-transparent" />

        {/* First scrolling set - GPU-accelerated */}
        <div className="flex shrink-0 animate-marquee items-center will-change-transform">
          {logos.map((logo) => (
            <LogoItem key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 animate-marquee items-center will-change-transform" aria-hidden="true">
          {logos.map((logo) => (
            <LogoItem key={`dup-${logo.name}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  )
}
