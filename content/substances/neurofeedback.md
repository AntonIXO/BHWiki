---
slug: neurofeedback
name: Neurofeedback
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
  sourceId: reddit-index-neurofeedback
  observationId: neurofeedback-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-neurofeedback
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

Neurofeedback studies in healthy adults report that some participants can increase a targeted EEG band and may improve specific memory, attention, or mental-rotation tasks after 5–8 sessions. Reviews of ADHD trials find medium average effects in randomized studies but weaker or null differences in blinded sham-controlled comparisons; optimal protocols and predictors remain uncertain. [reddit-pmid-12543448][reddit-pmid-15889581][reddit-pmid-20850552][reddit-pmid-22254807][reddit-pmid-22930416][reddit-pmid-22890816]

## Description

This page imports the Reddit index source trail for Neurofeedback. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed abstracts retrieved for six linked publications; full-text retrieval was attempted for PMC3441929 (PMID 22930416) but the connector returned an internal error in this pass. The abstracts support protocol-specific EEG and cognitive findings, but not a universal effect. Reviews note small samples, variable blinding/sham controls, and uncertain optimal parameters.

## Doses

```yaml
- label: Healthy-adult SMR/theta protocol
  amount: 8 sessions
  quantity: 8
  quantityMax: null
  unit: sessions
  ingredient: EEG neurofeedback
  formulation: Sensorimotor rhythm (12–15 Hz) or theta (4–7 Hz) training
  route: EEG feedback
  frequency: Not reported in abstract
  duration: 8 sessions
  population: Healthy adults
  purpose: Research training exposure; not a therapeutic prescription.
  sourceCategory: research
  note: SMR training improved cued recall and focused attention; theta training did not change EEG in that study.
  sourceId: reddit-pmid-12543448
- label: Upper-alpha protocol
  amount: 5 sessions
  quantity: 5
  quantityMax: null
  unit: sessions
  ingredient: EEG neurofeedback
  formulation: Individually determined upper-alpha training
  route: EEG feedback
  frequency: Within 1 week
  duration: 5 sessions
  population: Healthy adults
  purpose: Research training exposure; not a therapeutic prescription.
  note: Eleven of 14 participants showed training success in one study.
  sourceId: reddit-pmid-20850552
```

## Pharmacokinetics

```yaml
- id: neurofeedback-reddit-pk-unestablished
  analyte: Neurofeedback intervention
  route: EEG feedback
  formulation: Behavioral training
  population: Human research participants
  endpoint: elimination-half-life
  statistic: not-applicable
  value: null
  low: null
  high: null
  unit: hours
  context: Neurofeedback is a training intervention; pharmacokinetic parameters do not apply.
  sourceId: reddit-pmid-12543448
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
- id: reddit-neurofeedback-attention-12543448
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: SMR training showed a smaller improvement in focused-attention accuracy than in cued recall.
  sourceId: reddit-pmid-12543448
  population: Healthy adults
  exposure: Eight sessions of SMR neurofeedback
  instrument: Two-sequence continuous-performance task
  magnitude: Quantitative estimate not reported in abstract.
  reportType: measured-assessment
- id: reddit-neurofeedback-adhd-22930416
  conceptId: attention
  name: ADHD attention symptoms
  direction: Variable
  evidence: Limited research
  description: Reviews found positive nonrandomized results, but direct sham-neurofeedback comparisons showed no group differences in three published studies; methodological limitations were emphasized.
  sourceId: reddit-pmid-22930416
  population: Children and adults with ADHD across reviewed studies
  exposure: Neurofeedback protocols varied across trials
  instrument: ADHD symptom measures
  magnitude: Effectiveness less robust in randomized controlled evidence.
  reportType: systematic-review
```

## Mechanisms

```yaml
- title: EEG operant conditioning
  description: Neurofeedback trains participants to alter selected EEG frequency bands using real-time feedback; the linked studies associate SMR or upper-alpha increases with task-specific performance changes.
  sourceId: reddit-pmid-12543448
- title: Protocol specificity and uncertainty
  description: The ADHD evidence review states that neurofeedback can change brain-activity patterns, but optimal protocol and predictors of response remain unknown.
  sourceId: reddit-pmid-22930416
```

## Cautions

```yaml
- title: Sham-controlled uncertainty
  description: Reviews report that direct neurofeedback versus sham-neurofeedback comparisons found no group differences in three studies, with small samples and blinding limitations.
  sourceId: reddit-pmid-22930416
- title: Protocol heterogeneity
  description: Session count, EEG target, comparator, and outcome measures varied across studies; results cannot be generalized to every neurofeedback protocol.
  sourceId: reddit-pmid-22890816
```

