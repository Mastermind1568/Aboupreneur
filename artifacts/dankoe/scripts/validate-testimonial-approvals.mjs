import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const registerPath = path.join(srcRoot, "content", "testimonialApprovals.ts");
const registerSource = fs.readFileSync(registerPath, "utf8");

const approvedQuotes = [
  ...registerSource.matchAll(/approvedQuote:\s*(?:\n\s*)?"([^"]+)"/g),
].map((match) => match[1]);

if (approvedQuotes.length === 0) {
  throw new Error("No testimonial quotes were found in the approval register.");
}

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(absolutePath);
    return /\.(ts|tsx)$/.test(entry.name) ? [absolutePath] : [];
  });
}

const violations = [];

for (const filePath of sourceFiles(srcRoot)) {
  if (filePath === registerPath) continue;
  const source = fs.readFileSync(filePath, "utf8");

  if (/\btestimonial\s*:\s*["'`]/.test(source)) {
    violations.push(`${path.relative(root, filePath)} contains inline testimonial copy`);
  }

  for (const quote of approvedQuotes) {
    if (source.includes(quote)) {
      violations.push(
        `${path.relative(root, filePath)} duplicates a quote from the approval register`,
      );
    }
  }
}

if (violations.length > 0) {
  throw new Error(
    `Testimonials must be resolved through testimonialApprovals:\n- ${violations.join("\n- ")}`,
  );
}

console.log(`Validated ${approvedQuotes.length} testimonial approval records.`);