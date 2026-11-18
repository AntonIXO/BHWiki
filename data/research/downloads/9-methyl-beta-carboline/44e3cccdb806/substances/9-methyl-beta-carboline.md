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
accent: '#a9b993'
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

9-ME-BC is a research compound with mixed results in animal models and cell cultures. Human pharmacokinetics, efficacy and safety remain unestablished.

## Description

9-ME-BC is the N9-methyl derivative of norharmane ([PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/164979)). A rat study reported better radial-maze learning after ten days of treatment. Separate studies examined restoration of dopaminergic markers following a toxin lesion and inhibition of monoamine oxidase in vitro. [Gruss et al.](https://pubmed.ncbi.nlm.nih.gov/22380576/) · [Wernicke et al.](https://if-pan.krakow.pl/pjp/pdf/2010/1_35.pdf) · [Keller et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC8592951/)

## Evidence note

A rat study found higher striatal dopamine after direct brain infusion following a toxin lesion. A separate systemic mouse experiment found lower brain dopamine and reduced movement. The models, routes and endpoints limit direct comparison. A search of published studies and trial registries identified no administered-human study of the exact compound. [Wernicke et al.](https://if-pan.krakow.pl/pjp/pdf/2010/1_35.pdf) · [Matsubara et al.](https://pubmed.ncbi.nlm.nih.gov/9453568/)

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
```

## Pharmacokinetics

```yaml
[]
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
  conflictingSourceIds:
    - pubmed-9453568
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
- id: 9-me-bc-mouse-brain-dopamine
  conceptId: tissue-dopamine
  name: Regional brain dopamine in mice
  direction: Decreased
  evidence: Limited research
  description: Systemic exposure reduced dopamine in multiple brain regions in a mouse experiment. The primary abstract does not give an exact route or dose.
  sourceId: pubmed-9453568
  population: C57BL/6 mice
  exposure: Seven days of systemic 9-ME-BC exposure
  instrument: Regional tissue monoamine measurements
  magnitude: null
  reportType: measured-assessment
  study: &id001
    id: pubmed-9453568
    design: Controlled mouse experiment
    comparator: Control mice
    durationDays: 7
    assessmentTime: After seven days of exposure
  conflictingSourceIds:
    - pubmed-20360614
    - pubmed-22380576
- id: 9-me-bc-mouse-th
  conceptId: tyrosine-hydroxylase-immunoreactivity
  name: Nigral tyrosine hydroxylase-positive cell count in mice
  direction: Decreased
  evidence: Limited research
  description: The treated mice showed fewer marker-positive cells in the substantia nigra pars compacta than controls.
  sourceId: pubmed-9453568
  population: C57BL/6 mice
  exposure: Seven days of systemic 9-ME-BC exposure
  instrument: Tyrosine hydroxylase immunohistochemistry
  magnitude: 66% of control cell count.
  reportType: measured-assessment
  study: *id001
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
  description: The parent compound, 9-methyl-norharmane, was one of three derivatives tested against isolated DNA. After UVA excitation, the study identified oxidative base lesions and cyclobutane pyrimidine dimers.
  sourceId: pubmed-23842892
- title: MPTP oxidation in isolated mitochondria
  description: In human-derived mitochondria in vitro, 9-ME-BC inhibited MAO-B-mediated MPTP oxidation with an IC₅₀ of **7.3 µM**. The assay used a different substrate and preparation from Keller et al.
  sourceId: pubmed-21554916
- title: Dimethylated metabolite in mice
  description: Mice given 9-ME-BC had more of the 2,9-dimethylated norharmanium cation in brain tissue than mice given either of the comparison β-carbolines. The separate cell-toxicity assay tested the dimethylated metabolite.
  sourceId: pubmed-9453568
```

## Cautions

```yaml
- title: UVA-dependent damage to isolated DNA
  description: Photoexcited 9-ME-BC damaged DNA in a cell-free experiment. The experiment did not measure skin photosensitivity, cancer incidence or risk from a given human exposure.
  sourceId: pubmed-23842892
- title: Human interaction risk is unquantified
  description: In vitro MAO-A and MAO-B inhibition raises the possibility of interactions with medicines or other exposures that affect monoamine signaling. Clinical co-exposure studies are needed to characterize that risk.
  sourceId: pubmed-32285253
- title: Reduced movement and monoamines in a mouse study
  description: Seven days of systemic exposure were associated with bradykinesia, reduced locomotion, lower brain monoamines and fewer tyrosine hydroxylase-positive cells. The primary abstract does not specify the dose, exact route or sample size.
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
  conflictingSourceIds:
    - pubmed-9453568
  assessment: not-formally-assessed
  limitation: A separate systemic mouse study found lower brain dopamine, with important differences in species and experimental design.
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
  pmid: '23842892'
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
  pmid: '17913302'
  doi: 10.1016/j.neuint.2007.08.018
- id: pubmed-20374418
  title: 'The exceptional properties of 9-methyl-beta-carboline: stimulation, protection and regeneration of dopaminergic neurons coupled with anti-inflammatory effects'
  authors: Witold Polanski, Christoph Enzensperger, Heinz Reichmann, Gabriele Gille
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20374418/
  kind: Cell-culture study
  insight: TH expression and neurite growth increased in primary cultures. Responses included changes after experimental toxin exposure.
  limitation: Preclinical toxin models. Some authors overlap the earlier culture study.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: '20374418'
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
  pmid: '20360614'
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
  pmid: '22380576'
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
  pmid: '32285253'
  doi: 10.1007/s00702-020-02189-9
  funding: Intramural Technische Universität Dresden support and Projekt DEAL open-access funding.
  conflictsOfInterest: No conflicts statement located in the inspected full text.
  disclosureUrl: https://pub.dzne.de/record/151649/files/DZNE-2020-01228.pdf?subformat=pdfa&version=1
- id: pubmed-9453568
  title: 'Endogenously occurring beta-carboline induces parkinsonism in nonprimate animals: a possible causative protoxin in idiopathic Parkinson''s disease.'
  authors: K Matsubara, T Gonda, H Sawada, T Uezono, Y Kobayashi, T Kawamura, K Ohtaki, K Kimura, A Akaike
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9453568/
  kind: Controlled animal and cell-culture experiments
  insight: The exact parent was associated with lower regional dopamine and serotonin, reduced locomotion and fewer nigral TH-positive cells in mice.
  limitation: Primary abstract only. It does not specify dose, precise systemic route or sample size.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: '9453568'
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
  pmid: '21554916'
  doi: 10.1016/j.fct.2011.04.026
```

## Legal

```yaml
[]
```
