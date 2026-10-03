import "server-only";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, ArrowUpRight, BookOpen, GitBranch, Search } from "lucide-react";
import { Citation } from "@/components/citation";
import { Prose } from "@/components/prose";
import { Breadcrumb } from "@/components/shell";
import { SectionNav } from "@/components/section-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { getCatalog, getConcept, getConcepts, getKnowledgeGraph, getSubstance } from "@/lib/repository";
import { conceptPath, type CatalogSubstance, type Claim, type Observation, type Reference, type Substance, type Tag, type TagKind } from "@/lib/types";

export type ConceptSection = "effects" | "outcomes" | "concepts";
export type ReadingSearchParams = Record<string, string | string[] | undefined>;

const sections = {
  effects: { title: "Subjective effects", eyebrow: "THE EXPERIENCE LIBRARY", description: "A shared vocabulary for reported experiences. Explore how an effect is described, which substances are connected to it, and the context behind each observation.", singular: "Subjective effect" },
  outcomes: { title: "Measured outcomes", eyebrow: "WHAT THE RESEARCH MEASURED", description: "Follow a research question across substances. Study populations, exposure, instruments, and limitations stay attached to each finding.", singular: "Measured outcome" },
  concepts: { title: "Mechanisms & concepts", eyebrow: "THE CONNECTIONS BEHIND THE COMPOUNDS", description: "Explore chemical families, biological targets, enzymes, and exposure contexts. Shared concepts connect the substance library to the evidence.", singular: "Concept" },
} as const;

const kindLabels: Record<TagKind, string> = {
  class: "Functional class", "chemical-family": "Chemical family", mechanism: "Mechanism", target: "Biological target",
  neurotransmitter: "Neurotransmitter", enzyme: "Enzyme", effect: "Subjective effect", outcome: "Measured outcome", exposure: "Exposure context", legal: "Legal context",
};

function sectionFor(tag: Tag): ConceptSection { return tag.kind === "effect" ? "effects" : tag.kind === "outcome" ? "outcomes" : "concepts"; }
function first(value: string | string[] | undefined): string { return typeof value === "string" ? value : value?.[0] ?? ""; }
function pageNumber(value: string | string[] | undefined): number {
  const parsed = Number(first(value));
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
}
function sourceLabel(url: string): string {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    return host === "pubmed.ncbi.nlm.nih.gov" ? `PubMed · ${parsed.pathname.split("/").filter(Boolean)[0]}` : host;
  } catch { return "Supporting source"; }
}
function editorialLabel(status: Substance["editorialStatus"]): string { return status === "editorially-reviewed" ? "Editorially reviewed" : "Sourced draft"; }
function sourceAnchor(slug: string, id: string): string { return `source-${slug}-${id}`; }
function SourceCite({ substance, id }: { substance: Substance; id: string }) {
  const index = substance.references.findIndex(reference => reference.id === id);
  if (index < 0) return <span className="text-sm text-muted-foreground">Source not assessed</span>;
  const reference = substance.references[index];
  return <Citation reference={reference} href={`#${sourceAnchor(substance.slug, id)}`} label={`[${index + 1}]`} ariaLabel={`Reference ${index + 1}: ${reference.title}`} />;
}
function CollectionNav({ selected }: { selected: ConceptSection }) {
  return (
    <ButtonGroup aria-label="Knowledge collections" className="flex-wrap">
      {(Object.keys(sections) as ConceptSection[]).map(section => (
        <Button key={section} variant={section === selected ? "secondary" : "outline"} size="sm" nativeButton={false} render={<Link href={`/${section}`} aria-current={section === selected ? "page" : undefined} />}>
          {sections[section].title}
        </Button>
      ))}
    </ButtonGroup>
  );
}

