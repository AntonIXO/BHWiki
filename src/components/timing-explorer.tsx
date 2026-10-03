"use client";
import { useState } from "react";
import type { Substance } from "@/lib/types";
import { evidenceKey, recordId } from "@/lib/research";
import { EvidenceButton } from "@/components/evidence";
import { DurationTimeline } from "@/components/duration-timeline";
import { KineticsChart } from "@/components/kinetics-chart";
import { Citation } from "@/components/citation";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function TimingExplorer({
  slug,
  kinetics,
  observations,
  initialId,
  references,
}: {
  slug: string;
  kinetics: Substance["kinetics"];
  observations: Substance["pkObservations"];
  initialId: string;
  references: Substance["references"];
}) {
  const routes = kinetics.timeline ?? [];
  const [routeId, setRouteId] = useState(routes[0] ? recordId(routes[0]) : ""),
    [pkId, setPkId] = useState(initialId);
  const route = routes.find((r) => recordId(r) === routeId) ?? routes[0],
    pk = observations.find((p) => p.id === pkId) ?? observations[0];
  const cite = (id: string) => {
    const ref = references.find((r) => r.id === id);
    return ref ? (
      <Citation reference={ref} href={`#reference-${id}`} label="Source" />
    ) : null;
  };
  const routeOptions = routes.map((r) => ({
    value: recordId(r),
    label: `${r.route} · ${r.formulation ?? "Formulation unassessed"} · ${r.measurement ?? "Measurement unassessed"} · ${r.population}`,
  }));
  const pkOptions = observations.map((p) => ({
    value: p.id,
    label: `${p.analyte} · ${p.route} · ${p.formulation} · ${p.statistic}`,
  }));
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-medium">Timing explorer</h3>
      {routes.length > 0 && (
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor={`timing-${slug}`}>Timing context</FieldLabel>
            <Select
              items={routeOptions}
              value={route ? recordId(route) : ""}
              onValueChange={(v) => {
                if (v) setRouteId(v);
              }}
            >
              <SelectTrigger id={`timing-${slug}`} className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {routeOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      )}
      <DurationTimeline
        kinetics={{ ...kinetics, timeline: route ? [route] : [] }}
        citationFor={cite}
      />
      {route && (
        <div>
          <EvidenceButton evidenceKey={evidenceKey(slug, "duration", route)} />
        </div>
      )}
      <h3 className="text-xl font-medium">Modeled elimination</h3>
      <p className="text-muted-foreground">
        The elimination model describes the named analyte after absorption and
        distribution. It does not establish felt-effect timing.
      </p>
      {observations.length > 0 && (
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor={`pk-select-${slug}`}>
              Elimination observation
            </FieldLabel>
            <Select
              items={pkOptions}
              value={pk?.id ?? ""}
              onValueChange={(v) => {
                if (v) setPkId(v);
              }}
            >
              <SelectTrigger id={`pk-select-${slug}`} className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {pkOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      )}
      <KineticsChart
        observation={pk}
        sourceHref={`#reference-${pk?.sourceId ?? kinetics.sourceId}`}
      />
      {pk && (
        <div>
          <EvidenceButton evidenceKey={evidenceKey(slug, "pk", pk)} />
        </div>
      )}
    </div>
  );
}
