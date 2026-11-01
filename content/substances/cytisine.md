---
slug: cytisine
name: Cytisine
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
  sourceId: reddit-index-cytisine
  observationId: cytisine-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-cytisine
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

Cytisine is a partial α4β2 nicotinic-receptor agonist. The linked record set contains one mouse stress model, one rat nicotine-behavior study, a synthetic/review paper without an abstract, and a randomized smoking-cessation trial. None establishes cognitive enhancement in healthy humans.

## Description

The strongest human evidence in this index is the 1,310-person open-label noninferiority trial: 25 days of cytisine plus brief behavioral support produced higher self-reported continuous abstinence than 8 weeks of nicotine-replacement therapy at 1 month (40% vs 31%; difference 9.3 percentage points, 95% CI 4.2–14.5), with more self-reported adverse events, mainly nausea/vomiting and sleep disorders (PMID 25517706). Animal studies report partial nicotine substitution and reversal of nicotine effects (PMID 25839895) and reduced stress-induced depression-like behaviors (PMID 27098858).

## Evidence note

Reviewed all 4 PubMed links and retrieved PMC full text for PMID 27098858 (PMC4859792). The other three PubMed records had no retrievable PMC full text in this pass. PMID 24117010 is a review/synthesis paper with no abstract and is retained as a bibliographic lead. Human cessation efficacy and adverse-event results are source-specific; animal findings are not human efficacy evidence.

## Doses

```yaml
- label: Cytisine in nicotine-cessation trial
  amount: 25-day regimen
  quantity: null
  quantityMax: null
  unit: regimen
  ingredient: Cytisine
  formulation: Oral cytisine tablets
  route: Oral
  frequency: Study regimen
  duration: 25 days
  population: 1310 adult daily smokers in New Zealand
  purpose: Smoking cessation
  sourceCategory: research
  note: The PubMed abstract reports a 25-day cytisine course but does not state tablet strengths or taper schedule.
  sourceId: reddit-pmid-25517706
- label: Rat cytisine behavioral exposure
  amount: 1-3 mg/kg
  quantity: 1
  quantityMax: 3
  unit: mg/kg
  ingredient: Cytisine
  formulation: Experimental dosing
  route: Not established from abstract
  frequency: Acute/pre-treatment paradigms
  duration: Study-specific
  population: Adult Wistar rats
  purpose: Nicotine-behavior experiments
  sourceCategory: research
  note: Animal dose; not a human dose.
  sourceId: reddit-pmid-25839895
- label: UCMS mouse treatment
  amount: 1 mg/kg
  quantity: 1
  quantityMax: null
  unit: mg/kg
  ingredient: Cytisine
  formulation: Cytisine solution
  route: Intraperitoneal
  frequency: Daily
  duration: 2 weeks during a 5-week UCMS protocol
  population: Male C57BL/6J mice, n=6/group
  purpose: Depression-like behavior model
  sourceCategory: research
  note: Dose and schedule retrieved from PMC full text; animal exposure, not a human dose.
  sourceId: reddit-pmid-27098858
```

## Pharmacokinetics

```yaml
- id: cytisine-reddit-pk-unestablished
  analyte: Cytisine
  route: Not established
  formulation: Index evidence set
  population: Not established
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No pharmacokinetic estimate was reported in the linked abstracts reviewed here.
  sourceId: reddit-index-cytisine
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: cytisine-mouse-depression-like-behavior-27098858
  conceptId: depression-like-behavior
  name: Depression-like behavior
  direction: Decreased
  evidence: Limited research
  description: In mice exposed to unpredictable chronic mild stress, two weeks of cytisine treatment relieved reduced open-field activity and prolonged immobility in tail-suspension and forced-swim tests.
  sourceId: reddit-pmid-27098858
  population: UCMS-exposed mice
  exposure: Two-week cytisine treatment; dose details require full-text methods.
  instrument: Open-field, tail-suspension and forced-swim tests
  magnitude: null
  reportType: measured-assessment
- id: cytisine-rat-nicotine-effects-25839895
  conceptId: nicotine-behavior
  name: Nicotine behavioral effects
  direction: Variable
  evidence: Limited research
  description: In Wistar rats, cytisine partially substituted for nicotine, did not lower intracranial self-stimulation thresholds or stimulate locomotion, and at 3 mg/kg reversed several nicotine effects.
  sourceId: reddit-pmid-25839895
  population: Adult Wistar rats
  exposure: Cytisine 0.3-3 mg/kg and 1-3 mg/kg paradigms
  instrument: Locomotor, ICSS, discrimination and self-administration tests
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: cytisine-smoking-abstinence-25517706
  conceptId: smoking-abstinence
  name: Continuous smoking abstinence
  direction: Increased
  evidence: Human research
  description: At one month, self-reported continuous abstinence was 40% with cytisine versus 31% with nicotine-replacement therapy (difference 9.3 percentage points; 95% CI 4.2-14.5) in 1310 adult daily smokers receiving brief behavioral support.
  sourceId: reddit-pmid-25517706
  population: 1310 adult daily smokers motivated to quit
  exposure: Cytisine for 25 days versus nicotine-replacement therapy for 8 weeks
  instrument: Self-reported continuous abstinence
  magnitude: 40% vs 31%; difference 9.3 percentage points (95% CI 4.2-14.5)
  reportType: measured-assessment
- id: cytisine-adverse-events-25517706
  conceptId: adverse-events
  name: Self-reported adverse events
  direction: Increased
  evidence: Human research
  description: Over six months, adverse events were reported more often with cytisine (288 events among 204 participants) than nicotine-replacement therapy (174 events among 134 participants); nausea/vomiting and sleep disorders predominated.
  sourceId: reddit-pmid-25517706
  population: 1310 adult daily smokers
  exposure: Cytisine for 25 days
  instrument: Self-reported adverse events
  magnitude: 288 events/204 participants vs 174 events/134 participants
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Partial α4β2 nicotinic-receptor agonism
  description: The linked papers describe cytisine as a partial agonist at α4β2 nicotinic acetylcholine receptors; the rat study found weak partial nicotine-like effects and reversal of several nicotine effects.
  sourceId: reddit-pmid-25839895
- title: Stress-model molecular changes
  description: In UCMS-exposed mice, daily intraperitoneal cytisine 1 mg/kg for two weeks reversed stress-associated decreases in hippocampal and amygdala 5-HT1A, BDNF and mTOR signaling; this is a preclinical mechanism observation.
  sourceId: reddit-pmid-27098858
```

