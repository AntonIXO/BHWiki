---
slug: saccharomyces-boulardii
name: Saccharomyces boulardii
subtitle: Live probiotic yeast lineage within Saccharomyces cerevisiae
aliases:
  - S. boulardii
  - Saccharomyces cerevisiae var. boulardii
  - Saccharomyces cerevisiae variety boulardii
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: probiotic yeast
tags: []
accent: "#9B7653"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No drug-like elimination half-life is established for this live yeast. The French CNCM I-745 product information reports viable gastrointestinal transit without colonization and disappearance from stool about 2 to 5 days after treatment stops; that is gastrointestinal persistence, not an elimination half-life.
  sourceId: ref-ansm-ultra-200
  observationId: elimination-half-life
kinetics:
  onset: Not established
  peak: Not established
  duration: Repeated oral administration produces viable gastrointestinal transit; the French CNCM I-745 label reports disappearance from stool about 2 to 5 days after treatment cessation.
  bioavailability: Systemic bioavailability is not established or an intended pharmacokinetic construct; the organism acts principally during gastrointestinal transit and the French label states that it does not colonize.
  metabolism: Not established as a drug-like metabolic pathway for the living organism.
  sourceId: ref-ansm-ultra-200
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

Saccharomyces boulardii is a live probiotic yeast whose evidence depends on strain deposit, product, population and co-treatment. The clearest signals concern antibiotic-associated diarrhea and selected recurrent *C. difficile* settings, while invasive fungemia is a documented concern in vulnerable patients.

## Description

CNCM I-745 and CNCM I-3799 are distinct deposited strains and must not be treated as interchangeable. Stool recovery and transient gastrointestinal persistence are not a drug-like plasma half-life, and efficacy results from mixed preparations cannot be assigned to every commercial product.

## Evidence note

Evidence is strongest for selected adjunctive gastrointestinal uses and remains heterogeneous across products and strains. Modern trials often exclude severe immunocompromise, critical illness, pregnancy and central-line patients; these gaps matter because rare invasive yeast infection is concentrated in such settings.

## Doses

```yaml
- label: CNCM I-745 microbiome study
  amount: 500 mg twice daily
  quantity: 500
  quantityMax: null
  unit: mg per dose
  ingredient: Saccharomyces boulardii CNCM I-745
  formulation: Oral probiotic capsules
  route: Oral
  frequency: Twice daily
  duration: 14 days
  population: 53 healthy volunteers in a randomized microbiome study
  purpose: Study microbiome and bile-acid responses during antimicrobial exposure
  sourceCategory: research
  note: Research exposure; not a general dose recommendation.
  sourceId: ref-kabbani-2017
- label: Recurrent C. difficile adjunct
  amount: 1 g/day
  quantity: 1
  quantityMax: null
  unit: g/day
  ingredient: Saccharomyces boulardii; deposit not established in the cited abstract
  formulation: Oral probiotic preparation
  route: Oral
  frequency: Daily
  duration: 4 weeks with standard antibiotic therapy
  population: Adults with recurrent or initial C. difficile disease
  purpose: Adjunctive recurrence trial
  sourceCategory: research
  note: Benefit was concentrated in recurrent disease and cannot be generalized across strains.
  sourceId: ref-mcfarland-1994
- label: CNCM I-745 recurrent CDI trial
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Saccharomyces boulardii CNCM I-745
  formulation: Two 250-mg capsules every 12 hours
  route: Oral
  frequency: Every 12 hours
  duration: 10 days with vancomycin
  population: 120 adults with mild-to-moderate C. difficile infection
  purpose: Adjunctive clinical cure and recurrence trial
  sourceCategory: research
  note: Severe CDI, severe immunocompromise and pregnancy were excluded.
  sourceId: ref-chitapanarux-2025
- label: CNCM I-3799 pediatric acute diarrhea
  amount: 1 × 10^10 CFU/day
  quantity: 10000000000
  quantityMax: null
  unit: CFU/day
  ingredient: Saccharomyces boulardii CNCM I-3799
  formulation: Two sachets of 5 × 10^9 CFU
  route: Oral
  frequency: Twice daily
  duration: 5 days with oral rehydration and zinc
  population: Infants and children with acute diarrhea
  purpose: Recovery-time trial
  sourceCategory: research
  note: Strain-specific result; do not transfer to CNCM I-745.
  sourceId: ref-mourey-2020
```

## Pharmacokinetics

```yaml
- id: elimination-half-life
  analyte: Viable Saccharomyces boulardii recovered from stool
  route: Oral
  formulation: Live probiotic yeast; product and strain dependent
  population: Healthy volunteers and label population
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The French CNCM I-745 label describes gastrointestinal transit without colonization and disappearance from stool approximately 2–5 days after treatment stops. This is persistence/recovery, not a plasma elimination half-life.
  sourceId: ref-ansm-ultra-200
  modelEligible: false
```

