import assert from "node:assert/strict";
import test from "node:test";
import { substances } from "../src/lib/content";
import { contentHash, validateCanonicalSources, validateEditorialMetadata } from "../src/lib/publication-metadata";

test("sourced drafts permit absent review metadata and stale attestations fail", () => {
  assert.equal(validateEditorialMetadata(substances, { version: 1, articles: {} }).size, 0);
  const article = substances[0];
  assert.throws(() => validateEditorialMetadata([article], { version: 1, articles: { [article.slug]: { contentHash: "0".repeat(64), contributors: [], reviewers: [] } } }), /Stale editorial metadata/);
});

test("reviewed publication requires exact-snapshot reviewers and review reference", () => {
  const article = { ...substances[0], editorialStatus: "editorially-reviewed" as const };
  const metadata = { contentHash: contentHash(article), contributors: ["Fixture author"], reviewers: ["Fixture reviewer"], reviewReference: "https://example.org/fixture-review" };
  const validate = (value: unknown) => validateEditorialMetadata([article], { version: 1, articles: { [article.slug]: value } });
  assert.deepEqual(validate(metadata).get(article.slug)?.reviewers, ["Fixture reviewer"]);
  assert.throws(() => validate({ ...metadata, reviewers: [] }), /requires named reviewers/);
  assert.throws(() => validate({ ...metadata, reviewReference: undefined }), /requires named reviewers/);
  assert.throws(() => validate({ ...metadata, reviewReference: "http://example.org/review" }), /HTTPS/);
  assert.throws(() => validateEditorialMetadata([{ ...article, summary: `${article.summary} changed` }], { version: 1, articles: { [article.slug]: metadata } }), /Stale editorial metadata/);
});

test("canonical source metadata agrees across articles; interpretations may differ", () => {
  const source = substances[0].references[0];
  validateCanonicalSources([source, { ...source, insight: "A different article-specific interpretation", limitation: "Different applicability" }]);
  assert.throws(() => validateCanonicalSources([source, { ...source, title: "Conflicting title" }]), /Conflicting canonical source title/);
  assert.throws(() => validateCanonicalSources([{ ...source, doi: "10.1/one" }, { ...source, doi: "10.1/two" }]), /Conflicting canonical source doi/);
  assert.throws(() => validateCanonicalSources([{ ...source, pmid: "123" }, { ...source, pmid: "456" }]), /Conflicting canonical source pmid/);
  validateCanonicalSources(substances.flatMap((article) => article.references));
});
