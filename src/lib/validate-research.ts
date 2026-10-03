import type { Hyperedge, Substance, Tag } from "./types";
import { recordId } from "./research";
const fail = (p: string, m: string): never => {
  throw new Error(`${p}: ${m}`);
};
function obj(v: unknown, p: string): Record<string, unknown> {
  if (!v || typeof v !== "object" || Array.isArray(v))
    fail(p, "expected object");
  return v as Record<string, unknown>;
}
function text(v: unknown, p: string) {
  if (typeof v !== "string" || !v.trim()) fail(p, "expected nonempty text");
}
function strings(v: unknown, p: string) {
  if (!Array.isArray(v)) fail(p, "expected array");
  for (const x of v as unknown[]) text(x, p);
}
function list(v: unknown, p: string) {
  if (!Array.isArray(v)) fail(p, "expected array");
  return v as unknown[];
}
function finite(v: unknown, p: string) {
  if (typeof v !== "number" || !Number.isFinite(v))
    fail(p, "expected finite number");
  return v as number;
}
function url(v: unknown, p: string) {
  text(v, p);
  try {
    const u = new URL(v as string);
    if (u.protocol !== "https:" || u.username || u.password)
      fail(p, "expected public HTTPS URL");
  } catch {
    fail(p, "expected public HTTPS URL");
  }
}
function urls(v: unknown, p: string) {
  const a = list(v, p);
  if (!a.length) fail(p, "source required");
  a.forEach((x) => url(x, p));
}
function id(v: unknown, p: string) {
  if (typeof v !== "string" || !/^[a-z0-9][a-z0-9-]*$/.test(v))
    fail(p, "invalid record ID");
}
export function validateResearchArticle(s: Substance) {
  const sources = new Set(s.references.map((r) => r.id));
  const source = (v: unknown) => {
    text(v, s.slug);
    if (!sources.has(v as string))
      fail(s.slug, `unknown enrichment source ${v}`);
  };
  for (const group of [s.effects, s.outcomes, s.kinetics.timeline ?? []]) {
    for (const item of group) if (item.id !== undefined) id(item.id, s.slug);
    if (new Set(group.map(recordId)).size !== group.length)
      fail(s.slug, "duplicate research record key");
  }
  for (const o of [...s.effects, ...s.outcomes]) {
    const p = `${s.slug}.${o.name}`;
    if (o.conflictingSourceIds !== undefined)
      list(o.conflictingSourceIds, p).forEach(source);
    if (
      o.reportType !== undefined &&
      !["measured-assessment", "informal-account"].includes(o.reportType)
    )
      fail(p, "invalid report type");
    if (o.study !== undefined) {
      const t = obj(o.study, p);
      text(t.id, p);
      for (const k of [
        "design",
        "comparator",
        "route",
        "formulation",
        "assessmentTime",
      ])
        if (t[k] !== undefined) text(t[k], `${p}.${k}`);
      if (
        t.sampleSize !== undefined &&
        (!Number.isInteger(t.sampleSize) || finite(t.sampleSize, p) < 1)
      )
        fail(p, "invalid sample size");
      if (t.durationDays !== undefined && finite(t.durationDays, p) < 0)
        fail(p, "invalid duration");
      for (const k of ["populationLabels", "comparedSubstances"])
        if (t[k] !== undefined) strings(t[k], p);
    }
    if (o.result !== undefined) {
      const r = obj(o.result, p);
      if (
        ![
          "mean-difference",
          "standardized-mean-difference",
          "odds-ratio",
          "risk-ratio",
          "hazard-ratio",
          "mean",
        ].includes(r.measure as string)
      )
        fail(p, "invalid result measure");
      for (const k of [
        "unit",
        "instrument",
        "comparator",
        "assessmentTime",
        "population",
      ])
        text(r[k], `${p}.${k}`);
      const estimate = finite(r.estimate, p);
      const ratio = String(r.measure).endsWith("ratio");
      if (ratio && estimate <= 0) fail(p, "ratio must be positive");
      if (r.confidenceInterval !== undefined) {
        const ci = obj(r.confidenceInterval, p);
        const lo = finite(ci.lower, p),
          hi = finite(ci.upper, p),
          level = finite(ci.level, p);
        if (
          lo > hi ||
          estimate < lo ||
          estimate > hi ||
          level <= 0 ||
          level >= 100 ||
          (ratio && lo <= 0)
        )
          fail(p, "invalid confidence interval");
      }
    }
  }
  for (const i of s.interactions) {
    for (const k of ["targetClassId", "mechanism", "context"] as const)
      if (i[k] !== undefined) text(i[k], s.slug);
    if (i.otherSlug && i.targetClassId)
      fail(s.slug, "interaction must have one explicit target");
    if (i.severity !== undefined) {
      const severity = obj(i.severity, s.slug);
      text(severity.label, s.slug);
      source(severity.sourceId);
    }
    if (i.conflictingSourceIds !== undefined)
      list(i.conflictingSourceIds, s.slug).forEach(source);
  }
  for (const t of s.kinetics.timeline ?? []) {
    if (t.formulation !== undefined) text(t.formulation, s.slug);
    if (
      t.measurement !== undefined &&
      !["subjective", "plasma"].includes(t.measurement)
    )
      fail(s.slug, "invalid timing measurement");
    if (t.measurement === "plasma") text(t.analyte, s.slug);
    for (const phase of t.phases)
      if (
        phase.basis !== undefined &&
        !["elapsed-since-exposure", "phase-duration"].includes(phase.basis)
      )
        fail(s.slug, "invalid timing basis");
  }
}
export function validateResearchCorpus(
  substances: Substance[],
  tags: Tag[],
  edges: Hyperedge[],
) {
  const slugs = new Set(substances.map((s) => s.slug));
  const classes = new Set(
    tags.filter((t) => t.kind === "class").map((t) => t.id),
  );
  for (const s of substances) {
    for (const i of s.interactions)
      if (i.targetClassId && !classes.has(i.targetClassId))
        fail(s.slug, "interaction target must be a class");
    for (const o of [...s.effects, ...s.outcomes])
      for (const slug of o.study?.comparedSubstances ?? [])
        if (!slugs.has(slug)) fail(s.slug, `unknown study arm ${slug}`);
  }
  for (const tag of tags)
    if (tag.details !== undefined) {
      if (tag.kind !== "effect")
        fail(tag.id, "effect details belong on effect concepts");
      const d = obj(tag.details, tag.id);
      if (d.variations !== undefined) {
        const variations = list(d.variations, tag.id);
        for (const v of variations) {
          const r = obj(v, tag.id);
          id(r.id, tag.id);
          text(r.title, tag.id);
          text(r.description, tag.id);
          urls(r.sourceUrls, tag.id);
        }
        if (
          new Set(variations.map((v) => obj(v, tag.id).id)).size !==
          variations.length
        )
          fail(tag.id, "duplicate variation ID");
      }
      if (d.reports !== undefined)
        for (const v of list(d.reports, tag.id)) {
          const r = obj(v, tag.id);
          text(r.title, tag.id);
          text(r.context, tag.id);
          url(r.url, tag.id);
          strings(r.substanceSlugs, tag.id);
          for (const slug of r.substanceSlugs as string[])
            if (!slugs.has(slug)) fail(tag.id, "unknown report substance");
        }
      if (d.media !== undefined)
        for (const v of list(d.media, tag.id)) {
          const r = obj(v, tag.id);
          if (!["image", "audio", "video"].includes(r.kind as string))
            fail(tag.id, "invalid media type");
          for (const k of ["title", "description", "attribution", "license"])
            text(r[k], tag.id);
          url(r.url, tag.id);
          url(r.sourceUrl, tag.id);
          if (r.kind === "video") url(r.captionsUrl, tag.id);
          else if (r.captionsUrl !== undefined) url(r.captionsUrl, tag.id);
        }
    }
  for (const edge of edges)
    if (edge.directedSteps !== undefined)
      for (const value of list(edge.directedSteps, edge.id)) {
        const step = obj(value, edge.id);
        text(step.label, edge.id);
        if (
          !edge.members.includes(step.from as string) ||
          !edge.members.includes(step.to as string) ||
          step.from === step.to
        )
          fail(
            edge.id,
            "directed step must join distinct relationship members",
          );
        urls(step.sourceUrls, edge.id);
      }
}
