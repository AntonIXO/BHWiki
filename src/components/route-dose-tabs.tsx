"use client";

/**
 * Compact, route-specific adaptation of KokonutUI's Smooth Tab pattern:
 * https://kokonutui.com/docs/navigation/smooth-tab
 */
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { Droplets, Layers3, Pill, Syringe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Citation } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DoseContext, Reference } from "@/lib/types";

type RouteId = "oral" | "intravenous" | "sublingual" | "other";

type RouteGroup = {
  id: RouteId;
  label: string;
  hint: string;
  doses: DoseContext[];
  icon: LucideIcon;
};

const routeConfig: Omit<RouteGroup, "doses">[] = [
  { id: "oral", label: "Oral", hint: "By mouth", icon: Pill },
  { id: "intravenous", label: "Intravenous", hint: "Into a vein", icon: Syringe },
  { id: "sublingual", label: "Sublingual", hint: "Under the tongue", icon: Droplets },
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
  const oral = /\b(?:oral|by mouth|per os|po)\b/.test(value);
  const intravenous = /\b(?:intravenous|iv)\b/.test(value);
  const sublingual = /\b(?:sublingual|under the tongue|sl)\b/.test(value);
  const knownRoutes = [oral, intravenous, sublingual].filter(Boolean).length;
  if (knownRoutes !== 1 || /(?:,|\bor\b|\band\b|\bthen\b|combined|\/)/.test(value)) return "other" as const;
  if (oral) return "oral" as const;
  if (intravenous) return "intravenous" as const;
  if (sublingual) return "sublingual" as const;
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
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (!activeGroup) return null;

  const activeIndex = groups.findIndex((group) => group.id === activeGroup.id);
  const select = (index: number) => {
    const next = groups[index];
    if (next) setSelectedId(next.id);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % groups.length
      : event.key === "ArrowLeft"
        ? (index - 1 + groups.length) % groups.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? groups.length - 1
            : -1;
    if (nextIndex < 0) return;
    event.preventDefault();
    select(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="route-dose-tabs">
      <LayoutGroup id={`${baseId}-routes`}>
        <div className="route-dose-tab-scroll">
          <div aria-label="Dose routes" className="route-dose-tablist" role="tablist">
            {groups.map((group, index) => {
              const Icon = group.icon;
              const selected = index === activeIndex;
              return (
                <button
                  aria-label={`${group.label}, ${group.doses.length} ${group.doses.length === 1 ? "record" : "records"}`}
                  aria-controls={`${baseId}-panel-${group.id}`}
                  aria-selected={selected}
                  className={`route-dose-tab route-dose-tab--${group.id}`}
                  id={`${baseId}-tab-${group.id}`}
                  key={group.id}
                  onClick={() => select(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                >
                  {selected && <motion.span aria-hidden="true" className="route-dose-tab-indicator" layoutId="route-dose-tab-indicator" transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 450, damping: 36 }} />}
                  <span className="route-dose-tab-label"><Icon aria-hidden="true" size={15} /><span>{group.label}</span><small>{group.doses.length}</small></span>
                </button>
              );
            })}
          </div>
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="route-dose-panel"
            exit={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
            id={`${baseId}-panel-${activeGroup.id}`}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
            key={activeGroup.id}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeGroup.id}`}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="route-dose-panel-caption"><span>{activeGroup.label}</span> · {activeGroup.hint} · {activeGroup.doses.length} {activeGroup.doses.length === 1 ? "record" : "records"}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {activeGroup.doses.map((dose, index) => <DoseCard dose={dose} key={`${dose.label}-${index}`} references={references} route={activeGroup.id} />)}
            </div>
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
