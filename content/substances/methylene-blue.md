---
slug: methylene-blue
name: Methylene Blue
subtitle: Methylene blue is a redox-active compound.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - episodic-memory
  - cognitive-performance
  - anxiety-symptom-severity
  - depression-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-27351678
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-27351678
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

Methylene blue is a redox-active compound. Research explores its effects on cellular energy processes and memory.

## Description

The linked sources include controlled human trials, a case report, cell/animal work, and two PMC full texts; dose, population, and evidence level are retained per record.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Bipolar-disorder crossover trial
  amount: 15 mg low dose or 195 mg active dose daily
  quantity: 15
  quantityMax: 195
  unit: mg/day
  ingredient: Methylene blue
  formulation: Oral methylene blue adjunct to lamotrigine
  route: oral
  frequency: daily
  duration: 6 months
  population: 37 participants with bipolar disorder
  purpose: Residual depression, anxiety, and cognition
  sourceCategory: research
  note: The 15 mg arm was termed placebo; study was adjunctive and disease-specific.
  sourceId: pubmed-27284082
- label: Post-session fear-extinction study
  amount: 260 mg once immediately after six extinction trials
  quantity: 260
  quantityMax: null
  unit: mg
  ingredient: Methylene blue
  formulation: USP methylene blue
  route: oral
  frequency: single post-session dose
  duration: follow-up at 1 month
  population: 42 adults with marked claustrophobic fear (23 active, 19 placebo)
  purpose: Retention of fear extinction and contextual memory
  sourceCategory: research
  note: Effect depended on the degree of fear reduction achieved during training.
  sourceId: publication-link-ac82a23ce9d3
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
- id: methylene-blue-memory-27351678
  conceptId: episodic-memory
  name: Short-term memory retrieval
  direction: Increased
  evidence: Human research
  description: Low-dose methylene blue increased correct responses by 7% on a delayed match-to-sample task and increased task-related fMRI responses in healthy adults.
  sourceId: pubmed-27351678
  population: 26 healthy adults aged 22–62
  exposure: Single low oral dose; amount not stated in abstract
  instrument: Delayed match-to-sample and fMRI
  magnitude: 7% more correct responses; P=0.01
  reportType: measured-assessment
- id: methylene-blue-connectivity-26961091
  conceptId: cognitive-performance
  name: Functional brain connectivity
  direction: Variable
  evidence: Human research
  description: A single low oral dose changed task-related cerebral blood flow and strengthened resting-state connectivity linking perception and memory networks.
  sourceId: pubmed-26961091
  population: Healthy adults
  exposure: Single low oral dose
  instrument: Task-based and resting-state fMRI
  magnitude: Network-level changes; behavioral benefit not established
  reportType: measured-assessment
- id: methylene-blue-fear-25018057
  conceptId: anxiety-symptom-severity
  name: Fear-extinction retention
  direction: Variable
  evidence: Human research
  description: Post-session 260 mg methylene blue reduced one-month fear renewal when posttraining fear was low, but tended to worsen follow-up when posttraining fear remained moderate or high; contextual memory was enhanced independently of fear.
  sourceId: publication-link-ac82a23ce9d3
  population: 42 adults with claustrophobic fear
  exposure: 260 mg immediately after six 5-minute extinction trials
  instrument: Fear renewal and contextual-memory tests
  magnitude: Conditional direction by posttraining fear
  reportType: measured-assessment
- id: methylene-blue-bipolar-27284082
  conceptId: depression-severity
  name: Residual bipolar depression
  direction: Decreased
  evidence: Human research
  description: In a randomized crossover trial adjunctive to lamotrigine, 195 mg/day improved depression scores versus the 15 mg low-dose arm; anxiety also improved, while cognitive effects were not significant.
  sourceId: pubmed-27284082
  population: 37 participants with bipolar disorder
  exposure: 195 mg/day versus 15 mg/day for 6 months
  instrument: MADRS and Hamilton Depression/Anxiety scales
  magnitude: MADRS P=0.02; HAM-D P=0.05; anxiety P=0.02
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Monoamine oxidase and NO-cGMP pathways
  description: Methylene blue and its metabolites inhibit monoamine oxidase and engage NO-cGMP signaling; the cited antidepressant-like findings were mainly rodent and in-vitro evidence.
  sourceId: pubmed-25445435