## Cautions

```yaml
- title: Human adverse events in cessation trial
  description: Cytisine produced more self-reported adverse events than nicotine-replacement therapy; nausea/vomiting and sleep disorders were the main categories reported in the abstract.
  sourceId: reddit-pmid-25517706
- title: Animal-only depression evidence
  description: Depression-like behavior and molecular changes were measured in UCMS-exposed mice; these findings do not establish antidepressant efficacy in humans.
  sourceId: reddit-pmid-27098858
- title: No human cognitive-enhancement dataset
  description: The linked index records do not establish improved cognition in healthy humans.
  sourceId: reddit-index-cytisine
```

## Claims

```yaml
- id: cytisine-claim-smoking-cessation
  assertion: In a pragmatic open-label trial with brief behavioral support, cytisine improved one-month continuous smoking abstinence versus nicotine-replacement therapy.
  relation: clinical-efficacy
  participants:
  - entityId: substance:cytisine
    role: intervention
  - entityId: tag:smoking-abstinence
    role: outcome
  context: 1310 adult daily smokers; self-reported abstinence.
  sourceIds:
  - reddit-pmid-25517706
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Open-label design and self-reported primary outcome; this is one trial.
- id: cytisine-claim-antidepressant-preclinical
  assertion: Cytisine reduced stress-induced depression-like behaviors in mice.
  relation: preclinical-effect
  participants:
  - entityId: substance:cytisine
    role: intervention
  - entityId: tag:depression-like-behavior
    role: outcome
  context: Unpredictable chronic mild stress mouse model.
  sourceIds:
  - reddit-pmid-27098858
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal model; no human antidepressant conclusion.
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
- id: reddit-index-cytisine
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Discovery index linking four cytisine publications.
  limitation: Community indexing is not efficacy or safety evidence.
- id: reddit-pmid-27098858
  title: Cytisine, a Partial Agonist of α4β2 Nicotinic Acetylcholine Receptors, Reduced Unpredictable Chronic Mild Stress-Induced Depression-Like Behaviors.
  authors: Jing Han; Dong-Sheng Wang; Shui-Bing Liu; Ming-Gao Zhao
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27098858/
  kind: PubMed publication
  insight: Two-week cytisine treatment relieved UCMS-induced depression-like behaviors and reversed 5-HT1A, BDNF and mTOR decreases in mice.
  limitation: Preclinical mouse study; human dose and efficacy are not established. Full text was retrieved from PMC4859792.
  pmid: '27098858'
  pmcid: PMC4859792
  doi: 10.4062/biomolther.2015.113
- id: reddit-pmid-25839895
  title: Agonist and antagonist effects of cytisine in vivo.
  authors: Elena V Radchenko; Olga A Dravolina; Anton Y Bespalov
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25839895/
  kind: PubMed publication
  insight: Cytisine behaved as a weak partial agonist in rat nicotine-behavior paradigms and reversed several nicotine effects.
  limitation: Rat study; no human cognitive or safety inference.
  pmid: '25839895'
  doi: 10.1016/j.neuropharm.2015.03.019
- id: reddit-pmid-24117010
  title: '(-)-Cytisine and derivatives: synthesis, reactivity, and applications.'
  authors: Jacques Rouden; Marie-Claire Lasne; Jérôme Blanchet; Jérôme Baudoux
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24117010/
  kind: PubMed review
  insight: Review of cytisine chemistry, derivatives and pharmacology; PubMed supplied no abstract in this retrieval.
  limitation: No abstract or full text was retrieved in this pass; claims from the review were not independently extracted.
  pmid: '24117010'
  doi: 10.1021/cr400307e
- id: reddit-pmid-25517706
  title: Cytisine versus nicotine for smoking cessation.
  authors: Natalie Walker; Colin Howe; Marewa Glover; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25517706/
  kind: PubMed publication
  insight: Cytisine was superior to nicotine-replacement therapy for self-reported continuous abstinence at one month and associated with more self-reported adverse events.
  limitation: Open-label pragmatic trial; brief behavioral support co-intervention and self-reported outcome.
  pmid: '25517706'
  doi: 10.1056/NEJMoa1407764
```

## Legal

```yaml
[]
```