## Modifiers

```yaml
- label: Antibiotic co-treatment
  effect: Higher fecal recovery during ampicillin exposure
  detail: In healthy volunteers, ampicillin changed fecal concentration and recovery of CNCM I-745. The finding reflects gut ecology, not systemic absorption or a universal antibiotic interaction.
  sourceId: ref-kabbani-2017
  observationId: elimination-half-life
  factorType: other
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- id: sb-aad-incidence
  conceptId: antibiotic-associated-diarrhea-incidence
  name: Antibiotic-associated diarrhea incidence
  direction: Decreased
  evidence: Human research
  description: A meta-analysis of 21 randomized trials found lower antibiotic-associated diarrhea incidence with S. boulardii overall, but adult and pediatric estimates differed and strain/deposit identity was often incomplete.
  sourceId: ref-szajewska-2015
  population: Mixed adult and pediatric antibiotic-exposed populations
  exposure: Trial-specific S. boulardii preparations
  instrument: Diarrhea incidence during or after antibiotics
  magnitude: 18.7% to 8.5%; RR 0.47, 95% CI 0.38–0.57; NNT approximately 10
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-pozzoni-2012
- id: sb-aad-hospital-null
  conceptId: antibiotic-associated-diarrhea-incidence
  name: Antibiotic-associated diarrhea in elderly inpatients
  direction: Variable
  evidence: Human research
  description: An elderly hospitalized-patient trial did not reduce antibiotic-associated diarrhea or C. difficile diarrhea with S. boulardii; mortality also did not differ.
  sourceId: ref-pozzoni-2012
  population: Elderly hospitalized adults receiving antibiotics
  exposure: Capsule twice daily from within 48 hours of antibiotic initiation through seven days after withdrawal
  instrument: Diarrhea and C. difficile incidence
  magnitude: AAD 15.1% versus 13.3%; OR 1.16, 95% CI 0.53–2.56
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-szajewska-2015
- id: sb-cdi-recurrence
  conceptId: clostridioides-difficile-recurrence
  name: Recurrent C. difficile disease
  direction: Decreased
  evidence: Human research
  description: The modern CNCM I-745 adjunct trial reported less recurrence with vancomycin plus S. boulardii, while clinical cure was similar between groups. Its single-center sample and exclusions limit generalization.
  sourceId: ref-chitapanarux-2025
  population: 120 adults with mild-to-moderate C. difficile infection
  exposure: 1,000 mg/day CNCM I-745 with vancomycin 125 mg every 6 hours for 10 days
  instrument: Clinical cure, recurrence and global cure
  magnitude: Recurrence 1.69% versus 13.11%, p=0.032; clinical cure 98.31% versus 98.36%
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-mcfarland-1994
- id: sb-pediatric-diarrhea-duration
  conceptId: diarrhea-duration
  name: Pediatric acute-diarrhea duration
  direction: Decreased
  evidence: Human research
  description: A systematic review found shorter pediatric acute-diarrhea duration on average, but heterogeneity was high and evidence quality was very low. Results apply to mixed preparations unless strain specified.
  sourceId: ref-szajewska-2020
  population: Children with acute gastroenteritis in randomized trials
  exposure: Trial-specific S. boulardii preparations
  instrument: Diarrhea duration
  magnitude: Mean difference −1.06 days, 95% CI −1.32 to −0.79; I²=90%
  reportType: measured-assessment
  conflictingSourceIds: []
- id: sb-cdi-microbiome
  conceptId: gut-microbiota-composition
  name: Gut microbiome composition
  direction: Variable
  evidence: Human research
  description: CNCM I-745 altered fecal microbiome and bile-acid measurements during antibiotic exposure in healthy volunteers. These are mechanistic or biomarker outcomes, not proof of symptom benefit.
  sourceId: ref-kabbani-2017
  population: Healthy volunteers
  exposure: 500 mg CNCM I-745 twice daily for 14 days with or without amoxicillin/clavulanate
  instrument: Fecal microbiome and bile-acid analyses
  magnitude: Study-specific compositional changes; no patient-important endpoint
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Transient gastrointestinal transit
  description: The administered yeast is recovered from stool and the French label describes passage without colonization. Transit and recovery are strain- and product-dependent.
  sourceId: ref-ansm-ultra-200
- title: Protease modulation of C. difficile toxin effects
  description: Experimental work reports a S. boulardii protease that reduces toxin A effects in rat ileum. This preclinical mechanism does not establish human clinical efficacy.
  sourceId: ref-castagliuolo-1996
  conceptId: clostridioides-difficile-toxin-proteolysis
```

## Cautions

