---
slug: modafinil
name: Modafinil
subtitle: Wakefulness and its limits.
aliases:
  - Provigil
formula: C15H15NO2S
molecularWeight: 273.4 g/mol
pubchemCid: 4236
smiles: C1=CC=C(C=C1)C(C2=CC=CC=C2)S(=O)CC(=O)N
category: Wake-promoting medicine
tags:
  - stimulant
  - dopamine-transporter
  - dopamine
  - wakefulness
  - wake-maintenance
accent: "#bea17c"
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: About 15 hours
  low: 15
  high: 15
  context: Label and human PK evidence; racemate contains a shorter-lived S-enantiomer.
  sourceId: dr-modafinil-link-1
  observationId: modafinil-pk-1
kinetics:
  onset: Tmax about 2–4 hours
  peak: Food can delay Tmax by about one hour
  duration: Effective half-life about 15 hours
  bioavailability: Overall exposure is not materially altered by food
  metabolism: About 90% eliminated metabolically; CYP3A4/5 induction and CYP2C19 inhibition
  sourceId: dr-modafinil-link-1
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
  - references
  - legal
  - interactions
  - experienceLinks
x-order: 6
---

## Summary

Modafinil is a prescription wakefulness-promoting racemate indicated in the U.S. for narcolepsy, residual OSA sleepiness and diagnosed shift-work disorder. Patient evidence is stronger than healthy-user cognition evidence; severe sleep-loss studies show acute restoration, while rested healthy effects are small and domain-specific. [dr-modafinil-link-1][dr-modafinil-s2]

## Description

The U.S. label uses 200 mg once daily for narcolepsy and OSA or about one hour before a diagnosed night shift; it treats residual sleepiness, not airway obstruction or ordinary fatigue. [dr-modafinil-link-1]

## Evidence note

Evidence supports wakefulness in diagnosed sleep disorders and acute severe sleep deprivation. General cognitive enhancement, long-term tolerance, pregnancy safety and nonmedical use remain uncertain; serious rash, psychiatric and cardiovascular warnings are established label risks. [dr-modafinil-link-1][dr-modafinil-s8]

## Doses

```yaml
- label: Narcolepsy label
  amount: 200 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Immediate-release tablet
  route: Oral
  frequency: Once each morning
  duration: Ongoing clinical use
  population: Adults with narcolepsy
  purpose: Approved-label wakefulness
  sourceCategory: approved-label
  note: 400 mg/day tolerated in trials but no consistent extra benefit over 200 mg.
  sourceId: dr-modafinil-link-1
- label: OSA residual sleepiness label
  amount: 200 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Immediate-release tablet
  route: Oral
  frequency: Once each morning
  duration: Ongoing clinical use with primary OSA treatment
  population: Adults with residual sleepiness despite CPAP or other treatment
  purpose: Approved-label wakefulness
  sourceCategory: approved-label
  note: Does not treat airway obstruction; adequate primary therapy remains necessary.
  sourceId: dr-modafinil-link-1
- label: Shift-work disorder label
  amount: 200 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Immediate-release tablet
  route: Oral
  frequency: About one hour before the work shift
  duration: 12-week pivotal trial
  population: Adults with diagnosed SWD
  purpose: Wakefulness research
  sourceCategory: research
  note: Applies to diagnosed SWD rather than ordinary shift-work fatigue.
  sourceId: dr-modafinil-link-1
- label: Severe sleep-loss experiment
  amount: 200 or 400 mg single dose
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Study tablet
  route: Oral
  frequency: Single exposure after prolonged wakefulness
  duration: Acute sleep-deprivation paradigm
  population: Healthy adults awake about 41.5 hours
  purpose: Countermeasure research
  sourceCategory: research
  note: Comparable overall with 600 mg caffeine; not evidence for replacing sleep.
  sourceId: dr-modafinil-s8
```
## Pharmacokinetics

```yaml
- id: modafinil-pk-1
  analyte: Modafinil (R/S racemate)
  route: Oral
  formulation: Immediate-release tablet
  population: Healthy adults and labeled patient populations
  endpoint: elimination-half-life
  statistic: approximate
  value: 15
  low: null
  high: null
  unit: hours
  context: Effective multiple-dose half-life is approximately 15 hours; R-modafinil persists about three times longer than S-modafinil. Food delays Tmax by about one hour without materially changing overall exposure.
  sourceId: dr-modafinil-link-1
  modelEligible: false
```

