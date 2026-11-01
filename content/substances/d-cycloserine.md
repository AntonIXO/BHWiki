---
slug: d-cycloserine
name: D-cycloserine
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
  sourceId: reddit-index-d-cycloserine
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-d-cycloserine
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

D-cycloserine (DCS) is an NMDA-receptor glycine-site partial agonist. The linked human studies show facilitation of declarative learning and fear-memory consolidation under specific laboratory paradigms; they do not establish general cognitive enhancement or clinical treatment efficacy.

## Description

A randomized fMRI study in 40 healthy volunteers used a single 250 mg oral dose and found improved declarative learning with increased activity in hippocampal cornu ammonis. A second randomized study administered 500 mg after fear conditioning to healthy women; at 72 hours, DCS enhanced conditioned fear responses and associated hippocampal/medial-prefrontal responses. The linked review (PMID 19520359; PMC2752328) argues that DCS may preferentially facilitate lower-order automatic extinction learning during exposure-based therapy, while lab-based human extinction studies often show no effect.

## Evidence note

Reviewed the two linked PubMed abstracts and retrieved PMC full text for PMID 18477687 (PMC2638747) and the linked review PMID 19520359 (PMC2752328). The 18477687 full text reports 500 mg DCS, 31 completers (15 DCS/16 placebo), one withdrawal for headache and an approximately 10–12 hour plasma half-life. PMID 20303474 had no PMC full text available in this pass. These are acute, small healthy-volunteer experiments plus a mechanistic review.

## Doses

```yaml
- label: Declarative-learning study
  amount: 250 mg
  quantity: 250
  quantityMax: null
  unit: mg
  ingredient: D-cycloserine
  formulation: Oral DCS tablets
  route: Oral
  frequency: Single dose
  duration: Acute laboratory study
  population: 40 healthy volunteers
  purpose: Declarative-learning experiment
  sourceCategory: research
  note: Single oral dose reported in the PubMed abstract.
  sourceId: reddit-pmid-20303474
- label: Fear-memory consolidation study
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: D-cycloserine
  formulation: Two 250-mg tablets
  route: Oral
  frequency: Single post-learning dose
  duration: 72-hour memory test
  population: 31 healthy female volunteers who completed the study
  purpose: Fear-conditioning and extinction experiment
  sourceCategory: research
  note: Dose and tablet formulation retrieved from PMC full text; one DCS participant withdrew with headache.
  sourceId: reddit-pmid-18477687
```

## Pharmacokinetics

```yaml
- id: d-cycloserine-plasma-half-life-18477687
  analyte: D-cycloserine
  route: Oral
  formulation: DCS tablets
  population: Healthy volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: PMC full text states DCS has a plasma half-life of approximately 10-12 hours; this was used to keep the 72-hour test drug-free.
  sourceId: reddit-pmid-18477687
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: d-cycloserine-declarative-learning-20303474
  conceptId: declarative-learning
  name: Declarative learning
  direction: Increased
  evidence: Human research
  description: A single 250 mg oral dose facilitated declarative learning in healthy volunteers and increased BOLD activity in the hippocampal cornu ammonis region.
  sourceId: reddit-pmid-20303474
  population: 40 healthy volunteers
  exposure: D-cycloserine 250 mg orally
  instrument: Two declarative-learning tasks with fMRI
  magnitude: null
  reportType: measured-assessment
- id: d-cycloserine-fear-memory-consolidation-18477687
  conceptId: fear-memory-consolidation
  name: Fear-memory consolidation
  direction: Increased
  evidence: Human research
  description: Post-learning 500 mg DCS enhanced conditioned responses at a 72-hour test and increased CS-evoked posterior hippocampal/collateral-sulcus and medial-prefrontal responses.
  sourceId: reddit-pmid-18477687
  population: 31 healthy female volunteers who completed the randomized study
  exposure: DCS 500 mg after fear conditioning/extinction
  instrument: Skin-conductance responses and fMRI
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: d-cycloserine-hippocampal-activity-20303474
  conceptId: hippocampal-activity
  name: Hippocampal cornu ammonis activity
  direction: Increased
  evidence: Human research
  description: DCS increased blood-oxygen-level-dependent activity in the probabilistically defined hippocampal cornu ammonis region during declarative learning.
  sourceId: reddit-pmid-20303474
  population: 40 healthy volunteers
  exposure: Single oral DCS 250 mg
  instrument: fMRI
  magnitude: null
  reportType: measured-assessment
- id: d-cycloserine-conditioned-response-18477687
  conceptId: conditioned-fear-response
  name: Conditioned response at 72 hours
  direction: Increased
  evidence: Human research
  description: Relative to placebo, DCS enhanced skin-conductance responses to the conditioned stimulus at the 72-hour memory test, indicating stronger fear-memory expression under this paradigm.
  sourceId: reddit-pmid-18477687
  population: Healthy female volunteers
  exposure: Single post-learning DCS 500 mg
  instrument: Skin conductance
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: NMDA glycine-site partial agonism
  description: DCS acts as a partial agonist at the NMDA receptor glycine-binding site, a mechanism proposed to facilitate hippocampal and amygdala-dependent learning.
  sourceId: reddit-pmid-20303474
- title: NMDA-dependent fear-memory consolidation
  description: The full-text fear-conditioning study interprets enhanced 72-hour conditioned responses and hippocampal/medial-prefrontal activity as evidence that NMDA receptors regulate human fear-memory consolidation.
  sourceId: reddit-pmid-18477687
- title: Lower-order versus higher-order extinction learning
  description: The linked review proposes that DCS may preferentially facilitate lower-level automatic learning during exposure-based therapy, whereas higher-order cognitive laboratory extinction may show little or no benefit.
  sourceId: reddit-link-50208bdac4f2
```

