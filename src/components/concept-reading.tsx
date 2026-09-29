import "server-only";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, ArrowUpRight, BookOpen, GitBranch, Search } from "lucide-react";
import { getCatalog, getConcept, getConcepts, getKnowledgeGraph, getSubstance } from "@/lib/repository";
import { conceptPath, type CatalogSubstance, type Claim, type Observation, type Reference, type Substance, type Tag, type TagKind } from "@/lib/types";
import styles from "./concept-reading.module.css";

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
function Citation({ substance, id }: { substance: Substance; id: string }) {
  const source = substance.references.find(reference => reference.id === id);
  return source ? <a className={styles.citation} href={`#${sourceAnchor(substance.slug, id)}`} aria-label={`Source: ${source.title}`}>Source <ArrowUpRight size={12}/></a> : <span className={styles.muted}>Source not assessed</span>;
}
function CollectionNav({ selected }: { selected: ConceptSection }) {
  return <nav className={styles.collectionNav} aria-label="Knowledge collections">{(Object.keys(sections) as ConceptSection[]).map(section => <Link key={section} href={`/${section}`} aria-current={section === selected ? "page" : undefined}>{sections[section].title}</Link>)}</nav>;
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

  return <main id="main" className={styles.page}>
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Substance library</Link><span aria-hidden="true">/</span><span>{sections[section].title}</span></nav>
    <header className={styles.indexHeader}><span className={styles.eyebrow}>{sections[section].eyebrow}</span><h1>{sections[section].title}</h1><p>{sections[section].description}</p></header>
    <CollectionNav selected={section}/>
    <form className={styles.searchForm} action={`/${section}`} role="search">
      <div className={styles.searchInput}><Search size={18} aria-hidden="true"/><label htmlFor="concept-search" className="sr-only">Search {sections[section].title.toLowerCase()}</label><input id="concept-search" name="q" type="search" defaultValue={query} placeholder="Search names, definitions, or aliases" maxLength={200}/></div>
      {section === "concepts" && <><label htmlFor="concept-kind" className="sr-only">Concept type</label><select id="concept-kind" name="kind" defaultValue={selectedKind}><option value="">All concept types</option>{kinds.map(kind => <option key={kind} value={kind}>{kindLabels[kind]}</option>)}</select></>}
      <button type="submit">Search <ArrowRight size={14}/></button>
    </form>
    <div className={styles.resultsMeta}><span>{filtered.length} {filtered.length === 1 ? "entry" : "entries"}{query ? ` matching “${query}”` : " in this collection"}</span>{(query || selectedKind) && <Link href={`/${section}`}>Clear filters</Link>}</div>
    {visible.length ? <div className={styles.cardGrid}>{visible.map(concept => {
      const count = catalog.filter(substance => substance.tags.includes(concept.id)).length;
      return <Link className={styles.conceptCard} href={conceptPath(concept)} key={concept.id}><span className={styles.kind}>{kindLabels[concept.kind]}</span><h2>{concept.label}<ArrowUpRight size={18}/></h2><p>{concept.description}</p><div className={styles.cardMeta}><span>{count} tagged {count === 1 ? "substance" : "substances"}</span><span>{concept.sourceUrls?.length ?? 0} definition sources</span></div></Link>;
    })}</div> : <div className={styles.empty}><BookOpen size={26}/><h2>No matching entries</h2><p>{query || selectedKind ? "Try a different name or clear the filters to see this collection." : "Definitions and supporting sources have not been assessed for this collection yet."}</p>{(query || selectedKind) && <Link href={`/${section}`}>Browse the collection <ArrowRight size={15}/></Link>}</div>}
    {totalPages > 1 && <nav className={styles.pagination} aria-label="Collection pages">{page > 1 && <Link href={pageHref(page - 1)}>Previous</Link>}<span>Page {page} of {totalPages}</span>{page < totalPages && <Link href={pageHref(page + 1)}>Next <ArrowRight size={14}/></Link>}</nav>}
    <div className={styles.collectionNote}><BookOpen size={19}/><p>Definitions are original editorial summaries with linked sources. A connection describes its recorded context; it does not establish a universal effect or clinical benefit. <Link href="/about">Read our methods.</Link></p></div>
  </main>;
}

function ObservationCard({ observation, substance }: { observation: Observation; substance: Substance }) {
  return <article className={styles.observation}>
    <div className={styles.observationHeader}><div><Link href={`/substances/${substance.slug}`}>{substance.name}<ArrowUpRight size={15}/></Link><span>{editorialLabel(substance.editorialStatus)}</span></div><span className={styles.direction}>{observation.direction}</span></div>
    <h3>{observation.name}</h3><p>{observation.description} <Citation substance={substance} id={observation.sourceId}/></p>
    <dl className={styles.context}><div><dt>Evidence type</dt><dd>{observation.evidence}</dd></div><div><dt>Population</dt><dd>{observation.population || "Not assessed"}</dd></div><div><dt>Exposure</dt><dd>{observation.exposure || "Not assessed"}</dd></div><div><dt>Instrument</dt><dd>{observation.instrument || "Not assessed"}</dd></div><div><dt>Reported magnitude</dt><dd>{observation.magnitude || "Not established"}</dd></div></dl>
  </article>;
}