- title: Mitochondrial redox cycling
  description: Low-dose methylene blue can enhance mitochondrial electron transport and redox cycling in neuronal models; PMC4428125 reports neuroprotection with near-infrared light in preclinical systems.
  sourceId: publication-link-1fe116a0f4d3
```

## Cautions

```yaml
- title: Serotonergic interaction
  description: Methylene blue inhibits MAO-A and has caused serotonin excess syndrome when combined with SSRIs; this interaction can be life-threatening.
  sourceId: pubmed-25611876
- title: Evidence and toxicity limits
  description: Ethylthioninium chloride was more toxic to cultured cells than methylene blue in the cited study; progeria rescue and photoinactivation findings are preclinical.
  sourceId: pubmed-25445435
```

## Claims

```yaml
- id: methylene-blue-claim-memory-27351678
  assertion: A single low oral dose of methylene blue increased fMRI task responses and delayed-memory retrieval accuracy by 7% in 26 healthy adults.
  relation: supported-by
  participants:
    - entityId: substance:methylene-blue
      role: intervention
    - entityId: tag:episodic-memory
      role: outcome
  context: Randomized double-blind placebo-controlled fMRI study.
  sourceIds:
    - pubmed-27351678
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Low-dose amount and longer-term effects were not established in the abstract.
- id: methylene-blue-claim-bipolar-27284082
  assertion: Adjunctive 195 mg/day methylene blue improved residual depression and anxiety symptoms versus a 15 mg low-dose arm in bipolar disorder.
  relation: supported-by
  participants:
    - entityId: substance:methylene-blue
      role: intervention
    - entityId: tag:depression-severity
      role: outcome
  context: Six-month randomized crossover trial with lamotrigine background treatment.
  sourceIds:
    - pubmed-27284082
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Disease-specific adjunctive trial; mild transient side effects were reported.
- id: methylene-blue-claim-fear-25018057
  assertion: Post-session 260 mg methylene blue had conditional effects on one-month fear-extinction retention and enhanced contextual memory in adults with claustrophobia.
  relation: associated-with
  participants:
    - entityId: substance:methylene-blue
      role: intervention
    - entityId: tag:anxiety-symptom-severity
      role: outcome
  context: Double-blind randomized study; benefit followed successful extinction, whereas unsuccessful extinction could worsen follow-up fear.
  sourceIds:
    - publication-link-ac82a23ce9d3
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small exposure-therapy augmentation study; direction depended on posttraining fear.
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
- id: pubmed-27351678
  title: Multimodal Randomized Functional MR Imaging of the Effects of Methylene Blue in the Human Brain.
  authors: Pavel Rodriguez, Wei Zhou, Douglas W Barrett, Wilson Altmeyer, Juan E Gutierrez, Jinqi Li, Jack L Lancaster, Francisco Gonzalez-Lima, Timothy Q Duong
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27351678/
  kind: PubMed publication
  insight: Purpose To investigate the sustained-attention and memory-enhancing neural correlates of the oral administration of methylene blue in the healthy human brain.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "27351678"
  doi: 10.1148/radiol.2016152893
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-25611876
  title: "Serotonin syndrome after cardiopulmonary bypass: a case demonstrating the interaction between methylene blue and selective serotonin reuptake inhibitors."
  authors: Engy R Hanna, Jeffrey A Clark
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25611876/
  kind: PubMed publication
  insight: Methylene blue, a drug used to treat vasoplegia and methemoglobinemia, also inhibits monoamine oxidase-A.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "25611876"
  doi: 10.1213/XAA.0000000000000010
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-15168794
  title: Methylene blue photoinactivation of RNA viruses.
  authors: Robert A Floyd, J Edward Schneider, Dirk P Dittmer
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15168794/
  kind: PubMed publication
  insight: We present a review of the current status of the use of methylene blue (MB) photoinactivation of viruses starting with the first early observations up to its current use to inactivate HIV-1 in blood products.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "15168794"
  doi: 10.1016/j.antiviral.2003.11.004
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-27284082
  title: "Methylene blue treatment for residual symptoms of bipolar disorder: randomised crossover study."
  authors: Martin Alda, Margaret McKinnon, Ryan Blagdon, Julie Garnham, Susan MacLellan, Claire O'Donovan, Tomas Hajek, Cynthia Nair, Serdar Dursun, Glenda MacQueen
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27284082/
  kind: PubMed publication
  insight: "BACKGROUND: Residual symptoms and cognitive impairment are among important sources of disability in patients with bipolar disorder."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "27284082"
  doi: 10.1192/bjp.bp.115.173930
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-26961091
  title: Methylene blue modulates functional connectivity in the human brain.
  authors: Pavel Rodriguez, Amar P Singh, Kristen E Malloy, Wei Zhou, Douglas W Barrett, Crystal G Franklin, Wilson B Altmeyer, Juan E Gutierrez, Jinqi Li, Betty L Heyl, Jack L Lancaster, F Gonzalez-Lima, Timothy Q Duong
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/26961091/
  kind: PubMed publication
  insight: Methylene blue USP (MB) is a FDA-grandfathered drug used in clinics to treat methemoglobinemia, carbon monoxide poisoning and cyanide poisoning that has been shown to increase fMRI evoked blood oxygenation level dependent (BOLD) response in rodents.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26961091"
  doi: 10.1007/s11682-016-9541-6
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-26663466
  title: Methylene blue alleviates nuclear and mitochondrial abnormalities in progeria.
  authors: Zheng-Mei Xiong, Ji Young Choi, Kun Wang, Haoyue Zhang, Zeshan Tariq, Di Wu, Eunae Ko, Christina LaDana, Hiromi Sesaki, Kan Cao
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26663466/
  kind: PubMed publication
  insight: Hutchinson-Gilford progeria syndrome (HGPS), a fatal premature aging disease, is caused by a single-nucleotide mutation in the LMNA gene.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26663466"
  doi: 10.1111/acel.12434
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: publication-link-1fe116a0f4d3
  title: Protection against neurodegeneration with low-dose methylene blue and near-infrared light.
  authors: F Gonzalez-Lima, Allison Auchter
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26029050/
  kind: PubMed publication
  insight: Preclinical review describing mitochondrial respiration and low-dose methylene-blue neuroprotection.
  limitation: Full text retrieved from PMC; preclinical review, not a human efficacy study.
  pmid: "26029050"
  pmcid: PMC4428125
  doi: 10.3389/fncel.2015.00179
