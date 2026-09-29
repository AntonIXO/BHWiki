import { substances } from "../src/lib/content";
import { contentHash } from "../src/lib/publication-metadata";
const requested = process.argv[2];
const selected = requested ? substances.filter((s) => s.slug === requested) : substances;
if (!selected.length) throw new Error(`Unknown article: ${requested}`);
console.log(JSON.stringify(Object.fromEntries(selected.map((s) => [s.slug, contentHash(s)])), null, 2));
