import { readFileSync } from 'node:fs';
import { substances,tags,hyperedges } from '../src/lib/content';
import { validateContent } from '../src/lib/validate-content';
import { validateCanonicalSources,validateEditorialMetadata } from '../src/lib/publication-metadata';
validateContent({substances,tags,hyperedges});
validateCanonicalSources(substances.flatMap(s=>s.references));
validateEditorialMetadata(substances,JSON.parse(readFileSync(new URL('../content/editorial.json',import.meta.url),'utf8')));
console.log(`Validated ${substances.length} articles, ${tags.length} concepts, ${hyperedges.length} sourced relationships and publication metadata.`);
