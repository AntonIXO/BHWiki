"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Clock3, Search, X } from "lucide-react";
import type { CatalogSubstance } from "@/lib/types";
import type { SearchConcept } from "@/lib/search";
import { searchCatalog } from "@/lib/search";
import styles from "./library-home.module.css";

const starterQueries = ["alertness", "adenosine", "sleep", "serotonin"];
const starterTags = ["psychedelic", "stimulant", "benzodiazepine", "nootropic"];

export default function LibraryHome({ substances, concepts, initialQuery = "", initialTag = "" }: { substances: CatalogSubstance[]; concepts: SearchConcept[]; initialQuery?: string; initialTag?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialTag);
  const results = useMemo(() => searchCatalog(substances, concepts, { q: query, category }), [substances, concepts, query, category]);
  const conceptMap = useMemo(() => new Map(concepts.map((concept) => [concept.id, concept])), [concepts]);
  const categories = [...new Set(substances.map((item) => item.category))].slice(0, 8);

  return <main id="main" className={`${styles.page} ${styles.libraryPage}`}>
    <section className={`${styles.variant} ${styles.quiet}`}>
      <header className={styles.quietHeader}>
        <p className={styles.eyebrow}>THE SUBSTANCE LIBRARY</p>
        <div className={styles.titleRow}><div><h1>Find what you need to understand.</h1><p>Search by substance, effect, mechanism, or a question you already have.</p></div><span className={styles.count}>{substances.length} articles</span></div>
        <SearchBox value={query} onChange={setQuery} placeholder="Try “sleep”, “adenosine”, or “caffeine”…" />
      </header>
      <div className={styles.quickRow}><span className={styles.quickLabel}>Browse by class</span>{categories.map((item) => <button key={item} className={category === item ? styles.quickActive : ""} onClick={() => setCategory(category === item ? "" : item)}>{item}</button>)}</div>
      <div className={styles.libraryGrid}>
        <aside className={styles.guideRail}><p className={styles.railLabel}>Popular starts</p>{starterQueries.map((item) => <button key={item} onClick={() => setQuery(item)}>{item}<ArrowUpRight size={14} /></button>)}<div className={styles.railDivider} /><p className={styles.railLabel}>Narrow the collection</p>{starterTags.map((item) => <button key={item} onClick={() => setCategory(category === item ? "" : item)} className={category === item ? styles.railSelected : ""}>{item}{category === item && <Check size={14} />}</button>)}</aside>
        <div className={styles.libraryResults}><div className={styles.resultHeader}><span>{results.length} {results.length === 1 ? "article" : "articles"}{query && <> for <strong>“{query}”</strong></>}</span><span className={styles.hint}>Open an article for evidence and context</span></div>{results.slice(0, 48).map((substance) => <ResultCard key={substance.slug} substance={substance} conceptMap={conceptMap} />)}{results.length === 0 && <div className={styles.emptyState}><strong>No substances found</strong><span>Try another name, mechanism, or category.</span><button onClick={() => { setQuery(""); setCategory(""); }}>Clear search and filters</button></div>}</div>
      </div>
    </section>
  </main>;
}

function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return <label className={styles.searchBox}><Search size={20} aria-hidden="true" /><span className="sr-only">Search the library</span><input autoComplete="off" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /><kbd>/</kbd>{value && <button type="button" aria-label="Clear search" onClick={() => onChange("")}><X size={16} /></button>}</label>;
}

function ResultCard({ substance, conceptMap }: { substance: CatalogSubstance; conceptMap: Map<string, SearchConcept> }) {
  const tags = substance.tags.map((id) => conceptMap.get(id)).filter((tag) => tag && tag.kind !== "legal").slice(0, 3);
  return <Link href={`/substances/${substance.slug}`} className={`${styles.resultCard} ${styles.resultList}`}><div className={styles.resultMain}><div className={styles.resultMeta}><span className={styles.category}>{substance.category}</span><span className={styles.status}>{substance.editorialStatus === "editorially-reviewed" ? "Reviewed" : "Sourced draft"}</span></div><h3>{substance.name}</h3><p>{substance.summary}</p><div className={styles.tagRow}>{tags.map((tag) => <span key={tag!.id} className={`${styles.tag} ${styles[`tag_${tag!.kind}`]}`}>{tag!.label}</span>)}</div></div><div className={styles.resultAside}><ArrowUpRight size={18} /><span><Clock3 size={13} /> {substance.halfLifeLabel}</span></div></Link>;
}
