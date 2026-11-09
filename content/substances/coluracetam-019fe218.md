---
slug: coluracetam-019fe218
name: Coluracetam
subtitle: Racetam
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Racetam
tags:
  - choline-uptake
  - neuroprotection
  - working-memory
  - episodic-memory
  - nootropic-research
  - acetylcholine
  - glutamate
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43eb-72a2-87e9-00e98fa9102f
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43eb-72a2-87e9-00e98fa9102f
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
x-order: 1106
---

## Summary

Coluracetam is a racetam compound studied for its effects on choline uptake and memory.

## Description

Coluracetam is a racetam compound studied for its effects on choline uptake and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Acute AF64A mouse study
  amount: 0.3, 1, or 3 mg/kg
  quantity: 0.3
  quantityMax: 3
  unit: mg/kg
  ingredient: MKC-231 (coluracetam index label)
  formulation: Not stated in abstract
  route: Not stated for acute experiment
  frequency: Single acute exposure
  duration: Acute test
  population: AF64A-treated mice
  purpose: Working-memory and hippocampal acetylcholine assessment
  sourceCategory: research
  sourceId: pubmed-7710736
  note: Dose context was not described in the retrieved abstract.
- label: Chronic AF64A mouse study
  amount: 0.3, 1, or 3 mg/kg
  quantity: 0.3
  quantityMax: 3
  unit: mg/kg
  ingredient: MKC-231 (coluracetam index label)
  formulation: Not stated in abstract
  route: Oral
  frequency: Once daily
  duration: 11 days
  population: AF64A-treated mice
  purpose: Working-memory and hippocampal acetylcholine assessment
  sourceCategory: research
  sourceId: pubmed-7710736
  note: Dose context was not described in the retrieved abstract.
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
- id: coluracetam-mkc231-choline-uptake-7710736
  conceptId: choline-uptake
  name: High-affinity choline uptake
  direction: Increased
  evidence: Limited research
  description: Chronic MKC-231 reversed AF64A-induced hippocampal acetylcholine depletion at 0.3 and 1 mg/kg and was interpreted as recovery of reduced high-affinity choline uptake and acetylcholine release.
  sourceId: pubmed-7710736
  population: AF64A-treated mice
  exposure: 0.3, 1, or 3 mg/kg orally once daily for 11 days
  reportType: measured-assessment
  instrument: null
  magnitude: null
- id: coluracetam-neuroprotection-9541286
  conceptId: neuroprotection
  name: Glutamate cytotoxicity
  direction: Decreased
  evidence: Limited research
  description: MKC-231 exposure for 12–24 hours ameliorated glutamate cytotoxicity in cultured fetal rat cortical neurons and reduced ionomycin-induced toxicity, but not toxicity from an NO donor.
  sourceId: pubmed-9541286
  population: Cultured fetal rat cortical neurons
  exposure: MKC-231 exposure for 12–24 hours; concentration not stated in abstract
  reportType: measured-assessment
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- id: coluracetam-working-memory-7710736
  conceptId: working-memory
  name: Working memory
  direction: Increased
  evidence: Limited research
  description: Chronic MKC-231 improved AF64A-induced working-memory deficits at all tested doses; acute treatment had no significant effect.
  sourceId: pubmed-7710736
  population: AF64A-treated mice in delayed non-matching-to-sample T-maze
  exposure: 0.3, 1, or 3 mg/kg orally once daily for 11 days
  instrument: Delayed non-matching-to-sample T-maze
  reportType: measured-assessment
  magnitude: null
- id: coluracetam-novel-object-recognition-17467960
  conceptId: episodic-memory
  name: Novel-object recognition
  direction: Increased
  evidence: Limited research
  description: Subchronic MKC-231 antagonized cognitive deficits caused by repeated phencyclidine exposure in rats; no benefit was seen in repeated passive avoidance.
  sourceId: pubmed-17467960
  population: Rats with repeated PCP exposure
  exposure: Subchronic MKC-231; dose not stated in abstract
  instrument: Novel-object recognition and passive-avoidance tests
  reportType: measured-assessment
  magnitude: null
