---
slug: metformin
name: Metformin
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
  sourceId: reddit-index-metformin
  observationId: metformin-pk-25939711
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-metformin
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

Metformin studies in this index span exercise, glycemic pharmacology, transporter interactions, androgen biomarkers, and mouse cognition; findings are population- and formulation-specific.

## Description

The source trail is separated into human randomized studies, pharmacokinetic interaction work, transporter experiments, and a mouse study; no cognitive-enhancement claim is inferred.

## Evidence note

PubMed abstracts for the nine linked PMIDs were retrieved. Full text was not available for the PubMed-only records; the source-specific summaries separate human, mouse, transporter, and review evidence and retain the index-only lactic-acidosis link as a lead.


## Doses

```yaml
- label: High-intensity exercise crossover
  amount: 500 mg once, 60 min before test
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Metformin
  formulation: Oral immediate-release metformin
  route: oral
  frequency: single dose
  duration: acute
  population: 10 healthy physically active men
  purpose: High-intensity exercise performance
  sourceCategory: research
  note: Time-to-exhaustion result was protocol-specific; not a performance-enhancement recommendation.
  sourceId: reddit-pmid-26250859
- label: Healthy volunteer pharmacokinetic studies
  amount: 1 g twice daily
  quantity: 1000
  quantityMax: null
  unit: mg twice daily
  ingredient: Metformin
  formulation: Metformin immediate-release or delayed-release comparator
  route: oral
  frequency: twice daily
  duration: 1 week to 12 weeks depending study
  population: Healthy volunteers or adults with type 2 diabetes
  purpose: Pharmacokinetic and glycemic studies
  sourceCategory: research
  note: Dose and formulation differed by trial; do not combine across studies.
  sourceId: reddit-pmid-25939711
- label: Short-term androgen study
  amount: 850 mg twice daily
  quantity: 850
  quantityMax: null
  unit: mg twice daily
  ingredient: Metformin
  formulation: Oral metformin
  route: oral
  frequency: twice daily
  duration: 2 weeks
  population: 12 healthy men
  purpose: Androgen and glucose-tolerance study
  sourceCategory: research
  note: Research exposure; clinical significance of hormone changes was not established.
  sourceId: reddit-pmid-12235466
```

## Pharmacokinetics

```yaml
- id: metformin-pk-25939711
  analyte: Metformin
  route: oral
  formulation: Immediate-release metformin
  population: 34 healthy volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: At 1 g twice daily, OCT1 genotype did not significantly alter AUC, Cmax, or renal clearance.
  sourceId: reddit-pmid-25939711
  modelEligible: false
- id: metformin-pk-25223504
  analyte: Metformin
  route: oral
  formulation: Metformin with or without St John’s wort
  population: 20 healthy men
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: St John’s wort decreased renal clearance of metformin but did not alter other reported PK parameters.
  sourceId: reddit-pmid-25223504
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: metformin-androgens-12235466
  conceptId: mood-response
  name: Androgen biomarkers
  direction: Variable
  evidence: Human research
  description: Two weeks of 850 mg twice-daily metformin reduced total/free testosterone and 17-hydroxyprogesterone while increasing SHBG and DHEA-S in 12 healthy men.
  sourceId: reddit-pmid-12235466
  population: 12 healthy men
  exposure: 850 mg twice daily for 2 weeks
  instrument: Serum hormone assays
  magnitude: Significant changes; clinical significance uncertain
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: metformin-glycemia-26285584
  conceptId: plasma-glucose
  name: Fasting glucose and HbA1c
  direction: Decreased
  evidence: Human research
  description: Delayed-release metformin 600, 800, or 1,000 mg once daily reduced fasting plasma glucose and HbA1c over 12 weeks in type 2 diabetes versus placebo; effects were dissociated from plasma exposure.
  sourceId: reddit-pmid-26285584
  population: 240 adults with type 2 diabetes in dose-ranging study
  exposure: Delayed-release metformin 600–1,000 mg once daily
  instrument: Fasting plasma glucose and HbA1c
  magnitude: Statistically significant sustained reductions
  reportType: measured-assessment
- id: metformin-egp-26271344
  conceptId: plasma-glucose
  name: Endogenous glucose production after glycogen depletion
  direction: Increased
  evidence: Human research
  description: After 42-hour fasting, metformin increased glycolytic glucose use, lactate, counter-regulatory hormones, and endogenous glucose production without hypoglycemia in 34 completers.
  sourceId: reddit-pmid-26271344
  population: 34 healthy volunteers
  exposure: 1 g twice daily before glycogen-depleting fast
  instrument: Tracer glucose kinetics and hormones
  magnitude: EGP increased; no hypoglycemia
  reportType: measured-assessment
- id: metformin-mouse-memory-26698400
  conceptId: episodic-memory
  name: Spatial reference memory in mice
  direction: Increased
  evidence: Limited research
  description: Six months of metformin in aged high-fat-diet mice prevented diet-associated spatial reference-memory impairment, while reducing Nrf2 and neurotrophic-factor transcription.
  sourceId: reddit-pmid-26698400
  population: Aged male C57BL/6J mice
  exposure: Metformin in high-fat diet for 6 months
  instrument: Morris water maze and brain gene expression
  magnitude: Prevented high-fat-diet impairment; animal result
  reportType: measured-assessment
- id: metformin-exercise-26250859
  conceptId: fatigue-severity
  name: High-intensity exercise time to exhaustion
  direction: Increased
  evidence: Human research
  description: A single 500 mg dose increased time to exhaustion versus placebo in 10 healthy men, without improving maximum accumulated oxygen deficit or lactate outcomes.
  sourceId: reddit-pmid-26250859
  population: 10 healthy physically active men
  exposure: 500 mg 60 min before supramaximal cycling
  instrument: Cycle-ergometer exhaustion and oxygen/lactate measures
  magnitude: 191±33 vs 167±32 seconds; P=0.001
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Predominantly gut-mediated glucose lowering
  description: Delayed-release metformin retained glycemic efficacy despite approximately half the bioavailability of immediate/extended-release
    formulations, supporting a lower-bowel-mediated mechanism.
  sourceId: reddit-pmid-26285584
- title: OCT1 and thiamine transport
  description: Metformin competitively inhibited OCT1-mediated thiamine uptake in mouse and human transporter models; hTHTR-2
    also transported metformin in vitro.
  sourceId: reddit-pmid-24961373
- title: Counter-regulatory response during glycogen depletion
  description: Metformin increased glycolytic use and lactate, followed by glucagon/cortisol and endogenous glucose production
    during prolonged fasting.
  sourceId: reddit-pmid-26271344
```

