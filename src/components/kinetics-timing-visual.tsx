"use client";

import { FunnelChart, type FunnelStage } from "@/components/ui/funnel-chart";

type TimingVisualProps = {
  onset?: string | null;
  peak?: string | null;
  duration?: string | null;
  elimination?: string | null;
};

type TimingPoint = {
  id: "onset" | "peak" | "duration" | "elimination";
  label: string;
  value: string;
  color: string;
  gradient: [string, string];
};

const phaseColors: Record<TimingPoint["id"], { color: string; gradient: [string, string] }> = {
  onset: { color: "oklch(0.64 0.13 58)", gradient: ["oklch(0.81 0.11 78)", "oklch(0.61 0.16 42)"] },
  peak: { color: "oklch(0.61 0.16 43)", gradient: ["oklch(0.82 0.14 72)", "oklch(0.57 0.19 28)"] },
  duration: { color: "oklch(0.58 0.13 153)", gradient: ["oklch(0.76 0.12 145)", "oklch(0.5 0.15 164)"] },
  elimination: { color: "oklch(0.58 0.13 290)", gradient: ["oklch(0.76 0.11 302)", "oklch(0.51 0.15 276)"] },
};

const pointMeta: Omit<TimingPoint, "value">[] = [
  { id: "onset", label: "Onset", ...phaseColors.onset },
  { id: "peak", label: "Peak", ...phaseColors.peak },
  { id: "duration", label: "Duration", ...phaseColors.duration },
  { id: "elimination", label: "Half-life", ...phaseColors.elimination },
];

export function KineticsTimingVisual({ onset, peak, duration, elimination }: TimingVisualProps) {
  const values = { onset, peak, duration, elimination };
  const points = pointMeta.flatMap((meta) => {
    const value = values[meta.id]?.trim();
    return value ? [{ ...meta, value }] : [];
  });

  if (!points.length) return null;

  // Funnel widths are visual phase weights, not measured pharmacokinetic quantities.
  const data: FunnelStage[] = points.map((point, index) => ({
    label: point.label,
    value: 100 - index * 22,
    displayValue: point.value,
    color: point.color,
    gradient: point.gradient.map((color, stopIndex) => ({
      offset: stopIndex,
      color,
    })),
  }));

  return (
    <div
      className="kinetics-visual"
      data-component="kinetics-funnel-chart"
      role="group"
      aria-label="Interactive sourced timing visualization"
    >
      <FunnelChart
        className="kinetics-funnel-chart"
        data={data}
        gap={6}
        grid={false}
        layers={3}
        showPercentage
        showValues
        showLabels
      />
      <ul className="sr-only" aria-label="Reported kinetics timing values">
        {points.map((point) => (
          <li key={point.id}>
            {point.label}: {point.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
