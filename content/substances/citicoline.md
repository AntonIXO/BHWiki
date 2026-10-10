---
slug: citicoline
name: Citicoline
subtitle: A precursor, with outcome-specific evidence.
aliases:
  - CDP-choline
  - Cytidine diphosphate choline
  - Cytidine 5′-diphosphocholine
  - Citicoline sodium
  - Cognizin
formula: C14H26N4O11P2
molecularWeight: 488.32 g/mol
pubchemCid: 13804
smiles: C[N+](C)(C)CCOP(=O)([O-])OP(=O)(O)OCC1C(C(C(O1)N2C=CC(=NC2=O)N)O)O
category: Choline precursor
tags:
  - choline-precursor
  - episodic-memory
  - stroke-recovery
accent: "#a9b993"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established for unchanged citicoline
  low: null
  high: null
  context: Human radiolabel studies tracked parent-derived radioactivity and metabolites rather than a validated unchanged-citicoline terminal elimination curve.
  sourceId: dinsdale1983
  observationId: citicoline-unresolved
kinetics:
  onset: Not established as a clinical-effect onset
  peak: Oral radiolabel-derived plasma radioactivity showed peaks near 1 and 24 hours; these are not parent-specific citicoline peaks
  duration: Clinical-effect duration is not established from the pharmacokinetic studies
  bioavailability: Less than 1% of an oral radiolabeled dose was recovered in feces over 5 days, indicating extensive absorption of label-derived material but not unchanged-parent bioavailability
  metabolism: The radiolabel study supports extensive gut-wall and hepatic metabolism, with parent-derived material entering biosynthetic, tissue-metabolic and excretory pathways
  sourceId: dinsdale1983
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
x-order: 9
---

## Summary

Citicoline (CDP-choline) is a phosphatidylcholine-pathway intermediate studied as a drug and food ingredient. Large stroke and traumatic-brain-injury trials were negative, while limited cognition trials show endpoint-specific, inconsistent signals.

## Description

Citicoline is CDP-choline, not dietary choline itself: it is a nucleotide containing a choline moiety and a cytidine-derived moiety, and exogenous doses are extensively metabolized. Human studies report rises in circulating choline plus pyrimidine metabolites; later work found uridine, rather than reliably detectable cytidine, after oral dosing. Spain authorizes citicoline-sodium medicines for neurological/cognitive disorders associated with stroke and head trauma, whereas EU food law separately permits citicoline as a novel-food ingredient under defined limits. These medicinal, nutritional and research contexts are not interchangeable. Cognizin-branded cognition studies also require attention to commercial sponsorship and related method-of-use patents.

## Evidence note

Evidence is indication- and endpoint-specific. ICTUS and COBRIT found no functional/cognitive benefit in acute ischemic stroke and traumatic brain injury; a 2020 Cochrane review likewise found little or no stroke benefit with low-certainty evidence. A 2021 industry-funded older-adult trial missed its primary working-memory endpoint but improved secondary episodic-memory measures; EFSA concluded in 2024 that a memory cause-effect relationship was not established. Parent-citicoline half-life remains unresolved because human disposition studies primarily measured radiolabel or metabolites. The current extension adds null vascular-dementia evidence, a biased open post-stroke signal, a negative pediatric ADHD pilot, preliminary TBI and glaucoma findings, and the 2025 EU refusal of the proposed memory claim; these do not establish a general nootropic or neuroprotective effect.

## Doses

