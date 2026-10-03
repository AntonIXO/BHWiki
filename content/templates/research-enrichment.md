# Research enrichment

Optional fields activate the research interfaces without changing article components. Keep original claims, exposures and citations in their existing sections. Do not add new substance headings. Values below illustrate the **format only**, not findings about any substance. Replace every example with source-verified data before publishing.

## Observations: Effects and Outcomes YAML

Add a stable, article-local `id` to a record when curating it. IDs use lowercase letters, digits and hyphens. Retain an ID when correcting the same record; use a new ID for a different observation. Legacy records use content-derived keys, so old links can become unavailable after a correction.

```yaml
id: attention-trial-followup
# Existing conceptId, name, direction, evidence, description, sourceId,
# population, exposure, instrument and magnitude remain required.
study:
  id: trial-registry-or-authored-study-id
  design: Randomized placebo-controlled trial
  sampleSize: 40
  populationLabels: [Example study population]
  comparator: Placebo
  route: Oral
  formulation: Example formulation
  durationDays: 14
  assessmentTime: Day 14
  # Optional: only name substances actually compared in the study.
  comparedSubstances: [caffeine, l-theanine]
result:
  measure: mean-difference
  estimate: -2
  unit: points
  instrument: Example instrument and scale version
  comparator: Placebo
  assessmentTime: Day 14
  population: Example study population
  confidenceInterval:
    lower: -3
    upper: -1
    level: 95
conflictingSourceIds: [another-reference-on-this-article]
# Effects only: state the actual reporting method when assessed.
reportType: measured-assessment
```

Supported result measures: `mean-difference`, `standardized-mean-difference`, `odds-ratio`, `risk-ratio`, `hazard-ratio`, `mean`. Estimates may be negative for differences/means; ratios and their intervals must be positive. Confidence levels use percentages, e.g. `95`. Omit an unavailable interval entirely. Do not turn ranges, standard deviations, standard errors or P values into confidence intervals. Existing free-text `magnitude` is never parsed into a graph automatically.

A study identifier names the actual study, not its publication: one trial can have several papers and several outcomes. Comparator, population, instrument, units and assessment time determine separate plot groups. No pooled effect is calculated. Do not create a universal evidence or benefit score.

Missing structured population, design, duration, route or formulation appears under **Not assessed** in filters. Exposure-duration bands are `<1`, `1–7`, `8–30`, and `>30` days. Do not assign metadata from assumptions.

## Interactions YAML

Retain `id`, `name`, `summary`, `sourceId`, and `otherSlug`. For an exact substance, set `otherSlug` to its slug. For an explicitly documented class-wide concern, set `otherSlug: null` and `targetClassId` to an existing concept whose kind is `class`. Do not set both targets. A missing target remains a general caution and never produces a pair match.

Optional enrichment:

```yaml
mechanism: Source-supported mechanism, with its uncertainty.
context: Population, formulation, exposure and limitations.
severity:
  label: The severity characterization used by the source
  sourceId: reference-on-this-article
conflictingSourceIds: [conflicting-reference-on-this-article]
```

The UI does not derive severity from prose. Pair lookup checks both selected articles and preserves the originating article for each assertion.

## Duration YAML

The existing `## Duration` list supports optional `id`, `formulation`, `measurement` (`subjective` or `plasma`), and `analyte`. A plasma record must name its analyte. Keep route, population, sourceId, note, total and phases.

Each phase may declare `basis: elapsed-since-exposure` or `basis: phase-duration`. Numeric `min` and `max` retain the source's units (`minutes` or `hours`). An absolute chart is shown only when every supplied phase has explicit elapsed semantics and both bounds. Otherwise ranges appear independently in text. Do not add phase durations, convert a range midpoint into a mean, or infer felt-effect timing from elimination.

## Effect concept details

Effect concepts may add an optional `details` map to frontmatter; also add `details` to `x-shape`. The original `## Definition` remains unchanged.

```yaml
details:
  variations:
    - id: variation-id
      title: Variation title
      description: Original, source-grounded description.
      sourceUrls: [https://example.org/source]
  reports:
    - title: An individual account
      url: https://example.org/report
      context: Report setting and limitations.
      substanceSlugs: [caffeine]
  media:
    - kind: image
      url: https://example.org/illustration.png
      title: Illustration title
      description: Meaningful alternative description or transcript.
      attribution: Author name
      license: Actual reuse license
      sourceUrl: https://example.org/original
```

Media kinds are `image`, `audio`, and `video`. Videos require an HTTPS `captionsUrl` pointing to captions (WebVTT). Keep audio transcripts in the description. All media is labelled illustrative and loaded only after the reader chooses to show it; audio/video never autoplay. Secure permission and record attribution before adding media. An external PsychonautWiki substance link does not establish an effect-specific report.

## Relationship direction

Relationship frontmatter can add `directedSteps` and list it in `x-shape`:

```yaml
directedSteps:
  - from: substance:caffeine
    to: tag:adenosine-receptor
    label: Exact relationship supported by the cited source
    sourceUrls: [https://example.org/source]
```

Both endpoints must already be distinct members of the relationship. Retain all other members and roles; contextual qualifiers must not disappear. The diagram adds arrows only for these explicit steps. It never creates a causal pathway from shared classification.

## Verification

Run `bun run content:validate` and `bun run test`. Source-check the assertions independently of those checks. The full artificial examples live under `tests/fixtures/`, outside the published collection.
