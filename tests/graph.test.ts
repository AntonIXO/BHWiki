import assert from "node:assert/strict";
import test from "node:test";
import { buildKnowledgeGraph, previewKnowledgeGraph, searchKnowledgeGraph, type GraphInput } from "../src/lib/graph";
import { boundKnowledgeGraph } from "../src/lib/graph-data";
import type { KnowledgeGraphData } from "../src/lib/types";

const input: GraphInput = {
  substances: [
    { slug: "a", name: "Alpha", summary: "First", aliases: ["A-one"], tags: ["shared"] },
    { slug: "b", name: "Beta", summary: "Second", aliases: [], tags: ["shared"] },
    { slug: "c", name: "Gamma", summary: "Third", aliases: [], tags: [] },
  ],
  tags: [{ id: "shared", label: "Shared pathway", kind: "mechanism", description: "A shared pathway" }],
  hyperedges: [{ id: "three-way", label: "Joint relationship", relation: "mechanism", description: "Three members", sourceUrl: "https://example.org/paper", members: ["substance:a", "substance:b", "substance:c"], memberRoles: {"substance:a":"exposure", "substance:b":"comparator", "substance:c":"context"} }],
};

const boundedInput: KnowledgeGraphData = {
  ...input,
  substances: input.substances.map(substance => ({ ...substance, formula: "", category: "Reference", editorialStatus: "sourced-draft", reviewedAt: "2026-09-29", halfLifeLabel: "Not established" })),
};

test("expands a three-member hyperedge into one relationship node and three incidence edges", () => {
  const model = buildKnowledgeGraph(input);
  assert.equal(model.nodes.filter((node) => node.id === "relationship:three-way").length, 1);
  const incidences = model.elements.filter((element) => element.data.source === "relationship:three-way");
  assert.equal(incidences.length, 3);
  assert.deepEqual(new Set(incidences.map((edge) => edge.data.target)), new Set(input.hyperedges[0].members));
  assert.ok(model.elements.every((element) => !element.data.source || !element.data.source.startsWith("substance:")));
  assert.equal(incidences.find((edge) => edge.data.target === "substance:c")?.data.role, "context");
});

test("tag membership is represented as a group containing the tag and its substances", () => {
  const model = buildKnowledgeGraph(input);
  assert.deepEqual(model.relationships.find((edge) => edge.nodeId === "membership:shared")?.members, ["tag:shared", "substance:a", "substance:b"]);
});

test("rejects dangling members, duplicate IDs, and degenerate hyperedges", () => {
  assert.throws(() => buildKnowledgeGraph({ ...input, substances: [...input.substances, input.substances[0]] }), /Duplicate graph identifier/);
  assert.throws(() => buildKnowledgeGraph({ ...input, hyperedges: [{ ...input.hyperedges[0], members: ["substance:a", "substance:missing"] }] }), /Unknown member/);
  assert.throws(() => buildKnowledgeGraph({ ...input, hyperedges: [{ ...input.hyperedges[0], members: ["substance:a", "substance:a"] }] }), /at least two/);
  assert.throws(() => buildKnowledgeGraph({ ...input, tags: [] }), /Unknown tag/);
  assert.throws(() => buildKnowledgeGraph({ ...input, hyperedges: [{ ...input.hyperedges[0], memberRoles: {} }] }), /Missing role/);
});

