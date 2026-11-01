---
slug: zembrin
name: Zembrin
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Reddit index entry
tags:
- reddit-index
accent: '#a9b993'
reviewedAt: '2026-11-01'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: reddit-index-zembrin
  observationId: zembrin-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-zembrin
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
---

## Summary

Zembrin has 1 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 1 retrieved PubMed records out of 1 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 1 PubMed records linked from this Reddit index entry; 1 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

PMC full-text retrieval for this page returned body text for 1/1 identified PMCID records; 0 returned no retrievable body or a tool error.

## Doses

```yaml
- label: 'PMID 25389443 study exposure: 25 mg'
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Zembrin
  formulation: Study formulation as stated in the abstract
  route: Route not stated in abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: '21 subjects (mean age: 54'
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: We randomized normal healthy subjects (total n = 21) to receive either 25 mg capsule Zembrin or placebo capsule once daily for 3 weeks, in a randomized placebo-controlled 3-week cross-over design Full text is available via PMC.
  sourceId: reddit-pmid-25389443
```

## Pharmacokinetics

```yaml
- id: zembrin-pk-unestablished
  analyte: Zembrin
  route: Not assessed
  formulation: No source-specific PK endpoint in linked abstracts
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Linked PubMed abstracts did not establish a validated elimination half-life.
  sourceId: reddit-index-zembrin
  modelEligible: false
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
- id: reddit-zembrin-cognitive-performance-25389443
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Limited research
  description: 'Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects. We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale.'
  sourceId: reddit-pmid-25389443
  population: '21 subjects (mean age: 54'
  exposure: 'We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale.'
  instrument: Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effe
  magnitude: Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Ze
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 25389443)
  description: The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects.
  sourceId: reddit-pmid-25389443
```

## Claims

```yaml
- id: reddit-claim-zembrin-25389443
  assertion: 'Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects. We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale.'
  relation: associated-with
  participants:
  - entityId: substance:zembrin
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: PMID 25389443 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-25389443
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
- id: reddit-index-zembrin
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-25389443
  title: 'Proof-of-Concept Randomized Controlled Study of Cognition Effects of the Proprietary Extract Sceletium tortuosum (Zembrin) Targeting Phosphodiesterase-4 in Cognitively Healthy Subjects: Implications for Alzheimer''s Dementia.'
  authors: Simon Chiu, Nigel Gericke, Michel Farina-Woodbury, Vladimir Badmaev, Hana Raheb, Kristen Terpstra, Joalex Antongiorgi, Yves Bureau, Zack Cernovsky, Jirui Hou, Veronica Sanchez, Marissa Williams, John Copen, Mariwan Husni, Liz Goble
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25389443/
  kind: PubMed publication
  insight: 'Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects. We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale.'
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC4217361 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC4217361/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: '25389443'
  doi: 10.1155/2014/682014
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
