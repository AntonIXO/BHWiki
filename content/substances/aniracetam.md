---
slug: aniracetam
name: Aniracetam
subtitle: Racetam
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Racetam
tags:
  - anxiety
  - cognitive-performance
  - episodic-memory
  - nootropic-research
  - serotonin-2a
  - acetylcholine
  - ampa-receptor
  - glutamate
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
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
  - references
  - legal
  - externalWikiLinks
x-order: 1105
---

## Summary

Aniracetam is a racetam compound studied for its effects on glutamate signalling, learning and memory.

## Description

Aniracetam is a racetam compound studied for its effects on glutamate signalling, learning and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Mouse anxiety models
  amount: 10–100 mg/kg
  quantity: 10
  quantityMax: 100
  unit: mg/kg
  ingredient: Aniracetam
  formulation: Study formulation
  frequency: Acute
  duration: Acute behavioral tests
  population: Mice
  purpose: Anxiety-model research
  sourceCategory: research
  note: Dose range in social-interaction testing.
  sourceId: pubmed-11412837
- label: Rat sleep-deprivation model
  amount: 25, 50 or 100 mg/kg
  quantity: 25
  quantityMax: 100
  unit: mg/kg
  ingredient: Aniracetam
  formulation: Study formulation
  frequency: Acute before training
  duration: After 96 h sleep deprivation
  population: Male Wistar rats
  purpose: Passive-avoidance learning research
  sourceCategory: research
  note: Only 100 mg/kg reversed impairment.
  sourceId: pubmed-24079994
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
- id: research-aniracetam-anxiety-11412837
  conceptId: anxiety
  name: Anxiety-like behavior
  direction: Decreased
  evidence: Limited research
  description: Aniracetam increased social interaction and showed anxiolytic effects in social-interaction, elevated-plus-maze and conditioned-fear tests in mice.
  sourceId: pubmed-11412837
  population: Mice
  exposure: 10–100 mg/kg
  instrument: Social interaction, elevated plus maze and conditioned fear
  magnitude: Model-dependent anxiolysis
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: aniracetam-normal-mice-25099639
  conceptId: cognitive-performance
  name: Cognitive and affective behavior in healthy mice
  direction: Variable
  evidence: Limited research
  description: Daily oral aniracetam 50 mg/kg for 50 days did not significantly alter spatial learning, associative learning, motor learning, odor discrimination, locomotion, anxiety or repetitive behavior in naïve adult C57BL/6J mice.
  sourceId: pubmed-25099639
  population: Adult C57BL/6J mice
  exposure: 50 mg/kg oral aniracetam daily
  instrument: Morris water maze, fear conditioning, rotarod, odor discrimination and affective-behavior assays
  magnitude: No significant differences across measured behaviors
  reportType: measured-assessment
- id: research-aniracetam-memory-24079994
  conceptId: episodic-memory
  name: Passive-avoidance retention
  direction: Increased
  evidence: Limited research
  description: Aniracetam 100 mg/kg reversed passive-avoidance impairment after 96 hours of sleep deprivation at 2- and 24-hour retention tests.
  sourceId: pubmed-24079994
  population: Male Wistar rats
  exposure: 25–100 mg/kg; 100 mg/kg effective
  instrument: Passive-avoidance retention
  magnitude: Reversal at highest dose
  reportType: measured-assessment
- id: research-aniracetam-amp-ar-11834304
  conceptId: cognitive-performance
  name: AMPA-receptor current potentiation
  direction: Increased
  evidence: Limited research
  description: 2-Pyrrolidinone potentiated GluR1,3 and GluR1,2,3 AMPA currents, with maximal effect around 100 μM and persistence after washout; effects were CaMKII-sensitive.
  sourceId: pubmed-11834304
  population: Xenopus oocytes expressing AMPA receptors
  exposure: 1 nM–300 μM metabolite concentrations
  instrument: Kainate-evoked AMPA currents
  magnitude: ~180% of baseline at 60 min after 100 μM 2-pyrrolidinone
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Metabolite AMPA potentiation
  description: Aniracetam metabolites, especially 2-pyrrolidinone, potentiated AMPA receptor currents; KN-93 inhibition implicates CaMKII in the long-lasting effect.
  sourceId: pubmed-11834304
