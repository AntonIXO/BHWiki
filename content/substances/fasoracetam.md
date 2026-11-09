---
slug: fasoracetam
name: Fasoracetam
subtitle: Racetam
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Racetam
tags:
  - adhd-symptoms
  - adverse-effects
  - adhd-symptom-severity
  - nootropic-research
  - glutamate
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43ec-73be-8d50-4d71f8f39bfd
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43ec-73be-8d50-4d71f8f39bfd
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
x-order: 1107
---

## Summary

Fasoracetam is an experimental compound studied for cognitive function and glutamate signalling. Human research includes adolescents with ADHD and variants in glutamate-receptor network genes.

## Description

Fasoracetam is described in the linked publication as a non-selective mGluR activator with additional GABA-B and cholinergic enhancing effects. The available human evidence is one small phase I study in genetically selected adolescents with ADHD; it should not be generalized to adults, unselected ADHD, or healthy users.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Single-dose PK cohorts
  amount: 50–800 mg
  quantity: 50
  quantityMax: 800
  unit: mg
  ingredient: Fasoracetam (NFC-1)
  formulation: NFC-1 capsules
  route: Oral
  frequency: Single dose
  duration: 24-hour PK study
  population: 30 adolescents aged 12–17 years with ADHD and mGluR-network variants
  purpose: Pharmacokinetic profiling and tolerability
  sourceCategory: research
  note: Five dose cohorts received 50, 100, 200, 400 or 800 mg.
  sourceId: pubmed-29339723
- label: Dose-escalation phase
  amount: 50–400 mg twice daily
  quantity: 50
  quantityMax: 400
  unit: mg BID
  ingredient: Fasoracetam (NFC-1)
  formulation: NFC-1 capsules
  route: Oral
  frequency: Twice daily
  duration: 4 active weeks after a 1-week placebo week
  population: 30 adolescents aged 12–17 years with ADHD and mGluR-network variants
  purpose: Exploratory ADHD symptom response
  sourceCategory: research
  note: Week 2 through week 5 used 50, 100, 200 and 400 mg BID, respectively.
  sourceId: pubmed-29339723
```

## Pharmacokinetics

```yaml
- id: fasoracetam-half-life-29339723
  analyte: Fasoracetam (NFC-1)
  route: Oral
  formulation: Single-dose NFC-1 capsules, 50–800 mg
  population: Adolescents aged 12–17 years with ADHD and mGluR-network variants
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Mean half-life across dose ranges was 4.82 h (range 4.06–6.99 h). The publication reports predominantly unchanged renal excretion and low levels of two major metabolites.
  sourceId: pubmed-29339723
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: fasoracetam-adhd-global-improvement
  conceptId: adhd-symptoms
  name: ADHD global severity and improvement
  direction: Increased
  evidence: Human research
  description: During dose escalation to 400 mg BID, mean CGI-I improved from 3.79 at baseline to 2.33 at week 5 and CGI-S from 4.83 to 3.86; the study was phase I, small and not fully blinded during active treatment.
  sourceId: pubmed-29339723
  population: 30 adolescents with ADHD and mGluR-network variants
  exposure: Fasoracetam 50–400 mg BID after placebo week
  instrument: Clinical Global Impressions scales
  magnitude: CGI-I 3.79 to 2.33; CGI-S 4.83 to 3.86; both P < 0.001
  reportType: measured-assessment
- id: fasoracetam-vanderbilt-tier1
  conceptId: adhd-symptoms
  name: Parent-rated ADHD symptoms in mGluR Tier 1 variants
  direction: Increased
  evidence: Human research
  description: Parent Vanderbilt scores significantly improved for participants with mGluR Tier 1 variants; this genotype-stratified finding was exploratory.
  sourceId: pubmed-29339723
  population: Adolescents with ADHD and mGluR Tier 1 variants
  exposure: Fasoracetam dose escalation
  instrument: Parent Vanderbilt scale
  magnitude: P < 0.035
  reportType: measured-assessment
