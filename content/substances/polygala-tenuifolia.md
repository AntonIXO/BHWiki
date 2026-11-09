---
slug: polygala-tenuifolia
name: Polygala tenuifolia
subtitle: BT-11 root-extract evidence with limited human trials.
aliases:
  - Yuan Zhi
  - Yuanzhi
  - Polygalae Radix
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical root and extract
tags:
  - memory-performance-effect
  - working-memory-state
  - cognitive-performance
  - adverse-events
accent: "#a9b993"
reviewedAt: 2026-11-05
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No human elimination study for the whole root or BT-11 extract was identified.
  sourceId: polygala-review-33069838
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: polygala-review-33069838
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
x-order: 1133
---

## Summary

Polygala tenuifolia is a plant whose root extract BT-11 has been studied for memory. Small human trials report improvements on some recall and cognitive tests.

## Description

Polygalae Radix is a dried-root medicinal material associated with P. tenuifolia and, in some pharmacopoeial contexts, P. sibirica. BT-11 is a named root extract and should not be treated as a chemically defined molecule or as interchangeable with generic root powder, other extracts, or isolated constituents. Human evidence remains limited to small, overlapping studies and one short-term safety trial.

## Evidence note

This research article adds PubMed-verified records for the 2009 older-adult BT-11 RCT, the 2019 adolescent safety RCT, and the 2023 systematic review/meta-analysis of Polygala plus Acorus. No human PK half-life, validated interaction profile, or long-term adult safety study was identified. Mechanistic findings from animal or in-vitro work are kept separate from clinical outcomes.

## Doses

