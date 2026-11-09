---
slug: oxiracetam-019fe218
name: Oxiracetam
subtitle: Racetam
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Racetam
tags:
  - cognitive-performance
  - nootropic-research
  - acetylcholine
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43ee-739a-a7f5-85a6321108c6
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43ee-739a-a7f5-85a6321108c6
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
x-order: 1109
---

## Summary

Oxiracetam is a racetam compound studied for learning and memory.

## Description

Oxiracetam is a racetam compound studied for learning and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Rat cholinergic study
  amount: 100 or 300 mg/kg
  quantity: 100
  quantityMax: 300
  unit: mg/kg
  ingredient: Oxiracetam
  formulation: Experimental oxiracetam
  route: intraperitoneal
  frequency: Single or repeated daily administration
  duration: Acute and repeated exposure; abstract reports repeated daily 100 mg/kg
  population: Rats
  purpose: Preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Oxiracetam 100 mg/kg i.p. antagonized an active-avoidance impairment; 300 mg/kg also increased acetylcholine utilization.
  sourceId: pubmed-3594455
- label: Neuronal culture study
  amount: Micromolar concentrations
  quantity: null
  quantityMax: null
  unit: micromolar
  ingredient: Oxiracetam
  formulation: In vitro cell exposure
  route: cell culture
  frequency: Acute
  duration: Not reported in abstract
  population: Primary cerebellar granule-cell cultures
  purpose: Mechanistic preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Exact concentration not stated in abstract.
  sourceId: pubmed-1372342
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
- id: research-oxiracetam-avoidance-learning-3594455
  conceptId: cognitive-performance
  name: Active-avoidance learning
  direction: Increased
  evidence: Limited research
  description: Oxiracetam 100 mg/kg i.p. antagonized impairment of active-avoidance acquisition caused by inhibition of acetylcholine synthesis.
  sourceId: pubmed-3594455
  population: Rats
  exposure: Oxiracetam 100 mg/kg i.p.
  instrument: Pole-climbing active-avoidance acquisition
  magnitude: Quantitative effect not reported in abstract.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Positive AMPA modulation
  description: Oxiracetam increased AMPA-mediated calcium influx efficacy and AMPA binding-site density in neuronal preparations; the study did not establish in vivo human mechanism.
  sourceId: pubmed-1372342
- title: Septohippocampal cholinergic enhancement
  description: Rat data indicate increased acetylcholine utilization and high-affinity choline uptake in hippocampus, consistent with enhanced cholinergic pathway activity.
  sourceId: pubmed-3594455
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked PubMed studies used cultured neurons or rats; they do not establish human efficacy, dose, pharmacokinetics, or safety.
  sourceId: pubmed-1372342
- title: Unverified commercial EEG link
  description: The research index includes a commercial page about oxiracetam EEG effects, but no PubMed record was identified in this pass; it remains an unverified lead.
  sourceId: publication-link-921e1e009393
```

## Claims

```yaml
- id: research-claim-oxiracetam-3594455-0
  assertion: In rats, oxiracetam 100 mg/kg i.p. increased cholinergic utilization and antagonized an active-avoidance learning deficit.
  relation: preclinical-support
  participants:
    - entityId: substance:oxiracetam-019fe218
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Experimental rat study; no human translation established.
  sourceIds:
    - pubmed-3594455
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical evidence and limited abstract detail.
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
- id: optihealth-substance-019fe218-43ee-739a-a7f5-85a6321108c6
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43ee-739a-a7f5-85a6321108c6
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-1372342
  title: Nootropic drugs positively modulate alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid-sensitive glutamate receptors in neuronal cultures.
  authors: A Copani, A A Genazzani, G Aleppo, G Casabona, P L Canonico, U Scapagnini, F Nicoletti
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1372342/
  kind: PubMed publication
  insight: Micromolar concentrations of piracetam, aniracetam, and oxiracetam enhanced alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA)-stimulated 45Ca2+ influx in primary cultures of cerebellar granule cells.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "1372342"
  doi: 10.1111/j.1471-4159.1992.tb11329.x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-3594455
  title: Effect of oxiracetam and piracetam on central cholinergic mechanisms and active-avoidance acquisition.
  authors: G Spignoli, F Pedata, L Giovannelli, S Banfi, F Moroni, G Pepeu
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3594455/
  kind: PubMed publication
  insight: Oxiracetam at 100 and 300 mg/kg i.p.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "3594455"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-921e1e009393
  title: Effects of oxiracetam on electroencephalogram at rest in healthy young subjects single and repeated dose investigation
  authors: Not established
  year: 2026
  url: https://triscience.com/General/effects-of-oxiracetam-on-electroencephalogram-at-rest-in-healthy-young-subjects-single-and-repeated-dose-investigation/doculite_view
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Oxiracetam
  title: Wikipedia
```
