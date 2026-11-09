---
slug: multivitamin
name: Multivitamin
subtitle: Vitamin and mineral
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Vitamin and mineral
tags:
  - alertness
  - episodic-memory
  - verbal-fluency
  - cognitive-performance
  - homocysteine
  - fatigue-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was reported in the linked studies.
  sourceId: optihealth-substance-01a08b04-2f8c-74d6-8dae-929efefee332
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-22330823
x-shape:
  - slug
  - name
  - subtitle
  - summary
  - description
  - aliases
  - formula
  - molecularWeight
  - pubchemCid
  - smiles
  - category
  - tags
  - accent
  - evidenceNote
  - reviewedAt
  - editorialStatus
  - halfLife
  - pkObservations
  - kinetics
  - modifiers
  - doses
  - effects
  - outcomes
  - claims
  - mechanisms
  - cautions
  - interactions
  - experienceLinks
  - references
  - legal
  - externalWikiLinks
x-order: 1664
---

## Summary

Multivitamins combine several vitamins and minerals. Studies examine cognitive performance using specific formulations and populations.

## Description

The linked studies used different products and outcomes: a Supradyn multivitamin/mineral in 216 healthy women for 9 weeks, a multivitamin/mineral/herbal product in 50 older men for 8 weeks, and daily multivitamin versus placebo in the Physicians’ Health Study II. Results cannot be generalized to every multivitamin formulation.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
[]
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: multivitamin-alertness-22095836
  conceptId: alertness
  name: Alertness and daily functioning
  direction: Increased
  evidence: Human research
  description: A multivitamin/mineral/herbal formulation improved alertness and general daily functioning versus placebo after 8 weeks.
  sourceId: pubmed-22095836
  population: 50 healthy men, aged 50–69
  exposure: Multivitamin/mineral/antioxidant/herbal formulation for 8 weeks
  instrument: Mood and stress questionnaires
  magnitude: Significant between-group improvement; estimate not reported in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: multivitamin-delayed-recall-22330823
  conceptId: episodic-memory
  name: Delayed free recall
  direction: Variable
  evidence: Human research
  description: The meta-analysis found no improvement in delayed free recall.
  sourceId: pubmed-22330823
  population: 3,200 participants across 10 randomized trials
  exposure: Chronic oral multivitamin supplementation
  instrument: Delayed free-recall tests
  magnitude: SMD -0.14 (95% CI -0.43 to 0.14; p=0.33)
  reportType: measured-assessment
- id: multivitamin-verbal-fluency-22330823
  conceptId: verbal-fluency
  name: Verbal fluency
  direction: Variable
  evidence: Human research
  description: The meta-analysis found no improvement in verbal fluency.
  sourceId: pubmed-22330823
  population: 3,200 participants across 10 randomized trials
  exposure: Chronic oral multivitamin supplementation
  instrument: Verbal-fluency tests
  magnitude: SMD 0.06 (95% CI -0.05 to 0.18; p=0.26)
  reportType: measured-assessment
- id: multivitamin-global-cognition-24490265
  conceptId: cognitive-performance
  name: Global cognition
  direction: Variable
  evidence: Human research
  description: In the Physicians’ Health Study II cognitive substudy, daily multivitamin did not change global cognition over up to 12 years.
  sourceId: pubmed-24490265
  population: 5,947 male physicians aged 65 years or older
  exposure: Daily multivitamin versus placebo; up to 12 years
  instrument: Composite of five telephone cognitive tests
  magnitude: Mean difference in cognitive change -0.01 standard units (95% CI -0.04 to 0.02)
  reportType: measured-assessment
- id: multivitamin-verbal-memory-24490265
  conceptId: episodic-memory
  name: Verbal memory
  direction: Variable
  evidence: Human research
  description: The same trial found no difference in verbal-memory change.
  sourceId: pubmed-24490265
  population: 5,947 male physicians aged 65 years or older
  exposure: Daily multivitamin versus placebo; up to 12 years
  instrument: Verbal-memory composite
  magnitude: Mean difference in cognitive change -0.005 standard units (95% CI -0.04 to 0.03)
  reportType: measured-assessment
- id: multivitamin-homocysteine-20737518
  conceptId: homocysteine
  name: Homocysteine
  direction: Decreased
  evidence: Human research
  description: A 102-participant subsection showed significant homocysteine reductions after the 9-week multivitamin/mineral intervention.
  sourceId: pubmed-20737518
  population: Subsection of 102 participants from the randomized trial
  exposure: Supradyn multivitamin/mineral for 9 weeks
  instrument: Plasma homocysteine
  magnitude: Estimate not reported in abstract
  reportType: measured-assessment
- id: multivitamin-immediate-free-recall-22330823
  conceptId: episodic-memory
  name: Immediate free recall
  direction: Increased
  evidence: Human research
  description: Meta-analysis of 10 randomized trials (n=3,200) found improved immediate free recall with chronic oral multivitamin supplementation (SMD 0.32, 95% CI 0.09–0.56).
  sourceId: pubmed-22330823
  population: 3,200 participants across 10 randomized placebo-controlled trials
  exposure: Chronic oral multivitamin supplementation for at least 1 month
  instrument: Immediate free-recall tests
  magnitude: SMD 0.32 (95% CI 0.09–0.56)
  reportType: measured-assessment
