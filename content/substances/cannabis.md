---
slug: cannabis
name: Cannabis
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2ec2-7224-8f66-bc4637708078
  observationId: cannabis-identity-unassessed
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

Acute THC studies in regular users found dose- and genotype-dependent cognitive effects; the linked evidence does not establish cannabis as a cognitive enhancer.

## Description

The Reddit-linked human studies tested vaporized THC in regular cannabis users and intravenous THC in a non-clinical cohort. High-dose THC impaired divergent thinking, and THC impaired working memory in COMT Val/Val carriers; psychotic-experience effects were not moderated by COMT genotype.

## Evidence note

Two controlled human studies provide outcome-specific evidence. In 59 regular users, 22 mg vaporized THC impaired divergent thinking versus 5.5 mg and placebo (final analyses n=54). In 78 participants vulnerable to paranoia, intravenous THC impaired backward digit-span working memory in COMT Val/Val carriers, while psychotic experiences were genotype-independent. No pharmacokinetic endpoint or therapeutic dose was established.

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
  sourceId: reddit-pmid-25288512
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
  sourceId: reddit-pmid-25288512
```

## Pharmacokinetics

```yaml
- id: cannabis-identity-unassessed
  analyte: Cannabis
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity import does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2ec2-7224-8f66-bc4637708078
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
- id: cannabis-cognitive-26464454
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Decreased
  evidence: Human research
  description: Intravenous THC impaired backward digit-span working memory in COMT Val/Val carriers; the psychotic-experience effect did not vary by COMT genotype.
  sourceId: reddit-pmid-26464454
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
  sourceId: reddit-pmid-25288512
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
  sourceId: reddit-pmid-26464454
- title: Dose-dependent divergent-thinking impairment
  description: In regular users, 22 mg vaporized THC impaired divergent thinking while 5.5 mg did not differ from placebo.
  sourceId: reddit-pmid-25288512
```

## Cautions

```yaml
- title: High-dose THC impaired divergent thinking
  description: The 22 mg vaporized THC arm performed worse on the Alternate Uses Task; this is an acute impairment signal, not evidence for therapeutic dosing.
  sourceId: reddit-pmid-25288512
- title: Acute psychotic-experience risk was genotype-independent
  description: Psychotic experiences after intravenous THC did not differ by COMT Val158Met genotype in the studied cohort.
  sourceId: reddit-pmid-26464454
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
  - reddit-pmid-25288512
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
  - reddit-pmid-26464454
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

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Cannabis
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Marijuana
  title: Examine
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
- id: reddit-pmid-26464454
  title: 'Genetic moderation of the effects of cannabis: catechol-O-methyltransferase (COMT) affects the impact of Δ9-tetrahydrocannabinol (THC) on working memory performance but not on the occurrence of psychotic experiences.'
  authors: Elizabeth M Tunbridge, Graham Dunn, Robin M Murray, Nicole Evans, Rachel Lister, Katharina Stumpenhorst, Paul J Harrison, Paul D Morrison, Daniel Freeman
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26464454/
  kind: PubMed publication
  insight: In 78 participants, THC impaired working memory in COMT Val/Val carriers but not Met carriers; psychotic experiences were not genotype-moderated.
  limitation: PubMed abstract retrieved; no PMC full text was available in the connector.
  pmid: '26464454'
  doi: 10.1177/0269881115609073
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25288512
  title: 'Cannabis and creativity: highly potent cannabis impairs divergent thinking in regular cannabis users.'
  authors: Mikael A Kowal, Arno Hazekamp, Lorenza S Colzato, Henk van Steenbergen, Nic J A van der Wee, Jeffrey Durieux, Meriem Manai, Bernhard Hommel
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25288512/
  kind: PubMed publication
  insight: In regular cannabis users, 22 mg vaporized THC impaired divergent thinking, while 5.5 mg did not differ from placebo.
  limitation: PubMed abstract and PMC full text inspected; funding/conflicts not assessed in this pass.
  pmid: '25288512'
  doi: 10.1007/s00213-014-3749-1
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4336648/
- id: reddit-link-3e107a281f13
  title: /r/nootropics discussion
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/2kfznh/cannabis_and_creativity_highly_potent_cannabis/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-d9642506915e
  title: /r/DrugNerds discussion
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/DrugNerds/comments/2kfzlc/cannabis_and_creativity_highly_potent_cannabis/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-0a5d473ed7b9
  title: 'Telling true from false: cannabis users show increased susceptibility to false memories (2015)'
  authors: Not established
  year: 2015
  url: https://www.nature.com/mp/journal/vaop/ncurrent/full/mp201536a.html
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-66db700da050
  title: /r/DrugNerds discussion
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/DrugNerds/comments/313ur4/telling_true_from_false_cannabis_users_show/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-06dad560631b
  title: Nootropics to help quit cannabis
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/2j8fq8/nootropics_to_help_quit_cannabis/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-99ba095a5eee
  title: Could curcumin mitigate the negative effects of regular cannabis use?
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/2cg7yz/could_curcumin_mitigate_the_negative_effects_of/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-9e34aefd6aaf
  title: Can nootropics undo brain damage from pot use?
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/2b95u7/can_nootropics_undo_brain_damage_from_pot_use/cj301p7
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e20105ca5512
  title: How can I prevent the Cannabis "stoneover"?
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/26u15m/how_can_i_prevent_the_cannabis_stoneover/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-0e4575876b48
  title: How bad is Cannabis for memory and cognition?
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/22izj5/how_bad_is_cannabis_for_memory_and_cognition/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e6c406d8e0bc
  title: Ibuprofen to alleviate marijuana-induced memory impairments?
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/24sg8e/use_of_ibuprofen_to_alleviate_marijuanainduced/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