```yaml
- title: Invasive yeast infection risk
  description: The French CNCM I-745 label contraindicates use in critically ill, immunodeficient or central-venous-catheter patients because of fungemia risk. Rare invasive infections are concentrated in vulnerable populations.
  sourceId: ref-ansm-ultra-200
- title: Fungemia pharmacovigilance signal
  description: A Finnish hospital case-control study associated probiotic S. boulardii exposure with Saccharomyces fungemia; a separate exposure-denominator study found ICU admission associated with higher odds. Species and strain attribution were imperfect.
  sourceId: ref-rannikko-2021
- title: Pregnancy and lactation evidence gap
  description: Pregnancy follow-up is insufficient in the French label, and key modern trials excluded pregnancy or breastfeeding. Avoid treating this as a demonstrated safe population.
  sourceId: ref-ansm-ultra-200
- title: Antifungal co-treatment
  description: The French label advises against combining viable S. boulardii with oral or systemic antifungal treatment. Antibiotics have been coadministered in trials and are not a class contraindication.
  sourceId: ref-ansm-ultra-200
```

## Claims

```yaml
- id: sb-aad-claim
  assertion: S. boulardii may reduce antibiotic-associated diarrhea incidence in selected populations, but the estimate is strain- and product-dependent.
  relation: associated-with-reduced-antibiotic-associated-diarrhea
  participants:
    - entityId: substance:saccharomyces-boulardii
      role: exposure
    - entityId: tag:antibiotic-associated-diarrhea-incidence
      role: measured-outcome
  context: Randomized trials during antibiotic therapy
  sourceIds:
    - ref-szajewska-2015
  conflictingSourceIds:
    - ref-pozzoni-2012
  assessment: not-formally-assessed
  limitation: Many trials lack deposit-level identity and results are heterogeneous.
- id: sb-fungemia-claim
  assertion: Invasive Saccharomyces infection is a documented rare risk concentrated in ICU, central-line and immunocompromised settings.
  relation: associated-with-invasive-fungemia-risk
  participants:
    - entityId: substance:saccharomyces-boulardii
      role: exposure
    - entityId: tag:saccharomyces-fungemia
      role: safety-outcome
  context: Pharmacovigilance and hospital observational evidence
  sourceIds:
    - ref-ansm-ultra-200
    - ref-rannikko-2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Case-series and observational data cannot estimate risk for ordinary community users.
```

## Interactions

