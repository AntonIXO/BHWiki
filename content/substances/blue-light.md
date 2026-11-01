---
slug: blue-light
name: Blue Light
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
  sourceId: reddit-index-blue-light
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-blue-light
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

Blue light can acutely alter alertness, brain activation and task performance in controlled studies, but effects depend on wavelength, timing, intensity, sleep status and comparator.

## Description

Human studies used blue or blue-enriched light from 100 lux at 470 nm for 20 minutes to 5,000 lux exposure and 17,000 K office lighting. Results include faster N-back responses and greater prefrontal activation after 30 minutes at 469 nm, improved performance or mood with morning light after sleep restriction, and reduced sleepiness under daytime blue-enriched light.

## Evidence note

Reviewed seven PubMed-linked abstracts and retrieved full text for PMIDs 23859643 (PMC4497579). Other PMC records were rights-ineligible or not linked to this exact set; claims are parameter-specific.

## Doses

```yaml
- label: Blue-light N-back study (PMID 27253770)
  amount: 469 nm for 30 minutes
  quantity: 469
  quantityMax: null
  unit: nm
  ingredient: Blue wavelength light
  formulation: Blue light exposure; amber 578 nm control
  route: Ocular light exposure
  frequency: Single exposure
  duration: 30 minutes followed immediately by fMRI
  population: 35 healthy adults
  purpose: Working-memory and prefrontal-activation research exposure
  sourceCategory: research
  note: Light parameters, not a pharmacologic dose.
  sourceId: reddit-pmid-27253770
- label: Morning blue light after sleep restriction (PMID 23841684)
  amount: 100 lux at 470 nm
  quantity: 100
  quantityMax: null
  unit: lux
  ingredient: Blue LED light
  formulation: Monochromatic blue LED
  route: Ocular light exposure
  frequency: Morning pulse
  duration: 20 minutes, starting 2 h after scheduled wake time
  population: 17 participants after two 6-hour sleep-restriction nights
  purpose: Cognitive and circadian research exposure
  sourceCategory: research
  note: Dawn-simulation and dim-light comparators were also tested.
  sourceId: reddit-pmid-23841684
- label: Bright-light time-of-day study (PMID 16373441)
  amount: 5,000 lux
  quantity: 5000
  quantityMax: null
  unit: lux
  ingredient: Bright light
  formulation: Bright light versus <10 lux dim light
  route: Ocular light exposure
  frequency: Daytime or nighttime exposure
  duration: Up to 4 hours
  population: 24 healthy young men
  purpose: Alertness and psychophysiology research exposure
  sourceCategory: research
  note: Wavelength was not stated in the abstract; this is bright-light comparator evidence, not blue-only exposure.
  sourceId: reddit-pmid-16373441
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
- id: blue-light-alertness-16373441
  conceptId: alertness
  name: Alertness and sleepiness
  direction: Increased
  evidence: Human research
  description: Bright light reduced sleepiness and fatigue during both daytime and nighttime exposure in healthy young men.
  sourceId: reddit-pmid-16373441
  population: 24 healthy young men
  exposure: 5,000 lux bright light versus <10 lux dim light
  instrument: Karolinska Sleepiness Scale and visual-analog ratings
  magnitude: Significant reduction in sleepiness and fatigue; numeric effect not reported in abstract
  reportType: measured-assessment
- id: blue-light-nback-27253770
  conceptId: working-memory-state
  name: N-back response speed
  direction: Increased
  evidence: Human research
  description: Thirty minutes of 469 nm blue light produced faster N-back responses and increased dorsolateral and ventrolateral prefrontal activation versus amber light.
  sourceId: reddit-pmid-27253770
  population: 35 healthy adults
  exposure: 469 nm blue light for 30 minutes
  instrument: fMRI during N-back task
  magnitude: Faster responses; numeric effect not reported in abstract
  reportType: measured-assessment
- id: blue-light-caffeine-mood-24590053
  conceptId: mood-response
  name: Core mood and activation
  direction: Increased
  evidence: Human research
  description: In a 20-person crossover study, blue light and 240 mg caffeine each contributed to positive core-affect effects, with the combination showing clear effects on arousal and valence.
  sourceId: reddit-pmid-24590053
  population: 20 healthy volunteers
  exposure: Blue light, white light plus 240 mg caffeine, combination or placebo
  instrument: Swedish Core Affect Scales
  magnitude: Combination effect sizes 0.41–1.20 for core-affect dimensions and 0.61 ± 0.53 for global mood
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: blue-light-morning-performance-23841684
  conceptId: cognitive-performance
  name: Cognitive performance after sleep restriction
  direction: Increased
  evidence: Human research
  description: After two 6-hour sleep-restriction nights, morning dawn-simulation light improved cognitive performance over dim light, while 100 lux blue light kept performance stable after the first restriction night.
  sourceId: reddit-pmid-23841684
  population: 17 participants in a 48-hour laboratory protocol
  exposure: 100 lux, 470 nm blue light for 20 minutes or dawn simulation
  instrument: Repeated cognitive tasks and mood/well-being questionnaires
  magnitude: Time-course differences; numeric effect not stated in abstract
  reportType: measured-assessment
- id: blue-light-workplace-alertness-18815716
  conceptId: alertness-response
  name: Workplace alertness and self-reported performance
  direction: Increased
  evidence: Human research
  description: Blue-enriched white light (17,000 K) during daytime office work improved self-reported alertness, performance, concentration and sleep quality versus 4,000 K white light over two 4-week periods.
  sourceId: reddit-pmid-18815716
  population: 94 white-collar workers analyzed
  exposure: Blue-enriched white light versus white light
  instrument: Questionnaires and rating scales
  magnitude: Significant differences across multiple subjective endpoints
  reportType: measured-assessment
- id: blue-light-alertness-17245536
  conceptId: alertness-response
  name: Alertness and information-processing speed
  direction: Increased
  evidence: Human research
  description: A longitudinal study in 44 adults reported higher alertness and faster information processing under 460 nm blue light than normal light.
  sourceId: reddit-pmid-17245536
  population: 44 adults
  exposure: 460 nm blue light; exposure schedule not stated in abstract
  instrument: Alertness and information-processing measures
  magnitude: Significant increase reported; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Melanopsin/ipRGC non-image-forming pathway
  description: Blue light around 470–480 nm activates intrinsically photosensitive retinal ganglion cells, influencing alertness, circadian neuroendocrine signals and prefrontal cognitive networks; the blind-participant proof-of-concept showed rapid EEG/fMRI effects after brief exposure.
  sourceId: reddit-pmid-23859643
```

