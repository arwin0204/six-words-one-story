// Six Words, One Story — make.fun bounty entry
//
// A deterministic program: it writes one original six-word story to
// /output/entry.txt. No randomness, no network, no clock, no files read
// from outside this repository — the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The story. Six words, 39 characters:
// A grandmother's recipe is lost with her — until the final word
// turns the loss around: something of it survived after all.
const STORY = "Grandma's recipe died with her. Almost.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, STORY, "utf8");

console.log(`Wrote ${STORY.length} characters to ${outFile}`);
console.log(STORY);
