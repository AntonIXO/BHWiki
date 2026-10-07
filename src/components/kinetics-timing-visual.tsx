"use client";

import type { LucideIcon } from "lucide-react";
import { Activity, Clock3, Moon, Zap } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

type TimingVisualProps = {
  onset?: string | null;
  peak?: string | null;
  duration?: string | null;
  elimination?: string | null;
};

type TimingPoint = {
  id: "onset" | "peak" | "duration" | "elimination";
  value: string;
  icon: LucideIcon;
  position: number;
};

const pointMeta: Omit<TimingPoint, "value">[] = [
  { id: "onset", icon: Zap, position: 12 },
  { id: "peak", icon: Activity, position: 42 },
  { id: "duration", icon: Moon, position: 74 },
  { id: "elimination", icon: Clock3, position: 92 },
];

const pointLabels: Record<TimingPoint["id"], string> = {
  onset: "Onset",
  peak: "Peak",
  duration: "Duration",
  elimination: "Elimination half-life",
};

const pointShortLabels: Record<TimingPoint["id"], string> = {
  onset: "Onset",
  peak: "Peak",
  duration: "Duration",
  elimination: "Half-life",
};

export function KineticsTimingVisual({ onset, peak, duration, elimination }: TimingVisualProps) {
  const values = { onset, peak, duration, elimination };
  const points = pointMeta.flatMap((meta) => {
    const value = values[meta.id]?.trim();
    return value ? [{ ...meta, value }] : [];
  });
  if (!points.length) return null;

  return (
    <div className="kinetics-visual" role="group" aria-label="Interactive sourced timing visualization">
      <div className="kinetics-visual-chart">
        <svg viewBox="0 0 360 132" role="img" aria-label="Sourced timing trajectory from onset through peak and duration">
          <defs>
            <linearGradient id="kinetics-curve-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity=".24" />
              <stop offset="1" stopColor="currentColor" stopOpacity=".02" />
            </linearGradient>
          </defs>
          <path className="kinetics-visual-grid" d="M18 24H342M18 58H342M18 92H342" />
          <path className="kinetics-visual-area" d="M18 96 C52 95 68 66 96 52 C126 38 142 27 164 28 C192 29 203 51 228 65 C254 79 288 87 342 90 L342 104 L18 104 Z" />
          <path className="kinetics-visual-curve" d="M18 96 C52 95 68 66 96 52 C126 38 142 27 164 28 C192 29 203 51 228 65 C254 79 288 87 342 90" />
          <path className="kinetics-visual-axis" d="M18 104H342" />
        </svg>
        <div className="kinetics-visual-markers">
        {points.map((point) => {
          const Icon = point.icon;
          const label = pointLabels[point.id];
          return (
            <div key={point.id} className={`kinetics-visual-marker-wrap kinetics-visual-marker-wrap-${point.id}`} style={{ left: `${point.position}%` }}>
              <Popover>
                <PopoverTrigger
                  render={
                    <button
                      type="button"
                      className={`kinetics-visual-marker kinetics-visual-marker-${point.id}`}
                      aria-label={`${label}: ${point.value}`}
                    />
                  }
                >
                  <Icon aria-hidden="true" size={16} />
                </PopoverTrigger>
                <PopoverContent side="top" align="center" className="w-64">
                  <PopoverHeader>
                    <PopoverTitle>{label}</PopoverTitle>
                    <PopoverDescription>{point.value}</PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
              <span className="kinetics-visual-marker-label" aria-hidden="true">{pointShortLabels[point.id]}</span>
            </div>
          );
        })}
        </div>
      </div>
      <div className="kinetics-visual-phase-bar" aria-hidden="true"><span /><span /><span /></div>
    </div>
  );
}
