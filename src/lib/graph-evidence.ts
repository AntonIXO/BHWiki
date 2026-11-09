import { evidenceKey } from "./research";
import type { Hyperedge, KnowledgeGraphData, Substance, Tag } from "./types";

export type GraphEvidenceArticle = Pick<Substance,
  "slug" | "description" | "effects" | "outcomes" | "mechanisms" | "claims" | "interactions" | "references" | "cautions">;

/** Match known names at word boundaries; ambiguous aliases never choose an entity. */
export function conceptMentionMatcher(concepts: Tag[]): (text: string) => Tag[] {
  const names = new Map<string, Set<string>>();
  const normalize = (text: string) => text.normalize("NFKC").toLowerCase().replace(/[\s‐‑–—-]+/g, " ");
  for (const concept of concepts) {
    for (const value of [concept.id.replaceAll("-", " "), concept.label, ...(concept.aliases ?? [])]) {
      const name = normalize(value).trim();
      if (name.length < 4 && !(name.length >= 3 && /^[A-Z][A-Z0-9-]+$/.test(value))) continue;
      names.set(name, new Set([...(names.get(name) ?? []), concept.id]));
    }
  }
  const unambiguous = new Map([...names].filter(([, ids]) => ids.size === 1).map(([name, ids]) => [name, [...ids][0]]));
  const alternatives = [...unambiguous.keys()].sort((a, b) => b.length - a.length)
    .map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!alternatives.length) return () => [];
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}])(?:${alternatives.join("|")})(?![\\p{L}\\p{N}])`, "gu");
  return text => {
    const found = new Set([...normalize(text).matchAll(pattern)].map(match => unambiguous.get(match[0])));
    return concepts.filter(concept => found.has(concept.id));
  };
}

/** Related definitions and named mentions are navigation, not causal claims. */
export function conceptGraphRelationships(concepts: Tag[]): Hyperedge[] {
  const byId = new Map(concepts.map(concept => [concept.id, concept]));
  const mentions = conceptMentionMatcher(concepts);
  const edges = new Map<string, Hyperedge>();
  for (const concept of concepts) {
    const targets = new Map([
      ...mentions(concept.description).filter(other => other.id !== concept.id).map(other => [other.id, "concept mention"] as const),
      ...(concept.relatedIds ?? []).map(id => [id, "related concept"] as const),
    ]);
    for (const [target, relation] of targets) {
      const other = byId.get(target);
      if (!other || target === concept.id) continue;
      const pair = [concept.id, target].sort();
      const id = `concept-${pair.join("--")}`;
      if (edges.has(id)) continue;
      const sourceUrls = concept.sourceUrls ?? [];
      edges.set(id, { id, label: `${concept.label} / ${other.label}`, relation,
        members: [`tag:${concept.id}`, `tag:${target}`],
        memberRoles: { [`tag:${concept.id}`]: "definition", [`tag:${target}`]: relation === "related concept" ? "related definition" : "mentioned concept" },
        description: relation === "related concept" ? `${concept.label} explicitly lists ${other.label} as a related concept.` : concept.description,
        sourceUrl: sourceUrls[0] ?? "", sourceUrls });
    }
  }
  return [...edges.values()];
}

function sourceIdentity(value: string): string {
  const url = new URL(value);
  const doi = /^(?:dx\.)?doi\.org$/i.test(url.hostname);
  if (doi) return `doi:${decodeURIComponent(url.pathname.slice(1)).replace(/\/$/, "").toLowerCase()}`;
  url.hash = "";
  return url.toString().replace(/\/$/, "");
}

/** A shared citation is a bibliographic link, never an inferred outcome. */
export function sharedSourceRelationships(articles: GraphEvidenceArticle[], concepts: Tag[]): Hyperedge[] {
  const bySource = new Map<string, Tag[]>();
  for (const concept of concepts) {
    for (const source of concept.sourceUrls ?? []) {
      const key = sourceIdentity(source);
      bySource.set(key, [...(bySource.get(key) ?? []), concept]);
    }
  }
  return articles.flatMap(article => article.references.flatMap(reference => {
    const sources = [reference.url,
      ...(reference.doi ? [`https://doi.org/${reference.doi}`] : []),
      ...(reference.pmid ? [`https://pubmed.ncbi.nlm.nih.gov/${reference.pmid}/`] : []),
    ];
    const matched = new Map(sources.flatMap(source => (bySource.get(sourceIdentity(source)) ?? []).map(concept => [concept.id, concept] as const)));
    return [...matched.values()].map(concept => ({
      id: `citation-${article.slug}--${reference.id}--${concept.id}`,
      label: `${concept.label}: shared source`, relation: "shared source",
      evidenceKey: evidenceKey(article.slug, "source", reference),
      description: `This article and the definition of ${concept.label} cite the same publication. This bibliographic link does not assert a measured finding about this endpoint.`,
      members: [`substance:${article.slug}`, `tag:${concept.id}`],
      memberRoles: { [`substance:${article.slug}`]: "citing article", [`tag:${concept.id}`]: "definition citing the same source" },
      sourceUrl: reference.url, sourceUrls: [reference.url],
    }));
  }));
}

