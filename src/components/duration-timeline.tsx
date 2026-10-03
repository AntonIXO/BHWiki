import type { ReactNode } from "react";
import { durationPhaseLabels, formatSpan, elapsedPhases } from "@/lib/duration";
import type { DurationRoute, Substance } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function RouteTiming({
  route,
  citation,
}: {
  route: DurationRoute;
  citation: ReactNode;
}) {
  const elapsed = elapsedPhases(route);
  const max = Math.max(1, ...elapsed.map((p) => p.max));
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          {route.measurement === "plasma"
            ? `Measured plasma timing · ${route.analyte}`
            : route.measurement === "subjective"
              ? "Reported subjective timing"
              : "Measurement type not assessed"}
        </CardDescription>
        <CardTitle>
          {route.route}
          {route.formulation ? ` · ${route.formulation}` : ""}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>{route.population}</p>
        <p>
          <strong>Total reported duration:</strong>{" "}
          {formatSpan(route.total) ?? "Not established"}
        </p>
        {elapsed.length > 0 && (
          <svg
            viewBox={`0 0 560 ${elapsed.length * 34 + 35}`}
            className="w-full"
            role="img"
            aria-label="Sourced elapsed-time ranges since exposure"
          >
            <title>
              Elapsed-time ranges since exposure; rows are independent reported
              ranges
            </title>
            {elapsed.map((phase, index) => (
              <g key={phase.name}>
                <text
                  x={0}
                  y={index * 34 + 22}
                  fontSize={12}
                  fill="currentColor"
                >
                  {durationPhaseLabels[phase.name]}
                </text>
                <line
                  x1={112 + (phase.min / max) * 405}
                  x2={112 + (phase.max / max) * 405}
                  y1={index * 34 + 18}
                  y2={index * 34 + 18}
                  stroke="currentColor"
                  strokeWidth={6}
                />
                <circle
                  cx={112 + (phase.min / max) * 405}
                  cy={index * 34 + 18}
                  r={3}
                  fill="currentColor"
                />
              </g>
            ))}
            <text
              x={112}
              y={elapsed.length * 34 + 20}
              fontSize={12}
              fill="currentColor"
            >
              0 min
            </text>
            <text
              x={520}
              y={elapsed.length * 34 + 20}
              textAnchor="end"
              fontSize={12}
              fill="currentColor"
            >
              {max} min since exposure
            </text>
          </svg>
        )}
        <dl className="grid gap-3 sm:grid-cols-2">
          {route.phases.map((p) => (
            <div key={p.name}>
              <dt className="text-sm text-muted-foreground">
                {durationPhaseLabels[p.name]} ·{" "}
                {p.basis === "elapsed-since-exposure"
                  ? "Since exposure"
                  : p.basis === "phase-duration"
                    ? "Phase duration"
                    : "Time basis not assessed"}
              </dt>
              <dd>{formatSpan(p) ?? "Not established"}</dd>
            </div>
          ))}
        </dl>
        <p>{route.note}</p>
        <p className="text-sm text-muted-foreground">
          Reported ranges retain the source context. Phase durations are not
          added together to construct a timeline. {citation}
        </p>
      </CardContent>
    </Card>
  );
}
export function DurationTimeline({
  kinetics,
  citationFor,
}: {
  accent?: string;
  kinetics: Substance["kinetics"];
  citationFor: (id: string) => ReactNode;
}) {
  const routes = kinetics.timeline ?? [];
  return routes.length ? (
    <div className="flex flex-col gap-4">
      {routes.map((route) => (
        <RouteTiming
          key={`${route.route}-${route.sourceId}-${route.id ?? route.formulation ?? ""}`}
          route={route}
          citation={citationFor(route.sourceId)}
        />
      ))}
    </div>
  ) : (
    <Card>
      <CardHeader>
        <CardTitle>Published timing summary</CardTitle>
        <CardDescription>
          Separate numeric phase measurements have not been curated.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p>
          <strong>Onset:</strong> {kinetics.onset}
        </p>
        <p>
          <strong>Peak, as described by the source:</strong> {kinetics.peak}
        </p>
        <p>
          <strong>Duration:</strong> {kinetics.duration}
        </p>
        <p className="text-sm text-muted-foreground">
          Not established as a numeric timeline. Plasma timing and felt effects
          are distinct measurements. {citationFor(kinetics.sourceId)}
        </p>
      </CardContent>
    </Card>
  );
}
