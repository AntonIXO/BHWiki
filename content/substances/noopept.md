---
slug: noopept
name: Noopept
subtitle: Source-linked research profile.
aliases:
  - Omberacetam
  - Ноопепт
formula: C17H22N2O4
molecularWeight: 318.4 g/mol
pubchemCid: 180496
smiles: CCOC(=O)CNC(=O)C1CCCN1C(=O)CC2=CC=CC=C2
category: Nootropic
tags:
  - nootropic-research
accent: "#a9b993"
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: Human half-life not established
  low: null
  high: null
  context: Human PK evidence is too sparse for a validated elimination estimate.
  sourceId: boyko-2004-pk
  observationId: noopept-pk-1
kinetics:
  onset: Not established
  peak: Current label gives rapid absorption but underlying study data are not transparently exposed
  duration: Not established
  bioavailability: Not established from eligible direct human PK
  metabolism: Label lists metabolites; direct human plasma study did not detect them
  sourceId: boyko-2004-pk
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
x-order: 237
---

## Summary

Noopept (omberacetam; GVS-111) is a registered 10 mg Russian tablet with a small, mostly Russian human literature. Short studies report cognitive or symptom changes in vascular/post-traumatic impairment, but placebo control, masking, overlap and disclosure are often weak; healthy-user enhancement is not established. [dr-noopept-s5][molekul-link-175]

## Description

The registered product is distinct from online powders, sprays and supplement products. Current instructions describe 10 mg tablets, a 20 mg/day starting regimen and up to 30 mg/day under medical advice; these label instructions do not establish broad efficacy. [dr-noopept-s5][russia-label-2024]

## Evidence note

No compound-specific ClinicalTrials.gov study or systematic review was located under the searched aliases at the cutoff. Human PK is sparse and the human publication did not detect metabolites in plasma; common online PK figures should remain unverified. [boyko-2004-pk][dr-noopept-link-3]

## Doses

```yaml
- label: Registered product instruction
  amount: 10 mg per tablet; 20 mg/day starting regimen, up to 30 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Noopept
  formulation: Registered oral 10 mg tablet
  route: Oral
  frequency: 10 mg morning and 10 mg daytime; up to three 10 mg doses by medical advice
  duration: Course duration not established in the current report
  population: Adults covered by Russian product information
  purpose: Approved-label context
  sourceCategory: approved-label
  note: Do not generalize to powders, sprays, salts or online capsules.
  sourceId: russia-label-2024
- label: Vascular cognitive impairment study
  amount: 10 mg twice daily
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Noopept/omberacetam
  formulation: Study formulation
  route: Oral
  frequency: Twice daily
  duration: 45 days
  population: 150 adults with non-demented vascular cognitive impairment
  purpose: Clinical research exposure
  sourceCategory: research
  note: Active comparators and OTISIFARM sponsorship limit causal interpretation.
  sourceId: dr-noopept-s9
- label: Neznamov/Teleshova comparative program
  amount: 20 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Noopept
  formulation: Study tablets
  route: Oral
  frequency: Not established
  duration: About 8 weeks
  population: Patients with mild cognitive impairment in vascular/traumatic organic brain disease
  purpose: Comparative cognitive research
  sourceCategory: research
  note: 2008 Russian and 2009 English publications may overlap and are not independent replications.
  sourceId: molekul-link-175
- label: Post-stroke open study
  amount: 20 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Noopept
  formulation: Study formulation
  route: Oral
  frequency: Not established
  duration: About 2 months in the abstract
  population: 60 patients after stroke
  purpose: Open clinical research
  sourceCategory: research
  note: The abstract is internally inconsistent about treatment duration.
  sourceId: amelin-2011
```
## Pharmacokinetics

```yaml
- id: noopept-pk-1
  analyte: Noopept (omberacetam)
  route: Oral
  formulation: Registered 10 mg tablet
  population: Human and animal PK report; human concentration-time detail limited
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The direct human PK paper reports interspecies differences and no detectable metabolites in human plasma but does not provide enough modern data to establish human Cmax, AUC, clearance or a validated half-life.
  sourceId: boyko-2004-pk
  modelEligible: false
```