test("type filtering preserves exposure qualification and all other participants", () => {
  const contextual: GraphInput = {
    substances: [{ slug: "caffeine", name: "Caffeine", summary: "A substance", aliases: [], tags: ["cyp1a2", "smoking"] }],
    tags: [
      { id: "cyp1a2", label: "CYP1A2", kind: "enzyme", description: "An enzyme" },
      { id: "smoking", label: "Tobacco smoke", kind: "exposure", description: "Exposure context" },
    ],
    hyperedges: [{ id: "clearance", label: "Clearance context", relation: "pharmacokinetics", description: "Metabolic exposure context", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15289794/", members: ["substance:caffeine", "tag:cyp1a2", "tag:smoking"], memberRoles: { "substance:caffeine": "measured probe", "tag:cyp1a2": "enzyme", "tag:smoking": "exposure context" } }],
  };
  for (const type of ["enzyme", "exposure"] as const) {
    const model = buildKnowledgeGraph(contextual, type);
    const relation = model.relationships.find((edge) => edge.id === "clearance");
    assert.deepEqual(relation?.members, contextual.hyperedges[0].members);
    assert.equal(relation?.memberRoles["tag:smoking"], "exposure context");
    assert.ok(model.nodes.some((node) => node.id === "tag:smoking"));
    assert.ok(model.nodes.some((node) => node.id === "tag:cyp1a2"));
    assert.equal(model.nodes.find((node) => node.id === "tag:cyp1a2")?.href, "/concepts/cyp1a2");
  }
  assert.equal(buildKnowledgeGraph(contextual, "effect").relationships.length, 0);
});

test("concepts have canonical articles and exact entity identifiers are searchable", () => {
  const model = buildKnowledgeGraph({ ...input, tags: [{ ...input.tags[0], kind: "effect", aliases: ["Shared feeling"] }] });
  assert.equal(model.nodes.find((node) => node.id === "tag:shared")?.href, "/effects/shared");
  assert.ok(searchKnowledgeGraph(model, "tag:shared").nodes.some((node) => node.id === "substance:a"));
  assert.ok(searchKnowledgeGraph(model, "shared feeling").nodes.some((node) => node.id === "tag:shared"));
  assert.ok(searchKnowledgeGraph(model, "substance:c").nodes.some((node) => node.id === "substance:a"));
});

test("search supports aliases and preserves all members of a matching relationship", () => {
  const model = searchKnowledgeGraph(buildKnowledgeGraph(input), "a-one");
  assert.ok(model.nodes.some((node) => node.id === "substance:c"));
  assert.equal(model.relationships.find((edge) => edge.id === "three-way")?.members.length, 3);
  assert.equal(searchKnowledgeGraph(model, "does-not-exist").nodes.length, 0);
});

test("type filtering never emits an edge with a missing endpoint", () => {
  const model = buildKnowledgeGraph(input, "enzyme");
  const nodes = new Set(model.nodes.map((node) => node.id));
  assert.equal(model.nodes.length, 0);
  assert.ok(model.elements.every((element) => !element.data.source || (nodes.has(element.data.source) && nodes.has(element.data.target))));
});

test("compact previews keep the entire sourced relationship rather than a pairwise fragment", () => {
  const model = previewKnowledgeGraph(buildKnowledgeGraph(input));
  assert.equal(model.relationships.length, 1);
  assert.deepEqual(model.relationships[0].members, input.hyperedges[0].members);
  assert.equal(model.relationships[0].sourceUrl, input.hyperedges[0].sourceUrl);
  assert.equal(model.relationships[0].memberRoles["substance:c"], "context");
  const nodes = new Set(model.nodes.map((node) => node.id));
  assert.ok(model.elements.every((element) => !element.data.source || (nodes.has(element.data.source) && nodes.has(element.data.target))));
});

test("focused concepts without authored claims still expose classification neighbors", () => {
  const bounded = boundKnowledgeGraph({ ...boundedInput, hyperedges: [] }, { focus: "tag:shared", limit: 3 });
  assert.deepEqual(bounded.substances.map(substance => substance.slug), ["a", "b"]);
  assert.deepEqual(bounded.tags.map(tag => tag.id), ["shared"]);
  assert.equal(bounded.hyperedges.length, 0);
  assert.equal(bounded.truncated, false);
  assert.equal(buildKnowledgeGraph(bounded).relationships[0].relation, "tag membership");
});

test("bounding excludes a whole oversized claim and trims unloaded classification references", () => {
  const bounded = boundKnowledgeGraph(boundedInput, { focus: "substance:a", limit: 2 });
  assert.equal(bounded.hyperedges.length, 0);
  assert.equal(bounded.truncated, true);
  assert.equal(bounded.substances.length + bounded.tags.length, 2);
  assert.deepEqual(bounded.substances[0].tags, ["shared"]);
  const tighter = boundKnowledgeGraph(boundedInput, { focus: "substance:a", limit: 1 });
  assert.deepEqual(tighter.substances[0].tags, []);
  assert.deepEqual(boundedInput.substances[0].tags, ["shared"], "bounding must not mutate the catalog");
  assert.doesNotThrow(() => buildKnowledgeGraph(tighter));
});
