"use client";

import { useId, useState, type CSSProperties } from "react";

type TimingVisualProps = {
  onset?: string | null;
  peak?: string | null;
  duration?: string | null;
  elimination?: string | null;
  measurement?: "subjective" | "plasma";
  compact?: boolean;
};

type TimingPoint = {
  id: "onset" | "peak" | "duration" | "elimination";
  label: string;
  descriptor: string;
  category: "plasma" | "effects";
  value: string;
  color: string;
};

const phaseColors: Record<TimingPoint["id"], { color: string }> = {
  onset: { color: "#d88a22" },
  peak: { color: "#dc4b4b" },
  duration: { color: "#64748b" },
  elimination: { color: "#64748b" },
};

const pointMeta: Omit<TimingPoint, "value">[] = [
  { id: "onset", label: "Onset", descriptor: "Clinical onset", category: "effects", ...phaseColors.onset },
  { id: "peak", label: "Peak", descriptor: "Plasma peak", category: "plasma", ...phaseColors.peak },
  { id: "duration", label: "Duration", descriptor: "Reported duration", category: "effects", ...phaseColors.duration },
  { id: "elimination", label: "Half-life", descriptor: "Terminal half-life", category: "plasma", ...phaseColors.elimination },
];

export function KineticsTimingVisual({ onset, peak, duration, elimination, measurement, compact = false }: TimingVisualProps) {
  const values = { onset, peak, duration, elimination };
  const points = pointMeta.flatMap((meta) => {
    const value = values[meta.id]?.trim();
    return value
      ? [{
          ...meta,
          value,
          descriptor: meta.id === "duration" && measurement === "plasma" ? "Plasma window" : meta.descriptor,
          category: meta.id === "duration" && measurement === "plasma" ? "plasma" : meta.category,
        }]
      : [];
  });
  const detailId = useId();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!points.length) return null;

  const activeIndex = hoveredIndex ?? selectedIndex;
  const activePoint = activeIndex === null ? null : points[activeIndex];
  const activePointCategory = activePoint?.category === "plasma" ? "Plasma measurement" : "Reported effect timing";
  const hasPlasma = points.some((point) => point.category === "plasma");
  const hasEffects = points.some((point) => point.category === "effects");

  return (
    <div
      className={compact ? "kinetics-visual kinetics-visual-compact" : "kinetics-visual"}
      data-component="kinetics-funnel-chart"
      role="group"
      aria-label="Interactive sourced timing visualization"
    >
      <div className="kinetics-map-head">
        <div>
          <span className="kinetics-map-kicker">Conceptual sequence</span>
          <p>Independent source terms, ordered for orientation.</p>
        </div>
        <div className="kinetics-map-legend" aria-label="Timing categories">
          {hasPlasma && <span><i className="kinetics-map-legend-dot kinetics-map-legend-dot-plasma" aria-hidden="true" />Plasma measurement</span>}
          {hasEffects && <span><i className="kinetics-map-legend-dot kinetics-map-legend-dot-effects" aria-hidden="true" />Reported effects</span>}
        </div>
      </div>
      <div className="kinetics-funnel-chart kinetics-map-chart">
        <div
          className="kinetics-map-track"
          style={{ "--phase-count": points.length } as CSSProperties}
        >
          <span className="kinetics-map-connector" aria-hidden="true" />
          {points.map((point, index) => {
            const active = activeIndex === index;
            const selected = selectedIndex === index;
            return (
              <button
                key={point.id}
                type="button"
                className={`kinetics-map-stage${active ? " is-active" : ""}${selected ? " is-selected" : ""}`}
                style={{ "--phase-color": point.color } as CSSProperties}
                aria-controls={active ? detailId : undefined}
                aria-label={`${point.label}: ${point.value}`}
                aria-pressed={selected}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex((current) => (current === index ? null : index))}
              >
                <span className="kinetics-map-marker funnel-stage-svg" aria-hidden="true" />
                <span className="kinetics-map-stage-copy">
                  <strong>{point.descriptor}</strong>
                  <small>{point.label}</small>
                </span>
                <span className="kinetics-map-stage-value">{point.value}</span>
              </button>
            );
          })}
        </div>
      </div>
      {activePoint && (
        <div
          aria-live="polite"
          className="funnel-chart-detail kinetics-map-detail"
          id={detailId}
          role="region"
        >
          <div className="funnel-chart-detail-heading">
            <strong>{activePoint.label}</strong>
            <span>{activePointCategory}</span>
          </div>
          <p>{activePoint.value}</p>
          <small>Source wording is shown here in full. The order is conceptual; no numeric timing is inferred.</small>
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
