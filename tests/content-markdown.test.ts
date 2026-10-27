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
  "812e10762b85fdb1d4d874cebe6fb4b6eef677b75d77468f24b5542432251222",
  "e6d89068b5725791d19355ed370c901861ce36dced27dde65446deff8508d87e",
  "c64573031510eb1cff1df6fbd3eb748bd07542b585b36e8914c040a8e7b1d3bd",
  "d061d4e0f8ff593971ef57ad23061277131938b525ad0d0d0c2cdc9853cc71e2",
  "167494247d3d6ec5b61e85dc1016352f964e393fcba09ccf63d4e1556863e810",
  "f8c8258e89ff47240104fd22602ac94ef98f991b2fe1bbea7b3b2f5f6d734fe6",
  "082d24f9e76ac73efcaec2874d0132ac78316efa1c012df7949b359d98dd0c2e",
  "5b272eedfef9fa03a8fab6e4934b7c308bbbcff1c34d401083bd84bdaa830047",
  "2af40220f322b71b7ac9db93b605a1dea2327a12c1f95a70eb200fe8c55f30de",
  "adab4d22f85bcc87cd9f73dacfc2eaee8db43508c575ea990bef2e27954de809",
];

test("markdown files preserve the curated records", () => {
  const curated = curatedSlugs.map((slug) => substances.find((substance) => substance.slug === slug));
  assert.deepEqual(curated.map((substance) => substance?.slug), curatedSlugs);
  assert.deepEqual(curated.map((substance) => substance && contentHash(substance)), curatedHashes);
  assert.ok(substances.length >= curatedSlugs.length);
  assert.equal(tags.length, 247);
  assert.equal(substances.filter((substance) => substance.subtitle === "Identity record.").length, 0);
  const identityOnly = substances.filter(
    (substance) => substance.subtitle === "Source-backed identity stub.",
  );
  assert.ok(identityOnly.length >= 2);
  for (const substance of identityOnly) {
    assert.equal(substance.editorialStatus, "sourced-draft");
    assert.equal(substance.doses.length, 0);
    assert.equal(substance.effects.length, 0);
    assert.equal(substance.outcomes.length, 0);
    assert.equal(substance.claims.length, 0);
    assert.ok(substance.references.length > 0);
  }
  const kinds: Record<TagKind, number> = { class: 0, "chemical-family": 0, mechanism: 0, target: 0, neurotransmitter: 0, enzyme: 0, effect: 0, outcome: 0, exposure: 0, legal: 0 };
  for (const tag of tags) kinds[tag.kind] += 1;
  assert.deepEqual(kinds, { class: 18, "chemical-family": 8, mechanism: 30, target: 20, neurotransmitter: 6, enzyme: 12, effect: 9, outcome: 138, exposure: 5, legal: 1 });
  assert.equal(hyperedges.length, 63);
  const total = (count: (substance: Substance) => number) => curated.reduce((sum, substance) => sum + count(substance!), 0);
  assert.equal(total((substance) => substance.references.length), 191);
  assert.equal(total((substance) => substance.pkObservations.length), 25);
  assert.equal(total((substance) => substance.doses.length), 46);
  assert.equal(total((substance) => substance.mechanisms.length), 18);
  assert.equal(total((substance) => substance.cautions.length), 49);
  assert.equal(total((substance) => substance.effects.length), 18);
  assert.equal(total((substance) => substance.outcomes.length), 55);
  assert.equal(total((substance) => substance.claims.length), 38);
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
