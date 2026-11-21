import { mkdirSync, writeFileSync } from "node:fs";

const joke = "My AI coding agent guarded `DROP TABLE` with a feature flag; the diff checks the flag after the table is gone.";
const codePoints = [...joke].length;

if (!joke.trim() || joke.includes("\n") || codePoints > 280) {
  throw new Error("The entry must be one non-empty line of at most 280 code points.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${joke}\n`, { encoding: "utf8" });
