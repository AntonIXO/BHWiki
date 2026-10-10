---
slug: lactoferrin
name: Lactoferrin
subtitle: Human evidence for bovine, human, apo/holo, and recombinant lactoferrin preparations
aliases:
  - Lactotransferrin
  - LF
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: protein
tags: []
accent: "#7868E6"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Oral lactoferrin is digested extensively and available human studies do not establish a universal terminal half-life.
  sourceId: ref-kuwata-1998
  observationId: lactoferrin-pk-intact
kinetics:
  onset: Clinical onset is endpoint-specific and not established as a universal time.
  peak: No validated human oral plasma Tmax for intact lactoferrin was established.
  duration: Trial effects were assessed over weeks to months; a drug-like duration cannot be assigned to the protein as a whole.
  bioavailability: Gastric digestion, iron saturation and formulation affect survival; intact systemic exposure is limited.
  metabolism: Oral lactoferrin undergoes upper-GI digestion and may generate fragments such as lactoferricin; intact protein kinetics are not established.
  sourceId: ref-kuwata-1998
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
x-order: 9007199254740991
---

## Summary

Lactoferrin is an iron-binding protein with product, iron-saturation and route differences. The strongest recent adult iron-deficiency trial found unsaturated bovine lactoferrin inferior to ferrous sulfate, while a small pediatric IBD trial was more favorable. The large ELFIN neonatal trial found no late-onset infection benefit, and oral COVID-19 and hepatitis-C trials were null.

## Description

Bovine, human/recombinant, apo/low-saturation and holo preparations are kept separate from combination products containing iron, formula, probiotics or antibiotics. Oral digestion limits claims of intact systemic protein exposure.

## Evidence note

Evidence is heterogeneous and population-specific. Lactoferrin may be better tolerated than high-dose ferrous sulfate in some studies, but tolerability does not establish superior anemia correction. No formal human drug-interaction PK study was identified.

## Doses

```yaml
- sourceCategory: research
  label: Adult IDA apo-bLF trial
  amount: 200 or 400 mg/day
  quantity: 200
  quantityMax: 400
  unit: mg/day
  ingredient: Bovine lactoferrin
  formulation: Unsaturated apo preparation with folic acid
  route: oral
  frequency: daily
  duration: 12 weeks
  population: 555 nonpregnant women with iron-deficiency anemia
  purpose: Compare hematologic outcomes with ferrous sulfate
  note: The preparation provided only approximately 0.026–0.051 mg elemental iron/day; both bLF arms were inferior for hemoglobin and ferritin.
  sourceId: ref-huda-2026
- sourceCategory: research
  label: Pregnancy anemia trial
  amount: 100 mg twice daily
  quantity: 200
  quantityMax: null
  unit: mg/day
  ingredient: Bovine lactoferrin
  formulation: Approximately 30%-iron-saturated bLF
  route: oral
  frequency: twice daily
  duration: 30 days
  population: Pregnant women with iron-deficiency anemia
  purpose: Compare hematologic changes with ferrous sulfate
  note: Older controlled study; untreated refusers were not randomized.
  sourceId: ref-nappi-2009
- sourceCategory: research
  label: Pediatric IBD anemia trial
  amount: 100 mg/day
  quantity: 100
  quantityMax: null
  unit: mg/day
  ingredient: Bovine lactoferrin
  formulation: Pravotin sachets
  route: oral
  frequency: daily
  duration: 3 months
  population: Children aged 5–18 years with IBD in remission and IDA
  purpose: Compare hematologic and inflammatory outcomes with ferrous sulfate
  note: Small single-center study; renal, liver disease and active infection were excluded.
  sourceId: ref-elamrousy-2022
- sourceCategory: research
  label: ELFIN neonatal trial
  amount: 150 mg/kg/day (maximum 300 mg/day)
  quantity: 150
  quantityMax: 300
  unit: mg/kg/day
  ingredient: Milk-derived bovine lactoferrin
  formulation: Enteral milk-derived preparation
  route: enteral
  frequency: daily
  duration: Until 34 weeks postmenstrual age
  population: 2,203 very preterm infants
  purpose: Prevent late-onset infection
  note: Large randomized trial; primary infection and major neonatal outcomes were null.
  sourceId: ref-elfin-2019
- sourceCategory: research
  label: LAC COVID trial
  amount: 800 mg/day
  quantity: 800
  quantityMax: null
  unit: mg/day
  ingredient: Bovine lactoferrin
  formulation: Mosiac 200 mg capsules, approximately 12% iron-saturated
  route: oral
  frequency: daily
  duration: Hospitalized treatment period
  population: 218 adults with moderate-to-severe COVID-19
  purpose: Assess clinical and inflammatory outcomes
  note: No benefit on death/ICU composite, discharge, oxygen, CRP or IL-6.
  sourceId: ref-berthon-2026
- sourceCategory: research
  label: Recombinant LF safety trial
  amount: 0.34 or 3.4 g/day recombinant human LF; comparator 3.4 g/day bLF
  quantity: 340
  quantityMax: 3400
  unit: mg/day
  ingredient: Recombinant human or bovine lactoferrin
  formulation: Helaina recombinant product or bovine LF
  route: oral
  frequency: daily
  duration: 28 days
  population: Healthy adults
  purpose: Assess safety, antibodies and iron-related outcomes
  note: Helaina funded the study and sponsor involvement/employee interests were disclosed.
  sourceId: ref-peterson-2025
```

