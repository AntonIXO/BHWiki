---
slug: bf-7
name: BF-7
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - cognitive-performance
  - attention
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-19627215
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-19627215
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

BF-7 is a named silk-derived preparation studied for memory and cognitive performance.

## Description

In 46 healthy children, BF-7 extracted from Bombyx mori reduced Color Trails response time by about 23% and approximately doubled task accuracy versus placebo. The linked abstract does not state the administered dose or formulation details needed for general use.

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
[]
```

## Outcomes

```yaml
- id: bf7-cognitive-performance-19627215
  conceptId: cognitive-performance
  name: Cognitive performance
  direction: Increased
  evidence: Human research
  description: The trial reported improved Color Trails response time and accuracy after BF-7 in normal schoolchildren.
  sourceId: pubmed-19627215
  population: 46 healthy schoolchildren
  exposure: BF-7; dose and duration not stated in abstract
  instrument: Color Trails Making Test
  magnitude: 23% faster response time; approximately twofold accuracy improvement
  reportType: measured-assessment
- id: bf7-attention-19627215
  conceptId: attention
  name: Attention and cognitive flexibility
  direction: Increased
  evidence: Human research
  description: BF-7 was associated with faster and more accurate Color Trails performance in healthy schoolchildren.
  sourceId: pubmed-19627215
  population: 46 healthy children, approximately 9.8–9.9 years old
  exposure: BF-7 versus placebo; dose not stated in abstract
  instrument: Color Trails Making Test
  magnitude: Response time reduced by 23% on average; accuracy approximately doubled
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Dose and formulation not reported in abstract
  description: The linked pediatric study does not provide enough abstract detail to infer a reproducible dose, product composition or long-term safety profile.
  sourceId: pubmed-19627215
```

## Claims

```yaml
- id: bf7-claim-19627215
  assertion: BF-7 improved Color Trails response time and accuracy in one small randomized study of healthy children.
  relation: associated-with
  participants:
    - entityId: substance:bf-7
      role: intervention
    - entityId: tag:attention
      role: reported endpoint
  context: Single pediatric trial; dose not stated in abstract.
  sourceIds:
    - pubmed-19627215
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sample and absent dose/formulation details.
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
- id: pubmed-19627215
  title: Brain factor-7 extracted from Bombyx mori enhances cognition and attention in normal children.
  authors: Kunwoo Kim, Subin Park, Hanik K Yoo, Jun-Young Lee, Hee-Yeon Jung, Do-Hee Kim, Hyun-Jung Lee, Jin-Young Kim, Young-Chul Youn, Maurice R Marshall, Sung-Su Kim, Yoonhwa Jeong
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19627215/
  kind: PubMed publication
  insight: It has been reported that brain factor-7 (BF-7) extracted from Bombyx mori improves cognitive functions in normal juveniles and adults as well as cognitively impaired patients.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19627215"
  doi: 10.1089/jmf.2008.1236
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-b9fa530e7312
  title: "Milk with Brain Factor-7 (BF-7 milk) enhances attention and cognition in normal persons. "
  authors: Not established
  year: 2026
  url: https://www.cabdirect.org/abstracts/20093221933.html;jsessionid=1E2F3B7A10B32E452FFE22DCFFBAA62D
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-ba3d5682e5ef
  title: The Improvement of Short- and Long-term Memory of Young Children by BF-7
  authors: Not established
  year: 2026
  url: https://www.koreascience.or.kr/article/ArticleFullRecord.jsp?cn=SPOOBG_2010_v39n3_376
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

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Silk_amino_acid
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/silk-amino-acids
  title: Examine.com
```
