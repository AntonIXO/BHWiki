import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { hyperedges, substances, tags } from "../src/lib/content";
import { ContentFormatError, contentDirectory, parseContentSource, serializeContent } from "../src/lib/content-markdown";
import { contentHash } from "../src/lib/publication-metadata";
import type { Substance, TagKind } from "../src/lib/types";

const curatedSlugs = ["caffeine", "l-theanine", "creatine", "melatonin", "nicotine", "psilocybin", "modafinil", "methylphenidate", "diphenhydramine", "citicoline"];
const curatedHashes = [
  "f03423696bc77864f6636eabf29bec2bb59f5ff2d87e6eda91b7e4f0050a6d3f",
  "e6d89068b5725791d19355ed370c901861ce36dced27dde65446deff8508d87e",
  "553d1f07e52f4e2d4b4330ea14de3d2049b2a75a43d4f4139989b39bad76841b",
  "f2297e45725635d21b1d6a50f7a8b9a791e3e65c6e6701d94dde5f9c3168e57e",
  "7e2df61fdd0bdb9f08629fadc95f952aad8f36ef4cd364a575c6be9ceade3a2a",
  "5e5ce03d8ae89c0ff7712aa2b89379502b8c7d84fea5e2b39d45188c370730a9",
  "fa998bf864134be9fd7d9d1ddc859f1da99a40123f6580c13b7d74b5518b5e3f",
  "b5f9d77395bcccfec7595383c83ed4dd4b1181eb2b6d182bc65014584565c731",
  "804044a8ef78689b374091ff6d627bb4205a1713905c07f15bce3dc6c67c542b",
  "8a43599577fface579b443f3fc50ca0814533d167a6628be248d0295004bbb2c",
];

test("markdown files preserve the curated records", () => {
  const curated = curatedSlugs.map((slug) => substances.find((substance) => substance.slug === slug));
  assert.deepEqual(curated.map((substance) => substance?.slug), curatedSlugs);
  assert.deepEqual(curated.map((substance) => substance && contentHash(substance)), curatedHashes);
  assert.equal(substances.length, 296);
  assert.equal(tags.length, 214);
  assert.equal(substances.filter((substance) => substance.subtitle === "Identity record.").length, 161);
  const kinds: Record<TagKind, number> = { class: 0, "chemical-family": 0, mechanism: 0, target: 0, neurotransmitter: 0, enzyme: 0, effect: 0, outcome: 0, exposure: 0, legal: 0 };
  for (const tag of tags) kinds[tag.kind] += 1;
  assert.deepEqual(kinds, { class: 18, "chemical-family": 7, mechanism: 29, target: 19, neurotransmitter: 6, enzyme: 12, effect: 8, outcome: 109, exposure: 5, legal: 1 });
  assert.equal(hyperedges.length, 63);
  const total = (count: (substance: Substance) => number) => curated.reduce((sum, substance) => sum + count(substance!), 0);
  assert.equal(total((substance) => substance.references.length), 64);
  assert.equal(total((substance) => substance.pkObservations.length), 12);
  assert.equal(total((substance) => substance.doses.length), 21);
  assert.equal(total((substance) => substance.mechanisms.length), 14);
  assert.equal(total((substance) => substance.cautions.length), 31);
  assert.equal(total((substance) => substance.effects.length), 7);
  assert.equal(total((substance) => substance.outcomes.length), 22);
  assert.equal(total((substance) => substance.claims.length), 25);
  assert.equal(total((substance) => substance.modifiers.length), 9);
  assert.equal(total((substance) => substance.legal.length), 4);
  assert.equal(total((substance) => substance.interactions.length + substance.experienceLinks.length + (substance.kinetics.timeline?.length ?? 0)), 2);
  const caffeine = curated[0];
  assert.equal(caffeine?.halfLife.sourceId, "temple2017");
  assert.deepEqual([caffeine?.halfLife.low, caffeine?.halfLife.high], [3, 7]);
  const psilocybin = substances.find((substance) => substance.slug === "psilocybin");
  assert.equal(psilocybin?.pkObservations.find((observation) => observation.modelEligible)?.analyte.includes("Psilocin"), true);
  const clearance = hyperedges.find((edge) => edge.id === "caffeine-clearance");
  assert.deepEqual(clearance?.members, ["substance:caffeine", "tag:cyp1a2", "tag:tobacco-smoke"]);
});

test("markdown files round-trip without changing the record or its hash", () => {
  substances.forEach((record, order) => {
    const relative = `substances/${record.slug}.md`;
    const parsed = parseContentSource(relative, serializeContent(relative, { collection: "substances", record, order }));
    if (parsed.collection !== "substances") throw new Error(`expected a substance record for ${record.slug}`);
    assert.equal(JSON.stringify(parsed.record), JSON.stringify(record));
    assert.equal(contentHash(parsed.record), contentHash(record));
  });
  tags.forEach((record, order) => {
    const relative = record.kind === "effect" ? `effects/${record.id}.md` : record.kind === "outcome" ? `outcomes/${record.id}.md` : `concepts/${record.kind}/${record.id}.md`;
    const again = parseContentSource(relative, serializeContent(relative, { collection: "tags", record, order })).record;
    assert.equal(JSON.stringify(again), JSON.stringify(record));
  });
  hyperedges.forEach((record, order) => {
    const relative = `relationships/${record.id}.md`;
    const again = parseContentSource(relative, serializeContent(relative, { collection: "relationships", record, order })).record;
    assert.equal(JSON.stringify(again), JSON.stringify(record));
  });
});

test("a misplaced concept and dropped prose fail before publication", () => {
  const stimulant = readFileSync(path.join(contentDirectory(), "concepts/class/stimulant.md"), "utf8");
  assert.throws(() => parseContentSource("effects/stimulant.md", stimulant), ContentFormatError);
  assert.throws(() => parseContentSource("substances/caffeine.md", "---\nslug: caffeine\nx-shape:\n  - slug\n---\n\nA paragraph before the headings.\n"), /text before the first heading/);
  assert.throws(() => parseContentSource("substances/caffeine.md", "---\nslug: caffeine\nx-shape:\n  - slug\n---\n\n## Notes\n\nMissing required sections.\n"), /unknown heading/);
});