## Cautions

```yaml
- title: Parameter- and timing-dependent effects
  description: Light studies differ in wavelength, lux, exposure duration, time of day and sleep status; results should not be generalized across devices or schedules.
  sourceId: reddit-pmid-23841684
```

## Claims

```yaml
- id: blue-light-claim-nback-27253770
  assertion: A single 30-minute 469 nm exposure improved N-back response speed and increased prefrontal activation in healthy adults versus amber control light.
  relation: associated-with
  participants:
  - entityId: substance:blue-light
    role: exposure
  - entityId: tag:working-memory
    role: reported endpoint
  context: Randomized wavelength comparison with fMRI.
  sourceIds:
  - reddit-pmid-27253770
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute controlled exposure; no long-term or home-device inference.
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
- id: reddit-index-blue-light
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-3843ecc39d55
  title: Acute exposure to blue wavelength light during memory consolidation improves verbal memory performance
  authors: Not established
  year: 2026
  url: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0184884
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24590053
  title: Effects of blue light and caffeine on mood.
  authors: Johan G Ekström, C Martyn Beaven
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24590053/
  kind: PubMed publication
  insight: 'RATIONALE: Both short wavelength (blue) light and caffeine have been studied for their mood enhancing effects on humans.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '24590053'
  doi: 10.1007/s00213-014-3503-8
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-53279e15db94
  title: 'A Comparison of Blue Light and Caffeine Effects on Cognitive Function and Alertness in Humans '
  authors: Not established
  year: 2026
  url: https://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0076707
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23859643
  title: Blue light stimulates cognitive brain activity in visually blind individuals.
  authors: Gilles Vandewalle, Olivier Collignon, Joseph T Hull, Véronique Daneault, Geneviève Albouy, Franco Lepore, Christophe Phillips, Julien Doyon, Charles A Czeisler, Marie Dumont, Steven W Lockley, Julie Carrier
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23859643/
  kind: PubMed publication
  insight: Light regulates multiple non-image-forming (or nonvisual) circadian, neuroendocrine, and neurobehavioral functions, via outputs from intrinsically photosensitive retinal ganglion cells (ipRGCs).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23859643'
  doi: 10.1162/jocn_a_00450
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23841684
  title: Effects of artificial dawn and morning blue light on daytime cognitive performance, well-being, cortisol and melatonin levels.
  authors: Virginie Gabel, Micheline Maire, Carolin F Reichert, Sarah L Chellappa, Christina Schmidt, Vanja Hommes, Antoine U Viola, Christian Cajochen
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23841684/
  kind: PubMed publication
  insight: Light exposure elicits numerous effects on human physiology and behavior, such as better cognitive performance and mood.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23841684'
  doi: 10.3109/07420528.2013.793196
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27253770
  title: Exposure to Blue Light Increases Subsequent Functional Activation of the Prefrontal Cortex During Performance of a Working Memory Task.
  authors: Anna Alkozei, Ryan Smith, Derek A Pisner, John R Vanuk, Sarah M Berryhill, Andrew Fridman, Bradley R Shane, Sara A Knight, William D S Killgore
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27253770/
  kind: PubMed publication
  insight: 'STUDY OBJECTIVES: Prolonged exposure to blue wavelength light has been shown to have an alerting effect, and enhances performance on cognitive tasks.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '27253770'
  doi: 10.5665/sleep.6090
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16373441
  title: 'Time-of-day-dependent effects of bright light exposure on human psychophysiology: comparison of daytime and nighttime exposure.'
  authors: Melanie Rüger, Marijke C M Gordijn, Domien G M Beersma, Bonnie de Vries, Serge Daan
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16373441/
  kind: PubMed publication
  insight: Bright light can influence human psychophysiology instantaneously by inducing endocrine (suppression of melatonin, increasing cortisol levels), other physiological changes (enhancement of core body temperature), and psychological changes (reduction of sleepiness, increase of alertness).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '16373441'
  doi: 10.1152/ajpregu.00121.2005
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18815716
  title: Blue-enriched white light in the workplace improves self-reported alertness, performance and sleep quality.
  authors: Antoine U Viola, Lynette M James, Luc J M Schlangen, Derk-Jan Dijk
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18815716/
  kind: PubMed publication
  insight: 'OBJECTIVES: Specifications and standards for lighting installations in occupational settings are based on the spectral sensitivity of the classical visual system and do not take into account the recently discovered melanopsin-based, blue-light-sensitive photoreceptive system.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '18815716'
  doi: 10.5271/sjweh.1268
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17245536
  title: Blue light improves cognitive performance.
  authors: S Lehrl, K Gerstmeyer, J H Jacob, H Frieling, A W Henkel, R Meyrer, J Wiltfang, J Kornhuber, S Bleich
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17245536/
  kind: PubMed publication
  insight: A newly discovered system of photoreceptors for circadian rhythms works non-visual and responds to blue light (460 nm).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '17245536'
  doi: 10.1007/s00702-006-0621-4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-aa07d0a0ccf9
  title: The Effects of Red and Blue Lights on Circadian Variations in Cortisol, Alpha Amylase, and Melatonin
  authors: Not established
  year: 2026
  url: https://www.hindawi.com/journals/ije/2010/829351/
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