```yaml
- label: Spanish adult oral medicinal label
  amount: 500–2000 mg/day
  quantity: 500
  quantityMax: 2000
  unit: mg/day
  ingredient: Citicoline as sodium salt
  formulation: Somazina oral solution
  route: Oral
  frequency: Daily dose according to clinical severity
  duration: Not specified in the cited label
  population: Adults with labelled cerebrovascular- or head-trauma-associated neurological/cognitive disorders
  purpose: Approved medicinal use in Spain
  sourceCategory: approved-label
  note: Product-specific Spanish dosing; not a general supplement recommendation.
  sourceId: aemps-somazina
- label: Spanish elderly oral medicinal label
  amount: 500–2000 mg/day; no age-specific dose adjustment required
  quantity: 500
  quantityMax: 2000
  unit: mg/day
  ingredient: Citicoline as sodium salt
  formulation: Somazina oral solution
  route: Oral
  frequency: Daily dose according to clinical severity
  duration: Not specified in the cited label
  population: Older adults
  purpose: Approved medicinal use in Spain
  sourceCategory: approved-label
  note: The SmPC states that no specific dosage adjustment is required solely for older age.
  sourceId: aemps-somazina
- label: Spanish pediatric medicinal-label limitation
  amount: No established pediatric dose
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: Citicoline as sodium salt
  formulation: Somazina oral solution
  route: Oral
  frequency: Not established
  duration: Not established
  population: Children
  purpose: Medicinal use only when expected therapeutic benefit exceeds possible risk
  sourceCategory: approved-label
  note: Pediatric experience is limited; this is not a pediatric dosing recommendation.
  sourceId: aemps-somazina
- label: Spanish injectable medicinal label
  amount: 500–2000 mg/day
  quantity: 500
  quantityMax: 2000
  unit: mg/day
  ingredient: Citicoline as sodium salt
  formulation: Somazina 500 mg or 1000 mg injectable solution
  route: Intramuscular or slow intravenous
  frequency: Daily dose according to clinical severity
  duration: Not specified in the cited label
  population: Adults with acute/subacute stroke-associated or head-trauma-associated neurological/cognitive disorders
  purpose: Approved medicinal use in Spain
  sourceCategory: approved-label
  note: For persistent intracranial hemorrhage, the cited SmPC advises not exceeding 1000 mg/day by very slow IV administration.
  sourceId: aemps-somazina-injectable
- label: ICTUS acute ischemic stroke trial
  amount: 2000 mg/day
  quantity: 2000
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: IV study drug for 3 days followed by oral 500 mg tablets
  route: Intravenous then oral
  frequency: 1000 mg every 12 hours
  duration: 6 weeks
  population: Adults with moderate-to-severe acute ischemic stroke treated within 24 hours
  purpose: Test 90-day global recovery versus placebo
  sourceCategory: research
  note: Trial exposure; ICTUS was stopped for futility and did not show efficacy.
  sourceId: davalos2012
- label: COBRIT traumatic brain injury trial
  amount: 2000 mg/day
  quantity: 2000
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Study citicoline
  route: Oral or enteral
  frequency: Daily
  duration: 90 days
  population: Adults with complicated mild, moderate or severe nonpenetrating traumatic brain injury
  purpose: Test functional and cognitive recovery versus placebo
  sourceCategory: research
  note: Trial exposure; COBRIT showed no improvement in the primary global outcome.
  sourceId: zafonte2012
- label: Older-adult memory trial
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Cognizin capsules
  route: Oral
  frequency: Once daily with breakfast
  duration: 12 weeks
  population: 100 adults aged 50–85 with age-associated memory impairment
  purpose: Compare computerized memory-test changes with placebo
  sourceCategory: research
  note: Industry-funded selected-population trial; the primary Spatial Span endpoint was not significantly different from placebo.
  sourceId: nakazaki2021
- label: Adolescent attention trial
  amount: 250–500 mg/day
  quantity: 250
  quantityMax: 500
  unit: mg/day
  ingredient: Citicoline
  formulation: Cognizin
  route: Oral
  frequency: Daily
  duration: 28 days
  population: 75 healthy males aged 13–18 years
  purpose: Test attention, psychomotor speed and impulsivity versus placebo
  sourceCategory: research
  note: Research exposure in adolescents, not a pediatric clinical-use recommendation.
  sourceId: mcglade2019
- label: EU food-supplement maximum
  amount: Up to 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Food supplement
  route: Oral
  frequency: Daily maximum
  duration: Not specified
  population: Adults
  purpose: Authorized novel-food condition of use in the European Union
  sourceCategory: reference
  note: This is a regulatory maximum, not an efficacy dose; EU labeling must state that foods containing citicoline are not intended for children.
  sourceId: eu-novel-food-2026
- label: Memory-task trial
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: Study capsules
  route: Oral
  frequency: Once daily with breakfast
  duration: 12 weeks
  population: 100 adults aged 50–85 with age-associated memory impairment
  purpose: Compare memory-test changes with placebo
  sourceCategory: research
  note: Selected population and study formulation; not evidence for benefit in all ages.
  sourceId: nakazaki2021
- label: Health Canada adult cognitive-function monograph range
  amount: 250–1000 mg/day; maximum 500 mg/single dose
  quantity: 250
  quantityMax: 1000
  unit: mg/day
  ingredient: Citicoline
  formulation: Licensed natural-health-product ingredient framework
  route: Oral
  frequency: According to product claim and label
  duration: Not specified
  population: Adults
  purpose: Jurisdiction-specific product-licensing conditions for sustained attention or older-adult cognitive health
  sourceCategory: reference
  note: A licensing monograph is not proof of efficacy for every product or indication; verify the actual product licence.
  sourceId: hc-cognitive-2025
```

## Pharmacokinetics

