import type { DurationPhase, DurationPhaseName, TimeSpan } from "./types";

export const durationPhaseOrder = ["onset", "comeup", "peak", "offset", "after-effects"] as const satisfies readonly DurationPhaseName[];

export const durationPhaseLabels: Record<DurationPhaseName, string> = {
  onset: "Onset",
  comeup: "Come up",
  peak: "Peak",
  offset: "Offset",
  "after-effects": "After effects",
};

/** Midpoint of a sourced range, in minutes. A missing or empty span contributes nothing. */
export function spanMinutes(span: TimeSpan | null | undefined): number | null {
  if (!span) return null;
  const values = [span.min, span.max].filter((value): value is number => value !== null && Number.isFinite(value) && value >= 0);
  if (!values.length) return null;
  const midpoint = values.reduce((sum, value) => sum + value, 0) / values.length;
  const minutes = span.unit === "hours" ? midpoint * 60 : midpoint;
  return minutes > 0 ? minutes : null;
}

export function formatSpan(span: TimeSpan | null | undefined): string | null {
  if (!span) return null;
  const unit = span.unit === "hours" ? "h" : "min";
  const quantity = new Intl.NumberFormat("en", { maximumFractionDigits: 2 });
  if (span.min !== null && span.max !== null) {
    return span.min === span.max ? `${quantity.format(span.min)} ${unit}` : `${quantity.format(span.min)}–${quantity.format(span.max)} ${unit}`;
  }
  if (span.min !== null) return `${quantity.format(span.min)} ${unit}`;
  if (span.max !== null) return `${quantity.format(span.max)} ${unit}`;
  return null;
}

/** Shares of a route bar. Phases without a positive midpoint are omitted, and the rest sum to 1. */
export function phaseWeights(phases: DurationPhase[]): { name: DurationPhaseName; weight: number }[] {
  const measured = durationPhaseOrder.flatMap((name) => {
    const phase = phases.find((item) => item.name === name);
    const minutes = spanMinutes(phase);
    return minutes === null ? [] : [{ name, minutes }];
  });
  const total = measured.reduce((sum, phase) => sum + phase.minutes, 0);
  if (total <= 0) return [];
  return measured.map((phase) => ({ name: phase.name, weight: phase.minutes / total }));
}
