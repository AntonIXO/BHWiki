---
slug: cannabis
name: Cannabis
subtitle: Identity record
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags:
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2ec2-7224-8f66-bc4637708078
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2ec2-7224-8f66-bc4637708078
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
x-order: 1337
---

## Summary

Cannabis contains cannabinoids such as THC and CBD, which act on the endocannabinoid system. Studies examine memory, mood and other effects of different preparations.

## Description

Cannabis contains cannabinoids such as THC and CBD, which act on the endocannabinoid system. Studies examine memory, mood and other effects of different preparations.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Vaporized cannabis, low-THC arm
  amount: 5.5 mg THC
  quantity: 5.5
  quantityMax: null
  unit: mg
  ingredient: Δ9-THC
  formulation: Vaporized cannabis
  route: Inhaled vapor
  frequency: Single experimental dose
  duration: Acute testing
  population: Regular cannabis users; n=18 per randomized arm
  purpose: Divergent and convergent thinking research
  sourceCategory: research
  note: Low dose did not improve divergent thinking versus placebo.
  sourceId: pubmed-25288512
- label: Vaporized cannabis, high-THC arm
  amount: 22 mg THC
  quantity: 22
  quantityMax: null
  unit: mg
  ingredient: Δ9-THC
  formulation: Vaporized cannabis
  route: Inhaled vapor
  frequency: Single experimental dose
  duration: Acute testing
  population: Regular cannabis users; n=18 randomized, 18 analyzed in high-dose arm
  purpose: Divergent and convergent thinking research
  sourceCategory: research
  note: High dose significantly worsened divergent-thinking performance.
  sourceId: pubmed-25288512
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
- id: cannabis-cognitive-26464454
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Decreased
  evidence: Human research
  description: Intravenous THC impaired backward digit-span working memory in COMT Val/Val carriers; the psychotic-experience effect did not vary by COMT genotype.
  sourceId: pubmed-26464454
  population: 78 non-clinical participants vulnerable to paranoia
  exposure: Experimentally administered intravenous THC versus placebo
  instrument: Digit Span Backwards; CAPE positive dimension
  magnitude: null
  reportType: measured-assessment
- id: cannabis-cognitive-25288512
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Decreased
  evidence: Human research
  description: High-dose (22 mg) vaporized THC produced significantly worse divergent-thinking performance than 5.5 mg THC or placebo; low dose did not improve performance.
  sourceId: pubmed-25288512
  population: Regular cannabis users; final analysis n=54
  exposure: 5.5 mg or 22 mg vaporized THC versus placebo
  instrument: Alternate Uses Task
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: COMT genotype moderates acute THC working-memory impairment
  description: THC impaired backward digit-span working memory in COMT Val/Val carriers but not Met carriers; psychotic experiences were unaffected by genotype.
  sourceId: pubmed-26464454
- title: Dose-dependent divergent-thinking impairment
  description: In regular users, 22 mg vaporized THC impaired divergent thinking while 5.5 mg did not differ from placebo.
  sourceId: pubmed-25288512
```

## Cautions

```yaml
- title: High-dose THC impaired divergent thinking
  description: The 22 mg vaporized THC arm performed worse on the Alternate Uses Task; this is an acute impairment signal, not evidence for therapeutic dosing.
  sourceId: pubmed-25288512
- title: Acute psychotic-experience risk was genotype-independent
  description: Psychotic experiences after intravenous THC did not differ by COMT Val158Met genotype in the studied cohort.
  sourceId: pubmed-26464454
```

## Claims

```yaml
- id: cannabis-claim-25288512
  assertion: In regular cannabis users, 22 mg vaporized THC was associated with worse divergent-thinking performance than 5.5 mg THC or placebo.
  relation: associated-with
  participants:
    - entityId: substance:cannabis
      role: intervention
    - entityId: tag:cognitive-performance
      role: measured endpoint
  context: Randomized double-blind between-groups study; final analysis n=54.
  sourceIds:
    - pubmed-25288512
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single acute study in regular users; dose and route specific.
- id: cannabis-claim-26464454
  assertion: COMT Val158Met genotype moderated acute THC working-memory impairment, while psychotic experiences were not genotype-moderated.
  relation: moderated-by
  participants:
    - entityId: substance:cannabis
      role: intervention
    - entityId: tag:cognitive-performance
      role: working-memory endpoint
  context: Double-blind intravenous THC study in 78 participants.
  sourceIds:
    - pubmed-26464454
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Genotype interaction from one controlled study; no dose value in abstract.
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
- id: optihealth-substance-01a08b04-2ec2-7224-8f66-bc4637708078
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2ec2-7224-8f66-bc4637708078
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-26464454
  title: "Genetic moderation of the effects of cannabis: catechol-O-methyltransferase (COMT) affects the impact of Δ9-tetrahydrocannabinol (THC) on working memory performance but not on the occurrence of psychotic experiences."
  authors: Elizabeth M Tunbridge, Graham Dunn, Robin M Murray, Nicole Evans, Rachel Lister, Katharina Stumpenhorst, Paul J Harrison, Paul D Morrison, Daniel Freeman
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26464454/
  kind: PubMed publication
  insight: In 78 participants, THC impaired working memory in COMT Val/Val carriers but not Met carriers; psychotic experiences were not genotype-moderated.
  limitation: PubMed abstract retrieved; no PMC full text was available in the connector.
  pmid: "26464454"
  doi: 10.1177/0269881115609073
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25288512
  title: "Cannabis and creativity: highly potent cannabis impairs divergent thinking in regular cannabis users."
  authors: Mikael A Kowal, Arno Hazekamp, Lorenza S Colzato, Henk van Steenbergen, Nic J A van der Wee, Jeffrey Durieux, Meriem Manai, Bernhard Hommel
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25288512/
  kind: PubMed publication
  insight: In regular cannabis users, 22 mg vaporized THC impaired divergent thinking, while 5.5 mg did not differ from placebo.
  limitation: PubMed abstract and PMC full text inspected; funding/conflicts not assessed in this pass.
  pmid: "25288512"
  doi: 10.1007/s00213-014-3749-1
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4336648/
- id: publication-link-0a5d473ed7b9
  title: "Telling true from false: cannabis users show increased susceptibility to false memories (2015)"
  authors: Not established
  year: 2015
  url: https://www.nature.com/mp/journal/vaop/ncurrent/full/mp201536a.html
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
  url: https://en.wikipedia.org/wiki/Cannabis
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Marijuana
  title: Examine
```
