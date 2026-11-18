---
slug: 9-methyl-beta-carboline
name: 9-ME-BC
subtitle: Experimental N9-methylated β-carboline
aliases:
  - 9-Methyl-beta-carboline
  - 9-Methyl-β-carboline
  - 9-Methylnorharmane
  - 9-Methyl-9H-pyrido[3,4-b]indole
  - 9-Methylnorharman
formula: C12H10N2
molecularWeight: 182.22 g/mol
pubchemCid: 164979
smiles: CN1C2=CC=CC=C2C3=C1C=NC=C3
category: Research compound
tags:
  - dopamine
accent: "#a9b993"
reviewedAt: "2026-11-18"
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Human elimination half-life has not been established in the cited literature.
  sourceId: pubmed-32285253
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-32285253
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
x-order: 9007199254740991
---

## Summary

9-ME-BC is a research compound studied in animals and cell cultures. Human pharmacokinetics, efficacy and safety remain unestablished.

## Description

9-ME-BC is the N9-methyl derivative of norharmane ([PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/164979)). A rat study reported better radial-maze learning after ten days of treatment. Separate studies examined restoration of dopaminergic markers following a toxin lesion and inhibition of monoamine oxidase in vitro. [Gruss et al.](https://pubmed.ncbi.nlm.nih.gov/22380576/) · [Wernicke et al.](https://if-pan.krakow.pl/pjp/pdf/2010/1_35.pdf) · [Keller et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC8592951/)

## Evidence note

Published studies and trial registry searches identified no study administering the exact compound to humans. The available elimination estimate comes from guinea-pig inner-ear fluid after local administration. [Patent application, example 3](https://patents.google.com/patent/CA2924755A1/en)

## Doses

```yaml
- label: Rat toxin-lesion experiment
  amount: 0.105 mg/kg/day
  quantity: 0.105
  quantityMax: null
  unit: mg/kg/day
  ingredient: 9-ME-BC hydrochloride
  route: Intracerebroventricular
  formulation: Hydrochloride in saline
  frequency: Continuous infusion
  duration: 14 days
  population: Rats given a unilateral intracerebroventricular MPP⁺ lesion
  purpose: Recovery of dopaminergic markers
  sourceCategory: research
  note: Osmotic minipump into the left ventricle. The publication gives the equivalent as 0.48 µmol/kg/day.
  sourceId: pubmed-20360614
- label: Rat radial-maze experiment
  amount: 2 µmol/100 g
  quantity: 2
  quantityMax: null
  unit: µmol/100 g
  ingredient: 9-ME-BC
  route: Intraperitoneal
  formulation: 9-ME-BC dissolved in saline
  frequency: Once daily
  duration: 5 or 10 days
  population: Female Wistar rats
  purpose: Spatial learning and hippocampal measures
  sourceCategory: research
  note: The shorter exposure did not show the reported learning improvement.
  sourceId: pubmed-22380576
- label: Primary midbrain culture experiment
  amount: 90 µM
  quantity: 90
  quantityMax: null
  unit: µM
  ingredient: 9-ME-BC
  route: In vitro
  formulation: 9-ME-BC added to culture medium
  frequency: Continuous exposure
  duration: 48 hours
  population: Primary mouse mesencephalic cultures
  purpose: Tyrosine hydroxylase immunoreactivity
  sourceCategory: research
  note: A parallel experiment varied concentration and removed astrocytes.
  sourceId: pubmed-32285253
- label: Guinea-pig perilymph experiment
  amount: 1.4 mg per ear
  quantity: 1.4
  quantityMax: null
  unit: mg per ear
  ingredient: 9-ME-BC
  formulation: Hydrogel
  route: Local round-window administration
  frequency: Single exposure
  duration: Samples collected through 24 hours
  population: Guinea pigs
  purpose: Measure elimination from inner-ear fluid
  sourceCategory: research
  note: Applicant-reported experiment in a patent application.
  sourceId: ca2924755a1
```

## Pharmacokinetics

```yaml
- id: guinea-pig-perilymph-round-window
  analyte: 9-ME-BC in cochlear perilymph
  route: Local round-window administration
  formulation: Hydrogel applied in the middle ear
  population: Guinea pigs
  endpoint: elimination-half-life
  statistic: approximate
  value: 3.4
  low: null
  high: null
  unit: hours
  context: A patent application estimated the local elimination half-time from perilymph samples collected between 20 minutes and 24 hours after a single 1.4 mg-per-ear exposure. Human and systemic kinetics remain unestablished.
  sourceId: ca2924755a1
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
- id: 9-me-bc-rat-spatial-learning
  conceptId: cognitive-performance
  name: Radial-maze spatial learning
  direction: Increased
  evidence: Limited research
  description: Ten days of treatment improved spatial learning in female Wistar rats. The five-day condition did not show that improvement.
  sourceId: pubmed-22380576
  population: Female Wistar rats
  exposure: Daily intraperitoneal treatment for five or ten days
  instrument: Radial-arm maze
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-22380576
    design: Controlled rat experiment
    comparator: Saline vehicle and untreated controls
    route: Intraperitoneal
    assessmentTime: After five or ten treatment days
- id: 9-me-bc-rat-hippocampal-dopamine
  conceptId: tissue-dopamine
  name: Hippocampal dopamine
  direction: Increased
  evidence: Limited research
  description: Hippocampal dopamine was higher after ten days in the same experiment. A tissue concentration cannot distinguish changes in synthesis, turnover or release.
  sourceId: pubmed-22380576
  population: Female Wistar rats
  exposure: Daily intraperitoneal treatment for five or ten days
  instrument: High-performance liquid chromatography
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-22380576
    design: Controlled rat experiment
    comparator: Saline vehicle and untreated controls
    route: Intraperitoneal
    assessmentTime: After five or ten treatment days
- id: 9-me-bc-rat-striatal-dopamine
  conceptId: tissue-dopamine
  name: Left striatal dopamine
  direction: Increased
  evidence: Limited research
  description: Following the MPP⁺ lesion, the 9-ME-BC group had higher dopamine in the infused-side striatum than the saline group.
  sourceId: pubmed-20360614
  population: Rats given a unilateral intracerebroventricular MPP⁺ lesion
  exposure: 14-day intracerebroventricular infusion of 9-ME-BC hydrochloride after 28 days of MPP⁺
  instrument: High-performance liquid chromatography
  magnitude: p < 0.01 versus lesion + saline. Six rats per group for this endpoint.
  reportType: measured-assessment
  study:
    id: pubmed-20360614
    design: Controlled rat toxin-lesion experiment
    comparator: MPP⁺ followed by saline and sham surgery
    route: Intracerebroventricular
    formulation: 9-ME-BC hydrochloride
    durationDays: 14
    assessmentTime: Day 42, after 28 days of MPP⁺ and 14 days of follow-up infusion
    sampleSize: 18
- id: 9-me-bc-rat-complex-i
  conceptId: mitochondrial-biomarkers
  name: Striatal mitochondrial complex I activity
  direction: Increased
  evidence: Limited research
  description: The 9-ME-BC group showed higher total complex I activity in the infused-side striatum at the end of the toxin-lesion experiment.
  sourceId: pubmed-20360614
  population: Male Wistar rats given a unilateral intracerebroventricular MPP⁺ lesion
  exposure: 14 days of intracerebroventricular 9-ME-BC hydrochloride following 28 days of MPP⁺
  instrument: In-gel NADH dehydrogenase assay
  magnitude: Approximately 75% higher than lesion plus saline and 80% higher than sham in the left striatum.
  reportType: measured-assessment
  study:
    id: pubmed-20360614
    design: Controlled rat toxin-lesion experiment
    comparator: MPP⁺ followed by saline and sham surgery
    route: Intracerebroventricular
    formulation: 9-ME-BC hydrochloride
    durationDays: 14
    assessmentTime: Day 42, after 28 days of MPP⁺ and 14 days of follow-up infusion
- id: 9-me-bc-rat-th
  conceptId: tyrosine-hydroxylase-immunoreactivity
  name: Nigral tyrosine hydroxylase-positive cell count
  direction: Variable
  evidence: Limited research
  description: The lesion + saline group showed a significant left–right difference. That asymmetry was not significant in the 9-ME-BC group. A change in marker-positive cell count cannot establish new neuron formation.
  sourceId: pubmed-20360614
  population: Rats given a unilateral intracerebroventricular MPP⁺ lesion
  exposure: 14-day intracerebroventricular infusion of 9-ME-BC hydrochloride after 28 days of MPP⁺
  instrument: Tyrosine hydroxylase immunohistochemistry and stereology
  magnitude: Left/right mean counts were 6,736/7,985 with lesion + saline and 7,480/8,199 with lesion + 9-ME-BC. The paper gives inconsistent sample counts in text and Figure 2.
  reportType: measured-assessment
  study:
    id: pubmed-20360614
    design: Controlled rat toxin-lesion experiment
    comparator: MPP⁺ followed by saline and sham surgery
    route: Intracerebroventricular
    formulation: 9-ME-BC hydrochloride
    durationDays: 14
    assessmentTime: Day 42, after 28 days of MPP⁺ and 14 days of follow-up infusion
- id: 9-me-bc-culture-dopamine
  conceptId: tissue-dopamine
  name: Dopamine in cultured midbrain cells
  direction: Variable
  evidence: Limited research
  description: Dopamine content was slightly higher in the treated cultures, but the difference did not reach statistical significance.
  sourceId: pubmed-17913302
  population: Primary mesencephalic cultures from embryonic mice
  exposure: 9-ME-BC added to culture medium
  instrument: Dopamine content assay
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-17913302
    design: Controlled cell-culture experiments
    comparator: Untreated cultures
- id: 9-me-bc-keller-culture-th
  conceptId: tyrosine-hydroxylase-immunoreactivity
  name: Tyrosine hydroxylase-positive cells in midbrain culture
  direction: Variable
  evidence: Limited research
  description: The positive cell count rose in standard cultures. Astrocyte-depleted cultures showed a weaker response at lower concentrations and a reduction in positive cells at 150 µM.
  sourceId: pubmed-32285253
  population: Primary mouse midbrain cultures
  exposure: 9-ME-BC at different concentrations with and without astrocytes
  instrument: Tyrosine hydroxylase immunostaining
  magnitude: In standard cultures, reported increases were 27 ± 7% at 70 µM and 33 ± 8% at 90 µM. In astrocyte-depleted cultures, the count fell by about 50% at 150 µM.
  reportType: measured-assessment
  study:
    id: pubmed-32285253
    design: Controlled cell-culture assays
    comparator: Untreated cultures
    assessmentTime: After 48 hours
```

## Mechanisms

```yaml
- title: Monoamine oxidase inhibition in vitro
  description: In a luminogenic assay with human MAO enzymes, the reported IC₅₀ was **1 µM** for MAO-A and **15.5 µM** for MAO-B. This measures inhibition in an assay. Target engagement and duration in people remain unknown.
  sourceId: pubmed-32285253
- title: Dopaminergic marker expression
  description: Primary midbrain cultures showed greater tyrosine hydroxylase expression in cells already expressing dopa decarboxylase, along with neurite outgrowth and changes in inflammatory markers.
  sourceId: pubmed-20374418
- title: Astrocyte signaling in culture
  description: Cortical astrocytes exposed to 9-ME-BC increased expression of several growth-factor and metabolic genes. A PI3K inhibitor blocked the increase in tyrosine hydroxylase-positive neurons in a separate mixed culture experiment.
  sourceId: pubmed-32285253
- title: DNA photosensitization
  description: With **6 µM** 9-methyl-norharmane under UVA at pH 7.4, isolated plasmid DNA had **1.3 ± 0.3** Fpg-sensitive lesions per 10,000 base pairs in water. The authors attributed the predominant oxidized-purine lesions to a type I reaction and the smaller cyclobutane pyrimidine dimer signal to triplet energy transfer.
  sourceId: pubmed-23842892
- title: MPTP oxidation in isolated mitochondria
  description: In human-derived mitochondria in vitro, 9-ME-BC inhibited MAO-B-mediated MPTP oxidation with an IC₅₀ of **7.3 µM**. The assay used a different substrate and preparation from Keller et al.
  sourceId: pubmed-21554916
- title: N2-methylation in enzyme assays
  description: Purified phenylethanolamine N-methyltransferase catalyzed N2-methylation of 9-methylnorharman in vitro. The study also detected β-carboline N2-methyltransferase activity in human adrenal medulla, leaving in vivo human metabolism undetermined.
  sourceId: pubmed-11900856
```

## Cautions

```yaml
- title: UVA-dependent damage to isolated DNA
  description: Photoexcited 9-ME-BC damaged isolated DNA. UVA alone and the compound kept in the dark produced no significant damage under the study conditions. Human photosensitivity and toxicity remain undetermined.
  sourceId: pubmed-23842892
- title: Human interaction risk is unquantified
  description: In vitro MAO-A and MAO-B inhibition raises the possibility of interactions with medicines or other exposures that affect monoamine signaling. Clinical co-exposure studies are needed to characterize that risk.
  sourceId: pubmed-32285253
- title: Unresolved compound identity in a mouse toxicity study
  description: Matsubara et al. reported reduced movement, lower brain monoamines and fewer nigral tyrosine hydroxylase-positive cells in the 9-MeNH arm. The registry identifier [indexed for that arm](https://pubchem.ncbi.nlm.nih.gov/compound/3036890) maps to a cationic isomer, while the study name suggests the neutral N9-methyl compound. The original tested structure requires confirmation.
  sourceId: pubmed-9453568
```

## Claims

```yaml
- id: 9-me-bc-rat-learning
  assertion: Ten days of 9-ME-BC improved radial-maze performance in female Wistar rats.
  relation: associated-with
  participants:
    - entityId: substance:9-methyl-beta-carboline
      role: Intervention
    - entityId: tag:cognitive-performance
      role: Radial-maze endpoint
  context: Controlled rat experiment comparing five and ten treatment days.
  sourceIds:
    - pubmed-22380576
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The result is a task-specific animal finding.
- id: 9-me-bc-rat-dopamine
  assertion: 9-ME-BC increased left striatal dopamine after an experimental MPP⁺ lesion.
  relation: associated-with
  participants:
    - entityId: substance:9-methyl-beta-carboline
      role: Intervention
    - entityId: tag:tissue-dopamine
      role: Measured tissue marker
  context: Rats received the compound directly into a cerebral ventricle for 14 days.
  sourceIds:
    - pubmed-20360614
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The measured tissue marker comes from a toxin-lesion model using direct brain infusion.
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
- id: pubmed-23842892
  title: Mechanisms of DNA damage by photoexcited 9-methyl-β-carbolines.
  authors: Mariana Vignoni, Federico A O Rasse-Suriani, Kathrin Butzbach, Rosa Erra-Balsells, Bernd Epe, Franco M Cabrerizo
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23842892/
  kind: Laboratory photochemistry study
  insight: The isolated-DNA experiments included 9-methyl-norharmane and found UVA-dependent DNA damage.
  limitation: Cell-free experiments under controlled irradiation do not quantify human toxicity.
  pmid: "23842892"
  doi: 10.1039/c3ob40344k
  sponsorshipStatus: non-industry-funded
  conflictOfInterestStatus: not-reported
  funding: Partial support from CONICET, Universidad de Buenos Aires, Deutsche Forschungsgemeinschaft, and MinCyT–DAAD.
  conflictsOfInterest: No conflict declaration located in the full text.
  disclosureUrl: https://ri.conicet.gov.ar/bitstream/handle/11336/2178/2013-Org__Biomol__Chem_-2013-11-5300_5309.pdf?isAllowed=y&sequence=1
- id: pubchem-164979
  title: 9-Methyl-beta-carboline
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/164979
  kind: Chemical identity record
  insight: Identity of the N9-methylated parent compound (CID 164979).
  limitation: Chemical identity only.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-17913302
  title: 9-Methyl-beta-carboline up-regulates the appearance of differentiated dopaminergic neurones in primary mesencephalic culture
  authors: Juliane Hamann, Catrin Wernicke, Jochen Lehmann, Heinz Reichmann, Hans Rommelspacher, Gabriele Gille
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/17913302/
  kind: Cell-culture study
  insight: More differentiated dopaminergic cells and increased dopamine uptake in culture. Dopamine content did not significantly increase.
  limitation: Cell-culture markers do not establish neuron formation or human outcomes.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "17913302"
  doi: 10.1016/j.neuint.2007.08.018
- id: pubmed-20374418
  title: "The exceptional properties of 9-methyl-beta-carboline: stimulation, protection and regeneration of dopaminergic neurons coupled with anti-inflammatory effects"
  authors: Witold Polanski, Christoph Enzensperger, Heinz Reichmann, Gabriele Gille
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20374418/
  kind: Cell-culture study
  insight: TH expression and neurite growth increased in primary cultures. Responses included changes after experimental toxin exposure.
  limitation: Preclinical toxin models. Some authors overlap the earlier culture study.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "20374418"
  doi: 10.1111/j.1471-4159.2010.06725.x
- id: pubmed-20360614
  title: 9-Methyl-beta-carboline has restorative effects in an animal model of Parkinson's disease.
  authors: Catrin Wernicke, Julian Hellmann, Barbara Zieba, Katarzyna Kuter, Krystyna Ossowska, Monika Frenzel, Norbert A Dencher, Hans Rommelspacher
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20360614/
  kind: Controlled rat study
  insight: Intracerebroventricular infusion increased dopamine in the ipsilateral striatum after an MPP⁺ lesion.
  limitation: Small toxin-lesion model with direct brain administration and biochemical/histological outcomes.
  sponsorshipStatus: non-industry-funded
  conflictOfInterestStatus: not-reported
  pmid: "20360614"
  doi: 10.1016/S1734-1140(10)70241-3
  funding: Partial support from European Commission FP6 MiMage and Deutsche Forschungsgemeinschaft SFB 472.
  conflictsOfInterest: No conflict declaration located in the journal PDF.
  disclosureUrl: https://if-pan.krakow.pl/pjp/pdf/2010/1_35.pdf
- id: pubmed-22380576
  title: 9-Methyl-β-carboline-induced cognitive enhancement is associated with elevated hippocampal dopamine levels and dendritic and synaptic proliferation.
  authors: Michael Gruss, Dorothea Appenroth, Armin Flubacher, Christoph Enzensperger, Jörg Bock, Christian Fleck, Gabriele Gille, Katharina Braun
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22380576/
  kind: Controlled rat study
  insight: Ten days of treatment improved radial-maze learning and increased hippocampal dopamine.
  limitation: Single rat experiment. The five-day regimen did not show the same findings.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "22380576"
  doi: 10.1111/j.1471-4159.2012.07713.x
- id: pubmed-32285253
  title: 9-Methyl-β-carboline inhibits monoamine oxidase activity and stimulates the expression of neurotrophic factors by astrocytes
  authors: Sebastian Keller, Witold Henryk Polanski, Christoph Enzensperger, Heinz Reichmann, Andreas Hermann, Gabriele Gille
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32285253/
  kind: Cell culture and enzyme assays
  insight: Measured MAO-A and MAO-B inhibition and changes in astrocytic gene expression.
  limitation: Biochemical and cell-culture endpoints. The assay does not determine inhibition at human exposures.
  sponsorshipStatus: non-industry-funded
  conflictOfInterestStatus: not-reported
  pmid: "32285253"
  doi: 10.1007/s00702-020-02189-9
  funding: Intramural Technische Universität Dresden support and Projekt DEAL open-access funding.
  conflictsOfInterest: No conflicts statement located in the inspected full text.
  disclosureUrl: https://pub.dzne.de/record/151649/files/DZNE-2020-01228.pdf?subformat=pdfa&version=1
- id: pubmed-9453568
  title: "Endogenously occurring beta-carboline induces parkinsonism in nonprimate animals: a possible causative protoxin in idiopathic Parkinson's disease."
  authors: K Matsubara, T Gonda, H Sawada, T Uezono, Y Kobayashi, T Kawamura, K Ohtaki, K Kimura, A Akaike
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9453568/
  kind: Controlled animal and cell-culture experiments
  insight: The study reported lower monoamines, reduced locomotion and fewer nigral TH-positive cells in the 9-MeNH arm.
  limitation: The indexed registry identifier and the reported compound name point to different structures. The original structure was not verified.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "9453568"
  doi: 10.1046/j.1471-4159.1998.70020727.x
- id: pubmed-21554916
  title: Inhibition of the bioactivation of the neurotoxin MPTP by antioxidants, redox agents and monoamine oxidase inhibitors.
  authors: Tomás Herraiz, Hugo Guillén
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21554916/
  kind: In vitro mitochondrial enzyme assay
  insight: 9-ME-BC inhibited MPTP oxidation in human-derived mitochondria.
  limitation: An isolated mitochondrial assay cannot establish human exposure or a clinical effect.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "21554916"
  doi: 10.1016/j.fct.2011.04.026
- id: pubmed-11900856
  title: "Phenylethanolamine N-methyltransferase has beta-carboline 2N-methyltransferase activity: hypothetical relevance to Parkinson's disease."
  authors: Debra A Gearhart, Edward J Neafsey, Michael A Collins
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11900856/
  kind: Enzyme and tissue assays
  insight: Purified phenylethanolamine N-methyltransferase methylated 9-methylnorharman in vitro. Human adrenal medulla showed beta-carboline N2-methyltransferase activity.
  limitation: Tissue and enzyme results do not establish human in vivo metabolism.
  pmid: "11900856"
  doi: 10.1016/S0197-0186(01)00115-2
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: ca2924755a1
  title: "Fluoro-9-methyl-β-carbolines (CA2924755A1)"
  authors: Hans Rommelspacher, Christoph Enzensperger
  year: 2015
  url: https://patents.google.com/patent/CA2924755A1/en
  kind: Patent application
  insight: Example 3 reports a local perilymph elimination half-time of about 3.4 hours for the parent comparator in guinea pigs.
  limitation: Applicant-reported animal data with local administration and sampling. The estimate does not describe systemic elimination or human PK.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: declared
  conflictsOfInterest: The application lists AudioCure Pharma GmbH as the original assignee.
  disclosureUrl: https://patents.google.com/patent/CA2924755A1/en
```

## Legal

```yaml
- jurisdiction: United States
  activity: FDA substance identification
  status: The FDA Global Substance Registration System lists 9-ME-BC under UNII GC837J2CCJ. A UNII identifies the substance and conveys no approval status.
  sourceUrl: https://precision.fda.gov/uniisearch/srs/unii/GC837J2CCJ
  asOf: "2026-11-18"
```