## Modifiers

```yaml
- label: Product formulation
  effect: Evidence is formulation-specific
  detail: Registered 10 mg tablets are not interchangeable with unapproved powders, intranasal products or marketed salts.
  sourceId: dr-noopept-s5
  observationId: noopept-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: noopept-cognitive-symptoms
  name: Cognitive symptoms
  direction: Variable
  evidence: Human research
  description: Small clinical studies report improvements in cognitive or neurotic symptoms, but active comparators and open designs limit causal interpretation.
  sourceId: molekul-link-175
  population: Patients with vascular/post-traumatic impairment
  exposure: 10–20 mg/day
  conceptId: alertness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: noopept-sleep-disturbance-and-irritability
  name: Sleep disturbance and irritability
  direction: Variable
  evidence: Human research
  description: The development program reports sleep disturbance, irritability and blood-pressure increases; rare-event risk is not quantified.
  sourceId: russia-label-2024
  population: Clinical users
  exposure: Registered product
  conceptId: drowsiness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: noopept-moca-in-vascular-cognitive-impairment
  name: MoCA in vascular cognitive impairment
  direction: Increased
  evidence: Human research
  description: A 150-person active-comparator study reported MoCA improvement during treatment; the 4.5-month change from baseline was not conventionally significant.
  sourceId: dr-noopept-s9
  population: 150 adults with non-demented vascular cognitive impairment
  exposure: 10 mg twice daily for 45 days
  conceptId: cognitive-task-performance
  instrument: MoCA
  magnitude: Baseline-to-treatment +3.5; later p=0.061
  reportType: measured-assessment
  conflictingSourceIds: []
- id: noopept-post-stroke-cognitive-measures
  name: Post-stroke cognitive measures
  direction: Increased
  evidence: Human research
  description: An open prospective study reported improved MMSE and verbal-association measures after treatment, but allocation and comparator details are limited.
  sourceId: amelin-2011
  population: 60 patients after stroke
  exposure: 20 mg/day
  conceptId: cognitive-task-performance
  instrument: MMSE and verbal association
  magnitude: Direction reported; effect size not established
  reportType: measured-assessment
  conflictingSourceIds: []
- id: noopept-healthy-enhancement
  name: Healthy enhancement
  direction: Variable
  evidence: Human research
  description: No eligible evidence establishes reliable memory, focus, IQ or productivity enhancement in healthy users.
  sourceId: dr-noopept-s11
  population: Healthy volunteers or general users
  exposure: No validated regimen
  conceptId: cognitive-task-performance
  instrument: Evidence-gap assessment
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Preclinical neurotrophic hypotheses
  description: NGF/BDNF, receptor and metabolite hypotheses are preclinical or label-derived and should not be treated as demonstrated human mechanisms of benefit.
  sourceId: russia-label-2024
```

## Cautions

```yaml
- title: Label safety limits
  description: Current instructions list allergic reactions, possible blood-pressure increases, severe liver/kidney contraindications and pregnancy/breastfeeding contraindications.
  sourceId: russia-label-2024
- title: Unapproved-market quality
  description: Analytical surveillance found omberacetam in cognitive-enhancement supplements with inaccurate declared amounts and occasional undeclared substances.
  sourceId: dr-noopept-s22
- title: Dependence evidence gap
  description: A label statement that withdrawal was not observed is not equivalent to a dedicated abuse-liability or controlled-withdrawal study.
  sourceId: russia-label-2024
```

## Claims

