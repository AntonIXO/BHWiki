import type { EditorialStatus, Observation, Reference } from "./types";

export type StudyContext = {
  id: string;
  design?: string;
  sampleSize?: number;
  populationLabels?: string[];
  comparator?: string;
  route?: string;
  formulation?: string;
  durationDays?: number;
  assessmentTime?: string;
  comparedSubstances?: string[];
};
export type QuantitativeResult = {
  measure:
    | "mean-difference"
    | "standardized-mean-difference"
    | "odds-ratio"
    | "risk-ratio"
    | "hazard-ratio"
    | "mean";
  estimate: number;
  unit: string;
  instrument: string;
  comparator: string;
  assessmentTime: string;
  population: string;
  confidenceInterval?: { lower: number; upper: number; level: number };
};
export type DirectedStep = {
  from: string;
  to: string;
  label: string;
  sourceUrls: string[];
};
export type EffectDetails = {
  variations?: {
    id: string;
    title: string;
    description: string;
    sourceUrls: string[];
  }[];
  reports?: {
    title: string;
    url: string;
    context: string;
    substanceSlugs: string[];
  }[];
  media?: {
    kind: "image" | "audio" | "video";
    url: string;
    title: string;
    description: string;
    attribution: string;
    license: string;
    sourceUrl: string;
    captionsUrl?: string;
  }[];
};
export type EvidenceKind =
  | "effect"
  | "outcome"
  | "claim"
  | "mechanism"
  | "interaction"
  | "pk"
  | "duration"
  | "source"
  | "caution"
  | "dose";
export type EvidenceSource = Partial<Reference> &
  Pick<Reference, "id" | "title" | "url">;
export type EvidenceRecord = {
  key: string;
  title: string;
  assertion: string;
  kind: string;
  articleSlug?: string;
  articleName?: string;
  editorialStatus?: EditorialStatus;
  context: { label: string; value: string }[];
  sources: EvidenceSource[];
  conflictingSources: EvidenceSource[];
  limitation: string;
  result?: QuantitativeResult;
  study?: StudyContext;
};
export type ObservationRow = {
  key: string;
  articleSlug: string;
  articleName: string;
  editorialStatus: EditorialStatus;
  kind: "effect" | "outcome";
  observation: Observation;
  reference?: Reference;
};
export const observationFilterNames = [
  "substance",
  "population",
  "design",
  "duration",
  "route",
  "formulation",
  "evidence",
  "context",
] as const;
export type ObservationFilter = (typeof observationFilterNames)[number];
export type ObservationFilters = Partial<Record<ObservationFilter, string>>;
export type ObservationPage = {
  rows: ObservationRow[];
  total: number;
  page: number;
  pages: number;
  facets: Record<ObservationFilter, { value: string; label: string }[]>;
};