## Pharmacokinetics

```yaml
- sourceId: ref-troost-2001
  id: lactoferrin-pk-digestion
  analyte: lactoferrin
  route: oral
  formulation: Apo/low-saturation and holo bovine LF
  population: Adults in gastric-digestion study
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Approximate gastric survival was 64% for buffered apo/low-saturation, 62% for unbuffered apo/low-saturation and 79% for holo LF; survival is not systemic half-life.
  modelEligible: false
- sourceId: ref-kuwata-1998
  id: lactoferrin-pk-intact
  analyte: recombinant human lactoferrin
  route: oral
  formulation: 5 g swallowed dose
  population: 8 women with ileostomies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Only median 4 μg intact LF was recovered from 24-hour ileal output; investigators concluded extensive upper-GI digestion.
  modelEligible: false
- sourceId: ref-peterson-2025
  id: lactoferrin-pk-antibody
  analyte: lactoferrin
  route: oral
  formulation: Recombinant human or bovine LF
  population: Healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The 28-day safety study assessed antibodies and routine labs, not a validated terminal half-life or systemic exposure model.
  modelEligible: false
```

## Modifiers

```yaml
- label: Iron saturation
  effect: Holo LF survived gastric conditions better than apo LF
  detail: In an adult gastric study, approximate survival was 79% for holo versus 62–64% for apo/low-saturation material; this did not establish systemic efficacy.
  sourceId: ref-troost-2001
  observationId: lactoferrin-pk-digestion
  factorType: other
  direction: variable
- label: Product and species
  effect: Bovine, recombinant human and recombinant bovine products are not interchangeable
  detail: Antibody response, digestion and clinical evidence differ by source and formulation.
  sourceId: ref-peterson-2025
  observationId: lactoferrin-pk-antibody
  factorType: other
  direction: variable
- label: Route
  effect: Oral/enteral evidence cannot be generalized to intranasal or topical use
  detail: The evidence set contains materially different routes and mixed formulations.
  sourceId: ref-berthon-2026
  observationId: lactoferrin-pk-intact
  factorType: other
  direction: variable
```

## Effects

```yaml
- sourceId: ref-huda-2026
  id: lactoferrin-effect-tolerability
  conceptId: perception
  name: Gastrointestinal tolerability
  direction: Variable
  evidence: Human research
  description: Some pregnancy and pediatric comparisons reported fewer gastrointestinal adverse effects than ferrous sulfate, but the strongest adult IDA trial found broadly comparable overall adverse-event frequencies.
  population: Pregnant women, children with IBD and adults with IDA in separate trials
  exposure: Study-specific bovine lactoferrin or ferrous sulfate
  instrument: Reported adverse events
  magnitude: Possible tolerability advantage; not consistent across trials
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-huda-2026
```

## Outcomes

