---
slug: sulbutiamine
name: Sulbutiamine
subtitle: Research profile
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research profile
tags:
  - memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2fe3-797b-9841-b9004b579902
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2fe3-797b-9841-b9004b579902
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
x-order: 1856
---

## Summary

Sulbutiamine is a synthetic derivative of thiamine. Research explores fatigue, brain function and memory.

## Description

Sulbutiamine is a synthetic derivative of thiamine. Research explores fatigue, brain function and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 4059305 study exposure: 300 mg/kg"
  amount: 300 mg/kg
  quantity: 300
  quantityMax: null
  unit: mg/kg
  ingredient: Sulbutiamine
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: Thiamine deficiency in both man and animals is known to produce memory dysfunction and cognitive disorders which have been related to an impairment of cholinergic activity.
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: Accordingly mice received 300 mg/kg of sulbutiamine daily for 10 days
  sourceId: pubmed-4059305
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
[]
```

## Outcomes

```yaml
- id: research-sulbutiamine-memory-4059305
  conceptId: memory
  name: Memory
  direction: Decreased
  evidence: Limited research
  description: The present experiment was aimed at testing whether, inversely, chronic administration of large doses of sulbutiamine would have a facilitative effect on memory and would induce changes in central cholinergic activity. Accordingly mice received 300 mg/kg of sulbutiamine daily for 10 days. When compared to control subjects, sulbutiamine treated mice learned the task at the same rate in a single session but showed greatly improved performance when tested 24 hr after partial acquisition of the same task.
  sourceId: pubmed-4059305
  population: Thiamine deficiency in both man and animals is known to produce memory dysfunction and cognitive disorders which have been related to an impairment of cholinergic activity.
  exposure: Accordingly mice received 300 mg/kg of sulbutiamine daily for 10 days.
  instrument: null
  magnitude: The present experiment was aimed at testing whether, inversely, chronic administration of large doses of sulbutiamine would have a facilitative effect on memory and would induce changes in central cholinergic activity. Accordingly mice received 300 mg/kg of sulbutiamine daily for 10 days. When compared to control subje
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 10996447)
  description: Chronic treatment of rats by sulbutiamine induced no change in density of N-methyl-D-aspartate (NMDA) and (+/-)-alpha-amino-3-hydroxy-5-methylisoxazole-4-propionic acid receptors in the cingular cortex, but a significant decrease of the kainate binding sites, as measured by quantitative autoradiography.
  sourceId: pubmed-10996447
- title: Explicit mechanistic or disposition finding (PMID 4059305)
  description: Thiamine deficiency in both man and animals is known to produce memory dysfunction and cognitive disorders which have been related to an impairment of cholinergic activity.
  sourceId: pubmed-4059305
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-sulbutiamine-4059305
  assertion: The present experiment was aimed at testing whether, inversely, chronic administration of large doses of sulbutiamine would have a facilitative effect on memory and would induce changes in central cholinergic activity. Accordingly mice received 300 mg/kg of sulbutiamine daily for 10 days. When compared to control subjects, sulbutiamine treated mice learned the task at the same rate in a single session but showed greatly improved performance when tested 24 hr after partial acquisition of the same task.
  relation: associated-with
  participants:
    - entityId: substance:sulbutiamine
      role: intervention or exposure
    - entityId: tag:memory
      role: reported endpoint
  context: PMID 4059305 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-4059305
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
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
- id: optihealth-substance-01a08b04-2fe3-797b-9841-b9004b579902
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2fe3-797b-9841-b9004b579902
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-10996447
  title: Evidence for a modulatory effect of sulbutiamine on glutamatergic and dopaminergic cortical transmissions in the rat brain.
  authors: F Trovero, M Gobbi, J Weil-Fuggaza, M J Besson, D Brochet, S Pirot
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10996447/
  kind: PubMed publication
  insight: Chronic treatment of rats by sulbutiamine induced no change in density of N-methyl-D-aspartate (NMDA) and (+/-)-alpha-amino-3-hydroxy-5-methylisoxazole-4-propionic acid receptors in the cingular cortex, but a significant decrease of the kainate binding sites, as measured by quantitative autoradiography. In the same treated animals, an increase of D1 dopaminergic (DA) binding sites was measured both in the prefrontal and the cingular cortex, while no modification of the D2 binding sites was detected. Furthermore, an acute sulbutiamine administration induced a decrease of kainate binding sites but no change of the density of D1 and D2 DA receptors.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "10996447"
  doi: 10.1016/s0304-3940(00)01420-8
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-4059305
  title: "Chronic administration of sulbutiamine improves long term memory formation in mice: possible cholinergic mediation."
  authors: J Micheau, T P Durkin, C Destrade, Y Rolland, R Jaffard
  year: 1985
  url: https://pubmed.ncbi.nlm.nih.gov/4059305/
  kind: PubMed publication
  insight: The present experiment was aimed at testing whether, inversely, chronic administration of large doses of sulbutiamine would have a facilitative effect on memory and would induce changes in central cholinergic activity. Accordingly mice received 300 mg/kg of sulbutiamine daily for 10 days. When compared to control subjects, sulbutiamine treated mice learned the task at the same rate in a single session but showed greatly improved performance when tested 24 hr after partial acquisition of the same task.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "4059305"
  doi: 10.1016/0091-3057(85)90555-6
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
