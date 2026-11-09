---
slug: caloric-restriction
name: Caloric Restriction
subtitle: Caloric restriction reduces energy intake.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Behaviour and protocol
tags:
  - working-memory-state
  - working-memory
  - alzheimer-pathology
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-21304942
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-21304942
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

Caloric restriction reduces energy intake. Studies explore its effects on metabolism, brain function and memory.

## Description

In a CALERIE randomized trial of 220 healthy non-obese adults, 25% caloric restriction for 2 years produced a greater improvement in spatial working memory than ad-libitum eating after adjustment. In mouse lemurs, 70% of control caloric intake for 18 months improved working memory; a ghrelin-agonist hunger model improved cognition and reduced Alzheimer pathology without caloric restriction.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: CALERIE caloric-restriction arm (PMID 30968820)
  amount: 25% reduction from baseline energy intake
  quantity: 25
  quantityMax: null
  unit: percent reduction
  ingredient: Caloric restriction
  formulation: Diet intervention
  route: Oral dietary intake
  frequency: Sustained daily intake target
  duration: 2 years
  population: 220 healthy non-obese adults, BMI 22–28 kg/m²
  purpose: Working-memory research exposure
  sourceCategory: research
  note: The trial compared 25% restriction with ad-libitum intake; adherence and achieved intake varied over time.
  sourceId: pubmed-30968820
- label: Mouse-lemur chronic restriction (PMID 21304942)
  amount: 70% of control caloric intake
  quantity: 70
  quantityMax: null
  unit: percent of control intake
  ingredient: Caloric restriction
  formulation: Diet intervention
  route: Oral dietary intake
  frequency: Daily
  duration: 18 months
  population: 33 adult male grey mouse lemurs
  purpose: Cognitive-aging research exposure
  sourceCategory: research
  note: Animal exposure; not a human diet prescription.
  sourceId: pubmed-21304942
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
- id: caloric-restriction-working-memory-30968820
  conceptId: working-memory-state
  name: Spatial working memory
  direction: Increased
  evidence: Human research
  description: After adjustment, participants assigned to 25% caloric restriction improved spatial working memory more than ad-libitum controls over 2 years.
  sourceId: pubmed-30968820
  population: 220 healthy non-obese adults
  exposure: 25% caloric restriction for 2 years
  instrument: CANTAB Spatial Working Memory total errors and strategy
  magnitude: Slight positive effect; numeric between-group estimate not stated in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: caloric-restriction-lemur-memory-21304942
  conceptId: working-memory
  name: Working memory in mouse lemurs
  direction: Increased
  evidence: Limited research
  description: Eighteen months of moderate caloric restriction improved spontaneous-alternation working memory in adult mouse lemurs without additional stress markers.
  sourceId: pubmed-21304942
  population: 33 adult male grey mouse lemurs
  exposure: 70% of control caloric intake for 18 months
  instrument: Spontaneous alternation task and open-field/cortisol measures
  magnitude: Improvement versus ad-libitum controls; numeric effect not stated in abstract
  reportType: measured-assessment
- id: caloric-restriction-ad-pathology-23565247
  conceptId: alzheimer-pathology
  name: Alzheimer pathology and cognition
  direction: Increased
  evidence: Limited research
  description: In APP-SwDI mice, hunger induced by a ghrelin agonist improved water-maze performance and reduced amyloid-beta and microglial activation without caloric restriction.
  sourceId: pubmed-23565247
  population: APP-SwDI mouse model
  exposure: Long-term ghrelin-agonist treatment; dose not stated in abstract
  instrument: Water maze, amyloid-beta and microglial measures
  magnitude: Improvement reported; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Hunger and neuroendocrine signaling
  description: The mouse study suggests that interoceptive hunger signaling, rather than reduced energy intake alone, can influence cognition and Alzheimer pathology through a ghrelin-related mechanism.
  sourceId: pubmed-23565247
```

## Cautions

```yaml
- title: Human evidence is limited to one 2-year trial
  description: The CALERIE finding was modest and moderator-dependent; animal caloric-restriction or hunger studies should not be extrapolated directly to human treatment.
  sourceId: pubmed-30968820
```

## Claims

```yaml
- id: caloric-restriction-claim-human-memory-30968820
  assertion: A 25% caloric-restriction intervention was associated with a small improvement in spatial working memory over 2 years in healthy non-obese adults.
  relation: associated-with
  participants:
    - entityId: substance:caloric-restriction
      role: dietary intervention
    - entityId: tag:working-memory
      role: reported endpoint
  context: CALERIE randomized parallel-group trial.
  sourceIds:
    - pubmed-30968820
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Effect was modest and moderated by sleep, activity and energy-expenditure changes.
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
- id: pubmed-21304942
  title: Cognitive performances are selectively enhanced during chronic caloric restriction or resveratrol supplementation in a primate.
  authors: Alexandre Dal-Pan, Fabien Pifferi, Julia Marchal, Jean-Luc Picq, Fabienne Aujard, RESTRIKAL Consortium
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21304942/
  kind: PubMed publication
  insight: "Effects of an 18-month treatment with a moderate, chronic caloric restriction (CR) or an oral supplementation with resveratrol (RSV), a potential CR mimetic, on cognitive and motor performances were studied in non-human primates, grey mouse lemurs (Microcebus murinus).Thirty-three adult male mouse lemurs were assigned to three different groups: a control (CTL) group fed ad libitum, a CR group fed 70% of the CTL caloric intake, and an RSV group (RSV supplementation of 200 mg.kg(-1).day(-1)) fed ad libitum."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "21304942"
  doi: 10.1371/journal.pone.0016581
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23565247
  title: Hunger in the absence of caloric restriction improves cognition and attenuates Alzheimer's disease pathology in a mouse model.
  authors: Emily J Dhurandhar, David B Allison, Thomas van Groen, Inga Kadish
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23565247/
  kind: PubMed publication
  insight: It has been shown that caloric restriction (CR) delays aging and possibly delays the development of Alzheimer's disease (AD).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23565247"
  doi: 10.1371/journal.pone.0060437
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-30968820
  title: The effect of caloric restriction on working memory in healthy non-obese adults.
  authors: Emilie Leclerc, Alisson Paulino Trevizol, Ruth B Grigolon, Mehala Subramaniapillai, Roger S McIntyre, Elisa Brietzke, Rodrigo B Mansur
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/30968820/
  kind: PubMed publication
  insight: "OBJECTIVE: We aim to evaluate the effect of caloric restriction (CR) in cognition by comparing performance in neuropsychological tests for working memory between a group of non-obese healthy subjects doing CR for 2 years with another consuming ad libitum diet (AL)."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "30968820"
  doi: 10.1017/S1092852918001566
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
  url: https://en.wikipedia.org/wiki/Caloric_restriction
  title: Wikipedia
```
