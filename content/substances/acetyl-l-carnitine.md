---
slug: acetyl-l-carnitine
name: Acetyl-L-Carnitine
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
  sourceId: reddit-index-acetyl-l-carnitine
  observationId: acetyl-l-carnitine-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-acetyl-l-carnitine
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

Acetyl-L-carnitine (ALC/ALCAR) evidence in this index is mainly preclinical or review-level. Rodent studies report improved mitochondrial or stress-related measures, while a human formulation study assessed piracetam pharmacokinetics when combined with L-carnitine; no ALC elimination half-life is established here.

## Description

The cited experiments used dietary ALC, often with lipoic acid or in drinking water. Animal neurochemical and behavioral findings should not be read as proof of human cognitive or antidepressant efficacy.

## Evidence note

Seven PubMed abstracts were retrieved; PMC full text was retrieved for PMIDs 11854487, 23138103, 23670591 and 27240534 where text-mining rights allowed. Human efficacy claims remain review-level or indirect. Full-text retrieval status is recorded per reference; 4 of 7 PubMed records had a PMC identifier in this set.

## Doses

```yaml
- label: Old-rat metabolic study
  amount: 1.5% (w/v) in drinking water
  quantity: 1.5
  quantityMax: null
  unit: '% w/v'
  ingredient: Acetyl-L-carnitine
  formulation: Drinking-water ALC, with or without 0.5% (w/w) lipoic acid chow
  route: Oral
  frequency: Ad libitum
  duration: Up to 1 month
  population: F344 rats aged 2–4 or 24–28 months
  purpose: Mitochondrial and oxidative-stress research
  sourceCategory: research
  note: Combination ALC+lipoic acid produced the strongest effects.
  sourceId: reddit-pmid-11854487
- label: Healthy-mouse brain metabolism
  amount: About 0.5 g/kg/day
  quantity: 0.5
  quantityMax: null
  unit: g/kg/day
  ingredient: Acetyl-L-carnitine
  formulation: Drinking water
  route: Oral
  frequency: Daily
  duration: 25 days
  population: Healthy mice
  purpose: Brain energy and neurotransmitter research
  sourceCategory: research
  note: Approximate daily intake calculated by the study.
  sourceId: reddit-pmid-22549035
- label: Piracetam/L-carnitine formulation PK
  amount: 270 mg piracetam + 330 mg L-carnitine
  quantity: 330
  quantityMax: null
  unit: mg
  ingredient: L-carnitine (coformulated)
  formulation: Piracar tablet
  route: Oral
  frequency: Single formulation exposure
  duration: Single-dose bioavailability study
  population: Healthy adults of both sexes
  purpose: Formulation PK comparison
  sourceCategory: research
  note: The study quantified piracetam; it did not establish L-carnitine PK.
  sourceId: reddit-pmid-26248695
- label: Stress-resilience mouse study
  amount: 0.3% in drinking water
  quantity: 0.3
  quantityMax: null
  unit: '% w/v'
  ingredient: Acetyl-L-carnitine
  formulation: Drinking-water LAC
  route: Oral
  frequency: Ad libitum
  duration: 3 days before end of 21-day chronic restraint stress
  population: Stress-vulnerable male C57BL/6N mice
  purpose: Stress-resilience and amygdala plasticity research
  sourceCategory: research
  note: Full text reports 0.3% LAC in drinking water; abstract did not state this concentration.
  sourceId: reddit-pmid-27240534
```

## Pharmacokinetics

