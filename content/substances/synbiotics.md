---
slug: synbiotics
name: Synbiotics
subtitle: Live microorganisms combined with selectively utilized microbial substrates
aliases:
  - synbiotic
  - complementary synbiotics
  - synergistic synbiotics
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Microbiome-targeted mixture
tags:
  - selective-microbial-substrate-utilization
  - neonatal-sepsis-or-death
  - probiotic-strain-stool-persistence
  - body-fat-mass
  - postoperative-infection
  - hospital-length-of-stay
  - ibs-symptom-response
  - h-pylori-eradication
accent: "#5B7F6A"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Synbiotics are mixtures of live microorganisms and microbial substrates, not a single absorbed compound. The constituent organisms, substrates, metabolites, and host-microbiota responses do not share one pharmacokinetic elimination half-life.
  sourceId: isapp-2020
  observationId: synbiotics-pk-not-established
kinetics:
  onset: Not established as a class-wide value; biological responses depend on the microorganism, substrate, host, endpoint, and formulation.
  peak: Not established.
  duration: Not established as a shared pharmacokinetic or subjective duration. Persistence of administered organisms varies substantially between formulations and populations.
  bioavailability: Not applicable as a single percentage to this mixture category; live microorganisms and fermentable substrates have distinct gastrointestinal fates.
  metabolism: Substrates may be selectively utilized by resident and/or co-administered microorganisms, depending on formulation; microbial growth, activity, metabolites, and host responses are formulation- and context-specific.
  sourceId: isapp-2020
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

Synbiotics pair live microorganisms with selectively utilized substrates. Effects belong to the specific strain, substrate, dose, product and population; there is no universal class-wide clinical outcome.

## Description

Trials span neonatal sepsis, antibiotic-associated diarrhea, IBS, metabolic endpoints, surgery and organ-specific populations. Stool or microbiome changes are kept separate from patient-important outcomes, and complementary formulations are not assumed to be synergistic without a direct comparison.

## Evidence note

Clinical evidence is formulation-specific and often heterogeneous. Positive signals occur in selected neonatal, gastrointestinal and perioperative settings, while other randomized trials are null or conflicting. Live-microbe infection risk is concentrated in preterm, critically ill, central-line and immunocompromised populations.

## Doses

```yaml
- label: B420 plus polydextrose
  amount: 1 × 10^10 CFU/day plus 12 g/day polydextrose
  quantity: 10000000000
  quantityMax: null
  unit: CFU/day
  ingredient: Bifidobacterium animalis subsp. lactis B420
  formulation: Sachet mixed into a 250 mL smoothie
  route: Oral
  frequency: Daily
  duration: 6 months
  population: Adults with overweight or obesity
  purpose: Body-fat and microbiome trial
  sourceCategory: research
  note: Product-specific exposure; deposit identity and stool qPCR cross-reactivity limit persistence interpretation.
  sourceId: stenman-2016
- label: Prodefen Plus synbiotic
  amount: One sachet/day
  quantity: null
  quantityMax: null
  unit: sachet
  ingredient: LGG plus six additional organisms with FOS
  formulation: FOS 990 mg; LGG 1 × 10^10 CFU plus 1 × 10^9 CFU each of six organisms
  route: Oral
  frequency: Daily, two hours after morning amoxicillin/clavulanate
  duration: 14 days
  population: Adults receiving amoxicillin/clavulanate
  purpose: Antibiotic-associated diarrhea prevention
  sourceCategory: research
  note: Six organisms lacked strain identifiers and investigators received research fees.
  sourceId: ref-prodefen-2020
- label: Neonatal LP202195 plus FOS
  amount: Approximately 1 × 10^9 CFU/day plus 150 mg FOS/day
  quantity: 1000000000
  quantityMax: null
  unit: CFU/day
  ingredient: Lactiplantibacillus plantarum ATCC 202195
  formulation: Oral synbiotic preparation
  route: Oral
  frequency: Daily
  duration: 7 days in the reported neonatal protocol
  population: Newborns in a defined South Asian trial population
  purpose: Sepsis and infection outcomes
  sourceCategory: research
  note: Exact dose and benefit are population-specific and must not be extrapolated to extremely premature infants.
  sourceId: panigrahi-2017
- label: CKD SYNERGY formulation
  amount: 9 × 10^10 CFU/day plus 15 g/day high-molecular-weight inulin mixture
  quantity: 90000000000
  quantityMax: null
  unit: CFU/day
  ingredient: Nine-organism synbiotic mixture
  formulation: High-MW inulin HP plus FOS and GOS; half dose for first 3 weeks
  route: Oral
  frequency: Daily
  duration: Crossover trial duration
  population: Adults with predialysis chronic kidney disease
  purpose: Uremic-toxin and microbiome outcomes
  sourceCategory: research
  note: Organism identities were incompletely disclosed; stool shifts do not establish permanent engraftment.
  sourceId: ref-rossi-2016
```

