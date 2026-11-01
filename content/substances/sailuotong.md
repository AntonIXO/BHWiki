---
slug: sailuotong
name: SaiLuoTong
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
  sourceId: reddit-pmid-24761653
  observationId: sailuotong-pk-24761653
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-pmid-24761653
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

SaiLuoTong has 2 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 2 retrieved PubMed records out of 2 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 2 PubMed records linked from this Reddit index entry; 1 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

PMC full-text retrieval for this page returned body text for 1/1 identified PMCID records; 0 returned no retrievable body or a tool error.

## Doses

```yaml
- label: 'PMID 24761653 study exposure: 60 mg'
  amount: 60 mg
  quantity: 60
  quantityMax: null
  unit: mg
  ingredient: SaiLuoTong
  formulation: Study formulation as stated in the abstract
  route: intragastric
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: An LC-MS/MS method was developed for the determination of 7 ginsenosides in rat plasma simultaneously.
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: After administration of SLT at 60 mg x kg(-1) dose, 7 ginsengosides were all absorbed into systematic circulation
  sourceId: reddit-pmid-24761653
```

## Pharmacokinetics

```yaml
- id: sailuotong-pk-24761653
  analyte: SaiLuoTong
  route: intragastric
  population: An LC-MS/MS method was developed for the determination of 7 ginsenosides in rat plasma simultaneously.
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 2.46
  high: 61.58
  unit: hours
  context: The quantitative and statistical analysis of gensenosides in plasma showed that protopanaxdiol saponins exhibited higher concentration and longer half life than protopanaxatriol saponins. The mean value of half life of ginsenosides Rg1, Re, Rb1, Rb2/b3, Rc and Rd were 15.26, 2.46, 18.41, 27.70, 21.86 and 61.58 h respectively.
  sourceId: reddit-pmid-24761653
  modelEligible: true
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
- id: reddit-sailuotong-episodic-memory-26762282
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: Treatment with SLT, compared to placebo, resulted in small improvements in working memory, a slight increase in auditory target (cf. nontarget) P3a amplitude, and a decrease in auditory N1 target (cf. nontarget) amplitude. There was no effect of SLT on EEG amplitude in delta, theta, alpha, or beta bands in both eyes open and eyes closed resting conditions, or on aortic and peripheral pulse pressure, and resting heartrate. Findings suggest that SLT has the potential to improve working memory performance in healthy adults; a larger sample size is needed to confirm this.
  sourceId: reddit-pmid-26762282
  population: Sixteen adults completed a computerised neuropsychological test battery (Compass), and had their electroencephalographic (EEG) activity and cardiovascular system function assessed
  exposure: Using a randomised, double-blind, placebo controlled crossover design, this pilot study assessed the effect of treatment for 1 week with SLT and placebo (1 week washout period) on neurocognitive and cardiovascular function in healthy adults. Sixteen adults completed a computerised neuropsychological test battery (Compass), and had their electroencephalographic (EEG) activity and cardiovascular system function assessed. Primary outcome measures were cognitive test scores and oddball task event-re
  instrument: EEG) activity and cardiovascular system function assessed
  magnitude: Treatment with SLT, compared to placebo, resulted in small improvements in working memory, a slight increase in auditory target (cf. nontarget) P3a amplitude, and a decrease in auditory N1 target (cf. nontarget) amplitude. There was no effect of SLT on EEG amplitude in delta, theta, alpha, or beta bands in both eyes op
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 24761653)
  description: Sailuotong (SLT) is a compound preparation composed of ginseng, ginkgo and saffron for the treatment of vascular dementia In order to identify its material foundation and provide evidence for therapeutic regimen, the pharmacokinetics and brain distribution of ginsenosides were investigated after intragastric administration of SLT.
  sourceId: reddit-pmid-24761653
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 24761653)
  description: Sailuotong (SLT) is a compound preparation composed of ginseng, ginkgo and saffron for the treatment of vascular dementia In order to identify its material foundation and provide evidence for therapeutic regimen, the pharmacokinetics and brain distribution of ginsenosides were investigated after intragastric administration of SLT.
  sourceId: reddit-pmid-24761653
```

## Claims

```yaml
- id: reddit-claim-sailuotong-26762282
  assertion: Treatment with SLT, compared to placebo, resulted in small improvements in working memory, a slight increase in auditory target (cf. nontarget) P3a amplitude, and a decrease in auditory N1 target (cf. nontarget) amplitude. There was no effect of SLT on EEG amplitude in delta, theta, alpha, or beta bands in both eyes open and eyes closed resting conditions, or on aortic and peripheral pulse pressure, and resting heartrate. Findings suggest that SLT has the potential to improve working memory performance in healthy adults; a larger sample size is needed to confirm this.
  relation: associated-with
  participants:
  - entityId: substance:sailuotong
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: PMID 26762282 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-26762282
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
- id: reddit-index-sailuotong
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-26762282
  title: 'The effect of Sailuotong (SLT) on neurocognitive and cardiovascular function in healthy adults: a randomised, double-blind, placebo controlled crossover pilot trial.'
  authors: Genevieve Z Steiner, Alan Yeung, Jian-Xun Liu, David A Camfield, Frances M de Blasio, Andrew Pipingas, Andrew B Scholey, Con Stough, Dennis H Chang
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26762282/
  kind: PubMed publication
  insight: Treatment with SLT, compared to placebo, resulted in small improvements in working memory, a slight increase in auditory target (cf. nontarget) P3a amplitude, and a decrease in auditory N1 target (cf. nontarget) amplitude. There was no effect of SLT on EEG amplitude in delta, theta, alpha, or beta bands in both eyes open and eyes closed resting conditions, or on aortic and peripheral pulse pressure, and resting heartrate. Findings suggest that SLT has the potential to improve working memory performance in healthy adults; a larger sample size is needed to confirm this.
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC4712609 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC4712609/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: '26762282'
  doi: 10.1186/s12906-016-0989-0
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-fb89577f402a
  title: 'Sailuotong (SLT), a standardised Chinese herbal medicine formula, enhances working memory in healthy adults: a pilot study (2015)'
  authors: Not established
  year: 2015
  url: https://www.sciencedirect.com/science/article/pii/S2213422015003467
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24761653
  title: '[Pharmacokinetics and brain distribution of ginsenosides after administration of sailuotong].'
  authors: Ying Zhang, Li Lin, Guang-Yu Liu, Jian-Xun Liu, Tao Li
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24761653/
  kind: PubMed publication
  insight: While ginsenosides of mostly protopanaxdiol saponins might protect brain mainly depending on peripheral efficacy in virtue of their long residence in blood, by which higher concentration could be reached after multiple dosing.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '24761653'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
