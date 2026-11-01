---
slug: bromocriptine
name: Bromocriptine
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
  sourceId: reddit-index-bromocriptine
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-bromocriptine
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

Bromocriptine produces task- and capacity-dependent dopamine D2 agonist effects in healthy volunteers: some spatial working-memory gains coexist with impaired reversal learning.

## Description

Human studies include a 1.25 mg crossover trial showing improved spatial memory span but impaired probabilistic reversal learning, a study where bromocriptine reduced Stroop interference without improving delayed-response working memory, and an fMRI study in which lower-span participants benefited more on verbal working-memory retrieval.

## Evidence note

Reviewed PubMed abstracts for PMIDs 11797064, 15765257, 16180627 and 21503140; retrieved rights-eligible PMC full text for PMID 21503140 (PMC3071499). Doses were stated explicitly for PMIDs 11797064 and 21503140; the other abstracts do not state dose.

## Doses

```yaml
- label: Bromocriptine spatial-memory crossover study (PMID 11797064)
  amount: 1.25 mg
  quantity: 1.25
  quantityMax: null
  unit: mg
  ingredient: Bromocriptine
  formulation: Oral dopamine D2 agonist; formulation not specified in abstract
  route: Oral
  frequency: Single acute dose
  duration: Acute testing session
  population: 20 healthy volunteers
  purpose: Spatial-memory and reversal-learning research exposure
  sourceCategory: research
  note: Trial exposure; not a general dosing recommendation.
  sourceId: reddit-pmid-11797064
- label: Frontostriatal connectivity fMRI study (PMID 21503140)
  amount: 1.25 mg
  quantity: 1.25
  quantityMax: null
  unit: mg
  ingredient: Bromocriptine
  formulation: Oral D2 agonist; formulation not specified in full text
  route: Oral
  frequency: Single dose
  duration: fMRI scanning approximately 120 minutes post-dose
  population: 13 healthy adults aged 21–30 years
  purpose: Working-memory connectivity research exposure
  sourceCategory: research
  note: Full text confirms 1.25 mg bromocriptine or lactose placebo in a double-blind counterbalanced design.
  sourceId: reddit-pmid-21503140
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
- id: bromocriptine-spatial-memory-11797064
  conceptId: spatial-memory-state
  name: Spatial memory span
  direction: Increased
  evidence: Human research
  description: A single 1.25 mg bromocriptine dose enhanced spatial memory span in healthy volunteers while leaving recognition memory and planning unaffected.
  sourceId: reddit-pmid-11797064
  population: 20 healthy volunteers
  exposure: 1.25 mg bromocriptine
  instrument: CANTAB spatial recognition and working-memory tasks
  magnitude: Improved span; numeric effect not reported in abstract
  reportType: measured-assessment
- id: bromocriptine-reversal-learning-11797064
  conceptId: reversal-learning
  name: Probabilistic reversal learning
  direction: Decreased
  evidence: Human research
  description: The same 1.25 mg dose impaired the ability to reverse a learned probabilistic discrimination.
  sourceId: reddit-pmid-11797064
  population: 20 healthy volunteers
  exposure: 1.25 mg bromocriptine
  instrument: Discrimination-reversal task
  magnitude: Impairment reported; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: bromocriptine-stroop-interference-15765257
  conceptId: executive-control
  name: Stroop interference
  direction: Decreased
  evidence: Human research
  description: In a randomized crossover study comparing dopamine agonists, bromocriptine reduced Stroop interference, while neither bromocriptine nor pergolide changed delayed-response working-memory errors.
  sourceId: reddit-pmid-15765257
  population: 40 healthy men
  exposure: Bromocriptine versus pergolide/placebo; dose not stated in abstract
  instrument: Lateralized Stroop and delayed-response tasks
  magnitude: Reduced interference; no delayed-response effect
  reportType: measured-assessment
- id: bromocriptine-capacity-dependent-wm-16180627
  conceptId: working-memory
  name: Verbal working-memory retrieval efficiency
  direction: Variable
  evidence: Human research
  description: Bromocriptine effects depended on individual working-memory span, with greatest behavioral benefit in lower-span subjects and span-linked prefrontal activity changes.
  sourceId: reddit-pmid-16180627
  population: Healthy volunteers stratified by working-memory capacity
  exposure: Bromocriptine versus placebo; dose not stated in abstract
  instrument: Verbal delayed-recognition task with fMRI
  magnitude: Capacity-dependent; numeric effect not reported in abstract
  reportType: measured-assessment
- id: bromocriptine-frontostriatal-connectivity-21503140
  conceptId: frontostriatal-connectivity
  name: Frontostriatal functional connectivity
  direction: Variable
  evidence: Human research
  description: After 1.25 mg bromocriptine, low-working-memory-capacity participants showed increased frontostriatal connectivity with behavioral improvement, whereas high-capacity participants showed decreased connectivity associated with poorer performance.
  sourceId: reddit-pmid-21503140
  population: 13 healthy adults stratified by working-memory capacity
  exposure: 1.25 mg bromocriptine or lactose placebo
  instrument: fMRI during verbal working-memory task
  magnitude: Capacity-dependent connectivity changes; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Dopamine D2-receptor agonism
  description: Bromocriptine is a D2 agonist; the human studies support task- and baseline-capacity-dependent modulation of prefrontal executive control and memory networks.
  sourceId: reddit-pmid-11797064
```

