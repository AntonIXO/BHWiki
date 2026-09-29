import { test } from "node:test";
import assert from "node:assert/strict";
import { fractionRemaining, getEliminationModel } from "../src/lib/kinetics";
import type { PKObservation } from "../src/lib/types";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { KineticsChart } from "../src/components/kinetics-chart";

const observation: PKObservation = {
  id: "psilocin-observation", analyte: "Psilocin", route: "Oral", formulation: "Psilocybin",
  population: "Healthy adults", endpoint: "elimination-half-life", statistic: "study-mean",
  value: 3, low: null, high: null, unit: "hours", context: "Measured active metabolite after oral psilocybin.",
  sourceId: "study", modelEligible: true,
};

test("first-order decay begins at one and halves at each half-life", () => {
  assert.equal(fractionRemaining(0, 3), 1);
  assert.equal(fractionRemaining(3, 3), 0.5);
  assert.equal(fractionRemaining(6, 3), 0.25);
  assert.equal(fractionRemaining(15, 3), 0.03125);
  assert.equal(fractionRemaining(Number.MAX_VALUE, Number.MIN_VALUE), 0);
});

test("decay rejects invalid elapsed times and half-lives", () => {
  for (const value of [-1, NaN, Infinity, -Infinity]) assert.throws(() => fractionRemaining(value, 3), RangeError);
  for (const value of [0, -1, NaN, Infinity, -Infinity]) assert.throws(() => fractionRemaining(1, value), RangeError);
});

test("the modeled analyte remains psilocin rather than its administered parent psilocybin", () => {
  const model = getEliminationModel(observation);
  assert.ok(model);
  assert.equal(model.analyte, "Psilocin");
  assert.notEqual(model.analyte, observation.formulation);
  assert.equal(model.statisticLabel, "Study mean");
  assert.equal(model.initialHalfLife, 3);
  assert.equal(model.adjustable, false);
});

test("a reported range has an illustrative midpoint without being relabeled a mean", () => {
  const model = getEliminationModel({ ...observation, statistic: "reported-range", value: null, low: 2, high: 6 });
  assert.ok(model);
  assert.equal(model.statisticLabel, "Reported range");
  assert.equal(model.initialHalfLife, 4);
  assert.equal(model.adjustable, true);
  assert.equal(getEliminationModel({ ...observation, statistic: "reported-range", low: 3, high: 3 })?.adjustable, false);
});

test("mean and approximate observations use their explicit value and cannot infer a range", () => {
  for (const statistic of ["study-mean", "approximate"] as const) {
    const model = getEliminationModel({ ...observation, statistic, low: 1, high: 10 });
    assert.equal(model?.adjustable, false);
    assert.equal(model?.minimum, 3);
    assert.equal(model?.maximum, 3);
    assert.equal(getEliminationModel({ ...observation, statistic, value: null, low: 1, high: 10 }), null);
  }
});

test("missing, unsuitable and not-established observations never produce a model", () => {
  assert.equal(getEliminationModel(undefined), null);
  assert.equal(getEliminationModel({ ...observation, modelEligible: false }), null);
  assert.equal(getEliminationModel({ ...observation, statistic: "not-established" }), null);
  assert.equal(getEliminationModel({ ...observation, analyte: " " }), null);
  for (const value of [null, 0, -1, NaN, Infinity, Number.MAX_VALUE]) assert.equal(getEliminationModel({ ...observation, value }), null);
  for (const [low, high] of [[null, 5], [2, null], [0, 5], [5, 2], [NaN, 5], [2, Infinity]]) {
    assert.equal(getEliminationModel({ ...observation, statistic: "reported-range", low, high }), null);
  }
});

test("the rendered mean chart names its analyte, context and source without a slider", () => {
  const html = renderToStaticMarkup(createElement(KineticsChart, { observation, sourceHref: "#reference-study" }));
  assert.match(html, /Psilocin remaining over time/);
  assert.match(html, /Study mean/);
  assert.match(html, /Healthy adults/);
  assert.match(html, /Psilocybin/);
  assert.match(html, /href="#reference-study"/);
  assert.doesNotMatch(html, /type="range"/);
  assert.doesNotMatch(html, /NaN|Infinity/);
});

test("a range chart describes its illustrative choice and exposes an accessible slider", () => {
  const html = renderToStaticMarkup(createElement(KineticsChart, { observation: { ...observation, statistic: "reported-range", value: null, low: 2, high: 6 }, sourceHref: "#reference-study" }));
  assert.match(html, /Illustrative chosen half-life/);
  assert.match(html, /midpoint is the initial illustrative choice/);
  assert.match(html, /type="range"/);
  assert.match(html, /aria-valuetext="4 hours"/);
  assert.match(html, /aria-describedby=/);
});

test("unavailable models retain source context and do not draw a curve or slider", () => {
  for (const unavailable of [undefined, { ...observation, modelEligible: false }, { ...observation, value: NaN }]) {
    const html = renderToStaticMarkup(createElement(KineticsChart, { observation: unavailable, sourceHref: "#reference-study" }));
    assert.match(html, /model is not established/);
    assert.doesNotMatch(html, /<svg|type="range"/);
    if (unavailable) assert.match(html, /href="#reference-study"/);
  }
});