/** Project recorded assertions, preserving their sources and complete member roles. */
export function evidenceGraphRelationships(articles: GraphEvidenceArticle[], available: Set<string>, concepts: Tag[] = []): Hyperedge[] {
  const edges: Hyperedge[] = [];
  const mentions = conceptMentionMatcher(concepts);
  for (const article of articles) {
    const substance = `substance:${article.slug}`;
    const concept = (id: string) => available.has(`tag:${id}`) ? `tag:${id}` : id;
    const add = (kind: "effect" | "outcome" | "mechanism" | "claim" | "interaction" | "caution" | "source", record: object & { id?: string },
      label: string, description: string, participants: [string, string][], sourceIds: string[], relation = `${kind} observation`) => {
      const roles = Object.fromEntries(participants);
      for (const mentioned of mentions(`${label}\n${description}`)) {
        const id = `tag:${mentioned.id}`;
        if (!(id in roles)) roles[id] = "mentioned concept";
      }
      const members = Object.keys(roles);
      // Do not turn a partially resolved assertion into a different claim.
      if (members.length < 2 || members.some(id => !available.has(id))) return;
      const sourceUrls = [...new Set(sourceIds.flatMap(id => article.references.filter(r => r.id === id && r.url).map(r => r.url)))];
      if (!sourceUrls.length) return;
      const key = evidenceKey(article.slug, kind, record);
      edges.push({ id: `evidence-${key.replaceAll("~", "--")}`, evidenceKey: key, label,
        relation,
        description, members, memberRoles: roles, sourceUrl: sourceUrls[0], sourceUrls });
    };
    for (const kind of ["effect", "outcome"] as const) {
      for (const observation of kind === "effect" ? article.effects : article.outcomes) {
        add(kind, observation, observation.name,
          [observation.description, observation.population, observation.exposure, observation.instrument].filter(Boolean).join("\n\n"),
          [[substance, "studied substance"], [concept(observation.conceptId), "recorded endpoint"]], [observation.sourceId]);
      }
    }
    for (const mechanism of article.mechanisms) {
      add("mechanism", mechanism, mechanism.title, mechanism.description,
        [[substance, "studied substance"], ...(mechanism.conceptId ? [[concept(mechanism.conceptId), "mechanistic concept"] as [string, string]] : [])], [mechanism.sourceId]);
    }
    for (const claim of article.claims) {
      add("claim", claim, claim.assertion, [claim.context, claim.limitation].filter(Boolean).join("\n\n"),
        claim.participants.map(p => [concept(p.entityId), p.role]), claim.sourceIds, claim.relation);
    }
    for (const interaction of article.interactions) {
      const target = interaction.otherSlug ? `substance:${interaction.otherSlug}` : interaction.targetClassId ? concept(interaction.targetClassId) : undefined;
      add("interaction", interaction, interaction.name,
        [interaction.summary, interaction.mechanism, interaction.context].filter(Boolean).join("\n\n"),
        [[substance, "origin substance"], ...(target ? [[target, "interaction counterpart"] as [string, string]] : [])], [interaction.sourceId]);
    }
    for (const caution of article.cautions) add("caution", caution, caution.title, caution.description,
      [[substance, "article context"]], [caution.sourceId], "concept mentions");
    for (const reference of article.references) {
      const citedParagraphs = article.description.split(/\n\s*\n/)
        .filter(paragraph => paragraph.includes(`[${reference.id}]`));
      add("source", reference, reference.title, [reference.insight, ...citedParagraphs].join("\n\n"),
        [[substance, "citing article"]], [reference.id], "source mentions");
    }
  }
  return edges;
}

/** One linkage projection for directory counts, article lists and graph navigation. */
export function completeKnowledgeGraph(data: KnowledgeGraphData, articles: GraphEvidenceArticle[]): KnowledgeGraphData {
  const available = new Set([
    ...data.substances.map(s => `substance:${s.slug}`),
    ...data.tags.map(t => `tag:${t.id}`),
  ]);
  const projected = evidenceGraphRelationships(articles, available, data.tags);
  // A record-level assertion already provides the more precise link for this pair.
  const assertedPairs = new Set([...data.hyperedges, ...projected].flatMap(edge =>
    edge.members.filter(id => id.startsWith("substance:")).flatMap(substance =>
      edge.members.filter(id => id.startsWith("tag:")).map(concept => `${substance}|${concept}`))));
  const citations = sharedSourceRelationships(articles, data.tags).filter(edge =>
    edge.members.every(id => available.has(id)) && !assertedPairs.has(edge.members.join("|")));
  const hyperedges = [...data.hyperedges, ...projected, ...citations, ...conceptGraphRelationships(data.tags)];
  const links = new Map(data.substances.map(s => [s.slug, new Set(s.tags)]));
  for (const edge of hyperedges) {
    const concepts = edge.members.filter(id => id.startsWith("tag:")).map(id => id.slice(4));
    for (const member of edge.members) {
      if (!member.startsWith("substance:")) continue;
      const linked = links.get(member.slice(10));
      for (const id of concepts) linked?.add(id);
    }
  }
  return { ...data, hyperedges, substances: data.substances.map(s => ({ ...s, linkedConceptIds: [...links.get(s.slug)!] })) };
}