## Cautions

```yaml
- title: Direction depends on task and baseline capacity
  description: The same acute exposure improved spatial memory span but impaired reversal learning, and benefits in verbal working memory were larger in lower-capacity participants.
  sourceId: reddit-pmid-11797064
```

## Claims

```yaml
- id: bromocriptine-claim-task-dependent-11797064
  assertion: Acute bromocriptine has task- and capacity-dependent cognitive effects, including improved spatial span but impaired reversal learning.
  relation: associated-with
  participants:
  - entityId: substance:bromocriptine
    role: intervention
  - entityId: tag:spatial-memory
    role: reported endpoint
  context: Healthy-volunteer placebo-controlled crossover studies.
  sourceIds:
  - reddit-pmid-11797064
  - reddit-pmid-15765257
  - reddit-pmid-16180627
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute studies with small healthy samples; clinical generalization is not established.
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
  url: https://en.wikipedia.org/wiki/Bromocriptine
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-bromocriptine
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-1b4873f041d4
  title: Facilitation of Working Memory in Humans by a D2 Dopamine Receptor Agonist
  authors: Not established
  year: 2026
  url: https://www.mitpressjournals.org/doi/abs/10.1162/jocn.1992.4.1.58
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-da3a77ecdd23
  title: D1- Versus D2-Receptor Modulation of Visuospatial Working Memory in Humans
  authors: Not established
  year: 2026
  url: https://www.jneurosci.org/content/18/7/2720.long
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16180627
  title: Individual capacity differences predict working memory performance and prefrontal activity following dopamine receptor stimulation.
  authors: Sasha E B Gibbs, Mark D'Esposito
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16180627/
  kind: PubMed publication
  insight: Dopamine receptors are abundant in the prefrontal cortex (PFC), a critical region involved in working memory.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '16180627'
  doi: 10.3758/cabn.5.2.212
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-a00f614dbf1a
  title: The dopamine agonist bromocriptine differentially affects fronto-striatal functional connectivity during working memory.
  authors: Wallace DL; Vytlacil JK; Nomura EM; Gibbs SEB; D'Esposito M
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21503140/
  kind: PubMed publication
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: '21503140'
  doi: 10.3389/fnhum.2011.00032
- id: reddit-pmid-15765257
  title: Differential dopaminergic modulation of executive control in healthy subjects.
  authors: Daniela Roesch-Ely, Hans Scheffel, Stephan Weiland, Markus Schwaninger, Hans-Peter Hundemer, Thomas Kolter, Matthias Weisbrod
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15765257/
  kind: PubMed publication
  insight: 'RATIONALE: Executive control (EC) has different subcomponents, e.g., response inhibition (measured, for example, by the Stroop task) and working memory (WM-measured, for example, by delayed response tasks, DRT).'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '15765257'
  doi: 10.1007/s00213-004-2027-z
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11797064
  title: Improved short-term spatial memory but impaired reversal learning following the dopamine D(2) agonist bromocriptine in human volunteers.
  authors: M A Mehta, R Swainson, A D Ogilvie, J Sahakian, T W Robbins
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11797064/
  kind: PubMed publication
  insight: 'RATIONALE: Studies in humans of cognitive effects of dopaminergic drugs have largely focused on tasks of working memory, with a few studies also examining executive function.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '11797064'
  doi: 10.1007/s002130100851
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21503140
  title: The dopamine agonist bromocriptine differentially affects fronto-striatal functional connectivity during working memory.
  authors: Wallace DL; Vytlacil JK; Nomura EM; Gibbs SEB; D'Esposito M
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21503140/
  kind: PubMed publication
  insight: In 13 healthy adults given 1.25 mg bromocriptine, frontostriatal connectivity increased with behavioral improvement in low-capacity participants but decreased with poorer performance in high-capacity participants.
  limitation: Small acute healthy-volunteer fMRI study; dose and effects are capacity-dependent.
  pmid: '21503140'
  pmcid: PMC3071499
  doi: 10.3389/fnhum.2011.00032
```

## Legal

```yaml
[]
```
