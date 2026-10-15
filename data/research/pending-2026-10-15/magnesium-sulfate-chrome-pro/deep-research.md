---
id: magnesium-sulfate
slug: magnesium-sulfate
name: Magnesium sulfate
aliases:
  - Magnesium sulphate
  - Epsom salt (heptahydrate)
category: mineral-salt
formula: MgSO4
molecularWeight: 120.37
pubchemCid: 24083
identityForm: anhydrous
editorialStatus: sourced-draft
reviewedAt: "2026-10-15"
x-shape:
  - id
  - slug
  - name
  - aliases
  - category
  - formula
  - molecularWeight
  - pubchemCid
  - identityForm
  - editorialStatus
  - reviewedAt
  - x-shape
  - summary
  - description
  - evidenceNote
  - doses
  - pharmacokinetics
  - modifiers
  - effects
  - outcomes
  - mechanisms
  - cautions
  - claims
  - interactions
  - experienceLinks
  - references
  - legal
---

## Summary

Magnesium sulfate has distinct uses that cannot be treated as interchangeable: oral saline laxation, parenteral magnesium replacement, obstetric seizure prevention or treatment, and other indication-specific hospital interventions. Its strongest large-trial evidence concerns preventing eclampsia and reducing recurrent eclamptic seizures—not improving health in magnesium-replete supplement users. (sourceId: oral-label; sourceId: injection-label; sourceId: magpie; sourceId: eclampsia-trial)

Oral sulfate supplementation has produced some favorable metabolic measurements in a small diabetes trial, but a larger comparison with citrate, oxide, and placebo found no overall arterial-stiffness or blood-pressure benefit. Asthma findings depend on route, severity, and endpoint; several substantial trials were negative. Renal impairment increases the risk of potentially fatal magnesium accumulation. (sourceId: solati; sourceId: schutten; sourceId: silverman; sourceId: three-mg; sourceId: premix-label)

## Description

Anhydrous magnesium sulfate is MgSO4, molecular weight 120.37 g/mol. Epsom salt and the cited injectable products contain magnesium sulfate heptahydrate, MgSO4·7H2O, approximately 246.48 g/mol. Hydration therefore changes the relationship between salt mass and magnesium content. Calculated elemental-magnesium fractions are approximately 20.2% for anhydrous sulfate and 9.86% for the heptahydrate. One gram of heptahydrate supplies approximately 98.6 mg magnesium, 4.06 mmol, or 8.12 mEq—not 1 g elemental magnesium. (sourceId: pubchem; sourceId: injection-label)

“Elemental magnesium” describes the magnesium content of a preparation, not a separate equivalent dose of the entire salt. Injectable gram doses below refer to magnesium sulfate salt unless explicitly identified as elemental magnesium. The 2022 oral comparison used sulfate material reported as 17.4% magnesium; its capsule mass cannot be reconstructed using the heptahydrate fraction. Its citrate and oxide arms are identified separately, not treated as sulfate evidence. (sourceId: injection-label; sourceId: schutten)

## Evidence note

Clinical outcomes, physiological measurements, and labeling claims are distinguished below. A reduced seizure rate is not equivalent to increased urinary magnesium; a spirometry improvement is not necessarily reduced hospitalization. The favorable diabetes findings coexist with null HbA1c and insulin-resistance findings. The arterial-stiffness trial’s positive sulfate subgroup was exploratory, not a replacement for its overall null result. (sourceId: magpie; sourceId: silverman; sourceId: solati; sourceId: schutten)

The vascular trial’s registry lists 162 planned participants; its publication reports 164 randomized participants. Its industry and public–private support and author employment disclosures are retained. Missing historical funding or conflict statements are recorded as unavailable or unverified, never as proof of independence. (sourceId: vascular-registry; sourceId: schutten)

## Doses

