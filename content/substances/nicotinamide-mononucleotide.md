---
slug: nicotinamide-mononucleotide
name: Nicotinamide Mononucleotide
subtitle: Nicotinamide mononucleotide, or NMN, is involved in the production of NAD+.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research profile
tags:
  - glycemic-control
  - ldl-cholesterol
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-00000000-0000-4000-a001-000000000008
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-00000000-0000-4000-a001-000000000008
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
x-order: 1099
---

## Summary

Nicotinamide mononucleotide, or NMN, is involved in the production of NAD+. Research explores cellular energy metabolism and brain function.

## Description

NMN is a nicotinamide mononucleotide intermediate in NAD+ biosynthesis. The linked publications describe mouse metabolic experiments and aging biology; they do not establish a human dose, pharmacokinetic profile, or clinical treatment effect.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: NMN mouse metabolic study
  amount: Not reported in abstract
  quantity: null
  quantityMax: null
  unit: not-reported
  ingredient: Nicotinamide mononucleotide
  formulation: Experimental NMN
  route: Not reported in abstract
  frequency: Not reported in abstract
  duration: Not reported in abstract
  population: Diet- and age-induced diabetes mice
  purpose: Preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Dose and route are not stated in the PubMed abstract.
  sourceId: pubmed-21982712
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
- id: research-nmn-glycemic-control-21982712
  conceptId: glycemic-control
  name: Glucose Intolerance
  direction: Increased
  evidence: Limited research
  description: NMN ameliorated glucose intolerance in high-fat-diet- and age-induced diabetes mouse models.
  sourceId: pubmed-21982712
  population: Mouse diabetes models
  exposure: NMN; dose not reported in abstract.
  instrument: Glucose tolerance testing
  magnitude: Quantitative effect not reported.
  reportType: measured-assessment
- id: research-nmn-lipid-profile-21982712
  conceptId: ldl-cholesterol
  name: Lipid Profile
  direction: Increased
  evidence: Limited research
  description: NMN improved lipid profiles in age-induced diabetes mice.
  sourceId: pubmed-21982712
  population: Age-induced diabetes mice
  exposure: NMN
  instrument: Lipid profile
  magnitude: Quantitative effect not reported.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: NAMPT–NAD+–SIRT1 pathway
  description: NMN is a product of NAMPT-mediated NAD+ biosynthesis; the mouse study links restoration of NAD+ and partial SIRT1 activation to metabolic improvements.
  sourceId: pubmed-21982712
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked NMN efficacy study was conducted in mice; it does not establish human dosing, pharmacokinetics, or clinical benefit.
  sourceId: pubmed-21982712
- title: Separate aging-biology paper
  description: PMID 24360282 studies NAD+ decline and restoration in aging mice and is not a human NMN trial.
  sourceId: pubmed-24360282
```

## Claims

```yaml
- id: research-claim-nmn-21982712-0
  assertion: NMN improved glucose intolerance and related metabolic measures in diet- and age-induced diabetes mice.
  relation: preclinical-support
  participants:
    - entityId: substance:nicotinamide-mononucleotide
      role: intervention
    - entityId: tag:glycemic-control
      role: reported endpoint
  context: Mouse models; dose and route are not stated in the abstract.
  sourceIds:
    - pubmed-21982712
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical evidence; no human translation established.
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
- id: optihealth-substance-00000000-0000-4000-a001-000000000008
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/00000000-0000-4000-a001-000000000008
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-24360282
  title: Declining NAD(+) induces a pseudohypoxic state disrupting nuclear-mitochondrial communication during aging.
  authors: Ana P Gomes; Nathan L Price; Alvin J Y Ling; et al.
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24360282/
  kind: PubMed publication
  insight: Declining nuclear NAD+ and HIF-1alpha accumulation produced a reversible pseudohypoxic state in aging mice; raising NAD+ restored mitochondrial function in a SIRT1-dependent manner.
  limitation: Mouse aging study; not a human NMN intervention trial.
  pmid: "24360282"
  pmcid: PMC4076149
  doi: 10.1016/j.cell.2013.11.037
  funding: Not assessed in this pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this pass.
  conflictOfInterestStatus: not-assessed
- id: pubmed-21982712
  title: Nicotinamide mononucleotide, a key NAD(+) intermediate, treats the pathophysiology of diet- and age-induced diabetes in mice.
  authors: Jun Yoshino; Kathryn F Mills; Myeong Jin Yoon; Shin-ichiro Imai
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21982712/
  kind: PubMed publication
  insight: NMN restored NAD+ and improved glucose intolerance, hepatic insulin sensitivity, and lipid profiles in mouse diabetes models.
  limitation: Preclinical mouse study; dose and route are not stated in the abstract.
  pmid: "21982712"
  pmcid: PMC3204926
  doi: 10.1016/j.cmet.2011.08.014
  funding: Not assessed in this pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