```yaml
- sourceId: ref-huda-2026
  id: lactoferrin-outcome-adult-hgb
  conceptId: hemoglobin-concentration
  name: Adult hemoglobin
  direction: Variable
  evidence: Human research
  description: In 555 nonpregnant women with IDA, hemoglobin changed by −0.2, 0.0 and +1.1 g/dL in 200 mg, 400 mg bLF and ferrous-sulfate groups; apo-bLF was inferior.
  population: 555 nonpregnant women with IDA
  exposure: 200 or 400 mg/day apo-bLF versus 60 mg elemental iron/day
  instrument: Hemoglobin
  magnitude: Ferrous sulfate +1.1 g/dL; bLF arms −0.2 and 0.0 g/dL
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-nappi-2009
    - ref-abuhashim-2017
- sourceId: ref-huda-2026
  id: lactoferrin-outcome-ferritin
  conceptId: serum-ferritin
  name: Adult ferritin
  direction: Variable
  evidence: Human research
  description: Ferritin increased approximately 3 μg/L with either apo-bLF dose versus approximately 41 μg/L with ferrous sulfate.
  population: 555 nonpregnant women with IDA
  exposure: 200 or 400 mg/day apo-bLF versus 60 mg elemental iron/day
  instrument: Serum ferritin
  magnitude: Small bLF increase versus larger ferrous-sulfate increase
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-elamrousy-2022
  id: lactoferrin-outcome-ibd
  conceptId: hemoglobin-concentration
  name: Pediatric IBD anemia
  direction: Increased
  evidence: Human research
  description: Both bLF and ferrous sulfate improved hematologic indices; the bLF arm had higher post-treatment hemoglobin, iron, transferrin saturation and ferritin in this small study.
  population: 80 children aged 5–18 years with IBD in remission and IDA
  exposure: 100 mg/day bLF versus 6 mg/kg/day ferrous sulfate for 3 months
  instrument: Hemoglobin, iron, transferrin saturation and ferritin
  magnitude: Between-arm differences favored bLF; replication limited
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-huda-2026
- sourceId: ref-elfin-2019
  id: lactoferrin-outcome-neonatal-infection
  conceptId: late-onset-infection
  name: Late-onset infection
  direction: Variable
  evidence: Human research
  description: "ELFIN found no significant late-onset infection reduction: 316/1,093 bLF versus 334/1,089 placebo, adjusted RR 0.95 (95% CI 0.86–1.04)."
  population: 2,203 very preterm infants
  exposure: 150 mg/kg/day enteral bLF, maximum 300 mg/day
  instrument: Late-onset infection diagnosis
  magnitude: Adjusted RR 0.95 (95% CI 0.86–1.04; p=0.233)
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-manzoni-2009
    - ref-ariff-2025
- sourceId: ref-ochoa-diarrhea-2013
  id: lactoferrin-outcome-formula-diarrhea
  conceptId: diarrhea-incidence
  name: Formula-associated diarrhea
  direction: Decreased
  evidence: Human research
  description: A bLF-fortified infant-formula study reported fewer diarrhea and respiratory illnesses, but the intervention was a complete iron-fortified formula rather than lactoferrin monotherapy.
  population: Weaned infants in a formula study
  exposure: 38 mg bLF/100 g formula
  instrument: Parent-reported illness episodes
  magnitude: Formula-level signal; lactoferrin-specific effect not isolatable
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-berthon-2026
  id: lactoferrin-outcome-covid
  conceptId: death-or-persistent-organ-dysfunction
  name: COVID-19 death/ICU composite
  direction: Variable
  evidence: Human research
  description: The LAC trial found no benefit of oral bLF on death/ICU composite, discharge, NEWS2, oxygen/ventilation, CRP, IL-6 or ferritin.
  population: 218 hospitalized adults with moderate-to-severe COVID-19
  exposure: 800 mg/day approximately 12%-saturated bLF plus standard care
  instrument: Clinical composite and laboratory outcomes
  magnitude: Null across prespecified clinical and inflammatory endpoints
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-dimario-2006
  id: lactoferrin-outcome-hpylori
  conceptId: h-pylori-eradication
  name: H. pylori eradication
  direction: Increased
  evidence: Human research
  description: Older randomized evidence suggests higher eradication when lactoferrin is added to antibiotic/PPI therapy; this is adjunctive combination evidence, not monotherapy.
  population: Adults in H. pylori eradication regimens
  exposure: Lactoferrin added to standard antibiotic/PPI therapy
  instrument: H. pylori eradication testing
  magnitude: Adjunct signal; modern replication and monotherapy evidence limited
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Iron binding
  description: Lactoferrin binds iron and may alter local iron availability; unsaturated apo-bLF provides little elemental iron, so binding plausibility does not replace therapeutic iron in adult IDA.
  sourceId: ref-huda-2026
- title: Gastrointestinal digestion
  description: Oral protein is extensively digested, and fragments may retain local antimicrobial activity; intact systemic protein exposure is not established.
  sourceId: ref-kuwata-1998
- title: Route and formulation dependence
  description: Bovine, recombinant human, iron-saturated and combination products may have different digestion, immunogenicity and clinical effects.
  sourceId: ref-peterson-2025
```

## Cautions

```yaml
- title: Do not substitute for therapeutic iron without evidence
  description: The strongest recent adult IDA trial found apo-bLF inferior to ferrous sulfate for hemoglobin and ferritin.
  sourceId: ref-huda-2026
- title: Retracted pregnancy evidence
  description: One influential pregnancy anemia trial was retracted; historical pooled benefits should not be treated as clean confirmation.
  sourceId: ref-rezk-retraction-2023
- title: Neonatal infection null result
  description: The large ELFIN trial found no significant late-onset infection or major neonatal outcome benefit and recorded serious events in both groups.
  sourceId: ref-elfin-2019
- title: Pregnancy, lactation and organ impairment
  description: Pregnancy data are old and short; dedicated lactation, renal-impairment and hepatic-impairment evidence remains limited or excluded.
  sourceId: ref-elamrousy-2022
- title: Commercial recombinant product
  description: The Helaina recombinant-LF safety trial was company-funded with employee/equity-holder authors and sponsor involvement.
  sourceId: ref-peterson-2025
```