```yaml
- label: Oral occasional-constipation labeling
  ingredient: Magnesium sulfate heptahydrate USP
  route: oral
  population: Adults and children aged 12 years or older
  amount: "2–4 level teaspoons dissolved in 8 ounces of water"
  elementalMagnesium: "990–1980 mg per dose, calculated from the label's 495 mg per teaspoon"
  frequency: "Label permits no more than two doses daily, with a repeat dose after four hours"
  duration: Short-term laxative use
  sourceCategory: official-label
  note: "This is a cathartic exposure, not a routine nutritional supplementation regimen."
  sourceId: oral-label

- label: Oral vascular trial
  ingredient: Elemental magnesium supplied as magnesium sulfate
  route: oral
  amount: "450 mg elemental magnesium daily"
  formulation: "Six capsules daily; 75 mg elemental magnesium per capsule; sulfate material reported as 17.4% magnesium"
  frequency: Two capsules three times daily
  duration: 24 weeks
  population: Overweight or slightly obese adults
  comparator: Equal-elemental-dose magnesium citrate, magnesium oxide, or placebo
  sourceCategory: human-randomized-trial
  sourceId: schutten

- label: Oral diabetes trial
  ingredient: Elemental magnesium supplied as magnesium sulfate
  route: oral
  amount: "300 mg elemental magnesium daily"
  formulation: "Three capsules containing 100 mg elemental magnesium each"
  frequency: One capsule with each meal
  duration: Three months
  population: Adults with type 2 diabetes receiving adjusted usual medication
  comparator: Matched placebo
  sourceCategory: human-randomized-trial
  sourceId: solati

- label: Obstetric injectable labeling
  ingredient: Magnesium sulfate heptahydrate
  route: intravenous
  amount: "4–6 g loading dose over 15 minutes, followed by 1–2 g/hour"
  population: Pregnant patients with preeclampsia or eclampsia
  purpose: Seizure prevention, treatment, or prevention of recurrence
  formulation: The cited premixed product in 5% dextrose
  sourceCategory: official-label
  note: "Label-based hospital regimen, with infusion control and clinical/laboratory monitoring; not a supplement dose."
  sourceId: premix-label

- label: Deficiency replacement example
  ingredient: Magnesium sulfate heptahydrate
  route: intravenous
  amount: "5 g in one liter of compatible infusion fluid over three hours"
  population: Patients with magnesium deficiency
  sourceCategory: official-label
  note: "One regimen in the cited 50% injection label, not a universal replacement protocol. That label also describes adult parenteral-nutrition amounts of 1–3 g salt daily."
  sourceId: injection-label

- label: Acute adult asthma trial exposures
  ingredient: Magnesium sulfate
  amount: "2 g intravenously over 20 minutes, or 500 mg nebulized three times over one hour"
  population: Adults presenting with severe acute asthma
  comparator: Matched placebo alongside standard asthma treatment
  sourceCategory: human-randomized-trial
  note: "Separate treatment arms, not a combined regimen; neither route produced a statistically significant primary-outcome benefit."
  sourceId: three-mg
```

## Pharmacokinetics

```yaml
- label: Oral absorption at cathartic exposure
  population: Six healthy men
  exposure: "13.9 g USP magnesium sulfate, equivalent to 56.5 mmol magnesium, divided into four hourly doses"
  observation: "Baseline-corrected urinary magnesium recovery averaged 4.0% ± 2.9% over 24 hours and 6.9% ± 7.0% over 72 hours."
  interpretation: Absorption was limited and highly variable under these conditions.
  limitation: "Urinary recovery is not absolute oral bioavailability: there was no intravenous reference, and retention and renal handling affect recovery. All participants developed mild-to-moderate diarrhea."
  sourceId: morris

- label: Equal-elemental-dose comparison
  exposure: "450 mg/day elemental magnesium for 24 weeks"
  observation: "Citrate, oxide, and sulfate increased plasma magnesium; citrate produced a larger increase in 24-hour urinary magnesium than sulfate or oxide."
  limitation: "These biomarkers do not establish superior clinical efficacy, a sulfate-specific absolute absorption fraction, or brain magnesium delivery."
  sourceId: schutten

- label: Intravenous disposition and half-life
  population: Preeclamptic women described in prescribing information
  observation: "The label reports an average half-life of approximately 4–5 hours and systemic clearance of approximately 4–5 L/hour."
  distribution: Approximately 30% of magnesium is albumin-bound.
  elimination: Renal excretion depends on serum magnesium concentration and glomerular filtration.
  limitation: "These are population-specific magnesium disposition estimates, not a universal half-life for oral Epsom salt, tissue magnesium, or patients with renal failure."
  sourceId: premix-label

- label: Onset is not elimination half-life
  observation: "The injection label describes immediate intravenous anticonvulsant onset with an effect lasting about 30 minutes; intramuscular onset is about one hour, with effects lasting three to four hours."
  limitation: "Single-administration pharmacodynamic descriptions do not define the duration of a maintained infusion or justify substituting oral administration."
  sourceId: injection-label
```

## Modifiers

```yaml
- label: Renal impairment and oliguria
  effect: Reduced elimination increases systemic exposure and toxicity risk.
  labelLimit: "The cited obstetric premix label limits magnesium sulfate to 20 g over 48 hours in severe renal impairment, alongside reduced or individualized maintenance and frequent monitoring."
  limitation: "This ceiling is not a guaranteed safe dose. Urine output, serum concentrations, respiration, and reflexes remain relevant."
  sourceId: premix-label

- label: Baseline vascular status
  observation: "An exploratory sulfate subgroup with baseline carotid–femoral pulse-wave velocity at least 9 m/s had a reduction versus placebo of 1.4 m/s."
  uncertainty: "95% confidence interval, 0.1–2.7 m/s reduction"
  limitation: "The trial was not powered for subgroup analyses; this finding does not overturn the overall null result."
  sourceId: schutten

- label: Gestational age and study regimen
  observation: "MAGENTA did not establish improved survival without cerebral palsy after a 4 g exposure at 30–34 weeks."
  limitation: Its population and regimen differ from trials enrolling pregnancies at earlier gestations.
  sourceId: magenta

- label: Acute asthma severity
  observation: "In the Silverman trial, spirometric benefit was concentrated among participants whose initial FEV1 was below 25% predicted."
  limitation: "An effect within a severe-obstruction subgroup is not evidence for routine oral supplementation, maintenance asthma treatment, or a nebulized equivalent."
  sourceId: silverman
```

## Effects

