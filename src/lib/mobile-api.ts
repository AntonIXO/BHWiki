import type { EvidenceRecord } from "./research-types";
import type { CatalogSubstance, Substance, Tag, TagKind } from "./types";

export const MOBILE_API_VERSION = 1 as const;

export type MobileFacet = {
  id: string;
  label: string;
  kind?: TagKind;
  count: number;
};

export type MobileCatalogResponse = {
  version: typeof MOBILE_API_VERSION;
  items: CatalogSubstance[];
  total: number;
  nextOffset: number | null;
  facets: {
    categories: MobileFacet[];
    tags: MobileFacet[];
  };
};

export type MobileSubstanceResponse = {
  version: typeof MOBILE_API_VERSION;
  item: Substance;
  related: CatalogSubstance[];
};

export type MobileEvidenceResponse = {
  version: typeof MOBILE_API_VERSION;
  item: EvidenceRecord;
};

export type MobileErrorCode = "invalid_request" | "not_found" | "unavailable";

export function validMobileSlug(value: string): boolean {
  return /^[a-z0-9][a-z0-9-]{0,120}$/.test(value);
}

function facetSort(a: MobileFacet, b: MobileFacet): number {
  return a.label.localeCompare(b.label, "en", { sensitivity: "base" }) || a.id.localeCompare(b.id);
}

function facetsFor(items: CatalogSubstance[], concepts: Tag[]): MobileCatalogResponse["facets"] {
  const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
  const categories = new Map<string, MobileFacet>();
  const tags = new Map<string, MobileFacet>();

  for (const item of items) {
    const category = categories.get(item.category);
    if (category) category.count += 1;
    else categories.set(item.category, { id: item.category, label: item.category, count: 1 });

    for (const tagId of new Set(item.tags)) {
      const concept = conceptById.get(tagId);
      const tag = tags.get(tagId);
      if (tag) tag.count += 1;
      else {
        tags.set(tagId, {
          id: tagId,
          label: concept?.label ?? tagId,
          ...(concept ? { kind: concept.kind } : {}),
          count: 1,
        });
      }
    }
  }

  return {
    categories: [...categories.values()].sort(facetSort),
    tags: [...tags.values()].sort(facetSort),
  };
}

export function mobileCatalogResponse(
  items: CatalogSubstance[],
  concepts: Tag[],
  options: { offset: number; limit: number },
): MobileCatalogResponse {
  const offset = Number.isInteger(options.offset) ? Math.max(0, options.offset) : 0;
  const limit = Number.isInteger(options.limit) ? Math.min(500, Math.max(1, options.limit)) : 20;
  const page = items.slice(offset, offset + limit);
  const nextOffset = offset + limit < items.length ? offset + limit : null;

  return {
    version: MOBILE_API_VERSION,
    items: page,
    total: items.length,
    nextOffset,
    facets: facetsFor(items, concepts),
  };
}

export function mobileSubstanceResponse(
  item: Substance,
  related: CatalogSubstance[],
): MobileSubstanceResponse {
  return { version: MOBILE_API_VERSION, item, related };
}

export function mobileEvidenceResponse(item: EvidenceRecord): MobileEvidenceResponse {
  return { version: MOBILE_API_VERSION, item };
}

export function mobileError(code: MobileErrorCode, message: string): { error: { code: MobileErrorCode; message: string } } {
  return { error: { code, message } };
}
