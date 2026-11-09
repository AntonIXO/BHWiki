---
slug: chewing-gum
name: Chewing gum
subtitle: Behaviour and protocol
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Behaviour and protocol
tags:
  - alertness
  - cognitive-performance
  - stress-response
  - memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-26782231
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-26782231
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
x-order: 9007199254740991
---

## Summary

Chewing gum has been studied as a simple behavioural intervention for attention, alertness and memory.

## Description

In a crossover study, gum increased end-of-session alertness by about 10% and improved Alice Heim test accuracy but did not improve story recall or short-memory tasks. A small laboratory study found greater prefrontal activation and pleasantness during gum chewing under aversive auditory stimulation. A resistance manipulation found no memory benefit from chewing more pellets.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
[]
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
- id: chewing-alertness-19356310
  conceptId: alertness
  name: Alertness
  direction: Increased
  evidence: Human research
  description: Chewing gum increased alertness by approximately 10% at the end of testing in a crossover study.
  sourceId: pubmed-19356310
  population: Healthy volunteers in crossover sessions
  exposure: Chewing gum versus no-gum session
  instrument: Mood scales
  magnitude: ~10% increase reported in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: chewing-cognitive-19356310
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Gum improved accuracy on the Alice Heim intelligence test but had no significant effect on story recall or short-memory tasks.
  sourceId: pubmed-19356310
  population: Healthy volunteers in crossover sessions
  exposure: Chewing gum versus no-gum session
  instrument: Alice Heim test; recall and working-memory tasks
  magnitude: null
  reportType: measured-assessment
- id: chewing-stress-26782231
  conceptId: stress-response
  name: Stress Response
  direction: Decreased
  evidence: Human research
  description: In 11 adults, gum chewing during aversive sounds increased prefrontal oxygenation and pleasantness and reduced STAI scores versus sounds without gum.
  sourceId: pubmed-26782231
  population: 11 normal adults
  exposure: 30-second gum-chewing blocks during aversive auditory stimuli
  instrument: NIRS, EEG, heart rate, STAI, VAS
  magnitude: null
  reportType: measured-assessment
- id: chewing-memory-23848385
  conceptId: memory
  name: Memory
  direction: Variable
  evidence: Human research
  description: Increasing resistance from one to four gum pellets did not increase immediate free recall; matching the chewing context at learning and recall improved recall.
  sourceId: pubmed-23848385
  population: Healthy participants in within-person design
  exposure: One versus four gum pellets at learning and recall
  instrument: Immediate free recall
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Prefrontal and autonomic activation
  description: Gum chewing increased right medial prefrontal oxygenation, alpha-wave appearance and heart rate during aversive sounds.
  sourceId: pubmed-26782231
```

## Cautions

```yaml
- title: Inconsistent memory evidence
  description: A review notes contradictory acute cognition findings; a resistance study found no added recall benefit from more pellets.
  sourceId: pubmed-26090381
```

## Claims

```yaml
- id: chewing-claim-19356310
  assertion: Chewing gum increased alertness and Alice Heim test accuracy but did not improve memory tasks in a crossover study.
  relation: associated-with
  participants:
    - entityId: substance:chewing-gum
      role: intervention
    - entityId: tag:alertness
      role: measured endpoint
  context: Healthy-volunteer crossover study.
  sourceIds:
    - pubmed-19356310
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute context-specific effects.
- id: chewing-claim-23848385
  assertion: Chewing more gum pellets did not improve immediate free recall; matching chewing context was associated with better recall.
  relation: associated-with
  participants:
    - entityId: substance:chewing-gum
      role: intervention
    - entityId: tag:memory
      role: measured endpoint
  context: Within-participant resistance manipulation.
  sourceIds:
    - pubmed-23848385
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No universal memory enhancement.
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
- id: pubmed-26782231
  title: Relationships Between Gum-Chewing and Stress.
  authors: Michiyo Konno, Tomotaka Takeda, Yoshiaki Kawakami, Yoshihiro Suzuki, Yoshiaki Kawano, Kazunori Nakajima, Takamitsu Ozawa, Keiichi Ishigami, Naohiro Takemura, Kaoru Sakatani
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26782231/
  kind: PubMed publication
  insight: Studies have shown that chewing is thought to affect stress modification in humans.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26782231"
  doi: 10.1007/978-1-4939-3023-4_43
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-26090381
  title: "Chew the Pain Away: Oral Habits to Cope with Pain and Stress and to Stimulate Cognition."
  authors: Roxane Anthea Francesca Weijenberg, Frank Lobbezoo
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26090381/
  kind: PubMed publication
  insight: The acute effects of chewing gum on cognitive performance, stress, and pain have been intensively studied in the last decade.
  limitation: PubMed abstract and linked PMC full text inspected; funding and conflicts were not assessed in this pass.
  pmid: "26090381"
  doi: 10.1155/2015/149431
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4450211/
- id: pubmed-23848385
  title: The impact of chewing gum resistance on immediate free recall.
  authors: Sarah Rickman, Andrew Johnson, Christopher Miles
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23848385/
  kind: PubMed publication
  insight: Although the facilitative effects of chewing gum on free recall have proved contentious (e.g., Tucha, Mecklinger, Maier, Hammerl, & Lange, 2004; Wilkinson, Scholey, & Wesnes, 2002), there are strong physiological grounds, for example, increased cerebral activity and blood flow following the act of mastication, to suppose facilitation.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23848385"
  doi: 10.1111/j.2044-8295.2012.02124.x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19356310
  title: Effects of chewing gum on mood, learning, memory and performance of an intelligence test.
  authors: Andrew Smith
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19356310/
  kind: PubMed publication
  insight: "RATIONALE: Recent research suggests that chewing gum may increase alertness and lead to changes in cognitive performance."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19356310"
  doi: 10.1179/147683009X423247
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
