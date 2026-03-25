import Image from "next/image"

const technologies = [
  { name: "n8n", logo: "/images/logos/n8n.svg" },
  { name: "Airtable", logo: "/images/logos/airtable.png" },
  { name: "HubSpot", logo: "/images/logos/hubspot.png" },
  { name: "Make", logo: "/images/logos/make.png" },
  { name: "Salesforce", logo: "/images/logos/salesforce.jpg" },
  { name: "Pipedrive", logo: "/images/logos/pipedrive.png" },
  { name: "Slack", logo: "/images/logos/slack.png" },
  { name: "Notion", logo: "/images/logos/notion.svg" },
]

export function TechLogos() {
  return (
    <section className="bg-section-lavender py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Maximise ROI with{" "}
            <span className="text-brand-purple">AI Integration</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70 text-pretty">
            Maximise the ROI from your software investments by integrating your technology stack with AI and automation solutions. Whether it{"'"}s n8n, Airtable, HubSpot, Make, Salesforce, or others, Automaly connects your tools to streamline workflows and improve efficiency.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex h-20 items-center justify-center rounded-xl border border-brand-purple/20 bg-white px-6 py-4 transition-all hover:border-brand-purple/30 hover:shadow-md hover:shadow-brand-purple/5"
            >
              {tech.logo ? (
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={200}
                  height={60}
                  className={`${tech.name === "Salesforce" ? "max-h-16" : "max-h-10"} ${tech.name === "n8n" ? "invert" : ""} object-contain`}
                  style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                />
              ) : (
                <span className="text-sm font-semibold text-foreground">
                  {tech.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