```yaml
- label: Laxation
  route: oral
  observation: The OTC label describes a bowel movement generally occurring within 30 minutes to six hours.
  evidenceType: Product-label effect
  limitation: "This is not evidence for detoxification, systemic magnesium repletion, or improved long-term health."
  sourceId: oral-label

- label: Magnesium replacement
  route: parenteral
  observation: The injection label describes correction of plasma magnesium deficiency and associated deficiency manifestations.
  evidenceType: Labeled clinical replacement use
  limitation: "Treating established deficiency is distinct from adding magnesium to magnesium-replete individuals."
  sourceId: injection-label

- label: Vascular and neuromuscular effects
  route: parenteral
  observation: Vasodilation, reduced neuromuscular transmission, and central nervous system depression occur with systemic magnesium exposure.
  limitation: "Flushing or lowered blood pressure can be adverse pharmacologic effects; they are not themselves evidence of cardiovascular prevention."
  sourceId: premix-label
```

## Outcomes

```yaml
- label: Oral arterial stiffness and blood pressure
  study: Schutten 2022
  design: Randomized double-blind four-arm trial
  population: "164 overweight or slightly obese adults; 46 allocated sulfate and 26 placebo"
  dose: "450 mg/day elemental magnesium as sulfate for 24 weeks"
  comparator: Placebo, with citrate and oxide arms at the same elemental dose
  result: "No overall improvement in arterial stiffness or blood pressure. Sulfate versus placebo carotid–femoral pulse-wave velocity difference was −0.3 m/s, 95% CI −1.0 to 0.3."
  limitation: "Primarily magnesium-replete population; surrogate endpoints, not cardiovascular events. The main confirmatory comparison concerned citrate; other-formulation comparisons were exploratory."
  sourceId: schutten

- label: Oral metabolic outcomes in diabetes
  study: Solati 2014
  design: Randomized double-blind placebo-controlled trial
  population: "54 adults randomized; 47 completed, including 25 sulfate and 22 placebo recipients"
  dose: "300 mg/day elemental magnesium as sulfate for three months"
  comparator: Placebo plus usual diabetes and cardiovascular medication management
  result: "End-of-study fasting glucose was 125.8 versus 136.5 mg/dL; postprandial glucose, blood pressure, and LDL cholesterol also favored sulfate."
  nullFindings: "No significant between-group benefit for HbA1c, HOMA-IR, fasting insulin, or serum magnesium."
  limitation: "Small completer analysis, unequal attrition, multiple endpoints, and monthly medication adjustment; no demonstration of fewer diabetic complications."
  sourceId: solati

- label: Prevention of eclampsia
  study: Magpie 2002
  design: Randomized placebo-controlled international trial
  population: 10141 women with preeclampsia
  dose: "4 g intravenous loading dose followed by a protocolized intravenous or intramuscular maintenance regimen for 24 hours; intravenous maintenance was 1 g/hour"
  comparator: Matching placebo
  result: "Eclampsia occurred in 40 women, 0.8%, versus 96, 1.9%; relative risk approximately 0.42, 95% CI 0.29–0.60."
  nullFindings: "Maternal mortality reduction was inconclusive, RR 0.55, 95% CI 0.26–1.14. Baby mortality was not reduced."
  adverseEffects: Reported side effects occurred in 24% versus 5%.
  limitation: "Hospital obstetric seizure prevention, not general seizure prevention or nutritional supplementation."
  sourceId: magpie

- label: Recurrent eclamptic seizures
  study: Collaborative Eclampsia Trial 1995
  design: International randomized comparisons
  population: "1687 women enrolled; outcome data available for 1680"
  intervention: Protocolized parenteral magnesium sulfate
  comparator: Diazepam or phenytoin in separate comparisons
  result: "Recurrent convulsions occurred in 13.2% versus 27.9% against diazepam, and 5.7% versus 17.1% against phenytoin."
  nullFindings: Maternal mortality differences were not statistically conclusive.
  limitation: "Exact administration schedules were not recovered from the accessed abstract; modern label regimens are not substituted as historical trial doses."
  sourceId: eclampsia-trial

- label: Earlier-preterm fetal neuroprotection
  study: BEAM 2008
  design: Randomized placebo-controlled trial
  population: 2241 women at imminent risk of delivery at 24–31 weeks
  dose: "6 g intravenous magnesium sulfate loading dose, then 2 g/hour"
  comparator: Matching placebo
  primaryOutcome: "Death or moderate/severe cerebral palsy was 11.3% versus 11.7%; RR 0.97, 95% CI 0.77–1.23."
  secondaryOutcome: "Moderate/severe cerebral palsy among surviving children was 1.9% versus 3.5%; RR 0.55, 95% CI 0.32–0.95."
  assessmentTime: Cerebral palsy assessed at two years or older
  limitation: "The favorable prespecified component must be retained alongside the null primary composite and absence of a mortality benefit."
  sourceId: beam

- label: Later-preterm fetal neuroprotection
  study: MAGENTA 2023
  design: Randomized placebo-controlled trial
  population: "1433 pregnant participants and 1679 infants at 30–34 weeks"
  dose: "Single 4 g intravenous magnesium sulfate exposure"
  comparator: Placebo
  result: "Death or cerebral palsy at two years was 3.3% versus 2.7%; adjusted RR 1.19, 95% CI 0.65–2.18."
  adverseEffects: "Maternal adverse events were 77% versus 20%. Major postpartum hemorrhage was 3.4% versus 1.7%, a secondary-outcome signal."
  limitation: "Primary outcome available for 81% of offspring; limited power for small differences. Favorable neonatal respiratory secondary outcomes were among numerous comparisons."
  sourceId: magenta

- label: Adult asthma spirometry
  study: Silverman 2002
  design: Multicenter randomized placebo-controlled trial
  population: "248 adults with acute asthma and FEV1 no greater than 30% predicted"
  dose: "2 g intravenous magnesium sulfate"
  comparator: Placebo; both groups received albuterol and intravenous methylprednisolone
  result: "At 240 minutes, FEV1 was 48.2% versus 43.5% predicted; difference 4.7 percentage points, 95% CI 0.29–9.3."
  nullFindings: No overall reduction in hospital admission.
  limitation: Physiological improvement did not establish an overall hospitalization benefit.
  sourceId: silverman

- label: Adult asthma hospitalization and breathlessness
  study: 3Mg
  design: Double-blind randomized three-arm trial
  population: 1109 adults with severe acute asthma
  dose: "2 g intravenous magnesium sulfate, or nebulized 500 mg three times"
  comparator: Matched placebo alongside standard treatment
  result: "Admission within seven days was 72% with intravenous magnesium versus 78% with placebo; OR 0.73, 95% CI 0.51–1.04. Nebulized magnesium yielded OR 0.96, 95% CI 0.65–1.40."
  nullFindings: No significant improvement in primary breathlessness scores; neither admission comparison was statistically significant.
  limitation: "Life-threatening presentations were excluded; recruitment stopped below target. Confidence intervals do not prove complete absence of intravenous benefit."
  sourceId: three-mg

- label: Pediatric nebulized asthma treatment
  study: Schuh 2020
  design: Multicenter randomized double-blind trial
  population: 818 children aged 2–17 years with refractory moderate-to-severe acute asthma
  dose: "Three nebulized treatments, each containing 600 mg magnesium sulfate plus albuterol"
  comparator: Tonicity-matched saline placebo plus albuterol
  result: "Hospitalization within 24 hours was 43.5% versus 47.7%; absolute difference −4.2 percentage points, 95% CI −11.0 to 2.8."
  nullFindings: No significant improvement in respiratory assessment score, respiratory rate, or oxygen saturation.
  limitation: "A nebulized-treatment result, not a test of intravenous rescue therapy."
  sourceId: schuh

- label: Torsades de pointes
  study: Tzivoni 1988
  design: Uncontrolled consecutive case series
  population: 12 patients with QT-prolongation-associated torsades
  dose: "One or two 2 g intravenous magnesium sulfate boluses; some patients also received maintenance infusions"
  result: "Torsades stopped after one bolus in nine patients and after a second in three."
  contrastingFinding: Treatment was ineffective in five additional patients with polymorphic ventricular tachycardia but normal QT intervals.
  limitation: "No randomized comparator; this does not establish benefit for all ventricular arrhythmias."
  sourceId: torsades

- label: Acute myocardial infarction mortality
  study: MAGIC 2002
  design: Randomized double-blind placebo-controlled trial
  population: 6213 high-risk patients with ST-elevation myocardial infarction
  dose: "2 g intravenous magnesium sulfate over 15 minutes, followed by 17 g over 24 hours"
  comparator: Matching placebo
  result: "Thirty-day mortality was 15.3% versus 15.2%; OR 1.0, 95% CI 0.9–1.2."
  limitation: "No mortality benefit; an acute hospital intervention, not an oral primary-prevention trial."
  sourceId: magic

- label: Acute stroke disability
  study: FAST-MAG 2015
  design: Randomized placebo-controlled prehospital trial
  population: 1700 patients with suspected acute stroke
  dose: "4 g intravenous magnesium sulfate loading dose, followed by 16 g over 24 hours"
  comparator: Matching placebo
  result: "No improvement in 90-day modified Rankin disability distribution; mean score 2.7 in both groups. Mortality was 15.4% versus 15.5%."
  limitation: "Very early administration did not translate preclinical neuroprotection into improved clinical outcomes."
  sourceId: fast-mag
```

