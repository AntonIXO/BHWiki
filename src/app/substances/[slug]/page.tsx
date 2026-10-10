import { EvidenceButton } from "@/components/evidence";
import { SourceDisclosures } from "@/components/source-disclosures";
import { EffectPreview } from "@/components/effect-preview";
import { TimingExplorer } from "@/components/timing-explorer";
import { MechanismExplorer } from "@/components/mechanism-explorer";
import { StudyPlots } from "@/components/study-plots";
import { KineticsTimingVisual } from "@/components/kinetics-timing-visual";
import { evidenceKey, observationMagnitude, observationRows, plotGroups } from "@/lib/research";
import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, BookOpen, BookOpenCheck, Brain, ChartColumnBig, CircleDot, Clock3, Compass, FlaskConical, GitBranch, Globe, HeartPulse, History, Layers3, MoveHorizontal, Network, Pill, Scale, ShieldAlert, ShieldCheck, Target, TriangleAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Citation } from "@/components/citation";
import { Prose } from "@/components/prose";
import { MoleculeImage } from "@/components/molecule-image";
import { SectionNav } from "@/components/section-nav";
import { Breadcrumb } from "@/components/shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { indexEntities, type EntityIndex } from "@/lib/entities";
import { getSubstance, getCatalog, getConcepts, getKnowledgeGraph } from "@/lib/repository";
import { conceptPath, type DoseContext, type Observation, type Substance } from "@/lib/types";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const substance = await getSubstance((await params).slug);
  return { title: substance ? `${substance.name} — effects, evidence & pharmacokinetics` : "Substance not found", description: substance?.summary };
}

function Source({ substance, id }: { substance: Substance; id: string }) {
  const index = substance.references.findIndex(reference => reference.id === id);
  if (index < 0) return <span className="text-sm text-muted-foreground">[Source needed: {id || "unlinked claim"}]</span>;
  const reference = substance.references[index];
  return <Citation reference={reference} href={`#reference-${id}`} label={`[${index + 1}]`} ariaLabel={`Reference ${index + 1}: ${reference.title}`} />;
}

function dateLabel(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Not recorded" : date.toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function doseQuantity(dose: DoseContext) {
  if (dose.quantity === null) return dose.amount || "Amount not established";
  const quantity = new Intl.NumberFormat("en", { maximumFractionDigits: 6 }).format(dose.quantity);
  const maximum = dose.quantityMax === null ? "" : `–${new Intl.NumberFormat("en", { maximumFractionDigits: 6 }).format(dose.quantityMax)}`;
  return `${quantity}${maximum} ${dose.unit}`;
}

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

function IntakeBadges({ dose }: { dose: DoseContext }) {
  if (!dose.foodRelation && !dose.solubility) return null;
  return (
    <div className="flex flex-wrap gap-2" aria-label="Intake and absorption details">
      {dose.foodRelation && <Badge variant="outline" className="border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100">{foodRelationLabels[dose.foodRelation]}</Badge>}
      {dose.solubility && <Badge variant="outline" className="border-violet-300 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-100">{solubilityLabels[dose.solubility]}</Badge>}
    </div>
  );
}

function EntityLink({ id, entities }: { id: string; entities: EntityIndex }) {
  const record = entities.substanceLink(id);
  return record.href ? <Link href={record.href} className="underline underline-offset-4">{record.label}</Link> : <span>{record.label}</span>;
}

function DataEmpty({ children }: { children: ReactNode }) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyDescription>{children}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

const sectionIcons: Record<string, LucideIcon> = {
  Overview: Compass,
  "Measured outcomes": ChartColumnBig,
  "Doses & routes": Pill,
  Pharmacokinetics: Clock3,
  "Safety & uncertainty": ShieldAlert,
  "Research & sources": BookOpen,
  "Connected claims": Network,
  "Legal context": Scale,
  "Editorial history": History,
};

function SectionHeading({ number, title, extra }: { number?: string; title: string; extra?: ReactNode }) {
  const Icon = sectionIcons[title] ?? CircleDot;
  return (
    <div className="section-heading flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="section-heading-icon" aria-hidden="true"><Icon size={17} /></span>
          {number && <span className="section-heading-number text-sm text-muted-foreground">{number}</span>}
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>
        {extra}
      </div>
      <Separator />
    </div>
  );
}

