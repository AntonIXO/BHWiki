import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { loadCorpus } from "../src/lib/content-markdown";
import {
  auditOptiHealthCoverage,
  buildOptiHealthSubstanceStub,
  planOptiHealthSubstanceStubs,
  validateOptiHealthCandidateFile,
  type OptiHealthCandidateFile,
} from "../scripts/import-optihealth-substance-stubs";
import { validateSubstance } from "../src/lib/validate-content";

const fixture = validateOptiHealthCandidateFile(JSON.parse(readFileSync(new URL("../data/imports/optihealth-substance-stubs.json", import.meta.url), "utf8")));
const corpus = loadCorpus();
const coverageCorpus = {
  ...corpus,
  substances: corpus.substances.filter((row) => !["famciclovir", "tolperisone"].includes(row.slug)),
};

function candidateFileWithMappedRow(): OptiHealthCandidateFile {
  return {
    ...fixture,
    candidates: [
      ...fixture.candidates,
      {
        sourceId: "optihealth:substance:lutein-generic",
        name: "Lutein",
        sourceUrl: "https://pubchem.ncbi.nlm.nih.gov/compound/Lutein",
        identityStatus: "mapped",
        canonicalSlug: "lutein",
        aliases: [],
        candidateSlugs: ["lutein"],
        references: [{ ...fixture.candidates[2].references[0], id: "pubchem-lutein", title: "Lutein - PubChem", url: "https://pubchem.ncbi.nlm.nih.gov/compound/Lutein" }],
      },
    ],
  };
}

test("coverage audit reports mapped, unmapped, and ambiguous identities deterministically", () => {
  const report = auditOptiHealthCoverage(candidateFileWithMappedRow(), coverageCorpus);
  assert.deepEqual(report.counts, { mapped: 1, unmapped: 2, ambiguous: 1, total: 4 });
  assert.deepEqual(report.mapped.map((row) => row.canonicalSlug), ["lutein"]);
  assert.deepEqual(report.unmapped.map((row) => row.canonicalSlug), ["famciclovir", "tolperisone"]);
  assert.deepEqual(report.ambiguous.map((row) => row.name), ["Doctor's Best Lutein"]);
  assert.equal(report.ambiguous[0].canonicalSlug, null);
});

test("identity stubs retain only source-backed identity and remain drafts", () => {
  const candidate = fixture.candidates.find((row) => row.name === "Famciclovir")!;
  const stub = buildOptiHealthSubstanceStub(candidate, fixture.generatedAt);
  validateSubstance(stub);
  assert.equal(stub.slug, "famciclovir");
  assert.equal(stub.editorialStatus, "sourced-draft");
  assert.equal(stub.pubchemCid, null);
  assert.equal(stub.formula, "Not established");
  assert.equal(stub.doses.length, 0);
  assert.equal(stub.effects.length, 0);
  assert.equal(stub.outcomes.length, 0);
  assert.equal(stub.claims.length, 0);
  assert.equal(stub.interactions.length, 0);
  assert.match(stub.evidenceNote, /identity only/i);
});

test("ambiguous branded lutein remains review-only and cannot generate a stub", () => {
  const candidate = fixture.candidates.find((row) => row.name === "Doctor's Best Lutein")!;
  assert.equal(candidate.identityStatus, "ambiguous");
  assert.deepEqual(candidate.candidateSlugs, ["lutein", "lutemax"]);
  assert.throws(() => buildOptiHealthSubstanceStub(candidate, fixture.generatedAt), /ambiguous candidate is review-only/);
});

test("re-running after applying the fixture is a deterministic no-op", () => {
  const plan = planOptiHealthSubstanceStubs(process.cwd(), fixture);
  assert.deepEqual(plan.report.counts, { mapped: 2, unmapped: 0, ambiguous: 1, total: 3 });
  assert.deepEqual(plan.writes, []);
});

test("canonical slugs and aliases are validated before publication", () => {
  const source = corpus.substances.find((row) => row.slug === "caffeine")!;
  assert.throws(() => validateSubstance({ ...source, slug: "Caffeine" }), /invalid slug/);
  assert.throws(() => validateSubstance({ ...source, aliases: [...source.aliases, source.aliases[0]] }), /duplicate alias/);
  assert.throws(() => validateSubstance({ ...source, aliases: [...source.aliases, source.aliases[0]] }), /duplicate alias/);
});