```yaml
- id: noopept-claim-1
  assertion: Noopept reliably improves memory or focus in healthy users.
  relation: evidence-boundary
  participants:
    - entityId: substance:noopept
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: reported-context
  context: The retrieved human evidence concerns clinical populations and does not establish healthy-user enhancement.
  sourceIds:
    - molekul-link-175
    - dr-noopept-s9
    - dr-noopept-s11
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Open, small or active-comparator studies and absent modern placebo trials limit inference.
- id: noopept-claim-2
  assertion: Current online Noopept products are equivalent to registered tablets.
  relation: evidence-boundary
  participants:
    - entityId: substance:noopept
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: reported-context
  context: Market-surveillance studies found inaccurate quantities and undeclared substances.
  sourceIds:
    - dr-noopept-s16
    - dr-noopept-s22
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Product identity, purity and dose must be verified separately.
```

## Interactions

```yaml
- id: noopept-ethanol
  name: Ethanol
  otherSlug: null
  summary: Product information states interactions are not established; this is not evidence that co-use is safe.
  sourceId: russia-label-2024
  context: Label uncertainty
  conflictingSourceIds: []
- id: noopept-antihypertensives
  name: Antihypertensive medicines
  otherSlug: null
  summary: No quantitative human DDI study was identified; possible blood-pressure effects require clinical context.
  sourceId: russia-label-2024
  context: Evidence gap
  conflictingSourceIds: []
- id: noopept-psychostimulants
  name: Psychostimulants
  otherSlug: null
  summary: The product information does not establish a quantitative interaction study.
  sourceId: russia-label-2024
  context: Evidence gap
  conflictingSourceIds: []
```

## Experience links

```yaml
- title: Noopept on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Noopept
  publisher: PsychonautWiki
```

## References

