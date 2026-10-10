---
slug: bromelain
name: Bromelain
subtitle: Pineapple-derived cysteine-protease mixtures with source- and assay-dependent composition and activity
aliases:
  - Bromelains
  - Pineapple protease complex
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Proteolytic enzyme preparation
tags: []
accent: "#D7A32B"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Estimated plasma elimination half-life of orally absorbed stem bromelain
  low: 6
  high: 9
  context: Estimated in 19 healthy men after oral stem bromelain; the analyte was immunoreactive and partly proteolytically active circulating bromelain detected at low systemic concentrations.
  sourceId: ref-castell-1997
  observationId: pk-oral-stem-bromelain-1997
kinetics:
  onset: Systemic onset after oral administration is not established as a clinically useful parameter; intact immunoreactive and partly proteolytically active bromelain was detected in plasma during post-dose sampling.
  peak: Oral Tmax was not established in the cited human oral pharmacokinetic study; repeated dosing produced measurable plasma concentrations during the sampling period.
  duration: Felt-effect duration is not established. The 6–9 hour oral plasma elimination estimate must not be interpreted as a duration of analgesic or anti-inflammatory effect.
  bioavailability: Absolute oral bioavailability is not established in humans. A 1997 human study demonstrated only a small but measurable absorbed amount of intact and partly active stem bromelain.
  metabolism: Circulating bromelain was found associated with alpha2-macroglobulin and alpha1-antichymotrypsin; complete metabolic degradation and excretion pathways were not established.
  sourceId: ref-castell-1997
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

Bromelain is a heterogeneous pineapple-derived protease preparation. Small human trials report mixed postoperative and inflammatory outcomes, while formulation, activity units, indication and comparator materially change what can be inferred.

## Description

Stem and fruit preparations are mixtures rather than a single molecular entity. The records below keep oral supplement studies separate from topical anacaulase-bcdb and distinguish clinical endpoints, biomarkers, laboratory mechanisms and label precautions.

## Evidence note

Human evidence supports low-level oral absorption, but does not establish a clinically meaningful free systemic protease effect. Postoperative pain signals are modest and heterogeneous; knee osteoarthritis and exercise studies include null findings. Product-label bleeding and allergy precautions are not quantified oral drug-interaction effects.

## Doses

```yaml
- label: Oral absorption study
  amount: 3 g/day
  quantity: 3
  quantityMax: null
  unit: g/day
  ingredient: Bromelain
  formulation: Oral stem-bromelain preparation; activity units and coating not reported in the abstract
  route: Oral
  frequency: Multidose phase
  duration: Human pharmacokinetic sampling after multidose administration
  population: 19 healthy men
  purpose: Measure circulating undegraded bromelain
  sourceCategory: research
  note: Study exposure only; it does not establish a supplement regimen or therapeutic dose.
  sourceId: ref-castell-1997
- label: Knee osteoarthritis placebo trial
  amount: 800 mg/day
  quantity: 800
  quantityMax: null
  unit: mg/day
  ingredient: Bromelain
  formulation: Oral bromelain; activity units not reported in the abstract
  route: Oral
  frequency: Daily
  duration: 12 weeks
  population: 47 adults with moderate-to-severe knee osteoarthritis; 31 completed
  purpose: Compare WOMAC and SF-36 outcomes with placebo
  sourceCategory: research
  note: Research exposure only; the placebo-controlled result was null.
  sourceId: ref-brien-2006
- label: Mandibular third-molar pain trial
  amount: 250 mg four times daily
  quantity: 250
  quantityMax: null
  unit: mg per dose
  ingredient: Bromelain
  formulation: Oral bromelain; product activity units not reported
  route: Oral
  frequency: Four times daily
  duration: Perioperative short course
  population: 45 adults after mandibular third-molar surgery
  purpose: Compare postoperative pain, swelling and quality of life
  sourceCategory: research
  note: Trial exposure; pain and quality-of-life findings were more favorable than the objective swelling result.
  sourceId: ref-majid-2014
- label: Dose-finding dental trial
  amount: 1,000–4,500 FIP/day
  quantity: 1000
  quantityMax: 4500
  unit: FIP/day
  ingredient: Bromelain
  formulation: Activity-standardized oral preparation
  route: Oral
  frequency: Daily
  duration: Perioperative crossover study
  population: Adults after wisdom-tooth extraction
  purpose: Compare dose-related postoperative facial swelling
  sourceCategory: research
  note: Higher activity doses were not superior to 1,000 FIP/day; FIP cannot be converted to milligrams without preparation-specific assay data.
  sourceId: ref-bormann-2016
- label: Bromelain-POS labelled activity exposure
  amount: 500–1,000 FIP/day
  quantity: 500
  quantityMax: 1000
  unit: FIP/day
  ingredient: Bromelain
  formulation: Gastro-resistant Bromelain-POS tablets; 500 FIP per tablet
  route: Oral
  frequency: Label-specific
  duration: Label-specific
  population: Product label population
  purpose: Official product regimen
  sourceCategory: approved-label
  note: Product information describes activity units, not a universal mass-equivalent bromelain dose.
  sourceId: ref-bromelain-pos
```