## Pharmacokinetics

```yaml
- id: synbiotics-pk-not-established
  analyte: Organism plus substrate mixture
  route: Oral
  formulation: Formulation-specific synbiotic products
  population: Not applicable as a single pharmacokinetic population
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Organisms, substrates and metabolites have distinct gastrointestinal fates. Stool persistence or metabolite appearance cannot be converted into a class-wide drug elimination half-life.
  sourceId: isapp-2020
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
- id: synbiotic-neonatal-sepsis
  conceptId: neonatal-sepsis-or-death
  name: Neonatal sepsis or death
  direction: Decreased
  evidence: Human research
  description: In a large randomized trial of rural Indian newborns meeting defined eligibility criteria, a seven-day synbiotic preparation reduced the composite of sepsis or death. The result does not establish benefit for extremely premature or very-low-birth-weight infants.
  sourceId: panigrahi-2017
  population: 4,556 newborns ≥35 weeks and ≥2,000 g without baseline sepsis or major morbidity
  exposure: L. plantarum ATCC 202195 plus FOS, study-specific dose for 7 days
  instrument: Culture-positive sepsis, culture-negative sepsis and death composite
  magnitude: Relative reduction reported in the trial; exact estimate retained in source
  reportType: measured-assessment
  conflictingSourceIds: []
- id: synbiotic-aad
  conceptId: antibiotic-associated-diarrhea-incidence
  name: Antibiotic-associated diarrhea
  direction: Decreased
  evidence: Human research
  description: A 151-participant randomized trial of Prodefen Plus given with amoxicillin/clavulanate reported lower antibiotic-associated diarrhea incidence and better stool consistency. Product strain identifiers were incomplete and commercial involvement was disclosed.
  sourceId: ref-prodefen-2020
  population: Adults receiving amoxicillin/clavulanate
  exposure: One sachet/day for 14 days, two hours after the morning antibiotic dose
  instrument: Diarrhea incidence and stool consistency
  magnitude: Direction favored synbiotic; exact estimate not reproduced here
  reportType: measured-assessment
  conflictingSourceIds: []
- id: synbiotic-ibs
  conceptId: ibs-symptom-response
  name: IBS symptom response
  direction: Variable
  evidence: Human research
  description: Synbiotic IBS evidence is conflicting. A 2024 network meta-analysis found sparse class-level evidence, while a separate nine-strain/FOS randomized trial reported symptom-score and adequate-relief improvements; proprietary formulations and study populations differ.
  sourceId: ref-ibs-network-2024
  population: Adults with IBS in randomized studies
  exposure: Trial-specific strains and substrates
  instrument: IBS-SSS, IBS-GIS or study-specific symptom scales
  magnitude: Conflicting across reviews and proprietary product trial
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-sommermeyer-2024
- id: synbiotic-hpylori
  conceptId: h-pylori-eradication
  name: Helicobacter pylori eradication
  direction: Variable
  evidence: Human research
  description: A 2026 meta-analysis found an ITT eradication advantage for adjunctive synbiotics, but not per-protocol, with low certainty and heterogeneous formulations.
  sourceId: ref-hpylori-2026
  population: Adults and children in six randomized trials
  exposure: Adjunctive synbiotic formulations with eradication therapy
  instrument: H. pylori eradication by trial-defined testing
  magnitude: ITT RR 1.18, 95% CI 1.04–1.34; per-protocol RR 1.06, 95% CI 0.95–1.18
  reportType: measured-assessment
  conflictingSourceIds: []
- id: synbiotic-body-fat
  conceptId: body-fat-mass
  name: Body-fat mass
  direction: Variable
  evidence: Human research
  description: In a factorial randomized trial, the prespecified intention-to-treat analysis did not establish a significant body-fat difference for the B420/polydextrose combination versus placebo. Stool signal detection was not evidence of durable engraftment.
  sourceId: stenman-2016
  population: 225 adults with overweight or obesity
  exposure: B420 plus 12 g/day polydextrose for 6 months
  instrument: Body-fat mass and qPCR stool signal
  magnitude: Primary pairwise combination comparison was not significant
  reportType: measured-assessment
  conflictingSourceIds: []
- id: synbiotic-postoperative-infection
  conceptId: postoperative-infection
  name: Postoperative infection
  direction: Decreased
  evidence: Human research
  description: A systematic review of elective abdominal-surgery trials reported fewer postoperative infections in synbiotic subgroups, but pooled surgeries, organisms, substrates and feeding protocols were heterogeneous.
  sourceId: ref-chowdhury-2020
  population: 1,399 participants in the synbiotic subgroup of elective abdominal-surgery trials
  exposure: Trial-specific perioperative synbiotic products
  instrument: Postoperative infection and hospital outcomes
  magnitude: Synbiotic subgroup RR 0.46, 95% CI 0.33–0.66; heterogeneity varied by endpoint
  reportType: measured-assessment
  conflictingSourceIds: []
- id: synbiotic-ckd-toxin
  conceptId: plasma-tmao-concentration
  name: Uremic toxin biomarkers
  direction: Variable
  evidence: Human research
  description: The CKD SYNERGY trial did not significantly improve indoxyl sulfate, while p-cresyl sulfate fell and stool Bifidobacterium increased. These biomarker changes do not establish renal protection.
  sourceId: ref-rossi-2016
  population: Predialysis adults with chronic kidney disease
  exposure: Nine-organism synbiotic plus inulin/FOS/GOS mixture
  instrument: Indoxyl sulfate, p-cresyl sulfate and stool microbiome measures
  magnitude: Mixed biomarker findings; no established patient-important benefit
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Selective microbial substrate utilization
  description: A synbiotic is defined by a substrate selectively utilized by host microorganisms that confers a health benefit. Whether the relationship is complementary or synergistic requires direct evidence for the specific combination.
  sourceId: isapp-2020
  conceptId: selective-microbial-substrate-utilization
- title: Strain-specific persistence and metabolite production
  description: Stool detection and metabolite changes vary by strain, substrate and host ecology; they do not establish permanent engraftment or a universal mechanism.
  sourceId: panigrahi-2008
  conceptId: probiotic-strain-stool-persistence
```