```yaml
- id: sb-systemic-antifungal
  name: Oral or systemic antifungals
  otherSlug: null
  summary: The product label advises against coadministration because antifungal therapy may act directly on the live yeast.
  sourceId: ref-ansm-ultra-200
  context: Label-level organism viability interaction; not a plasma pharmacokinetic interaction.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ref-ansm-ultra-200
  title: ULTRA-LEVURE 200 mg, gélule — Summary of Product Characteristics
  authors: French medicines database / ANSM
  year: 2026
  url: https://base-donnees-publique.medicaments.gouv.fr/medicament/63398083/extrait
  kind: Official medicinal-product label
  insight: Identifies CNCM I-745, product handling, transit, contraindications and interaction precautions.
  limitation: Product-specific French label; not a class-wide efficacy estimate.
  funding: Public regulator record; marketing authorization held by Biocodex.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer dossier underlies the label.
  conflictOfInterestStatus: declared
  disclosureUrl: https://base-donnees-publique.medicaments.gouv.fr/medicament/63398083/extrait
- id: ref-kabbani-2017
  title: Prospective randomized controlled study on the effects of Saccharomyces boulardii CNCM I-745 and amoxicillin-clavulanate or the combination on the gut microbiota of healthy volunteers
  authors: Kabbani TA et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27973989/
  doi: 10.1080/19490976.2016.1267890
  kind: Randomized human microbiome study
  insight: Examined fecal recovery and microbiome effects of CNCM I-745 with or without antibiotics.
  limitation: Healthy volunteers and biomarker endpoints do not establish clinical benefit.
  funding: Beth Israel Deaconess Medical Center lead sponsor; Biocodex collaborator.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Industry collaboration present; complete publication disclosure not recovered.
  conflictOfInterestStatus: declared
  disclosureUrl: https://clinicaltrials.gov/study/NCT01473368
- id: ref-szajewska-2015
  title: "Systematic review with meta-analysis: Saccharomyces boulardii in the prevention of antibiotic-associated diarrhoea"
  authors: Szajewska H; Kołodziej M
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26216624/
  doi: 10.1111/apt.13344
  kind: Systematic review and meta-analysis
  insight: Found lower antibiotic-associated diarrhea incidence across 21 randomized trials.
  limitation: Mixed products and incomplete strain/deposit identification; adult and pediatric effects differ.
  funding: Exact funder not extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure incomplete in retrieved record.
  conflictOfInterestStatus: not-assessed
- id: ref-pozzoni-2012
  title: "Saccharomyces boulardii for the prevention of antibiotic-associated diarrhea in adult hospitalized patients"
  authors: Pozzoni P et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22472744/
  doi: 10.1038/ajg.2012.56
  kind: Randomized placebo-controlled trial
  insight: Elderly inpatient trial with null antibiotic-associated diarrhea result.
  limitation: Single center; product/deposit identity not established in the abstract.
  funding: Not extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure incomplete.
  conflictOfInterestStatus: not-assessed
- id: ref-mcfarland-1994
  title: A randomized placebo-controlled trial of Saccharomyces boulardii in combination with standard antibiotics for Clostridium difficile disease
  authors: McFarland LV et al.
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/8201735/
  kind: Randomized placebo-controlled trial
  insight: Historical adjunct trial with recurrence signal concentrated in recurrent disease.
  limitation: Older study with incomplete strain and disclosure metadata; severe immunosuppression excluded.
  funding: Non-U.S.-government support indexed; exact source unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Older disclosure incomplete.
  conflictOfInterestStatus: not-assessed
- id: ref-chitapanarux-2025
  title: "Efficacy and safety of Saccharomyces boulardii as adjunct therapy with Vancomycin in treating Clostridioides difficile infection: A randomized controlled trial"
  authors: Chitapanarux T et al.
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40457042/
  doi: 10.1038/s41598-025-04986-2
  kind: Randomized controlled trial
  insight: In mild-to-moderate CDI, CNCM I-745 reduced recurrence when added to vancomycin without changing initial clinical cure.
  limitation: Small single-center trial; severe CDI, severe immunocompromise and pregnancy excluded.
  funding: Faculty of Medicine, Chiang Mai University grant MC046-65.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12130261/
- id: ref-mourey-2020
  title: A Multicenter, Randomized, Double-blind, Placebo-controlled Trial of Saccharomyces boulardii in Infants and Children With Acute Diarrhea
  authors: Mourey F et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32796401/
  doi: 10.1097/INF.0000000000002849
  kind: Randomized placebo-controlled trial
  insight: Evaluated CNCM I-3799 at 1 × 10^10 CFU/day with oral rehydration and zinc.
  limitation: Strain-specific pediatric result; cannot be reassigned to I-745.
  funding: Proprietary Lesaffre strain involvement; exact sponsor not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-szajewska-2020
  title: "Systematic review with meta-analysis: Saccharomyces boulardii for treating acute gastroenteritis in children — a 2020 update"
  authors: Szajewska H; Kołodziej M; Zalewski BM
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32056266/
  doi: 10.1111/apt.15659
  kind: Systematic review and meta-analysis
  insight: Found shorter pediatric diarrhea duration on average with substantial heterogeneity.
  limitation: Very-low-quality evidence and mixed preparations.
  funding: Not extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure incomplete.
  conflictOfInterestStatus: not-assessed
- id: ref-castagliuolo-1996
  title: Saccharomyces boulardii protease inhibits Clostridium difficile toxin A effects in the rat ileum
  authors: Castagliuolo I et al.
  year: 1996
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC174512/
  kind: Preclinical mechanism study
  insight: Reports protease-mediated attenuation of toxin A effects in rat ileum.
  limitation: Animal experiment; not direct human efficacy evidence.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-rannikko-2021
  title: Fungemia and Other Fungal Infections Associated with Use of Saccharomyces boulardii Probiotic Supplements
  authors: Rannikko J et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34287140/
  doi: 10.3201/eid2708.210018
  kind: Retrospective case-control study
  insight: Associated probiotic use with Saccharomyces fungemia in Finnish hospitals.
  limitation: Retrospective design and incomplete molecular strain attribution.
  funding: Academic/public-health research; exact funder not extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure incomplete.
  conflictOfInterestStatus: not-assessed
- id: ref-wombwell-2021
  title: Incidence of Saccharomyces cerevisiae fungemia in hospitalised patients administered Saccharomyces boulardii probiotic
  authors: Wombwell E; Bransteitter B; Gillen LR
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34585799/
  kind: Hospital exposure-denominator study
  insight: Quantified fungemia among exposed hospital inpatients and identified ICU association.
  limitation: Microbiology could not distinguish S. cerevisiae from S. boulardii.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure incomplete.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: France
  activity: CNCM I-745 medicinal-product use
  status: Ultra-Levure is a medicinal product with a product-specific diarrhea indication and contraindications for high-risk patients.
  sourceUrl: https://base-donnees-publique.medicaments.gouv.fr/medicament/63398083/extrait
  asOf: 2026-10-10
- jurisdiction: United States
  activity: S. boulardii dietary-supplement marketing
  status: Dietary-supplement status and product labeling are formulation-specific; this page does not assert FDA approval as a drug.
  sourceUrl: https://www.fda.gov/food/dietary-supplements/information-consumers-using-dietary-supplements
  asOf: 2026-10-10
```
