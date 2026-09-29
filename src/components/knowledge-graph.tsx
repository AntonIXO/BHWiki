"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Expand, Minus, Plus, Search, X } from "lucide-react";
import type { Core, StylesheetStyle } from "cytoscape";
import { buildKnowledgeGraph, previewKnowledgeGraph, searchKnowledgeGraph, type GraphNode } from "@/lib/graph";
import type { KnowledgeGraphData, TagKind } from "@/lib/types";
import styles from "./knowledge-graph.module.css";

type Props = KnowledgeGraphData & { compact?: boolean; initialFocus?: string };
const tagTypes: { value: TagKind; label: string }[] = [
  { value: "class", label: "Substance classes" }, { value: "chemical-family", label: "Chemical families" },
  { value: "mechanism", label: "Mechanisms" }, { value: "target", label: "Receptors & targets" },
  { value: "neurotransmitter", label: "Neurotransmitters" }, { value: "enzyme", label: "Enzymes" },
  { value: "effect", label: "Subjective effects" }, { value: "outcome", label: "Measured outcomes" },
  { value: "exposure", label: "Exposure contexts" }, { value: "legal", label: "Legal context" },
];

const graphStyle: StylesheetStyle[] = [
  { selector: "node", style: {
    label: "data(label)", "font-family": "Arial, sans-serif", "font-size": 12,
    "text-valign": "center", "text-halign": "center", color: "#35463e",
    "text-wrap": "wrap", "text-max-width": "108px", "background-color": "#e7e4f2",
    shape: "round-rectangle", width: 116, height: 42, "border-width": 1, "border-color": "#d0ccdf",
    "overlay-opacity": 0,
  } },
  { selector: 'node[kind = "substance"]', style: {
    "background-color": "#fdfdf8", "border-color": "#9cac9d", "border-width": 1.2,
    "font-weight": 600, "font-size": 13, color: "#285b49", width: 126, height: 46,
  } },
  { selector: 'node[tagKind = "effect"], node[tagKind = "class"]', style: {
    "background-color": "#eee7d2", "border-color": "#d9d0b6", color: "#68613c",
  } },
  { selector: 'node[tagKind = "enzyme"], node[tagKind = "neurotransmitter"]', style: {
    "background-color": "#e2ece3", "border-color": "#c8d8c9",
  } },
  { selector: 'node[kind = "relationship"]', style: {
    shape: "diamond", width: 14, height: 14, "background-color": "#a99c72", "border-width": 0,
    label: "", "text-valign": "bottom", "text-margin-y": 7, "font-size": 10,
  } },
  { selector: 'node[relation != "tag membership"][kind = "relationship"]', style: {
    "background-color": "#7b7399", width: 18, height: 18,
  } },
  { selector: "edge", style: { width: 1.15, "line-color": "#c3ccc1", "curve-style": "bezier", opacity: 0.85 } },
  { selector: "node:selected", style: { "border-color": "#285b49", "border-width": 2.5, "background-color": "#d8e8d9" } },
  { selector: 'node[kind = "relationship"]:selected', style: { label: "data(label)", "background-color": "#285b49" } },
  { selector: ".muted", style: { opacity: 0.2 } },
  { selector: "edge.highlighted", style: { "line-color": "#587d63", width: 2, opacity: 1 } },
];