## Pharmacokinetics

```yaml
- id: pk-oral-stem-bromelain-1997
  analyte: Immunoreactive and partly proteolytically active stem bromelain in plasma
  route: Oral
  formulation: Stem-bromelain preparation
  population: 19 healthy men
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 6
  high: 9
  unit: hours
  context: Low-level circulating bromelain was detected after oral intake. Association with alpha2-macroglobulin and alpha1-antichymotrypsin was reported; absolute oral bioavailability was not established.
  sourceId: ref-castell-1997
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
- id: bromelain-knee-oa-womac
  conceptId: knee-osteoarthritis-symptoms
  name: Knee osteoarthritis symptoms
  direction: Variable
  evidence: Human research
  description: In a 12-week randomized placebo-controlled pilot of 800 mg/day, bromelain did not significantly improve total WOMAC, WOMAC subscales or SF-36 versus placebo. The trial was small and only 31 participants completed it.
  sourceId: ref-brien-2006
  population: Adults with moderate-to-severe knee osteoarthritis
  exposure: 800 mg/day oral bromelain for 12 weeks
  instrument: WOMAC and SF-36
  magnitude: No significant between-group difference; primary coefficient 11.16, p=0.27, 95% CI −8.86 to 31.18
  reportType: measured-assessment
  conflictingSourceIds: []
- id: bromelain-postoperative-pain
  conceptId: postoperative-pain
  name: Postoperative dental pain
  direction: Decreased
  evidence: Human research
  description: A randomized trial after mandibular third-molar surgery found lower pain and improved quality-of-life measures with bromelain than placebo; the objective swelling reduction was not statistically significant.
  sourceId: ref-majid-2014
  population: 45 adults after mandibular third-molar surgery
  exposure: 250 mg bromelain four times daily during the perioperative course
  instrument: Pain scores and quality-of-life measures
  magnitude: Pain favored bromelain versus placebo; exact effect estimate not recovered here
  reportType: measured-assessment
  conflictingSourceIds: []
- id: bromelain-postoperative-swelling
  conceptId: postoperative-facial-swelling
  name: Postoperative facial swelling
  direction: Variable
  evidence: Human research
  description: Dose-finding and comparative dental trials do not establish a uniform anti-edema effect. Bormann et al. found no advantage of 3,000 or 4,500 FIP/day over 1,000 FIP/day, while other small studies report mixed swelling results.
  sourceId: ref-bormann-2016
  population: Adults after wisdom-tooth extraction
  exposure: 1,000–4,500 FIP/day oral bromelain
  instrument: Objective three-dimensional facial swelling measurement
  magnitude: Higher doses were not superior; pooled bromelain periods showed only a favorable trend versus placebo
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-colletti-2024
- id: bromelain-uc-activity
  conceptId: ulcerative-colitis-disease-activity
  name: Ulcerative-colitis disease activity
  direction: Decreased
  evidence: Human research
  description: One small randomized triple-blind study reported a larger symptom-based disease-activity reduction with bromelain than placebo, but did not provide confirmatory endoscopic evidence and should be treated as preliminary.
  sourceId: ref-delgarm-2025
  population: Adults with mild-to-moderate ulcerative colitis
  exposure: 400 mg/day oral bromelain for 8 weeks
  instrument: Symptom-based ulcerative-colitis activity index
  magnitude: Greater symptom-index reduction than placebo; exact between-group estimate not recovered here
  reportType: measured-assessment
  conflictingSourceIds: []
- id: bromelain-inflammatory-markers
  conceptId: immune-function
  name: Inflammatory biomarkers
  direction: Variable
  evidence: Human research
  description: A systematic review of randomized trials found heterogeneous inflammatory-marker results. Isolated biomarker changes do not establish a consistent systemic anti-inflammatory clinical effect.
  sourceId: ref-leelakanok-2023
  population: Mixed clinical and healthy-study populations
  exposure: Study-specific oral bromelain preparations, roughly 200–1,050 mg/day in included trials
  instrument: Study-specific inflammatory and oxidative biomarkers
  magnitude: Heterogeneous; no consistent pooled clinical conclusion
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Heterogeneous cysteine-protease activity
  description: Pineapple-stem bromelain contains multiple catalytically active papain-family proteases. The biochemical activity of a commercial preparation depends on its composition and assay units.
  sourceId: ref-matagne-2017
  conceptId: cysteine-protease-activity
- title: Human tissue inflammatory signaling
  description: Ex-vivo human colon biopsies and cultured dental-pulp cells show reduced inflammatory mediator release after bromelain exposure. These experiments establish biological plausibility, not clinical efficacy at oral supplement concentrations.
  sourceId: ref-onken-2008
  conceptId: immune-inflammatory-modulation
- title: Laboratory hemostasis modulation
  description: Human platelet and whole-blood experiments report altered aggregation or coagulation measures. The clinical significance after ordinary oral use is not quantified.
  sourceId: ref-metzig-1999
  conceptId: hemostasis-modulation
```