## Claims

```yaml
- id: lactoferrin-claim-ida
  assertion: Oral bovine lactoferrin is an equivalent replacement for ferrous sulfate in adult IDA
  relation: evidence-boundary
  participants:
    - entityId: substance:lactoferrin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: The 2026 apo-bLF adult trial found inferior hemoglobin and ferritin responses.
  sourceIds:
    - ref-huda-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Earlier pregnancy and pediatric findings use different populations, saturation and comparators.
- id: lactoferrin-claim-neonatal
  assertion: Lactoferrin prevents neonatal late-onset infection
  relation: evidence-boundary
  participants:
    - entityId: substance:lactoferrin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: The largest ELFIN trial was null for late-onset infection and several secondary neonatal outcomes.
  sourceIds:
    - ref-elfin-2019
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small earlier neonatal trials and pooled reviews may overstate the effect.
- id: lactoferrin-claim-antiviral
  assertion: Oral lactoferrin treats systemic viral disease
  relation: evidence-boundary
  participants:
    - entityId: substance:lactoferrin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: COVID-19 and chronic hepatitis C trials were clinically null.
  sourceIds:
    - ref-berthon-2026
    - ref-dimario-2006
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: In-vitro antimicrobial mechanisms do not establish intact systemic protein exposure or clinical treatment.
- id: lactoferrin-claim-tolerability
  assertion: Lactoferrin may be better tolerated than high-dose ferrous sulfate in some settings
  relation: evidence-boundary
  participants:
    - entityId: substance:lactoferrin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: Some pregnancy and pediatric studies reported fewer gastrointestinal effects, but this does not imply superior efficacy.
  sourceIds:
    - ref-nappi-2009
    - ref-elamrousy-2022
    - ref-huda-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Tolerability findings vary by population and comparator.
```

## Interactions

