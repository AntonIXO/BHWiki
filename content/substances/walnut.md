---
slug: walnut
name: Walnut
subtitle: Food and nutrient
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Food and nutrient
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
  sourceId: pubmed-25214070
  observationId: walnut-pk-25214070
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-25214070
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

Walnuts contain fats and polyphenols studied in nutrition and cognition research.

## Description

Walnuts contain fats and polyphenols studied in nutrition and cognition research.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: walnut-pk-25214070
  analyte: Walnut
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: EA is further metabolized by microbiota to form urolithins, such as A and B, which are absorbed.
  sourceId: pubmed-25214070
  modelEligible: false
- id: walnut-pk-22917841
  analyte: Walnut
  population: Walnuts, rich in omega fatty acids, have been shown to improve memory, cognition and neuronal effects related to oxidative stress (OS) and inflammation (INF) in animals and human trials.
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The clearance of polyubiquitinated protein aggregates such as p62/SQSTM1 was more profound in hippocampus, a critical region in the brain involved in memory and cognitive performance, than striatum.
  sourceId: pubmed-22917841
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
- id: research-walnut-cognitive-performance-21923981
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: Walnuts contain a number of potentially neuroprotective compounds like vitamin E, folate, melatonin, several antioxidative polyphenols and significant amounts of n-3 α-linolenic fatty acid. No significant increases were detected for mood, non-verbal reasoning or memory on the walnut-supplemented diet. However, inferential verbal reasoning increased significantly by 11.2 %, indicating a medium effect size (P = 0.009; d = 0.567).
  sourceId: pubmed-21923981
  population: Population not specified in the returned PubMed abstract.
  exposure: "A total of sixty-four college students were randomly assigned to two treatment sequences in a crossover fashion: walnuts-placebo or placebo-walnuts."
  instrument: null
  magnitude: Walnuts contain a number of potentially neuroprotective compounds like vitamin E, folate, melatonin, several antioxidative polyphenols and significant amounts of n-3 α-linolenic fatty acid. No significant increases were detected for mood, non-verbal reasoning or memory on the walnut-supplemented diet. However, inferent
  reportType: measured-assessment
- id: research-walnut-attention-25214070
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Limited research
  description: ETs, EA and urolithins have shown to slow the proliferation and growth of different types of cancer cells but the mechanisms remain unclear. Electrophoretic mobility shift assays revealed that urolithins decreased AR binding to its consensus response element. Additionally, urolithins induced apoptosis in LNCaP cells, and this effect correlated with a decrease in Bcl-2 protein levels.
  sourceId: pubmed-25214070
  population: Population not specified in the returned PubMed abstract.
  exposure: Walnuts have been gathering attention for their health-promoting properties.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 21923981)
  description: Walnuts contain a number of potentially neuroprotective compounds like vitamin E, folate, melatonin, several antioxidative polyphenols and significant amounts of n-3 α-linolenic fatty acid.
  sourceId: pubmed-21923981
- title: Explicit mechanistic or disposition finding (PMID 24500933)
  description: Lifestyle factors greatly affect the progression of cognitive decline, with high-risk behaviors including unhealthy diet, lack of exercise, smoking, and exposure to environmental toxins leading to enhanced oxidative stress and inflammation.
  sourceId: pubmed-24500933
- title: Explicit mechanistic or disposition finding (PMID 25521238)
  description: Hippocampal N-methyl d-aspartate receptors (NMDARs) are involved in the formation of cognitive functions.
  sourceId: pubmed-25521238
- title: Explicit mechanistic or disposition finding (PMID 25214070)
  description: We investigate the role of urolithins in the regulatory mechanisms in prostate cancer, specifically those related to the androgen receptor (AR), which have been linked to the development of this type of cancer.
  sourceId: pubmed-25214070
- title: Explicit mechanistic or disposition finding (PMID 22917841)
  description: The accumulation of these potentially toxic proteins in brain increases with age, in part due to increased oxidative and inflammatory stresses.
  sourceId: pubmed-22917841
- title: Explicit mechanistic or disposition finding (PMID 25391888)
  description: The aims of our study were the evaluation of the hepatoprotective effect and antioxidant role of walnuts against ethanol-induced oxidative stress.
  sourceId: pubmed-25391888
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 24500933)
  description: Clinical manifestation of many of these disorders takes years, with the initiation of mild cognitive symptoms leading to behavioral problems, dementia and loss of motor functions, the need for assisted living, and eventual death.
  sourceId: pubmed-24500933