```

## Mechanisms

```yaml
- title: Choline uptake and acetylcholine release
  description: MKC-231 is described as a high-affinity choline-uptake enhancer; chronic treatment reversed AF64A-associated hippocampal acetylcholine depletion.
  sourceId: pubmed-7710736
- title: Calcium-linked neuroprotection
  description: In cultured cortical neurons, MKC-231 reduced glutamate and ionomycin cytotoxicity but not S-nitrosocysteine toxicity, consistent with suppression of NO formation triggered by Ca2+ influx.
  sourceId: pubmed-9541286
- title: Septal cholinergic preservation
  description: In PCP-exposed rats, MKC-231 antagonized the reduction in medial-septum choline-acetyltransferase-positive cells but not the ventrostriatal dynorphin-A change.
  sourceId: pubmed-17467960
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked studies used mice, rats, or cultured rat neurons; no human dosing, pharmacokinetics, or clinical safety evidence is established here.
  sourceId: pubmed-7710736
- title: Acute and chronic findings differ
  description: Acute MKC-231 did not improve AF64A memory deficits in the mouse study, whereas 11-day treatment did; the chronic result should not be presented as an immediate effect.
  sourceId: pubmed-7710736
```

## Claims

```yaml
- id: coluracetam-preclinical-memory
  assertion: Chronic MKC-231 improved disease-model memory outcomes in rodents.
  relation: measured-outcome
  participants:
    - entityId: substance:coluracetam-019fe218
      role: intervention label
    - entityId: tag:working-memory
      role: reported endpoint
  context: AF64A mice and PCP-exposed rats; not a human trial.
  sourceIds:
    - pubmed-7710736
    - pubmed-17467960
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical models and abstract-level extraction.
- id: coluracetam-neuroprotective-cell
  assertion: MKC-231 reduced selected glutamate-linked cytotoxicity in cultured rat cortical neurons.
  relation: measured-outcome
  participants:
    - entityId: substance:coluracetam-019fe218
      role: intervention label
    - entityId: tag:neuroprotection
      role: reported endpoint
  context: Cell culture experiment; concentration and translational relevance are not established.
  sourceIds:
    - pubmed-9541286
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: In vitro model.
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
- id: optihealth-substance-019fe218-43eb-72a2-87e9-00e98fa9102f
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/00e98fa9102f
  kind: catalog-identity
  insight: Canonical identity provenance retained for the existing article record.
  limitation: Catalog identity does not establish current efficacy, dosing, safety, or pharmacokinetics.
- id: pubmed-7710736
  title: MKC-231, a choline uptake enhancer, ameliorates working memory deficits and decreased hippocampal acetylcholine induced by ethylcholine aziridinium ion in mice.
  authors: S Murai; H Saito; E Abe; Y Masuda; J Odashima; T Itoh
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/7710736/
  kind: PubMed publication
  insight: Chronic oral MKC-231 improved AF64A-induced memory deficits and partially restored hippocampal acetylcholine; acute dosing was inactive.
  pmid: "7710736"
  doi: 10.1007/BF01277590
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: pubmed-9541286
  title: Protective effect of MKC-231, a novel high affinity choline uptake enhancer, on glutamate cytotoxicity in cultured cortical neurons.
  authors: A Akaike; T Maeda; S Kaneko; Y Tamura
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9541286/
  kind: PubMed publication
  insight: MKC-231 reduced glutamate and ionomycin cytotoxicity in cultured rat cortical neurons but not NO-donor toxicity.
  pmid: "9541286"
  doi: 10.1254/jjp.76.219
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: pubmed-17467960
  title: Subsequent exposure to the choline uptake enhancer MKC-231 antagonizes phencyclidine-induced behavioral deficits and reduction in septal cholinergic neurons in rats.
  authors: Yukihiko Shirayama; Ayaka Yamamoto; Tomoko Nishimura; Seiji Katayama; Ryuzou Kawahara
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17467960/
  kind: PubMed publication
  insight: Subchronic MKC-231 antagonized PCP-induced novel-object-recognition deficits and loss of septal ChAT-positive cells in rats.
  pmid: "17467960"
  doi: 10.1016/j.euroneuro.2007.02.011
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
```

## Legal

```yaml
[]
```
