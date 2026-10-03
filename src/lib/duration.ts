import type { DurationPhaseName, TimeSpan } from "./types";

export const durationPhaseOrder = ["onset", "comeup", "peak", "offset", "after-effects"] as const satisfies readonly DurationPhaseName[];

export const durationPhaseLabels: Record<DurationPhaseName, string> = {
  onset: "Onset",
  comeup: "Come up",
  peak: "Peak",
  offset: "Offset",
  "after-effects": "After effects",
};

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

/** Only explicitly elapsed, complete bounds have an absolute position. Never sum phase durations. */
export function elapsedPhases(route: import("./types").DurationRoute) {
  if (!route.phases.length || route.phases.some(p=>p.basis!=="elapsed-since-exposure" || p.min===null || p.max===null)) return [];
  return route.phases.map(p=>({name:p.name,min:p.min!*(p.unit==="hours"?60:1),max:p.max!*(p.unit==="hours"?60:1)}));
}
