---
slug: zembrin
name: Zembrin
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-25389443
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-25389443
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

Zembrin is a named Sceletium tortuosum extract. Human studies explore mood and cognitive performance.

## Description

Zembrin is a named Sceletium tortuosum extract. Human studies explore mood and cognitive performance.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 25389443 study exposure: 25 mg"
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Zembrin
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: "21 subjects (mean age: 54"
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: We randomized normal healthy subjects (total n = 21) to receive either 25 mg capsule Zembrin or placebo capsule once daily for 3 weeks, in a randomized placebo-controlled 3-week cross-over design Full text is available via PMC.
  sourceId: pubmed-25389443
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
- id: research-zembrin-cognitive-performance-25389443
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Limited research
  description: "Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects. We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale."
  sourceId: pubmed-25389443
  population: "21 subjects (mean age: 54"
  exposure: "We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale."
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
  sourceId: pubmed-25389443
```

## Claims

```yaml
- id: research-claim-zembrin-25389443
  assertion: "Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects. We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale."
  relation: associated-with
  participants:
    - entityId: substance:zembrin
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: PMID 25389443 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-25389443
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
- id: pubmed-25389443
  title: "Proof-of-Concept Randomized Controlled Study of Cognition Effects of the Proprietary Extract Sceletium tortuosum (Zembrin) Targeting Phosphodiesterase-4 in Cognitively Healthy Subjects: Implications for Alzheimer's Dementia."
  authors: Simon Chiu, Nigel Gericke, Michel Farina-Woodbury, Vladimir Badmaev, Hana Raheb, Kristen Terpstra, Joalex Antongiorgi, Yves Bureau, Zack Cernovsky, Jirui Hou, Veronica Sanchez, Marissa Williams, John Copen, Mariwan Husni, Liz Goble
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25389443/
  kind: PubMed publication
  insight: "Converging evidence suggests that PDE-4 (phosphodiesterase subtype 4) plays a crucial role in regulating cognition via the PDE-4-cAMP cascade signaling involving phosphorylated cAMP response element binding protein (CREB). The primary endpoint was to examine the neurocognitive effects of extract Sceletium tortuosum (Zembrin) and to assess the safety and tolerability of Zembrin in cognitively healthy control subjects. We administered battery of neuropsychological tests: CNS Vital Signs and Hamilton depression rating scale (HAM-D) at baseline and regular intervals and monitored side effects with treatment emergent adverse events scale."
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC4217361 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC4217361/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: "25389443"
  doi: 10.1155/2014/682014
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