## Claims

```yaml
- id: reddit-claim-neurofeedback-22930416-0
  assertion: Neurofeedback changes targeted EEG activity and may improve selected cognitive or ADHD outcomes, but sham-controlled efficacy remains uncertain.
  relation: mixed-evidence
  participants:
  - entityId: substance:neurofeedback
    role: intervention
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Six linked abstracts include small experimental studies and reviews; effects are protocol-specific.
  sourceIds:
  - reddit-pmid-12543448
  - reddit-pmid-15889581
  - reddit-pmid-20850552
  - reddit-pmid-22254807
  - reddit-pmid-22930416
  - reddit-pmid-22890816
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Heterogeneous protocols and limited blinded sham-controlled data.
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
  url: https://en.wikipedia.org/wiki/Neurofeedback
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-neurofeedback
  title: Reddit Nootropics index entry
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-12543448
  title: The effect of training distinct neurofeedback protocols on aspects of cognitive performance.
  authors: David Vernon, Tobias Egner, Nick Cooper, Theresa Compton, Claire Neilands, Amna Sheri, John Gruzelier
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12543448/
  kind: PubMed publication
  insight: The use of neurofeedback as an operant conditioning paradigm has disclosed that participants are able to gain some control over particular aspects of their electroencephalogram (EEG).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '12543448'
  doi: 10.1016/s0167-8760(02)00091-0
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15889581
  title: Increasing individual upper alpha power by neurofeedback improves cognitive performance in human subjects.
  authors: Simon Hanslmayr, Paul Sauseng, Michael Doppelmayr, Manuel Schabus, Wolfgang Klimesch
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15889581/
  kind: PubMed publication
  insight: The hypothesis was tested of whether neurofeedback training (NFT)--applied in order to increase upper alpha but decrease theta power--is capable of increasing cognitive performance.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '15889581'
  doi: 10.1007/s10484-005-2169-8
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20850552
  title: Neurofeedback training of the upper alpha frequency band in EEG improves cognitive performance.
  authors: Benedikt Zoefel, René J Huster, Christoph S Herrmann
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/20850552/
  kind: PubMed publication
  insight: In this study, the individually determined upper alpha frequency band in EEG (electroencephalogram) was investigated as a neurofeedback parameter.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '20850552'
  doi: 10.1016/j.neuroimage.2010.08.078
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-a26a89f7de25
  title: 'Upper-Alpha Neurofeedback Training for Cognitive Enhancement: A Single-Session Study'
  authors: Not established
  year: 2026
  url: https://link.springer.com/chapter/10.1007/978-3-642-34546-3_214
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22254807
  title: EEG-based upper alpha neurofeedback training improves working memory performance.
  authors: Carlos Escolano, Monica Aguilar, Javier Minguez
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22254807/
  kind: PubMed publication
  insight: Neurofeedback (NF) training has revealed its therapeutical effects to treat a variety of neurological and psychological disorders, and has demonstrated its feasibility to improve certain cognitive aptitudes in healthy users.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22254807'
  doi: 10.1109/IEMBS.2011.6090651
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-8f834c74e73d
  title: Direction of SMR and Beta Change with Attention in Adults
  authors: Not established
  year: 2026
  url: https://www.tandfonline.com/doi/abs/10.1080/10874200802668283
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22930416
  title: Evidence-based information on the clinical use of neurofeedback for ADHD.
  authors: Tais S Moriyama, Guilherme Polanczyk, Arthur Caye, Tobias Banaschewski, Daniel Brandeis, Luis A Rohde
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22930416/
  kind: PubMed publication
  insight: Neurofeedback (NF) is a training to enhance self-regulatory capacity over brain activity patterns and consequently over brain mental states.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22930416'
  pmcid: PMC3441929
  doi: 10.1007/s13311-012-0136-7
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22890816
  title: Current status of neurofeedback for attention-deficit/hyperactivity disorder.
  authors: Nicholas Lofthouse, L Eugene Arnold, Elizabeth Hurt
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22890816/
  kind: PubMed publication
  insight: As conventional treatments offer incomplete benefit for over 33 % of children with attention-deficit/hyperactivity disorder (ADHD) and many refuse to try them, additional treatments are needed.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22890816'
  doi: 10.1007/s11920-012-0301-z
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-98288c1450a8
  title: Archive of studies on neurofeedback
  authors: Not established
  year: 2026
  url: https://www.isnr.org/resources/comprehensive-bibliography.cfm
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
