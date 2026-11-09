import assert from "node:assert/strict";
import test from "node:test";
import { buildKnowledgeGraph, catalogKnowledgeGraph } from "../src/lib/graph";
import { layoutKnowledgeGraph } from "../src/lib/graph-layout";
import { completeKnowledgeGraph } from "../src/lib/graph-evidence";
import { boundKnowledgeGraph } from "../src/lib/graph-data";
import { catalog, hyperedges, substances, tags } from "../src/lib/content";

test("entity layout preserves every node in the complete evidence corpus within a two-dimensional viewport", () => {
  const data = completeKnowledgeGraph({ substances: catalog, tags, hyperedges }, substances);
  const model = catalogKnowledgeGraph(buildKnowledgeGraph(data));
  assert.ok(model.nodes.length > 5000, "exercise the expanded evidence graph, not the old 11-substance component");
  const positions = layoutKnowledgeGraph(model, { width: 1200, height: 700 });
  assert.equal(Object.keys(positions).length, model.nodes.length);
  assert.equal(model.nodes.filter((node) => node.kind === "substance").length, catalog.length);
  for (const node of model.nodes) {
    assert.ok(Number.isFinite(positions[node.id]?.x), `${node.id} has a finite x position`);
    assert.ok(Number.isFinite(positions[node.id]?.y), `${node.id} has a finite y position`);
  }
  const points = Object.values(positions);
  const width = Math.max(...points.map((point) => point.x)) - Math.min(...points.map((point) => point.x));
  const height = Math.max(...points.map((point) => point.y)) - Math.min(...points.map((point) => point.y));
  assert.ok(width / height > 1 && width / height < 2.5, "layout fills a two-dimensional viewport instead of long horizontal lanes");
  assert.ok(new Set(points.map((point) => Math.round(point.y))).size > 100, "nodes occupy many vertical positions");
  const entityPositions = model.nodes.filter((node) => node.kind !== "relationship").map((node) => positions[node.id]);
  for (let left = 0; left < entityPositions.length; left += 1) {
    for (let right = left + 1; right < entityPositions.length; right += 1) {
      assert.ok(Math.hypot(entityPositions[left].x - entityPositions[right].x, entityPositions[left].y - entityPositions[right].y) >= 32,
        "entity glyphs remain separated after component packing");
    }
  }
});

test("entity layout retains disconnected catalog entries without inventing relationships", () => {
  const model = buildKnowledgeGraph({
    substances: ["alpha", "beta", "gamma"].map((slug) => ({ slug, name: slug, summary: "", aliases: [], tags: [] })),
    tags: [], hyperedges: [],
  });
  const positions = layoutKnowledgeGraph(model);
  assert.equal(Object.keys(positions).length, 3);
  assert.equal(new Set(Object.values(positions).map((point) => `${point.x},${point.y}`)).size, 3);
  assert.equal(model.relationships.length, 0);
  assert.equal(model.elements.filter((element) => element.data.source).length, 0);
});

test("small focused graphs reserve the full labelled-card geometry", () => {
  const data = completeKnowledgeGraph({ substances: catalog, tags, hyperedges }, substances);
  for (const focus of ["caffeine", "chdh", "cyp1a2"]) {
    const model = buildKnowledgeGraph(boundKnowledgeGraph(data, { focus, limit: 120 }));
    assert.ok(model.nodes.length <= 180, `${focus} exercises labelled cards`);
    const positions = layoutKnowledgeGraph(model);
    const entities = model.nodes.filter((node) => node.kind !== "relationship");
    for (let left = 0; left < entities.length; left += 1) {
      for (let right = left + 1; right < entities.length; right += 1) {
        const a = positions[entities[left].id];
        const b = positions[entities[right].id];
        assert.ok(Math.abs(a.x - b.x) >= 146 || Math.abs(a.y - b.y) >= 62,
          `${focus}: ${entities[left].id} and ${entities[right].id} labelled cards do not overlap`);
      }
    }
  }
});

test("empty entity layout is empty", () => {
  assert.deepEqual(layoutKnowledgeGraph({ nodes: [], elements: [], relationships: [] }), {});
});
