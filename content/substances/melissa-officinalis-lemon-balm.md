---
slug: melissa-officinalis-lemon-balm
name: Melissa officinalis (Lemon balm)
subtitle: Lemon balm is an aromatic herb studied for calmness, mood and cognitive performance..
aliases:
  - Lemon balm
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - mood-response
  - episodic-memory
  - anxiety-symptom-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-25360512
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-25360512
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
  - externalWikiLinks
  - references
  - legal
x-order: 9007199254740991
---

## Summary

Lemon balm is an aromatic herb studied for calmness, mood and cognitive performance.

## Description

The linked studies used encapsulated dried leaf and standardized beverage/yoghurt preparations; effects cannot be generalized across extracts.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Single-dose dried-leaf crossover trial
  amount: 600, 1,000, or 1,600 mg once
  quantity: 600
  quantityMax: 1600
  unit: mg
  ingredient: Melissa officinalis dried leaf
  formulation: Encapsulated dried leaf extract
  route: oral
  frequency: single dose with 7-day washout
  duration: acute; outcomes at 1, 3, and 6 hours
  population: 20 healthy young adults
  purpose: Randomized placebo-controlled cognitive and mood crossover study
  sourceCategory: research
  note: The 1,600 mg dose showed the clearest favorable signal; this is a study exposure, not a dosing recommendation.
  sourceId: pubmed-12888775
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
- id: melissa-calm-memory-12888775
  conceptId: mood-response
  name: Calmness and memory performance
  direction: Increased
  evidence: Human research
  description: In 20 healthy young adults, the highest single dose (1,600 mg) improved memory performance and increased calmness across post-dose assessments; lower doses showed some slower timed-memory performance.
  sourceId: pubmed-12888775
  population: 20 healthy young adults
  exposure: 600, 1,000, or 1,600 mg encapsulated dried leaf once
  instrument: Cognitive Drug Research battery and Bond-Lader visual analog scales
  magnitude: Dose-specific; 1,600 mg most favorable
  reportType: measured-assessment
- id: melissa-mood-25360512
  conceptId: mood-response
  name: Mood under multitasking
  direction: Increased
  evidence: Human research
  description: Two double-blind crossover studies found standardized lemon-balm preparations in beverage or yoghurt generally improved mood and/or cognitive performance, with some dose- and matrix-dependent behavioral costs.
  sourceId: pubmed-25360512
  population: Healthy young adults
  exposure: Standardized lemon-balm beverage or yoghurt preparation
  instrument: Multi-Tasking Framework mood and cognitive measures
  magnitude: Not quantified in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: melissa-memory-12888775
  conceptId: episodic-memory
  name: Memory performance
  direction: Increased
  evidence: Human research
  description: The 1,600 mg dried-leaf dose improved memory performance in the acute crossover trial; preparation-specific effects were observed.
  sourceId: pubmed-12888775
  population: 20 healthy young adults
  exposure: Single oral dose
  instrument: Cognitive Drug Research battery
  magnitude: Not quantified in abstract
  reportType: measured-assessment
- id: melissa-antistress-25360512
  conceptId: anxiety-symptom-severity
  name: Stress-related mood
  direction: Decreased
  evidence: Human research
  description: Lemon-balm-containing foods were generally associated with improved self-rated mood after multitasking in two crossover studies.
  sourceId: pubmed-25360512
  population: Healthy young adults
  exposure: Standardized preparation
  instrument: Self-rated mood after multitasking
  magnitude: Not quantified in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Cholinergic receptor binding in vitro
  description: The selected dried-leaf preparation displaced nicotinic and muscarinic ligands in human cerebral cortex tissue; no cholinesterase inhibition was detected in the cited study.
  sourceId: pubmed-12888775
- title: TSH-receptor/cAMP interference in vitro
  description: Melissa officinalis produced dose-dependent inhibition of TSH-stimulated adenylate cyclase and TSH binding in transfected CHO cells; this is cell-model evidence, not a clinical thyroid effect.
  sourceId: pubmed-14759065
```

## Cautions

```yaml
- title: Preparation and dose dependence
  description: Different extracts and delivery matrices produced different cognitive and mood profiles, including slower timed-memory performance at lower doses in one trial.
  sourceId: pubmed-12888775
- title: In-vitro thyroid signal
  description: The thyroid-disruptor assay used transfected cells; it does not establish thyroid toxicity in people, but it is a reason to avoid treating the finding as clinically settled.
  sourceId: pubmed-14759065
```

## Claims

```yaml
- id: melissa-claim-memory-12888775
  assertion: A 1,600 mg single dose of a selected Melissa officinalis dried-leaf preparation improved memory performance and calmness in 20 healthy young adults.
  relation: supported-by
  participants:
    - entityId: substance:melissa-officinalis-lemon-balm
      role: intervention
    - entityId: tag:episodic-memory
      role: outcome
  context: Acute randomized placebo-controlled crossover study; other doses and preparations differed.
  sourceIds:
    - pubmed-12888775
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute study and preparation-specific results.
- id: melissa-claim-antistress-25360512
  assertion: Standardized lemon-balm foods were generally associated with improved mood and/or cognition after multitasking in two crossover studies.
  relation: associated-with
  participants:
    - entityId: substance:melissa-officinalis-lemon-balm
      role: intervention
    - entityId: tag:anxiety-symptom-severity
      role: reported endpoint
  context: Effects varied by dose and delivery matrix.
  sourceIds:
    - pubmed-25360512
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract reports mixed matrix- and dose-dependent effects.
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
- id: pubmed-25360512
  title: Anti-stress effects of lemon balm-containing foods.
  authors: Andrew Scholey, Amy Gibbs, Chris Neale, Naomi Perry, Anastasia Ossoukhova, Vanessa Bilog, Marni Kras, Claudia Scholz, Mathias Sass, Sybille Buchwald-Werner
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25360512/
  kind: PubMed publication
  insight: Lemon balm (Melissa officinalis) has been used historically and contemporarily as a modulator of mood and cognitive function, with anxiolytic effects following administration of capsules, coated tablets and topical application.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "25360512"
  doi: 10.3390/nu6114805
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-12888775
  title: Modulation of mood and cognitive performance following acute administration of single doses of Melissa officinalis (Lemon balm) with human CNS nicotinic and muscarinic receptor-binding properties.
  authors: D O Kennedy, G Wake, S Savelev, N T J Tildesley, E K Perry, K A Wesnes, A B Scholey
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12888775/
  kind: PubMed publication
  insight: Melissa officinalis (Lemon balm) is a herbal medicine that has traditionally been attributed with memory-enhancing properties, but which is currently more widely used as a mild sedative and sleep aid.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "12888775"
  doi: 10.1038/sj.npp.1300230
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-14759065
  title: In vitro assay of thyroid disruptors affecting TSH-stimulated adenylate cyclase activity.
  authors: F Santini, P Vitti, G Ceccarini, C Mammoli, V Rosellini, C Pelosini, A Marsili, M Tonacchera, P Agretti, T Santoni, L Chiovato, A Pinchera
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14759065/
  kind: PubMed publication
  insight: Several natural or synthetic chemicals have been indicated as potential thyroid disruptors.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "14759065"
  doi: 10.1007/BF03348190
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Lemon_balm
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Melissa+officinalis
  title: Examine
```
