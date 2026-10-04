import assert from "node:assert/strict";
import test from "node:test";
import { disclosureLabels, validateSourceDisclosure } from "../src/lib/source-disclosures";
import { validateSubstance } from "../src/lib/validate-content";
import { substances } from "../src/lib/content";
import { parseContentSource, serializeContent } from "../src/lib/content-markdown";

test("legacy funding prose never implies independence or a conflict classification", () => {
  const labels = disclosureLabels({ funding: "Public grant and manufacturer involvement not investigated." });
  assert.equal(labels.sponsorship, "Funding not assessed");
  assert.equal(labels.conflicts, "Conflicts not assessed");
  assert.equal(labels.commercial, false);
  assert.doesNotThrow(() => validateSourceDisclosure({ funding: "Public grant" }, "reference"));
});

test("assessed disclosure labels require supporting text and an inspected source", () => {
  for (const status of ["industry-funded", "non-industry-funded", "mixed-funding", "no-external-funding", "not-reported"]) {
    assert.throws(() => validateSourceDisclosure({ sponsorshipStatus: status }, "reference"), /requires funding/);
  }
  for (const status of ["declared", "none-declared", "not-reported"]) {
    assert.throws(() => validateSourceDisclosure({ conflictOfInterestStatus: status, conflictsOfInterest: "Not assessed.", disclosureUrl: "https://example.org/study" }, "reference"), /unassessed disclosure/);
  }
  assert.throws(() => validateSourceDisclosure({ sponsorshipStatus: "independent" }, "reference"), /invalid sponsorshipStatus/);
  assert.throws(() => validateSourceDisclosure({ disclosureUrl: "javascript:alert(1)" }, "reference"), /HTTPS/);
  assert.throws(() => validateSourceDisclosure({ disclosureUrl: "https://name:secret@example.org/study" }, "reference"), /HTTPS/);
});

test("commercial funding and declared conflicts survive Markdown and article validation", () => {
  const article = structuredClone(substances[0]);
  Object.assign(article.references[0], {
    funding: "Fixture manufacturer funded the study.", sponsorshipStatus: "industry-funded",
    conflictsOfInterest: "Fixture author reported manufacturer employment.", conflictOfInterestStatus: "declared",
    disclosureUrl: "https://example.org/study#disclosures",
  });
  const relative = `substances/${article.slug}.md`;
  const parsed = parseContentSource(relative, serializeContent(relative, { collection: "substances", record: article, order: 0 }));
  if (parsed.collection !== "substances") throw new Error("Expected article");
  validateSubstance(parsed.record);
  assert.deepEqual(parsed.record.references, article.references);
  const labels = disclosureLabels(parsed.record.references[0]);
  assert.equal(labels.commercial, true);
  assert.equal(labels.declaredConflict, true);
});
