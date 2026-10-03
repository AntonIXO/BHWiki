import type { ReactNode } from "react";
import { durationPhaseLabels, durationPhaseOrder, formatSpan, phaseWeights } from "@/lib/duration";
import type { DurationPhaseName, DurationRoute, Substance } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const phaseTone: Record<DurationPhaseName, string> = {
  onset: "bg-foreground/15",
  comeup: "bg-foreground/35",
  peak: "",
  offset: "bg-foreground/35",
  "after-effects": "bg-foreground/15",
};

function TimingCard({
  title,
  description,
  total,
  rows,
  weights,
  accent,
  note,
  citation,
}: {
  title: string;
  description: string;
  total: string;
  rows: { term: string; detail: string }[];
  weights: { name: DurationPhaseName; weight: number }[];
  accent: string;
  note: string | null;
  citation: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle><h3>{title}</h3></CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Total</p>
          <p className="text-2xl font-medium">{total}</p>
        </div>
        {weights.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <div className="flex h-3 overflow-hidden rounded-full bg-muted" data-duration-bar aria-hidden="true">
              {weights.map((segment) => (
                <div
                  key={segment.name}
                  className={cn("h-full", phaseTone[segment.name])}
                  style={{
                    width: `${segment.weight * 100}%`,
                    ...(segment.name === "peak" ? { backgroundColor: accent } : {}),
                  }}
                />
              ))}
            </div>
            <div className="flex text-xs text-muted-foreground" aria-hidden="true">
              {weights.map((segment) => (
                <span key={segment.name} className="truncate" style={{ width: `${segment.weight * 100}%` }}>
                  {durationPhaseLabels[segment.name]}
                </span>
              ))}
            </div>
          </div>
        )}
        <dl className="grid gap-3 sm:grid-cols-2">
          {rows.map((row) => (
            <div key={row.term} className="flex min-w-0 flex-col gap-1">
              <dt className="text-sm text-muted-foreground">{row.term}</dt>
              <dd className="break-words">{row.detail}</dd>
            </div>
          ))}
        </dl>
        {note && <p>{note}</p>}
        <p className="text-sm text-muted-foreground">Reported timing in the cited context. It is not a personal prediction. {citation}</p>
      </CardContent>
    </Card>
  );
}

function routeRows(route: DurationRoute): { term: string; detail: string }[] {
  return durationPhaseOrder.map((name) => {
    const phase = route.phases.find((item) => item.name === name);
    return { term: durationPhaseLabels[name], detail: formatSpan(phase) ?? "Not established" };
  });
}

export function DurationTimeline({
  accent,
  kinetics,
  citationFor,
}: {
  accent: string;
  kinetics: Substance["kinetics"];
  citationFor: (sourceId: string) => ReactNode;
}) {
  const routes = kinetics.timeline ?? [];
  if (!routes.length) {
    return (
      <TimingCard
        title="Effect timing"
        description="Phase ranges are not established in the cited sources."
        total={kinetics.duration || "Not established"}
        rows={[
          { term: "Onset", detail: kinetics.onset || "Not established" },
          { term: "Come up", detail: "Not established" },
          { term: "Peak", detail: kinetics.peak || "Not established" },
          { term: "Offset", detail: "Not established" },
          { term: "After effects", detail: "Not established" },
        ]}
        weights={[]}
        accent={accent}
        note={null}
        citation={citationFor(kinetics.sourceId)}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {routes.map((route) => (
        <TimingCard
          key={`${route.route}-${route.sourceId}`}
          title={route.route}
          description={route.population}
          total={formatSpan(route.total) ?? "Not established"}
          rows={routeRows(route)}
          weights={phaseWeights(route.phases)}
          accent={accent}
          note={route.note}
          citation={citationFor(route.sourceId)}
        />
      ))}
    </div>
  );
}