## Modifiers

```yaml
- label: Hepatic impairment
  effect: Exposure increases
  detail: Advanced cirrhosis lowers clearance by about 60% and approximately doubles steady-state concentration; the label recommends half dosing in severe hepatic impairment.
  sourceId: dr-modafinil-link-1
  observationId: modafinil-pk-1
  factorType: other
  direction: slower
- label: CYP3A4/5 induction
  effect: Co-medication exposure can fall
  detail: The label documents lower exposure to steroidal contraceptives, cyclosporine, midazolam and triazolam.
  sourceId: dr-modafinil-link-1
  observationId: modafinil-pk-1
  factorType: enzyme
  direction: variable
```

## Effects

```yaml
- id: modafinil-wakefulness
  name: Wakefulness
  direction: Increased
  evidence: Human research
  description: Modafinil improves objective and subjective wakefulness in narcolepsy, OSA residual sleepiness and diagnosed SWD; it does not normalize all performance under sleep loss.
  sourceId: dr-modafinil-link-1
  population: Patients with excessive sleepiness
  exposure: 200–400 mg/day
  conceptId: alertness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-rested-healthy-cognition
  name: Rested healthy cognition
  direction: Variable
  evidence: Human research
  description: Healthy-volunteer trials show selective small benefits mixed with many null outcomes and occasional slowing; this is not a general cognitive-enhancement result.
  sourceId: dr-modafinil-s2
  population: Healthy rested adults
  exposure: Acute 100–200 mg studies
  conceptId: alertness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: modafinil-narcolepsy-maintenance-of-wakefulness
  name: Narcolepsy maintenance of wakefulness
  direction: Increased
  evidence: Human research
  description: Pivotal trials improved MWT and clinician global ratings; 400 mg did not consistently outperform 200 mg.
  sourceId: dr-modafinil-link-1
  population: Adults with narcolepsy
  exposure: 200 or 400 mg/day for 9 weeks
  conceptId: wake-maintenance
  instrument: MWT and CGI-C
  magnitude: MWT about +2.3 minutes versus placebo
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-osa-residual-sleepiness
  name: OSA residual sleepiness
  direction: Increased
  evidence: Human research
  description: Pooled RCTs improved MWT and ESS in patients already receiving primary OSA treatment; meta-analysis estimates are class-pooled.
  sourceId: dr-modafinil-s11
  population: Adults with OSA and residual sleepiness
  exposure: 200–400 mg/day
  conceptId: cognitive-task-performance
  instrument: MWT and ESS
  magnitude: MWT about +3 minutes pooled
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-swd-sleepiness-and-lapses
  name: SWD sleepiness and lapses
  direction: Increased
  evidence: Human research
  description: A diagnosed-SWD trial improved MSLT, PVT lapses and CGI-C, but residual sleepiness and impaired performance remained.
  sourceId: czeisler2005
  population: Night workers with diagnosed SWD
  exposure: 200 mg before shift for 12 weeks
  conceptId: cognitive-task-performance
  instrument: MSLT, PVT and CGI-C
  magnitude: CGI-C 74% vs 36%
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-healthy-severe-sleep-loss-performance
  name: Healthy severe sleep-loss performance
  direction: Increased
  evidence: Human research
  description: After 41.5 hours awake, 200 and 400 mg improved alertness/performance versus placebo; doses did not differ significantly and were broadly comparable with caffeine.
  sourceId: dr-modafinil-s8
  population: Healthy adults under enforced sleep deprivation
  exposure: Single 200–400 mg dose
  conceptId: cognitive-task-performance
  instrument: Performance battery
  magnitude: Acute paradigm only
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Wake-promoting pharmacology
  conceptId: dopamine-transporter
  description: The exact clinical mechanism remains incompletely established; dopamine-transporter binding and in-vitro/animal findings should not be treated as a complete human cognitive mechanism.
  sourceId: dr-modafinil-link-1
```

## Cautions