function PageNav({ label, page, totalPages, previousHref, nextHref }: { label: string; page: number; totalPages: number; previousHref?: string; nextHref?: string }) {
  if (totalPages <= 1) return null;
  return (
    <Pagination aria-label={label}>
      <PaginationContent>
        {previousHref && (
          <PaginationItem>
            <PaginationPrevious href={previousHref} />
          </PaginationItem>
        )}
        <PaginationItem>
          <span className="px-2 text-sm text-muted-foreground">Page {page} of {totalPages}</span>
        </PaginationItem>
        {nextHref && (
          <PaginationItem>
            <PaginationNext href={nextHref} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export async function conceptMetadata(slug: string): Promise<Metadata> {
  const concept = await getConcept(slug);
  return concept ? { title: `${concept.label} — ${kindLabels[concept.kind].toLowerCase()} & evidence`, description: concept.description, alternates: { canonical: conceptPath(concept) } } : { title: "Concept not found" };
}

export async function ConceptIndex({ section, searchParams }: { section: ConceptSection; searchParams: ReadingSearchParams }) {
  const [concepts, catalog] = await Promise.all([getConcepts(), getCatalog()]);
  const collection = concepts.filter(concept => sectionFor(concept) === section);
  const query = first(searchParams.q).trim().slice(0, 200);
  const selectedKind = first(searchParams.kind);
  const kinds = [...new Set(collection.map(concept => concept.kind))].sort((a, b) => kindLabels[a].localeCompare(kindLabels[b]));
  const filtered = collection.filter(concept => (!selectedKind || concept.kind === selectedKind) && (!query || [concept.label, concept.description, ...(concept.aliases ?? [])].join(" ").toLowerCase().includes(query.toLowerCase()))).sort((a, b) => a.label.localeCompare(b.label));
  const totalPages = Math.max(1, Math.ceil(filtered.length / 24));
  const page = Math.min(pageNumber(searchParams.page), totalPages);
  const visible = filtered.slice((page - 1) * 24, page * 24);
  const pageHref = (nextPage: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedKind) params.set("kind", selectedKind);
    params.set("page", String(nextPage));
    return `/${section}?${params}`;
  };

  return (
    <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8">
      <Breadcrumb items={[{ href: "/", label: "Substance library" }, { label: sections[section].title }]} />
      <header className="flex flex-col gap-3">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{sections[section].eyebrow}</p>
        <h1 className="text-4xl font-medium">{sections[section].title}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{sections[section].description}</p>
      </header>
      <CollectionNav selected={section} />
      <form action={`/${section}`} role="search">
        <FieldGroup className="sm:flex-row sm:items-end">
          <Field>
            <FieldLabel htmlFor="concept-search" className="sr-only">Search {sections[section].title.toLowerCase()}</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Search aria-hidden="true" />
              </InputGroupAddon>
              <InputGroupInput id="concept-search" name="q" type="search" defaultValue={query} placeholder="Search names, definitions, or aliases" maxLength={200} />
              <InputGroupAddon align="inline-end">
                <InputGroupButton type="submit" size="sm">
                  Search
                  <ArrowRight data-icon="inline-end" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          {section === "concepts" && (
            <Field className="sm:max-w-64">
              <FieldLabel htmlFor="concept-kind" className="sr-only">Concept type</FieldLabel>
              <select id="concept-kind" name="kind" defaultValue={selectedKind} className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm">
                <option value="">All concept types</option>
                {kinds.map(kind => <option key={kind} value={kind}>{kindLabels[kind]}</option>)}
              </select>
            </Field>
          )}
        </FieldGroup>
      </form>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span>{filtered.length} {filtered.length === 1 ? "entry" : "entries"}{query ? ` matching “${query}”` : " in this collection"}</span>
        {(query || selectedKind) && <Link href={`/${section}`} className="underline underline-offset-4">Clear filters</Link>}
      </div>
      {visible.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(concept => {
            const count = catalog.filter(substance => substance.tags.includes(concept.id)).length;
            return (
              <Link className="block h-full" href={conceptPath(concept)} key={concept.id}>
                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="outline">{kindLabels[concept.kind]}</Badge>
                    <CardTitle><h2 className="inline-flex items-start gap-1">{concept.label}<ArrowUpRight aria-hidden="true" size={18} /></h2></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Prose className="text-muted-foreground" text={concept.description} />
                  </CardContent>
                  <CardFooter className="text-muted-foreground">
                    <span>{count} tagged {count === 1 ? "substance" : "substances"}</span>
                    <span className="ms-auto">{concept.sourceUrls?.length ?? 0} definition sources</span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon"><BookOpen /></EmptyMedia>
            <h2>No matching entries</h2>
            <EmptyDescription>{query || selectedKind ? "Try a different name or clear the filters to see this collection." : "Definitions and supporting sources have not been assessed for this collection yet."}</EmptyDescription>
          </EmptyHeader>
          {(query || selectedKind) && (
            <EmptyContent>
              <Button nativeButton={false} variant="outline" render={<Link href={`/${section}`} />}>
                Browse the collection
                <ArrowRight data-icon="inline-end" />
              </Button>
            </EmptyContent>
          )}
        </Empty>
      )}
      <PageNav label="Collection pages" page={page} totalPages={totalPages} previousHref={page > 1 ? pageHref(page - 1) : undefined} nextHref={page < totalPages ? pageHref(page + 1) : undefined} />
      <Card>
        <CardHeader>
          <CardDescription>Definitions are original editorial summaries with linked sources. A connection describes its recorded context; it does not establish a universal effect or clinical benefit. <Link href="/about" className="underline underline-offset-4">Read our methods.</Link></CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}

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

function CardActionStatus({ status, direction }: { status: string; direction: string }) {
  return (
    <CardAction>
      <div className="flex flex-wrap justify-end gap-2">
        <Badge variant="secondary">{status}</Badge>
        <Badge variant="outline">{direction}</Badge>
      </div>
    </CardAction>
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
          {claim.participants.map(participant => {
            const record = memberRecord(participant.entityId);
            return (
              <li key={`${participant.entityId}-${participant.role}`} className="flex flex-wrap items-baseline justify-between gap-2">
                {record.href ? <Link href={record.href} className="underline underline-offset-4">{record.label}</Link> : <span>{record.label}</span>}
                <span className="text-sm text-muted-foreground">{participant.role}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap gap-3">{claim.sourceIds.map(id => <SourceCite key={id} substance={substance} id={id} />)}</div>
        <p><strong>Limitation</strong> {claim.limitation || "Not assessed"}</p>
        {claim.conflictingSourceIds.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span>Conflicting evidence:</span>
            {claim.conflictingSourceIds.map(id => <SourceCite key={id} substance={substance} id={id} />)}
          </div>
        )}
        <Link className="inline-flex items-center gap-1 text-sm underline underline-offset-4" href={`/substances/${substance.slug}#connections`}>{substance.name} · {editorialLabel(substance.editorialStatus)} <ArrowUpRight aria-hidden="true" size={13} /></Link>
      </CardContent>
    </Card>
  );
}

export async function ConceptArticle({ section, slug, searchParams }: { section: ConceptSection; slug: string; searchParams: ReadingSearchParams }) {
  const concept = await getConcept(slug);
  if (!concept) notFound();
  if (sectionFor(concept) !== section) redirect(conceptPath(concept));
  const [concepts, catalog, graph] = await Promise.all([getConcepts(), getCatalog(), getKnowledgeGraph({ focus: `tag:${concept.id}`, limit: 40 })]);
  const memberId = `tag:${concept.id}`;
  const connections = graph.hyperedges.filter(edge => edge.members.includes(memberId));
  const connectedSlugs = new Set(connections.flatMap(edge => edge.members.filter(member => member.startsWith("substance:")).map(member => member.slice("substance:".length))));
  const linkedCatalog = catalog.filter(substance => substance.tags.includes(concept.id) || connectedSlugs.has(substance.slug)).sort((a, b) => a.name.localeCompare(b.name));
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(linkedCatalog.length / pageSize));
  const page = Math.min(pageNumber(searchParams.page), totalPages);
  const visibleCatalog = linkedCatalog.slice((page - 1) * pageSize, page * pageSize);
  const documents = (await Promise.all(visibleCatalog.map(substance => getSubstance(substance.slug)))).filter((substance): substance is Substance => substance !== undefined);
  const observations = documents.flatMap(substance => (section === "effects" ? substance.effects : section === "outcomes" ? substance.outcomes : []).filter(observation => observation.conceptId === concept.id).map(observation => ({ substance, observation })));
  const claims = documents.flatMap(substance => substance.claims.filter(claim => claim.participants.some(participant => participant.entityId === memberId || participant.entityId === concept.id)).map(claim => ({ substance, claim })));
  const mechanisms = documents.flatMap(substance => substance.mechanisms.filter(mechanism => mechanism.conceptId === concept.id).map(mechanism => ({ substance, mechanism })));
  const usedSources = new Map<string, { substance: Substance; reference: Reference }>();
  const addSource = (substance: Substance, id: string) => {
    const reference = substance.references.find(item => item.id === id);
    if (reference) usedSources.set(sourceAnchor(substance.slug, id), { substance, reference });
  };
  observations.forEach(({ substance, observation }) => addSource(substance, observation.sourceId));
  claims.forEach(({ substance, claim }) => [...claim.sourceIds, ...claim.conflictingSourceIds].forEach(id => addSource(substance, id)));
  mechanisms.forEach(({ substance, mechanism }) => addSource(substance, mechanism.sourceId));
  const related = concepts.filter(item => item.id !== concept.id && ((concept.relatedIds ?? []).includes(item.id) || (item.relatedIds ?? []).includes(concept.id)));
  const memberRecord = (member: string): { href?: string; label: string } => {
    if (member.startsWith("tag:")) { const found = concepts.find(item => item.id === member.slice(4)); return found ? { href: conceptPath(found), label: found.label } : { label: member.slice(4) }; }
    const found = catalog.find(item => `substance:${item.slug}` === member);
    return found ? { href: `/substances/${found.slug}`, label: found.name } : { label: member };
  };
  const pageHash = section === "concepts" ? "substances" : "observations";

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
                <span className="text-sm text-muted-foreground">{observations.length} observations{totalPages > 1 ? " on this page" : ""}</span>
              </div>
              <p className="text-muted-foreground">{section === "effects" ? "These qualitative descriptions preserve the reported direction and setting. They do not assign a universal intensity score." : "Measured endpoints are tied to a particular task, population, and exposure. A finding cannot be generalized to a different outcome without supporting evidence."}</p>
              {observations.length ? (
                <div className="flex flex-col gap-4">
                  {observations.map(({ substance, observation }, index) => <ObservationCard key={`${substance.slug}-${index}`} substance={substance} observation={observation} />)}
                </div>
              ) : (
                <Empty>
                  <EmptyHeader>
                    <EmptyDescription>No matching observations have been assessed{totalPages > 1 ? " for the substances on this page" : " in the published collection"}.</EmptyDescription>
                  </EmptyHeader>
                </Empty>
              )}
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
              {connections.map(edge => (
                <Card key={edge.id}>
                  <CardHeader>
                    <CardDescription>{edge.relation.replaceAll("-", " ")}</CardDescription>
                    <CardTitle><h3>{edge.label}</h3></CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <Prose text={edge.description} />
                    <ul className="flex flex-col gap-2">
                      {edge.members.map(member => {
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
                {visibleCatalog.map(substance => <SubstanceCard key={substance.slug} substance={substance} />)}
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
              previousHref={page > 1 ? `${conceptPath(concept)}?page=${page - 1}#${pageHash}` : undefined}
              nextHref={page < totalPages ? `${conceptPath(concept)}?page=${page + 1}#${pageHash}` : undefined}
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
                  {related.map(item => (
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