function ContextList({ items }: { items: { term: string; detail: ReactNode }[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {items.map(item => (
        <div key={item.term} className="flex min-w-0 flex-col gap-1">
          <dt className="text-sm text-muted-foreground">{item.term}</dt>
          <dd className="break-words">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

const doseCategories = { research: "Research exposure", "approved-label": "Approved-label context", reference: "Reference description", community: "Community description" } as const;
const statisticLabels = { "reported-range": "Reported range", "study-mean": "Study mean", approximate: "Approximate estimate", "not-established": "No numeric estimate" } as const;

function Direction({ direction }: { direction: Observation["direction"] }) {
  const Icon = direction === "Increased" ? ArrowUp : direction === "Decreased" ? ArrowDown : MoveHorizontal;
  return <Badge variant="outline"><Icon aria-hidden="true" />{direction}</Badge>;
}

function ObservationMatrix({ observations, substance, entities, measured = false }: { observations: Observation[]; substance: Substance; entities: EntityIndex; measured?: boolean }) {
  if (!observations.length) return <DataEmpty>Not assessed. No sourced {measured ? "measured outcomes" : "subjective observations"} have been curated for this article.</DataEmpty>;
  if (measured) return (
    <div className="outcome-list">
      {observations.map((effect, index) => {
        const concept = entities.conceptById.get(effect.conceptId);
        const Icon = effect.direction === "Increased" ? ArrowUp : effect.direction === "Decreased" ? ArrowDown : MoveHorizontal;
        return (
          <article key={`${effect.conceptId}-${index}`} className={`outcome-row outcome-${effect.direction.toLowerCase()}`}>
            <span className="outcome-row-icon" aria-hidden="true"><Target size={18} /></span>
            <div className="outcome-row-main">
              <div className="outcome-row-title">
                <h3>{concept ? <Link href={conceptPath(concept)} className="underline underline-offset-4">{effect.name}</Link> : effect.name}</h3>
                <Badge variant="outline"><Icon aria-hidden="true" />{effect.direction}</Badge>
              </div>
              <p>{<Prose text={effect.description} inline />} <Source substance={substance} id={effect.sourceId} /></p>
              <div className="outcome-row-meta"><span><strong>Population</strong>{effect.population || "Not established"}</span><span><strong>Exposure</strong>{effect.exposure || "Not established"}</span><span><strong>Measure</strong>{effect.result?.instrument || effect.instrument || "Not assessed"}</span></div>
              <div className="outcome-row-actions"><EvidenceButton evidenceKey={evidenceKey(substance.slug,"outcome",effect)}/><span className="text-muted-foreground">{effect.evidence}</span></div>
            </div>
          </article>
        );
      })}
    </div>
  );
  return (
    <div className="flex flex-col gap-4">
      {observations.map((effect, index) => {
        const concept = entities.conceptById.get(effect.conceptId);
        return (
          <Card key={`${effect.conceptId}-${index}`}>
            <CardHeader>
              <CardTitle>
                <h3>{concept ? <Link href={conceptPath(concept)} className="underline underline-offset-4">{effect.name}</Link> : effect.name}</h3>
              </CardTitle>
              <CardAction><Direction direction={effect.direction} /></CardAction>
              <CardDescription>{effect.evidence}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p><Prose text={effect.description} inline /> <Source substance={substance} id={effect.sourceId} /></p><div className="flex flex-wrap gap-2"><EvidenceButton evidenceKey={evidenceKey(substance.slug,measured?"outcome":"effect",effect)}/>{concept?.kind === "effect" && <EffectPreview effect={concept}/>}</div>
              <ContextList items={[
                { term: "Population", detail: effect.population || "Not established" },
                { term: "Exposure context", detail: effect.exposure || "Not established" },
                ...(measured ? [
                  { term: "Measure / instrument", detail: effect.result?.instrument || effect.instrument || "Not assessed in this summary" },
                  { term: "Magnitude", detail: observationMagnitude(effect) },
                ] : []),
              ]} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

const placeholderKineticsText = /^(?:not\s+(?:assessed|established|reported)(?:\b|\s)|no\s+[^.]+\s+(?:curated|assigned|established)\b|absolute\s+[^.]+\s+not\s+determined\b|this\s+import\s+contains\s+[^.]+,?\s+not\s+a\s+verified\b)/i;
const identityOnlyKineticsText = /^the citation identifies the compound rather than reporting/i;

function hasCuratedKineticsText(value: string | null | undefined) {
  const text = value?.trim();
  return Boolean(text && !placeholderKineticsText.test(text) && !identityOnlyKineticsText.test(text));
}

function hasCuratedPKObservation(observation: Substance["pkObservations"][number]) {
  return Boolean(
    observation.modelEligible ||
      observation.value !== null ||
      observation.low !== null ||
      observation.high !== null ||
      (hasCuratedKineticsText(observation.context) && !identityOnlyKineticsText.test(observation.context.trim())),
  );
}

function hasKineticsData(substance: Substance) {
  const halfLifeEstimate = substance.halfLife.low !== null || substance.halfLife.high !== null;
  const halfLifeLabel = hasCuratedKineticsText(substance.halfLife.label);
  const halfLifeContext = hasCuratedKineticsText(substance.halfLife.context);
  const kineticsSummary = [substance.kinetics.onset, substance.kinetics.peak, substance.kinetics.duration, substance.kinetics.bioavailability, substance.kinetics.metabolism].some(hasCuratedKineticsText);
  const timingData = (substance.kinetics.timeline ?? []).some((route) => route.total !== null || route.phases.length > 0 || hasCuratedKineticsText(route.note));
  return halfLifeEstimate || halfLifeLabel || halfLifeContext || kineticsSummary || timingData || substance.pkObservations.some(hasCuratedPKObservation) || substance.modifiers.length > 0;
}

function KineticsRail({ substance }: { substance: Substance }) {
  if (!hasKineticsData(substance)) return null;
  const timing = {
    onset: hasCuratedKineticsText(substance.kinetics.onset) ? substance.kinetics.onset : null,
    peak: hasCuratedKineticsText(substance.kinetics.peak) ? substance.kinetics.peak : null,
    duration: hasCuratedKineticsText(substance.kinetics.duration) ? substance.kinetics.duration : null,
    elimination: hasCuratedKineticsText(substance.halfLife.label) ? substance.halfLife.label : null,
  };
  if (!Object.values(timing).some(Boolean)) return null;
  return (
    <Card className="kinetics-rail">
      <CardHeader>
        <CardDescription className="inline-flex items-center gap-1.5"><span className="rail-kicker-icon"><Clock3 aria-hidden="true" size={15} /></span>Sourced kinetics</CardDescription>
        <CardDescription>Activate a marker to inspect its cited value.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <KineticsTimingVisual {...timing} />
        <Link href="#kinetics" className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4">View full kinetics <ArrowRight aria-hidden="true" size={14} /></Link>
      </CardContent>
    </Card>
  );
}

function SafetySignal({ caution, index, substance }: { caution: Substance["cautions"][number]; index: number; substance: Substance }) {
  const modes = [
    { icon: TriangleAlert, label: "Warning", tone: "warning" },
    { icon: HeartPulse, label: "Monitor", tone: "monitor" },
    { icon: Layers3, label: "Context", tone: "context" },
  ] as const;
  const mode = modes[index % modes.length];
  const Icon = mode.icon;
  return (
    <article className={`safety-signal safety-signal-${mode.tone}`}>
      <div className="safety-signal-icon"><Icon aria-hidden="true" size={18} /></div>
      <div className="safety-signal-body">
        <div className="safety-signal-heading"><span>{mode.label}</span><h3>{caution.title}</h3></div>
        <p><Prose text={caution.description} inline /> <Source substance={substance} id={caution.sourceId} /></p>
      </div>
      <ShieldCheck aria-hidden="true" className="safety-signal-check" size={18} />
    </article>
  );
}

function ClaimCard({ claim, entities, substance, slug }: { claim: Substance["claims"][number]; entities: EntityIndex; substance: Substance; slug: string }) {
  return (
    <article className="claim-card claim-card-rich">
      <div className="claim-card-header"><span className="claim-relation"><Network aria-hidden="true" size={15} />{claim.relation}</span><span className="claim-status"><ShieldCheck aria-hidden="true" size={14} />Authored relationship</span></div>
      <h3>{claim.assertion}</h3>
      <div className="claim-participants">
        {claim.participants.map((member, index) => <div key={`${member.entityId}-${member.role}`} className="claim-participant"><span className="claim-node-icon"><FlaskConical aria-hidden="true" size={15} /></span><EntityLink id={member.entityId} entities={entities} /><small>{member.role}</small>{index < claim.participants.length - 1 && <ArrowRight aria-hidden="true" className="claim-arrow" size={15} />}</div>)}
      </div>
      <p>{claim.context}</p>
      <p><strong>Limitation</strong> {claim.limitation}</p>
      <div className="claim-card-footer"><span><BookOpen aria-hidden="true" size={14} />Supporting sources {claim.sourceIds.map(id => <Source key={id} substance={substance} id={id} />)}</span><span>Evidence strength: not formally assessed</span></div>
      <div><EvidenceButton evidenceKey={evidenceKey(slug,"claim",claim)}/></div>
    </article>
  );
}

export default async function SubstancePage({ params }: Props) {
  const { slug } = await params;
  const substance = await getSubstance(slug);
  if (!substance) notFound();
  const [catalog, concepts, mechanismGraph] = await Promise.all([getCatalog(), getConcepts(), getKnowledgeGraph({ focus: slug, limit: 60 })]);
  const entities = indexEntities(catalog, concepts);
  const substanceTags = entities.conceptsFor(substance.tags);
  const related = entities.relatedSubstances(substance.slug, substance.tags);
  const selectedObservation = substance.pkObservations.find(item => item.id === substance.halfLife.observationId);
  const reviewed = substance.editorialStatus === "editorially-reviewed";
  const identificationTests = substance.identificationTests ?? [];
  const hasIntakeDetails = substance.doses.some(dose => dose.foodRelation || dose.solubility || dose.absorptionNote);
  const showKinetics = hasKineticsData(substance);
  const outcomePlotRows = observationRows(substance, "outcome");
  const hasOutcomePlots = plotGroups(outcomePlotRows).length > 0;
  const curatedPKObservations = substance.pkObservations.filter(hasCuratedPKObservation);
  const hasHalfLifeEstimate = substance.halfLife.low !== null || substance.halfLife.high !== null || hasCuratedKineticsText(substance.halfLife.label);
  const identityReference = substance.pubchemCid === null
    ? substance.references.find(r => r.id === "molekul-profile") ?? substance.references[0]
    : substance.references.find(r => r.id === "pubchem") ?? substance.references.find(r => /pubchem\.ncbi\.nlm\.nih\.gov\/(?:compound|rest\/pug\/compound)\//.test(r.url));
  const toc = [
    { id: "overview", name: "Overview" },
    { id: "measured-outcomes", name: "Measured outcomes" },
    { id: "exposure", name: "Doses & routes" },
    ...(identificationTests.length ? [{ id: "identification-tests", name: "Identification tests" }] : []),
    ...(showKinetics ? [{ id: "kinetics", name: "Pharmacokinetics" }] : []),
    { id: "safety", name: "Safety" },
    { id: "evidence", name: "Research" },
    { id: "connections", name: "Connections" },
    { id: "legal", name: "Legal context" },
    { id: "editorial-history", name: "History" },
  ];

  return (
    <main id="main" data-entity-kind="substance" className="article-page mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8" style={{ "--article-accent": substance.accent } as CSSProperties}>
      <Breadcrumb current={substance.name} />
      <header className="article-hero grid items-center gap-6 rounded-xl border-s-4 bg-card p-5 ring-1 ring-foreground/10 sm:p-6 lg:grid-cols-[minmax(0,1fr)_16rem]" style={{ borderInlineStartColor: substance.accent }}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">The substance library</p>
            <Badge variant="secondary">{reviewed ? "Editorially reviewed" : "Sourced draft"}</Badge>
          </div>
          <h1 className="text-4xl font-medium">{substance.name}<span className="mt-2 block text-lg font-normal text-muted-foreground">{substance.subtitle}</span></h1>
          {substance.aliases.length > 0 && <p className="break-words text-sm text-muted-foreground"><span className="font-medium text-foreground">Also known as:</span> {substance.aliases.join(" · ")}</p>}
          <Prose className="max-w-3xl text-lg text-muted-foreground" text={substance.summary} />
          <div className="flex flex-wrap gap-2">
            {substanceTags.map(tag => (
              <HoverCard key={tag.id}>
                <HoverCardTrigger delay={200} closeDelay={100} render={<Link href={conceptPath(tag)} />}>
                  <Badge variant="outline">{tag.label}</Badge>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-1.5">
                    <Badge variant="secondary">{tag.kind.replaceAll("-", " ")}</Badge>
                    <h4 className="font-medium">{tag.label}</h4>
                    <Prose text={tag.description} />
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><BookOpen aria-hidden="true" size={16} />{substance.references.length} sources</span>
            <span>Content date {dateLabel(substance.reviewedAt)}</span><Link className="underline underline-offset-4" href={`/compare?substances=${slug}`}>Compare</Link>
            <Link href={`/graph?focus=${substance.slug}`} className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">Explore connections <GitBranch aria-hidden="true" size={16} /></Link>
            <Link href={`/substances/${slug}/history`} className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">Revision history <History aria-hidden="true" size={16} /></Link>
          </div>
          <div className="external-wiki-links" aria-label="Related external wikis">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Elsewhere</span>
            <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(substance.name)}`} target="_blank" rel="noreferrer"><Globe aria-hidden="true" size={13} />Wikipedia <ArrowUpRight aria-hidden="true" size={13} /></a>
            <a href="https://examine.com/" target="_blank" rel="noreferrer"><BookOpenCheck aria-hidden="true" size={13} />Examine <ArrowUpRight aria-hidden="true" size={13} /></a>
            <a href="https://psychonautwiki.org/" target="_blank" rel="noreferrer"><Brain aria-hidden="true" size={13} />PsychonautWiki <ArrowUpRight aria-hidden="true" size={13} /></a>
          </div>
        </div>
        <MoleculeImage src={substance.pubchemCid === null ? undefined : `/molecules/${substance.slug}.png`} alt={`Chemical identity depiction of ${substance.name}`} wellClassName="h-52 w-full" width={270} height={230} />
      </header>
      <SectionNav label="On this page" items={toc} />
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="flex min-w-0 flex-col gap-12">
          <section id="overview" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="01" title="Overview" />
            <Prose text={substance.description} />
            <Alert>
              <BookOpen />
              <AlertTitle>{reviewed ? "Editorially reviewed article" : "Sourced draft · editorial review pending"}</AlertTitle>
              <AlertDescription>
                <Prose text={substance.evidenceNote} />
                <p>Assessment belongs to each claim and outcome. An article’s editorial status is not a grade of a substance’s safety or efficacy.</p>
              </AlertDescription>
            </Alert>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">How it works</h3>
              {substance.mechanisms.length ? substance.mechanisms.map(mechanism => {
                const concept = mechanism.conceptId ? entities.conceptById.get(mechanism.conceptId) : undefined;
                return (
                  <div key={mechanism.title} className="flex gap-3">
                    <CircleDot aria-hidden="true" className="mt-0.5 shrink-0 text-muted-foreground" size={17} />
                    <div className="flex min-w-0 flex-col gap-1">
                      <h4 className="font-medium">{concept ? <Link href={conceptPath(concept)} className="underline underline-offset-4">{mechanism.title}</Link> : mechanism.title}</h4>
                      <p><Prose text={mechanism.description} inline /> <Source substance={substance} id={mechanism.sourceId} /></p><div><EvidenceButton evidenceKey={evidenceKey(slug,"mechanism",mechanism)}/></div>
                    </div>
                  </div>
                );
              }) : <DataEmpty>Mechanisms not assessed.</DataEmpty>}
              <MechanismExplorer slug={slug} data={mechanismGraph}/>
            </div>
          </section>

          <section id="measured-outcomes" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="02" title="Measured outcomes" />
            <p className="text-muted-foreground">What the research measured, for whom, and under which exposure. Findings remain attached to the study’s task or clinical endpoint.</p>
            <ObservationMatrix observations={substance.outcomes} substance={substance} entities={entities} measured />
            {hasOutcomePlots && <details className="rounded-lg border p-4"><summary className="cursor-pointer font-medium">Study-result plots</summary><div className="pt-4"><StudyPlots rows={outcomePlotRows}/></div></details>}
          </section>

          <section id="exposure" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="03" title="Doses & routes" />
            <p className="text-muted-foreground">Published exposure records, distinguished by source category. These describe study or reference context and are not personal dosing recommendations.</p>
            {hasIntakeDetails && <p className="text-sm text-muted-foreground">Food timing and solubility labels describe the cited route or formulation. Solubility alone does not establish whether food changes absorption.</p>}
            {substance.doses.length ? (
              <div className="flex flex-col gap-4">
                {substance.doses.map((dose, index) => (
                  <Card key={`${dose.label}-${index}`}>
                    <CardHeader>
                      <CardTitle><h3>{dose.label}</h3></CardTitle>
                      <CardAction><Badge variant="outline">{doseCategories[dose.sourceCategory]}</Badge></CardAction>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-lg font-medium">{doseQuantity(dose)} <Source substance={substance} id={dose.sourceId} /></p>
                      <IntakeBadges dose={dose} />
                      <ContextList items={[
                        { term: "Ingredient / form", detail: `${dose.ingredient || "Not established"} · ${dose.formulation || "Formulation not established"}` },
                        { term: "Route", detail: dose.route || "Not established" },
                        { term: "Frequency", detail: dose.frequency || "Not established" },
                        { term: "Duration", detail: dose.duration || "Not established" },
                        { term: "Population", detail: dose.population || "Not established" },
                        { term: "Purpose", detail: dose.purpose || "Not assessed" },
                      ]} />
                      {dose.absorptionNote && <p><strong>Absorption context</strong> {dose.absorptionNote}</p>}
                      <p>{dose.note}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : <DataEmpty>Not assessed. No sourced exposure records have been curated.</DataEmpty>}
          </section>

          {identificationTests.length > 0 && (
            <section id="identification-tests" className="flex scroll-mt-24 flex-col gap-4">
              <SectionHeading title="Identification tests" />
              <p className="text-muted-foreground">These are source-linked identification contexts. Reagent results are presumptive and do not establish exact identity, purity, concentration, or safety.</p>
              <div className="flex flex-col gap-4">
                {identificationTests.map((test) => (
                  <Card key={`${test.kind}:${test.name}`}>
                    <CardHeader>
                      <CardTitle><h3>{test.name}</h3></CardTitle>
                      <CardAction><Badge variant={test.kind === "presumptive-reagent" ? "secondary" : "outline"}>{test.kind === "presumptive-reagent" ? "Presumptive reagent" : "Instrumental confirmation"}</Badge></CardAction>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <ContextList items={[
                        { term: "Target", detail: test.target },
                        { term: "Expected result", detail: test.expectedResult },
                        { term: "Interpretation", detail: test.interpretation },
                        { term: "Limitations", detail: test.limitations },
                      ]} />
                      <Source substance={substance} id={test.sourceId} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {showKinetics && <section id="kinetics" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="04" title="Pharmacokinetics" />
            <p className="text-muted-foreground">Absorption, metabolism and elimination depend on the analyte, route, formulation, physiology and other exposures.</p>
            {hasHalfLifeEstimate && <Card size="sm">
              <CardHeader>
                <CardDescription>Elimination half-life{selectedObservation ? ` · ${selectedObservation.analyte}` : ""}</CardDescription>
                <CardTitle>{substance.halfLife.label}</CardTitle>
              </CardHeader>
              <CardContent><Source substance={substance} id={substance.halfLife.sourceId} /></CardContent>
            </Card>}
            {(substance.kinetics.timeline?.length || curatedPKObservations.length) ? <TimingExplorer slug={slug} kinetics={substance.kinetics} observations={curatedPKObservations} initialId={substance.halfLife.observationId} references={substance.references}/> : <ContextList items={[
              ...(hasCuratedKineticsText(substance.kinetics.onset) ? [{ term: "Onset", detail: substance.kinetics.onset }] : []),
              ...(hasCuratedKineticsText(substance.kinetics.peak) ? [{ term: "Peak", detail: substance.kinetics.peak }] : []),
              ...(hasCuratedKineticsText(substance.kinetics.duration) ? [{ term: "Duration", detail: substance.kinetics.duration }] : []),
              ...(hasCuratedKineticsText(substance.kinetics.bioavailability) ? [{ term: "Bioavailability", detail: substance.kinetics.bioavailability }] : []),
              ...(hasCuratedKineticsText(substance.kinetics.metabolism) ? [{ term: "Metabolism", detail: substance.kinetics.metabolism }] : []),
            ]} />}
            {hasCuratedKineticsText(substance.halfLife.context) && <p>{substance.halfLife.context} <Source substance={substance} id={substance.halfLife.sourceId} /></p>}

            {curatedPKObservations.length > 0 && <><h3 className="text-lg font-medium">Sourced elimination observations</h3>
            {curatedPKObservations.length ? (
              <div className="flex flex-col gap-4">
                {curatedPKObservations.map(observation => (
                  <Card key={observation.id} id={`pk-${observation.id}`}>
                    <CardHeader>
                      <CardTitle><h4>{observation.analyte}</h4></CardTitle>
                      <CardDescription>{statisticLabels[observation.statistic]}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-lg font-medium">
                        {observation.statistic === "reported-range" && observation.low !== null && observation.high !== null ? `${observation.low}–${observation.high} hours` : observation.value !== null ? `${observation.value} hours` : "Not established"}
                        {" "}
                        <Source substance={substance} id={observation.sourceId} />
                      </p>
                      <ContextList items={[
                        { term: "Route / formulation", detail: `${observation.route} · ${observation.formulation}` },
                        { term: "Population", detail: observation.population },
                      ]} />
                      <p>{observation.context}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : null}</>}
            <ContextList items={[
              ...(hasCuratedKineticsText(substance.kinetics.bioavailability) ? [{ term: "Bioavailability", detail: <>{substance.kinetics.bioavailability} <Source substance={substance} id={substance.kinetics.sourceId} /></> }] : []),
              ...(hasCuratedKineticsText(substance.kinetics.metabolism) ? [{ term: "Metabolism / metabolites", detail: <>{substance.kinetics.metabolism} <Source substance={substance} id={substance.kinetics.sourceId} /></> }] : []),
            ]} />
            {substance.modifiers.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium">Factors that change the estimate</h3>
                {substance.modifiers.map(modifier => (
                  <Card key={modifier.label} size="sm">
                    <CardHeader>
                      <CardTitle><h4>{modifier.label}</h4></CardTitle>
                      <CardAction><Badge variant="secondary">{modifier.effect}</Badge></CardAction>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <p>{modifier.detail} <Source substance={substance} id={modifier.sourceId} /></p>
                      {substance.pkObservations.some(item => item.id === modifier.observationId) && (
                        <a className="inline-flex items-center gap-1 text-sm underline underline-offset-4" href={`#pk-${modifier.observationId}`}>Related observation <ArrowRight aria-hidden="true" size={14} /></a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>}

          <section id="safety" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="05" title="Safety & uncertainty" />
            <p className="text-muted-foreground">Adverse effects, interactions, tolerance and withdrawal in the cited contexts. This section is not an exhaustive interaction checker.</p>
            {substance.cautions.length ? (
              <div className="safety-signals">
                {substance.cautions.map((caution, index) => <SafetySignal key={caution.title} caution={caution} index={index} substance={substance} />)}
              </div>
            ) : <DataEmpty>Safety not assessed.</DataEmpty>}
            <h3 className="text-lg font-medium">Interactions in cited sources</h3><Link className="underline underline-offset-4" href={`/interactions?a=${slug}`}>Explore a pair of substances</Link>
            {substance.interactions.length ? (
              <div className="flex flex-col gap-4">
                {substance.interactions.map(interaction => (
                  <Card key={interaction.id}>
                    <CardHeader>
                      <CardTitle>
                        <h3>{interaction.otherSlug
                          ? <EntityLink id={`substance:${interaction.otherSlug}`} entities={entities} />
                          : interaction.name}</h3>
                      </CardTitle>
                      {interaction.otherSlug && <CardDescription>{interaction.name}</CardDescription>}
                    </CardHeader>
                    <CardContent>
                      <p>{interaction.summary} <Source substance={substance} id={interaction.sourceId} /></p>
                      {(interaction.mechanism || interaction.context || interaction.severity) && <ContextList items={[
                        ...(interaction.mechanism ? [{ term: "Mechanism", detail: interaction.mechanism }] : []),
                        ...(interaction.context ? [{ term: "Context", detail: interaction.context }] : []),
                        ...(interaction.severity ? [{ term: "Severity in cited source", detail: <>{interaction.severity.label} <Source substance={substance} id={interaction.severity.sourceId} /></> }] : []),
                      ]} />}
                      <div className="mt-3"><EvidenceButton evidenceKey={evidenceKey(slug,"interaction",interaction)}/></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : <DataEmpty>Not assessed. No sourced interaction has been curated.</DataEmpty>}
          </section>

          <section id="evidence" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="06" title="Research & sources" extra={<Badge variant="secondary">{substance.references.length}</Badge>} />
            <p className="text-muted-foreground">The source, the finding and its limitations. Funding information is reported where curated; an unassessed disclosure does not mean a study had no commercial funding.</p>
            <Collapsible className="research-disclosure rounded-lg border" id="research-sources">
              <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-medium">
                <span className="inline-flex items-center gap-2"><BookOpen aria-hidden="true" size={17} />Show research sources</span>
                <Badge variant="secondary">{substance.references.length}</Badge>
              </CollapsibleTrigger>
              <CollapsibleContent
                keepMounted
                className="transition-[opacity,transform] duration-180 ease-[var(--ease-out)] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0"
              >
                <Card className="rounded-t-none border-0 shadow-none">
                <CardContent>
                <div className="flex flex-col gap-3">
                  {substance.references.map((reference, index) => (
                    <div key={reference.id} className="flex flex-col gap-3">
                      {index > 0 && <Separator />}
                      <Item id={`reference-${reference.id}`} variant="muted" size="sm" className="items-start">
                        <ItemMedia className="text-sm font-medium text-muted-foreground"><span className="research-source-icon"><BookOpenCheck aria-hidden="true" size={15} /></span>{String(index + 1).padStart(2, "0")}</ItemMedia>
                        <ItemContent>
                          <ItemTitle className="line-clamp-none w-full whitespace-normal">
                            <h3>
                              <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1 underline-offset-4 hover:underline">
                                {reference.title}
                                <ArrowUpRight aria-hidden="true" className="mt-0.5 shrink-0" size={16} />
                              </a>
                            </h3>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-none">{reference.authors}</ItemDescription>
                          <div className="research-source-kind"><BookOpen aria-hidden="true" size={13} />{reference.kind}<Badge variant="secondary">{reference.year}</Badge>
                          </div>
                          {(reference.pmid || reference.doi) && (
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                              {reference.pmid && <a href={`https://pubmed.ncbi.nlm.nih.gov/${reference.pmid}/`} target="_blank" rel="noreferrer" className="underline underline-offset-4">PMID {reference.pmid}</a>}
                              {reference.doi && <a href={`https://doi.org/${reference.doi}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">DOI {reference.doi}</a>}
                            </div>
                          )}
                          <p className="research-source-insight"><ChartColumnBig aria-hidden="true" size={16} /><span>{reference.insight}</span></p>
                          <p className="research-source-limitation"><TriangleAlert aria-hidden="true" size={16} /><span><strong>Limitations</strong> {reference.limitation}</span></p>
                          <SourceDisclosures reference={reference} />
                        </ItemContent>
                      </Item>
                    </div>
                  ))}
                </div>
                </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
            {substance.experienceLinks.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium">Reports elsewhere</h3>
                <p className="text-muted-foreground">This link leaves BHWiki for an outside experience index. It is not a finding, a dose, or a source for the claims above. The report text is not stored here.</p>
                <ul className="flex flex-col gap-2">
                  {substance.experienceLinks.map(link => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
                        {link.title} <ArrowUpRight aria-hidden="true" size={14} />
                      </a>
                      <span className="text-sm text-muted-foreground"> · {link.publisher}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section id="connections" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="07" title="Connected claims" />
            <p className="text-muted-foreground">Each relationship retains its participants, roles and context. Shared membership does not imply that substances should be combined.</p>
            {substance.claims.length ? (
              <div className="claim-list">
                {substance.claims.map(claim => <ClaimCard key={claim.id} claim={claim} entities={entities} substance={substance} slug={slug} />)}
              </div>
            ) : <DataEmpty>Structured claims not assessed.</DataEmpty>}
            <Link className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4" href={`/graph?focus=${slug}`}>Explore the relationship graph <GitBranch aria-hidden="true" size={16} /></Link>
          </section>

          <section id="legal" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="08" title="Legal context" />
            {substance.legal.length > 0 ? (
              <div className="flex flex-col gap-4">
                {substance.legal.map(item => (
                  <Card key={`${item.jurisdiction}-${item.activity}`}>
                    <CardHeader>
                      <CardTitle><h3>{item.jurisdiction}</h3></CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <p>{item.status} <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">Authority source <ArrowUpRight aria-hidden="true" size={14} /></a></p>
                      <ContextList items={[
                        { term: "Activity / form", detail: item.activity },
                        { term: "As of", detail: dateLabel(item.asOf) },
                      ]} />
                      <p>Other jurisdictions and activities require separate assessment.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : <DataEmpty>Not assessed. Absence of a legal record is not a statement of legal status.</DataEmpty>}
          </section>

          <section id="editorial-history" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="09" title="Editorial history" />
            <p>{reviewed ? "This article is marked editorially reviewed. Review attribution is recorded with its published revisions." : "This article is a sourced draft. Editorial review has not been recorded."} Content date: {dateLabel(substance.reviewedAt)}.</p>
            <div className="flex flex-wrap gap-3">
              <Button nativeButton={false} variant="outline" render={<Link href={`/substances/${slug}/history`} />}>
                <History data-icon="inline-start" />
                View published revisions
              </Button>
              <Button nativeButton={false} variant="outline" render={<Link href={`/contribute?article=${slug}`} />}>
                <BookOpen data-icon="inline-start" />
                Suggest a correction
              </Button>
            </div>
          </section>

          {related.length > 0 && (
            <section className="flex flex-col gap-4">
              <SectionHeading title="Keep exploring" extra={<Link href={`/graph?focus=${substance.slug}`} className="inline-flex items-center gap-1 text-sm underline underline-offset-4">View graph <ArrowRight aria-hidden="true" size={16} /></Link>} />
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map(({ item, shared }) => (
                  <Link key={item.slug} href={`/substances/${item.slug}`} className="block h-full">
                    <Card className="h-full">
                      <CardHeader>
                        <CardDescription>{item.category}</CardDescription>
                        <CardTitle><h3 className="inline-flex items-center gap-1">{item.name}<ArrowUpRight aria-hidden="true" size={17} /></h3></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{shared} shared {shared === 1 ? "concept" : "concepts"}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start" aria-label="Substance identity and related resources">
          {showKinetics && <KineticsRail substance={substance} />}
          <Card>
            <CardHeader>
              <CardDescription>Molecular structure</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <MoleculeImage src={substance.pubchemCid === null ? undefined : `/molecules/${substance.slug}.png`} alt="" wellClassName="mx-auto h-48 w-full max-w-64" width={270} height={230} />
              {substance.pubchemCid !== null && <a href={`https://pubchem.ncbi.nlm.nih.gov/compound/${substance.pubchemCid}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">PubChem CID {substance.pubchemCid}<ArrowUpRight aria-hidden="true" size={14} /></a>}
              <Separator />
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Identity</p>
              <ContextList items={[
                { term: "Formula", detail: substance.formula },
                { term: "Molecular weight", detail: substance.molecularWeight },
                { term: "Classification", detail: substance.category },
                { term: "Also known as", detail: substance.aliases.length ? substance.aliases.join(", ") : "No aliases curated" },
              ]} />
              <p className="text-sm">{substance.pubchemCid === null ? "Profile source " : "Identity source "}{identityReference ? <Source substance={substance} id={identityReference.id} /> : "Not linked to a curated reference."}</p>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" className="w-fit" />}>
                  SMILES identifier
                </PopoverTrigger>
                <PopoverContent align="start">
                  <PopoverHeader>
                    <PopoverTitle>SMILES identifier</PopoverTitle>
                    <PopoverDescription className="break-all">{substance.smiles || "Not assessed"}</PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
              <Button nativeButton={false} variant="outline" render={<Link href={`/graph?focus=${substance.slug}`} />}>
                <GitBranch data-icon="inline-start" />
                See its connections
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Knowledge is a collective effort.</CardTitle>
              <CardDescription>Help make this page clearer, more complete and better sourced.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button nativeButton={false} variant="outline" render={<Link href={`/contribute?article=${slug}`} />}>
                Contribute to BHWiki
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