```yaml
- id: acetyl-l-carnitine-reddit-pk-unestablished
  analyte: Acetyl L Carnitine
  route: Not established from abstract
  formulation: Study formulation not reported as a PK parameter
  population: Not established
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated elimination or concentration parameter was reported in the
    retrieved linked abstracts.
  sourceId: reddit-index-acetyl-l-carnitine
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-acetyl-l-carnitine-resilience-27240534
  conceptId: mood-response
  name: Stress-related passive behavior
  direction: Decreased
  evidence: Limited research
  description: In mice exposed to 21-day restraint stress, ALC treatment opposed stress-related
    passive behavior and increased social interaction.
  sourceId: reddit-pmid-27240534
  population: Stress-vulnerable mice
  exposure: ALC during the final stress period
  instrument: Social interaction and forced-swim tests
  magnitude: Resilience-like pattern
  reportType: measured-assessment
- id: reddit-acetyl-l-carnitine-monoamines-22549035
  conceptId: mood-response
  name: Brain monoamine levels
  direction: Variable
  evidence: Limited research
  description: Chronic ALC increased noradrenaline in hippocampal formation and serotonin
    in cortex while reducing hippocampal GABA in healthy mice.
  sourceId: reddit-pmid-22549035
  population: Healthy mice
  exposure: ~0.5 g/kg/day for 25 days
  instrument: NMR/HPLC neurochemical assays
  magnitude: Region-specific changes
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-acetyl-l-carnitine-mitochondria-11854487
  conceptId: energy
  name: Mitochondrial-supported metabolism
  direction: Increased
  evidence: Limited research
  description: ALC plus lipoic acid partially reversed age-related mitochondrial membrane-potential
    decline and increased hepatocellular oxygen consumption in old rats.
  sourceId: reddit-pmid-11854487
  population: Old F344 rats
  exposure: 1.5% ALC water ± 0.5% lipoic-acid chow
  instrument: Mitochondrial membrane potential and O2 consumption
  magnitude: Combination benefit
  reportType: measured-assessment
- id: reddit-acetyl-l-carnitine-oxidative-stress-11854487
  conceptId: oxidative-stress
  name: Oxidative-stress markers
  direction: Decreased
  evidence: Limited research
  description: ALC plus lipoic acid restored ascorbate and lowered malondialdehyde
    in old-rat hepatocytes.
  sourceId: reddit-pmid-11854487
  population: Old F344 rats
  exposure: 1.5% ALC water + lipoic acid
  instrument: Ascorbate and malondialdehyde
  magnitude: Improved toward young controls
  reportType: measured-assessment
- id: reddit-acetyl-l-carnitine-neurogenesis-23670591
  conceptId: neurogenesis
  name: Adult hippocampal neurogenesis
  direction: Increased
  evidence: Limited research
  description: Chronic ALC increased adult-born neurons and reversed stress-related
    depressive-like behavior in mice; effects correlated with increased hippocampal
    mGlu2 expression.
  sourceId: reddit-pmid-23670591
  population: Stressed and unstressed mice
  exposure: Chronic ALC
  instrument: Neurogenesis and behavioral assays
  magnitude: Chronic > acute exposure
  reportType: measured-assessment
- id: reddit-acetyl-l-carnitine-piracetam-pk-26248695
  conceptId: bioavailability
  name: Piracetam dose-normalized exposure
  direction: Variable
  evidence: Human research
  description: In healthy volunteers, piracetam coformulated with 330 mg L-carnitine
    had dose-normalized AUCinf 102.55% of 800 mg piracetam reference (90% CI 100.62–104.51).
    This is piracetam PK, not an ALC half-life.
  sourceId: reddit-pmid-26248695
  population: Healthy adults of both sexes
  exposure: Piracar 270/330 mg vs piracetam 800 mg
  instrument: Plasma HPLC-MS/MS
  magnitude: Bioequivalent piracetam exposure
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Mitochondrial fatty-acid transport
  description: L-carnitine and acetyl-L-carnitine participate in mitochondrial fatty-acid
    transport and energy metabolism; the review describes their role in modulating
    fatty-acid oxidation.
  sourceId: reddit-pmid-23138103
- title: NF-κB p65 acetylation and mGlu2
  description: In mouse neural progenitors, ALC activated NF-κB p65 acetylation and
    increased mGlu2 receptor expression; this pathway accompanied proneurogenic and
    antidepressant-like effects.
  sourceId: reddit-pmid-23670591
```

## Cautions

```yaml
- title: Predominantly preclinical evidence
  description: Most index findings are rat or mouse studies; they do not establish
    human cognitive enhancement or antidepressant efficacy.
  sourceId: reddit-pmid-11854487
- title: Combination confounding
  description: The strongest metabolic findings used ALC together with lipoic acid,
    so an ALC-specific effect cannot be isolated.
  sourceId: reddit-pmid-11854487
- title: Review-level uncertainty
  description: A review found promising depression RCT signals but called for adequately
    powered, advanced trials before firm conclusions.
  sourceId: reddit-pmid-24607292
```

## Claims

