// Snooze Button Roast — writes the one-line roast to /output/entry.txt.
// The entry text lives in entry.txt next to this file; the program copies it
// verbatim so the judge sees exactly the line as written (128 characters).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry);
