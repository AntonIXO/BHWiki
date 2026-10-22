"use client";

import { useId, useState, type MouseEvent } from "react";
import { fractionRemaining, getEliminationModel, type EliminationModel } from "@/lib/kinetics";
import type { PKObservation } from "@/lib/types";
import { EvidenceButton } from "@/components/evidence";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type KineticsChartProps = {
  observation: PKObservation | undefined;
  sourceHref: string;
  evidenceKey?: string;
};

function revealArticleReference(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!(target instanceof HTMLElement)) return;
  const disclosure = target.closest("#research-sources");
  const panel = disclosure?.querySelector<HTMLElement>("[data-slot='collapsible-content']");
  const isHidden = panel && panel.getBoundingClientRect().height === 0;
  if (!isHidden) return;
  const trigger = disclosure?.querySelector<HTMLElement>("[data-slot='collapsible-trigger']");
  if (!trigger) return;
  event.preventDefault();
  trigger.click();
  window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
}

function SourceContextLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="kinetics-source-context-link"
      onClick={(event) => revealArticleReference(event, href)}
    >
      Read source context <span aria-hidden="true">↗</span>
    </a>
  );
}

function UnmodeledElimination({
  observation,
  sourceHref,
  evidenceKey,
}: {
  observation: PKObservation;
  sourceHref: string;
  evidenceKey?: string;
}) {
  return (
    <div className="kinetics-unmodeled" data-component="unmodeled-elimination">
      <div className="kinetics-unmodeled-heading">
        <div>
          <Badge variant="secondary">Not modeled</Badge>
          <p className="kinetics-unmodeled-kicker">Elimination model</p>
          <h3>An elimination model is not established for this observation.</h3>
        </div>
        <span className="kinetics-unmodeled-status">Source-bound record</span>
      </div>
      <p className="kinetics-unmodeled-lede">
        This observation provides context about the measured record, but it does not support a first-order elimination curve.
      </p>
      <dl className="kinetics-unmodeled-fields">
        <div><dt>Measured analyte</dt><dd>{observation.analyte}</dd></div>
        <div><dt>Route</dt><dd>{observation.route}</dd></div>
        <div><dt>Formulation</dt><dd>{observation.formulation}</dd></div>
        <div><dt>Population</dt><dd>{observation.population}</dd></div>
      </dl>
      <div className="kinetics-unmodeled-context">
        <p className="kinetics-unmodeled-kicker">Source context</p>
        <blockquote>{observation.context}</blockquote>
        <SourceContextLink href={sourceHref} />
      </div>
      {evidenceKey && (
        <div className="kinetics-unmodeled-actions">
          <span>Review the supporting record and source details.</span>
          <EvidenceButton evidenceKey={evidenceKey} />
        </div>
      )}
    </div>
  );
}

export function KineticsChart({ observation, sourceHref, evidenceKey }: KineticsChartProps) {
  const model = getEliminationModel(observation);
  if (!observation || !model) {
    return observation ? (
      <UnmodeledElimination observation={observation} sourceHref={sourceHref} evidenceKey={evidenceKey} />
    ) : (
      <div className="kinetics-unmodeled" data-component="unmodeled-elimination">
        <Badge variant="secondary">Not modeled</Badge>
        <h3>An elimination model is not established for this observation.</h3>
      </div>
    );
  }
  return <EliminationChart key={`${observation.id}:${model.minimum}:${model.maximum}`} observation={observation} model={model} sourceHref={sourceHref} evidenceKey={evidenceKey} />;
}

function hours(value: number) {
  return new Intl.NumberFormat("en", { maximumSignificantDigits: 3 }).format(value);
}

/** Two decimal places keep the server and browser SVG attributes identical. */
function px(value: number) {
  return value.toFixed(2);
}

