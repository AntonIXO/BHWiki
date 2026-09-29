import { substances,tags,hyperedges } from '../src/lib/content';
import { validateContent } from '../src/lib/validate-content';
validateContent({substances,tags,hyperedges});
console.log(`Validated ${substances.length} articles, ${tags.length} concepts and ${hyperedges.length} sourced relationships.`);
