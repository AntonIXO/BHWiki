"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Expand, Maximize, Minimize, Minus, Plus, X } from "lucide-react";
import type { Core, StylesheetStyle } from "cytoscape";
import { buildKnowledgeGraph, previewKnowledgeGraph, searchKnowledgeGraph, type GraphModel, type GraphNode } from "@/lib/graph";
import type { KnowledgeGraphData, TagKind } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Prose } from "@/components/prose";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Props = KnowledgeGraphData & { compact?: boolean; initialFocus?: string };

const tagTypes: { value: TagKind; label: string }[] = [
  { value: "class", label: "Substance classes" },
  { value: "chemical-family", label: "Chemical families" },
  { value: "mechanism", label: "Mechanisms" },
  { value: "target", label: "Receptors & targets" },
  { value: "neurotransmitter", label: "Neurotransmitters" },
  { value: "enzyme", label: "Enzymes" },
  { value: "effect", label: "Subjective effects" },
  { value: "outcome", label: "Measured outcomes" },
  { value: "exposure", label: "Exposure contexts" },
  { value: "legal", label: "Legal context" },
];

const pageTypes = [
  { label: "Substance", selector: 'node[kind = "substance"]', shape: "round-rectangle", fill: "#dcebdd", border: "#6c9475", color: "#285b49", width: 126, height: 46 },
  { label: "Concept", selector: 'node[kind = "tag"][tagKind != "effect"][tagKind != "outcome"]', shape: "ellipse", fill: "#e7e1f4", border: "#9884ba", color: "#51416c", width: 142, height: 62 },
  { label: "Effect", selector: 'node[tagKind = "effect"]', shape: "hexagon", fill: "#f5e5c4", border: "#be9444", color: "#70521e", width: 146, height: 58 },
  { label: "Outcome", selector: 'node[tagKind = "outcome"]', shape: "cut-rectangle", fill: "#dcebf5", border: "#6899b6", color: "#2c5a74", width: 136, height: 54 },
] as const;

function LegendSymbol({ shape, fill, border }: { shape: typeof pageTypes[number]["shape"] | "diamond"; fill: string; border: string }) {
  return <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true" fill={fill} stroke={border} strokeWidth="1.2">
    {shape === "round-rectangle" ? <rect x="1" y="2" width="20" height="12" rx="3" />
      : shape === "ellipse" ? <ellipse cx="11" cy="8" rx="10" ry="7" />
      : shape === "hexagon" ? <polygon points="5,1 17,1 21,8 17,15 5,15 1,8" />
      : shape === "cut-rectangle" ? <polygon points="4,1 18,1 21,4 21,12 18,15 4,15 1,12 1,4" />
      : <polygon points="11,2 17,8 11,14 5,8" />}
  </svg>;
}

const graphStyle: StylesheetStyle[] = [
  { selector: "node", style: {
    label: "data(label)", "font-family": "system-ui, sans-serif", "font-size": 12,
    "text-valign": "center", "text-halign": "center", color: "#171717",
    "text-wrap": "wrap", "text-max-width": "108px", "background-color": "#ffffff",
    shape: "round-rectangle", width: 116, height: 42, "border-width": 1, "border-color": "#e5e5e5",
    "overlay-opacity": 0,
  } },
  ...pageTypes.map((type): StylesheetStyle => ({ selector: type.selector, style: {
    shape: type.shape, "background-color": type.fill, "border-color": type.border,
    color: type.color, width: type.width, height: type.height, "border-width": 1.2,
  } })),
  { selector: 'node[kind = "substance"]', style: { "font-weight": 600, "font-size": 13 } },
  { selector: 'node[kind = "relationship"]', style: {
    shape: "diamond", width: 14, height: 14, "background-color": "#737373", "border-width": 0,
    label: "", "text-valign": "bottom", "text-margin-y": 7, "font-size": 10,
  } },
  { selector: 'node[relation != "tag membership"][kind = "relationship"]', style: {
    "background-color": "#171717", width: 18, height: 18,
  } },
  { selector: "edge", style: { width: 1.15, "line-color": "#d4d4d4", "curve-style": "bezier", opacity: 0.85 } },
  { selector: "node:selected", style: { "border-width": 3 } },
  { selector: 'node[kind = "relationship"]:selected', style: { label: "data(label)", "background-color": "#171717" } },
  { selector: ".muted", style: { opacity: 0.2 } },
  { selector: "edge.highlighted", style: { "line-color": "#171717", width: 2, opacity: 1 } },
  { selector: ".depth-hidden", style: { display: "none" } },
];

