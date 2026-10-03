import type { ElementDefinition } from "cytoscape";
import type { KnowledgeGraphData } from "./types";
import { buildKnowledgeGraph } from "./graph";
/** Preserve incidence edges and all qualifiers. Only authored steps receive arrows. */
export function buildMechanismModel(data: KnowledgeGraphData) {
  const model = buildKnowledgeGraph(data);
  const columns = new Map<number, number>();
  const elements: ElementDefinition[] = model.elements.map((element) => {
    if (element.data.source) return element;
    const n = model.nodes.find((n) => n.id === element.data.id)!;
    const col =
      n.kind === "substance"
        ? 0
        : n.kind === "relationship"
          ? 2
          : n.tagKind === "target" || n.tagKind === "enzyme"
            ? 1
            : n.tagKind === "outcome" || n.tagKind === "effect"
              ? 4
              : 3;
    const index = columns.get(col) ?? 0;
    columns.set(col, index + 1);
    return { ...element, position: { x: col * 200, y: index * 105 } };
  });
  for (const edge of data.hyperedges)
    for (const [index, step] of (edge.directedSteps ?? []).entries())
      elements.push({
        data: {
          id: `directed:${edge.id}:${index}`,
          source: step.from,
          target: step.to,
          label: step.label,
          directed: 1,
          evidenceKey: `relationship~${edge.id}`,
        },
      });
  return { ...model, elements };
}
