import { EvidenceButton } from "@/components/evidence";
import { SourceDisclosures } from "@/components/source-disclosures";
import { EffectPreview } from "@/components/effect-preview";
import { TimingExplorer } from "@/components/timing-explorer";
import { MechanismExplorer } from "@/components/mechanism-explorer";
import { StudyPlots } from "@/components/study-plots";
import { evidenceKey, observationMagnitude, observationRows } from "@/lib/research";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, BookOpen, CircleDot, GitBranch, History, Info, MoveHorizontal } from "lucide-react";
import { Citation } from "@/components/citation";
import { Prose } from "@/components/prose";
import { DurationTimeline } from "@/components/duration-timeline";
import { MoleculeImage } from "@/components/molecule-image";
import { SectionNav } from "@/components/section-nav";
import { Breadcrumb } from "@/components/shell";
import { KineticsChart } from "@/components/kinetics-chart";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

function SectionHeading({ number, title, extra }: { number?: string; title: string; extra?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          {number && <span className="text-sm text-muted-foreground">{number}</span>}
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
  const identityReference = substance.pubchemCid === null
    ? substance.references.find(r => r.id === "molekul-profile") ?? substance.references[0]
    : substance.references.find(r => r.id === "pubchem") ?? substance.references.find(r => /pubchem\.ncbi\.nlm\.nih\.gov\/(?:compound|rest\/pug\/compound)\//.test(r.url));
  const toc = [{ id: "overview", name: "Overview" }, { id: "effects", name: "Subjective effects" }, { id: "measured-outcomes", name: "Measured outcomes" }, { id: "exposure", name: "Doses & routes" }, { id: "kinetics", name: "Pharmacokinetics" }, { id: "safety", name: "Safety" }, { id: "evidence", name: "Research" }, { id: "connections", name: "Connections" }, { id: "legal", name: "Legal context" }, { id: "editorial-history", name: "History" }];

  return (
    <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8">
      <Breadcrumb current={substance.name} />
      <header className="article-hero grid items-center gap-6 rounded-xl border-s-4 bg-card p-5 ring-1 ring-foreground/10 sm:p-6 lg:grid-cols-[minmax(0,1fr)_16rem]" style={{ borderInlineStartColor: substance.accent }}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">The substance library</p>
            <Badge variant="secondary">{reviewed ? "Editorially reviewed" : "Sourced draft"}</Badge>
          </div>
          <h1 className="text-4xl font-medium">{substance.name}<span className="mt-2 block text-lg font-normal text-muted-foreground">{substance.subtitle}</span></h1>
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

          <section id="effects" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="02" title="Subjective effects" />
            <p className="text-muted-foreground">Descriptions of experience in their reported context. Direction does not imply benefit, and these observations do not define a universal intensity score.</p>
            <ObservationMatrix observations={substance.effects} substance={substance} entities={entities} />
          </section>

          <section id="measured-outcomes" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="03" title="Measured outcomes" />
            <p className="text-muted-foreground">What the research measured, for whom, and under which exposure. Findings remain attached to the study’s task or clinical endpoint.</p>
            <ObservationMatrix observations={substance.outcomes} substance={substance} entities={entities} measured />
            <details className="rounded-lg border p-4"><summary className="cursor-pointer font-medium">Study-result plots</summary><div className="pt-4"><StudyPlots rows={observationRows(substance,"outcome")}/></div></details>
          </section>

          <section id="exposure" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="04" title="Doses & routes" />
            <p className="text-muted-foreground">Published exposure records, distinguished by source category. These describe study or reference context and are not personal dosing recommendations.</p>
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
                      <ContextList items={[
                        { term: "Ingredient / form", detail: `${dose.ingredient || "Not established"} · ${dose.formulation || "Formulation not established"}` },
                        { term: "Route", detail: dose.route || "Not established" },
                        { term: "Frequency", detail: dose.frequency || "Not established" },
                        { term: "Duration", detail: dose.duration || "Not established" },
                        { term: "Population", detail: dose.population || "Not established" },
                        { term: "Purpose", detail: dose.purpose || "Not assessed" },
                      ]} />
                      <p>{dose.note}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : <DataEmpty>Not assessed. No sourced exposure records have been curated.</DataEmpty>}
          </section>

          <section id="kinetics" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="05" title="Pharmacokinetics" />
            <p className="text-muted-foreground">Absorption, metabolism and elimination depend on the analyte, route, formulation, physiology and other exposures.</p>
            <Card size="sm">
              <CardHeader>
                <CardDescription>Elimination half-life{selectedObservation ? ` · ${selectedObservation.analyte}` : ""}</CardDescription>
                <CardTitle>{substance.halfLife.label || "Not established"}</CardTitle>
              </CardHeader>
              <CardContent><Source substance={substance} id={substance.halfLife.sourceId} /></CardContent>
            </Card>
            <TimingExplorer slug={slug} kinetics={substance.kinetics} observations={substance.pkObservations} initialId={substance.halfLife.observationId} references={substance.references}/>
            <p>{substance.halfLife.context} <Source substance={substance} id={substance.halfLife.sourceId} /></p>

            <h3 className="text-lg font-medium">Sourced elimination observations</h3>
            {substance.pkObservations.length ? (
              <div className="flex flex-col gap-4">
                {substance.pkObservations.map(observation => (
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
            ) : <DataEmpty>Elimination observations not assessed.</DataEmpty>}
            <ContextList items={[
              { term: "Bioavailability", detail: <>{substance.kinetics.bioavailability || "Not established"} <Source substance={substance} id={substance.kinetics.sourceId} /></> },
              { term: "Metabolism / metabolites", detail: <>{substance.kinetics.metabolism || "Not established"} <Source substance={substance} id={substance.kinetics.sourceId} /></> },
            ]} />
            {substance.modifiers.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium">What changes the picture?</h3>
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
          </section>

          <section id="safety" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="06" title="Safety & uncertainty" />
            <p className="text-muted-foreground">Adverse effects, interactions, tolerance and withdrawal in the cited contexts. This section is not an exhaustive interaction checker.</p>
            {substance.cautions.length ? (
              <div className="flex flex-col gap-4">
                {substance.cautions.map(caution => (
                  <Card key={caution.title}>
                    <CardHeader>
                      <CardTitle>
                        <h3 className="flex items-start gap-2"><Info aria-hidden="true" className="mt-0.5 shrink-0" size={20} />{caution.title}</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><Prose text={caution.description} inline /> <Source substance={substance} id={caution.sourceId} /></p>
                    </CardContent>
                  </Card>
                ))}
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
                      <p>{interaction.summary} <Source substance={substance} id={interaction.sourceId} /></p><div className="mt-3"><EvidenceButton evidenceKey={evidenceKey(slug,"interaction",interaction)}/></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : <DataEmpty>Not assessed. No sourced interaction has been curated.</DataEmpty>}
          </section>

          <section id="evidence" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="07" title="Research & sources" extra={<Badge variant="secondary">{substance.references.length}</Badge>} />
            <p className="text-muted-foreground">The source, the finding and its limitations. Funding information is reported where curated; an unassessed disclosure does not mean a study had no commercial funding.</p>
            <Card>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {substance.references.map((reference, index) => (
                    <div key={reference.id} className="flex flex-col gap-3">
                      {index > 0 && <Separator />}
                      <Item id={`reference-${reference.id}`} variant="muted" size="sm" className="items-start">
                        <ItemMedia className="text-sm font-medium text-muted-foreground">{String(index + 1).padStart(2, "0")}</ItemMedia>
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
                          <div className="flex flex-wrap gap-1.5">
                            <Badge variant="outline">{reference.kind}</Badge>
                            <Badge variant="secondary">{reference.year}</Badge>
                          </div>
                          {(reference.pmid || reference.doi) && (
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                              {reference.pmid && <a href={`https://pubmed.ncbi.nlm.nih.gov/${reference.pmid}/`} target="_blank" rel="noreferrer" className="underline underline-offset-4">PMID {reference.pmid}</a>}
                              {reference.doi && <a href={`https://doi.org/${reference.doi}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">DOI {reference.doi}</a>}
                            </div>
                          )}
                          <p>{reference.insight}</p>
                          <p><strong>Limitations</strong> {reference.limitation}</p>
                          <SourceDisclosures reference={reference} />
                        </ItemContent>
                      </Item>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
            <SectionHeading number="08" title="Connected claims" />
            <p className="text-muted-foreground">Each relationship retains its participants, roles and context. Shared membership does not imply that substances should be combined.</p>
            {substance.claims.length ? (
              <div className="flex flex-col gap-4">
                {substance.claims.map(claim => (
                  <Card key={claim.id}>
                    <CardHeader>
                      <CardDescription>{claim.relation}</CardDescription>
                      <CardTitle><h3>{claim.assertion}</h3></CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <ul className="flex flex-col gap-2">
                        {claim.participants.map(member => (
                          <li key={`${member.entityId}-${member.role}`} className="flex flex-wrap items-baseline justify-between gap-2">
                            <EntityLink id={member.entityId} entities={entities} />
                            <span className="text-sm text-muted-foreground">{member.role}</span>
                          </li>
                        ))}
                      </ul>
                      <p>{claim.context}</p>
                      <p><strong>Limitation</strong> {claim.limitation}</p>
                      <div className="flex flex-col gap-1 text-sm">
                        <span>Supporting sources {claim.sourceIds.map(id => <Source key={id} substance={substance} id={id} />)}</span>
                        {claim.conflictingSourceIds.length > 0 && <span>Conflicting sources {claim.conflictingSourceIds.map(id => <Source key={id} substance={substance} id={id} />)}</span>}
                      </div>
                      <p className="text-sm text-muted-foreground">Evidence strength: not formally assessed.</p><div><EvidenceButton evidenceKey={evidenceKey(slug,"claim",claim)}/></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : <DataEmpty>Structured claims not assessed.</DataEmpty>}
            <Link className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4" href={`/graph?focus=${slug}`}>Explore the relationship graph <GitBranch aria-hidden="true" size={16} /></Link>
          </section>

          <section id="legal" className="flex scroll-mt-24 flex-col gap-4">
            <SectionHeading number="09" title="Legal context" />
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
            <SectionHeading number="10" title="Editorial history" />
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