```yaml
- label: "PMID 30576772 study exposure: BT-11 300 mg/day"
  amount: 300 mg/day
  quantity: 300
  quantityMax: null
  unit: mg/day
  ingredient: BT-11 Polygala tenuifolia root extract powder
  formulation: Root extract powder
  route: oral
  frequency: once daily
  duration: 12 weeks
  population: 121 participants aged 9–19 years; 61 BT-11 and 60 placebo
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: Randomized placebo-controlled safety study; dose and duration are study-specific.
  sourceId: polygala-safety-30576772
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
- id: polygala-bt11-memory-19429065
  conceptId: memory-performance-effect
  name: Episodic memory
  direction: Increased
  evidence: Human research
  description: In healthy adults, BT-11 produced a greater increase in K-CVLT immediate recall than placebo; recognition improved within the BT-11 group, while several K-CVLT subtests improved in both groups.
  sourceId: polygala-memory-19429065
  population: Healthy adults in a randomized, double-blind, placebo-controlled parallel-group study.
  exposure: Oral BT-11 or matching placebo capsules three times daily for 4 weeks; exact dose was not established from the accessible abstract.
  instrument: Korean California Verbal Learning Test
  magnitude: Between-group signal for immediate recall; exact numerical effect size not reported in the abstract.
  reportType: measured-assessment
- id: polygala-bt11-working-memory-19429065
  conceptId: working-memory-state
  name: Working memory
  direction: Increased
  evidence: Human research
  description: BT-11 significantly reduced errors on the Self-Ordered Pointing Test, whereas placebo did not.
  sourceId: polygala-memory-19429065
  population: Healthy adults in the same 4-week BT-11 trial.
  exposure: Oral BT-11 or placebo capsules three times daily for 4 weeks; exact dose was not established from the accessible abstract.
  instrument: Self-Ordered Pointing Test
  magnitude: Reduced errors; exact numerical effect size not reported in the abstract.
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: polygala-bt11-cerad-19699261
  conceptId: cognitive-performance
  name: Cognitive performance
  direction: Increased
  evidence: Human research
  description: In 53 older adults, total CERAD scores increased more in the BT-11 group (n=28) than placebo (n=25); word-list recognition, constructional recall and praxis, and modified Boston Naming Test scores were reported as improved. The abstract does not establish a significant between-group MMSE benefit.
  sourceId: polygala-elderly-19699261
  population: Older adults; 28 BT-11 and 25 placebo participants.
  exposure: Randomized, double-blind, placebo-controlled oral BT-11 root-extract study; dose and duration were not established from the primary abstract.
  instrument: CERAD Assessment Packet; Mini-Mental State Examination
  magnitude: Greater total CERAD increase; numerical effect sizes not reported in the abstract.
  reportType: measured-assessment
- id: polygala-bt11-adverse-events-30576772
  conceptId: adverse-events
  name: Adverse events
  direction: Variable
  evidence: Human research
  description: In a 12-week randomized safety study, 11 adverse reactions occurred in 10 BT-11 participants and 7 in 6 placebo participants; no statistically significant group differences were reported, and no significant differences were found in laboratory tests, vital signs, weight, or ECG.
  sourceId: polygala-safety-30576772
  population: 121 participants aged 9–19 years; 61 BT-11 and 60 placebo.
  exposure: Oral BT-11 root-extract powder 300 mg/day for 12 weeks versus matching placebo.
  instrument: Adverse-reaction assessment, hematology, blood chemistry, urinalysis, vital signs, body weight, ECG
  magnitude: 10/61 versus 6/60 participants with adverse reactions; statistical difference not reported.
  reportType: measured-assessment
- id: polygala-acorus-adjunctive-cognition-38283842
  conceptId: cognitive-performance
  name: Cognitive performance
  direction: Variable
  evidence: Human research
  description: A systematic review of 16 RCTs (1,103 Alzheimer’s disease participants) found pooled adjunctive Polygala tenuifolia plus Acorus tatarinowii with conventional drugs favored MMSE, ADL, and ADAS-cog, but evidence certainty was low or very low and Polygala’s independent effect could not be separated.
  sourceId: polygala-acorus-meta-38283842
  population: Mild-to-moderate Alzheimer’s disease populations across 16 RCTs.
  exposure: Polygala tenuifolia plus Acorus tatarinowii, alone or adjunctive to conventional medication, for 3–6 months in included trials.
  instrument: MMSE, ADL, ADAS-cog
  magnitude: "Adjunctive pooled MD: MMSE +2.57 (95% CI 1.44–3.69), ADL −3.19 (95% CI −4.29 to −2.09), ADAS-cog −2.09 (95% CI −3.07 to −1.10); high MMSE heterogeneity (I²=86%)."
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Acetylcholinesterase and neuroprotective findings
  description: The BT-11 clinical abstract describes earlier rat and in-vitro findings including acetylcholinesterase inhibition and enhanced brain glucose utilization. These mechanistic observations do not establish a human clinical effect.
  sourceId: polygala-memory-19429065
- title: Multicomponent botanical pharmacology
  description: Polygalae Radix reviews describe saponins, xanthones, oligosaccharide esters, and other constituents with preclinical pharmacology; the evidence does not define one active molecule or a human PK profile for the whole root.
  sourceId: polygala-review-33069838
```

## Cautions

```yaml
- title: Gastrointestinal and throat irritation
  description: A review of Polygalae Radix reports throat irritation from raw material and gastrointestinal toxicity with long-term or excessive exposure, with saponins discussed as contributors; processing is commonly used to reduce irritation.
  sourceId: polygala-review-33069838
- title: Limited duration and population safety
  description: The 12-week safety RCT was restricted to participants aged 9–19 years and a specific BT-11 powder; it does not establish long-term safety, adult safety at higher doses, or safety of unstandardized products.
  sourceId: polygala-safety-30576772
```

## Claims

