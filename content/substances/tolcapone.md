---
slug: tolcapone
name: Tolcapone
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
  sourceId: reddit-index-tolcapone
  observationId: tolcapone-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-tolcapone
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

Tolcapone has 2 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 2 retrieved PubMed records out of 2 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 2 PubMed records linked from this Reddit index entry; 0 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: tolcapone-pk-unestablished
  analyte: Tolcapone
  route: Not assessed
  formulation: No source-specific PK endpoint in linked abstracts
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Linked PubMed abstracts did not establish a validated elimination half-life.
  sourceId: reddit-index-tolcapone
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
- id: reddit-tolcapone-episodic-memory-17063156
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: Efforts to enhance prefrontal-related cognition, which have focused on catecholaminergic stimulant drugs, have been unsatisfactory. We found significant drug effects on measures of executive function and verbal episodic memory and a significant drug by genotype interaction on the latter, such that individuals with val/val genotypes improved, whereas individuals with met/met genotypes worsened on tolcapone. fMRI revealed a significant tolcapone-induced improvement in the efficiency of information processing in prefrontal cortex during a working memory test.
  sourceId: reddit-pmid-17063156
  population: To explore in a proof of concept study the effects of tolcapone, a CNS penetrant specific COMT inhibitor, we performed a randomized, double blind, placebo controlled, and crossover design of this drug in normal subjects stratified by COMT (val158met) genotype.
  exposure: Recently, the demonstration that a functional polymorphism in the catecholamine-O-methyltransferase (COMT) gene impacts prefrontal cognition raises the possibility of a novel pharmacological approach for the treatment of prefrontal lobe executive dysfunction.
  instrument: fMRI)
  magnitude: Efforts to enhance prefrontal-related cognition, which have focused on catecholaminergic stimulant drugs, have been unsatisfactory. We found significant drug effects on measures of executive function and verbal episodic memory and a significant drug by genotype interaction on the latter, such that individuals with val/
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 17063156)
  description: Prefrontal cortical dopamine (DA) regulates various executive cognitive functions, including attention and working memory.
  sourceId: reddit-pmid-17063156
- title: Explicit mechanistic or disposition finding (PMID 17909307)
  description: The drug is generally well tolerated, with the most common adverse events being dopaminergic related.
  sourceId: reddit-pmid-17909307
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 17063156)
  description: Recently, the demonstration that a functional polymorphism in the catecholamine-O-methyltransferase (COMT) gene impacts prefrontal cognition raises the possibility of a novel pharmacological approach for the treatment of prefrontal lobe executive dysfunction.
  sourceId: reddit-pmid-17063156
- title: Safety or adverse-event finding (PMID 17909307)
  description: The drug is generally well tolerated, with the most common adverse events being dopaminergic related.
  sourceId: reddit-pmid-17909307
```

## Claims

```yaml
- id: reddit-claim-tolcapone-17063156
  assertion: Efforts to enhance prefrontal-related cognition, which have focused on catecholaminergic stimulant drugs, have been unsatisfactory. We found significant drug effects on measures of executive function and verbal episodic memory and a significant drug by genotype interaction on the latter, such that individuals with val/val genotypes improved, whereas individuals with met/met genotypes worsened on tolcapone. fMRI revealed a significant tolcapone-induced improvement in the efficiency of information processing in prefrontal cortex during a working memory test.
  relation: associated-with
  participants:
  - entityId: substance:tolcapone
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: PMID 17063156 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-17063156
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
- id: reddit-index-tolcapone
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-17063156
  title: Tolcapone improves cognition and cortical information processing in normal human subjects.
  authors: José A Apud, Venkata Mattay, Jingshan Chen, Bhaskar S Kolachana, Joseph H Callicott, Roberta Rasetti, Guilna Alce, Jennifer E Iudicello, Natkai Akbar, Michael F Egan, Terry E Goldberg, Daniel R Weinberger
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17063156/
  kind: PubMed publication
  insight: Efforts to enhance prefrontal-related cognition, which have focused on catecholaminergic stimulant drugs, have been unsatisfactory. We found significant drug effects on measures of executive function and verbal episodic memory and a significant drug by genotype interaction on the latter, such that individuals with val/val genotypes improved, whereas individuals with met/met genotypes worsened on tolcapone. fMRI revealed a significant tolcapone-induced improvement in the efficiency of information processing in prefrontal cortex during a working memory test.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '17063156'
  doi: 10.1038/sj.npp.1301227
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17909307
  title: 'Tolcapone: an efficacy and safety review (2007).'
  authors: C Warren Olanow, Paul B Watkins
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17909307/
  kind: PubMed publication
  insight: Tolcapone (Tasmar), an inhibitor of catechol-O-methyltransferase, is an effective antiparkinsonian agent when used as an adjunct to levodopa in patients with Parkinson disease who have end-of-dose motor fluctuations. In clinical trials, tolcapone significantly reduced "off" time and levodopa requirements. The drug is generally well tolerated, with the most common adverse events being dopaminergic related.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '17909307'
  doi: 10.1097/wnf.0b013e318038d2b6
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
