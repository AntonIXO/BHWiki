---
slug: oxytocin
name: Oxytocin
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
  sourceId: reddit-index-oxytocin
  observationId: oxytocin-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-oxytocin
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

Small randomized intranasal oxytocin studies in healthy volunteers report context-specific changes in social and emotional processing. A single 24 IU dose improved selective face recognition, biological-motion sensitivity, positive self-attribution, and attachment-security ratings in some samples, while effects differed by sex and did not buffer acute social rejection. [reddit-pmid-18801829][reddit-pmid-19129382][reddit-pmid-19457618][reddit-pmid-19679759][reddit-pmid-19632787][reddit-pmid-20695687][reddit-pmid-25439340]

## Description

This page imports the Reddit index source trail for Oxytocin. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed abstracts retrieved for seven linked publications; PMC full text was retrieved for PMC3138620 (PMID 19457618), while retrieval of PMC6664913 (PMID 19129382) returned an internal connector error. The studies used small healthy samples, mostly single 24 IU intranasal doses, and report task- and context-specific effects rather than a general anxiolytic or cognitive-enhancing effect.

## Doses

```yaml
- label: Healthy-volunteer social cognition studies
  amount: 24 IU
  quantity: 24
  quantityMax: null
  unit: IU
  ingredient: Oxytocin
  formulation: Intranasal oxytocin spray
  route: intranasal
  frequency: Single dose
  duration: Acute testing 50 minutes post-dose in PMID 18801829; timing varied across studies.
  population: Healthy adult volunteers; sex and sample size varied by study.
  purpose: Research exposure; not a dosing recommendation.
  note: Several linked studies used 24 IU; not all abstracts specify dose.
  sourceId: reddit-pmid-18801829
```

## Pharmacokinetics

```yaml
- id: oxytocin-reddit-pk-unestablished
  analyte: Oxytocin
  route: intranasal
  formulation: Oxytocin nasal spray
  population: Healthy volunteers
  endpoint: elimination-half-life
  statistic: not-reported
  value: null
  low: null
  high: null
  unit: hours
  context: Linked abstracts report acute behavioral outcomes but no concentration-time or elimination parameters.
  sourceId: reddit-pmid-18801829
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-oxytocin-emotion-processing-18801829
  conceptId: anxiety
  name: Emotional processing
  direction: Variable
  evidence: Human randomized studies
  description: A single 24 IU intranasal dose slowed fearful-face identification and reduced misclassification of positive emotions as negative, without changing subjective mood or anxiety ratings.
  sourceId: reddit-pmid-18801829
  population: 29 healthy male volunteers
  exposure: Single 24 IU intranasal oxytocin
  instrument: Facial-emotion processing tasks; mood and anxiety ratings
  magnitude: Task-specific reaction-time and classification changes; no mood/anxiety difference.
  reportType: randomized-controlled-trial
- id: reddit-oxytocin-social-memory-19129382
  conceptId: episodic-memory
  name: Social recognition memory
  direction: Increased
  evidence: Human randomized study
  description: Intranasal oxytocin improved recognition of previously seen faces but not recollection or memory for nonsocial stimuli.
  sourceId: reddit-pmid-19129382
  population: Healthy male volunteers
  exposure: Intranasal oxytocin; amount not shown in abstract.
  instrument: Face-recognition task
  magnitude: Selective improvement; effect size not reported.
  reportType: randomized-controlled-trial
- id: reddit-oxytocin-biological-motion-19679759
  conceptId: perception
  name: Biological-motion perception
  direction: Increased
  evidence: Human randomized study
  description: Oxytocin increased sensitivity to biological but not nonbiological motion in 20 healthy volunteers.
  sourceId: reddit-pmid-19679759
  population: 20 healthy volunteers
  exposure: Intranasal oxytocin
  instrument: Motion-detection sensitivity (d')
  magnitude: Biological-motion-specific increase; effect size not reported.
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-oxytocin-attachment-security-19457618
  conceptId: anxiety
  name: Attachment security
  direction: Increased
  evidence: Human randomized within-subject study
  description: In 26 healthy men with insecure attachment, a single intranasal dose increased ranking of secure-attachment phrases in 18 participants (69%).
  sourceId: reddit-pmid-19457618
  population: 26 healthy male students with insecure attachment
  exposure: Single intranasal oxytocin dose; amount not reported in abstract
  instrument: Adult Attachment Projective Picture System
  magnitude: 18/26 (69%) increased secure-attachment rankings.
  reportType: measured-assessment
- id: reddit-oxytocin-self-attribution-25439340
  conceptId: self-esteem
  name: Positive self-attribution
  direction: Increased
  evidence: Human randomized study
  description: In 60 healthy men, 24 IU oxytocin increased positive self-attitudes during adjective self/non-self sorting versus placebo.
  sourceId: reddit-pmid-25439340
  population: 60 healthy male participants
  exposure: 24 IU intranasal oxytocin
  instrument: Self/non-self adjective sorting
  magnitude: Stronger positive self-attribution; effect size not reported.
  reportType: randomized-controlled-trial
- id: reddit-oxytocin-social-rejection-20695687
  conceptId: anxiety
  name: Social-rejection response
  direction: Null
  evidence: Human randomized study
  description: Oxytocin did not reduce acute negative affect or attachment reactions to social rejection, although it increased desire for future interaction after inclusion.
  sourceId: reddit-pmid-20695687
  population: 74 healthy men and women
  exposure: Intranasal oxytocin versus placebo
  instrument: Cyberball ostracism paradigm
  magnitude: No buffering of rejection effects; context-specific engagement effect.
  reportType: randomized-controlled-trial
```

## Mechanisms