```yaml
- id: molekul-profile
  title: "Noopept: Molekul research profile"
  authors: Molekul
  year: 2026
  url: https://molekul.io/compounds/noopept
  kind: Research atlas · accessed 2026
  insight: Provenance of the imported name, working classification and source trail.
  limitation: A secondary discovery resource. This import does not independently verify its findings or count its links as independent studies.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this import.
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s5
  title: Noopept current registration record
  authors: / GRLS — Noopept current registration record. Ministry of Health of the Russian Federation / GRLS/PharmPortal, current record; registration ЛП-N(004920)-(РГ-RU), 2024.
  year: 2024
  url: https://grls.pharm-portal.ru/grls/6e347719-a5b5-427e-825c-d0a1308382e3
  kind: Research source
  insight: Source R1 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not applicable to administrative registration. Sponsorship: not a clinical study; commercial authorization holder OTISIFARM. COI: not applicable to regulator record. Conflict status: authoritative administrative source for registration/product identity; does not independently establish efficacy."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "not applicable to regulator record. Conflict status: authoritative administrative source for registration/product identity; does not independently establish efficacy."
  conflictOfInterestStatus: not-assessed
- id: molekul-link-175
  title: Comparative studies of Noopept and piracetam in the treatment of patients with mild cognitive disorders in organic brain diseases of vascular and traumatic origin
  authors: G. G. Neznamov and E. S. Teleshova
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19234797/
  kind: Human randomized active-comparator study
  insight: Source R2 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported in accessible bibliographic record. Conflict status: unknown disclosure status."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported in accessible bibliographic record. Conflict status: unknown disclosure status."
  conflictOfInterestStatus: not-assessed
- id: molekul-link-174
  title: "[A comparative study of noopept and piracetam in the treatment of mild and moderate cognitive impairment in patients with organic brain diseases of vascular and traumatic origin]."
  authors: Authors listed in returned report
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18697252/
  kind: PubMed-indexed study
  insight: Source R3 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown; Russian original/overlapping publication, not an independent replication."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown; Russian original/overlapping publication, not an independent replication."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s9
  title: Possibilities nootropic drugs in non-demented patients with vascular cognitive disorders.
  authors: Authors listed in returned report
  year: 2022
  url: https://nnp.ima-press.net/nnp/article/view/1784?locale=en_US
  kind: Research source
  insight: Source R4 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship: explicitly sponsored by OTISIFARM. COI: article states conflict did not affect results, not no conflict. Conflict status: declared commercial sponsorship/conflict."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "article states conflict did not affect results, not no conflict. Conflict status: declared commercial sponsorship/conflict."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s11
  title: "[Meteoadaptogenic properties of peptide drugs in healthy volunteers]."
  authors: Authors listed in returned report
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/18318195/
  kind: PubMed-indexed study
  insight: Source R5 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-r12-12
  title: "[The influence of self-massage combined with drug Noopept on the professional performance of teachers older]."
  authors: Authors listed in returned report
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30877834/
  kind: PubMed-indexed study
  insight: Source R6 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: amelin-2011
  title: "[Noopept in the treatment of mild cognitive impairment in patients with stroke]."
  authors: Authors listed in returned report
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22500312/
  kind: PubMed-indexed study
  insight: Source R7 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: molekul-link-177
  title: "[Clinical and electroencephalographic characteristic of noopept in patients with mild cognitive impairment of posttraumatic and vascular origin]."
  authors: Authors listed in returned report
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/19008801/
  kind: PubMed-indexed study
  insight: Source R8 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: boyko-2004-pk
  title: "[Interspecies differences of noopept pharmacokinetics]."
  authors: Authors listed in returned report
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15079908/
  kind: PubMed-indexed study
  insight: Source R9 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship: unknown/not reported. COI: no formal disclosure in PubMed record; developer-investigator proximity noted. Conflict status: formal disclosure unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "no formal disclosure in PubMed record; developer-investigator proximity noted. Conflict status: formal disclosure unknown."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s16
  title: "The Occurrence of Illicit Smart Drugs or Nootropics in Europe and Australia and Their Associated Dangers: Results from a Market Surveillance Study by 12 Official Medicines Control Laboratories."
  authors: Authors listed in returned report
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40558871/
  kind: PubMed-indexed study
  insight: Source R10 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "no external funding. Sponsorship: official medicines-control-laboratory surveillance. COI: institutional employment disclosed for one author; no relevant commercial sponsorship identified. Conflict status: institutional employment disclosed."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "institutional employment disclosed for one author; no relevant commercial sponsorship identified. Conflict status: institutional employment disclosed."
  conflictOfInterestStatus: not-assessed
- id: russia-label-2024
  title: current instruction for use
  authors: "on for use. OTISIFARM / Noopept product information, registration ЛП-N(004920)-(РГ-RU), current registration dated 2024. URL:"
  year: 2024
  url: https://noopept.ru/instruction/
  kind: Research source
  insight: Source R11 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not applicable as a trial. Sponsorship: manufacturer/marketing-holder source. COI: intrinsic commercial interest. Conflict status: commercially conflicted for efficacy claims; appropriate for formulation, labeled dose, contraindications, adverse reactions, and regulatory instructions."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "intrinsic commercial interest. Conflict status: commercially conflicted for efficacy claims; appropriate for formulation, labeled dose, contraindications, adverse reactions, and regulatory instructions."
  conflictOfInterestStatus: not-assessed
- id: noopept-pmc4837574
  title: Noopept source record indexed in PubMed Central
  authors: Metadata not assessed in the imported source trail
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4837574/
  kind: Source discovery link
  insight: The imported Molekul profile links this source; the link is retained for traceability.
  limitation: The original article was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid18383733
  title: Noopept source record indexed in PubMed
  authors: Metadata not assessed in the imported source trail
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18383733/
  kind: Source discovery link
  insight: The imported Molekul profile links this PubMed record; the link is retained for traceability.
  limitation: The original article was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid7793100
  title: PubMed PMID 7793100 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/7793100/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid23593416
  title: PubMed PMID 23593416 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/23593416/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this source record.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-acs-envhealth-5c00818
  title: ACS source record captured from the Molekul profile
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubs.acs.org/doi/10.1021/envhealth.5c00818
  kind: Source discovery link
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this source record.
  limitation: The original source was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmc10558480
  title: PubMed Central source record captured from the Molekul profile
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10558480/
  kind: Source discovery link
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this source record.
  limitation: The original article was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-r12
  title: "[The influence of self-massage combined with drug Noopept on the professional performance of teachers older]."
  authors: Authors listed in returned report
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30877834/
  kind: PubMed-indexed study
  insight: Source R12 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: molekul-link-176
  title: "[Efficacy of noopept in discirculatory encephalopathy]."
  authors: Authors listed in returned report
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19938275/
  kind: PubMed-indexed study
  insight: Source R13 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: mordyk-2009
  title: "[Prevention of neuro- and cardiotoxic side effects of tuberculosis chemotherapy with noopept]."
  authors: Authors listed in returned report
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19565831/
  kind: PubMed-indexed study
  insight: Source R14 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s21
  title: "[The using of noopept in treatment of neurasthenia]."
  authors: Authors listed in returned report
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/19253467/
  kind: PubMed-indexed study
  insight: Source R15 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship/COI: unknown/not reported. Conflict status: unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not reported. Conflict status: unknown."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s22
  title: Five Unapproved Drugs Found in Cognitive Enhancement Supplements.
  authors: Authors listed in returned report
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34484905/
  kind: PubMed-indexed study
  insight: Source R16 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "no targeted funding reported. Sponsorship: no Noopept manufacturer/product-company sponsorship reported. COI: non-Noopept interests disclosed. Conflict status: disclosed non-Noopept interests; no identified Noopept commercial sponsorship."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "non-Noopept interests disclosed. Conflict status: disclosed non-Noopept interests; no identified Noopept commercial sponsorship."
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-link-3
  title: ClinicalTrials.gov Noopept/omberacetam/GVS-111 searches, searched October 10, 2026
  authors: "URLs:"
  year: 2026
  url: https://clinicaltrials.gov/search?intr=Noopept
  kind: Regulatory or registry source
  insight: Source R17 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: "sponsorship: not applicable; no matching study records returned. Conflict status: registry search source."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-noopept-s4
  title: PubMed systematic-review/meta-analysis search, searched through October 10, 2026
  authors: "URL:"
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/?term=%28noopept+OR+omberacetam+OR+GVS-111%29+AND+%28systematic+review%5BPublication+Type%5D+OR+meta-analysis%5BPublication+Type%5D%29
  kind: PubMed-indexed study
  insight: Source R18 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsorship: not applicable; zero compound-specific records located. Conflict status: bibliographic search source."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: molekul-ekf-744
  title: ekf.folium.ru document 744
  authors: Metadata not independently assessed
  year: 2026
  url: https://ekf.folium.ru/index.php/ekf/article/view/744
  kind: Source discovery link
  insight: The imported Molekul profile source trail is retained for traceability.
  limitation: The link was not independently appraised and does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-ekf-964
  title: ekf.folium.ru document 125 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://ekf.folium.ru/index.php/ekf/article/download/964/918
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-ecovector-710758
  title: journals.eco-vector.com document 126 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://journals.eco-vector.com/1682-7392/article/view/710758
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid19240853
  title: PubMed PMID 19240853 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/19240853/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid11177296
  title: PubMed PMID 11177296 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/11177296/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid11548439
  title: PubMed PMID 11548439 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/11548439/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: noopept-pmid9606516
  title: PubMed PMID 9606516 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/9606516/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: Russia
  activity: Registered Noopept/omberacetam 10 mg tablet
  status: Current GRLS/PharmPortal and manufacturer instructions identify a registered prescription product held by OTISIFARM.
  sourceUrl: https://grls.pharm-portal.ru/grls/6e347719-a5b5-427e-825c-d0a1308382e3
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Unapproved cognitive-enhancement supplement market
  status: Analytical studies treat omberacetam as an unapproved drug when found in marketed supplements; this article makes no blanket possession-law claim.
  sourceUrl: https://pubmed.ncbi.nlm.nih.gov/34484905/
  asOf: 2026-10-11
```
