import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogDir = "/vercel/share/v0-project/content/blog"
const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".mdx") || f.endsWith(".md"))

const withImage = []
const withoutImage = []

for (const file of files) {
  const raw = fs.readFileSync(path.join(blogDir, file), "utf-8")
  const { data } = matter(raw)
  const slug = file.replace(/\.mdx?$/, "")
  const title = data.title ?? slug

  if (data.image && data.image.trim() !== "") {
    withImage.push({ title, slug, image: data.image })
  } else {
    withoutImage.push({ title, slug })
  }
}

console.log(`\n=== BLOGS WITHOUT IMAGES (${withoutImage.length}/${files.length}) ===\n`)
for (const p of withoutImage) {
  console.log(`  - ${p.title}  [${p.slug}]`)
}

console.log(`\n=== BLOGS WITH IMAGES (${withImage.length}/${files.length}) ===\n`)
for (const p of withImage) {
  console.log(`  - ${p.title}  [${p.image}]`)
}
