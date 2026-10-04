import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { prepareResearchImport } from "../scripts/import-deep-research";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(path.join(root, "content/substances/phenibut.md"), "utf8");
const article = { relativePath: "substances/phenibut.md", source };

test("one-topic research import rejects batching, duplicate paths and traversal", () => {
  assert.throws(() => prepareResearchImport(root, "phenibut", []), /exactly one/);
  assert.throws(() => prepareResearchImport(root, "phenibut", [article, article]), /exactly one|Duplicate/);
  for (const relativePath of ["substances/other.md", "../outside.md", "outcomes/../../outside.md"])
    assert.throws(() => prepareResearchImport(root, "phenibut", [article, { relativePath, source }]), /Only same-topic/);
});

test("research acquisition validates a full corpus and round trip without writing", () => {
  const prepared = prepareResearchImport(root, "phenibut", [article]);
  assert.equal(prepared.length, 1);
  assert.equal(prepared[0].parsed.order, 244);
  assert.equal(readFileSync(path.join(root, "content/substances/phenibut.md"), "utf8"), source);
  assert.throws(() => prepareResearchImport(root, "phenibut", [{ ...article, source: source.replace(/sourceId: [^\n]+/, "sourceId: nonexistent") }]), /unknown source/);
  assert.throws(() => prepareResearchImport(root, "phenibut", [{ ...article, source: source + "\n\uE200cite\uE202turn1search0\uE201" }]), /citation token/);
});

test("acquisition cannot silently change existing shared definitions", () => {
  const relativePath = "outcomes/attention.md";
  const concept = readFileSync(path.join(root, "content", relativePath), "utf8");
  assert.throws(() => prepareResearchImport(root, "phenibut", [article, { relativePath, source: concept.replace("label: Attention", "label: General intelligence") }]), /shared concept/);
});