## Cautions

```yaml
- title: High-risk live-microbe populations
  description: Regulatory warnings identify invasive disease concerns in preterm infants, critically ill patients and those with major immune or barrier vulnerability. RCT safety samples are too small to exclude rare events.
  sourceId: ref-fda-preterm-probiotic
- title: Formulation and strain identity
  description: CFU, deposit identity, storage viability and substrate chemistry differ across products. Results from one formulation should not be generalized to an unnamed synbiotic class.
  sourceId: isapp-2020
- title: Pregnancy and organ impairment evidence gaps
  description: Gestational-diabetes and CKD trials are indication-specific and do not establish a universal pregnancy, renal or hepatic safety profile.
  sourceId: isapp-2020
```

## Claims

```yaml
- id: synbiotic-neonatal-claim
  assertion: A defined neonatal synbiotic reduced sepsis-or-death in one large trial of term or near-term rural Indian newborns.
  relation: associated-with-reduced-neonatal-sepsis-or-death
  participants:
    - entityId: substance:synbiotics
      role: exposure
    - entityId: tag:neonatal-sepsis-or-death
      role: measured-outcome
  context: Defined LP202195 plus FOS neonatal trial
  sourceIds:
    - panigrahi-2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Population and formulation are narrow; no extrapolation to extremely premature infants.
- id: synbiotic-class-heterogeneity
  assertion: Synbiotic effects cannot be generalized across strains, substrates and formulations.
  relation: formulation-specific-evidence
  participants:
    - entityId: substance:synbiotics
      role: intervention-class
    - entityId: tag:selective-microbial-substrate-utilization
      role: mechanism
  context: ISAPP consensus and heterogeneous clinical trials
  sourceIds:
    - isapp-2020
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Class definition does not predict the size or direction of a clinical endpoint.
```

