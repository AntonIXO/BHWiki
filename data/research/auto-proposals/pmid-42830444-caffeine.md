# Automated editorial proposal

- Proposal ID: proposal:3382b29f6e6fdad64f0c12bc471ddc6c
- Substance: caffeine
- Suggestion type: new-reference
- Source: [Acute Caffeine Intake Does Not Modulate Active or Reactive Inhibition in Non-Clinical Young Adults, and ADHD Symptoms Do Not Moderate Its Effects.](https://pubmed.ncbi.nlm.nih.gov/42830444/)
- PMID: 42830444
- DOI: 10.1002/hup.70067
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Caffeine is consumed for its presumed cognitive benefits, yet controlled studies have repeatedly failed to find effects on inhibitory control. Cross-sectional work suggests that people with elevated attention-deficit/hyperactivity disorder (ADHD) symptoms may benefit from chronic, moderate caffeine consumption, but whether acute intake improves cognition in proportion to symptom severity has not been tested experimentally.<h4>Aims</h4>We tested whether 250 mg of caffeine improves active inhibition (withholding a prepared response) and reactive inhibition (resolving response conflict), and whether ADHD symptom severity moderates these effects.<h4>Methods</h4>In a preregistered, randomised, double-blind, placebo-controlled crossover trial, a nonclinical sample of 36 young adults received 250 mg of caffeine or placebo in counterbalanced order, with testing 45 min after ingestion. Active inhibition was assessed with a Go/No-Go task (204 trials), reactive inhibition with an arrow flanker task (200 trials) and symptoms with the Adult ADHD Self-Report Scale. Mixed-effects models included treatment, symptom severity, their interaction and ten covariates; Bayes factors quantified evidence for the null.<h4>Results</h4>Both tasks produced their benchmark effects (dz = 1.24 and 1.09) and all indices were reliable (split-half r = 0.73-0.98). Caffeine affected neither commission errors (BF01 = 4.98), response criterion (5.14), Go reaction time (2.83), reaction time variability (4.35), flanker reaction time (5.49) nor flanker accuracy (5.09). ADHD symptoms moderated no effect (15 preregistered tests; smallest p = 0.514), yet predicted performance itself (flanker accuracy r = -0.42), indicating that the null is not due to an insensitive measure.<h4>Conclusions</h4>Caffeine produced no acute benefit for either form of inhibition, and ADHD symptoms did not moderate its effects. Bayes factors supported the absence rather than the nondetection of these effects, arguing against an acute improvement of inhibitory control that scales with ADHD symptom severity in nonclinical young adults. Whether this also holds for chronic consumption or for adults with diagnosed ADHD remains to be tested.

## Proposed structured change

```json
{
  "title": "Acute Caffeine Intake Does Not Modulate Active or Reactive Inhibition in Non-Clinical Young Adults, and ADHD Symptoms Do Not Moderate Its Effects.",
  "studyDesign": "preregistered, randomised, double-blind, placebo-controlled crossover trial",
  "sample": "36 nonclinical young adults",
  "intervention": "250 mg caffeine",
  "comparator": "placebo",
  "assessmentTiming": "45 min after ingestion"
}
```

## Model rationale

The abstract reports a controlled human trial directly evaluating acute caffeine effects on active and reactive inhibition.

## Verbatim evidence from the abstract

> In a preregistered, randomised, double-blind, placebo-controlled crossover trial, a nonclinical sample of 36 young adults received 250 mg of caffeine or placebo in counterbalanced order, with testing 45 min after ingestion.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
