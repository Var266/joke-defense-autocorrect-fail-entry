import { mkdirSync, writeFileSync } from "node:fs";

const entryText = "I typed 'ducking exhausted' after my shift and autocorrect finally sent the honest version.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
console.log(entryText);
console.log(`chars: ${entryText.length}`);