```yaml
- title: Serious rash and hypersensitivity
  description: The label reports hospitalization-requiring rash, SJS/TEN and DRESS; discontinue at the first sign of clinically significant rash unless clearly unrelated.
  sourceId: dr-modafinil-link-1
- title: Psychiatric and cardiovascular effects
  description: Anxiety, agitation, insomnia, mania, hallucinations, suicidal ideation, BP/heart-rate effects and rare serious events require clinical monitoring.
  sourceId: dr-modafinil-link-1
- title: Pregnancy uncertainty
  description: Pregnancy registry and observational findings are incomplete and mixed; the label retains caution and does not establish fetal safety.
  sourceId: dr-modafinil-s10
```

## Claims

```yaml
- id: modafinil-claim-1
  assertion: Modafinil is a general-purpose cognitive enhancer in healthy rested adults.
  relation: evidence-boundary
  participants:
    - entityId: substance:modafinil
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: reported-context
  context: Healthy meta-analysis found a very small domain-specific effect and real-world generalization is uncertain.
  sourceIds:
    - dr-modafinil-s2
    - dr-modafinil-s4
    - dr-modafinil-s6
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Patient wakefulness evidence cannot be silently relabeled as enhancement above baseline.
- id: modafinil-claim-2
  assertion: Modafinil replaces sleep.
  relation: evidence-boundary
  participants:
    - entityId: substance:modafinil
      role: intervention
    - entityId: tag:wakefulness
      role: reported-context
  context: Severe sleep-loss studies show partial acute restoration, not normalization or a substitute for adequate sleep.
  sourceIds:
    - dr-modafinil-s8
    - czeisler2005
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Residual impairment remains and long-term sleep restriction is untested.
```

## Interactions

