export type TagKind = "class" | "chemical-family" | "mechanism" | "target" | "neurotransmitter" | "enzyme" | "effect" | "outcome" | "exposure" | "legal";
export type Tag = { id: string; label: string; kind: TagKind; description: string; aliases?: string[]; sourceUrls?: string[]; relatedIds?: string[] };
export type Concept = Tag;
export type Reference = { id: string; title: string; authors: string; year: number; url: string; kind: string; insight: string; limitation: string; pmid?: string; doi?: string; funding?: string };
export type EditorialStatus = "sourced-draft" | "editorially-reviewed";
export type Observation = {
  conceptId: string; name: string; direction: "Increased" | "Decreased" | "Variable";
  evidence: "Human research" | "Subjective reports" | "Limited research";
  description: string; sourceId: string; population: string; exposure: string;
  instrument: string | null; magnitude: string | null;
};
export type DoseContext = {
  label: string; amount: string; quantity: number | null; quantityMax: number | null; unit: string;
  ingredient: string; formulation: string; route: string; frequency: string; duration: string;
  population: string; purpose: string; sourceCategory: "research" | "approved-label" | "reference" | "community";
  note: string; sourceId: string;
};
export type PKObservation = {
  id: string; analyte: string; route: string; formulation: string; population: string;
  endpoint: "elimination-half-life"; statistic: "approximate" | "study-mean" | "reported-range" | "not-established";
  value: number | null; low: number | null; high: number | null; unit: "hours";
  context: string; sourceId: string; modelEligible: boolean;
};
export type Claim = {
  id: string; assertion: string; relation: string; participants: { entityId: string; role: string }[];
  context: string; sourceIds: string[]; conflictingSourceIds: string[];
  assessment: "not-formally-assessed"; limitation: string;
};
export type Substance = {
  slug: string; name: string; subtitle: string; summary: string; description: string;
  aliases: string[]; formula: string; molecularWeight: string; pubchemCid: number; smiles: string;
  category: string; tags: string[]; accent: string;
  evidenceNote: string; reviewedAt: string; editorialStatus: EditorialStatus;
  halfLife: { label: string; low: number | null; high: number | null; context: string; sourceId: string; observationId: string };
  pkObservations: PKObservation[];
  kinetics: { onset: string; peak: string; duration: string; bioavailability: string; metabolism: string; sourceId: string };
  modifiers: { label: string; effect: string; detail: string; sourceId: string; observationId: string; factorType: "smoking" | "pregnancy" | "enzyme" | "genotype" | "other"; direction: "slower" | "faster" | "variable" }[];
  doses: DoseContext[]; effects: Observation[]; outcomes: Observation[]; claims: Claim[];
  mechanisms: { title: string; description: string; sourceId: string; conceptId?: string }[];
  cautions: { title: string; description: string; sourceId: string }[];
  references: Reference[];
  legal: { jurisdiction: string; activity: string; status: string; sourceUrl: string; asOf: string }[];
};
export type CatalogSubstance = Pick<Substance, "slug" | "name" | "summary" | "aliases" | "formula" | "category" | "tags" | "editorialStatus" | "reviewedAt"> & { halfLifeLabel: string };
export type Hyperedge = { id: string; label: string; relation: string; members: string[]; memberRoles: Record<string,string>; description: string; sourceUrl: string; sourceUrls?: string[] };
export type KnowledgeGraphData = { substances: CatalogSubstance[]; tags: Tag[]; hyperedges: Hyperedge[]; truncated?: boolean };
export type Revision = { revision: number; publishedAt: string; sourceCommit: string | null; contributors: string[]; reviewers: string[]; editorialStatus: EditorialStatus; summary: string; contentHash: string };
export function toCatalogSubstance(s: Substance): CatalogSubstance { return {slug:s.slug,name:s.name,summary:s.summary,aliases:s.aliases,formula:s.formula,category:s.category,tags:s.tags,editorialStatus:s.editorialStatus,reviewedAt:s.reviewedAt,halfLifeLabel:s.halfLife.label}; }
export function conceptPath(t: Pick<Tag,"id"|"kind">): string { return `/${t.kind === "effect" ? "effects" : t.kind === "outcome" ? "outcomes" : "concepts"}/${t.id}`; }