```yaml
- id: citicoline-unresolved
  analyte: Unchanged citicoline
  route: Oral
  formulation: 14C-labelled CDP-choline
  population: Six healthy adult volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The study measured total radiolabel-derived plasma radioactivity and excretion; it did not establish a terminal half-life for unchanged parent citicoline.
  sourceId: dinsdale1983
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
- id: nakazaki-spatial-span-primary
  study:
    id: nct03369925
    design: Randomized double-blind placebo-controlled parallel trial
    sampleSize: 100
    populationLabels:
      - Adults aged 50–85 with age-associated memory impairment
    comparator: Placebo
    route: Oral
    formulation: Cognizin capsules
    durationDays: 84
    assessmentTime: Week 12
  conflictingSourceIds: []
  conceptId: cognitive-task-performance
  name: Visuospatial working-memory performance
  direction: Variable
  evidence: Human research
  description: The prespecified primary Spatial Span endpoint did not differ significantly from placebo after multiplicity correction.
  sourceId: nakazaki2021
  population: Healthy adults aged 50–85 with age-associated memory impairment
  exposure: 500 mg/day oral Cognizin for 12 weeks
  instrument: Cambridge Brain Sciences Spatial Span
  magnitude: "Primary endpoint: no significant between-group difference; Bonferroni-adjusted alpha 0.00625."
- id: nakazaki-paired-associate-secondary
  study:
    id: nct03369925
    design: Randomized double-blind placebo-controlled parallel trial
    sampleSize: 100
    populationLabels:
      - Adults aged 50–85 with age-associated memory impairment
    comparator: Placebo
    route: Oral
    formulation: Cognizin capsules
    durationDays: 84
    assessmentTime: Week 12
  conflictingSourceIds:
    - spiers1996
  conceptId: episodic-memory
  name: Paired-associate episodic memory
  direction: Increased
  evidence: Human research
  description: A secondary episodic-memory endpoint improved versus placebo, while the trial's primary working-memory endpoint was null.
  sourceId: nakazaki2021
  population: Healthy adults aged 50–85 with age-associated memory impairment
  exposure: 500 mg/day oral Cognizin for 12 weeks
  instrument: Cambridge Brain Sciences Paired Associate task
  magnitude: Mean change 0.15 versus 0.06 with placebo; P=0.0025.
- id: spiers-verbal-memory
  study:
    id: spiers-aging-memory-1996
    design: Randomized double-blind placebo-controlled parallel trial with post hoc subgroup and subsequent crossover study
    sampleSize: 95
    populationLabels:
      - Volunteers aged 50–85 screened for dementia and neurological disorders
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 90
    assessmentTime: Month 3
  conflictingSourceIds:
    - nakazaki2021
  conceptId: episodic-memory
  name: Verbal logical memory
  direction: Variable
  evidence: Human research
  description: In the initial randomized cohort, delayed-recall benefit appeared only in a subgroup identified after analysis; 32 subgroup participants later entered a higher-dose crossover study.
  sourceId: spiers1996
  population: Adults aged 50–85 without diagnosed dementia or major neurological problems
  exposure: 1000 mg/day for 3 months in the randomized phase; 2000 mg/day in the later crossover phase
  instrument: Logical-memory passage immediate and delayed recall
  magnitude: No full-sample general memory benefit established in the initial randomized phase.
- id: mcglade-attention
  study:
    id: mcglade-adolescent-citicoline
    design: Randomized placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Healthy adolescent males aged 13–18
    comparator: Placebo
    route: Oral
    formulation: Cognizin
    durationDays: 28
    assessmentTime: Day 28
  conflictingSourceIds: []
  conceptId: attention
  name: Selective and sustained attention
  direction: Increased
  evidence: Human research
  description: Citicoline groups showed better attention-related performance than placebo in a small healthy-adolescent study; funding and full COI declarations were not verified from accessible full text.
  sourceId: mcglade2019
  population: 75 healthy adolescent males aged 13–18
  exposure: 250 or 500 mg/day for 28 days
  instrument: Ruff 2&7 Selective Attention Test and CPT-II
  magnitude: Between-group attention result P=0.02; weight-adjusted dose associations also favored several attention measures.
- id: ictus-global-recovery
  study:
    id: nct00331890
    design: International randomized multicenter placebo-controlled sequential trial
    sampleSize: 2298
    populationLabels:
      - Moderate-to-severe acute ischemic stroke
    comparator: Placebo
    route: Intravenous then oral
    formulation: 1000 mg IV every 12 hours for 3 days then 1000 mg oral every 12 hours
    durationDays: 42
    assessmentTime: Day 90
  result:
    measure: odds-ratio
    estimate: 1.03
    unit: odds ratio
    instrument: Global recovery combining NIHSS ≤1, modified Rankin Scale ≤1 and Barthel Index ≥95
    comparator: Placebo
    assessmentTime: Day 90
    population: Adults with moderate-to-severe acute ischemic stroke
    confidenceInterval:
      lower: 0.86
      upper: 1.25
      level: 95
  conflictingSourceIds: []
  conceptId: stroke-recovery
  name: Global recovery after acute ischemic stroke
  direction: Variable
  evidence: Human research
  description: ICTUS was stopped for futility; 90-day global recovery did not differ significantly from placebo.
  sourceId: davalos2012
  population: 2298 adults with moderate-to-severe acute ischemic stroke in Germany, Portugal and Spain
  exposure: 2000 mg/day, IV for 3 days then oral, for 6 weeks
  instrument: Global endpoint combining NIHSS, modified Rankin Scale and Barthel Index
  magnitude: OR 1.03; 95% CI 0.86–1.25; P=0.364.
- id: cochrane-stroke-disability
  study:
    id: cochrane-citicoline-stroke-2020
    design: Systematic review and meta-analysis of randomized controlled trials
    populationLabels:
      - Acute ischemic stroke
    comparator: Placebo or standard care
    route: Oral, intravenous or combined
    formulation: Citicoline across included trials
    assessmentTime: Approximately 90 days
  result:
    measure: risk-ratio
    estimate: 1.11
    unit: risk ratio
    instrument: Modified Rankin Scale disability or dependence outcome
    comparator: Placebo or control
    assessmentTime: Approximately 90 days
    population: People with acute ischemic stroke
    confidenceInterval:
      lower: 0.97
      upper: 1.26
      level: 95
  conflictingSourceIds: []
  conceptId: stroke-recovery
  name: Disability or dependence after acute ischemic stroke
  direction: Variable
  evidence: Human research
  description: The Cochrane review found little or no difference in disability/dependence; evidence was low certainty and included trials were judged at high risk of bias.
  sourceId: cochrane2020
  population: Acute ischemic stroke across 10 RCTs totaling 4281 participants
  exposure: 500–2000 mg/day by oral, intravenous or combined routes across trials
  instrument: Modified Rankin Scale
  magnitude: RR 1.11; 95% CI 0.97–1.26 for disability/dependence in four trials.
- id: cobrit-global-recovery
  study:
    id: nct00545662
    design: Phase 3 double-blind randomized placebo-controlled multicenter trial
    sampleSize: 1213
    populationLabels:
      - Complicated mild traumatic brain injury
      - Moderate traumatic brain injury
      - Severe traumatic brain injury
    comparator: Placebo
    route: Oral or enteral
    formulation: Citicoline
    durationDays: 90
    assessmentTime: Day 90
  result:
    measure: odds-ratio
    estimate: 0.98
    unit: odds ratio
    instrument: TBI Clinical Trials Network Core Battery global statistic
    comparator: Placebo
    assessmentTime: Day 90
    population: Adults with complicated mild, moderate or severe nonpenetrating traumatic brain injury
    confidenceInterval:
      lower: 0.83
      upper: 1.15
      level: 95
  conflictingSourceIds: []
  conceptId: traumatic-brain-injury-recovery
  name: Global functional and cognitive recovery after traumatic brain injury
  direction: Variable
  evidence: Human research
  description: COBRIT found no improvement in the prespecified 90-day global functional/cognitive outcome; the trial was stopped for futility.
  sourceId: zafonte2012
  population: 1213 adults treated at eight US level 1 trauma centers
  exposure: 2000 mg/day oral or enteral citicoline for 90 days
  instrument: TBI Clinical Trials Network Core Battery
  magnitude: Global OR 0.98; 95% CI 0.83–1.15.
- conceptId: episodic-memory
  name: Paired-associate memory
  direction: Increased
  evidence: Human research
  description: A secondary episodic-memory endpoint improved relative to placebo. Clinical importance and generalizability remain uncertain.
  sourceId: nakazaki2021
  population: Older adults with age-associated memory impairment
  exposure: 500 mg/day for 12 weeks
  instrument: Cambridge Brain Sciences Paired Associate test
  magnitude: null
- conceptId: stroke-recovery
  name: Global recovery after stroke
  direction: Variable
  evidence: Human research
  description: ICTUS found no significant recovery advantage over placebo and was stopped for futility.
  sourceId: davalos2012
  population: Adults with moderate-to-severe acute ischemic stroke
  exposure: "Hospital trial: intravenous followed by oral citicoline"
  instrument: Global endpoint combining NIHSS, modified Rankin Scale and Barthel Index at 90 days
  magnitude: Odds ratio 1.03; 95% CI 0.86–1.25
- id: cohen-vascular-dementia
  study:
    id: cohen-vascular-dementia-2003
    design: Double-blind randomized placebo-controlled trial
    sampleSize: 30
    populationLabels:
      - Vascular dementia
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 365
    assessmentTime: 12 months
  conflictingSourceIds: []
  conceptId: cognitive-performance
  name: Neuropsychological performance in vascular dementia
  direction: Variable
  evidence: Human research
  description: A small long-term randomized trial found no advantage over placebo on neuropsychological performance or MRI measures.
  sourceId: cohen2003
  population: 30 patients with vascular dementia
  exposure: 500 mg twice daily for 12 months
  instrument: Neuropsychological battery and MRI measures
  magnitude: No significant between-group advantage reported.
- id: cotroneo-ideale-vascular-cognition
  study:
    id: ideale-citicoline-2013
    design: Open nonrandomized controlled study
    sampleSize: 349
    populationLabels:
      - Mild vascular cognitive impairment
    comparator: Usual care control
    route: Oral
    formulation: Citicoline
    durationDays: 270
    assessmentTime: 9 months
  conflictingSourceIds:
    - cohen2003
  conceptId: cognitive-performance
  name: Screening cognition in mild vascular cognitive impairment
  direction: Increased
  evidence: Human research
  description: MMSE remained more stable in the citicoline group, but the open allocation and absence of an ADL/IADL difference prevent a demonstrated functional benefit claim.
  sourceId: cotroneo2013
  population: 349 older adults with mild vascular cognitive impairment
  exposure: 500 mg twice daily for 9 months
  instrument: MMSE and ADL/IADL measures
  magnitude: Screening-cognition signal; no ADL/IADL difference reported.
- id: alvarez-sabin-poststroke-cognition
  study:
    id: alvarez-sabin-poststroke-2013
    design: Open randomized usual-care comparison
    sampleSize: 347
    populationLabels:
      - Post-stroke vascular cognitive impairment
    comparator: Usual care
    route: Oral
    formulation: Citicoline
    durationDays: 365
    assessmentTime: 12 months
  conflictingSourceIds:
    - davalos2012
  conceptId: stroke-recovery
  name: Cognitive and functional outcomes after stroke
  direction: Variable
  evidence: Human research
  description: Attention/executive and orientation domains favored citicoline in an open follow-up, but attrition was substantial and the modified Rankin Scale result was not significant.
  sourceId: alvarez-sabin2013
  population: 347 participants beginning treatment six weeks after ischemic stroke; 199 had one-year neuropsychological follow-up
  exposure: 1000 mg/day for 12 months
  instrument: Neuropsychological domains and modified Rankin Scale
  magnitude: "mRS ≤2: 57.3% versus 48.7%, P=0.186; domain-level signals remain vulnerable to attrition and open treatment."
- id: shakeri-2026-tbi-pilot
  study:
    id: shakeri-bavali-oleyayi-tbi-2026
    design: Single-center triple-blind randomized placebo-controlled pilot
    sampleSize: 60
    populationLabels:
      - Mild-to-moderate traumatic brain injury
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 90
    assessmentTime: Day 90
  conflictingSourceIds:
    - zafonte2012
  conceptId: traumatic-brain-injury-recovery
  name: Cognitive and functional recovery after mild-to-moderate traumatic brain injury
  direction: Increased
  evidence: Limited research
  description: A small 2026 pilot reported better MMSE and secondary functional outcomes, but it is not a replication of COBRIT and its funding disclosure was not verified.
  sourceId: shakeri2026
  population: 60 adults with mild-to-moderate traumatic brain injury
  exposure: 1000 mg/day for 90 days
  instrument: MMSE, Barthel Index and GOSE
  magnitude: Primary MMSE 25.2 versus 21.5, P<0.001; preliminary single-center result.
- id: hubner-adhd-pilot
  study:
    id: hubner-citicoline-adhd-2024
    design: Double-blind placebo-controlled crossover pilot
    sampleSize: 27
    populationLabels:
      - Children aged 7–12 with ADHD
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 28
    assessmentTime: End of each period
  conflictingSourceIds: []
  conceptId: attention
  name: ADHD attention and behavioral parameters
  direction: Variable
  evidence: Limited research
  description: The small pediatric crossover pilot did not show a significant benefit on assessed parameters; it cannot establish broad pediatric safety.
  sourceId: hubner2024
  population: Children aged 7–12 with ADHD; registry reports 27 recruited and 22 completing
  exposure: 250 mg/day for 28 days per period with a 28-day washout
  instrument: Study-specific ADHD attention and behavioral measures
  magnitude: No significant between-condition benefit reported.
```

