import { ObservationExplorer } from "@/components/observation-explorer";
import { EffectDetails } from "@/components/effect-details";
import { EvidenceButton } from "@/components/evidence";
import { evidenceKey } from "@/lib/research";
import "server-only";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, ArrowUpRight, BookOpen, GitBranch } from "lucide-react";
import { Prose } from "@/components/prose";
import { Breadcrumb } from "@/components/shell";
import { SectionNav } from "@/components/section-nav";
import { CardActionStatus, editorialLabel, kindLabels, pageNumber, PageNav, sectionFor, sections, sourceAnchor, sourceLabel, SourceCite, type ConceptSection, type ReadingSearchParams } from "@/components/concept-shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";
import { indexEntities } from "@/lib/entities";
import { getCatalog, getConcept, getConcepts, getKnowledgeGraph, getSubstancesBySlugs } from "@/lib/repository";
import { conceptPath, type CatalogSubstance, type Claim, type Observation, type Reference, type Substance } from "@/lib/types";

function ObservationCard({ observation, substance }: { observation: Observation; substance: Substance }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/substances/${substance.slug}`} className="inline-flex items-center gap-1 underline underline-offset-4">{substance.name}<ArrowUpRight aria-hidden="true" size={15} /></Link>
        </CardTitle>
        <CardActionStatus status={editorialLabel(substance.editorialStatus)} direction={observation.direction} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">{observation.name}</h3>
        <p><Prose text={observation.description} inline /> <SourceCite substance={substance} id={observation.sourceId} /></p>
        <dl className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1"><dt className="text-sm text-muted-foreground">Evidence type</dt><dd>{observation.evidence}</dd></div>
          <div className="flex flex-col gap-1"><dt className="text-sm text-muted-foreground">Population</dt><dd>{observation.population || "Not assessed"}</dd></div>
          <div className="flex flex-col gap-1"><dt className="text-sm text-muted-foreground">Exposure</dt><dd>{observation.exposure || "Not assessed"}</dd></div>
          <div className="flex flex-col gap-1"><dt className="text-sm text-muted-foreground">Instrument</dt><dd>{observation.instrument || "Not assessed"}</dd></div>
          <div className="flex flex-col gap-1"><dt className="text-sm text-muted-foreground">Reported magnitude</dt><dd>{observation.magnitude || "Not established"}</dd></div>
        </dl>
      </CardContent>
    </Card>
  );
}

function ClaimCard({ claim, substance, memberRecord }: { claim: Claim; substance: Substance; memberRecord: (member: string) => { href?: string; label: string } }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Claim · not formally assessed</CardDescription>
        <CardTitle><h3>{claim.assertion}</h3></CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p>{claim.context || "Context not assessed"}</p>
        <ul className="flex flex-col gap-2">
          {claim.participants.map((participant) => {
            const record = memberRecord(participant.entityId);
            return (
              <li key={`${participant.entityId}-${participant.role}`} className="flex flex-wrap items-baseline justify-between gap-2">
                {record.href ? <Link href={record.href} className="underline underline-offset-4">{record.label}</Link> : <span>{record.label}</span>}
                <span className="text-sm text-muted-foreground">{participant.role}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap gap-3">{claim.sourceIds.map((id) => <SourceCite key={id} substance={substance} id={id} />)}</div>
        <p><strong>Limitation</strong> {claim.limitation || "Not assessed"}</p><div><EvidenceButton evidenceKey={evidenceKey(substance.slug,"claim",claim)}/></div>
        {claim.conflictingSourceIds.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span>Conflicting evidence:</span>
            {claim.conflictingSourceIds.map((id) => <SourceCite key={id} substance={substance} id={id} />)}
          </div>
        )}
        <Link className="inline-flex items-center gap-1 text-sm underline underline-offset-4" href={`/substances/${substance.slug}#connections`}>{substance.name} · {editorialLabel(substance.editorialStatus)} <ArrowUpRight aria-hidden="true" size={13} /></Link>
      </CardContent>
    </Card>
  );
}