## Cautions

```yaml
- title: Hypersensitivity
  description: Bromelain-POS contraindicates use in people hypersensitive to bromelain or pineapple and reports allergic reactions including rash or asthma-like symptoms.
  sourceId: ref-bromelain-pos
- title: Bleeding precaution
  description: The product information advises against use in coagulation disorders or with anticoagulants or platelet-aggregation inhibitors and recommends stopping before surgery. The magnitude of any oral clinical interaction is not established.
  sourceId: ref-bromelain-pos
- title: Pregnancy and lactation
  description: Pregnancy and reproductive-toxicity data are inadequate, and the product information does not recommend use during pregnancy or breastfeeding. This is an evidence gap, not proof of harm.
  sourceId: ref-bromelain-pos
- title: Topical NexoBrid is a separate product
  description: NexoBrid is topical anacaulase-bcdb used for burn-eschar removal. Its pharmacology, indication and safety data must not be attributed to oral bromelain supplements.
  sourceId: ref-dailymed-nexobrid-2025
```

## Claims

```yaml
- id: bromelain-postoperative-pain-claim
  assertion: Oral bromelain may reduce postoperative dental pain in some small controlled studies, but evidence is heterogeneous and indication-specific.
  relation: associated-with-reduced-postoperative-pain
  participants:
    - entityId: substance:bromelain
      role: exposure
    - entityId: tag:postoperative-pain
      role: measured-outcome
  context: Perioperative mandibular third-molar surgery
  sourceIds:
    - ref-majid-2014
    - ref-leelakanok-2023
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small trials use different preparations, activity units, rescue analgesia and outcome timing.
- id: bromelain-uc-claim
  assertion: A preliminary trial reported lower symptom-based ulcerative-colitis disease activity with bromelain, without confirmatory endoscopic benefit.
  relation: associated-with-reduced-ulcerative-colitis-disease-activity
  participants:
    - entityId: substance:bromelain
      role: adjunctive-exposure
    - entityId: tag:ulcerative-colitis-disease-activity
      role: measured-outcome
  context: Adults with mild-to-moderate ulcerative colitis
  sourceIds:
    - ref-delgarm-2025
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single preliminary trial with symptom-index emphasis and no independent replication.
```

## Interactions

