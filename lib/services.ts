import fs from "fs"
import path from "path"

export interface ServiceFrontmatter {
  title: string
  slug: string
  description: string
  tagline: string
  icon: string
  order: number
  highlights: string[]
  stat: string
  statLabel: string
}

export interface ServiceContent {
  frontmatter: ServiceFrontmatter
  content: string
}

function parseFrontmatter(fileContent: string): {
  frontmatter: Record<string, unknown>
  content: string
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = fileContent.match(frontmatterRegex)

  if (!match) {
    return { frontmatter: {}, content: fileContent }
  }

  const rawFrontmatter = match[1]
  const content = match[2].trim()
  const frontmatter: Record<string, unknown> = {}

  let currentKey = ""
  let inArray = false
  let arrayItems: string[] = []

  for (const line of rawFrontmatter.split("\n")) {
    if (inArray) {
      if (line.trim().startsWith("- ")) {
        arrayItems.push(line.trim().replace(/^- /, "").replace(/^"|"$/g, ""))
      } else {
        frontmatter[currentKey] = arrayItems
        inArray = false
        arrayItems = []
      }
    }

    if (!inArray) {
      const keyValueMatch = line.match(/^(\w+):\s*(.*)$/)
      if (keyValueMatch) {
        const key = keyValueMatch[1]
        const value = keyValueMatch[2].trim()

        if (value === "") {
          // Next lines are array items
          currentKey = key
          inArray = true
          arrayItems = []
        } else {
          // Clean quoted strings
          frontmatter[key] = value.replace(/^"|"$/g, "")
          // Parse numbers
          if (!Number.isNaN(Number(frontmatter[key]))) {
            frontmatter[key] = Number(frontmatter[key])
          }
        }
      }
    }
  }

  // Close any open array
  if (inArray) {
    frontmatter[currentKey] = arrayItems
  }

  return { frontmatter, content }
}

const servicesDirectory = path.join(process.cwd(), "content/services")

export function getAllServices(): ServiceContent[] {
  const files = fs.readdirSync(servicesDirectory).filter((f) => f.endsWith(".md"))

  const services = files.map((filename) => {
    const filePath = path.join(servicesDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { frontmatter, content } = parseFrontmatter(fileContent)

    return {
      frontmatter: frontmatter as unknown as ServiceFrontmatter,
      content,
    }
  })

  return services.sort((a, b) => a.frontmatter.order - b.frontmatter.order)
}

export function getServiceBySlug(slug: string): ServiceContent | null {
  const services = getAllServices()
  return services.find((s) => s.frontmatter.slug === slug) || null
}

export function getServiceSlugs(): string[] {
  const services = getAllServices()
  return services.map((s) => s.frontmatter.slug)
}
