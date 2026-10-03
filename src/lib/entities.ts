import { catalog as bundledCatalog, catalogBySlug as bundledCatalogBySlug, catalogByTag as bundledCatalogByTag, conceptById as bundledConceptById, tags as bundledTags } from "./content";
import { conceptPath, type CatalogSubstance, type Tag } from "./types";

export type EntityRecord = { href?: string; label: string };

export type EntityIndex = {
  catalogBySlug: Map<string, CatalogSubstance>;
  conceptById: Map<string, Tag>;
  substanceLink: (id: string) => EntityRecord;
  graphMember: (member: string) => EntityRecord;
  conceptsFor: (ids: string[]) => Tag[];
  taggedCount: (tagId: string) => number;
  relatedSubstances: (slug: string, tagIds: string[], limit?: number) => { item: CatalogSubstance; shared: number }[];
};

function linkFor(concept: Tag | undefined, substance: CatalogSubstance | undefined, fallback: string): EntityRecord {
  if (concept) return { href: conceptPath(concept), label: concept.label };
  if (substance) return { href: `/substances/${substance.slug}`, label: substance.name };
  return { label: fallback };
}

function createIndex(
  catalog: CatalogSubstance[],
  catalogBySlug: Map<string, CatalogSubstance>,
  conceptById: Map<string, Tag>,
  catalogByTag: Map<string, CatalogSubstance[]>,
): EntityIndex {
  const order = new Map(catalog.map((substance, index) => [substance.slug, index]));
  return {
    catalogBySlug,
    conceptById,
    substanceLink(id) {
      const entityId = id.replace(/^(substance|tag|concept):/, "");
      const substance = catalogBySlug.get(entityId);
      const concept = conceptById.get(entityId);
      if (id.startsWith("substance:") || (!concept && substance)) {
        return substance ? { href: `/substances/${substance.slug}`, label: substance.name } : { label: entityId };
      }
      return concept ? { href: conceptPath(concept), label: concept.label } : { label: entityId };
    },
    graphMember(member) {
      if (member.startsWith("tag:")) return linkFor(conceptById.get(member.slice(4)), undefined, member.slice(4));
      if (member.startsWith("substance:")) {
        const substance = catalogBySlug.get(member.slice("substance:".length));
        return substance ? { href: `/substances/${substance.slug}`, label: substance.name } : { label: member };
      }
      return { label: member };
    },
    conceptsFor(ids) {
      return ids.flatMap((id) => {
        const concept = conceptById.get(id);
        return concept ? [concept] : [];
      });
    },
    taggedCount(tagId) {
      return new Set((catalogByTag.get(tagId) ?? []).map((item) => item.slug)).size;
    },
    relatedSubstances(slug, tagIds, limit = 3) {
      const counts = new Map<string, { item: CatalogSubstance; shared: number }>();
      for (const tagId of tagIds) {
        for (const item of catalogByTag.get(tagId) ?? []) {
          if (item.slug === slug) continue;
          const current = counts.get(item.slug);
          if (current) current.shared += 1;
          else counts.set(item.slug, { item, shared: 1 });
        }
      }
      return [...counts.values()]
        .sort((a, b) => b.shared - a.shared || (order.get(a.item.slug) ?? 0) - (order.get(b.item.slug) ?? 0))
        .slice(0, limit);
    },
  };
}

function mapsFor(catalog: CatalogSubstance[], concepts: Tag[]) {
  const catalogBySlug = new Map(catalog.map((substance) => [substance.slug, substance]));
  const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
  const catalogByTag = new Map<string, CatalogSubstance[]>();
  for (const substance of catalog) {
    for (const tagId of substance.tags) {
      const list = catalogByTag.get(tagId);
      if (list) list.push(substance);
      else catalogByTag.set(tagId, [substance]);
    }
  }
  return { catalogBySlug, conceptById, catalogByTag };
}

let bundledIndex: EntityIndex | undefined;

/** Resolve labels from one pass over the catalog. Reuses the bundled indexes when those arrays are passed through. */
export function indexEntities(catalog: CatalogSubstance[], concepts: Tag[]): EntityIndex {
  if (catalog === bundledCatalog && concepts === bundledTags) {
    bundledIndex ??= createIndex(bundledCatalog, bundledCatalogBySlug, bundledConceptById, bundledCatalogByTag);
    return bundledIndex;
  }
  const maps = mapsFor(catalog, concepts);
  return createIndex(catalog, maps.catalogBySlug, maps.conceptById, maps.catalogByTag);
}
