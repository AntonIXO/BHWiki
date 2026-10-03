import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { formatSpan, elapsedPhases } from "../src/lib/duration";
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

test("duration ranges preserve units and do not imply elapsed positions", () => {
  assert.equal(formatSpan({ min: 20, max: 40, unit: "minutes" }), "20–40 min");
  assert.equal(formatSpan({ min: 2, max: 2, unit: "hours" }), "2 h");
  assert.equal(elapsedPhases({ route: "Oral", population: "Fixture", sourceId: "source", note: "Fixture", total: null, phases }).length, 0);
});

test("the timeline retains cited prose and requires elapsed semantics for a chart", () => {
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
  assert.equal(timed.includes("data-duration-bar"), false);
  assert.match(timed, /Time basis not assessed/);
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
