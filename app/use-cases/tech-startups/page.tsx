import type { Metadata } from "next"
import TechStartupsContent from "@/components/pages/tech-startups-content"

export const metadata: Metadata = {
  title: "AI & Automation for Technology Scale-Ups | Automaly",
  description:
    "Scale revenue, protect runway and increase operational leverage. AI & Automation for technology scale-ups and startups.",
  openGraph: {
    title: "AI & Automation for Technology Scale-Ups | Automaly",
    description:
      "Scale revenue, protect runway and increase operational leverage. AI & Automation for technology scale-ups and startups.",
    url: "https://www.automaly.io/use-cases/tech-startups",
  },
  alternates: { canonical: "https://www.automaly.io/use-cases/tech-startups" },
}

export default function TechStartupsPage() {
  return <TechStartupsContent />
}