function ClaimCard({ claim, substance, memberRecord }: { claim: Claim; substance: Substance; memberRecord: (member: string) => { href?: string; label: string } }) {
  return <article className={styles.claim}><span className={styles.kind}>Claim · not formally assessed</span><h3>{claim.assertion}</h3><p>{claim.context || "Context not assessed"}</p><ul className={styles.members}>{claim.participants.map(participant => { const record = memberRecord(participant.entityId); return <li key={`${participant.entityId}-${participant.role}`}>{record.href ? <Link href={record.href}>{record.label}</Link> : <span>{record.label}</span>}<span>{participant.role}</span></li>; })}</ul><div className={styles.claimSources}>{claim.sourceIds.map(id => <Citation key={id} substance={substance} id={id}/>)}</div><p className={styles.limitation}><strong>Limitation</strong> {claim.limitation || "Not assessed"}</p>{claim.conflictingSourceIds.length > 0 && <div className={styles.claimSources}><span>Conflicting evidence:</span>{claim.conflictingSourceIds.map(id => <Citation key={id} substance={substance} id={id}/>)}</div>}<Link className={styles.textLink} href={`/substances/${substance.slug}#connections`}>{substance.name} · {editorialLabel(substance.editorialStatus)} <ArrowUpRight size={13}/></Link></article>;
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

  return <main id="main" className={styles.page}>
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Library</Link><span aria-hidden="true">/</span><Link href={`/${section}`}>{sections[section].title}</Link><span aria-hidden="true">/</span><span aria-current="page">{concept.label}</span></nav>
    <header className={styles.articleHeader}><div className={styles.headingMeta}><span className={styles.eyebrow}>{kindLabels[concept.kind].toUpperCase()}</span><span className={styles.draft}>Definition: {concept.sourceUrls?.length ? "sourced draft" : "sources not assessed"}</span></div><h1>{concept.label}</h1><p>{concept.description}</p>{Boolean(concept.aliases?.length) && <p className={styles.aliases}>Also called {concept.aliases!.join(", ")}</p>}<div className={styles.headerLinks}><a href="#definition-sources"><BookOpen size={15}/>{concept.sourceUrls?.length ?? 0} definition sources</a><Link href={`/graph?focus=${encodeURIComponent(memberId)}`}><GitBranch size={15}/>Explore connections <ArrowUpRight size={14}/></Link></div></header>
    <nav className={styles.articleNav} aria-label="On this page">{section !== "concepts" && <a href="#observations">Observations</a>}<a href="#connections">Connections</a><a href="#substances">Linked substances</a><a href="#definition-sources">Sources</a></nav>
    <div className={styles.articleLayout}><div>
      {section !== "concepts" && <section className={styles.section} id="observations"><div className={styles.sectionHeading}><h2>{section === "effects" ? "Reported experience" : "Findings in context"}</h2><span>{observations.length} observations{totalPages > 1 ? " on this page" : ""}</span></div><p className={styles.sectionIntro}>{section === "effects" ? "These qualitative descriptions preserve the reported direction and setting. They do not assign a universal intensity score." : "Measured endpoints are tied to a particular task, population, and exposure. A finding cannot be generalized to a different outcome without supporting evidence."}</p>{observations.length ? <div className={styles.observationList}>{observations.map(({ substance, observation }, index) => <ObservationCard key={`${substance.slug}-${index}`} substance={substance} observation={observation}/>)}</div> : <p className={styles.emptyInline}>No matching observations have been assessed{totalPages > 1 ? " for the substances on this page" : " in the published collection"}.</p>}</section>}
      {mechanisms.length > 0 && <section className={styles.section}><div className={styles.sectionHeading}><h2>Mechanistic context</h2></div>{mechanisms.map(({ substance, mechanism }, index) => <article className={styles.claim} key={`${substance.slug}-${index}`}><span className={styles.kind}>{substance.name} · {editorialLabel(substance.editorialStatus)}</span><h3>{mechanism.title}</h3><p>{mechanism.description} <Citation substance={substance} id={mechanism.sourceId}/></p><Link className={styles.textLink} href={`/substances/${substance.slug}`}>Read the substance article <ArrowUpRight size={14}/></Link></article>)}</section>}
      <section className={styles.section} id="connections"><div className={styles.sectionHeading}><h2>Connections & claims</h2><Link href={`/graph?focus=${encodeURIComponent(memberId)}`}>Open graph <ArrowUpRight size={14}/></Link></div><p className={styles.sectionIntro}>Each relationship keeps its participants and their roles together. Source details explain what the connection supports.</p>{claims.map(({ substance, claim }) => <ClaimCard key={`${substance.slug}-${claim.id}`} substance={substance} claim={claim} memberRecord={memberRecord}/>)}{connections.map(edge => <article className={styles.connection} key={edge.id}><span className={styles.kind}>{edge.relation.replaceAll("-", " ")}</span><h3>{edge.label}</h3><p>{edge.description}</p><ul className={styles.members}>{edge.members.map(member => { const record = memberRecord(member); return <li key={member}>{record.href ? <Link href={record.href}>{record.label}</Link> : <span>{record.label}</span>}<span>{edge.memberRoles[member] || "Participant"}</span></li>; })}</ul><div className={styles.claimSources}>{[...new Set([edge.sourceUrl, ...(edge.sourceUrls ?? [])].filter(Boolean))].map((url, index) => <a className={styles.citation} key={url} href={url} target="_blank" rel="noreferrer">Relationship source {index + 1}<ArrowUpRight size={12}/></a>)}</div></article>)}{!claims.length && !connections.length && <p className={styles.emptyInline}>No sourced relationships have been assessed for this concept yet.</p>}{graph.truncated && <p className={styles.emptyInline}>This is a bounded selection of connections. Open a neighboring article or focus the graph to continue exploring.</p>}</section>
      <section className={styles.section} id="substances"><div className={styles.sectionHeading}><h2>Linked substances</h2><span>{linkedCatalog.length} entries</span></div><p className={styles.sectionIntro}>Tagged articles and participants in the relationships above. A shared tag alone does not establish a causal effect.</p>{visibleCatalog.length ? <div className={styles.substanceGrid}>{visibleCatalog.map(substance => <SubstanceCard key={substance.slug} substance={substance}/>)}</div> : <p className={styles.emptyInline}>No linked substance articles have been assessed yet.</p>}{totalPages > 1 && <nav className={styles.pagination} aria-label="Linked substance pages">{page > 1 && <Link href={`${conceptPath(concept)}?page=${page - 1}#${section === "concepts" ? "substances" : "observations"}`}>Previous</Link>}<span>Page {page} of {totalPages}</span>{page < totalPages && <Link href={`${conceptPath(concept)}?page=${page + 1}#${section === "concepts" ? "substances" : "observations"}`}>Next <ArrowRight size={14}/></Link>}</nav>}</section>
      <section className={styles.section} id="definition-sources"><div className={styles.sectionHeading}><h2>Follow the sources</h2></div><h3 className={styles.subheading}>Definition sources</h3><p className={styles.sectionIntro}>Supporting reading for this original editorial definition. Independent editorial review has not been recorded.</p>{concept.sourceUrls?.length ? <ul className={styles.definitionSources}>{concept.sourceUrls.map((url, index) => <li key={url}><span>{String(index + 1).padStart(2, "0")}</span><a href={url} target="_blank" rel="noreferrer">{sourceLabel(url)}<ArrowUpRight size={14}/></a></li>)}</ul> : <p className={styles.emptyInline}>Definition sources have not been assessed.</p>}{usedSources.size > 0 && <><h3 className={styles.subheading}>Observation & claim sources</h3><ol className={styles.references}>{[...usedSources.entries()].map(([id, { reference, substance }]) => <li key={id} id={id}><span className={styles.kind}>{reference.kind} · {reference.year}</span><h4><a href={reference.url} target="_blank" rel="noreferrer">{reference.title}<ArrowUpRight size={15}/></a></h4><span className={styles.authors}>{reference.authors}</span><p>{reference.insight}</p><p className={styles.limitation}><strong>Limitation</strong> {reference.limitation}</p><p className={styles.limitation}><strong>Funding / disclosures</strong> {reference.funding || "Not assessed"}</p><Link className={styles.textLink} href={`/substances/${substance.slug}#reference-${reference.id}`}>Source in {substance.name} <ArrowUpRight size={13}/></Link></li>)}</ol></>}</section>
    </div><aside className={styles.sidebar} aria-label="Related reading"><div className={styles.sidebarCard}><span className={styles.eyebrow}>KEEP EXPLORING</span><h2>Related concepts</h2>{related.length ? <ul>{related.map(item => <li key={item.id}><Link href={conceptPath(item)}><span>{kindLabels[item.kind]}</span>{item.label}<ArrowUpRight size={14}/></Link></li>)}</ul> : <p>Related definitions have not been assessed yet.</p>}<Link className={styles.textLink} href={`/${section}`}>Browse {sections[section].title.toLowerCase()} <ArrowRight size={14}/></Link></div><div className={styles.editorialNote}><BookOpen size={20}/><h2>Read with the context left in.</h2><p>Sources and editorial review are separate. A sourced draft has references but has not completed independent editorial review.</p><Link href="/about">Evidence & methodology <ArrowUpRight size={14}/></Link><Link href="/contribute">Suggest a sourced correction <ArrowUpRight size={14}/></Link></div></aside></div>
  </main>;
}

function SubstanceCard({ substance }: { substance: CatalogSubstance }) {
  return <Link className={styles.substanceCard} href={`/substances/${substance.slug}`}><span className={styles.kind}>{substance.category}</span><h3>{substance.name}<ArrowUpRight size={16}/></h3><p>{substance.summary}</p><span className={styles.muted}>{editorialLabel(substance.editorialStatus)}</span></Link>;
}
