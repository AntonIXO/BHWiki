import assert from "node:assert/strict";
import test from "node:test";
import { selectGraphCandidates } from "../src/lib/graph-data";

test("oversized focused relationship is omitted whole and sets truncated", () => {
  const result = selectGraphCandidates([{ id: "oversized-context", memberCount: 121 }], 120);
  assert.deepEqual(result.edges, []);
  assert.equal(result.truncated, true);
});

test("fitting candidates preserve omission notice for oversized neighbors", () => {
  const result = selectGraphCandidates([{ id: "fits", memberCount: 3 }, { id: "too-large", memberCount: 121 }], 120);
  assert.deepEqual(result.edges.map((edge) => edge.id), ["fits"]);
  assert.equal(result.truncated, true);
  assert.equal(selectGraphCandidates([{ memberCount: 120 }], 120).truncated, false);
});