- title: Cholinergic, serotonergic and dopaminergic interaction
  description: Haloperidol, mecamylamine and ketanserin blocked or attenuated mouse anxiolytic effects, implicating D2, nicotinic acetylcholine and 5-HT2A receptors.
  sourceId: pubmed-11412837
```

## Cautions

```yaml
- title: No human evidence in linked papers
  description: All cited biological findings are from animal models or in-vitro receptor systems; human efficacy and safety are not established.
  sourceId: pubmed-11412837
- title: Model and metabolite limits
  description: The effective 100 mg/kg rat dose and micromolar metabolite concentrations cannot be converted to a safe human dose.
  sourceId: pubmed-24079994
```

## Claims

```yaml
- id: research-claim-aniracetam-11412837-0
  assertion: Aniracetam reduced anxiety-like behavior in several mouse models through interacting cholinergic, serotonergic and dopaminergic systems.
  relation: associated-with
  participants:
    - entityId: substance:aniracetam
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-11412837
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-aniracetam-24079994-1
  assertion: Aniracetam 100 mg/kg reversed sleep-deprivation passive-avoidance deficits in rats.
  relation: associated-with
  participants:
    - entityId: substance:aniracetam
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-24079994
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-aniracetam-11834304-2
  assertion: The 2-pyrrolidinone metabolite potentiated AMPA receptor currents through a CaMKII-sensitive mechanism in vitro.
  relation: associated-with
  participants:
    - entityId: substance:aniracetam
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-11834304
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
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
- id: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43e3-7c72-bd49-37f334347502
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-24079994
  title: AMPA receptors mediate passive avoidance deficits induced by sleep deprivation.
  authors: Francisco Paulino Dubiela, Claudio Marcos Queiroz, Karin Di Monteiro Moreira, Jose N Nobrega, Luciane Valéria Sita, Sergio Tufik, Debora Cristina Hipolide
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24079994/
  kind: PubMed publication
  insight: Aniracetam 100 mg/kg reversed passive-avoidance deficits after 96 h sleep deprivation in rats.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "24079994"
  doi: 10.1016/j.bbr.2013.09.037
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-1795e054e2fc
  title: "Aniracetam: Its Novel Therapeutic Potential in Cerebral Dysfunctional Disorders Based on Recent Pharmacological Discoveries (2002)"
  authors: Not established
  year: 2002
  url: https://onlinelibrary.wiley.com/doi/10.1111/j.1527-3458.2002.tb00216.x/pdf
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-11412837
  title: Anxiolytic effects of aniracetam in three different mouse models of anxiety and the underlying mechanism.
  authors: K Nakamura, M Kurasawa
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11412837/
  kind: PubMed publication
  insight: Aniracetam 10–100 mg/kg was anxiolytic across three mouse models; receptor antagonists implicated nicotinic, 5-HT2A and D2 mechanisms.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "11412837"
  doi: 10.1016/s0014-2999(01)01005-6
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-11834304
  title: The aniracetam metabolite 2-pyrrolidinone induces a long-term enhancement in AMPA receptor responses via a CaMKII pathway.
  authors: Tomoyuki Nishizaki, Takuro Matsumura
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11834304/
  kind: PubMed publication
  insight: 2-Pyrrolidinone potentiated AMPA currents (maximal around 100 μM) with CaMKII-sensitive persistence in Xenopus oocytes.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "11834304"
  doi: 10.1016/s0169-328x(01)00331-x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-8c08810ac4e2
  title: Aniracetam does not alter cognitive and affective behavior in adult C57BL/6J mice.
  authors: Thomas W Elston; Ashvini Pandian; Gregory D Smith; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25099639/
  kind: PubMed publication
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "25099639"
  doi: 10.1371/journal.pone.0104443
- id: pubmed-25099639
  title: Aniracetam does not alter cognitive and affective behavior in adult C57BL/6J mice.
  authors: Thomas W Elston; Ashvini Pandian; Gregory D Smith; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25099639/
  kind: PubMed publication
  insight: Daily oral 50 mg/kg aniracetam did not alter cognitive or affective behavior across multiple assays in healthy adult mice; PMC full text is available.
  limitation: Healthy-animal null finding; it does not establish human efficacy or safety.
  pmid: "25099639"
  pmcid: PMC4123976
  doi: 10.1371/journal.pone.0104443
```

## Legal

```yaml
[]
```
