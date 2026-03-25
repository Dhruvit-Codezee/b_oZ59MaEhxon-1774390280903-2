import { rm } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd());

const dirs = [
  join(root, ".next"),
  join(root, "node_modules", ".cache"),
];

for (const dir of dirs) {
  try {
    await rm(dir, { recursive: true, force: true });
    console.log("Removed:", dir);
  } catch (e) {
    console.log("Skip (not found):", dir);
  }
}

console.log("Cache cleared successfully.");