```yaml
- id: polygala-claim-memory-19429065
  assertion: BT-11 was associated with source-specific memory-test improvements in healthy adults.
  relation: associated-with
  participants:
    - entityId: substance:polygala-tenuifolia
      role: named root extract exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Four-week randomized healthy-adult study; several measures also improved with placebo.
  sourceIds:
    - polygala-memory-19429065
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small single study with abstract-only numerical reporting and no independent replication identified.
- id: polygala-claim-acorus-combination-38283842
  assertion: Polygala tenuifolia plus Acorus tatarinowii may improve Alzheimer’s disease outcomes when added to conventional medication, with low or very low certainty.
  relation: associated-with
  participants:
    - entityId: substance:polygala-tenuifolia
      role: one component of combination exposure
    - entityId: tag:cognitive-performance
      role: pooled endpoint
  context: Systematic review of 16 RCTs; combination effects cannot be attributed to Polygala alone.
  sourceIds:
    - polygala-acorus-meta-38283842
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Multi-herb intervention, high or unclear risk of bias, and low/very low certainty.
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
- id: optihealth-substance-01a071ac-a832-7a3b-ad07-048cb847b0c1
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a071ac-a832-7a3b-ad07-048cb847b0c1
  kind: catalog-identity
  insight: The canonical catalog records this substance identity label.
  limitation: Catalog identity does not establish structure, dose, safety, or efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: polygala-memory-19429065
  title: Effects of BT-11 on memory in healthy humans.
  authors: Jun-Young Lee, Ka Young Kim, Ki Young Shin, Beom Young Won, Hee Yeon Jung, Yoo-Hun Suh
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19429065/
  kind: PubMed randomized controlled trial
  insight: Four-week oral BT-11 study in healthy adults using K-CVLT and SOPT.
  limitation: Abstract does not report exact dose, sample size, or numerical effect sizes.
  pmid: "19429065"
  doi: 10.1016/j.neulet.2009.03.024
  funding: Not assessed in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: polygala-elderly-19699261
  title: BT-11 is effective for enhancing cognitive functions in the elderly humans.
  authors: Ki Young Shin, Jun-Young Lee, Beom Young Won, Hee Yeon Jung, Keun-A Chang, Sushruta Koppula, Yoo-Hun Suh
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19699261/
  kind: PubMed randomized controlled trial
  insight: BT-11 group (n=28) had greater total CERAD increases than placebo (n=25), with selected memory and naming measures improved.
  limitation: Primary abstract does not establish dose, duration, numerical effect sizes, or a significant MMSE between-group benefit.
  pmid: "19699261"
  doi: 10.1016/j.neulet.2009.08.033
  funding: Not assessed in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: polygala-safety-30576772
  title: Study on the safety of Polygala tenuifolia Willdenow root extract powder (BT-11) in young person aged from 9 to 19 years old.
  authors: Cheol Hyoung Park, Pil-Soon Yang, Yeo Sang Yoon, Jeong-Chan Ra
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30576772/
  kind: PubMed randomized controlled trial
  insight: 300 mg/day BT-11 for 12 weeks showed no statistically significant difference from placebo in adverse reactions or safety laboratory, vital-sign, weight, and ECG measures.
  limitation: Age-specific short-term safety study; does not establish adult or long-term safety.
  pmid: "30576772"
  doi: 10.1016/j.jep.2018.12.031
  funding: Not assessed in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: polygala-acorus-meta-38283842
  title: "Polygala tenuifolia and Acorus tatarinowii in the treatment of Alzheimer's disease: a systematic review and meta-analysis."
  authors: Yuchen Zhang, Jinzhou Tian, Jingnian Ni, Mingqing Wei, Ting Li, Jing Shi
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10815298/
  kind: PubMed systematic review and meta-analysis
  insight: Sixteen RCTs (1,103 participants) studied Polygala–Acorus combinations; adjunctive pooled effects favored cognition and function but certainty was low/very low.
  limitation: Multi-herb intervention, high or unclear risk of bias, high MMSE heterogeneity, and no independent Polygala estimate.
  pmid: "38283842"
  doi: 10.3389/fphar.2023.1268000
  funding: Fundamental Research Funds for the Central Universities 2019-JYB-TD-007; National Key R&D Program 2018YFC1704100; National Natural Science Foundation of China 82074362; Qihuang Scholar Foundation.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors reported no commercial or financial relationships constituting a conflict.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10815298/
- id: polygala-review-33069838
  title: "Polygalae Radix: A review of its traditional uses, phytochemistry, pharmacology, toxicology, and pharmacokinetics."
  authors: Xin Zhao, Yueli Cui, Peng Wu, Pan Zhao, Qiao Zhou, Zhihui Zhang, Yue Wang, Xuelan Zhang
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/33069838/
  kind: PubMed review
  insight: Reviews Polygalae Radix from P. tenuifolia and P. sibirica, including constituents, toxicology, and pharmacokinetics; reports irritation concerns.
  limitation: Narrative review; does not establish clinical efficacy or a validated whole-root PK profile.
  pmid: "33069838"
  doi: 10.1016/j.fitote.2020.104759
  funding: Not assessed in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the accessible abstract.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