```

## Claims

```yaml
- id: research-claim-walnut-21923981
  assertion: Walnuts contain a number of potentially neuroprotective compounds like vitamin E, folate, melatonin, several antioxidative polyphenols and significant amounts of n-3 α-linolenic fatty acid. No significant increases were detected for mood, non-verbal reasoning or memory on the walnut-supplemented diet. However, inferential verbal reasoning increased significantly by 11.2 %, indicating a medium effect size (P = 0.009; d = 0.567).
  relation: associated-with
  participants:
    - entityId: substance:walnut
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: PMID 21923981 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-21923981
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
- id: research-claim-walnut-25214070
  assertion: ETs, EA and urolithins have shown to slow the proliferation and growth of different types of cancer cells but the mechanisms remain unclear. Electrophoretic mobility shift assays revealed that urolithins decreased AR binding to its consensus response element. Additionally, urolithins induced apoptosis in LNCaP cells, and this effect correlated with a decrease in Bcl-2 protein levels.
  relation: associated-with
  participants:
    - entityId: substance:walnut
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: PMID 25214070 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-25214070
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
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
- id: pubmed-21923981
  title: Effects of walnut consumption on cognitive performance in young adults.
  authors: Peter Pribis, Rudolph N Bailey, Andrew A Russell, Marcia A Kilsby, Magaly Hernandez, Winston J Craig, Tevni Grajales, David J Shavlik, Joan Sabatè
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/21923981/
  kind: PubMed publication
  insight: Walnuts contain a number of potentially neuroprotective compounds like vitamin E, folate, melatonin, several antioxidative polyphenols and significant amounts of n-3 α-linolenic fatty acid. No significant increases were detected for mood, non-verbal reasoning or memory on the walnut-supplemented diet. However, inferential verbal reasoning increased significantly by 11.2 %, indicating a medium effect size (P = 0.009; d = 0.567).
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "21923981"
  doi: 10.1017/S0007114511004302
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25521238
  title: The effects of walnut supplementation on hippocampal NMDA receptor subunits NR2A and NR2B of rats.
  authors: Hicran Hicyilmaz, Huseyin Vural, Namik Delibas, Recep Sutcu, Fatih Gultekin, Nigar Yilmaz
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/25521238/
  kind: PubMed publication
  insight: The expression of NR2A and NR2B was elevated in the walnut-supplemented rats compared with the control group (P < 0.05). In addition, the levels of lipid peroxidation in the walnut-supplemented group were significantly decreased compared with the control group.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "25521238"
  doi: 10.1179/1476830514Y.0000000166
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-2420b1287457
  title: A cross sectional study of the association between walnut consumption and cognitive function among adult us populations represented in NHANES
  authors: Not established
  year: 2026
  url: https://link.springer.com/article/10.1007/s12603-014-0569-2
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-22917841
  title: Walnut diet reduces accumulation of polyubiquitinated proteins and inflammation in the brain of aged rats.
  authors: Shibu M Poulose, Donna F Bielinski, Barbara Shukitt-Hale
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/22917841/
  kind: PubMed publication
  insight: An increase in the aggregation of misfolded/damaged polyubiquitinated proteins has been the hallmark of many age-related neurodegenerative diseases. The accumulation of these potentially toxic proteins in brain increases with age, in part due to increased oxidative and inflammatory stresses. Walnuts, rich in omega fatty acids, have been shown to improve memory, cognition and neuronal effects related to oxidative stress (OS) and inflammation (INF) in animals and human trials.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "22917841"
  doi: 10.1016/j.jnutbio.2012.06.009
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25391888
  title: Determination of hepatoprotective and antioxidant role of walnuts against ethanol-induced oxidative stress in rats.
  authors: Bedia Bati, Ismail Celik, Abdulahad Dogan
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25391888/
  kind: PubMed publication
  insight: The hepatoprotective and antioxidant role of the walnuts supplementation feed against ethanol-induced oxidative stress were evaluated by measuring liver damage serum marker enzymes; aspartate aminotransferase (AST); alanine aminotransferase (ALT); gamma glutamyl transpeptidase (GGT); lactate dehydrogenase (LDH); and antioxidant defense systems such as reduced glutathione, glutathione reductase, superoxide dismutase, glutathione-S-transferase, catalase, and glutathione peroxidase and Malondialdehyde (MDA) content in various tissues of rats. According to the results, the biochemical analysis showed a considerable increase in the serum aspartate AST, ALT, GGT, and LDH in the group II as compare
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "25391888"
  doi: 10.1007/s12013-014-0328-3
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-24500933
  title: Role of walnuts in maintaining brain health with age.
  authors: Shibu M Poulose, Marshall G Miller, Barbara Shukitt-Hale
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24500933/
  kind: PubMed publication
  insight: Because of the combination of population growth and population aging, increases in the incidence of chronic neurodegenerative disorders have become a societal concern, both in terms of decreased quality of life and increased financial burden. Lifestyle factors greatly affect the progression of cognitive decline, with high-risk behaviors including unhealthy diet, lack of exercise, smoking, and exposure to environmental toxins leading to enhanced oxidative stress and inflammation. Although there exists an urgent need to develop effective treatments for age-related cognitive decline and neurodegenerative disease, prevention strategies have been underdeveloped.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "24500933"
  doi: 10.3945/jn.113.184838
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25214070
  title: Walnut polyphenol metabolites, urolithins A and B, inhibit the expression of the prostate-specific antigen and the androgen receptor in prostate cancer cells.
  authors: Claudia Sánchez-González, Carlos J Ciudad, Véronique Noé, Maria Izquierdo-Pulido
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25214070/
  kind: PubMed publication
  insight: ETs, EA and urolithins have shown to slow the proliferation and growth of different types of cancer cells but the mechanisms remain unclear. Electrophoretic mobility shift assays revealed that urolithins decreased AR binding to its consensus response element. Additionally, urolithins induced apoptosis in LNCaP cells, and this effect correlated with a decrease in Bcl-2 protein levels.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "25214070"
  doi: 10.1039/c4fo00542b
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
  url: https://en.wikipedia.org/wiki/Walnuts
  title: Wikipedia
```