## Mechanisms

```yaml
- label: Intestinal osmotic action
  mechanism: Unabsorbed magnesium salts retain water osmotically within the intestine.
  evidenceBoundary: "This explains laxation; it does not demonstrate systemic detoxification."
  sourceId: ods

- label: Neuromuscular and vascular pharmacology
  mechanism: "The injectable label describes reduced acetylcholine release and neuromuscular transmission, central depression, and peripheral vasodilation."
  evidenceBoundary: "A label-level pharmacologic account, not proof that every clinical benefit has one mechanism or that oral exposure reproduces intravenous effects."
  sourceId: premix-label

- label: Magnesium versus sulfate-specific benefit
  observation: "The equal-elemental-dose sulfate, citrate, and oxide trial did not establish sulfate-specific superiority for arterial stiffness or blood pressure."
  evidenceBoundary: Shared magnesium physiology does not establish equivalence across formulations, routes, or clinical outcomes.
  sourceId: schutten
```

## Cautions

```yaml
- label: Hypermagnesemia
  risks: "Weakness, depressed reflexes, hypotension, bradycardia, conduction abnormalities, respiratory paralysis, and cardiac arrest."
  modifiers: Renal impairment, excessive exposure, and underlying neuromuscular disease increase concern.
  limitation: "Clinical toxicity thresholds vary; a serum number alone is not a universal safety boundary."
  sourceId: premix-label

- label: Oral gastrointestinal safety
  risks: Diarrhea and abdominal symptoms; the OTC label flags kidney disease, abdominal pain, nausea, vomiting, rectal bleeding, or failure to pass stool.
  durationBoundary: The label flags continued laxative need beyond one week.
  limitation: "An oral laxative label does not validate chronic high-dose nutritional use."
  sourceId: oral-label

- label: Nutritional upper limit
  amount: "350 mg/day elemental magnesium from supplements and medications for adults"
  context: "The US upper limit excludes naturally occurring food magnesium and principally addresses gastrointestinal intolerance."
  limitation: "It is not a universal poisoning threshold or an intravenous treatment protocol."
  sourceId: ods

- label: Prolonged pregnancy exposure
  risks: "Continuous administration beyond 5–7 days has been associated with fetal or neonatal hypocalcemia, skeletal demineralization, osteopenia, and fractures."
  uncertainty: The shortest exposure capable of causing fetal harm is unknown.
  additionalRisk: Neonatal neuromuscular or respiratory depression can follow maternal systemic exposure.
  sourceId: premix-label

- label: Contraindications and formulation-specific hazards
  observation: "The cited dextrose premix is contraindicated in myasthenia gravis, heart block or myocardial damage, and diabetic coma."
  additionalRisks: "Dextrose-related hyperglycemia and aluminum accumulation during prolonged parenteral administration, especially with impaired renal function."
  limitation: Contraindications and excipient risks belong to the specific product label.
  sourceId: premix-label

- label: Concentration and route errors
  observation: "The cited 50% injection contains 500 mg/mL magnesium sulfate heptahydrate and requires dilution to 20% or less before intravenous administration."
  limitation: "Salt concentration is not elemental-magnesium concentration; these instructions do not describe ready-to-use premixes."
  sourceId: injection-label
```

