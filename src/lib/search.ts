import type { CatalogSubstance, Tag } from "./types";

export type CatalogFilters = {
  q?: string;
  category?: string;
  tags?: string[];
  sort?: "name" | "updated";
};

export type SearchConcept = Pick<Tag, "id" | "label" | "kind" | "aliases">;

type PreparedSearch = {
  substances: CatalogSubstance[];
  concepts: SearchConcept[];
  text: Map<CatalogSubstance, string>;
};

let prepared: PreparedSearch | null = null;

function searchText(substances: CatalogSubstance[], concepts: SearchConcept[]): Map<CatalogSubstance, string> {
  if (prepared && prepared.substances === substances && prepared.concepts === concepts) return prepared.text;
  const names = new Map(concepts.map((concept) => [concept.id, [concept.label, ...(concept.aliases ?? [])].join(" ")]));
  const text = new Map<CatalogSubstance, string>();
  for (const substance of substances) {
    const conceptsForSubstance = substance.tags.map((id) => names.get(id) || id);
    text.set(substance, [substance.name, ...substance.aliases, ...conceptsForSubstance].join(" ").toLocaleLowerCase("en"));
  }
  prepared = { substances, concepts, text };
  return text;
}

/** All selected concepts must apply. Aliases include source-checked common spellings. */
export function searchCatalog(substances: CatalogSubstance[], concepts: SearchConcept[], filters: CatalogFilters = {}): CatalogSubstance[] {
  const query = (filters.q || "").trim().toLocaleLowerCase("en");
  const selected = filters.tags ?? [];
  const text = query ? searchText(substances, concepts) : null;
  const matches = substances.filter((substance) => {
    if (filters.category && substance.category !== filters.category) return false;
    if (!selected.every((tag) => substance.tags.includes(tag))) return false;
    if (query && !text!.get(substance)!.includes(query)) return false;
    return true;
  });
  if (filters.sort === "updated") {
    matches.sort((a, b) => b.reviewedAt.localeCompare(a.reviewedAt) || a.name.localeCompare(b.name));
  } else {
    matches.sort((a, b) => a.name.localeCompare(b.name));
  }
  return matches;
}