## Mechanisms

```yaml
- title: Endogenous phosphatidylcholine-pathway intermediate
  description: Citicoline is CDP-choline, an endogenous intermediate in phosphatidylcholine synthesis; this identity is distinct from dietary choline itself.
  sourceId: efsa2024
  conceptId: choline-precursor
- title: Oral metabolism to choline and uridine in humans
  description: In 12 adults, 500–4000 mg oral citicoline increased plasma choline and uridine; cytidine was not reliably detectable, supporting extensive presystemic/systemic transformation rather than intact-parent exposure.
  sourceId: wurtman2000
  conceptId: choline-precursor
- title: Earlier human metabolism study
  description: Oral and IV work reported rapid parent disappearance and increases in circulating choline and cytidine; this differs from the later uridine-dominant oral study and underscores assay/pathway uncertainty.
  sourceId: lopez1987
  conceptId: choline-precursor
- title: Precursor metabolism
  description: Measurements after administration support conversion to choline and cytidine; the parent compound and its metabolites require separate interpretation.
  sourceId: lopez1987
  conceptId: choline-precursor
```

## Cautions

```yaml
- title: Acute ischemic stroke efficacy is not established
  description: ICTUS showed no recovery advantage, and a 2020 Cochrane review found little or no benefit for mortality, disability, functional recovery or neurological recovery.
  sourceId: cochrane2020
- title: Traumatic brain injury efficacy is not established
  description: The 1213-person COBRIT phase 3 trial found no improvement in functional or cognitive status at 90 days.
  sourceId: zafonte2012
- title: Current acute-stroke guideline context
  description: The 2026 AHA/ASA acute ischemic stroke guideline states that current neuroprotective trials have not produced sufficient evidence to warrant clinical use; it does not give a citicoline-specific recommendation.
  sourceId: aha-stroke-2026
- title: Spanish medicinal-label contraindications
  description: Somazina is contraindicated with hypersensitivity to citicoline/excipients and in patients with hypertonia of the parasympathetic nervous system.
  sourceId: aemps-somazina
- title: Labelled adverse reactions
  description: The Spanish SmPC lists very rare reports including hallucinations, headache, vertigo, hypertension or hypotension, dyspnea, nausea, vomiting, occasional diarrhea, rash/urticaria/purpura, chills and edema.
  sourceId: aemps-somazina
- title: Pregnancy and lactation uncertainty
  description: Spanish labels report insufficient pregnancy data and advise use only when clearly necessary; an injectable label states that excretion into human milk is unknown and neonatal risk cannot be excluded.
  sourceId: aemps-somazina-injectable
- title: Pediatric evidence is limited
  description: The Spanish medicinal label provides no established pediatric dose, and EU novel-food labeling requires a statement that citicoline-containing foods are not intended for children.
  sourceId: eu-novel-food-2026
- title: Healthy-memory evidence is inconsistent
  description: The positive 2021 episodic-memory finding was secondary, the primary working-memory endpoint was null, and EFSA judged the broader memory claim unsubstantiated after weighing other trials.
  sourceId: efsa2024
- title: Disease outcomes do not transfer
  description: The large ICTUS trial did not demonstrate improved recovery after moderate-to-severe acute stroke.
  sourceId: davalos2012
- title: Limited safety horizon
  description: A short trial in selected older adults does not establish long-term safety across all populations.
  sourceId: nakazaki2021
- title: Pediatric ADHD pilot was negative
  description: The small double-blind crossover ADHD pilot did not show a significant benefit and cannot establish broad pediatric safety or a treatment role.
  sourceId: hubner2024
- title: Preliminary TBI signal needs replication
  description: The 2026 single-center TBI pilot reported better MMSE and functional secondary outcomes, but it is small, later than COBRIT, and its funding disclosure was not verified.
  sourceId: shakeri2026
- title: Proposed EU memory claim refused
  description: The European Commission refused the proposed citicoline memory health claim in Regulation (EU) 2025/2223; this does not ban the authorized ingredient or resolve every endpoint-specific trial.
  sourceId: eu-memory-claim-2025
```

