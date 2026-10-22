"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Check, ChevronDown, Clock3, FlaskConical, Grid2X2, List, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import type { CatalogSubstance } from "@/lib/types";
import type { SearchConcept } from "@/lib/search";
import { searchCatalog } from "@/lib/search";
import styles from "./prototype-harness.module.css";

type Variant = "quiet" | "guided" | "workbench";
const variants: { id: Variant; label: string }[] = [
  { id: "quiet", label: "Quiet + Guided" },
  { id: "guided", label: "Guided Explorer" },
  { id: "workbench", label: "Research Desk" },
];

const starterQueries = ["alertness", "adenosine", "sleep", "serotonin"];
const starterTags = ["psychedelic", "stimulant", "benzodiazepine", "nootropic"];

export default function LibraryPrototypeHarness({ substances, concepts }: { substances: CatalogSubstance[]; concepts: SearchConcept[] }) {
  const [variant, setVariant] = useState<Variant>(() => {
    if (typeof window === "undefined") return "quiet";
    const value = new URLSearchParams(window.location.search).get("v");
    return variants[Number(value) - 1]?.id ?? "quiet";
  });
  const [replay, setReplay] = useState(0);
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const pickerRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const activeIndex = variants.findIndex((item) => item.id === variant);

  useEffect(() => {
    const select = (index: number) => {
      const next = variants[(index + variants.length) % variants.length];
      setVariant(next.id);
      const url = new URL(window.location.href);
      url.searchParams.set("v", String(index + 1));
      window.history.replaceState(null, "", url);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.target instanceof HTMLElement && (event.target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName))) return;
      const number = Number(event.key);
      if (number >= 1 && number <= variants.length) select(number - 1);
      else if (event.key === "ArrowRight") select(activeIndex + 1);
      else if (event.key === "ArrowLeft") select(activeIndex - 1);
      else if (event.key.toLowerCase() === "r") setReplay((value) => value + 1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  useEffect(() => {
    const updateHighlight = () => {
      const item = itemsRef.current[activeIndex];
      const highlight = highlightRef.current;
      if (!item || !highlight) return;
      highlight.style.width = `${item.offsetWidth}px`;
      highlight.style.transform = `translateX(${item.offsetLeft}px)`;
    };
    updateHighlight();
    const frame = requestAnimationFrame(() => pickerRef.current?.setAttribute("data-ready", ""));
    window.addEventListener("resize", updateHighlight);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", updateHighlight); };
  }, [activeIndex]);

  return (
    <main className={styles.page}>
      <div className={styles.demoNote}>
        <span>Prototype surface</span>
        <span>Library home · three interaction models</span>
      </div>
      <div key={`${variant}-${replay}`} className={styles.stage}>
        {variant === "quiet" && <QuietFinder substances={substances} concepts={concepts} />}
        {variant === "guided" && <GuidedExplorer substances={substances} concepts={concepts} />}
        {variant === "workbench" && <ResearchDesk substances={substances} concepts={concepts} />}
      </div>
      <nav ref={pickerRef} className="proto-picker" aria-label="Prototype variants">
        <span ref={highlightRef} className="proto-picker-highlight" aria-hidden="true" />
        {variants.map((item, index) => (
          <button key={item.id} ref={(node) => { itemsRef.current[index] = node; }} className="proto-picker-item" data-active={item.id === variant ? "" : undefined} aria-current={item.id === variant ? "true" : undefined} onClick={() => { setVariant(item.id); const url = new URL(window.location.href); url.searchParams.set("v", String(index + 1)); window.history.replaceState(null, "", url); }}>{item.label}</button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button className="proto-picker-item proto-picker-replay" aria-label="Replay animation (R)" onClick={() => setReplay((value) => value + 1)}>↻</button>
      </nav>
      <PickerStyles />
    </main>
  );
}

function useResults(substances: CatalogSubstance[], concepts: SearchConcept[]) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState<"name" | "updated">("name");
  const results = useMemo(() => searchCatalog(substances, concepts, { q: query, category, sort }), [substances, concepts, query, category, sort]);
  const conceptMap = useMemo(() => new Map(concepts.map((concept) => [concept.id, concept])), [concepts]);
  return { query, setQuery, category, setCategory, sort, setSort, results, conceptMap };
}

function SearchBox({ value, onChange, placeholder, label = "Search the library" }: { value: string; onChange: (value: string) => void; placeholder: string; label?: string }) {
  return <label className={styles.searchBox}><Search size={20} aria-hidden="true" /><span className="sr-only">{label}</span><input autoComplete="off" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /><kbd>/</kbd>{value && <button type="button" aria-label="Clear search" onClick={() => onChange("")}><X size={16} /></button>}</label>;
}

function ResultCard({ substance, conceptMap, list = false }: { substance: CatalogSubstance; conceptMap: Map<string, SearchConcept>; list?: boolean }) {
  const tags = substance.tags.map((id) => conceptMap.get(id)).filter((tag) => tag && tag.kind !== "legal").slice(0, 3);
  return <Link href={`/substances/${substance.slug}`} className={`${styles.resultCard} ${list ? styles.resultList : ""}`}>
    <div className={styles.resultMain}><div className={styles.resultMeta}><span className={styles.category}>{substance.category}</span><span className={styles.status}>{substance.editorialStatus === "editorially-reviewed" ? "Reviewed" : "Sourced draft"}</span></div><h3>{substance.name}</h3><p>{substance.summary}</p><div className={styles.tagRow}>{tags.map((tag) => <span key={tag!.id} className={`${styles.tag} ${styles[`tag_${tag!.kind}`]}`}>{tag!.label}</span>)}</div></div><div className={styles.resultAside}><ArrowUpRight size={18} /><span><Clock3 size={13} /> {substance.halfLifeLabel}</span></div>
  </Link>;
}

function QuietFinder({ substances, concepts }: { substances: CatalogSubstance[]; concepts: SearchConcept[] }) {
  const { query, setQuery, category, setCategory, results, conceptMap } = useResults(substances, concepts);
  const categories = [...new Set(substances.map((item) => item.category))].slice(0, 8);
  return <section className={`${styles.variant} ${styles.quiet}`}>
    <header className={styles.quietHeader}><p className={styles.eyebrow}>THE SUBSTANCE LIBRARY</p><div className={styles.titleRow}><div><h1>Find what you need to understand.</h1><p>Search by substance, effect, mechanism, or a question you already have.</p></div><span className={styles.count}>{substances.length} articles</span></div><SearchBox value={query} onChange={setQuery} placeholder="Try “sleep”, “adenosine”, or “caffeine”…" /></header>
    <div className={styles.quickRow}><span className={styles.quickLabel}>Browse by class</span>{categories.map((item) => <button key={item} className={category === item ? styles.quickActive : ""} onClick={() => setCategory(category === item ? "" : item)}>{item}</button>)}</div>
    <div className={styles.resultHeader}><span>{results.length} {results.length === 1 ? "article" : "articles"}{query && <> for <strong>“{query}”</strong></>}</span><span className={styles.hint}><BookOpen size={14} /> Open an article for evidence and context</span></div>
    <div className={styles.resultGrid}>{results.slice(0, 12).map((substance) => <ResultCard key={substance.slug} substance={substance} conceptMap={conceptMap} list />)}</div>
  </section>;
}

function GuidedExplorer({ substances, concepts }: { substances: CatalogSubstance[]; concepts: SearchConcept[] }) {
  const { query, setQuery, category, setCategory, results, conceptMap } = useResults(substances, concepts);
  const [intent, setIntent] = useState("Search by name");
  const intentOptions = [{ label: "Search by name", icon: FlaskConical }, { label: "Understand an effect", icon: Sparkles }, { label: "Follow a mechanism", icon: SlidersHorizontal }];
  const activeConcepts = concepts.filter((item) => ["effect", "mechanism", "target"].includes(item.kind)).slice(0, 10);
  return <section className={`${styles.variant} ${styles.guided}`}>
    <header className={styles.guidedHeader}><div><p className={styles.eyebrow}>BHWIKI / LIBRARY</p><h1>What are you trying to understand?</h1><p>Start with a name, an experience, or the biology underneath it.</p></div><span className={styles.count}>{substances.length} in the collection</span></header>
    <div className={styles.intentTabs}>{intentOptions.map(({ label, icon: Icon }) => <button key={label} className={intent === label ? styles.intentActive : ""} onClick={() => setIntent(label)}><Icon size={17} />{label}<span>{intent === label && <Check size={15} />}</span></button>)}</div>
    <div className={styles.guidedGrid}><aside className={styles.guideRail}><p className={styles.railLabel}>{intent === "Search by name" ? "Popular starts" : intent === "Understand an effect" ? "Common experiences" : "Biological threads"}</p>{(intent === "Search by name" ? starterQueries : activeConcepts.map((item) => item.label)).slice(0, 6).map((item) => <button key={item} onClick={() => setQuery(item)}>{item}<ArrowUpRight size={14} /></button>)}<div className={styles.railDivider} /><p className={styles.railLabel}>Narrow the collection</p>{starterTags.map((item) => <button key={item} onClick={() => setCategory(category === item ? "" : item)} className={category === item ? styles.railSelected : ""}>{item}{category === item && <Check size={14} />}</button>)}</aside><div className={styles.guidedResults}><SearchBox value={query} onChange={setQuery} placeholder={intent === "Search by name" ? "Type a substance or alias…" : intent === "Understand an effect" ? "e.g. alertness, anxiety, appetite…" : "e.g. serotonin, NMDA, CYP1A2…"} /><div className={styles.resultHeader}><span>{results.length} matches</span><span className={styles.queryContext}>{query ? `Showing results for “${query}”` : "Begin with a search or a suggestion"}</span></div>{results.slice(0, 8).map((substance) => <ResultCard key={substance.slug} substance={substance} conceptMap={conceptMap} list />)}</div></div>
  </section>;
}

function ResearchDesk({ substances, concepts }: { substances: CatalogSubstance[]; concepts: SearchConcept[] }) {
  const { query, setQuery, category, setCategory, sort, setSort, results, conceptMap } = useResults(substances, concepts);
  const [view, setView] = useState<"list" | "grid">("list");
  const categories = [...new Set(substances.map((item) => item.category))];
  return <section className={`${styles.variant} ${styles.workbench}`}>
    <header className={styles.workHeader}><div><p className={styles.eyebrow}>RESEARCH DESK</p><h1>Substance index</h1><p>Scan, compare, and open the source record.</p></div><div className={styles.workActions}><button><BookOpen size={16} /> Saved views</button><button><SlidersHorizontal size={16} /> Manage fields</button></div></header>
    <div className={styles.workToolbar}><SearchBox value={query} onChange={setQuery} placeholder="Search name, effect, mechanism…" /><select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category"><option value="">All classes</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select><select value={sort} onChange={(event) => setSort(event.target.value as "name" | "updated")} aria-label="Sort results"><option value="name">Name A–Z</option><option value="updated">Recently sourced</option></select><div className={styles.viewToggle}><button className={view === "list" ? styles.viewActive : ""} onClick={() => setView("list")} aria-label="List view"><List size={17} /></button><button className={view === "grid" ? styles.viewActive : ""} onClick={() => setView("grid")} aria-label="Grid view"><Grid2X2 size={17} /></button></div></div>
    <div className={styles.chosenFilters}>{category && <button onClick={() => setCategory("")}>{category}<X size={13} /></button>}{query && <button onClick={() => setQuery("")}>“{query}”<X size={13} /></button>}<span>{results.length} records</span></div>
    <div className={view === "grid" ? styles.deskGrid : styles.deskList}>{results.slice(0, 16).map((substance) => <ResultCard key={substance.slug} substance={substance} conceptMap={conceptMap} list={view === "list"} />)}</div>
  </section>;
}

function PickerStyles() {
  return <style>{`\n.proto-picker { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; align-items: center; gap: 2px; padding: 4px; border-radius: 999px; background: rgba(10,10,10,.82); -webkit-backdrop-filter: blur(12px) saturate(1.4); backdrop-filter: blur(12px) saturate(1.4); box-shadow: 0 0 0 1px rgba(255,255,255,.08) inset,0 8px 24px rgba(0,0,0,.24),0 2px 6px rgba(0,0,0,.12); font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; font-size: 13px; line-height: 1; user-select: none; }\n.proto-picker-highlight { position: absolute; top: 4px; left: 0; height: 28px; border-radius: 999px; background: rgba(255,255,255,.12); will-change: transform; }\n.proto-picker[data-ready] .proto-picker-highlight { transition: transform 250ms cubic-bezier(.23,1,.32,1), width 250ms cubic-bezier(.23,1,.32,1); }\n.proto-picker-item { position: relative; display: flex; align-items: center; height: 28px; padding: 0 12px; border: 0; border-radius: 999px; background: transparent; color: rgba(255,255,255,.55); font: inherit; cursor: pointer; transition: color 150ms ease-out; }\n.proto-picker-item:hover { color: rgba(255,255,255,.85); } .proto-picker-item:active { transform: scale(.97); } .proto-picker-item:focus-visible { outline: 2px solid rgba(255,255,255,.4); outline-offset: 2px; } .proto-picker-item[data-active] { color: #fff; } .proto-picker-divider { width: 1px; height: 16px; margin: 0 4px; background: rgba(255,255,255,.12); } .proto-picker-replay { padding: 0 10px; font-size: 14px; } @media (prefers-reduced-motion: reduce) { .proto-picker[data-ready] .proto-picker-highlight { transition: none; } .proto-picker-item { transition: none; } }`}</style>;
}
