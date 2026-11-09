---
slug: oxytocin
name: Oxytocin
subtitle: Peptide and protein
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Peptide and protein
tags:
  - anxiety
  - perception
  - anxiety-symptom-severity
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-18801829
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-18801829
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

Oxytocin is a peptide hormone involved in social behaviour. Studies explore social perception, emotional processing and memory.

## Description

Oxytocin is a peptide hormone involved in social behaviour. Studies explore social perception, emotional processing and memory.

## Evidence note

Study findings and methods are linked to their original publications.

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
  sourceCategory: research
  note: Several linked studies used 24 IU; not all abstracts specify dose.
  sourceId: pubmed-18801829
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
- id: research-oxytocin-emotion-processing-18801829
  conceptId: anxiety
  name: Emotional processing
  direction: Variable
  evidence: Human research
  description: A single 24 IU intranasal dose altered fearful-face identification and positive-emotion classification without changing subjective anxiety ratings.
  sourceId: pubmed-18801829
  population: 29 healthy male volunteers
  exposure: Single 24 IU intranasal oxytocin
  instrument: Facial-emotion processing tasks
  magnitude: Task-specific reaction-time and classification changes.
  reportType: measured-assessment
- id: research-oxytocin-biological-motion-19679759
  conceptId: perception
  name: Biological-motion perception
  direction: Increased
  evidence: Human research
  description: Oxytocin increased sensitivity to biological but not nonbiological motion in 20 healthy volunteers.
  sourceId: pubmed-19679759
  population: 20 healthy volunteers
  exposure: Intranasal oxytocin
  instrument: Motion-detection sensitivity (d')
  magnitude: Biological-motion-specific increase; effect size not reported.
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: research-oxytocin-attachment-security-19457618
  conceptId: anxiety-symptom-severity
  name: Attachment security
  direction: Increased
  evidence: Human research
  description: In 26 healthy men with insecure attachment, a single intranasal dose increased ranking of secure-attachment phrases in 18 participants (69%).
  sourceId: pubmed-19457618
  population: 26 healthy male students with insecure attachment
  exposure: Single intranasal oxytocin dose; amount not reported in abstract
  instrument: Adult Attachment Projective Picture System
  magnitude: 18/26 (69%) increased secure-attachment rankings.
  reportType: measured-assessment
- id: research-oxytocin-self-attribution-25439340
  conceptId: cognitive-performance
  name: Positive self-attribution
  direction: Increased
  evidence: Human research
  description: In 60 healthy men, 24 IU oxytocin increased positive self-attitudes during adjective self/non-self sorting versus placebo.
  sourceId: pubmed-25439340
  population: 60 healthy male participants
  exposure: 24 IU intranasal oxytocin
  instrument: Self/non-self adjective sorting
  magnitude: Stronger positive self-attribution; effect size not reported.
  reportType: measured-assessment
- id: research-oxytocin-social-rejection-20695687
  conceptId: anxiety-symptom-severity
  name: Social-rejection response
  direction: Variable
  evidence: Human research
  description: Oxytocin did not reduce acute negative affect or attachment reactions to social rejection, although it increased desire for future interaction after inclusion.
  sourceId: pubmed-20695687
  population: 74 healthy men and women
  exposure: Intranasal oxytocin versus placebo
  instrument: Cyberball ostracism paradigm
  magnitude: No buffering of rejection effects; context-specific engagement effect.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Social-emotional processing modulation
  description: Linked studies report altered facial-emotion, biological-motion, attachment, and social-memory processing after intranasal oxytocin; effects vary by task and sex.
  sourceId: pubmed-18801829
- title: Sex-specific amygdala response
  description: In women, 24 IU oxytocin enhanced amygdala and related cortical responses to fearful faces, differing from prior male findings.
  sourceId: pubmed-19632787
```

## Cautions

```yaml
- title: Context-specific effects
  description: Oxytocin did not buffer acute social rejection in a 74-person study, and effects differed between positive inclusion and aversive rejection contexts.
  sourceId: pubmed-20695687
- title: Sex and sample limitations
  description: Studies were small and mostly healthy volunteers; one fMRI study found effects in women that differed from prior male data.
  sourceId: pubmed-19632787
- title: Intranasal dose not generalizable
  description: Most linked studies used single-dose intranasal administration; this does not establish chronic use, systemic exposure, or treatment efficacy.
  sourceId: pubmed-18801829
```

## Claims

```yaml
- id: research-claim-oxytocin-19129382-0
  assertion: Acute intranasal oxytocin can selectively alter social recognition and emotional processing in healthy volunteers, but effects are task- and context-specific.
  relation: mixed-evidence
  participants:
    - entityId: substance:oxytocin
      role: intervention
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Small randomized studies using acute intranasal doses.
  sourceIds:
    - pubmed-18801829
    - pubmed-19129382
    - pubmed-19457618
    - pubmed-19679759
    - pubmed-19632787
    - pubmed-20695687
    - pubmed-25439340
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
- id: publication-link-f59af181ddce
  title: When Does Oxytocin Affect Human Memory Encoding? The Role of Social Context and Individual Attachment Style  (2018)
  authors: Not established
  year: 2018
  url: https://www.frontiersin.org/articles/10.3389/fnhum.2018.00349/abstract
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-18801829
  title: Oxytocin enhances processing of positive versus negative emotional information in healthy male volunteers.
  authors: M Di Simplicio, R Massey-Chase, P J Cowen, Catherine J Harmer
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/18801829/
  kind: PubMed publication
  insight: Animal studies have shown the role of oxytocin in affiliation and attachment, and recent evidence suggests that oxytocin is also involved in human models of approach behaviour, possibly by modulating the processing of emotionally valenced stimuli.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "18801829"
  doi: 10.1177/0269881108095705
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19129382
  title: Oxytocin makes a face in memory familiar.
  authors: Ulrike Rimmele, Karin Hediger, Markus Heinrichs, Peter Klaver
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19129382/
  kind: PubMed publication
  insight: Social recognition is the basis of all social interactions.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19129382"
  pmcid: PMC6664913
  doi: 10.1523/JNEUROSCI.4260-08.2009
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25439340
  title: Intranasal oxytocin enhances positive self-attribution in healthy men.
  authors: Valentina Colonnello, Markus Heinrichs
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25439340/
  kind: PubMed publication
  insight: "OBJECTIVE: A growing body of studies consistently demonstrates that social responsiveness toward others is influenced by the neurohormone oxytocin."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25439340"
  doi: 10.1016/j.jpsychores.2014.06.016
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-68dcfcbb67f5
  title: Oxytonergic circuitry sustains and enables creative cognition in humans (2013)
  authors: Not established
  year: 2013
  url: https://scan.oxfordjournals.org/content/early/2013/07/16/scan.nst094.abstract
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19457618
  title: Oxytocin enhances the experience of attachment security.
  authors: Anna Buchheim, Markus Heinrichs, Carol George, Dan Pokorny, Eva Koops, Peter Henningsen, Mary-Frances O'Connor, Harald Gündel
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19457618/
  kind: PubMed publication
  insight: Repeated interactions between infant and caregiver result in either secure or insecure relationship attachment patterns, and insecure attachment may affect individual emotion-regulation and health.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19457618"
  pmcid: PMC3138620
  doi: 10.1016/j.psyneuen.2009.04.002
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19679759
  title: Oxytocin enhances the perception of biological motion in humans.
  authors: Szabolcs Kéri, György Benedek
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19679759/
  kind: PubMed publication
  insight: Evidence suggests that intranasally administered oxytocin modulates several social cognitive and emotional processes in humans.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19679759"
  doi: 10.3758/CABN.9.3.237
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19632787
  title: Effects of intranasal oxytocin on emotional face processing in women.
  authors: Gregor Domes, Alexander Lischke, Christoph Berger, Annette Grossmann, Karlheinz Hauenstein, Markus Heinrichs, Sabine C Herpertz
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/19632787/
  kind: PubMed publication
  insight: The neuropeptide oxytocin (OXT) has previously been found to reduce amygdala reactivity to social and emotional stimuli in healthy men.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19632787"
  doi: 10.1016/j.psyneuen.2009.06.016
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-20695687
  title: Acute effects of intranasal oxytocin on subjective and behavioral responses to social rejection.
  authors: Gail A Alvares, Ian B Hickie, Adam J Guastella
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20695687/
  kind: PubMed publication
  insight: The hormone and neuropeptide oxytocin is believed to buffer against social stress and reduce social-threat perception.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "20695687"
  doi: 10.1037/a0019719
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-67835e7caa81
  title: Effects of oxytocin on recollections of maternal care and closeness
  authors: Not established
  year: 2026
  url: https://www.pnas.org/content/107/50/21371.full
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-2d5cba86f410
  title: Oxytocin facilitates protective responses to aversive social stimuli in males
  authors: Not established
  year: 2026
  url: https://www.pnas.org/content/109/44/18144.short
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
