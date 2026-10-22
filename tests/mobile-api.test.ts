import test from "node:test";
import assert from "node:assert/strict";
import type { CatalogSubstance, Substance, Tag } from "../src/lib/types";
import type { EvidenceRecord } from "../src/lib/research-types";
import {
  mobileCatalogResponse,
  mobileError,
  mobileEvidenceResponse,
  mobileSubstanceResponse,
  validMobileSlug,
} from "../src/lib/mobile-api";

const item = (slug: string, tags: string[] = ["stimulant"]): CatalogSubstance => ({
  slug,
  name: slug === "caffeine" ? "Caffeine" : "L-theanine",
  summary: "A fixture summary.",
  aliases: slug === "caffeine" ? ["1,3,7-trimethylxanthine"] : [],
  formula: "C8H10N4O2",
  category: slug === "caffeine" ? "Stimulant" : "Amino acid",
  tags,
  editorialStatus: "sourced-draft",
  reviewedAt: "2026-10-16",
  halfLifeLabel: "Not established",
});

const concept = (id: string, label: string, kind: Tag["kind"] = "class"): Tag => ({
  id,
  label,
  kind,
  description: "Fixture concept.",
});

test("validMobileSlug accepts published slugs and rejects path/control input", () => {
  assert.equal(validMobileSlug("caffeine"), true);
  assert.equal(validMobileSlug("2c-b"), true);
  assert.equal(validMobileSlug("delta-9-thc"), true);
  assert.equal(validMobileSlug("../secret"), false);
  assert.equal(validMobileSlug("Caffeine"), false);
  assert.equal(validMobileSlug(""), false);
  assert.equal(validMobileSlug("caffeine/"), false);
  assert.equal(validMobileSlug("a".repeat(122)), false);
});

test("catalog response preserves item order, pagination and compact shape", () => {
  const response = mobileCatalogResponse(
    [item("caffeine", ["stimulant", "adenosine"]), item("l-theanine", ["amino-acid"])],
    [concept("stimulant", "Stimulant"), concept("adenosine", "Adenosine")],
    { offset: 0, limit: 1 },
  );
  assert.equal(response.version, 1);
  assert.deepEqual(response.items.map((entry) => entry.slug), ["caffeine"]);
  assert.equal(response.total, 2);
  assert.equal(response.nextOffset, 1);
  assert.equal("references" in response.items[0], false);
  assert.equal("effects" in response.items[0], false);
  assert.deepEqual(response.facets.categories, [
    { id: "Amino acid", label: "Amino acid", count: 1 },
    { id: "Stimulant", label: "Stimulant", count: 1 },
  ]);
  assert.deepEqual(response.facets.tags, [
    { id: "adenosine", label: "Adenosine", kind: "class", count: 1 },
    { id: "amino-acid", label: "amino-acid", count: 1 },
    { id: "stimulant", label: "Stimulant", kind: "class", count: 1 },
  ]);
});

test("catalog response clamps pagination instead of leaking invalid slices", () => {
  const response = mobileCatalogResponse([item("caffeine")], [], { offset: -4, limit: 900 });
  assert.deepEqual(response.items.map((entry) => entry.slug), ["caffeine"]);
  assert.equal(response.nextOffset, null);
});

test("article and evidence responses keep versioned envelopes", () => {
  const substance = { slug: "caffeine", name: "Caffeine" } as Substance;
  const detail = mobileSubstanceResponse(substance, [item("l-theanine")]);
  assert.equal(detail.version, 1);
  assert.equal(detail.item, substance);
  assert.deepEqual(detail.related.map((entry) => entry.slug), ["l-theanine"]);

  const evidence = { key: "caffeine~source~pubchem", title: "PubChem", assertion: "Identity", kind: "source", context: [], sources: [], conflictingSources: [], limitation: "None" } satisfies EvidenceRecord;
  assert.deepEqual(mobileEvidenceResponse(evidence), { version: 1, item: evidence });
});

test("mobileError has only stable public fields", () => {
  assert.deepEqual(mobileError("unavailable", "The library is temporarily unavailable."), {
    error: { code: "unavailable", message: "The library is temporarily unavailable." },
  });
});
