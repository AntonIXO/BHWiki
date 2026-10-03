import assert from "node:assert/strict";
import { substances, tags, hyperedges } from "../src/lib/content";
import {
  getDataMode,
  getEvidenceRecord,
  getObservationPage,
  getPairInteractions,
  getRelationship,
} from "../src/lib/repository";
import {
  articleEvidence,
  filterObservations,
  matchInteractions,
  observationRows,
} from "../src/lib/research";
import { observationFilterNames } from "../src/lib/research-types";

async function main() {
  if (getDataMode() !== "database")
    throw new Error(
      "Research parity verification requires database mode with the read-only connection.",
    );
  let queries = 0;
  for (const tag of tags.filter(
    (t) => t.kind === "effect" || t.kind === "outcome",
  )) {
    const kind = tag.kind as "effect" | "outcome";
    const rows = substances
      .flatMap((s) => observationRows(s, kind))
      .filter((r) => r.observation.conceptId === tag.id);
    const expected = filterObservations(rows, {});
    assert.deepEqual(await getObservationPage(tag.id, kind), expected);
    queries++;
    for (const field of observationFilterNames) {
      const value = expected.facets[field][0]?.value;
      if (!value) continue;
      assert.deepEqual(
        await getObservationPage(tag.id, kind, { [field]: value }),
        filterObservations(rows, { [field]: value }),
      );
      queries++;
    }
    assert.deepEqual(
      await getObservationPage(tag.id, kind, { substance: "absent" }),
      filterObservations(rows, { substance: "absent" }),
    );
    queries++;
  }
  for (const s of substances)
    for (const evidence of articleEvidence(s))
      assert.deepEqual(await getEvidenceRecord(evidence.key), evidence);
  for (const e of hyperedges) {
    const actual = await getRelationship(e.id);
    assert.ok(actual);
    assert.deepEqual([...actual.members].sort(), [...e.members].sort());
    assert.deepEqual(actual.directedSteps, e.directedSteps ?? []);
  }
  const a = substances.find((s) => s.slug === "delta-9-thc")!,
    b = substances.find((s) => s.slug === "ethanol")!;
  assert.deepEqual(
    (await getPairInteractions(a.slug, b.slug))?.result,
    matchInteractions(a, b),
  );
  assert.deepEqual(
    (await getPairInteractions(b.slug, a.slug))?.result,
    matchInteractions(a, b),
  );
  console.log(
    `Research database/bundled parity passed: ${queries} filtered queries, all evidence records, relationships, and reversed pair lookup.`,
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