```yaml
- id: modafinil-contraceptives
  name: Steroidal contraceptives
  otherSlug: null
  summary: CYP3A4/5 induction lowers steroidal contraceptive exposure; alternative or concomitant contraception is advised during treatment and for one month after stopping in the U.S. label.
  sourceId: dr-modafinil-link-1
  context: Label-described interaction
  conflictingSourceIds: []
- id: modafinil-warfarin
  name: Warfarin
  otherSlug: null
  summary: The label recommends additional PT/INR monitoring.
  sourceId: dr-modafinil-link-1
  context: Label-described monitoring
  conflictingSourceIds: []
- id: modafinil-cyp2c19
  name: CYP2C19 substrates
  otherSlug: null
  summary: Inhibition can increase exposure to phenytoin, diazepam, propranolol, omeprazole and clomipramine.
  sourceId: dr-modafinil-link-1
  context: Label-described enzyme interaction
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: dr-modafinil-link-1
  title: Full Prescribing Information
  authors: use, C-IV — Full Prescribing Information. Apotex Corp.; DailyMed/National Library of Medicine. 2026; SPL v21, effective July 21, 2026. [Direct regulator URL](
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=944daf47-49a6-93ca-e348-4a0f1b6d937e
  kind: Regulatory or registry source
  insight: Source R1 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not applicable to a research study. Sponsorship/status: product labeler Apotex; official US SPL hosted by DailyMed. Conflicts: not an investigator-authored publication. Conflict status: official regulatory source with manufacturer provenance."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "not an investigator-authored publication. Conflict status: official regulatory source with manufacturer provenance."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s2
  title: How effective are pharmaceuticals for cognitive enhancement in healthy adults? Carl A
  authors: Roberts, Andrew Jones, Harry Sumnall, Suzanne H. Gage, Catharine Montgomery. 2020. [PubMed](
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32709551/
  kind: PubMed-indexed study
  insight: Source R2 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not identified in accessible manuscript/record; unknown. Sponsorship: unknown/not identified. Conflicts: authors declared no conflicts. Conflict status: no declared author COI; funding incompletely identified."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "authors declared no conflicts. Conflict status: no declared author COI; funding incompletely identified."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s4
  title: Cognitive enhancing effects of modafinil in healthy volunteers
  authors: Danielle C. Turner, Trevor W. Robbins, Luke Clark, Adam R. Aron, Jonathan Dowson, Barbara J. Sahakian. 2003. [PubMed](
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12417966/
  kind: PubMed-indexed study
  insight: Source R3 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "PubMed indexes non-US-government research support; exact funder not specified in accessible record. Sponsorship: unknown. Conflicts: unknown/not stated. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not stated. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s6
  title: Does modafinil enhance cognitive performance in young volunteers who are not sleep-deprived? Delia C
  authors: Randall, Aparna Viswanath, Punam Bharania, Sarah M. Elsabagh, David E. Hartley, John M. Shneerson, Sandra E. File. 2005. [PubMed](
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15738750/
  kind: PubMed-indexed study
  insight: Source R4 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-US-government research support indexed; exact funder unavailable. Sponsorship: unknown. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s8
  title: "Maintaining alertness and performance during sleep deprivation: modafinil versus caffeine"
  authors: Nancy Jo Wesensten, Gregory Belenky, Mary A. Kautz, David R. Thorne, Rebecca M. Reichardt, Thomas J. Balkin. 2002. [PubMed](
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11862356/
  kind: PubMed-indexed study
  insight: Source R5 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "exact funding not stated; unknown. Sponsorship: unknown. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s10
  title: "Modafinil (Provigil): increased risk of congenital malformations if used during pregnancy"
  authors: UK Medicines and Healthcare products Regulatory Agency. 2020. [Direct regulator URL](
  year: 2020
  url: https://www.gov.uk/drug-safety-update/modafinil-provigil-increased-risk-of-congenital-malformations-if-used-during-pregnancy
  kind: Regulatory or registry source
  insight: Source R6 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "public regulatory activity. Sponsorship/status: MHRA pharmacovigilance communication; not industry-sponsored research. Conflicts: none stated/applicable. Conflict status: official pharmacovigilance source."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "none stated/applicable. Conflict status: official pharmacovigilance source."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s11
  title: "Modafinil/armodafinil in obstructive sleep apnoea: a systematic review and meta-analysis"
  authors: Julia L. Chapman, Andrew Vakulin, Jan Hedner, Brendon J. Yee, Nathaniel S. Marshall. 2016. [PubMed](
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26846828/
  kind: PubMed-indexed study
  insight: Source R7 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "Australian NHMRC support, grant 1004528, Chapman scholarship 1038709 and University of Sydney bridging support. Sponsorship: public/academic based on retrieved funding. Conflicts: complete author disclosure not recovered; unknown/partial. Conflict status: predominantly public funding, incomplete COI verification."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "complete author disclosure not recovered; unknown/partial. Conflict status: predominantly public funding, incomplete COI verification."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s13
  title: Randomized trial of modafinil for the treatment of pathological somnolence in narcolepsy
  authors: US Modafinil in Narcolepsy Multicenter Study Group. 1998. [PubMed](
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9450772/
  kind: PubMed-indexed study
  insight: Source R8 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-US-government research support indexed; exact source unavailable. Sponsorship: unknown from retrieved record. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: czeisler2005
  title: Modafinil for excessive sleepiness associated with shift-work sleep disorder
  authors: Charles A. Czeisler, James K. Walsh, Thomas Roth, Rod J. Hughes, Kenneth P. Wright Jr, Lilliam Kingsbury, Sanjay Arora, Jonathan R. L. Schwartz, Gwendolyn E. Niebler, David F. Dinges; US Modafinil in SWSD Study Group. 2005. [PubMed](
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16079371/
  kind: PubMed-indexed study
  insight: Source R9 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "Cephalon Inc. Sponsorship: industry-sponsored. Conflicts: multiple investigators reported Cephalon consulting, speaking and/or research relationships; several authors were Cephalon employees/equity holders, and Cephalon supported an endowed professorship associated with an investigator. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "multiple investigators reported Cephalon consulting, speaking and/or research relationships; several authors were Cephalon employees/equity holders, and Cephalon supported an endowed professorship associated with an investigator. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s17
  title: "Modafinil in idiopathic hypersomnia without long sleep time: randomized, double-blind, placebo-controlled study"
  authors: Geert Mayer, Heike Benes, Peter Young, Marion Bitterlich, Andrea Rodenbeck. 2015. [PubMed](
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25196321/
  kind: PubMed-indexed study
  insight: Source R10 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown/not stated. Sponsorship: unknown. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s19
  title: "Modafinil for daytime somnolence in Parkinson’s disease: double-blind placebo-controlled parallel trial"
  authors: William G. Ondo, R. Fayle, F. Atassi, Joseph Jankovic. 2005. [PubMed](
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16291885/
  kind: PubMed-indexed study
  insight: Source R11 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unrestricted educational grant from Cephalon Pharmaceuticals. Sponsorship: industry-supported. Conflicts: at least W. Ondo reported a Cephalon speaking relationship; disclosure partial. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "at least W. Ondo reported a Cephalon speaking relationship; disclosure partial. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s21
  title: Effect of modafinil on pharmacokinetics of ethinyl estradiol and triazolam in healthy volunteers
  authors: Philmore Robertson Jr, Edward T. Hellriegel, Sanjay Arora, Michael Nelson. 2002. [PubMed](
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11823757/
  kind: PubMed-indexed study
  insight: Source R12 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown/not stated. Sponsorship: unknown. Conflicts: unknown; no relationship inferred from names. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown; no relationship inferred from names. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s23
  title: The Nuvigil/Provigil Pregnancy Registry
  authors: Cephalon Inc.; later Teva Branded Pharmaceutical Products R&D. 2009–2024 registry record. [ClinicalTrials.gov
  year: 2009
  url: https://clinicaltrials.gov/study/NCT01792583
  kind: Regulatory or registry source
  insight: Source R13 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: "industry. Sponsorship/status: Cephalon/Teva-sponsored observational registry; terminated as no longer feasible; no posted results. Conflicts: sponsor-submitted registry record. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "sponsor-submitted registry record. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s24
  title: "Assessing the Risk of Adverse Maternal and Infant Outcomes Following Prenatal Modafinil Exposure: French Nationwide Cohort Study"
  authors: Sigal Kaplan, Julie de Nascimento, Andrea Contini. 2026. [PubMed](
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42274903/
  kind: PubMed-indexed study
  insight: Source R14 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown/not stated. Sponsorship: unknown. Conflicts: unknown/not stated. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not stated. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s26
  title: An evaluation of the abuse potential of modafinil using methylphenidate as a reference
  authors: Donald R. Jasinski. 2000. [PubMed](
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10757254/
  kind: PubMed-indexed study
  insight: Source R15 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "entirely supported by a Cephalon grant; study drug supplied by Cephalon. Sponsorship: industry-sponsored. Conflicts: paid consultants/contractual relationships involved. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "paid consultants/contractual relationships involved. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s28
  title: Long-term efficacy and safety of modafinil (PROVIGIL) for excessive daytime sleepiness associated with narcolepsy
  authors: Merrill M. Mitler, J. Harsh, M. Hirshkowitz, C. Guilleminault. 2000. [PubMed](
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10828434/
  kind: PubMed-indexed study
  insight: Source R16 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "Cephalon Inc. Sponsorship: industry-sponsored. Conflicts: complete author-disclosure detail not recovered. Conflict status: industry/material, with incomplete individual COI metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "complete author-disclosure detail not recovered. Conflict status: industry/material, with incomplete individual COI metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-r17
  title: Additional linked sleep/OSA evidence source
  authors: The report’s OSA synthesis also cites the systematic-review record above and its registry-linked clinical evidence; where a separate disclosure was not recoverable, status remains unknown rather than inferred.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/?term=modafinil
  kind: PubMed-indexed study
  insight: Source R17 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Prescription modafinil, C-IV
  status: Label indications are narcolepsy, OSA-associated residual sleepiness and SWD; it is not approved as a general cognitive enhancer.
  sourceUrl: https://dailymed.nlm.nih.gov/drugInfo.cfm?setid=944daf47-49a6-93ca-e348-4a0f1b6d937e
  asOf: 2026-10-11
- jurisdiction: United Kingdom
  activity: Licensed modafinil indications
  status: MHRA safety communication describes licensed use for narcolepsy and pregnancy risk; national classifications differ.
  sourceUrl: https://www.gov.uk/drug-safety-update/modafinil-provigil-increased-risk-of-congenital-malformations-if-used-during-pregnancy
  asOf: 2026-10-11
```