```yaml
- id: bromelain-anticoagulant-precaution
  name: Anticoagulant or antiplatelet therapy
  otherSlug: null
  summary: Product information warns of increased bleeding tendency and advises avoiding concurrent use; a quantified oral clinical interaction has not been established.
  sourceId: ref-bromelain-pos
  context: Label precaution based on bleeding/coagulation concerns and limited interaction evidence.
- id: bromelain-tetracycline-absorption
  name: Tetracycline antibiotics
  otherSlug: null
  summary: An older human study examined altered tetracycline absorption with bromelain, while the product label states that systematic interaction studies are lacking.
  sourceId: ref-bradbrook-1978
  context: Historical absorption study; no modern class-wide interaction estimate.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ref-castell-1997
  title: "Intestinal absorption of undegraded proteins in men: presence of bromelain in plasma after oral intake"
  authors: Castell JV; Friedrich G; Kuhn CS; Poppe GE
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9252520/
  doi: 10.1152/ajpgi.1997.273.1.G139
  kind: Human pharmacokinetic study
  insight: Detected low-level circulating bromelain after oral intake and estimated a 6–9 hour plasma half-life.
  limitation: Small healthy-volunteer study; absolute bioavailability and clinical relevance were not established.
  funding: Not assessed in the retrieved publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-brien-2006
  title: "Bromelain as an adjunctive treatment for moderate-to-severe osteoarthritis of the knee: a randomized placebo-controlled pilot study"
  authors: Brien S; Lewith G; Walker AF; Middleton R; Prescott P; Bundy R
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/17121765/
  doi: 10.1093/qjmed/hcl118
  kind: Randomized placebo-controlled pilot study
  insight: 800 mg/day bromelain did not significantly improve WOMAC or SF-36 versus placebo at 12 weeks.
  limitation: Small pilot with incomplete follow-up and no generalization beyond knee osteoarthritis.
  funding: Research support indexed; exact sponsor not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-majid-2014
  title: "Perioperative bromelain reduces pain and swelling and improves quality of life measures after mandibular third molar surgery: a randomized, double-blind, placebo-controlled clinical trial"
  authors: Majid OW; Al-Mashhadani BA
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24589242/
  doi: 10.1016/j.joms.2013.12.035
  kind: Randomized placebo-controlled trial
  insight: Pain and quality-of-life measures favored bromelain; objective swelling reduction was not statistically significant.
  limitation: Small perioperative study and preparation-specific dose.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-bormann-2016
  title: Perioperative Bromelain Therapy after Wisdom Teeth Extraction — A Randomized, Placebo-Controlled, Double-Blinded, Three-Armed, Cross-Over Dose-Finding Study
  authors: Bormann KH et al.
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27601419/
  doi: 10.1002/ptr.5707
  kind: Randomized dose-finding trial
  insight: 3,000 and 4,500 FIP/day were not superior to 1,000 FIP/day for postoperative swelling.
  limitation: Perioperative dental model; no universal activity-unit conversion.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-colletti-2024
  title: "An Evaluation of the Effects of Pineapple-Extract and Bromelain-Based Treatment after Mandibular Third Molar Surgery: A Randomized Three-Arm Clinical Study"
  authors: Colletti A et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38542694/
  doi: 10.3390/nu16060784
  kind: Randomized clinical study
  insight: Provides a contemporary comparative dental surgery estimate for pain and swelling.
  limitation: Multi-arm product context limits attribution to a universal bromelain preparation.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors state no conflicts.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.mdpi.com/2072-6643/16/6/784
- id: ref-delgarm-2025
  title: "Effects of bromelain supplementation on disease activity and quality of life in patients with ulcerative colitis: a randomized, triple-blind, placebo-controlled study"
  authors: Delgarm et al.
  year: 2025
  url: https://doi.org/10.1038/s41598-025-26975-1
  kind: Randomized placebo-controlled trial
  insight: Reported symptom-based ulcerative-colitis activity improvement after 400 mg/day for 8 weeks.
  limitation: Single preliminary study without confirmatory endoscopic benefit.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-leelakanok-2023
  title: "Efficacy and safety of bromelain: A systematic review and meta-analysis"
  authors: Leelakanok N et al.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37157782/
  doi: 10.1177/02601060231173732
  kind: Systematic review and meta-analysis
  insight: Summarizes heterogeneous clinical efficacy and safety findings across bromelain preparations.
  limitation: Underlying studies vary in formulation, activity units, indication and reporting quality.
  funding: Exact funder not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Institutional relationship disclosed for one author; full declaration not recovered.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.1177/02601060231173732
- id: ref-matagne-2017
  title: "The proteolytic system of pineapple stems revisited: Purification and characterization of multiple catalytically active forms"
  authors: Matagne A et al.
  year: 2017
  url: https://doi.org/10.1016/j.phytochem.2017.02.019
  kind: Biochemical characterization
  insight: Shows that stem bromelain is a heterogeneous mixture of active proteases.
  limitation: Biochemical preparation work does not establish clinical effects.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-onken-2008
  title: Bromelain treatment decreases secretion of pro-inflammatory cytokines and chemokines by colon biopsies in vitro
  authors: Onken JE et al.
  year: 2008
  url: https://doi.org/10.1016/j.clim.2007.11.002
  kind: Human tissue experiment
  insight: Ex-vivo inflammatory mediator secretion was reduced in treated colon biopsies.
  limitation: Ex-vivo exposure is not oral clinical efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-metzig-1999
  title: Bromelain proteases reduce human platelet aggregation in vitro, adhesion to bovine endothelial cells and thrombus formation in rat vessels in vivo
  authors: Metzig C et al.
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10218125/
  kind: Laboratory and animal study
  insight: Reports platelet-aggregation effects in vitro.
  limitation: Does not quantify clinical bleeding risk after oral use.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-bradbrook-1978
  title: The effect of bromelain on the absorption of orally administered tetracycline
  authors: Bradbrook ID; McKee PJ; Muir N
  year: 1978
  url: https://doi.org/10.1111/j.1365-2125.1978.tb00888.x
  kind: Human absorption study
  insight: Examined tetracycline absorption during concomitant bromelain exposure.
  limitation: Historical study; interaction relevance to current products is uncertain.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-bromelain-pos
  title: Bromelain-POS 500 F.I.P.-Einheiten, gastro-resistant tablets — Fachinformation
  authors: URSAPHARM Arzneimittel GmbH
  year: 2018
  url: https://www.fachinfo.de/fi/pdf/004757/bromelain-pos-r-500-f-i-p-einheiten-magensaftresistente-tabletten
  kind: Official product information
  insight: Provides activity-unit regimen and label warnings for allergy, coagulation, interactions, pregnancy and lactation.
  limitation: Manufacturer source with product-specific applicability; not a universal bromelain class label.
  funding: Manufacturer-authored product information.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer source; inherent product interest.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.fachinfo.de/fi/pdf/004757/bromelain-pos-r-500-f-i-p-einheiten-magensaftresistente-tabletten
- id: ref-dailymed-nexobrid-2025
  title: NEXOBRID (anacaulase-bcdb), for topical gel
  authors: U.S. Food and Drug Administration; NexoBrid label
  year: 2025
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a2f23ad-78ef-43fa-9864-6bd77aac9e57
  kind: Official prescription label
  insight: Describes topical anacaulase-bcdb pharmacology and burn-eschar indication.
  limitation: Topical prescription product; not oral bromelain supplementation.
  funding: Regulatory label; manufacturer product dossier.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer-label source.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a2f23ad-78ef-43fa-9864-6bd77aac9e57
```

## Legal

```yaml
- jurisdiction: United States
  activity: Topical anacaulase-bcdb prescription use
  status: NEXOBRID is an FDA-approved topical prescription product for burn-eschar removal; this does not establish oral bromelain supplement approval.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a2f23ad-78ef-43fa-9864-6bd77aac9e57
  asOf: 2025-01-01
- jurisdiction: United States
  activity: Oral bromelain dietary-supplement marketing
  status: Dietary supplements are regulated under the applicable supplement framework; no oral bromelain disease-treatment approval is asserted here.
  sourceUrl: https://www.fda.gov/food/dietary-supplements
  asOf: 2026-10-10
```
