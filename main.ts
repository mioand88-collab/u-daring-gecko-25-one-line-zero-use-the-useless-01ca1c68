import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I can call down lightning from a clear blue sky — but only onto the exact spot I was standing five seconds ago.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
