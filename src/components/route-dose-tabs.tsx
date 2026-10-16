"use client";

/**
 * Compact, route-specific adaptation of KokonutUI's Smooth Tab pattern:
 * https://kokonutui.com/docs/navigation/smooth-tab
 */
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Cigarette, Droplets, Layers3, Pill, Syringe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Citation } from "@/components/citation";
import { SwitchingTabs } from "@/components/switching-tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DoseContext, Reference } from "@/lib/types";

type RouteId = "intranasal" | "oral" | "intravenous" | "sublingual" | "smoking" | "other";

type RouteGroup = {
  id: RouteId;
  label: string;
  hint: string;
  doses: DoseContext[];
  icon: LucideIcon;
};

const routeConfig: Omit<RouteGroup, "doses">[] = [
  { id: "intranasal", label: "Intranasal", hint: "Through the nasal mucosa", icon: Droplets },
  { id: "oral", label: "Oral", hint: "By mouth", icon: Pill },
  { id: "intravenous", label: "Intravenous", hint: "Into a vein", icon: Syringe },
  { id: "sublingual", label: "Sublingual", hint: "Under the tongue", icon: Droplets },
  { id: "smoking", label: "Smoking", hint: "By smoking", icon: Cigarette },
  { id: "other", label: "Other routes", hint: "Other or unspecified", icon: Layers3 },
];

const doseCategories = {
  research: "Research exposure",
  "approved-label": "Approved-label context",
  reference: "Reference description",
  community: "Community description",
} as const;

const foodRelationLabels: Record<NonNullable<DoseContext["foodRelation"]>, string> = {
  "empty-stomach": "Empty stomach",
  "with-food": "With food",
  "with-or-without-food": "With or without food",
  "food-effect-not-established": "Food effect not established",
};

const solubilityLabels: Record<NonNullable<DoseContext["solubility"]>, string> = {
  "water-soluble": "Water-soluble",
  "fat-soluble": "Fat-soluble",
  "formulation-dependent": "Formulation-dependent solubility",
  "solubility-not-established": "Solubility not established",
};

const missingValue = /^(?:amount |formulation )?not established$|^(?:not assessed|not reported|no data|unknown|n\/a)\.?$/i;

function present(value: string | null | undefined) {
  const trimmed = value?.trim();
  return trimmed && !missingValue.test(trimmed) ? trimmed : null;
}

function routeId(route: string) {
  const value = route.trim().toLowerCase();
  const intranasal = /\b(?:intranasal|nasal)\b/.test(value);
  const oral = /\b(?:oral|by mouth|per os|po)\b/.test(value);
  const intravenous = /\b(?:intravenous|iv)\b/.test(value);
  const sublingual = /\b(?:sublingual|under the tongue|sl)\b/.test(value);
  const smoking = /\b(?:smok(?:e|ed|ing)|inhal(?:ed|ation))\b/.test(value);
  const knownRoutes = [intranasal, oral, intravenous, sublingual, smoking].filter(Boolean).length;
  if (knownRoutes !== 1 || /(?:,|\bor\b|\band\b|\bthen\b|combined|\/)/.test(value)) return "other" as const;
  if (intranasal) return "intranasal" as const;
  if (oral) return "oral" as const;
  if (intravenous) return "intravenous" as const;
  if (sublingual) return "sublingual" as const;
  if (smoking) return "smoking" as const;
  return "other" as const;
}

function doseQuantity(dose: DoseContext) {
  if (dose.quantity !== null) {
    const quantity = new Intl.NumberFormat("en", { maximumFractionDigits: 6 }).format(dose.quantity);
    const maximum = dose.quantityMax === null
      ? ""
      : `–${new Intl.NumberFormat("en", { maximumFractionDigits: 6 }).format(dose.quantityMax)}`;
    const unit = present(dose.unit);
    return `${quantity}${maximum}${unit ? ` ${unit}` : ""}`;
  }
  return present(dose.amount);
}

function DoseSource({ dose, references }: { dose: DoseContext; references: Reference[] }) {
  const index = references.findIndex((reference) => reference.id === dose.sourceId);
  const reference = index < 0 ? undefined : references[index];
  if (!reference) return null;
  return (
    <Citation
      reference={reference}
      href={`#reference-${dose.sourceId}`}
      label={`[${index + 1}]`}
      ariaLabel={`Reference ${index + 1}: ${reference.title}`}
    />
  );
}

function DoseCard({ dose, references, route }: { dose: DoseContext; references: Reference[]; route: RouteId }) {
  const quantity = doseQuantity(dose);
  const intakeBadges = [
    dose.foodRelation ? foodRelationLabels[dose.foodRelation] : null,
    dose.solubility ? solubilityLabels[dose.solubility] : null,
  ].filter(Boolean);
  const context = [
    ["Ingredient / form", [present(dose.ingredient), present(dose.formulation)].filter(Boolean).join(" · ")],
    ["Route", present(dose.route)],
    ["Frequency", present(dose.frequency)],
    ["Duration", present(dose.duration)],
    ["Population", present(dose.population)],
    ["Purpose", present(dose.purpose)],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <Card size="sm" className={`route-dose-card route-dose-card--${route}`}>
      <CardHeader>
        <CardTitle><h3>{dose.label}</h3></CardTitle>
        <CardAction><Badge variant="outline">{doseCategories[dose.sourceCategory]}</Badge></CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        {quantity && (
          <p className="text-base font-medium tabular-nums">
            {quantity} <DoseSource dose={dose} references={references} />
          </p>
        )}
        {intakeBadges.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-label="Intake and absorption details">
            {intakeBadges.map((label) => <Badge key={label} variant="outline" className="text-[0.68rem]">{label}</Badge>)}
          </div>
        )}
        {context.length > 0 && (
          <dl className="route-dose-context">
            {context.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        )}
        {present(dose.absorptionNote) && <p className="route-dose-note"><strong>Absorption context</strong> {present(dose.absorptionNote)}</p>}
        {present(dose.note) && <p className="route-dose-note">{dose.note}</p>}
      </CardContent>
    </Card>
  );
}

export function RouteDoseTabs({ doses, references }: { doses: DoseContext[]; references: Reference[] }) {
  const groups = useMemo<RouteGroup[]>(() => routeConfig
    .map((config) => ({ ...config, doses: doses.filter((dose) => routeId(dose.route) === config.id) }))
    .filter((group) => group.doses.length > 0), [doses]);
  const [selectedId, setSelectedId] = useState<RouteId | undefined>(groups[0]?.id);
  const activeGroup = groups.find((group) => group.id === selectedId) ?? groups[0];
  const reducedMotion = useReducedMotion();

  if (!activeGroup) return null;

  return (
    <SwitchingTabs
      ariaLabel="Dose routes"
      items={groups.map((group) => ({ id: group.id, label: group.label, icon: group.icon, tone: group.id, count: group.doses.length }))}
      onChange={(id) => setSelectedId(id as RouteId)}
      panel={(
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
            key={activeGroup.id}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="route-dose-panel-caption"><span>{activeGroup.label}</span> · {activeGroup.hint} · {activeGroup.doses.length} {activeGroup.doses.length === 1 ? "record" : "records"}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {activeGroup.doses.map((dose, index) => <DoseCard dose={dose} key={`${dose.label}-${index}`} references={references} route={activeGroup.id} />)}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      value={activeGroup.id}
    />
  );
}
