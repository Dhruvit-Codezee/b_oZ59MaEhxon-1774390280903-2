import fs from "fs"
import path from "path"
import matter from "gray-matter"

/* ── Types ──────────────────────────────────────────────────────────── */

export interface BlogPostMeta {
  title: string
  slug: string
  description: string
  date: string          // ISO date string (YYYY-MM-DD)
  author: string
  tags: string[]
  image?: string        // optional hero/og image path
  readingTime: number   // auto-calculated minutes
}

export interface BlogPost {
  meta: BlogPostMeta
  content: string       // raw MDX string
}

/* ── Helpers ─────────────────────────────────────────────────────────── */

const blogDirectory = path.join(process.cwd(), "content/blog")

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

function parsePost(filename: string): BlogPost {
  const filePath = path.join(blogDirectory, filename)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  const slug = filename.replace(/\.mdx?$/, "")

  return {
    meta: {
      title: data.title ?? "Untitled",
      slug,
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString().split("T")[0],
      author: data.author ?? "Automaly",
      tags: Array.isArray(data.tags) ? data.tags : [],
      image: data.image ?? undefined,
      readingTime: calculateReadingTime(content),
    },
    content,
  }
}

/* ── Public API ──────────────────────────────────────────────────────── */

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return []

  const files = fs
    .readdirSync(blogDirectory)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))

  const posts = files.map(parsePost)

  // Sort newest first
  return posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((p) => p.meta.slug === slug) ?? null
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.meta.slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  for (const post of getAllPosts()) {
    for (const tag of post.meta.tags) {
      tags.add(tag)
    }
  }
  return Array.from(tags).sort()
}

export function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  limit = 3
): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts
    .filter(
      (p) =>
        p.meta.slug !== currentSlug &&
        p.meta.tags.some((t) => tags.includes(t))
    )
    .slice(0, limit)
    .map((p) => p.meta)
}