## Claims

```yaml
- claim: Magnesium sulfate supplements reproduce obstetric seizure protection.
  assessment: Not established.
  rationale: Magpie tested monitored parenteral treatment in preeclampsia, not oral supplementation in healthy people.
  sourceId: magpie

- claim: Oral sulfate reliably improves blood pressure or arterial stiffness.
  assessment: Not supported by the overall head-to-head trial.
  rationale: All three magnesium formulations had nonsignificant overall effects despite increased magnesium biomarkers.
  sourceId: schutten

- claim: Oral sulfate improves long-term diabetes control.
  assessment: Preliminary and endpoint-dependent.
  rationale: Favorable glucose measurements in a small trial did not include a significant HbA1c or HOMA-IR benefit.
  sourceId: solati

- claim: Epsom-salt baths provide proven systemic magnesium repletion or detoxification.
  assessment: Not established by the cited evidence.
  rationale: The product's soaking-aid labeling does not supply controlled evidence for systemic absorption, deficiency correction, or toxin removal.
  sourceId: oral-label

- claim: Sulfate has established sleep, cognition, or longevity benefits in healthy supplement users.
  assessment: Not established by the sulfate-specific supplementation evidence included here.
  rationale: The vascular trial assessed vascular and magnesium measurements, not these outcomes; results from other salts cannot fill that gap.
  sourceId: schutten
```

## Interactions

