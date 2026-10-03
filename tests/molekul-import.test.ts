import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { substances } from "../src/lib/content";
import { MoleculeImage } from "../src/components/molecule-image";
import { validateSubstance } from "../src/lib/validate-content";
import { expandSourceToken, isResearchLink, makeImportedRecord, manifestFingerprint, slugAliases, type MolekulManifest } from "../scripts/import-molekul";
const manifest: MolekulManifest = JSON.parse(readFileSync(new URL("../data/imports/molekul-2026-10-04.json", import.meta.url), "utf8"));
const notes: Record<string, string> = JSON.parse(readFileSync(new URL("../data/imports/molekul-identity-notes.json", import.meta.url), "utf8"));
const canonical = new Map(substances.flatMap(s => s.references.map(r => [r.url, r] as const)));

test("all Chrome-discovered profiles map to articles, with complete eligible source trails", () => {
  assert.equal(manifestFingerprint(manifest), 3078886368);
  assert.equal(manifest.profiles.length, 95);
  assert.equal(new Set(manifest.profiles.map(row => row[0])).size, 95);
  for (const row of manifest.profiles) {
    const s = substances.find(s => s.slug === (slugAliases[row[0]] ?? row[0]));
    assert.ok(s, row[0]);
    assert.ok(s.description.includes(notes[row[0]]));
    assert.equal(s.editorialStatus, "sourced-draft");
    for (const index of row[4]) {
      const url = expandSourceToken(manifest.urlTokens[index]);
      if (isResearchLink(url)) assert.ok(s.references.some(r => r.url === url), `${row[0]}: ${url}`);
    }
    assert.ok(!s.references.some(r => !isResearchLink(r.url)));
    const repeated = makeImportedRecord(manifest, row, s, canonical, notes[row[0]]);
    assert.deepEqual(repeated, s, `${row[0]} import must be idempotent`);
  }
  assert.ok(!substances.some(s => s.slug === "phenotropil"));
});

test("mixtures and unresolved candidates cannot claim a PubChem structure or invented kinetics", () => {
  const mixture = substances.find(s => s.slug === "cerebrolysin")!;
  assert.equal(mixture.pubchemCid, null);
  assert.equal(mixture.formula, "Not established");
  assert.equal(mixture.doses.length, 0);
  assert.ok(mixture.pkObservations.every(p => !p.modelEligible));
  validateSubstance(mixture);
  assert.throws(() => validateSubstance({ ...mixture, formula: "C10H10" }), /unresolved identity/);
  assert.throws(() => validateSubstance({ ...mixture, pubchemCid: 0 }), /compound identifier/);
  const html = renderToStaticMarkup(createElement(MoleculeImage, { alt: "Structure" }));
  assert.match(html, /Structure not established/);
  assert.doesNotMatch(html, /<img/);
  assert.equal(substances.find(s => s.slug === "bromantane")!.pubchemCid, 4660557);
});

test("the importer refuses to overwrite independent editorial review", () => {
  const row = manifest.profiles.find(row => row[0] === "bromantane")!;
  const article = substances.find(s => s.slug === "bromantane")!;
  assert.throws(() => makeImportedRecord(manifest, row, { ...article, editorialStatus: "editorially-reviewed" }, canonical), /Manual reconciliation/);
});
