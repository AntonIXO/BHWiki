import { loadCorpus } from "./content-markdown";
import { validateContent } from "./validate-content";
import { toCatalogSubstance, type CatalogSubstance, type Substance, type Tag } from "./types";

const corpus = loadCorpus();
validateContent(corpus);

export const tags = corpus.tags;
export const substances = corpus.substances;
export const hyperedges = corpus.hyperedges;

export const catalog: CatalogSubstance[] = substances.map(toCatalogSubstance);
export const substanceBySlug = new Map<string, Substance>(substances.map((substance) => [substance.slug, substance]));
export const catalogBySlug = new Map<string, CatalogSubstance>(catalog.map((substance) => [substance.slug, substance]));
export const conceptById = new Map<string, Tag>(tags.map((tag) => [tag.id, tag]));

export const catalogByTag = new Map<string, CatalogSubstance[]>();
for (const substance of catalog) {
  for (const tagId of substance.tags) {
    const list = catalogByTag.get(tagId);
    if (list) list.push(substance);
    else catalogByTag.set(tagId, [substance]);
  }
}