```yaml
- label: Oral drug binding
  drugs: Tetracyclines, quinolones, and oral bisphosphonates
  effect: Magnesium-containing oral products can reduce drug absorption through complex formation or related gastrointestinal interactions.
  evidenceBoundary: "Magnesium-class interaction guidance, not a sulfate-specific comparative trial."
  sourceId: ods

- label: Neuromuscular blockers
  drugs: Including rocuronium, vecuronium, and succinylcholine
  effect: Parenteral magnesium can potentiate and prolong neuromuscular blockade.
  evidenceBoundary: The label draws on clinical studies and case reports; magnitude is context-dependent.
  sourceId: premix-label

- label: Opioids and propofol
  effect: Parenteral magnesium can enhance or prolong analgesia and central nervous system depression.
  limitation: This does not establish an equally quantified interaction with every sedating substance.
  sourceId: premix-label

- label: Dihydropyridine calcium-channel blockers and tocolytics
  drugs: Including nifedipine
  effect: Exaggerated hypotension is possible.
  additionalContext: The label warns about serious adverse events with unapproved tocolytic coadministration, including nifedipine or terbutaline.
  limitation: This is a monitored obstetric interaction context, not proof that every combination causes harm.
  sourceId: premix-label

- label: Digitalis treatment
  effect: The injection label flags serious conduction changes if calcium becomes necessary to treat magnesium toxicity in digitalized patients.
  limitation: This is not an oral magnesium–digoxin chelation claim.
  sourceId: injection-label

- label: Drugs altering magnesium balance
  effect: "Loop or thiazide diuretics can increase urinary magnesium loss; potassium-sparing diuretics can reduce excretion; prolonged proton-pump-inhibitor exposure can cause hypomagnesemia."
  evidenceBoundary: Magnesium-class effects rather than sulfate-specific efficacy evidence.
  sourceId: ods
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: "Sulfuric acid magnesium salt (1:1) | MgSO4 | CID 24083"
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: "https://pubchem.ncbi.nlm.nih.gov/compound/24083"
  insight: Canonical anhydrous compound identity and molecular weight.
  limitation: "Dynamic database; year denotes access, not a clinical publication. Does not characterize every hydrate or commercial formulation."
  funding: US National Institutes of Health infrastructure
  sponsorshipStatus: public
  conflictsOfInterest: No author-specific declaration applicable to the identity record.
  conflictOfInterestStatus: not-applicable

- id: oral-label
  title: "EPSOM SALT (MAGNESIUM SULFATE) GRANULE [WALGREENS]"
  authors: Walgreens; DailyMed label repository
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7365e199-5038-48eb-b0b9-7b46f9894dd7"
  insight: Oral saline-laxative indication, elemental content per teaspoon, dosing, onset, and warnings.
  limitation: "Product labeling, not a comparative trial; SPL effective October 2, 2026. Soaking claims do not establish systemic benefits."
  funding: Trial funding not applicable; commercial labeler supplied the product information.
  sponsorshipStatus: commercial-label
  conflictsOfInterest: Walgreens has a commercial interest in the labeled product.
  conflictOfInterestStatus: organizational-interest

- id: injection-label
  title: "Magnesium Sulfate Injection, USP 50%"
  authors: Hospira, Inc.; DailyMed label repository
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d4b5863a-efb9-4551-a9ad-2b06e8666d87"
  insight: Heptahydrate identity, electrolyte replacement, parenteral-nutrition use, anticonvulsant effects, dilution, and safety.
  limitation: "Current SPL effective April 23, 2026 contains prescribing text internally revised May 2020; product-specific, not a modern comparative trial."
  funding: Trial funding not applicable; manufacturer labeling.
  sponsorshipStatus: commercial-label
  conflictsOfInterest: Hospira has a commercial interest in the injectable product.
  conflictOfInterestStatus: organizational-interest

- id: premix-label
  title: "MAGNESIUM SULFATE IN 5% DEXTROSE INJECTION"
  authors: Hospira, Inc.; DailyMed label repository
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=03ebeabb-8386-4af4-3086-bdf3c3fc4a5a"
  insight: Obstetric dosing, renal limits, population-specific pharmacokinetics, contraindications, fetal toxicity, and interactions.
  limitation: "SPL effective August 24, 2026; applies to this intravenous premix. Some interaction evidence is case-based rather than adequately controlled."
  funding: Trial funding not applicable; manufacturer labeling.
  sponsorshipStatus: commercial-label
  conflictsOfInterest: Hospira has a commercial interest in the labeled product.
  conflictOfInterestStatus: organizational-interest

- id: ods
  title: "Magnesium: Fact Sheet for Health Professionals"
  authors: NIH Office of Dietary Supplements
  year: 2026
  url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
  insight: Nutritional upper limit, osmotic laxation, and magnesium-class medication interactions.
  limitation: General magnesium guidance, not sulfate-specific efficacy evidence.
  funding: US federal government
  sponsorshipStatus: public
  conflictsOfInterest: No individual conflict statement identified.
  conflictOfInterestStatus: not-reported

- id: morris
  title: "Absorption of magnesium from orally administered magnesium sulfate in man."
  authors: M. E. Morris; S. LeRoy; S. C. Sutton
  year: 1987
  url: "https://pubmed.ncbi.nlm.nih.gov/3430654/"
  insight: Human urinary recovery following a defined oral sulfate cathartic exposure.
  limitation: Six men; diarrhea; no intravenous reference or absolute bioavailability determination.
  funding: US Public Health Service support indexed; exact grant details not retrieved.
  sponsorshipStatus: public
  conflictsOfInterest: No declaration available in the accessed abstract.
  conflictOfInterestStatus: not-retrieved

- id: schutten
  title: "Effects of Magnesium Citrate, Magnesium Oxide, and Magnesium Sulfate Supplementation on Arterial Stiffness: A Randomized, Double-Blind, Placebo-Controlled Intervention Trial."
  authors: Joëlle C. Schutten; Peter J. Joris; Iris Groendijk; Coby Eelderink; Dion Groothof; Yvonne van der Veen; Robert Westerhuis; Femke Goorman; Ronald M. Danel; Martin H. de Borst; Stephan J. L. Bakker
  year: 2022
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9075273/"
  insight: Direct equal-elemental-dose comparison; overall vascular nulls despite magnesium biomarker changes.
  limitation: Surrogate endpoints, largely replete population, and exploratory subgroup/formulation analyses.
  funding: Nedmag Industries Mining and Manufacturing BV and NIGRAM2+, supported through the Top Sector Life Sciences & Health PPP Allowance to the Dutch Kidney Foundation.
  sponsorshipStatus: mixed-industry-public-private
  conflictsOfInterest: "Goorman was employed by Nedmag and Danel by Magnesium Health Institute; remaining authors reported no disclosures. Funders were reported to have no input into design, collection, analysis, or publication."
  conflictOfInterestStatus: declared

- id: vascular-registry
  title: "Magnesium and Vascular Stiffness"
  authors: University Medical Center Groningen; ClinicalTrials.gov
  year: 2018
  url: "https://clinicaltrials.gov/study/NCT03632590"
  insight: Registered design, planned enrollment, outcomes, university sponsor, and Nedmag collaborator.
  limitation: "Last posted update was in 2018; estimated enrollment and ambiguous arm wording are superseded by the completed publication for actual exposure and results."
  funding: University sponsorship and Nedmag collaboration recorded; financial allocation not specified.
  sponsorshipStatus: academic-with-industry-collaborator
  conflictsOfInterest: Registry does not provide author-level conflict declarations.
  conflictOfInterestStatus: not-reported

- id: solati
  title: "Oral magnesium supplementation in type II diabetic patients."
  authors: Mehrdad Solati; Elham Ouspid; Saeedeh Hosseini; et al.
  year: 2014
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4219896/"
  insight: Sulfate-specific oral randomized trial with favorable glucose measurements but null HbA1c and HOMA-IR.
  limitation: Small completer analysis, medication adjustment, attrition, and multiple endpoints.
  funding: No funding statement located in accessed full-text material; capsules were prepared by Tehran University of Medical Sciences' Herbal Drugs Research Center.
  sponsorshipStatus: not-established
  conflictsOfInterest: No conflict declaration located in accessed material.
  conflictOfInterestStatus: not-reported

- id: magpie
  title: "Do women with pre-eclampsia, and their babies, benefit from magnesium sulphate? The Magpie Trial: a randomised placebo-controlled trial."
  authors: Douglas Altman; Guillermo Carroli; Lelia Duley; et al.; Magpie Trial Collaboration Group
  year: 2002
  url: "https://pubmed.ncbi.nlm.nih.gov/12057549/"
  insight: Large randomized evidence for preventing eclampsia, with maternal and infant mortality uncertainty retained.
  limitation: Obstetric parenteral treatment; frequent side effects; no basis for supplement extrapolation.
  funding: UK Medical Research Council, UK Department for International Development, UNDP/UNFPA/WHO/World Bank Human Reproduction Programme, and European Commission.
  fundingSourceUrl: "https://impact.ref.ac.uk/CaseStudies/CaseStudy.aspx?Id=9535"
  sponsorshipStatus: public-international
  conflictsOfInterest: Authors declared no conflicts.
  conflictOfInterestStatus: none-declared

- id: eclampsia-trial
  title: "Which anticonvulsant for women with eclampsia? Evidence from the Collaborative Eclampsia Trial."
  authors: Eclampsia Trial Collaborative Group
  year: 1995
  url: "https://pubmed.ncbi.nlm.nih.gov/7769899/"
  insight: Fewer recurrent eclamptic seizures than with diazepam or phenytoin.
  limitation: Historical hospital regimens; exact dosing and full disclosure sections were not recovered.
  funding: Specific funders not established from accessed material.
  sponsorshipStatus: not-established
  conflictsOfInterest: Full author conflict statement not retrieved.
  conflictOfInterestStatus: not-retrieved

- id: beam
  title: "A randomized, controlled trial of magnesium sulfate for the prevention of cerebral palsy."
  authors: Dwight J. Rouse; Deborah G. Hirtz; Elizabeth Thom; et al.; Eunice Kennedy Shriver NICHD Maternal-Fetal Medicine Units Network
  year: 2008
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2803083/"
  insight: Reduced moderate/severe cerebral palsy component alongside a null primary death-or-cerebral-palsy composite.
  limitation: Earlier-preterm obstetric population; mortality was not reduced.
  funding: NICHD and National Institute of Neurological Disorders and Stroke grants.
  sponsorshipStatus: public
  conflictsOfInterest: No relevant potential conflict was reported.
  conflictOfInterestStatus: none-declared

- id: magenta
  title: "Prenatal Intravenous Magnesium at 30-34 Weeks' Gestation and Neurodevelopmental Outcomes in Offspring: The MAGENTA Randomized Clinical Trial."
  authors: Caroline A. Crowther; Pat Ashwood; Philippa F. Middleton; Andrew McPhee; Thach Tran; Jane E. Harding; MAGENTA Study Group
  year: 2023
  url: "https://jamanetwork.com/journals/jama/fullarticle/2808328"
  insight: No demonstrated improvement in survival without cerebral palsy at later preterm gestations.
  limitation: Incomplete two-year ascertainment and limited power; numerous secondary comparisons.
  funding: Australian NHMRC grant 1022968 and Cerebral Palsy Alliance Research Foundation grants PG5716 and PG01817.
  sponsorshipStatus: public-charitable
  conflictsOfInterest: None reported; funders reported no role in conduct, analysis, or publication decisions.
  conflictOfInterestStatus: none-declared

- id: silverman
  title: "IV magnesium sulfate in the treatment of acute severe asthma: a multicenter randomized controlled trial."
  authors: Robert A. Silverman; Harold Osborn; Jeffrey Runge; et al.; Acute Asthma/Magnesium Study Group
  year: 2002
  url: "https://pubmed.ncbi.nlm.nih.gov/12171821/"
  insight: Improved spirometry in severe obstruction without an overall admission benefit.
  limitation: Endpoint and severity dependence; complete funding and conflict sections not accessed.
  funding: Not established from accessed material.
  sponsorshipStatus: not-established
  conflictsOfInterest: Full declaration not retrieved.
  conflictOfInterestStatus: not-retrieved

- id: three-mg
  title: "The 3Mg trial: a randomised controlled trial of intravenous or nebulised magnesium sulphate versus placebo in adults with acute severe asthma."
  authors: Steve Goodacre; Judith Cohen; Mike Bradburn; John Stevens; Alasdair Gray; Jonathan Benger; Tim Coats; 3Mg Research Team
  year: 2014
  url: "https://www.journalslibrary.nihr.ac.uk/hta/HTA18220"
  insight: Full trial report documenting nonsignificant admission and breathlessness outcomes.
  limitation: Recruitment below target and exclusion of life-threatening presentations.
  funding: NIHR Health Technology Assessment programme; sponsor Sheffield Teaching Hospitals NHS Foundation Trust.
  sponsorshipStatus: public
  conflictsOfInterest: Author-specific declaration not located in accessed HTML; public-hospital pharmacy and Tayside Pharmaceuticals manufacturing arrangements were reported.
  conflictOfInterestStatus: not-verified

- id: schuh
  title: "Effect of Nebulized Magnesium vs Placebo Added to Albuterol on Hospitalization Among Children With Refractory Acute Asthma Treated in the Emergency Department: A Randomized Clinical Trial."
  authors: Suzanne Schuh; Judy Sweeney; Maggie Rumantir; et al.; Pediatric Emergency Research Canada Network
  year: 2020
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7686869/"
  insight: Large pediatric nebulized-treatment trial with no significant hospitalization benefit.
  limitation: Does not test intravenous magnesium.
  funding: Canadian Institutes of Health Research, Thrasher Research Fund, Physicians' Services Incorporated Foundation, and Hospital for Sick Children.
  sponsorshipStatus: public-charitable
  conflictsOfInterest: "Investigators disclosed research grants; Francine Ducharme disclosed pharmaceutical/device research funding and personal fees outside this study. Funders reported no role in study conduct or publication."
  conflictOfInterestStatus: declared

- id: torsades
  title: "Treatment of torsade de pointes with magnesium sulfate."
  authors: D. Tzivoni; S. Banai; C. Schuger; J. Benhorin; A. Keren; S. Gottlieb; S. Stern
  year: 1988
  url: "https://pubmed.ncbi.nlm.nih.gov/3338130/"
  insight: Historical clinical observations distinguish QT-prolongation-associated torsades from other polymorphic ventricular tachycardia.
  limitation: Small uncontrolled series; not a mortality trial.
  funding: Not established from accessed abstract.
  sponsorshipStatus: not-established
  conflictsOfInterest: Full declaration not retrieved.
  conflictOfInterestStatus: not-retrieved

- id: magic
  title: "Early administration of intravenous magnesium to high-risk patients with acute myocardial infarction in the Magnesium in Coronaries (MAGIC) Trial: a randomised controlled trial."
  authors: Magnesium in Coronaries Trial Investigators
  year: 2002
  url: "https://pubmed.ncbi.nlm.nih.gov/12401244/"
  insight: Large null trial for 30-day mortality after high-risk myocardial infarction.
  limitation: Acute intravenous intervention; not a deficiency-replacement or oral prevention study.
  funding: US Public Health Service research support indexed; detailed funding statement not retrieved.
  sponsorshipStatus: public-support-identified
  conflictsOfInterest: Full author declaration not retrieved.
  conflictOfInterestStatus: not-retrieved

- id: fast-mag
  title: "Prehospital use of magnesium sulfate as neuroprotection in acute stroke."
  authors: Jeffrey L. Saver; Sidney Starkman; Marc Eckstein; et al.; FAST-MAG Investigators
  year: 2015
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4920545/"
  insight: Early intravenous administration did not improve 90-day disability or mortality.
  limitation: Suspected acute stroke population; not healthy cognition or oral supplementation.
  funding: National Institute of Neurological Disorders and Stroke.
  sponsorshipStatus: public
  conflictsOfInterest: Article links to separate author disclosure forms; their individual contents were not verified.
  conflictOfInterestStatus: not-verified
```

## Legal

```yaml
- jurisdiction: United States
  status: The cited Epsom-salt granules carry OTC saline-laxative labeling for occasional constipation.
  boundary: "That product label does not establish approval of chronic supplementation, detoxification, or systemic claims for bathing products."
  sourceId: oral-label

- jurisdiction: United States
  status: The cited intravenous dextrose premix is prescription-labeled for preeclampsia/eclampsia seizure indications.
  boundary: "Asthma, fetal neuroprotection, torsades, and general wellness are not indications in that specific label. The label expressly identifies treatment of preterm labor as unapproved."
  scope: "Regulatory statements are product- and jurisdiction-specific. The doses above document labels and studies rather than individualized treatment instructions."
  sourceId: premix-label
```