import {
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
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

export interface UseCaseTestimonial {
  quote: string
  attribution: string
}

export interface UseCaseStat {
  value: string
  label: string
  context?: string
}

export interface UseCaseSection {
  heading: string
  intro?: string
  items?: string[]
  outro?: string
}

export interface UseCaseContent {
  intro: string
  heroStat?: UseCaseStat
  challenges?: { heading: string; intro?: string; items: string[]; outro?: string }
  benefits?: { heading: string; intro?: string; items: string[] }
  extraSections?: UseCaseSection[]
  outcomes?: { heading: string; intro?: string; items: string[]; stat?: UseCaseStat }
  testimonial?: UseCaseTestimonial
  cta?: { heading: string; body: string; boldText?: string }
}

export interface UseCaseEntry {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: string
  targetKeyword: string
  relatedFunctional?: string[]
  relatedSector?: string[]
  content?: UseCaseContent
}

// ─── Functional Use Cases ────────────────────────────────────────────────────

export const functionalUseCases: UseCaseEntry[] = [
  {
    slug: "sales-marketing-automation",
    title: "AI & Automation for Sales & Marketing",
    shortTitle: "Sales & Marketing",
    description:
      "Automate lead generation, CRM workflows, email campaigns, and pipeline management to drive revenue without increasing headcount.",
    icon: "TrendingUp",
    targetKeyword: "sales automation",
    relatedSector: ["tech-startups", "digital-agencies"],
  },
  {
    slug: "hr-automation",
    title: "AI & Automation for HR",
    shortTitle: "HR",
    description:
      "Streamline onboarding, leave management, performance reviews, and employee communications with AI-driven HR workflows.",
    icon: "Users",
    targetKeyword: "HR automation",
    relatedSector: ["tech-startups", "recruitment"],
  },
  {
    slug: "finance-automation",
    title: "AI & Automation for Finance",
    shortTitle: "Finance",
    description:
      "Automate invoicing, expense tracking, reconciliation, and financial reporting to improve accuracy and reduce manual processing.",
    icon: "Calculator",
    targetKeyword: "finance automation",
    relatedSector: ["tech-startups", "digital-agencies"],
  },
  {
    slug: "operations-automation",
    title: "AI & Automation for Operations",
    shortTitle: "Operations",
    description:
      "Eliminate bottlenecks in project delivery, task management, and internal coordination with end-to-end process automation.",
    icon: "Settings",
    targetKeyword: "operations automation",
    relatedSector: ["digital-agencies", "tech-startups"],
  },
  {
    slug: "cybersecurity-automation",
    title: "AI & Automation for Cybersecurity",
    shortTitle: "Cybersecurity",
    description:
      "Automate threat detection, incident response, compliance monitoring, and security workflows to reduce risk and strengthen your organisation's security posture.",
    icon: "ShieldAlert",
    targetKeyword: "cybersecurity automation",
    relatedSector: ["tech-startups", "mssps"],
  },
  {
    slug: "legal-automation",
    title: "AI & Automation for Legal",
    shortTitle: "Legal",
    description:
      "Streamline contract management, compliance tracking, and regulatory workflows to reduce risk and manual oversight.",
    icon: "Scale",
    targetKeyword: "legal automation",
    relatedSector: ["recruitment", "tech-startups"],
  },
]

// ─── Sector Use Cases ────────────────────────────────────────────────────────

export const sectorUseCases: UseCaseEntry[] = [
  {
    slug: "tech-startups",
    title: "AI & Automation for Scale-Up Businesses",
    shortTitle: "Tech Startups",
    description:
      "Scaling a business introduces new operational challenges. AI and automation help scale-up businesses reduce operational friction, improve decision-making, and support growth - without adding complexity or technical debt.",
    icon: "Rocket",
    targetKeyword: "automation for tech startups",
    relatedFunctional: ["sales-marketing-automation", "operations-automation"],
    content: {
      intro:
        "Scaling a business introduces new operational challenges. Processes that once worked begin to strain under increased volume, systems become harder to manage, and teams spend more time maintaining operations than driving growth.\n\nAI and automation help scale-up businesses reduce operational friction, improve decision-making, and support growth - but only when applied with clarity and the right foundations in place.\n\nAutomaly helps scale-ups implement AI and automation in a way that supports sustainable growth, rather than adding complexity or technical debt.",
      heroStat: {
        value: "+29%",
        label: "Run Out of Funding",
        context:
          "The second largest reason why startups fail (29% of cases) is due to running out of funding and personal money. - CBInsights",
      },
      challenges: {
        heading: "The Challenge for Scale-Ups",
        intro: "As organisations grow, common challenges begin to emerge:",
        items: [
          "Manual processes that don't scale with volume",
          "Disconnected systems and inconsistent data",
          "Sales and marketing teams constrained by operational overhead",
          "Limited visibility into performance and pipeline health",
          "Increased reliance on people to \"patch\" process gaps",
        ],
        outro:
          "Without addressing these foundations, AI and automation initiatives often fail to deliver meaningful ROI.",
      },
      benefits: {
        heading: "How AI & Automation Support Scale",
        intro: "When applied correctly, AI and automation help scale-ups:",
        items: [
          "Reduce manual workload across sales, marketing, and operations",
          "Improve data accuracy and system reliability",
          "Support faster, more consistent decision-making",
          "Increase throughput without proportional headcount growth",
          "Create repeatable, scalable processes",
        ],
      },
      extraSections: [
        {
          heading: "Automaly's Approach for Scale-Ups",
          intro:
            "Automaly works with scale-up businesses using a structured, assessment-led approach. We begin by understanding how your organisation operates today - including processes, systems, and data flows. This allows us to identify where AI and automation can support scale most effectively, and where changes to foundations are required first.\n\nThis approach ensures automation enhances performance rather than reinforcing inefficiencies.",
        },
        {
          heading: "Common Areas of Focus",
          intro: "While every organisation is different, scale-ups often apply AI and automation across:",
          items: [
            "Sales and pipeline automation",
            "Lead qualification and prioritisation",
            "Job-change and account intelligence",
            "Marketing workflow automation",
            "Internal operational processes",
            "Reporting and performance visibility",
          ],
          outro:
            "These opportunities are prioritised through the AI Readiness Assessment, ensuring effort is focused on high-impact initiatives.",
        },
      ],
      outcomes: {
        heading: "Outcomes for Scale-Up Businesses",
        intro: "Scale-ups that adopt AI and automation with the right foundations in place typically experience:",
        items: [
          "Reduced operational overhead",
          "Improved sales and marketing efficiency",
          "More reliable data and reporting",
          "Greater confidence in scaling processes",
          "Clearer visibility into ROI",
        ],
        stat: {
          value: "+19%",
          label: "Beaten by Competition",
          context: "Startups fail because they are beaten by competition",
        },
      },
      testimonial: {
        quote:
          "As a start-up we had limited time and resources to complete what were essential but repetitive tasks. So we used automation to automatically create a new lead in our CRM when a prospect filled out a form on our website. Depending on the form, prospects were automatically added to the relevant marketing email list and emails were sent automatically.\n\nWe also used an API to call a 3rd party database to pull in missing contact information such as phone numbers and LinkedIn URL. This saved us huge amounts of time when we needed to contact the prospect and directly improved our revenue ops.",
        attribution: "Founder | US",
      },
      cta: {
        heading: "Start with Clarity",
        body: "Every scale-up is at a different stage. The most effective AI and automation initiatives begin with understanding where change will deliver the greatest impact.",
        boldText:
          "The AI Readiness Assessment provides clarity, prioritisation, and a clear path to implementation - helping scale-up businesses apply AI and automation with confidence.",
      },
    },
  },
  {
    slug: "digital-agencies",
    title: "AI & Automation for Digital Agencies",
    shortTitle: "Digital Agencies",
    description:
      "Digital agencies operate in fast-moving environments where efficiency, consistency, and delivery quality directly impact profitability. AI and automation help digital agencies streamline internal operations, scale service delivery, and improve client outcomes - without increasing operational overhead.",
    icon: "Palette",
    targetKeyword: "automation for digital agencies",
    relatedFunctional: ["operations-automation", "finance-automation"],
    content: {
      intro:
        "Digital agencies operate in fast-moving environments where efficiency, consistency, and delivery quality directly impact profitability. As client demands increase, manual workflows and fragmented systems quickly become a bottleneck to growth.\n\nAI and automation help digital agencies streamline internal operations, scale service delivery, and improve client outcomes - without increasing operational overhead.",
      heroStat: {
        value: "+77%",
        label: "Increase in Conversions",
        context:
          "77% of marketers that used marketing automation solutions reported an increase in conversions",
      },
      challenges: {
        heading: "Common Challenges for Digital Agencies",
        intro: "As agencies grow, they often experience:",
        items: [
          "Manual campaign setup and reporting",
          "Disconnected tools across sales, delivery, and finance",
          "Inconsistent data between teams",
          "Limited visibility into workload and margins",
          "Difficulty scaling delivery without increasing headcount",
        ],
        outro:
          "These challenges reduce profitability and limit an agency's ability to scale sustainably.",
      },
      benefits: {
        heading: "How AI & Automation Support Agencies",
        intro:
          "When applied correctly, AI and automation enable agencies to:",
        items: [
          "Automate campaign execution and reporting",
          "Improve consistency across client delivery",
          "Reduce manual coordination between teams",
          "Increase output without proportional resource growth",
          "Improve visibility across pipelines, projects, and performance",
        ],
      },
      outcomes: {
        heading: "Typical Outcomes",
        items: [
          "Faster campaign execution",
          "Improved reporting accuracy",
          "Increased delivery capacity",
          "Reduced operational overhead",
          "Better client retention through consistency and speed",
        ],
        stat: {
          value: "+44%",
          label: "Within 6 Months",
          context: "ROI from Automation",
        },
      },
      testimonial: {
        quote:
          "We automatically sent out an online questionnaire before our discovery calls. We used these answers to pre-populate an SEO guide and content plan that we offered to the prospect for free after the initial call.\n\nWe gave away huge value for free using AI and automation, and significantly increased our sales conversion rates.",
        attribution: "CRO Digital Agency | US",
      },
      cta: {
        heading: "Start with Clarity",
        body: "Every agency operates differently. The most effective automation opportunities are identified by understanding your current processes, constraints, and growth objectives.",
        boldText:
          "The AI Readiness Assessment identifies where AI and automation will deliver the greatest operational and commercial impact.",
      },
    },
  },
  {
    slug: "recruitment",
    title: "AI & Automation for Recruitment Firms",
    shortTitle: "Recruitment",
    description:
      "Recruitment firms depend on speed, accuracy, and reliable data. AI and automation help recruitment firms streamline operations, improve data quality, and free consultants to focus on high-value activities.",
    icon: "UserSearch",
    targetKeyword: "automation for recruitment firms",
    relatedFunctional: ["hr-automation", "sales-marketing-automation"],
    content: {
      intro:
        "Recruitment firms depend on speed, accuracy, and reliable data. As candidate and client volumes grow, manual workflows and outdated systems slow teams down and reduce placement effectiveness.\n\nAI and automation help recruitment firms streamline operations, improve data quality, and free consultants to focus on high-value activities.",
      heroStat: {
        value: "+30%",
        label: "of Time Spent on One Position",
        context:
          "Recruiters spend over 30% of their workweek sourcing candidates for one position. One-third of these professionals spend over 20 hours. - Entelo, Recruiting Trends Report",
      },
      challenges: {
        heading: "Common Challenges in Recruitment",
        intro: "Recruitment teams frequently encounter:",
        items: [
          "Manual candidate and client updates",
          "Inconsistent or outdated CRM data",
          "High administrative workload for consultants",
          "Limited visibility across pipelines",
          "Delays in candidate matching and follow-up",
        ],
        outro:
          "These challenges reduce placement speed and overall productivity.",
      },
      benefits: {
        heading: "How AI & Automation Support Recruitment Teams",
        intro: "When implemented strategically, AI and automation enable firms to:",
        items: [
          "Maintain accurate, up-to-date candidate data",
          "Automate routine administrative tasks",
          "Improve candidate matching and prioritisation",
          "Increase consultant productivity",
          "Improve pipeline visibility across roles and clients",
        ],
      },
      outcomes: {
        heading: "Typical Outcomes",
        intro: "Recruitment firms applying AI and automation effectively often see:",
        items: [
          "Faster placement cycles",
          "Improved data reliability",
          "Reduced administrative overhead",
          "Better consultant utilisation",
          "Improved candidate and client experience",
        ],
        stat: {
          value: "+84%",
          label: "Data is the Future",
          context:
            "84% of recruiting professionals believe that analysing data to drive hiring decisions will become a key skill for recruiters",
        },
      },
      testimonial: {
        quote:
          "As part of a digital transformation project we used automated a candidate screening and shortlisting process. When candidates applied for positions they were automatically uploaded into our ATS.\n\nAI software automatically parses each resume, extracting and organizing important information such as skills and experience. Use pre-defined criteria the AI screens each candidate against the criteria and scores them accordingly. Automatic emails are then sent out to the shortlisted candidates. We also added on an automated text follow up system.\n\nThis automated process speeded up our recruitment process by over 90%, ensured fair and unbiased candidate screening and allowed our business to focus on closing placements.",
        attribution: "Recruitment CEO | US",
      },
      cta: {
        heading: "Start with Clarity",
        body: "Every recruitment firm has different processes, markets, and growth challenges.",
        boldText:
          "The AI Readiness Assessment provides a structured approach to identifying where AI and automation will deliver measurable operational improvements.",
      },
    },
  },

  {
    slug: "legal-services",
    title: "AI & Automation for Legal Services",
    shortTitle: "Legal Services",
    description:
      "Streamline contract management, compliance tracking, matter lifecycle workflows, and document automation to reduce risk, improve consistency, and free fee-earners to focus on high-value advisory work.",
    icon: "Gavel",
    targetKeyword: "automation for legal services",
    relatedFunctional: ["legal-automation", "operations-automation"],
  },
  {
    slug: "mssps",
    title: "AI & Automation for MSSPs",
    shortTitle: "MSSPs",
    description:
      "Automate alert triage, incident response playbooks, multi-tenant workflows, and compliance reporting to scale security operations without proportional analyst headcount growth.",
    icon: "ShieldAlert",
    targetKeyword: "automation for MSSPs",
    relatedFunctional: ["cybersecurity-automation", "operations-automation"],
  },
  {
    slug: "financial-services",
    title: "AI & Automation for Financial Services",
    shortTitle: "Financial Services",
    description:
      "Automate mortgage processing, AML/KYC compliance, Consumer Duty monitoring, and back-office operations to meet regulatory requirements while improving member experience and operational efficiency.",
    icon: "Landmark",
    targetKeyword: "automation for financial services",
    relatedFunctional: ["finance-automation", "operations-automation"],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const allUseCases = [...functionalUseCases, ...sectorUseCases]

export function getUseCaseBySlug(slug: string): UseCaseEntry | undefined {
  return allUseCases.find((uc) => uc.slug === slug)
}

export function getUseCaseSlugs(): string[] {
  return allUseCases.map((uc) => uc.slug)
}

export function getFunctionalBySlug(slug: string): UseCaseEntry | undefined {
  return functionalUseCases.find((uc) => uc.slug === slug)
}

export function getSectorBySlug(slug: string): UseCaseEntry | undefined {
  return sectorUseCases.find((uc) => uc.slug === slug)
}

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
}