```yaml
- id: reddit-claim-acetyl-l-carnitine-11854487-0
  assertion: ALC plus lipoic acid improved mitochondrial and oxidative-stress measures
    in old rats.
  relation: associated-with
  participants:
  - entityId: substance:acetyl-l-carnitine
    role: intervention or exposure
  - entityId: tag:energy
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-11854487
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-acetyl-l-carnitine-22549035-1
  assertion: Chronic ALC altered brain energy metabolites and monoamines in healthy
    mice.
  relation: associated-with
  participants:
  - entityId: substance:acetyl-l-carnitine
    role: intervention or exposure
  - entityId: tag:mood
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-22549035
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-acetyl-l-carnitine-23670591-2
  assertion: Chronic ALC increased hippocampal neurogenesis and stress resilience
    in mice through an mGlu2-linked pathway.
  relation: associated-with
  participants:
  - entityId: substance:acetyl-l-carnitine
    role: intervention or exposure
  - entityId: tag:neurogenesis
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-23670591
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-acetyl-l-carnitine-26248695-3
  assertion: Piracetam exposure was bioequivalent when coformulated with L-carnitine;
    this does not establish ALC PK.
  relation: associated-with
  participants:
  - entityId: substance:acetyl-l-carnitine
    role: intervention or exposure
  - entityId: tag:bioavailability
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-26248695
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
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
- id: reddit-index-acetyl-l-carnitine
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Reddit index discovery link; it does not establish efficacy, dose or safety.
  limitation: Community index used as a discovery aid; publication evidence is evaluated in the linked records.
- id: reddit-pmid-27240534
  title: Stress-induced structural plasticity of medial amygdala stellate neurons and rapid prevention by a candidate antidepressant.
  authors: T Lau, B Bigio, D Zelli, B S McEwen, C Nasca
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27240534/
  kind: PubMed publication
  insight: ALC during chronic restraint stress increased social interaction and reduced passive behavior while opposing amygdala structural remodeling.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: '27240534'
  doi: 10.1038/mp.2016.68
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcid: PMC5133196
- id: reddit-pmid-26248695
  title: Assessment of pharmacokinetic interaction between piracetam and l-carnitine in healthy subjects.
  authors: Gustavo D Mendes, Gabriela Traldi Zaffalon, Antonio Sérgio Silveira, Juliana Cama Ramacciato, Rogério Heládio Lopes Motta, Thiago Gagliano-Jucá, Anibal Gil Lopes, José Cássio de Almeida Magalhães, Gilberto De Nucci
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26248695/
  kind: PubMed publication
  insight: Piracetam plus L-carnitine formulation had dose-normalized piracetam AUC ratio 102.55% (90% CI 100.62–104.51%); L-carnitine PK was not measured.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '26248695'
  doi: 10.1002/bmc.3579
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11854487
  title: Feeding acetyl-L-carnitine and lipoic acid to old rats significantly improves metabolic function while decreasing oxidative stress.
  authors: Tory M Hagen, Jiankang Liu, Jens Lykkesfeldt, Carol M Wehr, Russell T Ingersoll, Vladimir Vinarsky, James C Bartholomew, Bruce N Ames
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11854487/
  kind: PubMed publication
  insight: Rats received 1.5% ALC drinking water ± 0.5% lipoic-acid chow; combination improved mitochondrial function, ambulatory activity and oxidative-stress markers.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: '11854487'
  doi: 10.1073/pnas.261708898
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcid: PMC122286
- id: reddit-pmid-22549035
  title: Chronic acetyl-L-carnitine alters brain energy metabolism and increases noradrenaline and serotonin content in healthy mice.
  authors: Olav B Smeland, Tore W Meisingset, Karin Borges, Ursula Sonnewald
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22549035/
  kind: PubMed publication
  insight: Healthy mice given ~0.5 g/kg/day ALC for 25 days showed altered glucose/lactate metabolism, higher energy metabolites and region-specific monoamine changes.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '22549035'
  doi: 10.1016/j.neuint.2012.04.008
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24607292
  title: A review of current evidence for acetyl-l-carnitine in the treatment of depression.
  authors: Sheng-Min Wang, Changsu Han, Soo-Jung Lee, Ashwin A Patkar, Prakash S Masand, Chi-Un Pae
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24607292/
  kind: PubMed publication
  insight: Review reports several small depression RCTs but emphasizes need for larger, better-designed trials.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '24607292'
  doi: 10.1016/j.jpsychires.2014.02.005
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23138103
  title: 'Translating the basic knowledge of mitochondrial functions to metabolic therapy: role of L-carnitine.'
  authors: Santica M Marcovina, Cesare Sirtori, Andrea Peracino, Mihai Gheorghiade, Peggy Borum, Giuseppe Remuzzi, Hossein Ardehali
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23138103/
  kind: PubMed publication
  insight: Review describes carnitine derivatives in mitochondrial fatty-acid transport and energy metabolism; translational efficacy remains uncertain.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: '23138103'
  doi: 10.1016/j.trsl.2012.10.006
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcid: PMC3590819
- id: reddit-pmid-23670591
  title: Upregulation of mGlu2 receptors via NF-κB p65 acetylation is involved in the Proneurogenic and antidepressant effects of acetyl-L-carnitine.
  authors: Bruna Cuccurazzu, Valeria Bortolotto, Maria Maddalena Valente, Federica Ubezio, Aleardo Koverech, Pier Luigi Canonico, Mariagrazia Grilli
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23670591/
  kind: PubMed publication
  insight: Chronic ALC in mice increased mGlu2 via NF-κB p65 acetylation and produced proneurogenic/antidepressant-like effects.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: '23670591'
  doi: 10.1038/npp.2013.121
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcid: PMC3773672
```

## Legal

```yaml
[]
```
