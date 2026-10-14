"use client";

import { FunnelChart, type FunnelStage } from "@/components/ui/funnel-chart";
import { useId, useState } from "react";

type TimingVisualProps = {
  onset?: string | null;
  peak?: string | null;
  duration?: string | null;
  elimination?: string | null;
  compact?: boolean;
};

type TimingPoint = {
  id: "onset" | "peak" | "duration" | "elimination";
  label: string;
  descriptor: string;
  value: string;
  color: string;
  gradient: [string, string, string];
};

const phaseColors: Record<TimingPoint["id"], { color: string; gradient: [string, string, string] }> = {
  onset: { color: "oklch(0.52 0.18 232)", gradient: ["oklch(0.69 0.18 215)", "oklch(0.57 0.2 230)", "oklch(0.43 0.22 250)"] },
  peak: { color: "oklch(0.62 0.19 43)", gradient: ["oklch(0.8 0.18 76)", "oklch(0.68 0.2 49)", "oklch(0.54 0.22 25)"] },
  duration: { color: "oklch(0.54 0.17 155)", gradient: ["oklch(0.73 0.17 145)", "oklch(0.61 0.2 153)", "oklch(0.44 0.2 165)"] },
  elimination: { color: "oklch(0.55 0.19 292)", gradient: ["oklch(0.75 0.18 306)", "oklch(0.63 0.21 294)", "oklch(0.46 0.22 274)"] },
};

const pointMeta: Omit<TimingPoint, "value">[] = [
  { id: "onset", label: "Onset", descriptor: "Clinical onset", ...phaseColors.onset },
  { id: "peak", label: "Peak", descriptor: "Plasma peak", ...phaseColors.peak },
  { id: "duration", label: "Duration", descriptor: "Reported duration", ...phaseColors.duration },
  { id: "elimination", label: "Half-life", descriptor: "Terminal half-life", ...phaseColors.elimination },
];

export function KineticsTimingVisual({ onset, peak, duration, elimination, compact = false }: TimingVisualProps) {
  const values = { onset, peak, duration, elimination };
  const points = pointMeta.flatMap((meta) => {
    const value = values[meta.id]?.trim();
    return value ? [{ ...meta, value }] : [];
  });
  const detailId = useId();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!points.length) return null;

  // These widths shape the visual taper only. They are never presented as measured PK values.
  const demoWeights = [100, 72, 26, 25, 8];
  const demoEnds = [72, 26, 25, 8, 8];
  const visualWeights = points.map((_, index) => demoWeights[index] ?? Math.max(8, 25 - (index - 3) * 8));
  const data: FunnelStage[] = points.map((point, index) => ({
    label: point.label,
    value: visualWeights[index] ?? 18,
    endValue: demoEnds[index] ?? Math.max(12, (visualWeights[index] ?? 18) * 0.58),
    displayValue: compact ? point.label : point.descriptor,
    badge: `${visualWeights[index] ?? 18}%`,
    detail: point.value,
    color: point.color,
    gradient: point.gradient.map((color, stopIndex) => ({ offset: stopIndex / (point.gradient.length - 1), color })),
  }));

  const activeIndex = selectedIndex ?? hoveredIndex;
  const activePoint = activeIndex === null ? null : points[activeIndex];

  return (
    <div
      className={compact ? "kinetics-visual kinetics-visual-compact" : "kinetics-visual"}
      data-component="kinetics-funnel-chart"
      role="group"
      aria-label="Interactive sourced timing visualization"
    >
      <FunnelChart
        className="kinetics-funnel-chart"
        data={data}
        detailId={detailId}
        gap={compact ? 4 : 7}
        grid={{
          bands: false,
          lineColor: "color-mix(in oklch, var(--foreground) 72%, transparent)",
          lineOpacity: compact ? 0.45 : 0.68,
          lineWidth: compact ? 1 : 1.5,
          lines: true,
        }}
        hoveredIndex={hoveredIndex}
        layers={3}
        onHoverChange={setHoveredIndex}
        onSelect={(index) => setSelectedIndex((current) => (current === index ? null : index))}
        selectedIndex={selectedIndex}
        showPercentage
        showValues
        showLabels
      />
      {activePoint && (
        <div
          aria-live="polite"
          className="funnel-chart-detail"
          id={detailId}
          role="region"
        >
          <div className="funnel-chart-detail-heading">
            <strong>{activePoint.label}</strong>
            <span>{data[activeIndex ?? 0]?.badge} visual weight</span>
          </div>
          <p>{activePoint.value}</p>
          <small>Source wording is shown here in full; the taper is an illustrative progression.</small>
          {selectedIndex !== null && (
            <button
              className="funnel-chart-detail-close"
              type="button"
              onClick={() => setSelectedIndex(null)}
            >
              Close detail
            </button>
          )}
        </div>
      )}
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
