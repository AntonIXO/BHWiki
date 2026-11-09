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
  "c3367b27b2b54fab34d6bb2e4cbd2931d31bc389be63129ac58c576d826259f2",
  "9b0f7e51148f42f74939d0a6350186c1a6b66620406452dea7bf6a383edc2adb",
  "48895f730571d302c14ca4af54139854f8047080b6110b7581f8f22874e96103",
  "e7874f948ab38ea3e27e42fb601db8c0a52c54249742ba8d1ed178f2a812a173",
  "691249f43f92145e7440ea52a412b29eaf94511c12f0805e1b049a712f123e9d",
  "2c55cb114918102dfb34346f5817f15d5a177ce587c06393be9e01112f336267",
  "af8481a2cd767164c710d06046728fd3db3e35d5a50f816058eb6375e59ac6e9",
  "d24a4a974f5eaf55553f94a9415dc01cf1c9c7523a73e0f5f35625801e0c608d",
  "af5fa2be6ae044d2b625ca2a5416848f2678c315ffdb904464b7f497bf2d29e4",
  "b276d19c48b1ecd69a1e630a5aaeeec3811137434cdef8d2067c841a264ca0fb"
];

test("markdown files preserve the curated records", () => {
  const curated = curatedSlugs.map((slug) => substances.find((substance) => substance.slug === slug));
  assert.deepEqual(curated.map((substance) => substance?.slug), curatedSlugs);
  assert.deepEqual(curated.map((substance) => substance && contentHash(substance)), curatedHashes);
  assert.ok(substances.length >= curatedSlugs.length);
  assert.equal(tags.length, 355);
  assert.equal(substances.filter((substance) => substance.subtitle === "Identity record.").length, 0);
  assert.equal(substances.filter((substance) => substance.subtitle === "Source-backed identity stub.").length, 0);
  const kinds: Record<TagKind, number> = { class: 0, "chemical-family": 0, mechanism: 0, target: 0, neurotransmitter: 0, enzyme: 0, effect: 0, outcome: 0, exposure: 0, legal: 0 };
  for (const tag of tags) kinds[tag.kind] += 1;
  assert.deepEqual(kinds, { class: 18, "chemical-family": 8, mechanism: 30, target: 20, neurotransmitter: 6, enzyme: 12, effect: 54, outcome: 201, exposure: 5, legal: 1 });
  assert.equal(hyperedges.length, 63);
  const total = (count: (substance: Substance) => number) => curated.reduce((sum, substance) => sum + count(substance!), 0);
  assert.equal(total((substance) => substance.references.length), 330);
  assert.equal(total((substance) => substance.pkObservations.length), 25);
  assert.equal(total((substance) => substance.doses.length), 83);
  assert.equal(total((substance) => substance.mechanisms.length), 45);
  assert.equal(total((substance) => substance.cautions.length), 68);
  assert.equal(total((substance) => substance.effects.length), 25);
  assert.equal(total((substance) => substance.outcomes.length), 113);
  assert.equal(total((substance) => substance.claims.length), 152);
  assert.equal(total((substance) => substance.modifiers.length), 20);
  assert.equal(total((substance) => substance.legal.length), 17);
  assert.equal(total((substance) => substance.interactions.length + substance.experienceLinks.length + (substance.kinetics.timeline?.length ?? 0)), 26);
  const caffeine = curated[0];
  assert.equal(caffeine?.halfLife.sourceId, "lelo1986");
  assert.deepEqual([caffeine?.halfLife.low, caffeine?.halfLife.high], [4.1, 4.1]);
  const psilocybin = substances.find((substance) => substance.slug === "psilocybin");
  assert.equal(psilocybin?.pkObservations.find((observation) => observation.modelEligible)?.analyte.toLowerCase().includes("psilocin"), true);
  const clearance = hyperedges.find((edge) => edge.id === "caffeine-clearance");
  assert.deepEqual(clearance?.members, ["substance:caffeine", "tag:cyp1a2", "tag:tobacco-smoke"]);
});

test("markdown files round-trip without changing the record or its hash", { timeout: 30_000 }, () => {
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
