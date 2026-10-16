"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Cigarette, Droplets, Layers3, Pill, Syringe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import type { Substance } from "@/lib/types";
import { evidenceKey, recordId } from "@/lib/research";
import { getEliminationModel } from "@/lib/kinetics";
import { EvidenceButton } from "@/components/evidence";
import { DurationTimeline } from "@/components/duration-timeline";
import { KineticsChart } from "@/components/kinetics-chart";
import { Citation } from "@/components/citation";
import { SwitchingTabs } from "@/components/switching-tabs";
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
  const defaultPk = observations.find((observation) => observation.id === initialId && getEliminationModel(observation))
    ?? observations.find((observation) => getEliminationModel(observation))
    ?? observations.find((observation) => observation.id === initialId)
    ?? observations[0];
  const [routeId, setRouteId] = useState(routes[0] ? recordId(routes[0]) : ""),
    [pkId, setPkId] = useState(defaultPk?.id ?? "");
  const reducedMotion = useReducedMotion();
  const route = routes.find((r) => recordId(r) === routeId) ?? routes[0],
    pk = observations.find((p) => p.id === pkId) ?? observations[0];
  const modelObservations = observations.filter((observation) => Boolean(getEliminationModel(observation)));
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
  const observationTabs = observations.map((observation) => ({
    id: observation.id,
    label: modelLabel(observation.route),
    icon: modelIcon(modelTone(observation.route)),
    tone: modelTone(observation.route),
    badge: observation.statistic,
    ariaLabel: `${observation.analyte} · ${observation.route} · ${observation.formulation} · ${observation.statistic}`,
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
      {observations.length > 0 && pk ? (
        <SwitchingTabs
          ariaLabel="Available elimination models"
          items={observationTabs}
          onChange={setPkId}
          panel={(
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
                key={pk.id}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <p className="route-dose-panel-caption"><span>{pk.route}</span> · {pk.formulation} · {pk.statistic}</p>
                <KineticsChart observation={pk} sourceHref={`#reference-${pk.sourceId}`} />
                <div className="mt-3">
                  <EvidenceButton evidenceKey={evidenceKey(slug, "pk", pk)} />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
          value={pk.id}
        />
      ) : (
        <>
          <KineticsChart observation={pk} sourceHref={`#reference-${pk?.sourceId ?? kinetics.sourceId}`} />
          {pk && <div className="mt-3"><EvidenceButton evidenceKey={evidenceKey(slug, "pk", pk)} /></div>}
        </>
      )}
    </div>
  );
}

type ModelTone = "intranasal" | "oral" | "intravenous" | "smoking" | "other";

function modelTone(route: string): ModelTone {
  const value = route.toLowerCase();
  const tones: [ModelTone, RegExp][] = [
    ["intranasal", /\b(?:intranasal|nasal)\b/],
    ["oral", /\b(?:oral|by mouth|per os|po)\b/],
    ["intravenous", /\b(?:intravenous|iv)\b/],
    ["smoking", /\b(?:smok(?:e|ed|ing)|inhal(?:ed|ation))\b/],
  ];
  const matches = tones.filter(([, pattern]) => pattern.test(value)).map(([tone]) => tone);
  return matches.length === 1 ? matches[0] : "other";
}

function modelLabel(route: string) {
  const value = route.toLowerCase();
  const matches = [
    /\b(?:intranasal|nasal)\b/.test(value),
    /\b(?:oral|by mouth|per os|po)\b/.test(value),
    /\b(?:intravenous|iv)\b/.test(value),
    /\b(?:smok(?:e|ed|ing)|inhal(?:ed|ation))\b/.test(value),
  ].filter(Boolean).length;
  if (matches > 1) return "Multiroute";
  if (/\b(?:intravenous|iv)\b/.test(value)) return "Intravenous";
  if (/\b(?:oral|by mouth|per os|po)\b/.test(value)) return "Oral";
  if (/\b(?:smok(?:e|ed|ing)|inhal(?:ed|ation))\b/.test(value)) return "Smoking";
  if (/\b(?:intranasal|nasal)\b/.test(value)) return /\btopical\b/.test(value) ? "Topical intranasal" : "Intranasal";
  return route;
}

function modelIcon(tone: ModelTone): LucideIcon {
  switch (tone) {
    case "intranasal": return Droplets;
    case "oral": return Pill;
    case "intravenous": return Syringe;
    case "smoking": return Cigarette;
    default: return Layers3;
  }
}