const fieldClass = "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

function idsWithinDepth(model: GraphModel, originId: string | null, depth: number) {
  const all = new Set(model.nodes.map((node) => node.id));
  if (!originId || !all.has(originId)) return all;
  const adjacent = new Map<string, string[]>();
  const link = (left: string, right: string) => {
    const list = adjacent.get(left);
    if (list) list.push(right);
    else adjacent.set(left, [right]);
  };
  for (const edge of model.relationships) {
    for (const member of edge.members) {
      link(edge.nodeId, member);
      link(member, edge.nodeId);
    }
  }
  const visible = new Set<string>([originId]);
  let frontier = [originId];
  for (let step = 0; step < depth; step += 1) {
    const next: string[] = [];
    for (const id of frontier) {
      for (const neighbor of adjacent.get(id) ?? []) {
        if (visible.has(neighbor)) continue;
        visible.add(neighbor);
        next.push(neighbor);
      }
    }
    frontier = next;
  }
  return visible;
}

export default function KnowledgeGraph({ substances, tags, hyperedges, truncated = false, compact = false, initialFocus }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const graph = useRef<Core | null>(null);
  const hoverRef = useRef<string | null>(null);
  const paintRef = useRef<() => void>(() => {});
  const layoutRef = useRef<(fit: boolean) => void>(() => {});
  const forceReady = useRef(false);
  const viewFitted = useRef(false);
  const fullscreenFitted = useRef(false);
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
  const [depth, setDepth] = useState(3);
  const [repulsion, setRepulsion] = useState(180000);
  const [linkDistance, setLinkDistance] = useState(90);
  const [gravity, setGravity] = useState(0.4);
  const previousFocus = useRef(initialFocus);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [fullscreenMode, setFullscreenMode] = useState<null | "native" | "overlay">(null);
  const fullscreen = fullscreenMode !== null;
  const inputId = useId();
  const helpId = useId();
  const depthLabelId = useId();
  const repulsionLabelId = useId();
  const distanceLabelId = useId();
  const gravityLabelId = useId();
  const sourceModel = useMemo(() => {
    const built = buildKnowledgeGraph({ substances, tags, hyperedges });
    return compact ? previewKnowledgeGraph(built) : built;
  }, [substances, tags, hyperedges, compact]);
  const model = useMemo(
    () => (tagKind ? buildKnowledgeGraph({ substances, tags, hyperedges }, tagKind) : sourceModel),
    [sourceModel, tagKind, substances, tags, hyperedges],
  );
  const appliedSource = useRef<GraphModel | null>(null);
  const sourceRef = useRef(sourceModel);
  sourceRef.current = sourceModel;
  const viewRef = useRef({ query, depth, selectedId, model, compact });
  const forcesRef = useRef({ repulsion, linkDistance, gravity });
  viewRef.current = { query, depth, selectedId, model, compact };
  forcesRef.current = { repulsion, linkDistance, gravity };
  const term = query.trim().toLowerCase();
  const searched = term ? searchKnowledgeGraph(model, term) : model;
  const depthIds = idsWithinDepth(model, compact ? null : selectedId, depth);
  const noMatches = term.length > 0 && searched.nodes.length === 0;
  const listedNodes = noMatches ? [] : searched.nodes.filter((node) => depthIds.has(node.id));
  const listedRelationships = noMatches ? [] : searched.relationships.filter((edge) => depthIds.has(edge.nodeId));
  const selected = model.nodes.find((node) => node.id === selectedId);
  const related = selected ? model.relationships.filter((edge) => edge.nodeId === selected.id || edge.members.includes(selected.id)) : [];
  const visibleSubstances = listedNodes.filter((node) => node.kind === "substance");
  const visibleConcepts = listedNodes.filter((node) => node.kind === "tag");
  const selectedSources = selected ? [...new Set([selected.sourceUrl, ...(selected.sourceUrls ?? [])].filter((source): source is string => !!source))] : [];

  paintRef.current = () => {
    const cy = graph.current;
    if (!cy || cy.destroyed()) return;
    const view = viewRef.current;
    const hoverId = hoverRef.current;
    const searchTerm = view.query.trim().toLowerCase();
    const matched = searchTerm ? searchKnowledgeGraph(view.model, searchTerm) : null;
    const emptySearch = !!matched && matched.nodes.length === 0;
    const kept = matched && !emptySearch ? new Set(matched.nodes.map((node) => node.id)) : null;
    const origin = view.compact ? null : view.selectedId;
    const withinDepth = idsWithinDepth(view.model, origin, view.depth);
    cy.batch(() => {
      cy.elements().removeClass("muted highlighted depth-hidden");
      if (!hoverId) cy.elements().unselect();
      const focusId = hoverId || (!view.compact ? view.selectedId : null);
      let neighborhood: Set<string> | null = null;
      if (focusId) {
        const focus = cy.getElementById(focusId);
        if (!focus.empty()) {
          const around = focus.data("kind") === "relationship" ? focus.closedNeighborhood() : focus.closedNeighborhood().closedNeighborhood();
          neighborhood = new Set(around.map((element) => element.id()));
          around.edges().addClass("highlighted");
          if (!hoverId) focus.select();
        }
      }
      const dimmed = (id: string, sourceId: string, targetId: string) => neighborhood
        ? !neighborhood.has(id)
        : !!(kept && (!kept.has(sourceId) || !kept.has(targetId)));
      cy.nodes().forEach((node) => {
        const id = node.id();
        if (emptySearch || !withinDepth.has(id)) {
          node.addClass("depth-hidden");
          return;
        }
        if (dimmed(id, id, id)) node.addClass("muted");
      });
      cy.edges().forEach((edge) => {
        const sourceId = edge.source().id();
        const targetId = edge.target().id();
        if (emptySearch || !withinDepth.has(sourceId) || !withinDepth.has(targetId)) {
          edge.addClass("depth-hidden");
          return;
        }
        if (dimmed(edge.id(), sourceId, targetId)) edge.addClass("muted");
      });
    });
  };

  layoutRef.current = (fit: boolean) => {
    const cy = graph.current;
    if (!cy || cy.destroyed()) return;
    const visible = cy.elements().not(".depth-hidden");
    if (visible.empty()) return;
    const forces = forcesRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    visible.layout({
      name: "cose",
      animate: !reduce && !fit,
      animationDuration: 400,
      randomize: false,
      fit,
      padding: compact ? 22 : 40,
      nodeRepulsion: () => forces.repulsion,
      idealEdgeLength: () => compact ? 60 : forces.linkDistance,
      edgeElasticity: () => 120,
      gravity: forces.gravity,
      numIter: 500,
      componentSpacing: 80,
    }).run();
  };

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
      const forces = forcesRef.current;
      const initial = sourceRef.current;
      appliedSource.current = initial;
      cy = cytoscape({
        container: container.current, elements: initial.elements, style: graphStyle,
        minZoom: 0.15, maxZoom: 2.5, wheelSensitivity: 0.22,
        boxSelectionEnabled: false, autounselectify: false,
        layout: {
          name: "cose", animate: false, randomize: false, fit: true, padding: compact ? 22 : 40,
          nodeRepulsion: () => forces.repulsion, idealEdgeLength: () => compact ? 60 : forces.linkDistance,
          edgeElasticity: () => 120, gravity: forces.gravity, numIter: 600, componentSpacing: 80,
        },
      });
      graph.current = cy;
      cy.on("tap", "node", (event) => setSelectedId(event.target.id()));
      cy.on("tap", (event) => { if (event.target === cy) setSelectedId(null); });
      cy.on("mouseover", "node", (event) => {
        const id = event.target.id();
        if (hoverRef.current === id) return;
        hoverRef.current = id;
        if (container.current) container.current.style.cursor = "pointer";
        paintRef.current();
      });
      cy.on("mouseout", "node", () => {
        hoverRef.current = null;
        if (container.current) container.current.style.cursor = "grab";
        paintRef.current();
      });
      const resize = () => {
        if (!cy || cy.destroyed()) return;
        cy.resize();
        const visible = cy.elements().not(".depth-hidden");
        cy.fit(visible.empty() ? undefined : visible, compact ? 22 : 40);
      };
      observer = new ResizeObserver(resize);
      observer.observe(container.current.parentElement ?? container.current);
      requestAnimationFrame(resize);
      setReady(true);
    }).catch(() => { if (!cancelled) setLoadError(true); });
    return () => {
      cancelled = true;
      appliedSource.current = null;
      observer?.disconnect();
      cy?.destroy();
      if (graph.current === cy) graph.current = null;
    };
  }, [compact]);

  useEffect(() => {
    if (!ready) return;
    const cy = graph.current;
    if (!cy || cy.destroyed() || appliedSource.current === sourceModel) return;
    appliedSource.current = sourceModel;
    cy.batch(() => {
      cy.elements().remove();
      cy.add(sourceModel.elements);
    });
    paintRef.current();
    layoutRef.current(true);
  }, [sourceModel, ready, compact]);

  useEffect(() => {
    if (!ready) return;
    paintRef.current();
  }, [query, selectedId, depth, ready, model]);

  // Depth and concept type hide nodes on the layout from mount. Force sliders are what rerun cose.
  useEffect(() => {
    if (!ready || compact) {
      if (!ready) viewFitted.current = false;
      return;
    }
    if (!viewFitted.current) {
      viewFitted.current = true;
      return;
    }
    const cy = graph.current;
    if (!cy || cy.destroyed()) return;
    const visible = cy.elements().not(".depth-hidden");
    cy.fit(visible.empty() ? undefined : visible, 40);
  }, [depth, tagKind, ready, compact]);

  useEffect(() => {
    if (!ready) {
      forceReady.current = false;
      return;
    }
    if (!forceReady.current) {
      forceReady.current = true;
      return;
    }
    const timer = window.setTimeout(() => layoutRef.current(false), 150);
    return () => window.clearTimeout(timer);
  }, [repulsion, linkDistance, gravity, ready]);

  useEffect(() => {
    function onChange() {
      const native = document.fullscreenElement === rootRef.current;
      setFullscreenMode((current) => native ? "native" : current === "native" ? null : current);
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (fullscreenMode !== "overlay") return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setFullscreenMode(null);
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [fullscreenMode]);

  useEffect(() => {
    if (!ready) {
      fullscreenFitted.current = false;
      return;
    }
    if (!fullscreenFitted.current) {
      fullscreenFitted.current = true;
      return;
    }
    const frame = requestAnimationFrame(() => {
      const cy = graph.current;
      if (!cy || cy.destroyed()) return;
      cy.resize();
      const visible = cy.elements().not(".depth-hidden");
      cy.fit(visible.empty() ? undefined : visible, compact ? 22 : 40);
    });
    return () => cancelAnimationFrame(frame);
  }, [fullscreen, ready, compact]);

  function selectNode(node: GraphNode) {
    setSelectedId(node.id);
    const cy = graph.current;
    const element = cy?.getElementById(node.id);
    if (cy && element && !element.empty()) cy.center(element);
  }
  function zoom(factor: number) {
    const cy = graph.current;
    if (cy) cy.zoom({ level: cy.zoom() * factor, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } });
  }
  async function toggleFullscreen() {
    const root = rootRef.current;
    if (!root) return;
    if (fullscreenMode === "overlay") {
      setFullscreenMode(null);
      return;
    }
    if (document.fullscreenElement === root) {
      await document.exitFullscreen().catch(() => setFullscreenMode(null));
      return;
    }
    try {
      await root.requestFullscreen({ navigationUI: "hide" });
    } catch {
      setFullscreenMode("overlay");
    }
  }

  const relatedNodes = selected
    ? (selected.kind === "relationship"
      ? related.flatMap((edge) => edge.members).map((id) => model.nodes.find((node) => node.id === id)).filter((node): node is GraphNode => !!node)
      : related.map((edge) => model.nodes.find((node) => node.id === edge.nodeId)).filter((node): node is GraphNode => !!node))
    : [];

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative flex h-full flex-col overflow-hidden",
        !compact && "rounded-xl bg-card ring-1 ring-foreground/10",
        fullscreen && "h-dvh max-h-dvh rounded-none bg-background ring-0",
        fullscreenMode === "overlay" && "fixed inset-0 z-50",
      )}
    >
      {!compact && (
        <>
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <InputGroup className="w-auto min-w-0 flex-1">
            <InputGroupInput
              id={inputId}
              value={query}
              aria-label="Search the knowledge graph"
              placeholder="Search this graph by name or alias…"
              onChange={(event) => { setQuery(event.target.value); setSelectedId(null); }}
            />
            {query && (
              <InputGroupAddon align="inline-end">
                <InputGroupButton type="button" size="icon-xs" aria-label="Clear graph search" onClick={() => setQuery("")}>
                  <X />
                </InputGroupButton>
              </InputGroupAddon>
            )}
          </InputGroup>
          <select
            aria-label="Filter graph by concept type"
            value={tagKind}
            onChange={(event) => { setTagKind(event.target.value as TagKind | ""); setSelectedId(null); }}
            className={cn(fieldClass, "sm:w-48")}
          >
            <option value="">All connections</option>
            {tagTypes.map((type) => <option value={type.value} key={type.value}>{type.label}</option>)}
          </select>
          {initialFocus && (
            <Button nativeButton={false} variant="outline" size="sm" render={<Link href="/graph" />}>All connections</Button>
          )}
        </div>
        <Separator />
        </>
      )}
      {!compact && (
        <>
        <div role="group" aria-label="Graph layout" className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-3 sm:grid-cols-4">
          <label className="flex min-w-0 flex-col gap-1 text-xs text-muted-foreground">
            <span className="flex items-center justify-between gap-2">
              <span id={depthLabelId}>Local depth</span>
              <span className="tabular-nums text-foreground">{depth}</span>
            </span>
            <input id={`${depthLabelId}-range`} aria-labelledby={depthLabelId} className="graph-range" type="range" min={1} max={4} step={1} value={depth} onChange={(event) => setDepth(Number(event.target.value))} />
          </label>
          <label className="flex min-w-0 flex-col gap-1 text-xs text-muted-foreground">
            <span className="flex items-center justify-between gap-2">
              <span id={repulsionLabelId}>Repulsion</span>
              <span className="tabular-nums text-foreground">{Math.round(repulsion / 1000)}</span>
            </span>
            <input aria-labelledby={repulsionLabelId} className="graph-range" type="range" min={40000} max={360000} step={20000} value={repulsion} onChange={(event) => setRepulsion(Number(event.target.value))} />
          </label>
          <label className="flex min-w-0 flex-col gap-1 text-xs text-muted-foreground">
            <span className="flex items-center justify-between gap-2">
              <span id={distanceLabelId}>Link distance</span>
              <span className="tabular-nums text-foreground">{linkDistance}</span>
            </span>
            <input aria-labelledby={distanceLabelId} className="graph-range" type="range" min={40} max={200} step={10} value={linkDistance} onChange={(event) => setLinkDistance(Number(event.target.value))} />
          </label>
          <label className="flex min-w-0 flex-col gap-1 text-xs text-muted-foreground">
            <span className="flex items-center justify-between gap-2">
              <span id={gravityLabelId}>Center force</span>
              <span className="tabular-nums text-foreground">{gravity.toFixed(2)}</span>
            </span>
            <input aria-labelledby={gravityLabelId} className="graph-range" type="range" min={0} max={1} step={0.05} value={gravity} onChange={(event) => setGravity(Number(event.target.value))} />
          </label>
        </div>
        <Separator />
        </>
      )}
      {!compact && truncated && (
        <p className="border-b border-border px-4 py-3 text-sm text-muted-foreground">
          Showing a bounded neighborhood. Focus a node to load its connections, or find another substance in the <Link href="/#library" className="underline underline-offset-4">library</Link>.
        </p>
      )}

      <div className={cn(
        !compact && selected && !fullscreen && "lg:grid lg:grid-cols-[minmax(0,1fr)_18rem]",
        fullscreen && "flex min-h-0 flex-1 flex-col overflow-hidden",
        fullscreen && selected && "lg:flex-row",
      )}>
      <div className={cn(
        "relative shrink-0 bg-[radial-gradient(circle,var(--border)_0.6px,transparent_0.6px)] [background-size:18px_18px]",
        compact ? "h-full min-h-56" : "h-[32rem] sm:h-[36rem]",
        !compact && fullscreen && "h-auto min-h-0 flex-1 sm:h-auto",
      )}>
        <div ref={container} className="h-full w-full cursor-grab" role="img" aria-label="Interactive knowledge graph connecting substances, concepts, and shared relationships" aria-describedby={helpId} />
        {!ready && !loadError && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 p-8" role="status">
            <Spinner aria-hidden="true" role="presentation" />
            <p className="text-center text-sm text-muted-foreground">Mapping connections…</p>
            <div className="flex w-full max-w-xs flex-col gap-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          </div>
        )}
        {loadError && <p className="pointer-events-none absolute inset-0 grid place-items-center p-8 text-center text-sm text-muted-foreground" role="status">{compact ? "Open the full graph to explore these connections." : "The visual map could not load. Explore the text view below."}</p>}
        {ready && (model.nodes.length === 0 || noMatches) && <p className="absolute inset-0 z-10 grid place-items-center bg-background p-8 text-center text-sm text-muted-foreground" role="status">No connections found. Try another search or concept type.</p>}
        <div className="pointer-events-none absolute top-3 left-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-x-3 gap-y-1.5 rounded-lg bg-background px-2 py-1 text-xs text-muted-foreground ring-1 ring-foreground/10" aria-label="Graph legend">
          {pageTypes.map((type) => <span className="inline-flex items-center gap-1.5" key={type.label}><LegendSymbol shape={type.shape} fill={type.fill} border={type.border} />{type.label}</span>)}
          <span className="inline-flex items-center gap-1.5"><LegendSymbol shape="diamond" fill="#737373" border="#737373" />Relationship</span>
        </div>
        {!compact && (
          <ButtonGroup orientation="vertical" aria-label="Graph view" className="absolute bottom-4 left-4 bg-background">
            <Tooltip>
              <TooltipTrigger render={<Button type="button" variant="outline" size="icon" aria-label="Zoom in" onClick={() => zoom(1.25)} disabled={!ready} />}>
                <Plus />
              </TooltipTrigger>
              <TooltipContent side="right" container={fullscreen ? rootRef : undefined}>Zoom in</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button type="button" variant="outline" size="icon" aria-label="Zoom out" onClick={() => zoom(0.8)} disabled={!ready} />}>
                <Minus />
              </TooltipTrigger>
              <TooltipContent side="right" container={fullscreen ? rootRef : undefined}>Zoom out</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button type="button" variant="outline" size="icon" aria-label="Fit graph to view" onClick={() => { const cy = graph.current; if (!cy) return; const visible = cy.elements().not(".depth-hidden"); cy.fit(visible.empty() ? undefined : visible, 40); }} disabled={!ready} />}>
                <Expand />
              </TooltipTrigger>
              <TooltipContent side="right" container={fullscreen ? rootRef : undefined}>Fit graph to view</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button type="button" variant="outline" size="icon" aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"} aria-pressed={fullscreen} onClick={() => { void toggleFullscreen(); }} />}>
                {fullscreen ? <Minimize /> : <Maximize />}
              </TooltipTrigger>
              <TooltipContent side="right" container={fullscreen ? rootRef : undefined}>{fullscreen ? "Exit fullscreen" : "Fullscreen"}</TooltipContent>
            </Tooltip>
          </ButtonGroup>
        )}
        {compact && (
          <Link className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-lg bg-background px-2.5 py-1.5 text-xs ring-1 ring-foreground/10" href={selected?.href ?? "/graph"}>
            {selected?.href ? `Read about ${selected.label}` : "Explore the graph"} <ArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </div>

      {selected && !compact && (
        <Card aria-live="polite" className={cn("relative m-3 max-h-[36rem] min-h-0 overflow-y-auto lg:my-3 lg:mr-3 lg:ml-0", fullscreen && "max-h-[40%] shrink-0 lg:max-h-none lg:w-72")}>
          <CardHeader>
            <Button type="button" variant="ghost" size="icon-sm" className="absolute top-2 right-2" aria-label="Close node details" onClick={() => setSelectedId(null)}>
              <X />
            </Button>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{selected.kind === "tag" ? selected.tagKind : selected.kind === "relationship" ? selected.relation : "Substance"}</p>
            <CardTitle><h3>{selected.label}</h3></CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <Prose className="text-muted-foreground" text={selected.description} />
            {selected.href && <Link href={selected.href} className="inline-flex items-center gap-1 underline underline-offset-4">{selected.kind === "substance" ? "Read substance profile" : "Read concept article"} <ArrowUpRight aria-hidden="true" /></Link>}
            {selected.kind !== "relationship" && <Link href={`/graph?focus=${encodeURIComponent(selected.id)}`} className="inline-flex items-center gap-1 underline underline-offset-4">Focus neighborhood <ArrowUpRight aria-hidden="true" /></Link>}
            {selectedSources.map((source, index) => <a key={source} href={source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">View source{selectedSources.length > 1 ? ` ${index + 1}` : ""} <ArrowUpRight aria-hidden="true" /></a>)}
            {relatedNodes.length > 0 && (
              <div className="flex flex-wrap gap-1.5 border-t border-border pt-3">
                <span className="w-full text-xs text-muted-foreground">{selected.kind === "relationship" ? "Members" : "Connected through"}</span>
                {relatedNodes.map((node) => (
                  <Button key={node.id} type="button" variant="outline" size="sm" onClick={() => selectNode(node)}>
                    {node.label}
                    {selected.kind === "relationship" && <small className="block text-muted-foreground">{related[0]?.memberRoles[node.id]}</small>}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
      </div>

      {!compact && (
        <>
        <Separator />
        <div className="flex flex-col gap-2 px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p id={helpId}>Color and shape identify the page type. A diamond connects all members of one relationship. Type filters keep qualifying context visible. Drag a node to move it. Local depth keeps the selected neighborhood, and search dims the rest without breaking a group.</p>
          <span aria-live="polite">{visibleSubstances.length} substances · {visibleConcepts.length} concepts · {listedRelationships.length} relationships</span>
        </div>
        </>
      )}
      {compact && <p id={helpId} className="sr-only">Color and shape identify the page type. A diamond connects all members of one relationship. Open the full graph to search and read its text view.</p>}

      {!compact && (
        <Collapsible className="border-t border-border">
          <CollapsibleTrigger className="px-4 py-3 text-sm underline underline-offset-4">Explore an accessible text view</CollapsibleTrigger>
          <CollapsibleContent>
            <div className={cn("grid gap-6 px-4 pt-2 pb-4 md:grid-cols-[1fr_2fr]", fullscreen && "max-h-[min(24rem,40dvh)] overflow-y-auto")}>
              <div className="flex flex-col gap-6">
                <section className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium">Substances</h3>
                  <ItemGroup>
                    {visibleSubstances.map((node) => (
                      <Item key={node.id} variant="muted" size="xs" role="listitem">
                        <ItemContent>
                          <ItemTitle>
                            <Link href={node.href!} className="underline underline-offset-4">{node.label}</Link>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                          <Button type="button" variant="ghost" size="sm" onClick={() => selectNode(node)} aria-label={`Locate ${node.label} in graph`}>Locate in graph</Button>
                        </ItemActions>
                      </Item>
                    ))}
                  </ItemGroup>
                  {!visibleSubstances.length && <p className="text-sm text-muted-foreground">No substances match this view.</p>}
                </section>
                <section className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium">Concepts</h3>
                  <ItemGroup>
                    {visibleConcepts.map((node) => (
                      <Item key={node.id} variant="muted" size="xs" role="listitem">
                        <ItemContent>
                          <ItemTitle>
                            <Link href={node.href!} className="underline underline-offset-4">{node.label}</Link>
                          </ItemTitle>
                          <ItemDescription>{node.tagKind}</ItemDescription>
                        </ItemContent>
                        <ItemActions>
                          <Button type="button" variant="ghost" size="sm" onClick={() => selectNode(node)} aria-label={`Locate ${node.label} in graph`}>Locate in graph</Button>
                        </ItemActions>
                      </Item>
                    ))}
                  </ItemGroup>
                  {!visibleConcepts.length && <p className="text-sm text-muted-foreground">No concepts match this view.</p>}
                </section>
              </div>
              <section className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Relationships</h3>
                <ul className="flex flex-col gap-4">
                  {listedRelationships.map((edge) => (
                    <li key={edge.nodeId} className="flex flex-col gap-2 border-b border-border pb-3 text-sm">
                      <Button type="button" variant="link" className="h-auto justify-start px-0" onClick={() => { const node = model.nodes.find((item) => item.id === edge.nodeId); if (node) selectNode(node); }}>{edge.label}</Button>
                      <Prose className="text-muted-foreground" text={edge.description} />
                      <ul className="flex flex-col gap-1">
                        {edge.members.map((id) => {
                          const node = model.nodes.find((item) => item.id === id)!;
                          return (
                            <li key={id} className="flex flex-wrap items-baseline gap-2">
                              <Link href={node.href!} className="underline underline-offset-4">{node.label}</Link>
                              <span className="text-muted-foreground">{edge.memberRoles[id]}</span>
                            </li>
                          );
                        })}
                      </ul>
                      {[...new Set([edge.sourceUrl, ...(edge.sourceUrls ?? [])].filter(Boolean))].map((source, index) => (
                        <a key={source} href={source} target="_blank" rel="noreferrer" className="underline underline-offset-4">Source {index + 1} ↗</a>
                      ))}
                    </li>
                  ))}
                </ul>
                {!listedRelationships.length && <p className="text-sm text-muted-foreground">No relationships match this view.</p>}
              </section>
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}