- id: publication-link-ac82a23ce9d3
  title: Effects of post-session administration of methylene blue on fear extinction and contextual memory in adults with claustrophobia.
  authors: Michael J Telch, Aleksandra K Bruchey, David Rosenfield, Adam R Cobb, Jasper Smits, Sandra Pahl, F Gonzalez-Lima
  year: 2014
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4467026/
  kind: PubMed Central full text
  insight: Randomized trial of 260 mg post-session methylene blue in 42 adults with claustrophobic fear; direction of fear-retention effect depended on posttraining fear.
  limitation: Full text retrieved from PMC; small exposure-therapy augmentation study with conditional effects.
  pmid: "25018057"
  pmcid: PMC4467026
  doi: 10.1176/appi.ajp.2014.13101407
- id: pubmed-25445435
  title: Azure B and a synthetic structural analogue of methylene blue, ethylthioninium chloride, present with antidepressant-like properties.
  authors: Anzelle Delport, Brian H Harvey, Anél Petzer, Jacobus P Petzer
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25445435/
  kind: PubMed publication
  insight: "AIMS: The phenothiazinium compound, methylene blue (MB), possesses diverse pharmacological actions and is attracting attention for the treatment of bipolar disorder and Alzheimer's disease."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "25445435"
  doi: 10.1016/j.lfs.2014.10.005
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Methylene_blue
  title: Wikipedia
```