## Cautions

```yaml
- title: Headache-related withdrawal
  description: In the full-text 500 mg study, one participant withdrew three days after ingestion of DCS complaining of headaches.
  sourceId: reddit-pmid-18477687
- title: Paradigm-specific effect
  description: The observed effects were measured in declarative-learning and fear-conditioning tasks in small healthy samples; they do not establish broad cognitive enhancement or clinical efficacy.
  sourceId: reddit-pmid-20303474
- title: Drug-interaction and medical exclusions
  description: The full-text study excluded medication use, kidney impairment, heart conditions, porphyria and antibiotic allergy; this is study eligibility context, not a complete safety label.
  sourceId: reddit-pmid-18477687
- title: Review-level uncertainty about extinction transfer
  description: The PMC review notes contradictory human laboratory extinction results and argues that effects may depend on lower-order fear processes; exposure-therapy translation remains context-specific.
  sourceId: reddit-link-50208bdac4f2
```

## Claims

```yaml
- id: d-cycloserine-claim-declarative-learning
  assertion: A single 250 mg oral dose of D-cycloserine facilitated declarative learning in healthy volunteers.
  relation: experimental-effect
  participants:
  - entityId: substance:d-cycloserine
    role: intervention
  - entityId: tag:declarative-learning
    role: outcome
  context: Randomized fMRI study of 40 healthy volunteers.
  sourceIds:
  - reddit-pmid-20303474
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single acute laboratory study; no clinical endpoint.
- id: d-cycloserine-claim-fear-consolidation
  assertion: Post-learning DCS enhanced fear-memory expression at 72 hours in a healthy-volunteer conditioning paradigm.
  relation: experimental-effect
  participants:
  - entityId: substance:d-cycloserine
    role: intervention
  - entityId: tag:fear-memory-consolidation
    role: outcome
  context: Randomized double-blind study; 500 mg DCS after conditioning.
  sourceIds:
  - reddit-pmid-18477687
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Fear-conditioning paradigm and small sample; stronger fear response is not a general benefit.
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
- id: reddit-index-d-cycloserine
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Discovery index linking DCS publications and an additional PMC article.
  limitation: Community indexing is not efficacy or safety evidence.
- id: reddit-pmid-20303474
  title: The N-methyl-D-aspartate receptor co-agonist D-cycloserine facilitates declarative learning and hippocampal activity in humans.
  authors: Oezguer A Onur; Thomas E Schlaepfer; Juraj Kukolja; et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20303474/
  kind: PubMed publication
  insight: Single 250 mg oral DCS improved declarative learning and hippocampal CA activity in 40 healthy volunteers.
  limitation: Acute, small healthy-volunteer study; no clinical efficacy inference.
  pmid: '20303474'
  doi: 10.1016/j.biopsych.2010.01.022
- id: reddit-pmid-18477687
  title: The NMDA agonist D-cycloserine facilitates fear memory consolidation in humans.
  authors: Raffael Kalisch; Beatrice Holt; Predrag Petrovic; et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/18477687/
  kind: PubMed publication
  insight: Post-learning 500 mg DCS enhanced 72-hour conditioned responses and CS-evoked hippocampal/medial-prefrontal responses; PMC full text retrieved.
  limitation: Small healthy-female sample; one headache-related withdrawal; stronger fear memory is not inherently therapeutic.
  pmid: '18477687'
  pmcid: PMC2638747
  doi: 10.1093/cercor/bhn076
- id: reddit-link-50208bdac4f2
  title: DCS facilitation of fear extinction and exposure-based therapy may rely on lower-level, automatic mechanisms
  authors: Not established
  year: 2009
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2752328/
  kind: PMC publication linked from Reddit index
  insight: Review proposes that DCS may preferentially facilitate lower-order automatic learning during exposure-based therapy; human laboratory extinction findings are mixed.
  limitation: Review-level mechanistic interpretation; not a standalone efficacy trial.
  pmid: '19520359'
  pmcid: PMC2752328
  doi: 10.1016/j.biopsych.2009.04.017
```

## Legal

```yaml
[]
```
