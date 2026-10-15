import type { DurationPhaseName } from "@/lib/types";

export type TimingTone = "peak" | "decline" | "rising" | "observed";

export const timingToneColors: Record<TimingTone, string> = {
  peak: "#dc4b4b",
  decline: "#16835b",
  rising: "#d88a22",
  observed: "#64748b",
};

export const timingToneLabels: Record<TimingTone, string> = {
  peak: "Peak",
  decline: "Offset / tail",
  rising: "Onset / rise",
  observed: "Observed",
};

export function phaseTone(phase: DurationPhaseName): TimingTone {
  if (phase === "peak") return "peak";
  if (phase === "offset" || phase === "after-effects") return "decline";
  if (phase === "onset" || phase === "comeup") return "rising";
  return "observed";
}

export function markerTone(label: string, note: string): TimingTone {
  const text = `${label} ${note}`;
  // The source label wins over its position on the elapsed axis. A later peak
  // is still a peak; no trend is inferred from the x coordinate.
  if (/\bpeak\b|maximum|maximal/i.test(text)) return "peak";
  if (/declin|decreas|fall|offset|after[- ]effects?|return(?:ed)? to baseline|dissipat|tail/i.test(text)) return "decline";
  if (/onset|come[ -]?up|ris(?:e|ing)|increase/i.test(text)) return "rising";
  return "observed";
}
