---
slug: d-serine
name: D-Serine
subtitle: D-serine is an amino acid involved in NMDA-receptor signalling.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Amino acid and derivative
tags:
  - anxiety
  - spatial-learning
  - verbal-learning
  - cognitive-performance
  - mood
  - attention
  - nmda-receptor
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2f02-75a8-b3a8-79e489f85317
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f02-75a8-b3a8-79e489f85317
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
x-order: 1402
---

## Summary

D-serine is an amino acid involved in NMDA-receptor signalling. Studies explore its effects on learning and cognition.

## Description

The 2.1 g crossover challenge enrolled 35 healthy adults aged 23–29 years and found a ≥200-fold serum D-serine rise at 2 hours, improved CPT-IP vigilance and selected RAVLT performance, and reduced sadness/anxiety VAS scores (PMID 25554623). The older-adult crossover trial enrolled 50 healthy participants (mean age 73) and found a Groton Maze legal-error benefit (F(3,38)=4.74, p=0.03; effect size d=1.15), with no significant effects on n-back, set-shifting, visual attention or mood (PMID 26933803; PMC4914255).

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Healthy-young-adult crossover challenge
  amount: 2.1 g
  quantity: 2.1
  quantityMax: null
  unit: g
  ingredient: D-serine
  formulation: Oral D-serine
  route: Oral
  frequency: Single dose
  duration: Acute testing with 2-hour sampling
  population: 35 healthy adults aged 23-29 years
  purpose: Mood and cognition challenge
  sourceCategory: research
  note: Dose and oral route reported in the PubMed abstract.
  sourceId: pubmed-25554623
- label: Older-adult crossover study
  amount: 30 mg/kg
  quantity: 30
  quantityMax: null
  unit: mg/kg
  ingredient: D-serine
  formulation: D-serine diluted in orange juice
  route: Oral
  frequency: Single dose per session
  duration: Testing 1.5 hours after administration
  population: 50 healthy older adults; mean age 73 years
  purpose: Spatial learning and cognition study
  sourceCategory: research
  note: Dose, formulation and timing retrieved from PMC full text; this is a study exposure, not a regimen recommendation.
  sourceId: pubmed-26933803
```

## Pharmacokinetics

```yaml
- id: d-serine-serum-rise-25554623
  analyte: D-serine
  route: Oral
  formulation: D-serine
  population: 35 healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Serum D-serine increased by at least 200-fold at 2 hours after the 2.1 g oral dose; this is not an elimination half-life.
  sourceId: pubmed-25554623
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: d-serine-affect-25554623
  conceptId: anxiety
  name: Subjective anxiety and depression feelings
  direction: Decreased
  evidence: Human research
  description: The 2.1 g challenge reduced VAS-measured anxiety and depression feelings at the reported assessment.
  sourceId: pubmed-25554623
  population: 35 healthy adults
  exposure: D-serine 2.1 g orally
  instrument: Mood-related visual analogue scales
  magnitude: null
  reportType: measured-assessment
- id: d-serine-spatial-learning-26933803
  conceptId: spatial-learning
  name: Spatial learning and problem solving
  direction: Increased
  evidence: Human research
  description: In healthy older adults, D-serine reduced legal errors on the Groton Maze Learning test; other cognitive domains were not significantly changed.
  sourceId: pubmed-26933803
  population: 50 healthy older adults, mean age 73
  exposure: D-serine 30 mg/kg orally
  instrument: Groton Maze Learning Test
  magnitude: F(3,38)=4.74, p=0.03; effect size d=1.15 for legal errors
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: d-serine-verbal-retention-25554623
  conceptId: verbal-learning
  name: Verbal retention under interference
  direction: Increased
  evidence: Human research
  description: D-serine preferentially improved RAVLT list 7 performance, reflecting retention over interference, in healthy adults.
  sourceId: pubmed-25554623
  population: 35 healthy adults
  exposure: D-serine 2.1 g orally
  instrument: Rey Auditory Verbal Learning Test
  magnitude: null
  reportType: measured-assessment
- id: d-serine-other-cognition-26933803
  conceptId: cognitive-performance
  name: Other cognitive domains
  direction: Variable
  evidence: Human research
  description: The older-adult trial found no significant D-serine effect on n-back accuracy, set-shifting errors or visual-attention errors.
  sourceId: pubmed-26933803
  population: 50 healthy older adults
  exposure: D-serine 30 mg/kg orally
  instrument: N-back, set-shifting and visual-attention tests
  magnitude: p>0.1 for n-back; p=0.47 set shifting; p=0.32 visual attention (full-text table)
  reportType: measured-assessment