function SubstanceCard({ substance }: { substance: CatalogSubstance }) {
  return (
    <Link className="block h-full" href={`/substances/${substance.slug}`}>
      <Card className="h-full">
        <CardHeader>
          <CardDescription>{substance.category}</CardDescription>
          <CardTitle><h3 className="inline-flex items-center gap-1">{substance.name}<ArrowUpRight aria-hidden="true" size={16} /></h3></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-muted-foreground">{substance.summary}</p>
          <Badge variant="secondary">{editorialLabel(substance.editorialStatus)}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}

export async function conceptMetadata(slug: string): Promise<Metadata> {
  const concept = await getConcept(slug);
  return concept ? { title: `${concept.label} — ${kindLabels[concept.kind].toLowerCase()} & evidence`, description: concept.description, alternates: { canonical: conceptPath(concept) } } : { title: "Concept not found" };
}

export async function ConceptArticle({ section, slug, searchParams }: { section: ConceptSection; slug: string; searchParams: ReadingSearchParams }) {
  const concept = await getConcept(slug);
  if (!concept) notFound();
  if (sectionFor(concept) !== section) redirect(conceptPath(concept));
  const [concepts, catalog, graph] = await Promise.all([getConcepts(), getCatalog(), getKnowledgeGraph({ focus: `tag:${concept.id}`, limit: 40 })]);
  const entities = indexEntities(catalog, concepts);
  const memberId = `tag:${concept.id}`;
  const connections = graph.hyperedges.filter((edge) => edge.members.includes(memberId));
  const connectedSlugs = new Set(connections.flatMap((edge) => edge.members.filter((member) => member.startsWith("substance:")).map((member) => member.slice("substance:".length))));
  const linkedCatalog = catalog.filter((substance) => substance.tags.includes(concept.id) || connectedSlugs.has(substance.slug)).sort((a, b) => a.name.localeCompare(b.name));
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(linkedCatalog.length / pageSize));
  const page = Math.min(pageNumber(searchParams.substancesPage), totalPages);
  const visibleCatalog = linkedCatalog.slice((page - 1) * pageSize, page * pageSize);
  const documents = await getSubstancesBySlugs(visibleCatalog.map((substance) => substance.slug));
  const observations = documents.flatMap((substance) => (section === "effects" ? substance.effects : section === "outcomes" ? substance.outcomes : []).filter((observation) => observation.conceptId === concept.id).map((observation) => ({ substance, observation })));
  const claims = documents.flatMap((substance) => substance.claims.filter((claim) => claim.participants.some((participant) => participant.entityId === memberId || participant.entityId === concept.id)).map((claim) => ({ substance, claim })));
  const mechanisms = documents.flatMap((substance) => substance.mechanisms.filter((mechanism) => mechanism.conceptId === concept.id).map((mechanism) => ({ substance, mechanism })));
  const usedSources = new Map<string, { substance: Substance; reference: Reference }>();
  const addSource = (substance: Substance, id: string) => {
    const reference = substance.references.find((item) => item.id === id);
    if (reference) usedSources.set(sourceAnchor(substance.slug, id), { substance, reference });
  };
  observations.forEach(({ substance, observation }) => addSource(substance, observation.sourceId));
  claims.forEach(({ substance, claim }) => [...claim.sourceIds, ...claim.conflictingSourceIds].forEach((id) => addSource(substance, id)));
  mechanisms.forEach(({ substance, mechanism }) => addSource(substance, mechanism.sourceId));
  const related = concepts.filter((item) => item.id !== concept.id && ((concept.relatedIds ?? []).includes(item.id) || (item.relatedIds ?? []).includes(concept.id)));
  const memberRecord = entities.graphMember;
  const linkedPageHref = (nextPage: number) => {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(searchParams)) if (typeof value === "string" && key !== "evidence") query.set(key,value);
    query.set("substancesPage",String(nextPage));
    return `${conceptPath(concept)}?${query}#substances`;
  };

  return (
    <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8">
      <Breadcrumb items={[{ href: "/", label: "Library" }, { href: `/${section}`, label: sections[section].title }, { label: concept.label }]} />
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{kindLabels[concept.kind].toUpperCase()}</p>
          <Badge variant="secondary">Definition: {concept.sourceUrls?.length ? "sourced draft" : "sources not assessed"}</Badge>
        </div>
        <h1 className="text-4xl font-medium">{concept.label}</h1>
        <Prose className="max-w-3xl text-lg text-muted-foreground" text={concept.description} />
        {Boolean(concept.aliases?.length) && <p>Also called {concept.aliases!.join(", ")}</p>}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href="#definition-sources" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"><BookOpen aria-hidden="true" size={15} />{concept.sourceUrls?.length ?? 0} definition sources</a>
          <Link href={`/graph?focus=${encodeURIComponent(memberId)}`} className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"><GitBranch aria-hidden="true" size={15} />Explore connections <ArrowUpRight aria-hidden="true" size={14} /></Link>
        </div>
      </header>
      <SectionNav
        label="On this page"
        items={[
          ...(section !== "concepts" ? [{ id: "observations", name: "Observations" }] : []),
          { id: "connections", name: "Connections" },
          { id: "substances", name: "Linked substances" },
          { id: "definition-sources", name: "Sources" },
        ]}
      />
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="flex min-w-0 flex-col gap-12">
          {section !== "concepts" && (
            <section className="flex scroll-mt-24 flex-col gap-4" id="observations">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-2xl font-medium">{section === "effects" ? "Reported experience" : "Findings in context"}</h2>
              </div>
              <p className="text-muted-foreground">{section === "effects" ? "These qualitative descriptions preserve the reported direction and setting. They do not assign a universal intensity score." : "Measured endpoints are tied to a particular task, population, and exposure. A finding cannot be generalized to a different outcome without supporting evidence."}</p>
              <ObservationExplorer conceptId={concept.id} kind={section === "effects" ? "effect" : "outcome"} searchParams={searchParams}/>
              {section === "effects" && <EffectDetails details={concept.details}/>}
            </section>
          )}
          {mechanisms.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Mechanistic context</h2>
              {mechanisms.map(({ substance, mechanism }, index) => (
                <Card key={`${substance.slug}-${index}`}>
                  <CardHeader>
                    <CardDescription>{substance.name} · {editorialLabel(substance.editorialStatus)}</CardDescription>
                    <CardTitle><h3>{mechanism.title}</h3></CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p><Prose text={mechanism.description} inline /> <SourceCite substance={substance} id={mechanism.sourceId} /></p>
                    <Link className="inline-flex items-center gap-1 text-sm underline underline-offset-4" href={`/substances/${substance.slug}`}>Read the substance article <ArrowUpRight aria-hidden="true" size={14} /></Link>
                  </CardContent>
                </Card>
              ))}
            </section>
          )}
          <section className="flex scroll-mt-24 flex-col gap-4" id="connections">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl font-medium">Connections & claims</h2>
              <Link href={`/graph?focus=${encodeURIComponent(memberId)}`} className="inline-flex items-center gap-1 text-sm underline underline-offset-4">Open graph <ArrowUpRight aria-hidden="true" size={14} /></Link>
            </div>
            <p className="text-muted-foreground">Each relationship keeps its participants and their roles together. Source details explain what the connection supports.</p>
            <div className="flex flex-col gap-4">
              {claims.map(({ substance, claim }) => <ClaimCard key={`${substance.slug}-${claim.id}`} substance={substance} claim={claim} memberRecord={memberRecord} />)}
              {connections.map((edge) => (
                <Card key={edge.id}>
                  <CardHeader>
                    <CardDescription>{edge.relation.replaceAll("-", " ")}</CardDescription>
                    <CardTitle><h3>{edge.label}</h3></CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <Prose text={edge.description} /><div><EvidenceButton evidenceKey={`relationship~${edge.id}`}/></div>
                    <ul className="flex flex-col gap-2">
                      {edge.members.map((member) => {
                        const record = memberRecord(member);
                        return (
                          <li key={member} className="flex flex-wrap items-baseline justify-between gap-2">
                            {record.href ? <Link href={record.href} className="underline underline-offset-4">{record.label}</Link> : <span>{record.label}</span>}
                            <span className="text-sm text-muted-foreground">{edge.memberRoles[member] || "Participant"}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {[...new Set([edge.sourceUrl, ...(edge.sourceUrls ?? [])].filter(Boolean))].map((url, index) => (
                        <a className="inline-flex items-center gap-1 text-sm underline underline-offset-4" key={url} href={url} target="_blank" rel="noreferrer">Relationship source {index + 1}<ArrowUpRight aria-hidden="true" size={12} /></a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {!claims.length && !connections.length && (
              <Empty>
                <EmptyHeader>
                  <EmptyDescription>No sourced relationships have been assessed for this concept yet.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
            {graph.truncated && <p className="text-sm text-muted-foreground">This is a bounded selection of connections. Open a neighboring article or focus the graph to continue exploring.</p>}
          </section>
          <section className="flex scroll-mt-24 flex-col gap-4" id="substances">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl font-medium">Linked substances</h2>
              <span className="text-sm text-muted-foreground">{linkedCatalog.length} entries</span>
            </div>
            <p className="text-muted-foreground">Tagged articles and participants in the relationships above. A shared tag alone does not establish a causal effect.</p>
            {visibleCatalog.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {visibleCatalog.map((substance) => <SubstanceCard key={substance.slug} substance={substance} />)}
              </div>
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyDescription>No linked substance articles have been assessed yet.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
            <PageNav
              label="Linked substance pages"
              page={page}
              totalPages={totalPages}
              previousHref={page > 1 ? linkedPageHref(page - 1) : undefined}
              nextHref={page < totalPages ? linkedPageHref(page + 1) : undefined}
            />
          </section>
          <section className="flex scroll-mt-24 flex-col gap-4" id="definition-sources">
            <h2 className="text-2xl font-medium">Follow the sources</h2>
            <h3 className="text-lg font-medium">Definition sources</h3>
            <p className="text-muted-foreground">Supporting reading for this original editorial definition. Independent editorial review has not been recorded.</p>
            {concept.sourceUrls?.length ? (
              <ul className="flex flex-col gap-2">
                {concept.sourceUrls.map((url, index) => (
                  <li key={url} className="flex items-baseline gap-3">
                    <span className="text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">{sourceLabel(url)}<ArrowUpRight aria-hidden="true" size={14} /></a>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyDescription>Definition sources have not been assessed.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
            {usedSources.size > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">Observation & claim sources</h3>
                <ol className="flex flex-col gap-4">
                  {[...usedSources.entries()].map(([id, { reference, substance }]) => (
                    <li key={id} id={id}>
                      <Card>
                        <CardHeader>
                          <CardDescription>{reference.kind} · {reference.year}</CardDescription>
                          <CardTitle>
                            <h4>
                              <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1 underline-offset-4 hover:underline">
                                {reference.title}
                                <ArrowUpRight aria-hidden="true" className="mt-0.5 shrink-0" size={15} />
                              </a>
                            </h4>
                          </CardTitle>
                          <CardDescription>{reference.authors}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                          <p>{reference.insight}</p>
                          <p><strong>Limitation</strong> {reference.limitation}</p>
                          <p><strong>Funding / disclosures</strong> {reference.funding || "Not assessed"}</p>
                          <Link className="inline-flex items-center gap-1 text-sm underline underline-offset-4" href={`/substances/${substance.slug}#reference-${reference.id}`}>Source in {substance.name} <ArrowUpRight aria-hidden="true" size={13} /></Link>
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        </div>
        <aside className="flex flex-col gap-4" aria-label="Related reading">
          <Card>
            <CardHeader>
              <CardDescription>Keep exploring</CardDescription>
              <CardTitle><h2>Related concepts</h2></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {related.length ? (
                <ul className="flex flex-col gap-2">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link href={conceptPath(item)} className="flex flex-col gap-0.5 underline-offset-4 hover:underline">
                        <span className="text-sm text-muted-foreground">{kindLabels[item.kind]}</span>
                        <span className="inline-flex items-center gap-1">{item.label}<ArrowUpRight aria-hidden="true" size={14} /></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-muted-foreground">Related definitions have not been assessed yet.</p>}
              <Link className="inline-flex items-center gap-1 text-sm underline underline-offset-4" href={`/${section}`}>Browse {sections[section].title.toLowerCase()} <ArrowRight aria-hidden="true" size={14} /></Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle><h2>Read with the context left in.</h2></CardTitle>
              <CardDescription>Sources and editorial review are separate. A sourced draft has references but has not completed independent editorial review.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2">
              <Link href="/about" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">Evidence & methodology <ArrowUpRight aria-hidden="true" size={14} /></Link>
              <Link href="/contribute" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">Suggest a sourced correction <ArrowUpRight aria-hidden="true" size={14} /></Link>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