```yaml
- id: interaction-lactoferrin-iron
  name: Concurrent therapeutic iron
  otherSlug: null
  summary: Iron plus lactoferrin may modestly change ferritin in pediatric combination studies, while unsaturated bLF alone failed as an adult iron substitute.
  sourceId: ref-divyaveer-2026
  context: Combination evidence; formulation and population specific.
- id: interaction-lactoferrin-acid-suppression
  name: Acid suppression and antacids
  otherSlug: null
  summary: Several safety studies excluded PPIs, H2 blockers, antacids and related drugs; clinically relevant interaction effects are therefore not established.
  sourceId: ref-peterson-2025
  context: No formal human interaction PK study identified.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ref-huda-2026
  title: Bovine Lactoferrin Compared With Ferrous sulfate for Treating Iron-Deficiency Anemia in Bangladeshi Women-A Randomized Controlled Trial.
  authors: Tanvir M Huda, Sajia Islam, Nazia Binte Ali, Shams E Tabriz Bhuiyan, Qazi Sadequr Rahman, Rubhana Raqib, Armando Teixeira-Pinto, William Tarnow-Mordi, Shams El Arifeen, Michael J Dibley
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42302886/
  kind: Double-blind randomized controlled noninferiority trial
  insight: In 555 nonpregnant women with IDA, 200 and 400 mg/day unsaturated bLF were inferior to 60 mg/day elemental iron as ferrous sulfate for hemoglobin and ferritin at 12 weeks; adverse events were broadly comparable.
  limitation: Primary analysis was per protocol and only 349 of 555 randomized participants reached the 12-week primary assessment; findings are preparation- and context-specific.
  pmid: "42302886"
  doi: 10.1016/j.tjnut.2026.101672
  funding: Saving Lives at Birth and the UK Medical Research Council; funders were reported to have no role in study design, data collection, analysis, interpretation, or report writing.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors explicitly reported no financial, personal, academic, or other relationships perceived to influence the work.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://jn.nutrition.org/article/S0022-3166%2826%2900321-4/fulltext
- id: ref-nappi-2009
  title: "Efficacy and tolerability of oral bovine lactoferrin compared to ferrous sulfate in pregnant women with iron deficiency anemia: a prospective controlled randomized study."
  authors: Carmine Nappi, Giovanni Antonio Tommaselli, Ilaria Morra, Mariangela Massaro, Carmen Formisano, Costantino Di Carlo
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19639462/
  kind: Prospective randomized controlled double-blind trial
  insight: In pregnant women with IDA, both bLF 100 mg twice daily and ferrous sulfate improved hematologic measures over 30 days without significant between-group efficacy differences; abdominal pain and constipation scores were higher with ferrous sulfate.
  limitation: Accessible evidence was abstract-level; complete funding, COI, attrition, and quantitative between-group estimates were not inspected.
  pmid: "19639462"
  doi: 10.1080/00016340903117994
  funding: Not assessed from accessible full publication declarations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from accessible full publication declarations.
  conflictOfInterestStatus: not-assessed
- id: ref-elamrousy-2022
  title: "Lactoferrin for iron-deficiency anemia in children with inflammatory bowel disease: a clinical trial."
  authors: Doaa El Amrousy, Dalia El-Afify, Abdallah Elsawy, Mai Elsheikh, Amr Donia, Mohammed Nassar
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9556315/
  kind: Randomized controlled clinical trial
  insight: Among 80 completers with IBD-associated IDA, 100 mg/day bLF for 3 months was associated with higher post-treatment hemoglobin, serum iron, transferrin saturation, and ferritin and fewer reported gastrointestinal complaints than ferrous sulfate.
  limitation: Small study, complete-case analysis after 12 losses/exclusions, short follow-up, and internal inconsistencies between participant-flow and side-effect reporting.
  pmid: "35681097"
  doi: 10.1038/s41390-022-02136-2
  funding: Research-study funding was not explicitly identified in the inspected article; open-access publication funding was provided by the Science, Technology & Innovation Funding Authority in cooperation with the Egyptian Knowledge Bank.
  sponsorshipStatus: not-reported
  conflictsOfInterest: The authors explicitly declared no competing interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.nature.com/articles/s41390-022-02136-2
- id: ref-divyaveer-2026
  title: Randomized Controlled Trial Comparing Lactoferrin Plus Iron to Iron Alone for Iron Deficiency Anemia in CKD.
  authors: Smita Divyaveer, Kushal Kekan, Madhuri Kashyap, Maninder Kaur, Kanchan Prajapati, Madhumita Premkumar, Deepy Zohmangaihi, Nabhajit Mallik, Deepesh Lad, Ravjit Singh Jassal, Akanksha Sharma, Simran Behl, Amol N Patil, Ashok Kumar, Lekha Rani, Arun Prabhahar, Manish Rathi, Raja Ramachandran, Harbir Singh Kohli
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42684832/
  kind: Randomized open-label trial
  insight: In 185 patients with CKD-associated IDA, adding lactoferrin 100 mg twice daily to 30 mg/day liposomal iron produced larger hemoglobin improvements than liposomal iron alone in nondialysis and dialysis-dependent strata.
  limitation: Combination trial rather than lactoferrin monotherapy; only abstract-level details were available in this research pass.
  pmid: "42684832"
  doi: 10.2215/CJN.0000001204
  funding: Not assessed from a complete publication funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from a complete publication disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-manzoni-2009
  title: "Bovine lactoferrin supplementation for prevention of late-onset sepsis in very low-birth-weight neonates: a randomized trial."
  authors: Paolo Manzoni, Matteo Rinaldi, Silvia Cattani, et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19809023/
  kind: Multicenter double-blind placebo-controlled randomized trial
  insight: bLF 100 mg/day reduced first late-onset-sepsis incidence versus placebo in very-low-birth-weight infants; a separate bLF-plus-LGG arm was also positive.
  limitation: Earlier and much smaller than the later ELFIN trial; bLF-alone and bLF-plus-probiotic effects must remain distinct.
  pmid: "19809023"
  doi: 10.1001/jama.2009.1403
  funding: PubMed indexes non-U.S.-government research support, but the full funding declaration was not assessed in this research pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full publication disclosure not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-elfin-2019
  title: "Enteral lactoferrin supplementation for very preterm infants: a randomised placebo-controlled trial."
  authors: ELFIN trial investigators group
  year: 2019
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6356450/
  kind: Multicenter randomized placebo-controlled trial
  insight: In 2,203 very preterm infants, bLF 150 mg/kg/day did not reduce confirmed or suspected late-onset infection, other major morbidity, or mortality.
  limitation: Conducted in UK neonatal services; applicability to substantially different care settings or formulations may differ.
  pmid: "30635141"
  doi: 10.1016/S0140-6736(18)32221-9
  funding: UK National Institute for Health Research Health Technology Assessment programme 10/57/49; the inspected full text states the funder did not participate in design, data collection, analysis, interpretation, or writing.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Complete publication conflict declaration was not separately assessed in this research pass.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6356450/
- id: ref-ariff-2025
  title: "Evaluation of Bovine Lactoferrin for Prevention of Late-Onset Sepsis in Low-Birth-Weight Infants: A Double-Blind Randomized Controlled Trial."
  authors: Shabina Ariff, Sajid Bashir Soofi, Uswa Jiwani, Almas Aamir, Uzair Ansari, Arjumand Rizvi, Michelle D'Almeida, Ashraful Alam, Michael Dibley
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40507041/
  kind: Three-arm double-blind placebo-controlled randomized trial
  insight: Culture-proven sepsis was lower at 150 mg/day bLF but not significantly lower at 300 mg/day; investigators concluded the small trial did not establish overall late-onset-sepsis prevention.
  limitation: Small sample, dose-inconsistent result, and limited power.
  pmid: "40507041"
  doi: 10.3390/nu17111774
  funding: Not assessed from the complete publication funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the complete publication disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-ochoa-diarrhea-2013
  title: Randomized double-blind controlled trial of bovine lactoferrin for prevention of diarrhea in children.
  authors: Theresa J Ochoa, Elsa Chea-Woo, Nelly Baiocchi, Iris Pecho, Miguel Campos, Ana Prada, Gladys Valdiviezo, Angela Lluque, Dejian Lai, Thomas G Cleary
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/22939927/
  kind: Community randomized double-blind placebo-controlled trial
  insight: In 555 previously weaned children, bLF did not reduce diarrhea incidence but modestly reduced longitudinal prevalence, episode duration, dehydration severity, and liquid-stool burden.
  limitation: Several favorable measures were secondary despite a null primary incidence result.
  pmid: "22939927"
  doi: 10.1016/j.jpeds.2012.07.043
  funding: PubMed indexes NIH extramural research support, but the complete publication funding declaration was not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete publication disclosure not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-wronowski-2021
  title: "Bovine Lactoferrin in the Prevention of Antibiotic-Associated Diarrhea in Children: A Randomized Clinical Trial."
  authors: Michal F Wronowski, Maria Kotowska, Marcin Banasiuk, Artur Kotowski, Weronika Kuzmicka, Piotr Albrecht
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8215102/
  kind: Prospective randomized double-blind placebo-controlled trial
  insight: Antibiotic-associated diarrhea occurred in 21.3% of the bLF group and 9.3% of placebo recipients; OR 2.6, 95% CI 1.02-6.8.
  limitation: Single-center trial, small event count, some baseline imbalances, and no established mechanism for the unexpected diarrhea signal.
  pmid: "34164360"
  doi: 10.3389/fped.2021.675606
  funding: No explicit monetary research-funding statement was identified in the inspected full text; Pharmabest donated lactoferrin and placebo and was stated not to be involved in study design, conduct, analysis, interpretation, writing, or submission.
  sponsorshipStatus: not-reported
  conflictsOfInterest: Authors declared absence of commercial or financial relationships that could be construed as a potential conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8215102/
- id: ref-dimario-2006
  title: "Bovine lactoferrin for Helicobacter pylori eradication: an open, randomized, multicentre study."
  authors: F Di Mario, G Aragona, N Dal Bó, et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16611285/
  kind: Prospective open randomized multicenter trial
  insight: Concurrent bLF 200 mg twice daily added to esomeprazole, clarithromycin, and tinidazole yielded a higher H. pylori eradication proportion than the corresponding triple regimen without bLF.
  limitation: Open design, older antibiotic regimen, combination attribution, and current antibiotic-resistance patterns limit present-day interpretation.
  pmid: "16611285"
  doi: 10.1111/j.1365-2036.2006.02851.x
  funding: Not assessed from complete publication declarations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from complete publication declarations.
  conflictOfInterestStatus: not-assessed
- id: ref-troost-2001
  title: Gastric digestion of bovine lactoferrin in vivo in adults.
  authors: F J Troost, J Steijns, W H Saris, R J Brummer
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11481401/
  kind: Randomized crossover human gastric-digestion study
  insight: Substantial amounts of apo/partially iron-saturated and holo bLF survived gastric transit; measured survival was approximately 62%-64% for apo conditions and 79% for holo-LF.
  limitation: Only 12 healthy adults, unusually large 4.5-g test exposure, nasogastric administration/sampling, and no measurement of systemic elimination kinetics.
  pmid: "11481401"
  doi: 10.1093/jn/131.8.2101
  funding: Not assessed from complete publication declarations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from complete publication declarations.
  conflictOfInterestStatus: not-assessed
- id: ref-kuwata-1998
  title: Direct evidence of the generation in human stomach of an antimicrobial peptide domain (lactoferricin) from ingested lactoferrin.
  authors: H Kuwata, T T Yip, M Tomita, T W Hutchens
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9920391/
  kind: Direct human gastric-sampling study
  insight: Lactoferricin and incompletely hydrolyzed lactoferrin fragments were detected in gastric contents after ingestion of bovine lactoferrin.
  limitation: Very small mechanistic human experiment including direct sampling from an adult; it does not establish clinical antimicrobial efficacy.
  pmid: "9920391"
  doi: 10.1016/S0167-4838(98)00224-6
  funding: Not assessed from complete publication declarations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from complete publication declarations.
  conflictOfInterestStatus: not-assessed
- id: ref-peterson-2025
  title: A Randomized, Double-Blind, Controlled Trial to Assess the Effects of Lactoferrin at Two Doses vs. Active Control on Immunological and Safety Parameters in Healthy Adults.
  authors: Ross D Peterson, Liana L Guarneiri, Caryn G Adams, Meredith L Wilcox, Anthony J Clark, Nathan P Rudemiller, Kevin C Maki, Carrie-Anne Malinczak
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11731406/
  kind: Randomized double-blind active-controlled human safety and immunogenicity trial
  insight: rhLF at 0.34 or 3.4 g/day for 28 days did not increase anti-hLF antibodies; 3.4 g/day bLF increased anti-bLF antibody signal, while measured safety outcomes remained similar across groups.
  limitation: 66 randomized healthy adults, 28-day exposure, not powered for rare adverse events, and substantial manufacturer involvement.
  pmid: "39465888"
  doi: 10.1177/10915818241293723
  funding: Helaina Inc. funded the research and was involved in study design, data interpretation, report writing, and the decision to submit.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Helaina employees held equity or stock; one author received consulting/advisory fees from Helaina; Midwest Biomedical Research authors reported grants and/or consulting fees from multiple companies including Helaina.
  conflictOfInterestStatus: declared
  disclosureUrl: https://journals.sagepub.com/doi/abs/10.1177/10915818241293723
- id: ref-berthon-2026
  title: "Oral lactoferrin reduces systemic inflammation, enhances anti-viral responses and modulates immune cell profiles: a randomised controlled trial in healthy, older adults."
  authors: Bronwyn S Berthon, Evan J Williams, Lily M Williams, Kurtis F Budden, Sarah A Hiles, Nathan W Bartlett, Lisa G Wood
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41634901/
  kind: Randomized controlled biomarker trial
  insight: Four weeks of 200 or 600 mg/day oral lactoferrin altered selected inflammatory, immune-cell, and ex-vivo virus-stimulated cytokine endpoints in adults aged at least 50 years.
  limitation: Biomarker and ex-vivo immune outcomes are not evidence that lactoferrin prevents clinical viral infection; complete funding and COI declarations were not inspected here.
  pmid: "41634901"
  doi: 10.1017/S000711452610631X
  funding: Not assessed from complete publication declarations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from complete publication declarations.
  conflictOfInterestStatus: not-assessed
- id: ref-christofi-2024
  title: "The effectiveness of oral bovine lactoferrin compared to iron supplementation in patients with a low hemoglobin profile: A systematic review and meta-analysis of randomized clinical trials."
  authors: Maria-Dolores Christofi, Konstantinos Giannakou, Meropi Mpouzika, Anastasios Merkouris, Maria Vergoulidou-Stylianide, Andreas Charalambous
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38291525/
  kind: Systematic review and meta-analysis of randomized clinical trials
  insight: The review found pooled older evidence favoring lactoferrin over ferrous sulfate for hemoglobin.
  limitation: Search ended June 2022, pooled comparison had very high heterogeneity (I2 95.8%), and the review predates the large negative 2026 Bangladesh RCT and the 2023 retraction of a prominent pregnancy trial.
  pmid: "38291525"
  doi: 10.1186/s40795-023-00818-6
  funding: Complete review funding declaration not assessed in this research pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete publication disclosure not assessed in this research pass.
  conflictOfInterestStatus: not-assessed
- id: ref-abuhashim-2017
  title: "Lactoferrin or ferrous salts for iron deficiency anemia in pregnancy: A meta-analysis of randomized trials."
  authors: Hatem Abu Hashim, Osama Foda, Essam Ghayaty
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/29059584/
  kind: Systematic review and meta-analysis of pregnancy randomized trials
  insight: Four trials involving 600 women produced a pooled 4-week hemoglobin estimate favoring lactoferrin and fewer gastrointestinal side effects.
  limitation: Published before the later retraction of a prominent pregnancy RCT and before the large negative 2026 nonpregnant-women trial; subgroup results were heterogeneous.
  pmid: "29059584"
  doi: 10.1016/j.ejogrb.2017.10.003
  funding: Inspected publisher page lists acknowledgement as nil; no specific study-funding source was identified.
  sponsorshipStatus: not-reported
  conflictsOfInterest: Publisher page reports that the authors declared no conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.sciencedirect.com/science/article/abs/pii/S0301211517304633
- id: ref-rezk-retraction-2023
  title: "RETRACTED ARTICLE: Lactoferrin versus ferrous sulphate for the treatment of iron deficiency anemia during pregnancy: a randomized clinical trial."
  authors: No authors listed
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37466255/
  kind: Retraction notice
  insight: Editors and publisher retracted the Rezk et al. trial after significant concerns about data/result integrity; authors did not provide original data or sufficient supporting information and did not agree with the retraction.
  limitation: Retraction notice addresses research integrity rather than providing new clinical outcome data.
  pmid: "37466255"
  doi: 10.1080/14767058.2023.2235773
  funding: The retraction page reports no funding associated with the featured work.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to clinical efficacy assessment; no independent trial COI reassessment supplied.
  conflictOfInterestStatus: not-assessed
- id: ref-efsa-2012
  title: Scientific Opinion on bovine lactoferrin
  authors: EFSA Panel on Dietetic Products, Nutrition and Allergies (NDA)
  year: 2012
  url: https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2012.2701
  kind: European Food Safety Authority scientific opinion
  insight: EFSA concluded bovine lactoferrin was safe under the proposed novel-food uses and use levels considered in the application.
  limitation: Regulatory food-safety assessment; it is not a declaration of therapeutic efficacy for anemia, infection, or other disease.
  doi: 10.2903/j.efsa.2012.2701
  funding: Regulatory scientific opinion; study sponsorship classification not applicable and not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Regulatory-panel conflict processes were not assessed as a clinical-study COI declaration.
  conflictOfInterestStatus: not-assessed
- id: ref-fda-grn1219
  title: GRAS Notice No. 1219 - Recombinant bovine lactoferrin isolate produced by Komagataella phaffii M020 expressing the gene encoding bovine lactoferrin
  authors: U.S. Food and Drug Administration
  year: 2025
  url: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=1219&order=ASC&search=comb&set=GRASNotices&sort=GRN_No&startrow=1&type=basic
  kind: FDA GRAS notice database record
  insight: FDA lists a May 7, 2025 closure with a no-questions response for the notifier's GRAS conclusion covering specified food uses of this recombinant bovine-lactoferrin isolate.
  limitation: Preparation- and intended-use-specific GRAS response; not drug approval or a general clinical efficacy finding.
  funding: Regulatory record; not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: ref-fda-grn1284
  title: GRAS Notice No. 1284 - Recombinant bovine lactoferrin isolate produced by Komagataella phaffii Ppas_337 expressing the gene encoding bovine lactoferrin
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=1284&order=ASC&search=comb&set=GRASNotices&sort=GRN_No&startrow=1&type=basic
  kind: FDA GRAS notice database record
  insight: FDA lists a March 25, 2026 closure with a no-questions response for specified food uses of this recombinant bovine-lactoferrin isolate.
  limitation: Preparation- and use-specific food-safety regulatory record; not therapeutic approval.
  funding: Regulatory record; not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: ref-fda-grn130
  title: GRAS Notice No. 130 - Bovine milk-derived lactoferrin
  authors: U.S. Food and Drug Administration
  year: 2003
  url: https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=130&order=DESC&search=GRN&set=GRASNotices&sort=GRN_No&startrow=1&type=column
  kind: FDA GRAS notice database record
  insight: FDA records a no-questions response concerning bovine milk-derived lactoferrin used as an antimicrobial spray on beef carcasses under the notifier's specified conditions.
  limitation: This narrow food-processing use does not establish safety or efficacy for oral therapeutic supplementation.
  funding: Regulatory record; not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not a clinical publication.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Bovine lactoferrin food ingredient
  status: FDA GRAS no-questions records apply to specified food uses and are not therapeutic approval for anemia or infection.
  sourceUrl: https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=130&set=GRASNotices
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Recombinant bovine lactoferrin food ingredient
  status: GRN 1219 and GRN 1284 concern specified food applications; they do not establish disease efficacy.
  sourceUrl: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=1219&set=GRASNotices
  asOf: 2026-10-10
- jurisdiction: European Union
  activity: Bovine lactoferrin novel food
  status: EFSA assessed food safety under proposed uses; this is not evidence of therapeutic efficacy.
  sourceUrl: https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2012.2701
  asOf: 2026-10-10
```
