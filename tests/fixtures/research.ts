import { substances, tags, hyperedges } from "../../src/lib/content";
import type { Observation } from "../../src/lib/types";
/** Artificial integration data. Never imported by application code or the publisher. */
export function researchFixture() {
  const corpus = structuredClone({ substances, tags, hyperedges });
  const caffeine = corpus.substances.find((s) => s.slug === "caffeine")!;
  const observation: Observation = {
    ...caffeine.outcomes[0],
    id: "fixture-attention",
    name: "Fixture attention result",
    study: {
      id: "fixture-trial",
      design: "Randomized trial",
      sampleSize: 40,
      populationLabels: ["Fixture adults"],
      comparator: "Placebo",
      route: "Oral",
      formulation: "Fixture tablet",
      durationDays: 14,
      assessmentTime: "Day 14",
      comparedSubstances: ["caffeine", "l-theanine"],
    },
    result: {
      measure: "mean-difference",
      estimate: -2,
      unit: "points",
      instrument: "Fixture task",
      comparator: "Placebo",
      assessmentTime: "Day 14",
      population: "Fixture adults",
      confidenceInterval: { lower: -3, upper: -1, level: 95 },
    },
    conflictingSourceIds: [caffeine.references[1].id],
  };
  caffeine.outcomes.push(observation);
  caffeine.effects[0].reportType = "measured-assessment";
  caffeine.doses[0].foodRelation = "with-food";
  caffeine.doses[0].solubility = "fat-soluble";
  caffeine.doses[0].absorptionNote = "Fixture intake context.";
  caffeine.identificationTests = [{
    name: "Fixture Ehrlich test",
    kind: "presumptive-reagent",
    target: caffeine.name,
    expectedResult: "Fixture color change",
    interpretation: "Presumptive only.",
    limitations: "Does not establish purity or concentration.",
    sourceId: caffeine.references[0].id,
  }];
  caffeine.kinetics.timeline = [
    {
      id: "fixture-elapsed",
      route: "Oral",
      formulation: "Fixture tablet",
      measurement: "subjective",
      population: "Fixture adults",
      sourceId: caffeine.kinetics.sourceId,
      note: "Artificial fixture; not a substance fact.",
      total: { min: 3, max: 4, unit: "hours" },
      phases: [
        {
          name: "onset",
          min: 10,
          max: 30,
          unit: "minutes",
          basis: "elapsed-since-exposure",
        },
        {
          name: "peak",
          min: 1,
          max: 2,
          unit: "hours",
          basis: "elapsed-since-exposure",
        },
      ],
    },
    {
      id: "fixture-durations",
      route: "Oral",
      formulation: "Fixture liquid",
      measurement: "subjective",
      population: "Fixture adults",
      sourceId: caffeine.kinetics.sourceId,
      note: "Independent phase durations for tests.",
      total: null,
      phases: [
        {
          name: "peak",
          min: 1,
          max: 2,
          unit: "hours",
          basis: "phase-duration",
        },
      ],
    },
  ];
  const effect = corpus.tags.find((t) => t.id === "alertness")!;
  effect.details = {
    variations: [
      {
        id: "fixture-variation",
        title: "Fixture variation",
        description: "An artificial variation for testing.",
        sourceUrls: [effect.sourceUrls![0]],
      },
    ],
    reports: [
      {
        title: "Fixture account",
        url: "https://example.org/account",
        context: "An isolated test account.",
        substanceSlugs: ["caffeine"],
      },
    ],
    media: [
      {
        kind: "image",
        url: "https://example.org/illustration.png",
        title: "Fixture illustration",
        description: "Illustrative test image",
        attribution: "Test author",
        license: "CC0",
        sourceUrl: "https://example.org/illustration",
      },
    ],
  };
  corpus.hyperedges.find((e) => e.id === "caffeine-adenosine")!.directedSteps =
    [
      {
        from: "substance:caffeine",
        to: "tag:adenosine-receptor",
        label: "Fixture step",
        sourceUrls: [caffeine.references[0].url],
      },
    ];
  return { corpus, caffeine, observation, effect };
}