## Interactions

```yaml
- id: synbiotics-antibiotic-coadministration
  name: Antibiotic co-treatment
  otherSlug: null
  summary: Trials intentionally coadministered some synbiotics with antibiotics, but timing, strain viability and product-specific effects differ; no universal separation rule is established.
  sourceId: ref-prodefen-2020
  context: Antibiotic-associated diarrhea prevention studies.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: isapp-2020
  title: The International Scientific Association for Probiotics and Prebiotics consensus statement on the definition and scope of synbiotics
  authors: Swanson KS et al.
  year: 2020
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7581511/
  doi: 10.1038/s41575-020-0344-2
  kind: Scientific consensus statement
  insight: Defines complementary and synergistic synbiotics and their evidence requirements.
  limitation: Consensus definition does not establish efficacy of individual products.
  funding: Meeting support and declarations incompletely extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declarations incomplete in the retrieved record.
  conflictOfInterestStatus: not-assessed
- id: panigrahi-2017
  title: A randomized synbiotic trial to prevent sepsis among infants in rural India
  authors: Panigrahi P et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28813414/
  doi: 10.1038/nature23480
  kind: Randomized placebo-controlled trial
  insight: Defined LP202195 plus FOS reduced a neonatal sepsis/death composite in a large trial.
  limitation: Narrow eligibility and setting; not evidence for extremely premature or VLBW infants.
  funding: NIH extramural support indexed.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Disclosure incomplete.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://doi.org/10.1038/nature23480
- id: panigrahi-2008
  title: Long-term colonization of a Lactobacillus plantarum synbiotic preparation in the neonatal gut
  authors: Panigrahi P et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18607268/
  kind: Human persistence study
  insight: Examined neonatal stool persistence of a defined synbiotic preparation.
  limitation: Stool detection is not permanent engraftment or a clinical outcome.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: stenman-2016
  title: Probiotic With or Without Fiber Controls Body Fat Mass, Associated With Serum Zonulin, in Overweight and Obese Adults — Randomized Controlled Trial
  authors: Stenman LK et al.
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5264483/
  doi: 10.1016/j.ebiom.2016.10.036
  kind: Factorial randomized trial
  insight: Tested B420 with polydextrose and found no established combination body-fat advantage in the prespecified analysis.
  limitation: Industry-sponsored proprietary formulation and stool-qPCR cross-reactivity.
  funding: DuPont Nutrition & Health; Danisco sponsor.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Several authors were DuPont employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5264483/
- id: ref-prodefen-2020
  title: Clinical evaluation of Prodefen Plus in prevention of antibiotic-associated diarrhoea
  authors: Barreiro Guridi C et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/33032474/
  doi: 10.3920/BM2020.0062
  kind: Randomized clinical trial
  insight: Evaluated a multi-strain FOS product during amoxicillin/clavulanate therapy.
  limitation: Six organisms lacked strain IDs and investigators received research fees.
  funding: Industry-associated ITF Research Pharma group.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Two authors were employees; all investigators received research fees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.3920/BM2020.0062
- id: ref-ibs-network-2024
  title: "Efficacy of Probiotics, Prebiotics, Synbiotics, and FMT in IBS: Systematic Review and Network Meta-Analysis"
  authors: Wu J et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38999862/
  doi: 10.3390/nu16132114
  kind: Systematic review and network meta-analysis
  insight: Found sparse and heterogeneous synbiotic IBS evidence.
  limitation: Network comparisons pool distinct formulations and endpoints.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: ref-sommermeyer-2024
  title: Balanced Nine-Strain Synbiotic in Primary-Care IBS
  authors: Sommermeyer H et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38794741/
  doi: 10.3390/nu16101503
  kind: Randomized clinical trial
  insight: Reported symptom and adequate-relief outcomes for a proprietary nine-strain/FOS product.
  limitation: Single proprietary formulation; independent replication and disclosure detail are limited.
  funding: Not fully extracted; product commercially purchased.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Incomplete/unknown.
  conflictOfInterestStatus: not-assessed
- id: ref-hpylori-2026
  title: Adjunctive Synbiotic Therapy for H. pylori Eradication
  authors: Romyasamit C et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42795277/
  doi: 10.3390/life16091409
  kind: Systematic review and meta-analysis
  insight: ITT eradication favored adjunctive synbiotics while per-protocol certainty was low.
  limitation: Six heterogeneous trials and sparse pediatric safety data.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: ref-chowdhury-2020
  title: Perioperative Probiotics or Synbiotics in Elective Abdominal Surgery
  authors: Chowdhury AH et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/31469748/
  doi: 10.1097/SLA.0000000000003581
  kind: Systematic review and meta-analysis
  insight: Reported fewer postoperative infections in pooled synbiotic subgroups.
  limitation: Surgical procedures and formulations were highly heterogeneous.
  funding: Exact award not extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure incomplete.
  conflictOfInterestStatus: not-assessed
- id: ref-rossi-2016
  title: "SYNERGY: A Randomized Trial"
  authors: Rossi M et al.
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26772193/
  doi: 10.2215/CJN.05240515
  kind: Randomized crossover trial
  insight: Examined synbiotic effects on uremic toxins and microbiome measures in CKD.
  limitation: Biomarker endpoints and incompletely disclosed organism identities do not establish renal protection.
  funding: Academic/noncommercial support indexed.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Protocol declared no competing interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/26772193/
- id: ref-fda-preterm-probiotic
  title: Risk of Invasive Disease in Preterm Infants Given Probiotics Formulated to Contain Live Bacteria or Yeast
  authors: U.S. Food and Drug Administration
  year: 2023
  url: https://www.fda.gov/safety/medical-product-safety-information/risk-invasive-disease-preterm-infants-given-probiotics-formulated-contain-live-bacteria-or-yeast
  kind: Regulatory safety communication
  insight: Warns about invasive disease risk from live-microbe products in preterm infants.
  limitation: Regulatory warning is population-specific and not a synbiotic efficacy estimate.
  funding: U.S. government source.
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: Not applicable.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.fda.gov/safety/medical-product-safety-information/risk-invasive-disease-preterm-infants-given-probiotics-formulated-contain-live-bacteria-or-yeast
```

## Legal

```yaml
- jurisdiction: United States
  activity: Synbiotic dietary-supplement marketing
  status: Product labeling and lawful marketing depend on the specific organisms, substrate and claims; no class-wide disease-treatment approval is asserted.
  sourceUrl: https://www.fda.gov/food/dietary-supplements
  asOf: 2026-10-10
- jurisdiction: European Union
  activity: Nutrition and health claims for synbiotic products
  status: Health claims are subject to the EU nutrition-and-health-claims framework; evidence for one formulation does not authorize a generic class claim.
  sourceUrl: https://food.ec.europa.eu/food-safety/labelling-and-nutrition/nutrition-and-health-claims_en
  asOf: 2026-10-10
```