- id: multivitamin-mood-fatigue-20737518
  conceptId: fatigue-severity
  name: Task-related fatigue and mood
  direction: Decreased
  evidence: Human research
  description: In 216 healthy women aged 25–50, a Supradyn multivitamin/mineral attenuated the negative effects of extended multitasking on mood/fatigue after 9 weeks.
  sourceId: pubmed-20737518
  population: 216 healthy women, aged 25–50
  exposure: Supradyn multivitamin/mineral for 9 weeks
  instrument: Multi-Tasking Framework mood/fatigue measures
  magnitude: Not quantified in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Nutrient and oxidative-stress pathways proposed in the long-term trial
  description: The full text notes roles for vitamins C/E and beta-carotene in oxidative protection, B vitamins in neurotransmitter and homocysteine metabolism, and vitamin A in neuronal survival and synaptic plasticity; these are mechanistic rationale, not proof of clinical benefit.
  sourceId: pubmed-24490265
```

## Cautions

```yaml
- title: Formulation and population limits
  description: Products, doses, baseline nutritional status, and populations differed across trials; the long-term null result may reflect low doses or well-nourished participants.
  sourceId: pubmed-24490265
```

## Claims

```yaml
- id: multivitamin-claim-immediate-recall-22330823
  assertion: Chronic multivitamin supplementation improved immediate free recall in a meta-analysis of randomized trials.
  relation: supported-by
  participants:
    - entityId: substance:multivitamin
      role: intervention
    - entityId: tag:episodic-memory
      role: outcome
  context: Ten randomized trials, n=3,200; effect was specific to immediate free recall.
  sourceIds:
    - pubmed-22330823
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Formulations and tests varied; this does not establish benefit for all products.
- id: multivitamin-claim-long-term-cognition-24490265
  assertion: Daily multivitamin prevented cognitive decline in older men.
  relation: contradicted-by
  participants:
    - entityId: substance:multivitamin
      role: intervention
    - entityId: tag:cognitive-performance
      role: outcome
  context: 12-year randomized Physicians’ Health Study II cognitive substudy.
  sourceIds:
    - pubmed-24490265
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Participants were older male physicians and may have been well nourished.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: optihealth-substance-01a08b04-2f8c-74d6-8dae-929efefee332
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f8c-74d6-8dae-929efefee332
  kind: catalog-identity
  insight: Canonical identity label only.
  limitation: Not an efficacy or safety review.
- id: pubmed-22330823
  title: "The effects of multivitamins on cognitive performance: a systematic review and meta-analysis."
  authors: Natalie A Grima, Matthew P Pase, Helen Macpherson, Andrew Pipingas
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22330823/
  kind: PubMed publication
  insight: Ten randomized trials (n=3,200); immediate free recall improved, delayed recall and verbal fluency did not.
  limitation: Product formulations and tests varied.
  pmid: "22330823"
  doi: 10.3233/JAD-2011-111751
- id: pubmed-20737518
  title: Effects of a multi-vitamin/mineral supplement on cognitive function and fatigue during extended multi-tasking.
  authors: Crystal F Haskell, Bernadette Robertson, Emma Jones, Joanne Forster, Rebecca Jones, Anthea Wilde, Silvia Maggini, David O Kennedy
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20737518/
  kind: PubMed publication
  insight: Randomized trial in 216 healthy women; 9-week Supradyn supplementation attenuated task-related mood/fatigue effects and improved accuracy.
  limitation: Product-specific result; abstract did not report dose.
  pmid: "20737518"
  doi: 10.1002/hup.1144
- id: pubmed-22095836
  title: The effect of multivitamin supplementation on mood and stress in healthy older men.
  authors: Elizabeth Harris, Joni Kirk, Renee Rowsell, Luis Vitetta, Avni Sali, Andrew B Scholey, Andrew Pipingas
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22095836/
  kind: PubMed publication
  insight: In 50 healthy men aged 50–69, an 8-week multivitamin/mineral/herbal product improved alertness and reduced depression/anxiety/stress scores.
  limitation: Combined vitamin, mineral, antioxidant and herbal formulation.
  pmid: "22095836"
  doi: 10.1002/hup.1245
- id: pubmed-24490265
  title: "Long-term multivitamin supplementation and cognitive function in men: a randomized trial."
  authors: Francine Grodstein, Jacqueline O'Brien, Jae Hee Kang, Rimma Dushkes, Nancy R Cook, Olivia Okereke, JoAnn E Manson, Robert J Glynn, Julie E Buring, Michael Gaziano, Howard D Sesso
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24490265/
  kind: PubMed publication
  insight: Daily multivitamin versus placebo in 5,947 male physicians aged 65+ showed no cognitive benefit over up to 12 years.
  limitation: Doses may have been too low and participants well nourished; full text PMC3858850 inspected.
  pmid: "24490265"
  doi: 10.7326/0003-4819-159-12-201312170-00006
  pmcid: PMC3858850
```

## Legal

```yaml
[]
```
