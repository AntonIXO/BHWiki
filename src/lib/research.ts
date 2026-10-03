import type { Hyperedge, Observation, Substance } from "./types";
import {
  observationFilterNames,
  type EvidenceKind,
  type EvidenceRecord,
  type ObservationFilter,
  type ObservationFilters,
  type ObservationPage,
  type ObservationRow,
  type QuantitativeResult,
} from "./research-types";

function stable(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value && typeof value === "object")
    return `{${Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${JSON.stringify(k)}:${stable(v)}`)
      .join(",")}}`;
  return JSON.stringify(value) ?? "null";
}
/** Content-derived legacy keys survive reordering. Explicit author IDs survive corrections. */
export function recordId<T extends object>(
  record: T & { id?: string },
): string {
  if (record.id) return record.id;
  let hash = 14695981039346656037n;
  for (const char of stable(record))
    hash = BigInt.asUintN(
      64,
      (hash ^ BigInt(char.codePointAt(0)!)) * 1099511628211n,
    );
  return `legacy-${hash.toString(16)}`;
}
export function evidenceKey(
  slug: string,
  kind: EvidenceKind,
  record: object & { id?: string },
) {
  return `${slug}~${kind}~${recordId(record)}`;
}
const context = (pairs: [string, unknown][]) =>
  pairs.map(([label, value]) => ({
    label,
    value:
      typeof value === "number"
        ? String(value)
        : typeof value === "string" && value
          ? value
          : "Not assessed",
  }));
export function observationRows(
  s: Substance,
  kind: "effect" | "outcome",
): ObservationRow[] {
  return (kind === "effect" ? s.effects : s.outcomes).map((observation) => ({
    key: evidenceKey(s.slug, kind, observation),
    articleSlug: s.slug,
    articleName: s.name,
    editorialStatus: s.editorialStatus,
    kind,
    observation,
    reference: s.references.find((r) => r.id === observation.sourceId),
  }));
}
export function articleEvidence(s: Substance): EvidenceRecord[] {
  const refs = (ids: string[]) =>
    [...new Set(ids)].flatMap((id) => s.references.filter((r) => r.id === id));
  const make = (
    kind: EvidenceKind,
    record: object & { id?: string },
    title: string,
    assertion: string,
    sourceIds: string[],
    pairs: [string, unknown][] = [],
    conflicts: string[] = [],
    limitation = "Evidence certainty has not been formally assessed.",
  ): EvidenceRecord => ({
    key: evidenceKey(s.slug, kind, record),
    title,
    assertion,
    kind,
    articleSlug: s.slug,
    articleName: s.name,
    editorialStatus: s.editorialStatus,
    context: context(pairs),
    sources: refs(sourceIds),
    conflictingSources: refs(conflicts),
    limitation,
  });
  const observations = (["effect", "outcome"] as const).flatMap((kind) =>
    observationRows(s, kind).map(({ observation: o }) => ({
      ...make(
        kind,
        o,
        o.name,
        o.description,
        [o.sourceId],
        [
          ["Evidence type", o.evidence],
          ["Population", o.population],
          ["Exposure", o.exposure],
          ["Instrument", o.instrument],
          ["Reported magnitude", o.magnitude],
          ["Study", o.study?.id],
          ["Design", o.study?.design],
          ["Sample size", o.study?.sampleSize],
          ["Comparator", o.study?.comparator],
          ["Duration (days)", o.study?.durationDays],
          ["Assessment time", o.study?.assessmentTime],
          ["Route", o.study?.route],
          ["Formulation", o.study?.formulation],
          ["Report type", o.reportType],
        ],
        o.conflictingSourceIds,
      ),
      result: o.result,
      study: o.study,
    })),
  );
  return [
    ...observations,
    ...s.claims.map((c) =>
      make(
        "claim",
        c,
        c.assertion,
        c.context,
        c.sourceIds,
        c.participants.map((m) => [m.role, m.entityId]),
        c.conflictingSourceIds,
        c.limitation,
      ),
    ),
    ...s.mechanisms.map((m) =>
      make("mechanism", m, m.title, m.description, [m.sourceId]),
    ),
    ...s.cautions.map((c) =>
      make("caution", c, c.title, c.description, [c.sourceId]),
    ),
    ...s.interactions.map((i) =>
      make(
        "interaction",
        i,
        i.name,
        i.summary,
        [i.sourceId, ...(i.severity ? [i.severity.sourceId] : [])],
        [
          ["Origin", s.name],
          ["Mechanism", i.mechanism],
          ["Context", i.context],
          ["Severity in cited source", i.severity?.label],
        ],
        i.conflictingSourceIds,
      ),
    ),
    ...s.pkObservations.map((p) =>
      make(
        "pk",
        p,
        p.analyte,
        p.context,
        [p.sourceId],
        [
          ["Route", p.route],
          ["Formulation", p.formulation],
          ["Population", p.population],
          ["Statistic", p.statistic],
          [
            "Half-life",
            p.value !== null
              ? `${p.value} hours`
              : p.low !== null && p.high !== null
                ? `${p.low}–${p.high} hours`
                : undefined,
          ],
        ],
      ),
    ),
    ...(s.kinetics.timeline ?? []).map((t) =>
      make(
        "duration",
        t,
        `${t.route} timing`,
        t.note,
        [t.sourceId],
        [
          ["Population", t.population],
          ["Formulation", t.formulation],
          ["Measurement", t.measurement],
          ["Analyte", t.analyte],
        ],
      ),
    ),
    ...s.doses.map((d) =>
      make(
        "dose",
        d,
        d.label,
        d.note,
        [d.sourceId],
        [
          ["Amount", d.amount],
          ["Population", d.population],
          ["Route", d.route],
          ["Formulation", d.formulation],
          ["Frequency", d.frequency],
          ["Duration", d.duration],
        ],
      ),
    ),
    ...s.references.map((r) =>
      make("source", r, r.title, r.insight, [r.id], [], [], r.limitation),
    ),
  ];
}
export function relationshipEvidence(edge: Hyperedge): EvidenceRecord {
  const urls = [
    ...new Set(
      [
        edge.sourceUrl,
        ...(edge.sourceUrls ?? []),
        ...(edge.directedSteps ?? []).flatMap((s) => s.sourceUrls),
      ].filter(Boolean),
    ),
  ];
  return {
    key: `relationship~${edge.id}`,
    kind: "relationship",
    title: edge.label,
    assertion: edge.description,
    context: edge.members.map((m) => ({
      label: edge.memberRoles[m],
      value: m,
    })),
    sources: urls.map((url, index) => ({
      id: String(index),
      url,
      title: `Relationship source ${index + 1}`,
    })),
    conflictingSources: [],
    limitation:
      "Participants and their roles qualify this assertion. Direction is shown only for explicitly sourced steps.",
  };
}
export const unknownFacet = "__unassessed";
export function durationBand(days: number | undefined): string {
  return days === undefined
    ? unknownFacet
    : days < 1
      ? "Less than 1 day"
      : days <= 7
        ? "1–7 days"
        : days <= 30
          ? "8–30 days"
          : "More than 30 days";
}
export function facetValues(
  row: ObservationRow,
  field: ObservationFilter,
): string[] {
  const o = row.observation;
  switch (field) {
    case "substance":
      return [row.articleSlug];
    case "population":
      return o.study?.populationLabels?.length
        ? o.study.populationLabels
        : [unknownFacet];
    case "design":
      return [o.study?.design ?? unknownFacet];
    case "duration":
      return [durationBand(o.study?.durationDays)];
    case "route":
      return [o.study?.route ?? unknownFacet];
    case "formulation":
      return [o.study?.formulation ?? unknownFacet];
    case "evidence":
      return [o.evidence];
    case "context":
      return [o.population];
  }
}
export function filterObservations(
  rows: ObservationRow[],
  filters: ObservationFilters,
  requestedPage = 1,
): ObservationPage {
  const facets = Object.fromEntries(
    observationFilterNames.map((field) => [
      field,
      [...new Set(rows.flatMap((r) => facetValues(r, field)))]
        .sort()
        .map((value) => ({
          value,
          label:
            value === unknownFacet
              ? "Not assessed"
              : field === "substance"
                ? rows.find((r) => r.articleSlug === value)!.articleName
                : value,
        })),
    ]),
  ) as ObservationPage["facets"];
  const matched = rows
    .filter((row) =>
      observationFilterNames.every(
        (field) =>
          !filters[field] || facetValues(row, field).includes(filters[field]!),
      ),
    )
    .sort(
      (a, b) =>
        a.articleName.localeCompare(b.articleName) ||
        a.key.localeCompare(b.key),
    );
  const pages = Math.max(1, Math.ceil(matched.length / 20));
  const page = Math.min(
    pages,
    Math.max(1, Number.isSafeInteger(requestedPage) ? requestedPage : 1),
  );
  return {
    rows: matched.slice((page - 1) * 20, page * 20),
    total: matched.length,
    page,
    pages,
    facets,
  };
}
export function selectionSlugs(
  value: string | undefined,
  max = 3,
): { slugs: string[]; issues: string[] } {
  const values = [
    ...new Set(
      (value ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    ),
  ];
  const valid = values.filter((s) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s));
  return {
    slugs: valid.slice(0, max),
    issues: [
      ...(valid.length !== values.length
        ? ["Some selections were invalid."]
        : []),
      ...(valid.length > max ? [`Choose up to ${max} substances.`] : []),
    ],
  };
}
export type InteractionMatch = {
  key: string;
  summary: string;
  name: string;
  records: EvidenceRecord[];
};
export function matchInteractions(
  a: Substance,
  b: Substance,
): { matches: InteractionMatch[]; general: EvidenceRecord[] } {
  if (a.slug === b.slug) return { matches: [], general: [] };
  const matches = new Map<string, InteractionMatch>();
  const general: EvidenceRecord[] = [];
  for (const [owner, other] of [
    [a, b],
    [b, a],
  ]) {
    const evidence = articleEvidence(owner);
    for (const i of owner.interactions) {
      const record = evidence.find(
        (e) => e.key === evidenceKey(owner.slug, "interaction", i),
      )!;
      if (
        i.otherSlug === other.slug ||
        (i.targetClassId && other.tags.includes(i.targetClassId))
      ) {
        const key = stable({
          summary: i.summary,
          mechanism: i.mechanism,
          context: i.context,
          severity: i.severity?.label,
          sources: record.sources.map((r) => r.url).sort(),
          conflicts: record.conflictingSources.map((r) => r.url).sort(),
        });
        const group = matches.get(key) ?? {
          key: recordId({ assertion: key }),
          name: [a.name, b.name].sort().join(" + "),
          summary: i.summary,
          records: [],
        };
        group.records.push(record);
        group.records.sort((a, b) => a.key.localeCompare(b.key));
        matches.set(key, group);
      } else if (!i.otherSlug && !i.targetClassId) general.push(record);
    }
    general.push(...evidence.filter((e) => e.kind === "caution"));
  }
  return {
    matches: [...matches.values()].sort((a, b) =>
      a.summary.localeCompare(b.summary),
    ),
    general: general.sort((a, b) => a.key.localeCompare(b.key)),
  };
}
export function isRatio(result: QuantitativeResult) {
  return ["odds-ratio", "risk-ratio", "hazard-ratio"].includes(result.measure);
}
export function resultGroupKey(o: Observation): string | null {
  const r = o.result;
  if (!r) return null;
  return stable([
    o.conceptId,
    r.measure,
    r.unit,
    r.instrument,
    r.comparator,
    r.assessmentTime,
    r.population,
  ]);
}
export function plotGroups(rows: ObservationRow[]) {
  const groups = new Map<string, ObservationRow[]>();
  for (const row of rows) {
    const key = resultGroupKey(row.observation);
    if (key) groups.set(key, [...(groups.get(key) ?? []), row]);
  }
  return [...groups].map(([key, rows]) => ({ key, rows }));
}
