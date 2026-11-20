# Automated editorial proposal

- Proposal ID: proposal:ae49e8a3fd8237b5f08d4980e6be091f
- Substance: resveratrol
- Suggestion type: new-effect
- Source: [Effect of Aerobic Training Combined with Resveratrol on Spinal Cord IL-6, TNF-α, and Locomotor Recovery after Spinal Cord Injury in Rats](https://doi.org/10.21203/rs.3.rs-10852543/v1)
- PMID: not indexed
- DOI: 10.21203/rs.3.rs-10852543/v1
- Published: 2026-10-27
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <title>Abstract</title> <p> <bold>Study Design</bold> : Controlled experimental animal study. <bold>Objectives</bold> : To investigate the effect of four weeks of aerobic treadmill training combined with resveratrol supplementation on spinal cord interleukin-6 (IL-6) and tumor necrosis factor-alpha (TNF-α) levels and locomotor recovery in a rat model of spinal cord injury (SCI). <bold>Setting</bold> : University-based exercise physiology and animal research laboratory, Bojnourd, Iran. <bold>Methods</bold> : Thirty-six male Wistar rats were allocated to healthy, SCI-control, resveratrol, exercise, and resveratrol + exercise groups. SCI was induced via a standardized weight-drop contusion at T10, and, beginning 14 days post-injury, rats underwent 4 weeks of body-weight-supported treadmill training and/or daily intraperitoneal resveratrol (10 mg/kg). Locomotor recovery was assessed using the Basso-Beattie-Bresnahan (BBB) scale, and spinal cord IL-6 and TNF-α levels were measured by ELISA. <bold>Results</bold> : SCI significantly elevated spinal cord IL-6 and TNF-α relative to healthy controls (P < 0.05). Resveratrol supplementation, alone and combined with exercise, significantly reduced spinal cord IL-6 relative to control, whereas exercise alone did not. The combined resveratrol + exercise group showed the most consistent anti-inflammatory profile, with significantly lower IL-6 than the exercise-alone group, and was the only intervention group with significantly reduced TNF-α. BBB scores improved significantly only in the exercise-containing groups. <bold>Conclusions</bold> : Resveratrol and exercise appear to act through partially distinct mechanisms that combine to produce superior anti-inflammatory and functional outcomes after SCI, supporting their combined use as an adjunct, non-pharmacological rehabilitative strategy. <bold>Sponsorship</bold> : None. </p>

## Proposed structured change

```json
{
  "outcome": "spinal cord IL-6",
  "effect": "Reduced relative to SCI control when administered alone or combined with aerobic exercise",
  "population": "Male Wistar rats with spinal cord injury"
}
```

## Model rationale

The study reports a significant reduction in spinal cord IL-6 with resveratrol supplementation, both alone and in combination with exercise.

## Verbatim evidence from the abstract

> Resveratrol supplementation, alone and combined with exercise, significantly reduced spinal cord IL-6 relative to control

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