## Cautions

```yaml
- title: Lactic-acidosis risk context
  description: The linked index includes a review of metformin-associated lactic acidosis; risk is clinically context-dependent
    and not quantified by the retrieved PubMed abstracts here.
  sourceId: reddit-link-634a022e3c0d
- title: Transporter and nutrient interactions
  description: Metformin interacts with OCT1 and thiamine transport systems in experimental models; St John’s wort reduced
    renal clearance but changed glucose tolerance in healthy men.
  sourceId: reddit-pmid-25223504
```

## Claims

```yaml
- id: metformin-claim-exercise-26250859
  assertion: A single 500 mg dose improved time to exhaustion during supramaximal cycling in 10 healthy men, without improving overall anaerobic capacity.
  relation: supported-by
  participants:
  - entityId: substance:metformin
    role: intervention
  - entityId: tag:fatigue-severity
    role: outcome
  context: Randomized placebo-controlled exercise crossover.
  sourceIds:
  - reddit-pmid-26250859
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small, acute exercise study.
- id: metformin-claim-gut-26285584
  assertion: Delayed-release metformin lowered glycemia despite lower plasma exposure, supporting a predominantly lower-bowel-mediated mechanism.
  relation: supported-by
  participants:
  - entityId: substance:metformin
    role: intervention
  - entityId: tag:plasma-glucose
    role: outcome
  context: Phase 1 pharmacokinetic and 12-week dose-ranging studies.
  sourceIds:
  - reddit-pmid-26285584
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The formulation and diabetes population limit generalization.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Metformin
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-metformin
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-26250859
  title: Metformin improves performance in high-intensity exercise, but not anaerobic capacity in healthy male subjects.
  authors: S K Learsi, V J Bastos-Silva, A E Lima-Silva, R Bertuzzi, G G De Araujo
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26250859/
  kind: PubMed publication
  insight: The aim of this study was to determine the ergogenic effects of metformin in high-intensity exercise, as well as its effects on anaerobic capacity, in healthy and physically active men.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '26250859'
  doi: 10.1111/1440-1681.12474
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26285584
  title: 'The Primary Glucose-Lowering Effect of Metformin Resides in the Gut, Not the Circulation: Results From Short-term Pharmacokinetic and 12-Week Dose-Ranging Studies.'
  authors: John B Buse, Ralph A DeFronzo, Julio Rosenstock, Terri Kim, Colleen Burns, Sharon Skare, Alain Baron, Mark Fineman
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26285584/
  kind: PubMed publication
  insight: 'OBJECTIVE: Delayed-release metformin (Met DR) is formulated to deliver the drug to the lower bowel to leverage the gut-based mechanisms of metformin action with lower plasma exposure.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '26285584'
  doi: 10.2337/dc15-0488
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26271344
  title: 'Endogenous glucose production increases in response to metformin treatment in the glycogen-depleted state in humans: a randomised trial.'
  authors: Mette Marie H Christensen, Kurt Højlund, Ole Hother-Nielsen, Tore B Stage, Per Damkier, Henning Beck-Nielsen, Kim Brøsen
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26271344/
  kind: PubMed publication
  insight: 'AIMS/HYPOTHESIS: Metformin is believed to reduce glucose levels primarily by inhibiting hepatic glucose production.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '26271344'
  doi: 10.1007/s00125-015-3733-2
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25939711
  title: Steady-state pharmacokinetics of metformin is independent of the OCT1 genotype in healthy volunteers.
  authors: Mette Marie Hougaard Christensen, Kurt Højlund, Ole Hother-Nielsen, Tore Bjerregaard Stage, Per Damkier, Henning Beck-Nielsen, Kim Brøsen
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25939711/
  kind: PubMed publication
  insight: 'PURPOSE: The aim of the study was to determine the steady-state pharmacokinetics of metformin in healthy volunteers with different numbers of reduced-function alleles in the organic cation transporter 1 gene (OCT1).'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '25939711'
  doi: 10.1007/s00228-015-1853-8
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25223504
  title: Intake of St John's wort improves the glucose tolerance in healthy subjects who ingest metformin compared with metformin alone.
  authors: Tore Bjerregaard Stage, Rasmus Steen Pedersen, Per Damkier, Mette Marie Hougaard Christensen, Søren Feddersen, John Teilmann Larsen, Kurt Højlund, Kim Brøsen
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25223504/
  kind: PubMed publication
  insight: 'AIMS: Our objective was to investigate the steady-state pharmacokinetic and pharmacodynamic interaction between the antidepressive herbal medicine St John''s wort and the antidiabetic drug metformin.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '25223504'
  doi: 10.1111/bcp.12510
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26698400
  title: Prolonged metformin treatment leads to reduced transcription of Nrf2 and neurotrophic factors without cognitive impairment in older C57BL/6J mice.
  authors: Joanne S Allard, Evelyn J Perez, Koji Fukui, Priscilla Carpenter, Donald K Ingram, Rafael de Cabo
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26698400/
  kind: PubMed publication
  insight: Long-term use of anti-diabetic agents has become commonplace as rates of obesity, metabolic syndrome and diabetes continue to escalate.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '26698400'
  doi: 10.1016/j.bbr.2015.12.012
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12235466
  title: Effects of short term metformin administration on androgens in normal men.
  authors: Nadima S Shegem, Abeer M Nasir, Abdel-Kareem Jbour, Anwar M Batieha, Moh'd S El-Khateeb, Kamel M Ajlouni
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12235466/
  kind: PubMed publication
  insight: 'OBJECTIVE: To study the effect of metformin on androgens in normal men.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '12235466'
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-634a022e3c0d
  title: 'Metformin-associated lactic acidosis: Current perspectives on causes and risk (2016)'
  authors: Not established
  year: 2016
  url: https://www.sciencedirect.com/science/article/pii/S0026049515003066
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: Publication link retained as a lead; no PubMed abstract was returned for this URL.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26528626
  title: Metformin Is a Substrate and Inhibitor of the Human Thiamine Transporter, THTR-2 (SLC19A3).
  authors: Xiaomin Liang, Huan-Chieh Chien, Sook Wah Yee, Marilyn M Giacomini, Eugene C Chen, Meiling Piao, Jia Hao, Jolyn Twelves, Eve-Irene Lepist, Adrian S Ray, Kathleen M Giacomini
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26528626/
  kind: PubMed publication
  insight: The biguanide metformin is widely used as first-line therapy for the treatment of type 2 diabetes.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '26528626'
  doi: 10.1021/acs.molpharmaceut.5b00501
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-65955386b7b6
  title: Does Metformin Interfere With Thiamine? (2003)
  authors: Not established
  year: 2003
  url: https://archinte.jamanetwork.com/article.aspx?articleid=215400
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: Publication link retained as a lead; no PubMed abstract was returned for this URL.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24961373
  title: OCT1 is a high-capacity thiamine transporter that regulates hepatic steatosis and is a target of metformin.
  authors: Ligong Chen, Yan Shu, Xiaomin Liang, Eugene C Chen, Sook Wah Yee, Arik A Zur, Shuanglian Li, Lu Xu, Kayvan R Keshari, Michael J Lin, Huan-Chieh Chien, Youcai Zhang, Kari M Morrissey, Jason Liu, Jonathan Ostrem, Noah S Younger, John Kurhanewicz, Kevan M Shokat, Kaveh Ashrafi, Kathleen M Giacomini
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24961373/
  kind: PubMed publication
  insight: Organic cation transporter 1, OCT1 (SLC22A1), is the major hepatic uptake transporter for metformin, the most prescribed antidiabetic drug.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '24961373'
  doi: 10.1073/pnas.1314939111
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
