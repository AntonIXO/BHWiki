---
slug: black-currant
name: Black Currant
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: '2026-11-01'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2eab-7ebf-a036-64bdd24386c8
  observationId: black-currant-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2eab-7ebf-a036-64bdd24386c8
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
x-order: 1299
---

## Summary

The Reddit link points to a ScienceDirect article whose PubMed identifier was not resolved. Related PubMed studies provide source-bounded pharmacodynamic and absorption observations but are retained as separate leads.

## Description

The linked Reddit title, “Acute supplementation with blackcurrant extracts modulates cognitive functioning and inhibits monoamine oxidase-B in healthy young adults,” remains an unverified ScienceDirect lead. A related randomized trial of Blackadder blackcurrant juice (PMID 30289026) found rapid reversible platelet MAO-B inhibition after a 500 mg polyphenol serving, and a separate 300 mg CurraNZ extract study (PMID 33949254) measured plasma phenolic-acid uptake; neither should be treated as the exact linked publication.

## Evidence note

Exact PMID/PMC mapping for the Reddit ScienceDirect link was not found in PubMed search. Added related PubMed records only with explicit title/source-gap labeling; no direct cognition claim is made for the unresolved link.

## Doses

```yaml
- label: Related Blackadder juice trial (PMID 30289026)
  amount: 500 mg polyphenols
  quantity: 500
  quantityMax: null
  unit: mg polyphenols
  ingredient: New Zealand Blackadder blackcurrant juice
  formulation: Standardized juice serving
  route: Oral
  frequency: Single dose
  duration: Measurements through 24 hours
  population: 8 healthy men aged 20–35 years
  purpose: MAO-B pharmacodynamic research exposure
  sourceCategory: research
  note: Related PubMed trial, not the exact unresolved Reddit ScienceDirect record.
  sourceId: reddit-pmid-30289026
- label: Related CurraNZ extract absorption study (PMID 33949254)
  amount: 300 mg extract (105 mg anthocyanins)
  quantity: 300
  quantityMax: null
  unit: mg extract
  ingredient: New Zealand blackcurrant extract
  formulation: CurraNZ capsule
  route: Oral
  frequency: Single fasted dose
  duration: Plasma sampling to 6 hours
  population: 20 healthy adults
  purpose: Phenolic-acid absorption research exposure
  sourceCategory: research
  note: Related PubMed trial, not the exact unresolved Reddit ScienceDirect record.
  sourceId: reddit-pmid-33949254
```

## Pharmacokinetics

```yaml
- id: black-currant-reddit-pk-unestablished
  analyte: black-currant
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination-half-life observation was established in the inspected linked publications.
  sourceId: optihealth-substance-01a08b04-2eab-7ebf-a036-64bdd24386c8
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: blackcurrant-maob-30289026
  conceptId: mao-b-activity
  name: Platelet monoamine oxidase-B activity
  direction: Decreased
  evidence: Human research
  description: A single Blackadder blackcurrant juice serving standardized to 500 mg polyphenols produced fast, absolute and reversible inhibition of platelet MAO-B versus placebo.
  sourceId: reddit-pmid-30289026
  population: 8 healthy men aged 20–35 years
  exposure: Single oral Blackadder juice serving
  instrument: Platelet MAO-B activity assay
  magnitude: P < 0.001; numeric inhibition not stated in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: blackcurrant-phenolic-uptake-33949254
  conceptId: phenolic-acid-exposure
  name: Plasma gallic and protocatechuic acid uptake
  direction: Increased
  evidence: Human research
  description: A 300 mg CurraNZ blackcurrant extract capsule increased plasma gallic acid and protocatechuic acid, with maxima at 4 and 1.5 hours respectively; vanillic acid was unchanged.
  sourceId: reddit-pmid-33949254
  population: 20 healthy adults
  exposure: Single 300 mg extract capsule containing 105 mg anthocyanins
  instrument: Plasma HPLC phenolic-acid concentrations
  magnitude: Gallic acid +261% and protocatechuic acid +320% above baseline at peak times
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Reversible MAO-B inhibition
  description: Related Blackadder juice research measured acute reversible platelet MAO-B inhibition after a 500 mg polyphenol serving; this is not direct evidence for the unresolved Reddit-linked publication.
  sourceId: reddit-pmid-30289026
```

## Cautions

```yaml
- title: Exact linked publication unresolved
  description: The Reddit ScienceDirect URL could not be mapped to a PubMed abstract, so its formulation, dose, outcomes, funding and conflicts remain unverified.
  sourceId: reddit-index-black-currant
```

## Claims

```yaml
- id: blackcurrant-claim-gap
  assertion: The Reddit-linked blackcurrant cognition/MAO-B publication remains an unresolved source lead; related PubMed trials should not be substituted for it.
  relation: source-gap
  participants:
  - entityId: substance:black-currant
    role: indexed topic
  - entityId: tag:reddit-index
    role: unresolved publication mapping
  context: ScienceDirect link in Reddit index; exact PMID not found.
  sourceIds:
  - reddit-index-black-currant
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Direct title, abstract and full text were not retrievable through PubMed.
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
- id: reddit-index-black-currant
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The index links a ScienceDirect publication whose exact PubMed mapping was not resolved.
  limitation: Community index link remains an unverified discovery lead.
- id: optihealth-substance-01a08b04-2eab-7ebf-a036-64bdd24386c8
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2eab-7ebf-a036-64bdd24386c8
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-link-ced085a453d5
  title: 'Acute supplementation with blackcurrant extracts modulates cognitive functioning and inhibits monoamine oxidase-B in healthy young adults '
  authors: Not established
  year: 2015
  url: https://www.sciencedirect.com/science/article/pii/S1756464615002893
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-30289026
  title: 'The pharmacodynamic profile of "Blackadder" blackcurrant juice effects upon the monoamine axis in humans: A randomised controlled trial.'
  authors: Publication authors from PubMed record
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30289026/
  kind: PubMed publication
  insight: A single 500 mg-polyphenol Blackadder juice serving caused rapid reversible platelet MAO-B inhibition in eight healthy men.
  limitation: Related trial, not the exact Reddit ScienceDirect title.
  pmid: '30289026'
- id: reddit-pmid-33949254
  title: Plasma uptake of selected phenolic acids following New Zealand blackcurrant extract supplementation in humans.
  authors: Publication authors from PubMed record
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33949254/
  kind: PubMed publication
  insight: A 300 mg CurraNZ capsule increased plasma gallic and protocatechuic acid, with peak increases at 4 and 1.5 hours.
  limitation: Related absorption study, not the exact Reddit ScienceDirect title.
  pmid: '33949254'
```

## Legal

```yaml
[]
```
