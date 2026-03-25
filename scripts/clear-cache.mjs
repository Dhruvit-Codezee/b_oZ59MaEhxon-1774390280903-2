import { rmSync, existsSync } from 'fs'
import { join } from 'path'

const root = join(import.meta.dirname, '..')

const dirs = [
  join(root, '.next'),
  join(root, 'node_modules', '.cache'),
]

for (const dir of dirs) {
  if (existsSync(dir)) {
    console.log(`Removing: ${dir}`)
    rmSync(dir, { recursive: true, force: true })
    console.log(`Removed: ${dir}`)
  } else {
    console.log(`Not found (skipping): ${dir}`)
  }
}

console.log('Cache cleared successfully.')