- id: d-serine-mood-26933803
  conceptId: mood
  name: Mood
  direction: Variable
  evidence: Human research
  description: D-serine was not associated with a significant mood change in healthy older adults.
  sourceId: pubmed-26933803
  population: 50 healthy older adults
  exposure: D-serine 30 mg/kg orally
  instrument: Mood visual analogue scale
  magnitude: p>0.05
  reportType: measured-assessment
- id: d-serine-attention-vigilance-25554623
  conceptId: attention
  name: Attention and vigilance
  direction: Increased
  evidence: Human research
  description: A single 2.1 g oral dose improved CPT-IP D-prime attention/vigilance in healthy adults.
  sourceId: pubmed-25554623
  population: 35 healthy adults aged 23-29 years
  exposure: D-serine 2.1 g orally
  instrument: Continuous Performance Test-Identical Pairs
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: NMDA glycine-site co-agonism
  description: D-serine is an endogenous obligatory co-agonist at the NMDA receptor glycine site, supporting glutamatergic synaptic plasticity relevant to learning and memory.
  sourceId: pubmed-25554623
- title: Exposure-response association
  description: In the older-adult trial, larger plasma D-serine increases were associated with larger Groton Maze improvement (reported r2=-0.19, p=0.009; direction reflects the error-ratio outcome).
  sourceId: pubmed-26933803
```

## Cautions

```yaml
- title: Acute small-sample evidence
  description: Both studies were acute randomized crossover experiments in healthy volunteers; long-term efficacy and safety were not established.
  sourceId: pubmed-25554623
- title: Limited domain specificity
  description: The older-adult study found no significant effects on n-back, set shifting, visual attention or mood despite the Groton Maze result.
  sourceId: pubmed-26933803
- title: Higher-dose safety unknown
  description: The full text notes that safety of evaluating higher D-serine doses in older adults had not been assessed.
  sourceId: pubmed-26933803
```

## Claims

```yaml
- id: d-serine-claim-young-adult-cognition
  assertion: A single 2.1 g oral dose of D-serine improved selected attention, vigilance and verbal-retention measures in healthy young adults.
  relation: experimental-effect
  participants:
    - entityId: substance:d-serine
      role: intervention
    - entityId: tag:cognitive-performance
      role: outcome
  context: Randomized controlled crossover challenge in 35 adults aged 23-29 years.
  sourceIds:
    - pubmed-25554623
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute study with multiple neuropsychological endpoints.
- id: d-serine-claim-older-spatial-learning
  assertion: A single 30 mg/kg oral D-serine dose improved Groton Maze spatial learning/problem solving in healthy older adults.
  relation: experimental-effect
  participants:
    - entityId: substance:d-serine
      role: intervention
    - entityId: tag:spatial-learning
      role: outcome
  context: Randomized double-blind crossover study; 50 healthy older adults.
  sourceIds:
    - pubmed-26933803
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Benefit was limited to one task; other domains and mood were null.
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
- id: optihealth-substance-01a08b04-2f02-75a8-b3a8-79e489f85317
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f02-75a8-b3a8-79e489f85317
  kind: catalog-identity
  insight: Canonical D-serine identity provenance.
  limitation: Identity record, not efficacy or safety evidence.
- id: pubmed-26933803
  title: The effect of D-serine administration on cognition and mood in older adults.
  authors: Marcos Avellar; Linda Scoriels; Caroline Madeira; et al.
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26933803/
  kind: PubMed publication
  insight: In 50 healthy older adults, 30 mg/kg D-serine improved Groton Maze performance but not other cognitive tests or mood; PMC full text retrieved.
  limitation: Acute single-dose crossover study; long-term effects and higher-dose safety remain unknown.
  pmid: "26933803"
  pmcid: PMC4914255
  doi: 10.18632/oncotarget.7691
- id: pubmed-25554623
  title: "Behavioral and cognitive effects of the N-methyl-D-aspartate receptor co-agonist D-serine in healthy humans: initial findings."
  authors: Raz Levin; Adi Ein Dor-Abarbanel; Shany Edelman; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25554623/
  kind: PubMed publication
  insight: In 35 healthy adults, 2.1 g D-serine increased serum levels, reduced subjective anxiety/depression feelings and improved selected attention and verbal-retention measures.
  limitation: Acute crossover challenge; no PMC full text retrieved in this pass.
  pmid: "25554623"
  doi: 10.1016/j.jpsychires.2014.12.007
```

## Legal

```yaml
[]
```