export default function KnowledgeGraph({ substances, tags, hyperedges, truncated = false, compact = false, initialFocus }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const graph = useRef<Core | null>(null);
  function focusNode(focus: string | undefined) {
    if (!focus) return null;
    const substance = substances.find((item) => item.slug === focus || `substance:${item.slug}` === focus);
    if (substance) return `substance:${substance.slug}`;
    const tag = tags.find((item) => item.id === focus || `tag:${item.id}` === focus);
    return tag ? `tag:${tag.id}` : null;
  }
  const [query, setQuery] = useState("");
  const [tagKind, setTagKind] = useState<TagKind | "">("");
  const [selectedId, setSelectedId] = useState<string | null>(focusNode(initialFocus));
  const previousFocus = useRef(initialFocus);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const inputId = useId();
  const helpId = useId();
  const model = useMemo(() => {
    const built = buildKnowledgeGraph({ substances, tags, hyperedges }, tagKind || undefined);
    return compact ? previewKnowledgeGraph(built) : searchKnowledgeGraph(built, query);
  }, [substances, tags, hyperedges, tagKind, query, compact]);
  const selected = model.nodes.find((node) => node.id === selectedId);
  const related = selected ? model.relationships.filter((edge) => edge.nodeId === selected.id || edge.members.includes(selected.id)) : [];
  const visibleSubstances = model.nodes.filter((node) => node.kind === "substance");
  const visibleConcepts = model.nodes.filter((node) => node.kind === "tag");
  const selectedSources = selected ? [...new Set([selected.sourceUrl, ...(selected.sourceUrls ?? [])].filter((source): source is string => !!source))] : [];

  useEffect(() => {
    if (previousFocus.current === initialFocus) return;
    previousFocus.current = initialFocus;
    setQuery("");
    setSelectedId(focusNode(initialFocus));
    setTagKind("");
  }, [initialFocus, substances, tags]);

  useEffect(() => {
    let cancelled = false;
    let observer: ResizeObserver | undefined;
    let cy: Core | undefined;
    setReady(false);
    setLoadError(false);
    import("cytoscape").then(({ default: cytoscape }) => {
      if (cancelled || !container.current) return;
      cy = cytoscape({
        container: container.current, elements: model.elements, style: graphStyle,
        minZoom: 0.15, maxZoom: 2.5, wheelSensitivity: 0.22,
        boxSelectionEnabled: false, autounselectify: false,
        layout: {
          name: "cose", animate: false, randomize: false, fit: true, padding: compact ? 22 : 40,
          nodeRepulsion: () => 180000, idealEdgeLength: () => compact ? 60 : 90,
          edgeElasticity: () => 120, gravity: 0.4, numIter: 600, componentSpacing: 80,
        },
      });
      graph.current = cy;
      cy.on("tap", "node", (event) => setSelectedId(event.target.id()));
      cy.on("tap", (event) => { if (event.target === cy) setSelectedId(null); });
      cy.on("mouseover", "node", () => { if (container.current) container.current.style.cursor = "pointer"; });
      cy.on("mouseout", "node", () => { if (container.current) container.current.style.cursor = "grab"; });
      observer = new ResizeObserver(() => {
        if (!cy || cy.destroyed()) return;
        cy.resize();
        cy.fit(undefined, compact ? 22 : 40);
      });
      observer.observe(container.current);
      setReady(true);
    }).catch(() => { if (!cancelled) setLoadError(true); });
    return () => {
      cancelled = true;
      observer?.disconnect();
      cy?.destroy();
      if (graph.current === cy) graph.current = null;
    };
  }, [model, compact]);

  useEffect(() => {
    const cy = graph.current;
    if (!cy || !ready) return;
    cy.elements().removeClass("muted highlighted").unselect();
    if (!selectedId) return;
    const node = cy.getElementById(selectedId);
    if (node.empty()) return;
    node.select();
    const neighborhood = node.data("kind") === "relationship" ? node.closedNeighborhood() : node.closedNeighborhood().closedNeighborhood();
    cy.elements().difference(neighborhood).addClass("muted");
    neighborhood.edges().addClass("highlighted");
  }, [selectedId, ready, model]);

  function selectNode(node: GraphNode) {
    setSelectedId(node.id);
    const cy = graph.current;
    if (cy) cy.center(cy.getElementById(node.id));
  }
  function zoom(factor: number) {
    const cy = graph.current;
    if (cy) cy.zoom({ level: cy.zoom() * factor, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } });
  }

  return (
    <div className={`${styles.root} ${compact ? styles.compact : ""}`}>
      {!compact && <div className={styles.toolbar}>
        <label className={styles.search} htmlFor={inputId}>
          <Search size={16} aria-hidden="true" />
          <span className={styles.srOnly}>Search the knowledge graph</span>
          <input id={inputId} value={query} onChange={(event) => { setQuery(event.target.value); setSelectedId(null); }} placeholder="Search this graph by name or alias…" />
          {query && <button type="button" aria-label="Clear graph search" onClick={() => setQuery("")}><X size={15} /></button>}
        </label>
        <select aria-label="Filter graph by concept type" value={tagKind} onChange={(event) => { setTagKind(event.target.value as TagKind | ""); setSelectedId(null); }}>
          <option value="">All connections</option>
          {tagTypes.map((type) => <option value={type.value} key={type.value}>{type.label}</option>)}
        </select>
        {initialFocus && <Link href="/graph" className={styles.resetLink}>All connections</Link>}
      </div>}
      {!compact && truncated && <p className={styles.boundNotice}>Showing a bounded neighborhood. Focus a node to load its connections, or find another substance in the <Link href="/#library">library</Link>.</p>}

      <div className={styles.stage}>
        <div ref={container} className={styles.canvas} role="img" aria-label="Interactive knowledge graph connecting substances, concepts, and shared relationships" aria-describedby={helpId} />
        {!ready && !loadError && <p className={styles.status} role="status">Mapping connections…</p>}
        {loadError && <p className={styles.status} role="status">{compact ? "Open the full graph to explore these connections." : "The visual map could not load. Explore the text view below."}</p>}
        {ready && model.nodes.length === 0 && <p className={styles.status} role="status">No connections found. Try another search or concept type.</p>}
        <div className={styles.legend} aria-label="Graph legend">
          <span><i className={styles.substanceDot} />Substance</span>
          <span><i className={styles.tagDot} />Concept</span>
          <span><i className={styles.relationDot} />Relationship</span>
        </div>
        {!compact && <div className={styles.zoom}>
          <button type="button" aria-label="Zoom in" onClick={() => zoom(1.25)} disabled={!ready}><Plus size={17} /></button>
          <button type="button" aria-label="Zoom out" onClick={() => zoom(0.8)} disabled={!ready}><Minus size={17} /></button>
          <button type="button" aria-label="Fit graph to view" onClick={() => graph.current?.fit(undefined, 40)} disabled={!ready}><Expand size={16} /></button>
        </div>}
        {compact && <Link className={styles.exploreLink} href={selected?.href ?? "/graph"}>{selected?.href ? `Read about ${selected.label}` : "Explore the graph"} <ArrowUpRight size={15} /></Link>}
        {selected && !compact && <aside className={styles.selection} aria-live="polite">
          <button type="button" className={styles.close} aria-label="Close node details" onClick={() => setSelectedId(null)}><X size={16} /></button>
          <span className={styles.eyebrow}>{selected.kind === "tag" ? selected.tagKind : selected.kind === "relationship" ? selected.relation : "Substance"}</span>
          <h3>{selected.label}</h3>
          <p>{selected.description}</p>
          {selected.href && <Link href={selected.href}>{selected.kind === "substance" ? "Read substance profile" : "Read concept article"} <ArrowUpRight size={15} /></Link>}
          {selected.kind !== "relationship" && <Link href={`/graph?focus=${encodeURIComponent(selected.id)}`}>Focus neighborhood <ArrowUpRight size={15} /></Link>}
          {selectedSources.map((source, index) => <a key={source} href={source} target="_blank" rel="noreferrer">View source{selectedSources.length > 1 ? ` ${index + 1}` : ""} <ArrowUpRight size={14} /></a>)}
          {related.length > 0 && <div className={styles.related}>
            <span>{selected.kind === "relationship" ? "Members" : "Connected through"}</span>
            {(selected.kind === "relationship"
              ? related.flatMap((edge) => edge.members).map((id) => model.nodes.find((node) => node.id === id)).filter((node): node is GraphNode => !!node)
              : related.map((edge) => model.nodes.find((node) => node.id === edge.nodeId)).filter((node): node is GraphNode => !!node)
            ).map((node) => <button key={node.id} type="button" onClick={() => selectNode(node)}>{node.label}{selected.kind === "relationship" && <small>{related[0]?.memberRoles[node.id]}</small>}</button>)}
          </div>}
        </aside>}
      </div>

      {!compact && <div className={styles.footer}>
        <p id={helpId}>A diamond connects all members of one relationship. Type filters keep qualifying context visible.</p>
        <span aria-live="polite">{visibleSubstances.length} substances · {visibleConcepts.length} concepts · {model.relationships.length} relationships</span>
      </div>}
      {compact && <p id={helpId} className={styles.srOnly}>A diamond connects all members of one relationship. Open the full graph to search and read its text view.</p>}

      {!compact && <details className={styles.textView}>
        <summary>Explore an accessible text view</summary>
        <div className={styles.textColumns}>
          <div><section><h3>Substances</h3><ul>{visibleSubstances.map((node) => <li key={node.id}><Link href={node.href!}>{node.label}</Link><button type="button" onClick={() => selectNode(node)} aria-label={`Locate ${node.label} in graph`}>Locate in graph</button></li>)}</ul>{!visibleSubstances.length && <p>No substances match this view.</p>}</section>
          <section><h3>Concepts</h3><ul>{visibleConcepts.map((node) => <li key={node.id}><div><Link href={node.href!}>{node.label}</Link><small className={styles.nodeKind}>{node.tagKind}</small></div><button type="button" onClick={() => selectNode(node)} aria-label={`Locate ${node.label} in graph`}>Locate in graph</button></li>)}</ul>{!visibleConcepts.length && <p>No concepts match this view.</p>}</section></div>
          <section><h3>Relationships</h3><ul>{model.relationships.map((edge) => <li key={edge.nodeId} className={styles.textRelationship}>
            <button type="button" onClick={() => { const node = model.nodes.find((item) => item.id === edge.nodeId); if (node) selectNode(node); }}>{edge.label}</button>
            <p>{edge.description}</p>
            <ul className={styles.members}>{edge.members.map((id) => { const node = model.nodes.find((node) => node.id === id)!; return <li key={id}><Link href={node.href!}>{node.label}</Link><span>{edge.memberRoles[id]}</span></li>; })}</ul>
            {[...new Set([edge.sourceUrl, ...(edge.sourceUrls ?? [])].filter(Boolean))].map((source, index) => <a key={source} className={styles.sourceLink} href={source} target="_blank" rel="noreferrer">Source {index + 1} ↗</a>)}
          </li>)}</ul>{!model.relationships.length && <p>No relationships match this view.</p>}</section>
        </div>
      </details>}
    </div>
  );
}
