---
slug: thiamine
name: Thiamine
subtitle: Vitamin and mineral
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Vitamin and mineral
tags:
  - cognitive-performance
  - memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a17a4c-1088-78ed-8b68-03d71acd0722
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a17a4c-1088-78ed-8b68-03d71acd0722
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
x-order: 1942
---

## Summary

Thiamine, or vitamin B1, supports enzymes involved in energy metabolism. Research explores its relationship to brain function and memory.

## Description

Thiamine, or vitamin B1, supports enzymes involved in energy metabolism. Research explores its relationship to brain function and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 9122365 study exposure: 50 mg"
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Thiamine
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: twenty young adult females took either a placebo or 50 mg thiamine, each day for 2 months
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: One hundred and twenty young adult females took either a placebo or 50 mg thiamine, each day for 2 months
  sourceId: pubmed-9122365
- label: "PMID 1986037 study exposure: 10 mg"
  amount: 10 mg
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Thiamine
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: For treatment, subjects were randomly assigned to either thiamin (10 mg daily) or placebo groups.
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: For treatment, subjects were randomly assigned to either thiamin (10 mg daily) or placebo groups
  sourceId: pubmed-1986037
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
- id: research-thiamine-cognitive-performance-9122365
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: An improvement in thiamine status was associated with reports of being more clearheaded, composed and energetic.
  sourceId: pubmed-9122365
  population: twenty young adult females took either a placebo or 50 mg thiamine, each day for 2 months
  exposure: One hundred and twenty young adult females took either a placebo or 50 mg thiamine, each day for 2 months.
  instrument: null
  magnitude: An improvement in thiamine status was associated with reports of being more clearheaded, composed and energetic.
  reportType: measured-assessment
- id: research-thiamine-memory-25994133
  conceptId: memory
  name: Memory
  direction: Variable
  evidence: Limited research
  description: Chronic immobilization stress resulted in a significant decrease in BDNF and Ach levels in the hippocampus and impairment in spatial memory functions and decreased basal activity. However, either swimming training or thiamine intake for 30 d was proved to induce a significant increase both in BDNF and Ach in conjunction with improved performance in the T maze, marked anxiolytic effect and enhanced ambulation in the open field test, as compared to the stress group. Interestingly, swimming-exercised rats showed significantly higher levels of BDNF versus thiamine-receiving rats, while thiamine-receiving rats showed higher locomotor activity and less freezing behavior in the open field test compared to the swimming group.
  sourceId: pubmed-25994133
  population: "8 rats/group): control group"
  exposure: "Male Wistar rats were randomly assigned to 4 groups (8 rats/group): control group; stress group; swimming and stress group; and thiamine and stress group."
  instrument: null
  magnitude: Chronic immobilization stress resulted in a significant decrease in BDNF and Ach levels in the hippocampus and impairment in spatial memory functions and decreased basal activity. However, either swimming training or thiamine intake for 30 d was proved to induce a significant increase both in BDNF and Ach in conjunctio
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 25994133)
  description: Chronic stress affects brain areas involved in learning and emotional responses through modulation of neurotropic factors or neurotransmitters.
  sourceId: pubmed-25994133
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-thiamine-9122365
  assertion: An improvement in thiamine status was associated with reports of being more clearheaded, composed and energetic.
  relation: associated-with
  participants:
    - entityId: substance:thiamine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: PMID 9122365 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-9122365
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
- id: research-claim-thiamine-25994133
  assertion: Chronic immobilization stress resulted in a significant decrease in BDNF and Ach levels in the hippocampus and impairment in spatial memory functions and decreased basal activity. However, either swimming training or thiamine intake for 30 d was proved to induce a significant increase both in BDNF and Ach in conjunction with improved performance in the T maze, marked anxiolytic effect and enhanced ambulation in the open field test, as compared to the stress group. Interestingly, swimming-exercised rats showed significantly higher levels of BDNF versus thiamine-receiving rats, while thiamine-receiving rats showed higher locomotor activity and less freezing behavior in the open field test compared to the swimming group.
  relation: associated-with
  participants:
    - entityId: substance:thiamine
      role: intervention or exposure
    - entityId: tag:memory
      role: reported endpoint
  context: PMID 25994133 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-25994133
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
- id: optihealth-substance-01a17a4c-1088-78ed-8b68-03d71acd0722
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a17a4c-1088-78ed-8b68-03d71acd0722
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-9122365
  title: Thiamine supplementation mood and cognitive functioning.
  authors: D Benton, R Griffiths, J Haller
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9122365/
  kind: PubMed publication
  insight: An improvement in thiamine status was associated with reports of being more clearheaded, composed and energetic.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "9122365"
  doi: 10.1007/s002130050163
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25994133
  title: Impact of exercise and vitamin B1 intake on hippocampal brain-derived neurotrophic factor and spatial memory performance in a rat model of stress.
  authors: Abeer E Dief, Doaa M Samy, Fatma I Dowedar
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25994133/
  kind: PubMed publication
  insight: Chronic immobilization stress resulted in a significant decrease in BDNF and Ach levels in the hippocampus and impairment in spatial memory functions and decreased basal activity. However, either swimming training or thiamine intake for 30 d was proved to induce a significant increase both in BDNF and Ach in conjunction with improved performance in the T maze, marked anxiolytic effect and enhanced ambulation in the open field test, as compared to the stress group. Interestingly, swimming-exercised rats showed significantly higher levels of BDNF versus thiamine-receiving rats, while thiamine-receiving rats showed higher locomotor activity and less freezing behavior in the open field test comp
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "25994133"
  doi: 10.3177/jnsv.61.1
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-7477807
  title: Vitamin supplementation for 1 year improves mood.
  authors: D Benton, J Haller, J Fordy
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7477807/
  kind: PubMed publication
  insight: "One hundred and twenty-nine young healthy adults took either 10 times the recommended daily dose of 9 vitamins, or a placebo, under a double-blind procedure, for a year. After 12 months the mood of females taking the vitamin supplement was significantly improved in that they felt more 'agreeable', more composed and reported better mental health. These changes in mood after a year occurred even though the blood status of 9 vitamins reached a plateau after 3 months: this improvement in mood was associated in particular with improved riboflavin and pyridoxine status."
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "7477807"
  doi: 10.1159/000119220
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-222b9a1c18ea
  title: Thiamine Nutritional Status and Depressive Symptoms Are Inversely Associated among Older Chinese Adults (2013)
  authors: Not established
  year: 2013
  url: https://jn.nutrition.org/content/143/1/53.full
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-8447efc883f8
  title: The Impact of Thiamine Treatment on Generalized Anxiety Disorder (2011)
  authors: Not established
  year: 2011
  url: https://www.scirp.org/journal/PaperInformation.aspx?paperID=7555
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-1986037
  title: Influence of thiamin supplementation on the health and general well-being of an elderly Irish population with marginal thiamin deficiency.
  authors: L J Smidt, F M Cremin, L E Grivetti, A J Clifford
  year: 1991
  url: https://pubmed.ncbi.nlm.nih.gov/1986037/
  kind: PubMed publication
  insight: Compared to baseline and placebo supplemented values, thiamin-supplemented women experienced significantly increased appetite, energy intake, body weight and general well-being, and decreased fatigue. Thiamin supplementation also tended to reduce daytime sleep time, improve sleep patterns, and increase activity. These data suggest that evaluation of thiamin status is indicated when nonspecific conditions such as anorexia, weight loss, fatigue, depression, and sleep disorders are present in elderly persons.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "1986037"
  doi: 10.1093/geronj/46.1.m16
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
