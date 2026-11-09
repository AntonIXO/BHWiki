import cytoscape, { type ElementDefinition, type Position } from "cytoscape";
import fcose, { type FcoseLayoutOptions } from "cytoscape-fcose";
import type { GraphModel } from "./graph";

cytoscape.use(fcose);

export type GraphLayoutOptions = {
  width?: number;
  height?: number;
  repulsion?: number;
  linkDistance?: number;
  gravity?: number;
};

function hashId(value: string): number {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result = Math.imul(result ^ value.charCodeAt(index), 16777619);
  }
  return result >>> 0;
}

function bounds(points: Position[]) {
  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  return { minX, minY, width: Math.max(1, maxX - minX), height: Math.max(1, maxY - minY) };
}

/** Resolve spectral coincidences without running force simulation on evidence nodes. */
function separateEntities(points: Position[], separation: number) {
  const separationSquared = separation * separation;
  for (let step = 0; step < 100; step += 1) {
    let collisions = 0;
    for (let left = 0; left < points.length; left += 1) {
      for (let right = left + 1; right < points.length; right += 1) {
        let dx = points[right].x - points[left].x;
        let dy = points[right].y - points[left].y;
        const squaredDistance = dx * dx + dy * dy;
        if (squaredDistance >= separationSquared) continue;
        const distance = Math.sqrt(squaredDistance);
        if (distance < 0.001) {
          const angle = ((left * 137 + right * 53) % 360) * Math.PI / 180;
          dx = Math.cos(angle);
          dy = Math.sin(angle);
        } else {
          dx /= distance;
          dy /= distance;
        }
        const adjustment = (separation - distance) * 0.51;
        points[left].x -= dx * adjustment;
        points[left].y -= dy * adjustment;
        points[right].x += dx * adjustment;
        points[right].y += dy * adjustment;
        if (distance < separation - 0.5) collisions += 1;
      }
    }
    if (!collisions) break;
  }
}

/**
 * Layout work scales with entities, rather than with thousands of evidence records.
 * Springs below are computational only: the returned positions are applied to the
 * original incidence graph, retaining every original relationship and participant.
 */
