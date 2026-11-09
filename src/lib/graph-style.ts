import type { StylesheetStyle } from "cytoscape";
export const pageTypes = [
  {
    label: "Substance",
    selector: 'node[kind = "substance"]',
    shape: "round-rectangle",
    fill: "#dcebdd",
    border: "#6c9475",
    color: "#285b49",
    width: 126,
    height: 46,
  },
  {
    label: "Concept",
    selector: 'node[kind = "tag"][tagKind != "effect"][tagKind != "outcome"]',
    shape: "ellipse",
    fill: "#e7e1f4",
    border: "#9884ba",
    color: "#51416c",
    width: 142,
    height: 62,
  },
  {
    label: "Effect",
    selector: 'node[tagKind = "effect"]',
    shape: "hexagon",
    fill: "#f5e5c4",
    border: "#be9444",
    color: "#70521e",
    width: 146,
    height: 58,
  },
  {
    label: "Outcome",
    selector: 'node[tagKind = "outcome"]',
    shape: "cut-rectangle",
    fill: "#dcebf5",
    border: "#6899b6",
    color: "#2c5a74",
    width: 136,
    height: 54,
  },
] as const;

export const graphStyle: StylesheetStyle[] = [
  {
    selector: "node",
    style: {
      label: "data(label)",
      "font-family": "system-ui, sans-serif",
      "font-size": 12,
      "text-valign": "center",
      "text-halign": "center",
      color: "#171717",
      "text-wrap": "wrap",
      "text-max-width": "108px",
      "background-color": "#ffffff",
      shape: "round-rectangle",
      width: 116,
      height: 42,
      "border-width": 1,
      "border-color": "#e5e5e5",
      "overlay-opacity": 0,
    },
  },
  ...pageTypes.map((type): StylesheetStyle => ({
    selector: type.selector,
    style: {
      shape: type.shape,
      "background-color": type.fill,
      "border-color": type.border,
      color: type.color,
      width: type.width,
      height: type.height,
      "border-width": 1.2,
    },
  })),
  {
    selector: 'node[kind = "substance"]',
    style: { "font-weight": 600, "font-size": 13 },
  },
  {
    selector: 'node[kind = "substance"][catalogOnly]',
    style: {
      label: "",
      width: 9,
      height: 9,
      "background-color": "#9ab8a0",
      "border-color": "#6c9475",
      "border-width": 1,
    },
  },
  {
    selector: "node[catalogOnly]:selected",
    style: { label: "data(label)", width: 126, height: 46, "border-width": 3 },
  },
  {
    selector: 'node[kind = "relationship"]',
    style: {
      shape: "diamond",
      width: 14,
      height: 14,
      "background-color": "#737373",
      "border-width": 0,
      label: "",
      "text-valign": "bottom",
      "text-margin-y": 7,
      "font-size": 10,
    },
  },
  {
    selector: 'node[relation != "tag membership"][kind = "relationship"]',
    style: {
      "background-color": "#171717",
      width: 18,
      height: 18,
    },
  },
  {
    selector: "edge",
    style: {
      width: 1.15,
      "line-color": "#d4d4d4",
      "curve-style": "bezier",
      opacity: 0.85,
    },
  },
  { selector: "node:selected", style: { "border-width": 3 } },
  {
    selector: 'node[kind = "relationship"]:selected',
    style: { label: "data(label)", "background-color": "#171717" },
  },
  { selector: ".muted", style: { opacity: 0.2 } },
  {
    selector: "edge.highlighted",
    style: { "line-color": "#171717", width: 2, opacity: 1 },
  },
  {
    selector: 'node.network[kind != "relationship"]',
    style: {
      width: 20, height: 20, "border-width": 1.4,
      "text-valign": "bottom", "text-margin-y": 7, "font-size": 13,
    },
  },
  {
    selector: 'node.network[kind = "substance"]',
    style: { width: 28, height: 20 },
  },
  {
    selector: 'node.network[kind = "relationship"]',
    style: { width: 7, height: 7 },
  },
  // The overview is a map of entities. Thousands of evidence diamonds remain
  // present, but recede until zoom or selection makes their detail useful.
  {
    selector: 'node.overview[kind != "relationship"]',
    style: { label: "", width: 20, height: 20, "border-width": 1.4 },
  },
  {
    selector: 'node.overview[kind = "substance"]',
    style: { width: 28, height: 20, "background-color": "#93b99c", "border-color": "#477e56" },
  },
  {
    selector: 'node.overview[kind = "tag"]',
    style: { "background-color": "#c5b5e1", "border-color": "#8c70b2" },
  },
  {
    selector: "node.overview[tagKind = 'effect']",
    style: { "background-color": "#e9c675", "border-color": "#b8892d" },
  },
  {
    selector: "node.overview[tagKind = 'outcome']",
    style: { "background-color": "#95c4df", "border-color": "#4c8fb5" },
  },
  {
    selector: 'node.overview[kind = "relationship"]',
    style: { width: 4, height: 4, opacity: 0.25 },
  },
  {
    selector: "edge.overview",
    style: { "curve-style": "straight", width: 1.1, "line-color": "#829aab", opacity: 0.14 },
  },
  {
    selector: "node.overview.hub, node.hovered, node.search-match, node:selected",
    style: {
      label: "data(label)", "text-valign": "bottom", "text-margin-y": 7,
      "text-background-color": "#ffffff", "text-background-opacity": 0.9,
      "text-background-padding": "3px", "text-background-shape": "roundrectangle",
      "font-weight": 600, "z-index": 20,
    },
  },
  { selector: "node.overview.muted", style: { opacity: 0.12 } },
  { selector: "edge.overview.muted", style: { opacity: 0.015 } },
  { selector: "edge.overview.highlighted", style: { "line-color": "#3a6950", opacity: 0.8, width: 2 } },
  { selector: ".depth-hidden", style: { display: "none" } },
];
