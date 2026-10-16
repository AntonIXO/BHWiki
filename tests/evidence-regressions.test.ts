import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { EvidenceContents } from "../src/components/evidence";
import { SourceDisclosures } from "../src/components/source-disclosures";
import { articleEvidence, relationshipEvidence } from "../src/lib/research";
import { substances, hyperedges } from "../src/lib/content";

const caffeine = substances.find((substance) => substance.slug === "caffeine")!;

test("outcome evidence retains authored study context", () => {
  const record = articleEvidence(caffeine).find(
    (item) => item.title === "Attention-task accuracy",
  );
  assert.ok(record);
  assert.equal(record.context.find((field) => field.label === "Comparator")?.value, "Placebo");
});

test("relationship evidence keeps its authored participant qualification", () => {
  const edge = hyperedges.find((item) => item.id === "caffeine-adenosine")!;
  const html = renderToStaticMarkup(createElement(EvidenceContents, { record: relationshipEvidence(edge) }));
  assert.match(html, /Participants and their roles qualify this assertion/);
});

test("evidence shows meaningful funding text even when the source status is unassessed", () => {
  const html = renderToStaticMarkup(createElement(SourceDisclosures, {
    hideUnassessed: true,
    reference: {
      funding: "Funding not assessed; author affiliations include Unilever.",
      conflictOfInterestStatus: "not-assessed",
    },
  }));
  assert.match(html, /Funding:/);
  assert.match(html, /author affiliations include Unilever/);
});