export function layoutKnowledgeGraph(model: GraphModel, options: GraphLayoutOptions = {}): Record<string, Position> {
  const positions: Record<string, Position> = {};
  const entities = model.nodes.filter((node) => node.kind !== "relationship")
    .sort((left, right) => left.id.localeCompare(right.id));
  if (!entities.length) return positions;
  const cardGeometry = model.nodes.length <= 180;
  const detailed = entities.length <= 120;
  const entityIds = new Set(entities.map((node) => node.id));
  const ratio = Math.max(0.6, Math.min(2.4, (options.width ?? 1100) / (options.height ?? 650)));
  const rootRatio = Math.sqrt(ratio);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const elements: ElementDefinition[] = entities.map((node, index) => {
    const angle = index * goldenAngle;
    const radius = 44 * Math.sqrt(index + 0.5);
    return { data: { id: node.id }, position: { x: radius * Math.cos(angle) * rootRatio, y: radius * Math.sin(angle) / rootRatio } };
  });

  const springs = new Map<string, { source: string; target: string; weight: number }>();
  for (const relationship of [...model.relationships].sort((left, right) => left.nodeId.localeCompare(right.nodeId))) {
    const members = [...new Set(relationship.members)].filter((id) => entityIds.has(id)).sort();
    const anchor = members.find((id) => id.startsWith("substance:")) ?? members[0];
    if (!anchor) continue;
    for (const member of members) {
      if (member === anchor) continue;
      const [source, target] = [anchor, member].sort();
      const key = JSON.stringify([source, target]);
      const spring = springs.get(key);
      if (spring) spring.weight += 1 / Math.max(1, members.length - 1);
      else springs.set(key, { source, target, weight: 1 / Math.max(1, members.length - 1) });
    }
  }
  for (const [index, spring] of [...springs.values()].sort((left, right) => `${left.source}\0${left.target}`.localeCompare(`${right.source}\0${right.target}`)).entries()) {
    elements.push({ data: { id: `layout-spring:${index}`, ...spring } });
  }
  const connectedIds = new Set([...springs.values()].flatMap((spring) => [spring.source, spring.target]));
  const auxiliary = cytoscape({ headless: true, styleEnabled: true,
    elements: elements.filter((element) => element.data.source || connectedIds.has(element.data.id!)),
    style: [{ selector: "node", style: { width: cardGeometry ? 146 : 36, height: cardGeometry ? 62 : 36 } }],
    layout: { name: "preset" },
  });
  try {
    const layout: FcoseLayoutOptions = {
      name: "fcose", quality: detailed ? "proof" : "draft", randomize: !detailed, animate: false, fit: false,
      packComponents: false, tile: false, numIter: entities.length > 1000 ? 700 : 1000,
      nodeSeparation: 90,
      nodeRepulsion: (options.repulsion ?? 180000) / 40,
      idealEdgeLength: options.linkDistance ?? 90,
      edgeElasticity: (edge) => 0.3 + Math.min(0.65, Math.log2(1 + edge.data("weight")) * 0.12),
      gravity: Math.max(0.05, (options.gravity ?? 0.4) * 0.6),
      initialEnergyOnIncremental: 0.4,
    };
    if (connectedIds.size) auxiliary.layout(layout).run();
    auxiliary.nodes().forEach((node) => { positions[node.id()] = { ...node.position() }; });
  } finally {
    auxiliary.destroy();
  }

  // Pack connected components after layout: spectral layout can place a tiny
  // disconnected component far from the main network and waste the viewport.
  const adjacent = new Map(entities.map((node) => [node.id, new Set<string>()]));
  for (const spring of springs.values()) {
    adjacent.get(spring.source)!.add(spring.target);
    adjacent.get(spring.target)!.add(spring.source);
  }
  const groups: string[][] = [];
  const visited = new Set<string>();
  for (const entity of entities) {
    if (!connectedIds.has(entity.id) || visited.has(entity.id)) continue;
    const group: string[] = [];
    const queue = [entity.id];
    visited.add(entity.id);
    while (queue.length) {
      const id = queue.pop()!;
      group.push(id);
      for (const neighbor of adjacent.get(id)!) {
        if (visited.has(neighbor)) continue;
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
    groups.push(group.sort());
  }
  // Unlinked catalog records remain individually visible in a separate island.
  const singletons = entities.filter((node) => !connectedIds.has(node.id));
  singletons.forEach((node, index) => {
    const distance = 45 * Math.sqrt(index + 0.5);
    const angle = index * goldenAngle;
    positions[node.id] = {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  });
  if (singletons.length) groups.push(singletons.map((node) => node.id));
  const separation = cardGeometry ? 172 : 62;
  const components = groups.map((ids) => {
    const points = ids.map((id) => positions[id]);
    const before = bounds(points);
    const aspect = ids.length > 120 ? ratio : 1.25;
    const idealWidth = Math.sqrt(ids.length * separation * separation * 1.5 * aspect);
    const idealHeight = idealWidth / aspect;
    for (const point of points) {
      point.x = (point.x - before.minX) * idealWidth / before.width;
      point.y = (point.y - before.minY) * idealHeight / before.height;
    }
    separateEntities(points, separation);
    return { ids, ...bounds(points) };
  }).sort((left, right) => right.ids.length - left.ids.length || left.ids[0].localeCompare(right.ids[0]));
  const gap = separation;
  const totalArea = components.reduce((sum, component) => sum + (component.width + gap) * (component.height + gap), 0);
  const targetWidth = Math.max(...components.map((component) => component.width), Math.sqrt(totalArea * ratio));
  let cursorX = 0;
  let cursorY = 0;
  let rowHeight = 0;
  for (const component of components) {
    if (cursorX && cursorX + component.width > targetWidth) {
      cursorX = 0;
      cursorY += rowHeight + gap;
      rowHeight = 0;
    }
    for (const id of component.ids) {
      positions[id].x += cursorX - component.minX;
      positions[id].y += cursorY - component.minY;
    }
    cursorX += component.width + gap;
    rowHeight = Math.max(rowHeight, component.height);
  }

  // Disconnected catalogs must occupy a 2-D viewport, not an arbitrarily long strip.
  const points = Object.values(positions);
  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  const currentRatio = Math.max(1, maxX - minX) / Math.max(1, maxY - minY);
  const scaleX = Math.sqrt(ratio / currentRatio);
  for (const position of points) {
    position.x = (position.x - (minX + maxX) / 2) * scaleX;
    position.y = (position.y - (minY + maxY) / 2) / scaleX;
  }
  separateEntities(points, cardGeometry ? 160 : 42);
  for (const relationship of model.relationships) {
    const members = relationship.members.flatMap((id) => positions[id] ? [positions[id]] : []);
    if (!members.length) continue;
    const hash = hashId(relationship.nodeId);
    const angle = (hash / 0x100000000) * Math.PI * 2;
    const radius = 10 + ((hash >>> 16) % 17);
    positions[relationship.nodeId] = {
      x: members.reduce((sum, member) => sum + member.x, 0) / members.length + Math.cos(angle) * radius,
      y: members.reduce((sum, member) => sum + member.y, 0) / members.length + Math.sin(angle) * radius,
    };
  }
  // Preserve even a standalone relationship node in malformed/empty intermediate views.
  for (const node of model.nodes) positions[node.id] ??= { x: 0, y: 0 };
  return positions;
}