## Claims

```yaml
- id: citicoline-versus-dietary-choline
  assertion: Citicoline and dietary choline are not synonymous; citicoline is CDP-choline, while choline is an essential nutrient used in membrane phospholipids and acetylcholine synthesis.
  relation: identity-distinction
  participants:
    - entityId: substance:citicoline
      role: cd-p-choline-substance
    - entityId: tag:choline-precursor
      role: choline-related-mechanism
  context: Chemical and nutritional identity distinction
  sourceIds:
    - efsa2024
    - nih-choline
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This distinction does not establish superiority of citicoline over dietary choline for any clinical outcome.
- id: citicoline-stroke-efficacy
  assertion: Citicoline has not demonstrated a clinically meaningful recovery benefit in the pivotal ICTUS acute-ischemic-stroke trial or the later Cochrane synthesis.
  relation: clinical-evidence
  participants:
    - entityId: substance:citicoline
      role: intervention
    - entityId: tag:stroke-recovery
      role: outcome
  context: Acute ischemic stroke
  sourceIds:
    - davalos2012
    - cochrane2020
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Cochrane rated the pooled evidence low certainty; this does not address every stroke subtype, timing or rehabilitation context.
- id: citicoline-tbi-efficacy
  assertion: Citicoline did not improve the prespecified global functional/cognitive outcome in the phase 3 COBRIT traumatic-brain-injury trial.
  relation: clinical-evidence
  participants:
    - entityId: substance:citicoline
      role: intervention
    - entityId: tag:traumatic-brain-injury-recovery
      role: outcome
  context: Complicated mild, moderate and severe nonpenetrating traumatic brain injury
  sourceIds:
    - zafonte2012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Trial adherence was incomplete, but adherent-patient analyses did not reverse the null primary conclusion.
- id: citicoline-memory-health-claim
  assertion: EFSA concluded that a cause-and-effect relationship was not established between citicoline consumption and improvement, maintenance or reduced loss of memory in middle-aged or older adults with age-associated subjective memory impairment.
  relation: regulatory-evidence-assessment
  participants:
    - entityId: substance:citicoline
      role: food-constituent
    - entityId: tag:episodic-memory
      role: memory-domain
  context: EU health-claim scientific assessment
  sourceIds:
    - efsa2024
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: EFSA evaluated a specific proposed food-health claim and target population, not all neurological indications.
- id: citicoline-cognition-patent
  assertion: A Kyowa Hakko Bio patent family contains method-of-use claims involving citicoline or its salts for cognitive, attentional and motor performance.
  relation: patent-claim
  participants:
    - entityId: substance:citicoline
      role: claimed-agent
    - entityId: tag:cognitive-task-performance
      role: claimed-domain
  context: Intellectual-property record associated with commercial citicoline applications
  sourceIds:
    - kyowa-patent-2024
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Patent issuance establishes intellectual-property rights, not clinical efficacy or regulatory approval.
- id: citicoline-choline
  assertion: Administered citicoline is converted into circulating metabolites including choline.
  relation: metabolic-precursor
  participants:
    - entityId: substance:citicoline
      role: substance
    - entityId: tag:choline-precursor
      role: mechanism
  context: Human and animal metabolism experiments distinguished parent compound from metabolites
  sourceIds:
    - lopez1987
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Metabolite availability alone does not establish a memory benefit.
```

## Interactions