```yaml
- title: Social-emotional processing modulation
  description: Linked studies report altered facial-emotion, biological-motion, attachment, and social-memory processing after intranasal oxytocin; effects vary by task and sex.
  sourceId: reddit-pmid-18801829
- title: Sex-specific amygdala response
  description: In women, 24 IU oxytocin enhanced amygdala and related cortical responses to fearful faces, differing from prior male findings.
  sourceId: reddit-pmid-19632787
```

## Cautions

```yaml
- title: Context-specific effects
  description: Oxytocin did not buffer acute social rejection in a 74-person study, and effects differed between positive inclusion and aversive rejection contexts.
  sourceId: reddit-pmid-20695687
- title: Sex and sample limitations
  description: Studies were small and mostly healthy volunteers; one fMRI study found effects in women that differed from prior male data.
  sourceId: reddit-pmid-19632787
- title: Intranasal dose not generalizable
  description: Most linked studies used single-dose intranasal administration; this does not establish chronic use, systemic exposure, or treatment efficacy.
  sourceId: reddit-pmid-18801829
```

## Claims

```yaml
- id: reddit-claim-oxytocin-19129382-0
  assertion: Acute intranasal oxytocin can selectively alter social recognition and emotional processing in healthy volunteers, but effects are task- and context-specific.
  relation: mixed-evidence
  participants:
  - entityId: substance:oxytocin
    role: intervention
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Small randomized studies using acute intranasal doses.
  sourceIds:
  - reddit-pmid-18801829
  - reddit-pmid-19129382
  - reddit-pmid-19457618
  - reddit-pmid-19679759
  - reddit-pmid-19632787
  - reddit-pmid-20695687
  - reddit-pmid-25439340
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Healthy volunteer studies; no durable clinical or safety conclusion.
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
- id: reddit-index-oxytocin
  title: Reddit Nootropics index entry
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-f59af181ddce
  title: When Does Oxytocin Affect Human Memory Encoding? The Role of Social Context and Individual Attachment Style  (2018)
  authors: Not established
  year: 2018
  url: https://www.frontiersin.org/articles/10.3389/fnhum.2018.00349/abstract
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18801829
  title: Oxytocin enhances processing of positive versus negative emotional information in healthy male volunteers.
  authors: M Di Simplicio, R Massey-Chase, P J Cowen, Catherine J Harmer
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/18801829/
  kind: PubMed publication
  insight: Animal studies have shown the role of oxytocin in affiliation and attachment, and recent evidence suggests that oxytocin is also involved in human models of approach behaviour, possibly by modulating the processing of emotionally valenced stimuli.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '18801829'
  doi: 10.1177/0269881108095705
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19129382
  title: Oxytocin makes a face in memory familiar.
  authors: Ulrike Rimmele, Karin Hediger, Markus Heinrichs, Peter Klaver
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19129382/
  kind: PubMed publication
  insight: Social recognition is the basis of all social interactions.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '19129382'
  pmcid: PMC6664913
  doi: 10.1523/JNEUROSCI.4260-08.2009
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25439340
  title: Intranasal oxytocin enhances positive self-attribution in healthy men.
  authors: Valentina Colonnello, Markus Heinrichs
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25439340/
  kind: PubMed publication
  insight: 'OBJECTIVE: A growing body of studies consistently demonstrates that social responsiveness toward others is influenced by the neurohormone oxytocin.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '25439340'
  doi: 10.1016/j.jpsychores.2014.06.016
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-68dcfcbb67f5
  title: Oxytonergic circuitry sustains and enables creative cognition in humans (2013)
  authors: Not established
  year: 2013
  url: https://scan.oxfordjournals.org/content/early/2013/07/16/scan.nst094.abstract
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19457618
  title: Oxytocin enhances the experience of attachment security.
  authors: Anna Buchheim, Markus Heinrichs, Carol George, Dan Pokorny, Eva Koops, Peter Henningsen, Mary-Frances O'Connor, Harald Gündel
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19457618/
  kind: PubMed publication
  insight: Repeated interactions between infant and caregiver result in either secure or insecure relationship attachment patterns, and insecure attachment may affect individual emotion-regulation and health.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '19457618'
  pmcid: PMC3138620
  doi: 10.1016/j.psyneuen.2009.04.002
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19679759
  title: Oxytocin enhances the perception of biological motion in humans.
  authors: Szabolcs Kéri, György Benedek
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19679759/
  kind: PubMed publication
  insight: Evidence suggests that intranasally administered oxytocin modulates several social cognitive and emotional processes in humans.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '19679759'
  doi: 10.3758/CABN.9.3.237
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19632787
  title: Effects of intranasal oxytocin on emotional face processing in women.
  authors: Gregor Domes, Alexander Lischke, Christoph Berger, Annette Grossmann, Karlheinz Hauenstein, Markus Heinrichs, Sabine C Herpertz
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/19632787/
  kind: PubMed publication
  insight: The neuropeptide oxytocin (OXT) has previously been found to reduce amygdala reactivity to social and emotional stimuli in healthy men.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '19632787'
  doi: 10.1016/j.psyneuen.2009.06.016
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20695687
  title: Acute effects of intranasal oxytocin on subjective and behavioral responses to social rejection.
  authors: Gail A Alvares, Ian B Hickie, Adam J Guastella
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20695687/
  kind: PubMed publication
  insight: The hormone and neuropeptide oxytocin is believed to buffer against social stress and reduce social-threat perception.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '20695687'
  doi: 10.1037/a0019719
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-67835e7caa81
  title: Effects of oxytocin on recollections of maternal care and closeness
  authors: Not established
  year: 2026
  url: https://www.pnas.org/content/107/50/21371.full
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-2d5cba86f410
  title: Oxytocin facilitates protective responses to aversive social stimuli in males
  authors: Not established
  year: 2026
  url: https://www.pnas.org/content/109/44/18144.short
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
