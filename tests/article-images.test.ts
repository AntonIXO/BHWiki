import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { articleImage } from "../src/lib/article-images";
import images from "../src/lib/article-images.json";
import { substances } from "../src/lib/content";
import { validateSubstance } from "../src/lib/validate-content";

test("article illustrations have local image data, attribution and a published subject", () => {
  for (const [slug, image] of Object.entries(images)) {
    assert.ok(substances.some(s => s.slug === slug), slug);
    assert.ok(image.alt.trim() && image.credit.trim(), slug);
    assert.equal(new URL(image.sourceUrl).protocol, "https:");
    const bytes = readFileSync(`public${image.src}`);
    assert.ok(bytes.subarray(0, 4).equals(Buffer.from([137, 80, 78, 71])) || bytes.subarray(0, 2).equals(Buffer.from([255, 216])), slug);
  }
  for (const substance of substances) {
    const illustration = articleImage(substance);
    if (illustration) assert.ok(readFileSync(`public${illustration.src}`).length > 100, substance.slug);
  }
});

test("mixtures retain unresolved chemical identity and never receive a surrogate molecule", () => {
  const mixture = substances.find(s => s.slug === "cerebrolysin")!;
  assert.equal(articleImage(mixture), undefined);
  assert.equal(mixture.pubchemCid, null);
  assert.ok(mixture.pkObservations.every(o => !o.modelEligible));
  assert.throws(() => validateSubstance({ ...mixture, formula: "C10H10" }), /unresolved identity/);
  assert.throws(() => validateSubstance({ ...mixture, pubchemCid: 0 }), /compound identifier/);
});