```yaml
- id: citicoline-levodopa
  name: Levodopa-containing medicines
  otherSlug: null
  summary: The Spanish Somazina SmPC states that citicoline potentiates the effects of medicines containing L-Dopa.
  sourceId: aemps-somazina
  context: Product-label interaction statement; mechanism and clinical magnitude are not specified in the cited SmPC.
  conflictingSourceIds: []
- id: citicoline-meclofenoxate
  name: Meclofenoxate (centrophenoxine)
  otherSlug: meclofenoxate
  summary: The Spanish Somazina SmPC states that citicoline should not be administered together with meclofenoxate; the injectable label also names centrophenoxine.
  sourceId: aemps-somazina
  context: Product-label contraindicated coadministration statement; no quantitative interaction magnitude is provided.
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: "Citicoline: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/13804
  kind: Chemical database
  insight: Source for the retained parent-compound formula, molecular weight, PubChem CID and connectivity representation.
  limitation: Parent identity does not establish salt formulation, product quality, pharmacokinetics or clinical efficacy.
  funding: US National Library of Medicine database; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; not a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: dinsdale1983
  title: Pharmacokinetics of 14C CDP-choline
  authors: Dinsdale et al.
  year: 1983
  pmid: "6412727"
  url: https://pubmed.ncbi.nlm.nih.gov/6412727/
  kind: Human radiolabel-disposition study
  insight: Six adults showed near-complete absorption of radiolabel, biphasic plasma radioactivity and elimination through respiratory CO2 and urine.
  limitation: Radioactivity includes metabolites; the study does not establish an unchanged-citicoline elimination half-life.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: lopez1987
  title: Metabolism of cytidine (5′)-diphosphocholine (CDP-choline) following oral and intravenous administration to the human and the rat
  authors: López-Coviella et al.
  year: 1987
  pmid: "20501174"
  doi: 10.1016/0197-0186(87)90049-0
  url: https://pubmed.ncbi.nlm.nih.gov/20501174/
  kind: Human and animal metabolism study
  insight: Reported rapid disappearance of IV parent compound and increased circulating choline and cytidine after citicoline administration.
  limitation: Small older study; later human oral work found uridine rather than reliably detectable cytidine.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: wurtman2000
  title: Effect of oral CDP-choline on plasma choline and uridine levels in humans
  authors: Wurtman et al.
  year: 2000
  pmid: "10974208"
  doi: 10.1016/S0006-2952(00)00436-6
  url: https://pubmed.ncbi.nlm.nih.gov/10974208/
  kind: Randomized human pharmacokinetic/metabolism study
  insight: Oral 500–4000 mg citicoline increased plasma choline and uridine; cytidine was not reliably detectable.
  limitation: Twelve mildly hypertensive adults and short sampling; plasma metabolites do not establish parent-citicoline brain exposure or clinical benefit.
  funding: PubMed indexing lists governmental research support, but no inspected full funding declaration was available; classification not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: nakazaki2021
  title: "Citicoline and Memory Function in Healthy Older Adults: A Randomized, Double-Blind, Placebo-Controlled Clinical Trial"
  authors: Nakazaki et al.
  year: 2021
  pmid: "33978188"
  doi: 10.1093/jn/nxab119
  url: https://pubmed.ncbi.nlm.nih.gov/33978188/
  kind: Randomized placebo-controlled trial
  insight: Secondary episodic and composite memory measures improved, but the prespecified Spatial Span primary endpoint did not.
  limitation: Small 12-week selected-population trial; sponsor involvement and employee authorship limit independence and broader generalizability.
  funding: Kyowa Hakko Bio Co., Ltd funded the study and participated in study design, but not intervention, data collection or statistical analysis.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: EN and FW were Kyowa Hakko Bio employees; DC was a Kyowa Hakko USA employee; EM and KS were Biofortis employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://jn.nutrition.org/article/S0022-3166%2822%2900267-X/fulltext
- id: spiers1996
  title: Citicoline improves verbal memory in aging
  authors: Spiers et al.
  year: 1996
  pmid: "8624220"
  doi: 10.1001/archneur.1996.00550050071026
  url: https://pubmed.ncbi.nlm.nih.gov/8624220/
  kind: Randomized placebo-controlled trial with subsequent crossover study
  insight: Initial 1000 mg/day trial showed delayed-recall benefit only after identifying a lower-memory subgroup; a later 2000 mg/day crossover favored citicoline.
  limitation: Post hoc subgrouping and self-selected crossover follow-up weaken confirmation of a broad memory effect.
  funding: PubMed indexing lists governmental research support, but no inspected full funding declaration was available; classification not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: mcglade2019
  title: The Effect of Citicoline Supplementation on Motor Speed and Attention in Adolescent Males
  authors: McGlade et al.
  year: 2019
  pmid: "26179181"
  doi: 10.1177/1087054715593633
  url: https://pubmed.ncbi.nlm.nih.gov/26179181/
  kind: Randomized placebo-controlled trial
  insight: In 75 healthy adolescent males, 250–500 mg/day for 28 days improved attention and psychomotor-speed measures versus placebo.
  limitation: Small male-only enhancement study; accessible metadata showed corporate affiliations but did not expose a verified full funding/COI declaration.
  funding: Not assessed; author affiliation and branded-product use are not treated as proof of sponsorship.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; corporate author affiliations do not by themselves establish a declared conflict.
  conflictOfInterestStatus: not-assessed
- id: davalos2012
  title: "Citicoline in the treatment of acute ischaemic stroke: an international, randomised, multicentre, placebo-controlled study (ICTUS trial)"
  authors: Dávalos et al.
  year: 2012
  pmid: "22691567"
  doi: 10.1016/S0140-6736(12)60813-7
  url: https://pubmed.ncbi.nlm.nih.gov/22691567/
  kind: Multicentre randomized placebo-controlled trial
  insight: ICTUS stopped for futility and found no 90-day global-recovery advantage with 2000 mg/day citicoline.
  limitation: Moderate-to-severe acute-stroke population; does not resolve other indications, but directly addresses routine acute-stroke neuroprotection.
  funding: PubMed abstract states Ferrer Grupo; full funding/COI declaration was not accessible for inspection in this run.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: zafonte2012
  title: "Effect of citicoline on functional and cognitive status among patients with traumatic brain injury: Citicoline Brain Injury Treatment Trial (COBRIT)"
  authors: Zafonte et al.
  year: 2012
  pmid: "23168823"
  doi: 10.1001/jama.2012.13256
  url: https://pubmed.ncbi.nlm.nih.gov/23168823/
  kind: Phase 3 multicenter randomized placebo-controlled trial
  insight: In 1213 TBI patients, 2000 mg/day for 90 days did not improve the 90-day global functional/cognitive outcome.
  limitation: Medication adherence was low overall, although adherence analyses did not show a treatment benefit.
  funding: NICHD grants supported the trial; Ferrer Grupo supplied citicoline and identical placebo and was named among sponsors, with no stated role in conduct, analysis or manuscript preparation.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: All authors submitted ICMJE disclosures and none reported conflicts.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://jamanetwork.com/journals/jama/fullarticle/1392561
- id: cochrane2020
  title: Citicoline for treating people with acute ischemic stroke
  authors: Martí-Carvajal et al.
  year: 2020
  pmid: "32860632"
  doi: 10.1002/14651858.CD013066.pub2
  url: https://pubmed.ncbi.nlm.nih.gov/32860632/
  kind: Cochrane systematic review and meta-analysis
  insight: Ten RCTs with 4281 participants showed little or no difference in mortality, disability, functional or neurological recovery; evidence was low certainty.
  limitation: Included trials had high risk of bias; harms were poorly reported and quality of life was not assessed.
  funding: External sources listed Cochrane Stroke Group and Iberoamerican Cochrane Network; no commercial support was declared for the review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: All listed review authors declared none known.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8406786/
- id: efsa2024
  title: "‘Citicoline’ and support of the memory function: Evaluation of a health claim pursuant to Article 13(5) of Regulation (EC) No 1924/2006"
  authors: EFSA Panel on Nutrition, Novel Foods and Food Allergens
  year: 2024
  doi: 10.2903/j.efsa.2024.8861
  url: https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2024.8861
  kind: Official scientific health-claim assessment
  insight: EFSA found one positive episodic-memory RCT but inconsistent corroboration and no convincing mechanism; the proposed memory cause-effect relationship was not established.
  limitation: Addresses a defined food-health claim and target population, not medicinal treatment indications.
  funding: Official EFSA scientific opinion; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed here as a clinical-publication COI classification.
  conflictOfInterestStatus: not-assessed
- id: aemps-somazina
  title: Somazina 100 mg/ml and 1000 mg oral solution — Summary of Product Characteristics
  authors: Agencia Española de Medicamentos y Productos Sanitarios
  year: 2026
  url: https://cima.aemps.es/cima/dochtml/ft/53168
  kind: Official medicinal-product label
  insight: Gives Spanish indications, adult/elderly/pediatric dosing context, contraindications, interactions and listed adverse reactions for oral citicoline sodium.
  limitation: Product-specific Spanish label; authorization does not establish efficacy for unlabelled uses or supplement products.
  funding: Official regulatory label; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: aemps-somazina-injectable
  title: Somazina 500 mg and 1000 mg injectable solution — Summary of Product Characteristics
  authors: Agencia Española de Medicamentos y Productos Sanitarios
  year: 2026
  url: https://cima.aemps.es/cima/dochtml/ft/54389/FT_54389.html
  kind: Official medicinal-product label
  insight: Gives injectable dosing, slow-IV administration, persistent-intracranial-hemorrhage dose limit, interactions and pregnancy/lactation precautions.
  limitation: Product-specific Spanish label and formulation.
  funding: Official regulatory label; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: eu-novel-food-2026
  title: Consolidated Union list of novel foods — Citicoline conditions of use
  authors: European Union
  year: 2026
  url: https://eur-lex.europa.eu/eli/reg_impl/2017/2470/2026-07-02/eng/
  kind: Official EU legal act
  insight: Authorizes citicoline in food supplements at 500 mg/day and FSMPs at 250 mg/serving up to 1000 mg/day, with child-exclusion labeling.
  limitation: Food-law authorization and maximum levels are not evidence of clinical efficacy.
  funding: Official legal act; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: aha-stroke-2026
  title: 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke
  authors: American Heart Association/American Stroke Association
  year: 2026
  doi: 10.1161/STR.0000000000000513
  url: https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
  kind: Major clinical practice guideline
  insight: Its neuroprotection section states that current trials have not supplied sufficient evidence to warrant neuroprotective-agent use in clinical practice.
  limitation: The 2026 neuroprotection section does not provide a citicoline-specific recommendation.
  funding: Guideline development uses AHA/ASA conflict-management policies; individual funding classification not assessed here.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Guideline reports relationships-with-industry disclosure and recusal policies; individual declarations were not classified here.
  conflictOfInterestStatus: not-assessed
- id: nih-choline
  title: Choline — Fact Sheet for Health Professionals
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2022
  url: https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/
  kind: Authoritative nutrient monograph
  insight: Describes choline as an essential nutrient used in phospholipids, acetylcholine and other physiological pathways.
  limitation: A dietary-choline monograph does not establish citicoline-specific efficacy.
  funding: US National Institutes of Health resource; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: fda-warning-2019
  title: Pure Nootropics, LLC — FDA Warning Letter 565425
  authors: US Food and Drug Administration
  year: 2019
  url: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/pure-nootropics-llc-565425-02052019
  kind: Official regulatory enforcement letter
  insight: FDA cited disease-treatment claims for CDP-choline/citicoline products among claims causing products to be treated as unapproved new drugs.
  limitation: Firm-specific enforcement letter; not an ingredient-wide approval decision.
  funding: Official regulatory document; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: cohen2003
  title: "Long-term citicoline (cytidine diphosphate choline) use in patients with vascular dementia: neuroimaging and neuropsychological outcomes"
  authors: Cohen et al.
  year: 2003
  pmid: "12865605"
  doi: 10.1159/000071116
  url: https://pubmed.ncbi.nlm.nih.gov/12865605/
  kind: Double-blind randomized placebo-controlled trial
  insight: In 30 vascular-dementia patients, 500 mg twice daily for 12 months did not improve neuropsychological or MRI outcomes versus placebo.
  limitation: Small older trial; funding and full conflict declaration were not inspected.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: cotroneo2013
  title: "Effectiveness and safety of citicoline in mild vascular cognitive impairment: the IDEALE study"
  authors: Cotroneo et al.
  year: 2013
  pmid: "23403474"
  doi: 10.2147/CIA.S38420
  url: https://pubmed.ncbi.nlm.nih.gov/23403474/
  kind: Open nonrandomized controlled study
  insight: MMSE was more stable with citicoline in 349 adults with mild vascular cognitive impairment, but ADL/IADL did not differ.
  limitation: Open allocation and nonrandomized design leave substantial confounding and do not establish functional preservation.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: alvarez-sabin2013
  title: "Long-term treatment with citicoline may improve poststroke vascular cognitive impairment"
  authors: Alvarez-Sabín et al.
  year: 2013
  pmid: "23406981"
  doi: 10.1159/000346602
  url: https://pubmed.ncbi.nlm.nih.gov/23406981/
  kind: Open randomized usual-care comparison
  insight: Domain-level cognitive signals favored citicoline after stroke, but the mRS result was not significant and only 199 of 347 participants had one-year neuropsychological follow-up.
  limitation: Open treatment and attrition weaken causal and patient-important-outcome inference.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: shakeri2026
  title: "Effect of citicoline on cognitive function and functional recovery in patients with mild-to-moderate traumatic brain injury: a randomized placebo-controlled trial"
  authors: Shakeri Bavali Oleyayi et al.
  year: 2026
  pmid: "42679920"
  doi: 10.1016/j.neuroscience.2026.08.058
  url: https://pubmed.ncbi.nlm.nih.gov/42679920/
  kind: Single-center triple-blind randomized placebo-controlled pilot
  insight: A 60-person 90-day pilot reported better MMSE and secondary functional outcomes with 1000 mg/day citicoline.
  limitation: Preliminary single-center result; not a replication of COBRIT and full funding/COI disclosure was not inspected.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: hubner2024
  title: "Use of Citicoline in Attention-Deficit/Hyperactivity Disorder: A Pilot Study"
  authors: Hübner et al.
  year: 2024
  pmid: "38976279"
  doi: 10.1097/WNF.0000000000000602
  url: https://pubmed.ncbi.nlm.nih.gov/38976279/
  kind: Double-blind placebo-controlled crossover pilot
  insight: A small pediatric ADHD pilot did not find a significant benefit on assessed parameters.
  limitation: Registry reports 27 recruited and 22 completing; small short study cannot establish pediatric efficacy or broad safety.
  funding: Registry names Univates as sponsor/supporting institution; article-specific monetary funding was not verified.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: hc-cognitive-2025
  title: Cognitive Function Products
  authors: Health Canada
  year: 2025
  url: https://webprod.hc-sc.gc.ca/nhpid-bdipsn/atReq?atid=fonc.cognitive.func&lang=eng&wbdisable=true
  kind: Official natural-health-product monograph
  insight: Provides product-licensing ranges for citicoline sustained-attention and older-adult cognitive-health claims, including a 500 mg single-dose maximum.
  limitation: A licensing monograph is not evidence for every retail product or for stroke/TBI treatment.
  funding: Official licensing guidance; trial funding not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Individual drafting conflicts not reported in the inspected monograph.
  conflictOfInterestStatus: not-assessed
- id: eu-memory-claim-2025
  title: Commission Regulation (EU) 2025/2223 refusing to authorise a proposed citicoline memory health claim
  authors: European Commission
  year: 2025
  url: https://eur-lex.europa.eu/eli/reg/2025/2223/oj/eng
  kind: Official EU legal act
  insight: Refused the proposed citicoline memory-function claim effective 25 November 2025.
  limitation: The refusal is not a ban on the authorized novel-food ingredient and does not adjudicate every endpoint-specific study.
  funding: Official legal instrument; application by Edge Pharma Sp. z o.o.; trial funding not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a legal instrument; commercial applicant identified.
  conflictOfInterestStatus: not-assessed
- id: kyowa-patent-2024
  title: Administration of citicoline to improve cognitive performance, attentional performance, and motor function
  authors: Kyowa Hakko Bio Co., Ltd.
  year: 2024
  url: https://patents.google.com/patent/US12115181B2/en
  kind: Patent record
  insight: Method-of-use patent family includes claims involving citicoline or its salts for cognitive, attentional and motor-performance applications.
  limitation: A patent is an intellectual-property instrument, not peer-reviewed efficacy evidence or regulatory approval.
  funding: Not applicable; patent record assigned to Kyowa Hakko Bio Co., Ltd.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial assignee is identified by the patent record; clinical-publication COI status is not applicable.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: Spain
  activity: Medicinal use of Somazina oral and injectable citicoline-sodium products
  status: AEMPS product information lists treatment of neurological/cognitive disorders associated with cerebrovascular accidents; Somazina also lists head-trauma-associated disorders, with product-specific dosing and precautions.
  sourceUrl: https://cima.aemps.es/cima/dochtml/ft/53168
  asOf: 2026-10-04
- jurisdiction: European Union
  activity: Novel-food use in food supplements and foods for special medical purposes
  status: Consolidated Union-list conditions permit 500 mg/day in food supplements and 250 mg per serving up to 1000 mg/day in foods for special medical purposes; labeling must state the product is not intended for children.
  sourceUrl: https://eur-lex.europa.eu/eli/reg_impl/2017/2470/2026-07-02/eng/
  asOf: 2026-10-04
- jurisdiction: United States
  activity: Disease-treatment marketing claims for CDP-choline/citicoline supplement products
  status: An FDA warning letter treated cited disease claims for a seller's CDP-choline/citicoline products as drug claims contributing to unapproved-new-drug violations; the letter is firm-specific and not an ingredient-wide approval determination.
  sourceUrl: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/pure-nootropics-llc-565425-02052019
  asOf: 2026-10-04
- jurisdiction: European Union
  activity: Proposed citicoline memory health claim
  status: Regulation (EU) 2025/2223 refused the proposed memory-function claim effective 25 November 2025; this is not a ban on the authorized novel-food ingredient.
  sourceUrl: https://eur-lex.europa.eu/eli/reg/2025/2223/oj/eng
  asOf: 2026-10-10
- jurisdiction: Canada
  activity: Natural health product citicoline cognitive-function claims
  status: Health Canada’s 2025 monograph provides product-licensing ranges for sustained attention and older-adult cognitive health, including a 500 mg single-dose maximum; this is not blanket approval of every retail product or stroke/TBI treatment.
  sourceUrl: https://webprod.hc-sc.gc.ca/nhpid-bdipsn/atReq?atid=fonc.cognitive.func&lang=eng&wbdisable=true
  asOf: 2026-10-10
```