- id: fasoracetam-adverse-events
  conceptId: adverse-effects
  name: Adverse-event incidence
  direction: Variable
  evidence: Human research
  description: The abstract reports no difference in adverse-event incidence between the placebo week and active-treatment weeks.
  sourceId: pubmed-29339723
  population: 30 adolescents with ADHD and mGluR-network variants
  exposure: Fasoracetam 50–400 mg BID
  instrument: Adverse-event reporting
  magnitude: Comparative incidence difference not provided
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: fasoracetam-adhd-29339723
  study:
    id: fasoracetam-29339723-trial
    design: Phase I single-site open-label dose escalation with a single-blind placebo week; genetic tier status double-blinded
    sampleSize: 30
    populationLabels:
      - Adolescents aged 12–17 years
      - ADHD
      - Disruptive mGluR-network gene variants
    comparator: One placebo week
    route: Oral
    formulation: NFC-1 (fasoracetam monohydrate) capsules
    durationDays: 35
    assessmentTime: Week 5
  reportType: measured-assessment
  conceptId: adhd-symptom-severity
  name: Clinical Global Impressions improvement
  direction: Increased
  evidence: Human research
  description: Mean CGI-I improved from 3.79 at baseline to 2.33 at week 5 (P < 0.001); improvement was greatest in Tier 1 and Tier 2 variant groups.
  sourceId: pubmed-29339723
  population: 30 adolescents with ADHD and mGluR-network variants
  exposure: Fasoracetam 50, 100, 200 and 400 mg BID during weeks 2–5
  instrument: Clinical Global Impressions-Improvement scale
  magnitude: Mean CGI-I 3.79 to 2.33; P < 0.001
```

## Mechanisms

```yaml
- title: Metabotropic glutamate receptor activation
  description: The publication describes NFC-1 as a non-selective glutamate receptor activator targeting the mGluR network, with additional GABA-B and cholinergic enhancing effects.
  sourceId: pubmed-29339723
- title: Genotype-stratified response hypothesis
  description: Exploratory response was strongest in participants with Tier 1/Tier 2 disruptive variants in mGluR-network genes; this is a treatment-selection hypothesis rather than proof of mechanism.
  sourceId: pubmed-29339723
```

## Cautions

```yaml
- title: Phase I and limited blinding
  description: This was a 30-participant, single-site phase I study with one placebo week and otherwise open-label active dose escalation; active-treatment symptom improvements may be affected by expectancy and time effects.
  sourceId: pubmed-29339723
- title: Genetically selected adolescent sample
  description: Participants were 12–17-year-old adolescents with disruptive mGluR-network variants, so findings cannot be generalized to adults, unselected ADHD or healthy users.
  sourceId: pubmed-29339723
- title: Safety duration
  description: The active treatment period lasted four weeks; the abstract reports no difference in adverse-event incidence versus placebo week but does not establish long-term safety.
  sourceId: pubmed-29339723
```

## Claims

```yaml
- id: fasoracetam-adhd-claim
  assertion: In a small phase I study of genetically selected adolescents with ADHD, fasoracetam dose escalation was associated with improved CGI scores.
  relation: associated-with
  participants:
    - entityId: substance:fasoracetam
      role: intervention
    - entityId: tag:adhd-symptoms
      role: reported endpoint
  context: Exploratory 5-week study with one placebo week and active-treatment dose escalation.
  sourceIds:
    - pubmed-29339723
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small, genetically selected adolescent cohort and limited blinding; replication is required.
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
- id: optihealth-substance-019fe218-43ec-73be-8d50-4d71f8f39bfd
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43ec-73be-8d50-4d71f8f39bfd
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-29339723
  title: Fasoracetam in adolescents with ADHD and glutamatergic gene network variants disrupting mGluR neurotransmitter signaling
  authors: Josephine Elia, Grace Ungal, Charlly Kao, et al.
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29339723/
  kind: PubMed phase I clinical study with PMC full text
  insight: In 30 adolescents with ADHD and mGluR-network variants, single-dose PK cohorts received 50–800 mg and active dosing escalated to 400 mg BID; mean half-life was 4.82 h and CGI scores improved during the short active phase.
  limitation: Small single-site phase I study with one placebo week and limited blinding; genetically selected adolescent sample and short follow-up limit generalization. Full text available at PMCID PMC5770454.
  pmid: "29339723"
  pmcid: PMC5770454
  doi: 10.1038/s41467-017-02244-2
  funding: NIH intramural and non-US government support reported in PubMed metadata; detailed disclosures require full-text review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not fully assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: publication-link-4b64211aa323
  title: Fine-tuning mGluRs (2012)
  authors: Not established
  year: 2012
  url: https://www.nature.com/scibx/journal/v5/n1/full/scibx.2012.3.html
  kind: research index secondary link
  insight: The research index links a secondary news item about mGluR-targeting development; it was not independently verified as a fasoracetam clinical source.
  limitation: Secondary source; no PubMed abstract or full-text evidence was imported.
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Fasoracetam
  title: Wikipedia
```