function EliminationChart({ observation, model, sourceHref, evidenceKey }: KineticsChartProps & { observation: PKObservation; model: EliminationModel }) {
  const id = useId();
  const [selectedHalfLife, setSelectedHalfLife] = useState(model.initialHalfLife);
  const [doseInput, setDoseInput] = useState("");
  const parsedDose = Number(doseInput);
  const dose = doseInput.trim() !== "" && Number.isFinite(parsedDose) && parsedDose > 0 ? parsedDose : null;
  const invalidDose = doseInput !== "" && dose === null;
  const remainingLabel = (fraction: number) => dose === null ? `${fraction * 100}% remains` : `${hours(dose * fraction)} mg remains (${fraction * 100}%)`;
  const halfLife = Math.min(model.maximum, Math.max(model.minimum, selectedHalfLife));
  const endTime = model.maximum * 5;
  const left = 44;
  const top = 18;
  const plotWidth = 552;
  const plotHeight = 165;
  const points = Array.from({ length: 121 }, (_, index) => {
    const t = (index / 120) * endTime;
    const remaining = fractionRemaining(t, halfLife);
    return `${px(left + (t / endTime) * plotWidth)},${px(top + (1 - remaining) * plotHeight)}`;
  }).join(" ");
  const halfLifeX = px(left + (halfLife / endTime) * plotWidth);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Illustrative elimination model</p>
            <CardTitle>
              <h3>{model.analyte} remaining over time</h3>
            </CardTitle>
          </div>
          <Badge variant="outline">Single exposure</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-sm">
        <p className="text-muted-foreground">The modeled analyte is <strong className="text-foreground">{model.analyte}</strong>. The curve begins after absorption and distribution; it does not predict onset, felt effects, or an individual’s response.</p>
        <p><strong>Route:</strong> {observation.route}. <strong>Formulation:</strong> {observation.formulation}. <strong>Population:</strong> {observation.population}.</p>
        <p>{observation.context} <SourceContextLink href={sourceHref} /></p>
        <p><strong>{model.statisticLabel}:</strong> {hours(model.minimum)}{model.minimum < model.maximum ? `–${hours(model.maximum)}` : ""} hours.</p>
        {model.adjustable ? (
          <>
            <div className="kinetics-slider-heading flex items-baseline justify-between gap-3">
              <label htmlFor={`${id}-range`}>Illustrative chosen half-life</label>
              <output htmlFor={`${id}-range`} className="text-2xl tracking-tight">{hours(halfLife)} <span className="text-sm text-muted-foreground">hours</span></output>
            </div>
            <p id={`${id}-range-help`} className="text-muted-foreground">The midpoint is the initial illustrative choice within the reported range. It is not a measured average or a prediction.</p>
            <input
              id={`${id}-range`}
              className="kinetics-slider"
              type="range"
              min={model.minimum}
              max={model.maximum}
              step={(model.maximum - model.minimum) / 100 || "any"}
              value={halfLife}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (Number.isFinite(value)) setSelectedHalfLife(value);
              }}
              aria-describedby={`${id}-range-help`}
              aria-valuetext={`${hours(halfLife)} hours`}
            />
            <div className="flex justify-between gap-3 text-muted-foreground">
              <span>{hours(model.minimum)} h</span>
              <span>Reported range</span>
              <span>{hours(model.maximum)} h</span>
            </div>
          </>
        ) : (
          <p className="text-muted-foreground">The model uses this single {observation.statistic === "study-mean" ? "study mean" : "reported estimate"}; no range is inferred.</p>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-dose`}>Illustrative dose of {model.analyte} (mg, optional)</label>
          <Input id={`${id}-dose`} type="number" min="0" step="any" inputMode="decimal" placeholder="Enter amount in mg" value={doseInput} onChange={event => setDoseInput(event.target.value)} aria-describedby={`${id}-dose-help${invalidDose ? ` ${id}-dose-error` : ""}`} aria-invalid={invalidDose}/>
          <p id={`${id}-dose-help`} className="text-muted-foreground">The model treats this as the starting amount of {model.analyte} after absorption and distribution. It does not calculate bioavailability or conversion from another substance. Leave blank to view percentages.</p>
          {invalidDose && <p id={`${id}-dose-error`} className="kinetics-dose-error text-destructive" role="status">Enter a finite amount greater than zero in mg.</p>}
        </div>
        <div className="kinetics-axis-label">{model.analyte} remaining ({dose === null ? "%" : "mg"})</div>

        <svg className="kinetics-svg h-auto w-full overflow-visible text-foreground" viewBox="0 0 616 218" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>{`${model.analyte}: illustrative elimination with a ${hours(halfLife)} hour half-life`}</title>
          <desc id={`${id}-description`}>A first-order elimination model of {model.analyte}. {dose !== null && `Starting amount: ${hours(dose)} mg. `}{remainingLabel(0.5)} after {hours(halfLife)} hours and {remainingLabel(0.25)} after {hours(halfLife * 2)} hours. Horizontal axis: elapsed hours after absorption and distribution. Vertical axis: {dose === null ? "percentage" : "milligrams"} of the modeled analyte remaining. This is a mathematical illustration, not a personalized prediction.</desc>
          <defs>
            <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[0, 25, 50, 75, 100].map((percent) => {
            const y = top + ((100 - percent) / 100) * plotHeight;
            return (
              <g key={percent}>
                <line x1={left} x2={left + plotWidth} y1={px(y)} y2={px(y)} stroke="var(--border)" strokeDasharray={percent === 0 ? undefined : "3 5"} />
                <text x={left - 12} y={px(y + 4)} textAnchor="end" className="fill-muted-foreground text-xs">{dose === null ? percent : hours(dose * (percent / 100))}</text>
              </g>
            );
          })}
          <polygon points={`${left},${top + plotHeight} ${points} ${left + plotWidth},${top + plotHeight}`} fill={`url(#${id}-fill)`} />
          <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1={halfLifeX} x2={halfLifeX} y1={px(top + plotHeight / 2)} y2={top + plotHeight} stroke="var(--muted-foreground)" strokeDasharray="4 4" />
          <circle cx={halfLifeX} cy={px(top + plotHeight / 2)} r="4.5" fill="currentColor" stroke="var(--background)" strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <text key={index} x={px(left + (index / 5) * plotWidth)} y={px(top + plotHeight + 24)} textAnchor="middle" className="fill-muted-foreground text-xs">
              {hours((index / 5) * endTime)} h
            </text>
          ))}
        </svg>
        <Table className="kinetics-readouts" aria-live="polite">
          <TableHeader>
            <TableRow>
              <TableHead>Elapsed</TableHead>
              <TableHead>Remaining</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>After {hours(halfLife)} h</TableCell>
              <TableCell>{remainingLabel(0.5)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>After {hours(halfLife * 2)} h</TableCell>
              <TableCell>{remainingLabel(0.25)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>After {hours(halfLife * 5)} h</TableCell>
              <TableCell>{remainingLabel(0.03125)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-muted-foreground">
          Model: fraction remaining = 2<sup>−time / half-life</sup>.{dose !== null && " Amount remaining = starting amount × fraction remaining."} Assumes a single exposure, instantaneous distribution, and a constant half-life for {model.analyte}. Formation of metabolites, repeated exposure, and interactions are not modeled. <SourceContextLink href={sourceHref} />
        </p>
        {evidenceKey && <div className="kinetics-chart-actions"><EvidenceButton evidenceKey={evidenceKey} /></div>}
      </CardContent>
    </Card>
  );
}
