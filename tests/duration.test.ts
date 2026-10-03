import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { formatSpan, phaseWeights, spanMinutes } from "../src/lib/duration";
import { DurationTimeline } from "../src/components/duration-timeline";
import { validateSubstance } from "../src/lib/validate-content";
import { substances } from "../src/lib/content";
import type { DurationPhase, Substance } from "../src/lib/types";

const phases: DurationPhase[] = [
  { name: "onset", min: 20, max: 40, unit: "minutes" },
  { name: "comeup", min: null, max: null, unit: "minutes" },
  { name: "peak", min: 1, max: 2, unit: "hours" },
  { name: "offset", min: 0, max: 0, unit: "minutes" },
  { name: "after-effects", min: 30, max: null, unit: "minutes" },
];

test("phase weights use midpoints in minutes and skip empty spans", () => {
  assert.equal(spanMinutes({ min: 1, max: 2, unit: "hours" }), 90);
  assert.equal(spanMinutes({ min: null, max: null, unit: "minutes" }), null);
  assert.equal(spanMinutes({ min: 0, max: 0, unit: "minutes" }), null);
  const weights = phaseWeights(phases);
  assert.deepEqual(weights.map((segment) => segment.name), ["onset", "peak", "after-effects"]);
  assert.equal(weights.reduce((sum, segment) => sum + segment.weight, 0), 1);
  assert.equal(weights[0]?.weight, 30 / 150);
  assert.equal(weights[1]?.weight, 90 / 150);
  assert.equal(weights[2]?.weight, 30 / 150);
  assert.equal(formatSpan({ min: 20, max: 40, unit: "minutes" }), "20–40 min");
  assert.equal(formatSpan({ min: 2, max: 2, unit: "hours" }), "2 h");
});

test("the timeline lists cited prose and paints a bar only for numeric phases", () => {
  const caffeine = substances.find((substance) => substance.slug === "caffeine")!;
  const fallback = renderToStaticMarkup(createElement(DurationTimeline, {
    accent: caffeine.accent,
    kinetics: caffeine.kinetics,
    citationFor: () => createElement("span", null, "source"),
  }));
  assert.match(fallback, /Subjective onset varies/);
  assert.match(fallback, /Not established/);
  assert.equal(fallback.includes("data-duration-bar"), false);

  const timed = renderToStaticMarkup(createElement(DurationTimeline, {
    accent: caffeine.accent,
    kinetics: {
      ...caffeine.kinetics,
      timeline: [{
        route: "Oral",
        population: "Adults in the cited review",
        sourceId: caffeine.kinetics.sourceId,
        note: "Illustrative fixture.",
        total: { min: 3, max: 6, unit: "hours" },
        phases,
      }],
    },
    citationFor: () => createElement("span", null, "source"),
  }));
  assert.match(timed, /data-duration-bar/);
  assert.match(timed, /20–40 min/);
  assert.match(timed, /3–6 h/);
});

test("a duration route must cite a reference on the article", () => {
  const article = structuredClone(substances[0]) as Substance;
  article.kinetics.timeline = [{
    route: "Oral",
    population: "Cited adults",
    sourceId: "missing-duration-source",
    note: "Not on this article.",
    total: null,
    phases: [],
  }];
  assert.throws(() => validateSubstance(article), /unknown source/);
});
