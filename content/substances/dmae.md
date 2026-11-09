---
slug: dmae
name: DMAE
subtitle: Research profile
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research profile
tags:
  - choline-transport
  - brain-acetylcholine
  - acetylcholine
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2f14-767b-9415-3a728f3db307
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f14-767b-9415-3a728f3db307
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
x-order: 1435
---

## Summary

DMAE is a choline-related compound studied for its effects on brain function and cognition.

## Description

In rats, deanol inhibited blood-to-brain choline transport and raised blood choline (PMID 727735). A gas-chromatography study found no increase in whole-brain acetylcholine across 33.3–3000 mg/kg intraperitoneal doses in mice, no increase after 550 mg/kg in rat brain regions, and only a selective striatal increase after 900 mg/kg in mice that did not track tissue deanol (PMID 850128). The PubMed record for the 1960 volunteer stimulant study has no abstract (PMID 14425373), so no human outcome is asserted.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Rat choline-transport study
  amount: 300-500 mg/kg pretreatment
  quantity: 300
  quantityMax: 500
  unit: mg/kg
  ingredient: DMAE/deanol
  formulation: Deanol
  route: Intraperitoneal
  frequency: Single pretreatment
  duration: 8 or 30 minutes before assay
  population: Rats
  purpose: Brain choline-transport experiment
  sourceCategory: research
  note: Animal exposure reported in the PubMed abstract; not a human dose.
  sourceId: pubmed-727735
- label: Rodent acetylcholine assay range
  amount: 33.3-3000 mg/kg
  quantity: 33.3
  quantityMax: 3000
  unit: mg/kg
  ingredient: DMAE/deanol
  formulation: Deanol
  route: Intraperitoneal
  frequency: Acute pretreatment
  duration: 1-30 minutes
  population: Mice and rats
  purpose: Brain acetylcholine assay
  sourceCategory: research
  note: Animal dose range; no brain acetylcholine increase across this range except a selective striatal signal at 900 mg/kg in mice.
  sourceId: pubmed-850128
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
- id: dmae-choline-transport-727735
  conceptId: choline-transport
  name: Blood-to-brain choline transport
  direction: Decreased
  evidence: Limited research
  description: Deanol competed with choline for carrier-mediated uptake from blood into brain; the inhibition constant for deanol was lower than the Michaelis constant for choline in the rat assay.
  sourceId: pubmed-727735
  population: Rat brain-uptake experiments
  exposure: Deanol with radiolabeled choline; 300 or 500 mg/kg rat pretreatment
  instrument: Brain uptake index and radiolabeled choline assay
  magnitude: Ki 159 µg versus choline Km 442 µg in the reported assay
  reportType: measured-assessment
- id: dmae-brain-acetylcholine-850128
  conceptId: brain-acetylcholine
  name: Brain acetylcholine after acute deanol
  direction: Variable
  evidence: Limited research
  description: No increase in whole-brain acetylcholine was detected across 33.3–3000 mg/kg in mice or after 550 mg/kg in rat brain regions; only a selective striatal increase occurred after 900 mg/kg in mice.
  sourceId: pubmed-850128
  population: Mice and rats
  exposure: Acute intraperitoneal deanol
  instrument: Gas-chromatographic tissue assay
  magnitude: No increase except selective mouse striatal signal at 900 mg/kg
  reportType: measured-assessment
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
- title: Competition with choline transport
  description: Deanol competes with choline for blood-to-brain carrier uptake and raises blood choline, so its effects on brain choline/acetylcholine cannot be assumed to reflect precursor conversion.
  sourceId: pubmed-727735
- title: No consistent precursor conversion
  description: A gas-chromatographic evaluation did not confirm deanol as an immediate precursor of brain acetylcholine; the only increase was a non-correlated selective striatal signal at a massive mouse dose.
  sourceId: pubmed-850128
```

## Cautions

```yaml
- title: No confirmed human cognitive benefit
  description: The linked PubMed records do not provide an abstract supporting a human cognitive effect; the 1960 volunteer paper is retained as a metadata-only lead.
  sourceId: pubmed-14425373
- title: Animal doses are not human doses
  description: The 300–3000 mg/kg exposures are rodent experiments and cannot define a human regimen.
  sourceId: pubmed-850128
- title: Mechanistic uncertainty
  description: Rat transport inhibition and the lack of consistent brain acetylcholine increases argue against treating DMAE as an established acetylcholine precursor.
  sourceId: pubmed-727735
```

## Claims

```yaml
- id: dmae-claim-acetylcholine-precursor
  assertion: The linked rodent gas-chromatography study did not confirm DMAE as a reliable immediate precursor of brain acetylcholine.
  relation: mechanistic-null
  participants:
    - entityId: substance:dmae
      role: compound
    - entityId: tag:brain-acetylcholine
      role: outcome
  context: Acute intraperitoneal rodent dosing, including 33.3–3000 mg/kg in mice and 550 mg/kg in rats.
  sourceIds:
    - pubmed-850128
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Rodent tissue assays do not establish human pharmacology.
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
- id: optihealth-substance-01a08b04-2f14-767b-9415-3a728f3db307
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f14-767b-9415-3a728f3db307
  kind: catalog-identity
  insight: Canonical DMAE identity provenance.
  limitation: Identity record, not efficacy or safety evidence.
- id: publication-link-d59a7120c2cc
  title: The effects of deanol on cognitive performance and electrophysiology in elderly humans (1979)
  authors: Not established
  year: 1979
  url: https://link.springer.com/article/10.1007/BF00431997
  kind: research index external link
  insight: Human cognitive-study lead retained from research index.
  limitation: No abstract or full text was retrieved in this pass.
- id: pubmed-727735
  title: Deanol acetamidobenzoate inhibits the blood-brain barrier transport of choline.
  authors: W R Millington; A L McCall; R J Wurtman
  year: 1978
  url: https://pubmed.ncbi.nlm.nih.gov/727735/
  kind: PubMed publication
  insight: Rat study found competitive inhibition of blood-to-brain choline transport and increased blood choline after deanol.
  limitation: Rat mechanistic study; no human efficacy or safety evidence.
  pmid: "727735"
  doi: 10.1002/ana.410040403
- id: pubmed-850128
  title: Is 2-dimethylaminoethanol (deanol) indeed a precursor of brain acetylcholine? A gas chromatographic evaluation.
  authors: N R Zahniser; D Chou; I Hanin
  year: 1977
  url: https://pubmed.ncbi.nlm.nih.gov/850128/
  kind: PubMed publication
  insight: Acute rodent dosing generally did not increase brain acetylcholine; only a selective striatal signal appeared after 900 mg/kg in mice.
  limitation: Animal tissue assay; no human cognitive conclusion.
  pmid: "850128"
- id: pubmed-14425373
  title: The stimulant effect of 2-dimethylaminoethanol (deanol) in human volunteer subjects.
  authors: H B Murphree; C C Pfeiffer; I A Backerman
  year: 1960
  url: https://pubmed.ncbi.nlm.nih.gov/14425373/
  kind: PubMed publication
  insight: Human volunteer stimulant-study metadata; PubMed record has no abstract in this retrieval.
  limitation: No abstract or full text retrieved; no human outcome extracted.
  pmid: "14425373"
  doi: 10.1002/cpt196013303
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Dimethylethanolamine
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/dmae
  title: Examine.com
```
