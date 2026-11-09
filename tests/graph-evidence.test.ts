import { test } from "node:test";
import assert from "node:assert/strict";
import { catalog, hyperedges, substances, tags } from "../src/lib/content";
import { completeKnowledgeGraph, evidenceGraphRelationships, sharedSourceRelationships, conceptMentionMatcher, conceptGraphRelationships } from "../src/lib/graph-evidence";
import { buildKnowledgeGraph, catalogKnowledgeGraph } from "../src/lib/graph";
import { boundKnowledgeGraph } from "../src/lib/graph-data";
import { indexEntities } from "../src/lib/entities";
import { articleEvidence, evidenceKey } from "../src/lib/research";

const full = completeKnowledgeGraph({ substances: catalog, tags, hyperedges }, substances);

test("every sourced observation links its article, directory count and graph endpoint without manual tags", () => {
  const articles = substances.map(s => ({ ...s, tags: [] }));
  const linked = completeKnowledgeGraph({ substances: catalog.map(s => ({ ...s, tags: [] })), tags, hyperedges: [] }, articles);
  const entities = indexEntities(linked.substances, tags);
  const graph = catalogKnowledgeGraph(buildKnowledgeGraph(linked));
  for (const article of articles) {
    for (const kind of ["effect", "outcome"] as const) {
      for (const o of kind === "effect" ? article.effects : article.outcomes) {
        const key = evidenceKey(article.slug, kind, o);
        assert.ok(linked.substances.find(s => s.slug === article.slug)?.linkedConceptIds?.includes(o.conceptId), key);
        assert.ok(entities.linkedCount(o.conceptId) > 0, key);
        assert.ok(graph.relationships.some(e => e.evidenceKey === key && e.members.includes(`tag:${o.conceptId}`)), key);
      }
    }
  }
});

test("perception includes all recorded substances and preserves original evidence panel keys", () => {
  const expected = new Set(substances.filter(s => s.effects.some(o => o.conceptId === "perception")).map(s => s.slug));
  const focused = boundKnowledgeGraph(full, { focus: "tag:perception", limit: 120 });
  for (const slug of expected) assert.ok(focused.substances.some(s => s.slug === slug), slug);
  for (const slug of ["psilocybin", "lsd", "dmt", "mescaline"]) assert.ok(expected.has(slug));
  for (const article of substances) {
    const keys = new Set(articleEvidence(article).map(e => e.key));
    for (const edge of full.hyperedges.filter(e => e.evidenceKey?.startsWith(`${article.slug}~`))) {
      assert.ok(keys.has(edge.evidenceKey!), edge.id);
    }
  }
});

test("claim projections keep every participant role and reject unresolved assertions atomically", () => {
  const article = substances.find(s => s.claims.some(c => c.participants.length > 2))!;
  const claim = article.claims.find(c => c.participants.length > 2)!;
  const available = new Set([...catalog.map(s => `substance:${s.slug}`), ...tags.map(t => `tag:${t.id}`)]);
  const projected = evidenceGraphRelationships([article], available);
  const edge = projected.find(e => e.evidenceKey === evidenceKey(article.slug, "claim", claim))!;
  assert.ok(edge);
  assert.deepEqual(edge.memberRoles, Object.fromEntries(claim.participants.map(p => [available.has(`tag:${p.entityId}`) ? `tag:${p.entityId}` : p.entityId, p.role])));
  available.delete(edge.members[0]);
  assert.ok(!evidenceGraphRelationships([article], available).some(e => e.id === edge.id));
});

test("shared sources provide bibliographic navigation without inventing measured findings", () => {
  const source = substances.find(s => s.references.some(r => r.doi))!;
  const reference = source.references.find(r => r.doi)!;
  const concept = { id: "fixture-endpoint", label: "Fixture endpoint", kind: "outcome" as const, description: "", sourceUrls: [`https://doi.org/${reference.doi!.toUpperCase()}`] };
  const edges = sharedSourceRelationships([source], [concept]);
  assert.equal(edges.length, 1);
  assert.equal(edges[0].relation, "shared source");
  assert.equal(edges[0].evidenceKey, evidenceKey(source.slug, "source", reference));
  assert.match(edges[0].description, /does not assert a measured finding/);
  assert.equal(source.outcomes.filter(o => o.conceptId === concept.id).length, 0);
});

test("membership counts deduplicate studies, preserve article tags and ignore unrelated definitions", () => {
  const entities = indexEntities(full.substances, tags);
  for (const concept of tags) {
    const expected = full.substances.filter(s => s.linkedConceptIds?.includes(concept.id));
    assert.equal(entities.linkedCount(concept.id), expected.length, concept.id);
  }
  for (const article of catalog) assert.deepEqual(full.substances.find(s => s.slug === article.slug)!.tags, article.tags);
  assert.ok(!full.substances.some(s => s.linkedConceptIds?.includes("no-such-concept")));
  assert.deepEqual(full.hyperedges.slice(0, hyperedges.length), hyperedges);
  assert.doesNotThrow(() => buildKnowledgeGraph(full));
});

test("derived relationship identifiers survive record reordering", () => {
  const reversed = substances.map(s => ({ ...s, effects: [...s.effects].reverse(), outcomes: [...s.outcomes].reverse() }));
  const other = completeKnowledgeGraph({ substances: catalog, tags, hyperedges }, reversed);
  assert.deepEqual(new Set(other.hyperedges.map(e => e.id)), new Set(full.hyperedges.map(e => e.id)));
});

test("all explicit related concept links, including CHDH, are present in the graph", () => {
  const edges = conceptGraphRelationships(tags);
  for (const concept of tags) for (const other of concept.relatedIds ?? []) {
    assert.ok(edges.some(edge => edge.members.includes(`tag:${concept.id}`) && edge.members.includes(`tag:${other}`)), `${concept.id} / ${other}`);
  }
  assert.ok(full.hyperedges.some(edge => edge.members.includes("tag:chdh") && edge.members.includes("tag:betaine-one-carbon-metabolism")));
});

test("named concept mentions resolve aliases without partial words or ambiguous aliases", () => {
  const concepts = [
    { id: "chdh", label: "CHDH", kind: "enzyme" as const, description: "", aliases: ["Choline dehydrogenase", "shared alias"] },
    { id: "other", label: "Other enzyme", kind: "enzyme" as const, description: "", aliases: ["shared alias"] },
  ];
  const match = conceptMentionMatcher(concepts);
  assert.deepEqual(match("CHDH2 and preCHDH and shared alias"), []);
  assert.deepEqual(match("Choline dehydrogenase (CHDH)." ).map(t => t.id), ["chdh"]);
  assert.deepEqual(match("CHDH; CHDH" ).map(t => t.id), ["chdh"]);
});

test("cited prose and reference mentions create navigable context without inventing outcomes", () => {
  const article = structuredClone(substances[0]);
  article.description = `CHDH is mentioned in this cited paragraph. [${article.references[0].id}]`;
  const available = new Set([`substance:${article.slug}`, "tag:chdh"]);
  const concept = tags.find(t => t.id === "chdh")!;
  const edges = evidenceGraphRelationships([{ ...article, effects: [], outcomes: [], mechanisms: [], claims: [], cautions: [], interactions: [] }], available, [concept]);
  const edge = edges.find(e => e.evidenceKey === evidenceKey(article.slug, "source", article.references[0]));
  assert.ok(edge);
  assert.equal(edge.memberRoles["tag:chdh"], "mentioned concept");
  assert.equal(edge.relation, "source mentions");
});
