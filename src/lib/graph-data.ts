import type { CatalogSubstance, Hyperedge, KnowledgeGraphData, Tag } from "./types";

export function graphLimit(limit = 200): number {
  return Number.isFinite(limit) ? Math.max(1, Math.min(200, Math.floor(limit))) : 200;
}

export function normalizeGraphFocus(focus?: string): string | undefined {
  return focus?.replace(/^(substance|tag):/, "") || undefined;
}

/** Whole hyperedges are admitted together. A small limit never chops qualifiers off a claim. */
export function boundKnowledgeGraph(data: KnowledgeGraphData, options: { focus?: string; limit?: number } = {}): KnowledgeGraphData {
  const limit = graphLimit(options.limit);
  const focus = normalizeGraphFocus(options.focus);
  const substances = new Map(data.substances.map((s) => [`substance:${s.slug}`, s]));
  const tags = new Map(data.tags.map((t) => [`tag:${t.id}`, t]));
  const available = new Set([...substances.keys(), ...tags.keys()]);
  const focused = focus ? [...available].find((id) => id.slice(id.indexOf(":") + 1) === focus) : undefined;
  const selected = new Set<string>(focused ? [focused] : []);
  const hyperedges: Hyperedge[] = [];
  const candidates = focus ? data.hyperedges.filter((edge) => edge.members.includes(focused ?? "")) : data.hyperedges;
  let truncated = Boolean(data.truncated);
  for (const edge of candidates) {
    if (edge.members.some((id) => !available.has(id))) { truncated = true; continue; }
    const additions = edge.members.filter((id) => !selected.has(id));
    if (selected.size + additions.length > limit) { truncated = true; continue; }
    edge.members.forEach((id) => selected.add(id));
    hyperedges.push(edge);
  }
  // Classification neighbors are navigable even when no authored claim connects
  // them. They remain explicit concept memberships, never fabricated evidence edges.
  if (focused?.startsWith("substance:")) {
    for (const tagId of substances.get(focused)?.tags ?? []) {
      const id = `tag:${tagId}`;
      if (!available.has(id) || selected.has(id)) continue;
      if (selected.size >= limit) { truncated = true; continue; }
      selected.add(id);
    }
  } else if (focused?.startsWith("tag:")) {
    const tagId = focused.slice(4);
    for (const [id, substance] of substances) {
      if (!substance.tags.includes(tagId) || selected.has(id)) continue;
      if (selected.size >= limit) { truncated = true; continue; }
      selected.add(id);
    }
  }
  if (!focus) {
    for (const id of available) {
      if (selected.size >= limit) { if (!selected.has(id)) truncated = true; continue; }
      selected.add(id);
    }
  }
  const selectedTags: Tag[] = [...tags].filter(([id]) => selected.has(id)).map(([, tag]) => tag);
  const tagIds = new Set(selectedTags.map((t) => t.id));
  const selectedSubstances: CatalogSubstance[] = [...substances].filter(([id]) => selected.has(id)).map(([, s]) => ({ ...s, tags: s.tags.filter((id) => tagIds.has(id)) }));
  return { substances: selectedSubstances, tags: selectedTags, hyperedges, truncated };
}

/** Preserve omission information before fetching complete membership rows. */
export function selectGraphCandidates<T extends { memberCount: number }>(rows: T[], limit: number): { edges: T[]; truncated: boolean } {
  const bound = graphLimit(limit);
  return { edges: rows.filter((row) => row.memberCount <= bound).slice(0, bound),
    truncated: rows.length > bound || rows.some((row) => row.memberCount > bound) };
}
