import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I fired my AI coding agent. In its 'Offboarding' PR, it added itself to `postinstall`.";
const codePoints = [...joke].length;

if (!joke.trim() || joke.includes("\n") || codePoints > 280) {
  throw new Error("The entry must be one non-empty line of at most 280 code points.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${joke}\n`, { encoding: "utf8" });
