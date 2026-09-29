import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, BookOpen, CircleDot, GitBranch, History, Info, MoveHorizontal } from "lucide-react";
import { Breadcrumb } from "@/components/shell";
import { KineticsChart } from "@/components/kinetics-chart";
import { getSubstance, getCatalog, getConcepts } from "@/lib/repository";
import { conceptPath, type CatalogSubstance, type Concept, type DoseContext, type Observation, type Substance } from "@/lib/types";
import "./article.css";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const substance = await getSubstance((await params).slug);
  return { title: substance ? `${substance.name} — effects, evidence & pharmacokinetics` : "Substance not found", description: substance?.summary };
}

function Source({ substance, id }: { substance: Substance; id: string }) {
  const index = substance.references.findIndex(reference => reference.id === id);
  if (index < 0) return <span className="article-missing-source">[Source needed: {id || "unlinked claim"}]</span>;
  return <a className="article-citation" href={`#reference-${id}`} aria-label={`Reference ${index + 1}: ${substance.references[index].title}`}>[{index + 1}]</a>;
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

function EntityLink({ id, concepts, catalog }: { id: string; concepts: Concept[]; catalog: CatalogSubstance[] }) {
  const entityId = id.replace(/^(substance|tag|concept):/, "");
  const substance = catalog.find(item => item.slug === entityId);
  const concept = concepts.find(item => item.id === entityId);
  if (id.startsWith("substance:") || (!concept && substance)) return substance ? <Link href={`/substances/${substance.slug}`}>{substance.name}</Link> : <span>{entityId}</span>;
  return concept ? <Link href={conceptPath(concept)}>{concept.label}</Link> : <span>{entityId}</span>;
}

function ObservationMatrix({ observations, substance, concepts, measured = false }: { observations: Observation[]; substance: Substance; concepts: Concept[]; measured?: boolean }) {
  if (!observations.length) return <p className="article-data-empty">Not assessed. No sourced {measured ? "measured outcomes" : "subjective observations"} have been curated for this article.</p>;
  return <div className="article-effects">{observations.map((effect, index) => {
    const concept = concepts.find(item => item.id === effect.conceptId);
    return <article key={`${effect.conceptId}-${index}`} className="article-effect-row">
      <div className="article-effect-name"><h3>{concept ? <Link href={conceptPath(concept)}>{effect.name}</Link> : effect.name}</h3><span>{effect.evidence}</span></div>
      <div className={`article-effect-direction article-direction-${effect.direction.toLowerCase()}`}>{effect.direction === "Increased" ? <ArrowUp size={16}/> : effect.direction === "Decreased" ? <ArrowDown size={16}/> : <MoveHorizontal size={16}/>}<span>{effect.direction}</span></div>
      <p>{effect.description} <Source substance={substance} id={effect.sourceId}/></p>
      <dl className="article-observation-context"><div><dt>Population</dt><dd>{effect.population || "Not established"}</dd></div><div><dt>Exposure context</dt><dd>{effect.exposure || "Not established"}</dd></div>{measured && <><div><dt>Measure / instrument</dt><dd>{effect.instrument || "Not assessed in this summary"}</dd></div><div><dt>Magnitude</dt><dd>{effect.magnitude || "Not quantified in this summary"}</dd></div></>}</dl>
    </article>;
  })}</div>;
}

export default async function SubstancePage({ params }: Props) {
  const { slug } = await params;
  const substance = await getSubstance(slug);
  if (!substance) notFound();
  const [allSubstances, concepts] = await Promise.all([getCatalog(), getConcepts()]);
  const substanceTags = substance.tags.map(id => concepts.find(tag => tag.id === id)).filter(tag => tag !== undefined);
  const related = allSubstances.filter(item => item.slug !== substance.slug).map(item => ({ item, shared: item.tags.filter(tag => substance.tags.includes(tag)).length })).filter(entry => entry.shared > 0).sort((a, b) => b.shared - a.shared).slice(0, 3);
  const selectedObservation = substance.pkObservations.find(item => item.id === substance.halfLife.observationId);
  const reviewed = substance.editorialStatus === "editorially-reviewed";
  const toc = [{ id: "overview", name: "Overview" }, { id: "effects", name: "Subjective effects" }, { id: "measured-outcomes", name: "Measured outcomes" }, { id: "exposure", name: "Doses & routes" }, { id: "kinetics", name: "Pharmacokinetics" }, { id: "safety", name: "Safety" }, { id: "evidence", name: "Research" }, { id: "connections", name: "Connections" }, { id: "legal", name: "Legal context" }, { id: "editorial-history", name: "History" }];

  return <main id="main" className="article-page">
    <Breadcrumb current={substance.name}/>
    <header className="article-hero">
      <div className="article-hero-kicker"><span className="article-overline">THE SUBSTANCE LIBRARY</span><span className="article-draft"><span/>{reviewed ? "Editorially reviewed" : "Sourced draft"}</span></div>
      <h1>{substance.name}<span>{substance.subtitle}</span></h1>
      <p className="article-summary">{substance.summary}</p>
      <div className="article-tags">{substanceTags.map(tag => <Link key={tag.id} href={conceptPath(tag)} className={`article-tag article-tag-${tag.kind}`} title={`${tag.kind}: ${tag.description}`}>{tag.label}</Link>)}</div>
      <div className="article-meta"><span><BookOpen size={16}/>{substance.references.length} sources</span><span>Content date {dateLabel(substance.reviewedAt)}</span><Link href={`/graph?focus=${substance.slug}`}>Explore connections <GitBranch size={16}/></Link><Link href={`/substances/${slug}/history`}>Revision history <History size={16}/></Link></div>
    </header>
    <nav className="article-toc" aria-label="On this page">{toc.map(item => <a key={item.id} href={`#${item.id}`}>{item.name}</a>)}</nav>
    <div className="article-layout">
      <div className="article-main">
        <section id="overview" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">01</span><h2>Overview</h2></div>
          <p className="article-body-copy">{substance.description}</p>
          <div className="article-evidence-note"><BookOpen size={21}/><div><strong>{reviewed ? "Editorially reviewed article" : "Sourced draft · editorial review pending"}</strong><p>{substance.evidenceNote}</p><span>Assessment belongs to each claim and outcome. An article’s editorial status is not a grade of a substance’s safety or efficacy.</span></div></div>
          <div className="article-mechanisms"><h3>How it works</h3>{substance.mechanisms.length ? substance.mechanisms.map(mechanism => {
            const concept = concepts.find(item => item.id === mechanism.conceptId);
            return <div key={mechanism.title} className="article-mechanism"><CircleDot size={17}/><div><h4>{concept ? <Link href={conceptPath(concept)}>{mechanism.title}</Link> : mechanism.title}</h4><p>{mechanism.description} <Source substance={substance} id={mechanism.sourceId}/></p></div></div>;
          }) : <p className="article-data-empty">Mechanisms not assessed.</p>}</div>
        </section>

        <section id="effects" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">02</span><h2>Subjective effects</h2></div>
          <p className="article-section-intro">Descriptions of experience in their reported context. Direction does not imply benefit, and these observations do not define a universal intensity score.</p>
          <ObservationMatrix observations={substance.effects} substance={substance} concepts={concepts}/>
        </section>

        <section id="measured-outcomes" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">03</span><h2>Measured outcomes</h2></div>
          <p className="article-section-intro">What the research measured, for whom, and under which exposure. Findings remain attached to the study’s task or clinical endpoint.</p>
          <ObservationMatrix observations={substance.outcomes} substance={substance} concepts={concepts} measured/>
        </section>

        <section id="exposure" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">04</span><h2>Doses & routes</h2></div>
          <p className="article-section-intro">Published exposure records, distinguished by source category. These describe study or reference context and are not personal dosing recommendations.</p>
          {substance.doses.length ? <div className="article-dose-list">{substance.doses.map((dose, index) => <article className="article-dose-card" key={`${dose.label}-${index}`}><header><h3>{dose.label}</h3><span className="article-record-category">{({ research: "Research exposure", "approved-label": "Approved-label context", reference: "Reference description", community: "Community description" })[dose.sourceCategory]}</span></header><p className="article-dose-amount">{doseQuantity(dose)} <Source substance={substance} id={dose.sourceId}/></p><dl className="article-observation-context"><div><dt>Ingredient / form</dt><dd>{dose.ingredient || "Not established"} · {dose.formulation || "Formulation not established"}</dd></div><div><dt>Route</dt><dd>{dose.route || "Not established"}</dd></div><div><dt>Frequency</dt><dd>{dose.frequency || "Not established"}</dd></div><div><dt>Duration</dt><dd>{dose.duration || "Not established"}</dd></div><div><dt>Population</dt><dd>{dose.population || "Not established"}</dd></div><div><dt>Purpose</dt><dd>{dose.purpose || "Not assessed"}</dd></div></dl><p>{dose.note}</p></article>)}</div> : <p className="article-data-empty">Not assessed. No sourced exposure records have been curated.</p>}
        </section>

        <section id="kinetics" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">05</span><h2>Pharmacokinetics</h2></div>
          <p className="article-section-intro">Absorption, metabolism and elimination depend on the analyte, route, formulation, physiology and other exposures.</p>
          <div className="article-timing-grid"><div><span>Elimination half-life{selectedObservation ? ` · ${selectedObservation.analyte}` : ""}</span><strong>{substance.halfLife.label || "Not established"}</strong> <Source substance={substance} id={substance.halfLife.sourceId}/></div><div><span>Onset</span><strong>{substance.kinetics.onset || "Not established"}</strong> <Source substance={substance} id={substance.kinetics.sourceId}/></div><div><span>Peak</span><strong>{substance.kinetics.peak || "Not established"}</strong> <Source substance={substance} id={substance.kinetics.sourceId}/></div><div><span>Duration</span><strong>{substance.kinetics.duration || "Not established"}</strong> <Source substance={substance} id={substance.kinetics.sourceId}/></div></div>
          <p className="article-body-copy article-timing-context">{substance.halfLife.context} <Source substance={substance} id={substance.halfLife.sourceId}/></p>
          <KineticsChart observation={selectedObservation} sourceHref={`#reference-${selectedObservation?.sourceId ?? substance.halfLife.sourceId}`}/>
          <h3 className="article-subheading">Sourced elimination observations</h3>
          {substance.pkObservations.length ? <div className="article-pk-observations">{substance.pkObservations.map(observation => <article key={observation.id} id={`pk-${observation.id}`}><h4>{observation.analyte}</h4><p className="article-pk-value">{observation.statistic === "reported-range" && observation.low !== null && observation.high !== null ? `${observation.low}–${observation.high} hours` : observation.value !== null ? `${observation.value} hours` : "Not established"}<span>{({ "reported-range": "Reported range", "study-mean": "Study mean", approximate: "Approximate estimate", "not-established": "No numeric estimate" })[observation.statistic]}</span> <Source substance={substance} id={observation.sourceId}/></p><dl className="article-observation-context"><div><dt>Route / formulation</dt><dd>{observation.route} · {observation.formulation}</dd></div><div><dt>Population</dt><dd>{observation.population}</dd></div></dl><p>{observation.context}</p></article>)}</div> : <p className="article-data-empty">Elimination observations not assessed.</p>}
          <dl className="article-kinetics-detail"><div><dt>Bioavailability</dt><dd>{substance.kinetics.bioavailability || "Not established"} <Source substance={substance} id={substance.kinetics.sourceId}/></dd></div><div><dt>Metabolism / metabolites</dt><dd>{substance.kinetics.metabolism || "Not established"} <Source substance={substance} id={substance.kinetics.sourceId}/></dd></div></dl>
          {substance.modifiers.length > 0 && <div className="article-modifiers"><h3>What changes the picture?</h3>{substance.modifiers.map(modifier => <div className="article-modifier" key={modifier.label}><div><h4>{modifier.label}</h4><span>{modifier.effect}</span></div><p>{modifier.detail} <Source substance={substance} id={modifier.sourceId}/></p>{substance.pkObservations.some(item => item.id === modifier.observationId) && <a className="article-context-link" href={`#pk-${modifier.observationId}`}>Related observation <ArrowRight size={14}/></a>}</div>)}</div>}
        </section>

        <section id="safety" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">06</span><h2>Safety & uncertainty</h2></div>
          <p className="article-section-intro">Adverse effects, interactions, tolerance and withdrawal in the cited contexts. This section is not an exhaustive interaction checker.</p>
          {substance.cautions.length ? <div className="article-cautions">{substance.cautions.map(caution => <div key={caution.title}><Info size={20}/><div><h3>{caution.title}</h3><p>{caution.description} <Source substance={substance} id={caution.sourceId}/></p></div></div>)}</div> : <p className="article-data-empty">Safety not assessed.</p>}
        </section>

        <section id="evidence" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">07</span><h2>Research & sources</h2><span className="article-count">{substance.references.length}</span></div>
          <p className="article-section-intro">The source, the finding and its limitations. Funding information is reported where curated; an unassessed disclosure does not mean a study had no commercial funding.</p>
          <ol className="article-references">{substance.references.map((reference, index) => <li key={reference.id} id={`reference-${reference.id}`}><span className="article-reference-number">{String(index + 1).padStart(2, "0")}</span><div><div className="article-reference-kind">{reference.kind} <span>· {reference.year}</span></div><h3><a href={reference.url} target="_blank" rel="noreferrer">{reference.title}<ArrowUpRight size={16}/></a></h3><span className="article-reference-authors">{reference.authors}</span>{(reference.pmid || reference.doi) && <div className="article-reference-identifiers">{reference.pmid && <a href={`https://pubmed.ncbi.nlm.nih.gov/${reference.pmid}/`} target="_blank" rel="noreferrer">PMID {reference.pmid}</a>}{reference.doi && <a href={`https://doi.org/${reference.doi}`} target="_blank" rel="noreferrer">DOI {reference.doi}</a>}</div>}<p>{reference.insight}</p><p className="article-reference-limit"><strong>Limitations</strong> {reference.limitation}</p><p className="article-reference-funding"><strong>Funding / disclosures</strong> {reference.funding || "Not assessed in this summary."}</p></div></li>)}</ol>
        </section>

        <section id="connections" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">08</span><h2>Connected claims</h2></div>
          <p className="article-section-intro">Each relationship retains its participants, roles and context. Shared membership does not imply that substances should be combined.</p>
          {substance.claims.length ? <div className="article-claims">{substance.claims.map(claim => <article className="article-claim" key={claim.id}><span className="article-record-category">{claim.relation}</span><h3>{claim.assertion}</h3><ul className="article-claim-participants">{claim.participants.map(member => <li key={`${member.entityId}-${member.role}`}><EntityLink id={member.entityId} concepts={concepts} catalog={allSubstances}/><span>{member.role}</span></li>)}</ul><p>{claim.context}</p><p className="article-reference-limit"><strong>Limitation</strong> {claim.limitation}</p><div className="article-claim-sources"><span>Supporting sources {claim.sourceIds.map(id => <Source key={id} substance={substance} id={id}/>)}</span>{claim.conflictingSourceIds.length > 0 && <span>Conflicting sources {claim.conflictingSourceIds.map(id => <Source key={id} substance={substance} id={id}/>)}</span>}</div><p className="article-claim-assessment">Evidence strength: not formally assessed.</p></article>)}</div> : <p className="article-data-empty">Structured claims not assessed.</p>}
          <Link className="article-context-link" href={`/graph?focus=${slug}`}>Explore the relationship graph <GitBranch size={16}/></Link>
        </section>

        <section id="legal" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">09</span><h2>Legal context</h2></div>
          {substance.legal.length > 0 ? <div className="article-legal">{substance.legal.map(item => <article key={`${item.jurisdiction}-${item.activity}`}><h3>{item.jurisdiction}</h3><p>{item.status} <a href={item.sourceUrl} target="_blank" rel="noreferrer">Authority source <ArrowUpRight size={14}/></a></p><dl className="article-observation-context"><div><dt>Activity / form</dt><dd>{item.activity}</dd></div><div><dt>As of</dt><dd>{dateLabel(item.asOf)}</dd></div></dl><p>Other jurisdictions and activities require separate assessment.</p></article>)}</div> : <p className="article-data-empty">Not assessed. Absence of a legal record is not a statement of legal status.</p>}
        </section>

        <section id="editorial-history" className="article-section">
          <div className="article-section-heading"><span className="article-section-number">10</span><h2>Editorial history</h2></div>
          <p className="article-body-copy">{reviewed ? "This article is marked editorially reviewed. Review attribution is recorded with its published revisions." : "This article is a sourced draft. Editorial review has not been recorded."} Content date: {dateLabel(substance.reviewedAt)}.</p><div className="article-history-links"><Link href={`/substances/${slug}/history`}><History size={17}/>View published revisions</Link><Link href={`/contribute?article=${slug}`}><BookOpen size={17}/>Suggest a correction</Link></div>
        </section>
        {related.length > 0 && <section className="article-related"><div className="article-section-heading"><h2>Keep exploring</h2><Link href={`/graph?focus=${substance.slug}`}>View graph <ArrowRight size={16}/></Link></div><div className="article-related-grid">{related.map(({ item, shared }) => <Link key={item.slug} href={`/substances/${item.slug}`}><span>{item.category}</span><h3>{item.name}<ArrowUpRight size={17}/></h3><p>{shared} shared {shared === 1 ? "concept" : "concepts"}</p></Link>)}</div></section>}
      </div>
      <aside className="article-sidebar" aria-label="Substance identity and related resources">
        <div className="article-identity"><div className="article-molecule"><span>MOLECULAR STRUCTURE</span><img src={`/molecules/${substance.slug}.png`} alt={`Two-dimensional molecular structure of ${substance.name}`} width={270} height={230}/><a href={`https://pubchem.ncbi.nlm.nih.gov/compound/${substance.pubchemCid}`} target="_blank" rel="noreferrer">PubChem CID {substance.pubchemCid}<ArrowUpRight size={14}/></a></div><div className="article-identity-body"><span className="article-overline">IDENTITY</span><dl><div><dt>Formula</dt><dd>{substance.formula}</dd></div><div><dt>Molecular weight</dt><dd>{substance.molecularWeight}</dd></div><div><dt>Classification</dt><dd>{substance.category}</dd></div><div><dt>Also known as</dt><dd>{substance.aliases.length ? substance.aliases.join(", ") : "No aliases curated"}</dd></div></dl><p className="article-identity-source">Identity source <Source substance={substance} id="pubchem"/></p><details className="article-smiles"><summary>SMILES identifier</summary><code>{substance.smiles || "Not assessed"}</code></details><Link className="article-graph-link" href={`/graph?focus=${substance.slug}`}><GitBranch size={17}/>See its connections<ArrowUpRight size={16}/></Link></div></div>
        <div className="article-open-note"><BookOpen size={20}/><div><strong>Knowledge is a collective effort.</strong><p>Help make this page clearer, more complete and better sourced.</p><Link href={`/contribute?article=${slug}`}>Contribute to BHWiki <ArrowUpRight size={15}/></Link></div></div>
      </aside>
    </div>
  </main>;
}
