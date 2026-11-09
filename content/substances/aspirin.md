---
slug: aspirin
name: Aspirin
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - stress
  - working-memory-state
  - cortisol-response
  - spatial-memory
  - neurotrophic-signaling
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-24699240
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-24699240
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

Aspirin affects prostaglandin production and platelet activity. The linked studies examine its relationship to cognition.

## Description

The index links one human neuroendocrine study, an aged-rat aspirin plus ascorbate experiment and an astrocyte mechanistic study. Doses and species differ substantially.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Healthy-adult HPA pilot
  amount: 300 mg daily for 7 days; 600 mg acute
  quantity: 300
  quantityMax: 600
  unit: mg
  ingredient: Aspirin (acetylsalicylic acid)
  formulation: Oral aspirin
  route: Oral
  frequency: Daily pretreatment plus acute challenge
  duration: 7-day pretreatment; acute desmopressin study
  population: Healthy adults
  purpose: HPA and working-memory research
  sourceCategory: research
  note: Acute 600 mg and subacute 300 mg regimens were separate components.
  sourceId: pubmed-19404617
- label: Aged-rat cognition study
  amount: Dose not stated in abstract
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Aspirin
  formulation: Study formulation
  frequency: Daily
  duration: 10 weeks
  population: Aged rats
  purpose: Spatial-learning and oxidative-stress research
  sourceCategory: research
  note: Abstract does not report aspirin quantity.
  sourceId: pubmed-24699240
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
- id: research-aspirin-cortisol-19404617
  conceptId: stress
  name: Cortisol awakening response
  direction: Decreased
  evidence: Human research
  description: Seven days of 300 mg aspirin reduced the cortisol awakening response in healthy adults.
  sourceId: pubmed-19404617
  population: Healthy adults
  exposure: 300 mg daily for 7 days
  instrument: Cortisol awakening response
  magnitude: Significant reduction
  reportType: measured-assessment
- id: research-aspirin-memory-19404617
  conceptId: working-memory-state
  name: Working memory
  direction: Increased
  evidence: Human research
  description: Aspirin pretreatment improved working-memory performance in the healthy-adult pilot.
  sourceId: pubmed-19404617
  population: Healthy adults
  exposure: 300 mg daily for 7 days
  instrument: Neuropsychological working-memory task
  magnitude: Improved
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: research-aspirin-hpa-19404617
  conceptId: cortisol-response
  name: Desmopressin-stimulated ACTH/cortisol
  direction: Variable
  evidence: Human research
  description: Aspirin pretreatment did not attenuate the ACTH or cortisol response to desmopressin despite reducing the awakening response.
  sourceId: pubmed-19404617
  population: Healthy adults
  exposure: 300 mg/day pretreatment plus 600 mg acute challenge
  instrument: ACTH and cortisol after desmopressin
  magnitude: No attenuation
  reportType: measured-assessment
- id: research-aspirin-spatial-learning-24699240
  conceptId: spatial-memory
  name: Spatial learning
  direction: Increased
  evidence: Limited research
  description: In aged rats, aspirin alone partially improved Morris-water-maze learning, while aspirin plus ascorbate produced significant improvement and reduced oxidative-stress markers.
  sourceId: pubmed-24699240
  population: Aged rats
  exposure: Aspirin ± ascorbate for 10 weeks; dose not stated
  instrument: Morris water maze, 8-OHdG, malondialdehyde
  magnitude: Combination significant
  reportType: measured-assessment
- id: research-aspirin-cntf-23653362
  conceptId: neurotrophic-signaling
  name: Astrocyte CNTF expression
  direction: Increased
  evidence: Limited research
  description: Aspirin increased CNTF mRNA and protein in mouse and human astrocytes through PKA/CREB signaling; conditioned media protected oligodendrocytes in vitro.
  sourceId: pubmed-23653362
  population: Primary mouse and human astrocytes; oligodendrocyte cultures
  exposure: Dose/time response in vitro; quantities not stated in abstract
  instrument: CNTF expression and oligodendrocyte assays
  magnitude: Dose/time dependent
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: PKA/CREB-CNTF pathway
  description: In astrocytes, aspirin activated PKA and CREB, recruited CREB/CBP to the CNTF promoter and increased CNTF expression; PKA or CREB inhibition blocked the effect.
  sourceId: pubmed-23653362
```

## Cautions

```yaml
- title: Small pilot
  description: The human HPA and working-memory findings come from a pilot study and require replication.
  sourceId: pubmed-19404617
- title: Combination confounding
  description: Aged-rat cognitive benefit was strongest with aspirin plus ascorbate; an aspirin-specific effect was smaller.
  sourceId: pubmed-24699240
- title: Preclinical mechanistic evidence
  description: CNTF and oligodendrocyte protection were demonstrated in cultured cells, not patients with multiple sclerosis.
  sourceId: pubmed-23653362
```

## Claims

```yaml
- id: research-claim-aspirin-19404617-0
  assertion: Seven-day 300 mg aspirin reduced cortisol awakening response and improved working memory in a healthy-adult pilot.
  relation: associated-with
  participants:
    - entityId: substance:aspirin
      role: intervention or exposure
    - entityId: tag:working-memory
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-19404617
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-aspirin-24699240-1
  assertion: Aspirin plus ascorbate improved spatial learning and reduced oxidative stress in aged rats.
  relation: associated-with
  participants:
    - entityId: substance:aspirin
      role: intervention or exposure
    - entityId: tag:spatial-memory
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-24699240
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-aspirin-23653362-2
  assertion: Aspirin increased astrocyte CNTF via PKA/CREB signaling in vitro.
  relation: associated-with
  participants:
    - entityId: substance:aspirin
      role: intervention or exposure
    - entityId: tag:neurotrophic-signaling
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-23653362
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
- id: pubmed-24699240
  title: Acetylsalicylic acid and ascorbic acid combination improves cognition; via antioxidant effect or increased expression of NMDARs and nAChRs?
  authors: Yusuf Kara, Duygu Kumbul Doguc, Esin Kulac, Fatih Gultekin
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24699240/
  kind: PubMed publication
  insight: In aged rats, aspirin plus ascorbate improved Morris-maze learning and altered oxidative/receptor markers; aspirin alone had partial effect.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "24699240"
  doi: 10.1016/j.etap.2014.02.019
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23653362
  title: "Up-regulation of ciliary neurotrophic factor in astrocytes by aspirin: implications for remyelination in multiple sclerosis."
  authors: Khushbu K Modi, Michael Sendtner, Kalipada Pahan
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23653362/
  kind: PubMed publication
  insight: Aspirin increased astrocyte CNTF through PKA/CREB and protected oligodendrocytes in cell culture.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: "23653362"
  doi: 10.1074/jbc.M112.447268
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcid: PMC3689994
- id: pubmed-19404617
  title: "Effect of aspirin on hypothalamic-pituitary-adrenal function and on neuropsychological performance in healthy adults: a pilot study."
  authors: Stuart Watson, Kate Horton, Samantha Bulmer, Jane Carlile, Ciaran Corcoran, Peter Gallagher, I Nicol Ferrier
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19404617/
  kind: PubMed publication
  insight: "Healthy-adult pilot: 300 mg/day for 7 days reduced cortisol awakening response and improved working memory but did not blunt desmopressin ACTH/cortisol."
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "19404617"
  doi: 10.1007/s00213-009-1525-4
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
