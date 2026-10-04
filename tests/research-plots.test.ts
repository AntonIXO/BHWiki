import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StudyPlots } from "../src/components/study-plots";
import { observationRows } from "../src/lib/research";
import { researchFixture } from "./fixtures/research";

test("a single negative estimate draws a linear plot and its reported interval", () => {
  const { caffeine } = researchFixture();
  const row = observationRows(caffeine, "outcome").at(-1)!;
  const html = renderToStaticMarkup(createElement(StudyPlots, { rows: [row] }));
  assert.match(html, /Linear.*horizontal axis/);
  assert.match(html, /95% CI -3–-1/);
  assert.match(html, /no-effect value \(0\)/);
  assert.doesNotMatch(html, /NaN|Infinity/);
});

test("ratios use a log axis and never invent missing confidence intervals", () => {
  const { caffeine } = researchFixture();
  const row = observationRows(caffeine, "outcome").at(-1)!;
  row.observation.result = {
    ...row.observation.result!,
    measure: "odds-ratio",
    unit: "ratio",
    estimate: 2,
    confidenceInterval: undefined,
  };
  const html = renderToStaticMarkup(createElement(StudyPlots, { rows: [row] }));
  assert.match(html, /Logarithmic.*horizontal axis/);
  assert.match(html, /Interval not curated/);
  assert.match(html, /no-effect value \(1\)/);
  assert.doesNotMatch(html, /NaN|Infinity/);
});
