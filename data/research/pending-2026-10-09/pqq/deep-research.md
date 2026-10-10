# Research Report: Research exactly pyrroloquinoline quinone (PQQ; slug pqq). Return a compact complete BHWiki Markdown article only, <=4500 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover PQQ disodium identity, controlled human cognition/fatigue studies versus mitochondrial cell/animal claims, small samples and sponsor interests, safety/PK, regulatory evaluations, and no unsupported mitochondrial-count or longevity claims. Every factual claim needs a source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus; use not-assessed when unknown. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: pqq
x-shape: compound
---

# Pyrroloquinoline quinone (PQQ)

## Summary

PQQ supplements generally contain **pyrroloquinoline quinone disodium salt**, not the free acid. Small human trials using approximately 20–21.5 mg/day for 8–12 weeks reported selected improvements in attention, memory, or composite cognitive scores, but samples were small, outcomes were numerous, and several studies involved product-manufacturer affiliations. The main fatigue report was an uncontrolled 17-person study; a controlled exercise trial found no improvement in aerobic performance or body composition despite higher skeletal-muscle PGC-1α. Cell and animal studies support redox and mitochondrial-signaling hypotheses, but do not establish increased mitochondrial number, mitochondrial “rejuvenation,” longevity, or treatment of fatigue or neurodegenerative disease. Short-term human safety findings are generally reassuring, while renal and long-term safety data remain limited. [S1][S2][S5][S6][S8][S9][S10][S11] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058?utm_source=openai))

```yaml
- sourceId: S1
  conclusion: "Defined disodium salt; CAS 122628-50-6; molecular weight 374.17 g/mol."
- sourceId: S8
  conclusion: "Small 12-week cognition RCT with 21.5 mg/day."
- sourceId: S10
  conclusion: "17-person, 8-week open-label stress/fatigue/sleep study."
- sourceId: S11
  conclusion: "Six-week exercise RCT: no performance or body-composition benefit."
- sourceId: S2
  conclusion: "EFSA found intended 20 mg/day adult supplement use safe, with important limitations."
```

## Description

PQQ is an aromatic, water-soluble orthoquinone. The supplement ingredient is **PQQ disodium salt**, also called methoxatin disodium salt or disodium pyrroloquinolinedione tricarboxylate: **C₁₄H₄N₂Na₂O₈**, CAS **122628-50-6**, anhydrous molecular weight **374.17 Da**. The free acid is chemically distinct. USP specifications recognize anhydrous material and hydrates containing up to three water molecules, so “20 mg PQQ” can depend on whether the label reports salt, hydrate, or free-acid equivalent. [S1][S2][S14] ([pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/compound/91864988?utm_source=openai))

```yaml
- sourceId: S1
  identity: "Disodium pyrroloquinoline quinone"
  formula: "C14H4N2Na2O8"
  cas: "122628-50-6"
  molecularWeight: "374.17 g/mol"
- sourceId: S14
  identityNote: "USP recognizes anhydrous PQQ disodium and hydrates up to trihydrate."
```

## Evidence note

The direct human evidence is small and short. Published cognition studies include randomized, placebo-controlled designs, but most enrolled roughly 20–64 participants and used branded products such as BioPQQ or mnemoPQQ. The 17-person fatigue/sleep study was open-label and lacked a placebo group. The 23-man exercise trial was controlled but did not improve functional performance. Sponsor interests are material: Mitsubishi Gas and Chemical funded and supplied PQQ in one biomarker study; its employees or contractors appear among authors of several cognition and neuroimaging studies; the 2023 cognition paper states that Mitsubishi commissioned the clinical contractor. [S5][S6][S7][S8][S9][S10][S11] ([escholarship.org](https://escholarship.org/content/qt9w23d73d/qt9w23d73d.pdf))

```yaml
- evidenceTier: "Controlled human cognition"
  interpretation: "Suggestive but low-certainty signals on selected tests."
- evidenceTier: "Controlled fatigue or energy"
  interpretation: "No consistent clinical benefit established; classic fatigue study was uncontrolled."
- evidenceTier: "Cell and animal mitochondria"
  interpretation: "Mechanistically informative, not proof of human mitochondrial expansion."
- evidenceTier: "Sponsor independence"
  interpretation: "Limited; several studies have manufacturer-linked authors, products, funding, or commissioning."
```

## Doses

These are **research and regulatory exposure levels**, not an established therapeutic regimen. Human studies commonly used 20 mg/day for 8–12 weeks; one cognition study used 21.5 mg/day. Pharmacokinetic work used 0.2 mg/kg once or 0.3 mg/kg/day for three days. EFSA’s EU novel-food authorization specifies 20 mg/day for adult food supplements, excluding pregnant and lactating women. FDA GRN 1118 addressed beverage uses up to 20 mg/serving in enhanced or fortified waters, 12 mg/serving in energy drinks, and 8 mg/serving in sports/electrolyte drinks, bottled waters, and non-milk meal replacements. [S2][S3][S4][S5][S6][S8][S10][S11] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058))

```yaml
- sourceId: S10
  dose: "20 mg/day"
  duration: "8 weeks"
  design: "Open-label; n=17"
- sourceId: S6
  dose: "20 mg/day"
  duration: "12 weeks"
  design: "Placebo-controlled; n=41"
- sourceId: S8
  dose: "21.5 mg/day"
  duration: "12 weeks"
  design: "Randomized; n=64 randomized, 58 completers"
- sourceId: S11
  dose: "20 mg/day"
  duration: "6 weeks"
  design: "Randomized exercise trial; n=23 men"
- sourceId: S4
  dose: "20 mg/day maximum"
  population: "EU adult food-supplement use; pregnancy/lactation excluded"
```

## Pharmacokinetics

Human pharmacokinetic data are sparse. In a crossover study of 10 healthy adults, a single oral dose of 0.2 mg/kg produced a serum PQQ peak at approximately 2–3 hours; serum clearance paralleled urinary changes. Approximately 0.1% of administered nonderivatized parent PQQ was recovered in urine during graded exposure up to 0.3 mg/kg/day. These measurements do not establish a complete human absorption fraction, half-life, tissue distribution, brain exposure, metabolism, or long-term accumulation profile. EFSA specifically described human and animal ADME information as limited. [S2][S5] ([escholarship.org](https://escholarship.org/content/qt9w23d73d/qt9w23d73d.pdf))

```yaml
- sourceId: S5
  population: "10 healthy adults; 5 women and 5 men"
  singleDose: "0.2 mg/kg"
  observedPeak: "Serum peak around 2–3 hours"
  urinaryRecovery: "Approximately 0.1% as nonderivatized parent PQQ"
- sourceId: S2
  pharmacokineticLimitation: "Absorption, distribution, metabolism, and excretion data limited."
- sourceId: S5
  notEstablished: "Human half-life, tissue distribution, brain concentration, and validated absolute bioavailability."
```

## Modifiers

Observed effects varied by age, baseline performance, study design, and product. In one study, younger adults showed processing-speed, execution-speed, and cognitive-flexibility changes by week 8, whereas older adults showed composite and verbal-memory changes by week 12. In another, the Touch-M signal appeared only among participants with lower baseline scores. Exercise also modified the biological readout: PQQ plus endurance training increased muscle PGC-1α, but training-related aerobic improvements occurred irrespective of PQQ. Products are not necessarily manufacturing-identical: the EFSA-reviewed BioPQQ was fermented with *Hyphomicrobium denitrificans*, while FDA GRN 1118 described *Methylovorus glucosotrophus*. [S2][S3][S6][S9][S11] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/36807425/))

```yaml
- modifier: "Age"
  observation: "Cognitive domains and timing differed between younger and older subgroups."
- modifier: "Baseline performance"
  observation: "A visual-spatial signal appeared in a lower-baseline subgroup."
- modifier: "Exercise"
  observation: "Training increased VO2peak and duration in both groups; PQQ selectively increased PGC-1α."
- modifier: "Product identity"
  observation: "Commercial and regulatory dossiers use different production strains and formulations."
- modifier: "Sponsor/product linkage"
  observation: "Manufacturer involvement may affect replication and evidentiary independence."
```

## Effects

**Cognition.** In 41 healthy older adults, 20 mg/day for 12 weeks produced a smaller change in Stroop interference ratio versus placebo; a Touch-M improvement appeared only in the lower-baseline PQQ subgroup. A 64-person randomized study using 21.5 mg/day reported between-group improvements across multiple Cognitrax domains, with 58 completers. A separate placebo-controlled study in adults aged 20–65 years reported composite- and verbal-memory improvements overall, with age-stratified changes in younger and older participants. [S6][S8][S9] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/26782228/))

**Prefrontal physiology.** In 20 healthy adults aged 50–70 years, 20 mg/day for 12 weeks was associated with higher right-prefrontal hemoglobin and a greater fall in tissue oxygen saturation measured by time-resolved near-infrared spectroscopy. These are surrogate physiological findings, not proof of improved cognition or cerebral disease treatment. [S7] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/27526146/))

**Fatigue, stress, and sleep.** An open-label study of 17 adults taking 20 mg/day for eight weeks reported improvements in Profile of Mood States fatigue, vigor, tension-anxiety, depression, anger-hostility, confusion, and several sleep measures. Without placebo control, blinding, or a prespecified objective fatigue endpoint, expectancy and regression-to-the-mean effects cannot be separated from PQQ effects. [S10] ([ffhdj.com](https://www.ffhdj.com/index.php/ffhd/article/view/81))

**Exercise and energy.** In 23 untrained men receiving 20 mg/day during six weeks of supervised endurance training, PQQ did not improve aerobic performance or body composition versus placebo. PGC-1α protein increased, but the surrogate change did not translate into a demonstrated ergogenic outcome. [S11] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/31860387/?utm_source=openai))

**Biomarkers.** In 10 healthy adults, three days of approximately 0.3 mg/kg/day was associated with lower CRP and IL-6 and changes in urinary metabolites interpreted by the authors as consistent with altered mitochondrial-related metabolism. These were exploratory, short-term biomarker findings, not clinical anti-inflammatory or metabolic outcomes. [S5] ([escholarship.org](https://escholarship.org/content/qt9w23d73d/qt9w23d73d.pdf))

```yaml
- domain: "Memory and attention"
  result: "Preliminary positive signals in small short RCTs."
- domain: "Fatigue and sleep"
  result: "Positive uncontrolled report; controlled confirmation lacking."
- domain: "Aerobic performance"
  result: "No between-group benefit in a six-week training RCT."
- domain: "Inflammation/metabolism"
  result: "Short-term biomarker changes in n=10; clinical relevance unknown."
- domain: "Cerebral physiology"
  result: "Small surrogate NIRS changes; not a disease endpoint."
```

## Outcomes

The best-supported human outcome is a **preliminary cognitive signal**, not a broadly established nootropic effect. Fatigue and sleep claims rest mainly on an uncontrolled study. The controlled exercise result is null for performance and body composition. Human mitochondrial outcomes have not been demonstrated directly: available evidence consists of PGC-1α protein or indirect urinary-metabolite changes. Short-term safety findings are more reassuring than efficacy findings, but they do not define long-term renal, reproductive, or disease-specific safety. [S2][S5][S8][S10][S11] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058))

```yaml
- outcome: "Cognition"
  certainty: "Low"
  status: "Preliminary signal; replication and larger independent trials needed."
- outcome: "Fatigue"
  certainty: "Very low"
  status: "Uncontrolled positive report; no reliable treatment effect established."
- outcome: "Mitochondrial number"
  certainty: "Not established in humans"
  status: "No cited human trial measured mitochondrial number or turnover."
- outcome: "Longevity"
  certainty: "Not established"
  status: "No cited human longevity or lifespan endpoint."
- outcome: "Short-term tolerability"
  certainty: "Moderate-low"
  status: "Generally reassuring, with limited renal assessment and duration."
```

## Mechanisms

PQQ is a redox-active quinone originally characterized as a cofactor in bacterial dehydrogenases. In mouse Hepa1-6 hepatocytes exposed to 10–30 μM PQQ for 24–48 hours, investigators observed higher citrate-synthase and cytochrome-c-oxidase activity, Mitotracker signal, mitochondrial-DNA content, and oxygen respiration, together with CREB phosphorylation and increased PGC-1α expression. siRNA reduction of CREB or PGC-1α blocked the reported response. These findings support a cell-signaling hypothesis but are not measurements in humans. [S2][S12] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058?utm_source=openai))

The human exercise study found higher skeletal-muscle PGC-1α protein after PQQ plus training, but no performance benefit. The human biomarker study found urinary-metabolite changes that the authors interpreted as compatible with altered mitochondrial efficiency. Neither result establishes more mitochondria, improved mitochondrial turnover, or increased lifespan in humans. [S5][S11] ([escholarship.org](https://escholarship.org/content/qt9w23d73d/qt9w23d73d.pdf))

```yaml
- mechanism: "Redox modulation"
  evidence: "Chemical and cell-model evidence."
  humanStatus: "Biological plausibility only."
- mechanism: "CREB–PGC-1α signaling"
  evidence: "Mouse hepatocyte model; PGC-1α protein signal in one human exercise trial."
  humanStatus: "Surrogate, not direct mitochondrial biogenesis."
- mechanism: "Mitochondrial function"
  evidence: "Cell respiration and indirect human urinary-metabolite changes."
  humanStatus: "No direct human mitochondrial-count evidence."
- mechanism: "Longevity"
  evidence: "Not demonstrated by the cited human or regulatory studies."
```

## Cautions

EFSA reviewed 12 clinical studies with doses up to 100 mg/day and durations up to 24 weeks and found no safety concern in the reported data, but noted that the studies were not designed to comprehensively assess renal function. In rats, urinary crystals or protein and renal findings occurred at high exposures; EFSA selected a 100 mg/kg/day NOAEL for BioPQQ based on a 90-day study. These animal values are not human dose limits. [S2][S3] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058))

The EU authorization excludes pregnant and lactating women, and the efficacy evidence is almost entirely in healthy adults. Published trials were too small and short to characterize uncommon adverse events, prolonged use, use in kidney disease, or use with complex medication regimens. Several RCT reports found no clinically relevant laboratory or adverse-event signal, but that does not establish long-term safety. [S2][S6][S8][S9] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058))

```yaml
- caution: "Renal uncertainty"
  evidence: "Human renal assessment incomplete; high-dose rat renal findings reported."
- caution: "Pregnancy/lactation"
  evidence: "Excluded from the EU intended-use authorization."
- caution: "Duration"
  evidence: "Human studies generally lasted days to 24 weeks."
- caution: "Population"
  evidence: "Healthy adults predominate; disease-specific safety is not established."
- caution: "Product variability"
  evidence: "Manufacturing strains, hydration state, purity, and formulations differ."
```

## Claims

“Supports selected cognitive-test performance” is a defensible but low-certainty description of the human evidence. “Reduces fatigue” is not established because the principal fatigue study was open-label and the controlled exercise trial was negative for performance. “Increases mitochondrial biogenesis” is supported only as a cell-model pathway hypothesis and, in humans, by a PGC-1α surrogate; it should not be converted into a claim of increased mitochondrial count. “Extends lifespan,” “rejuvenates mitochondria,” or treats neurodegenerative disease are unsupported by the cited human evidence. [S5][S6][S8][S9][S10][S11][S12] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC2804159/?utm_source=openai))

```yaml
- claim: "Improves selected memory or attention tests"
  classification: "Preliminary; low certainty"
- claim: "Reliably reduces fatigue or increases energy"
  classification: "Not established"
- claim: "Increases mitochondrial number in humans"
  classification: "Unsupported by cited human studies"
- claim: "Extends lifespan or slows human aging"
  classification: "Unsupported"
- claim: "Treats neurodegenerative or mitochondrial disease"
  classification: "Not established clinically"
```

## Interactions

The cited human and regulatory sources do not establish clinically relevant drug–drug or supplement–drug interactions. They also do not provide a validated interaction-sensitive pharmacokinetic model. PQQ’s quinone/redox chemistry creates mechanistic plausibility for context-dependent interactions, but that is not evidence of a clinically observed interaction. Combination studies involving other supplements cannot be interpreted as interaction studies unless they were designed and powered for that purpose. [S2][S5][S12] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058))

```yaml
- interactionEvidence: "No robust clinical interaction dataset established in the cited sources."
- pharmacokinetics: "Human ADME characterization remains limited."
- mechanisticIssue: "Redox-active quinone chemistry is not equivalent to demonstrated clinical interaction."
- interpretation: "Absence of interaction data is not evidence of absence."
```

## Experience links

```yaml
- sourceId: S6
  label: "12-week cognition RCT in healthy older adults"
  url: "https://pubmed.ncbi.nlm.nih.gov/26782228/"
- sourceId: S8
  label: "12-week cognition RCT using mnemoPQQ"
  url: "https://pubmed.ncbi.nlm.nih.gov/34415830/"
- sourceId: S9
  label: "Cognition study in younger and older adults"
  url: "https://doi.org/10.1039/D2FO01515C"
- sourceId: S10
  label: "Open-label stress, fatigue, and sleep study"
  url: "https://www.ffhdj.com/index.php/ffhd/article/view/81"
- sourceId: S11
  label: "Exercise performance and PGC-1α RCT"
  url: "https://pubmed.ncbi.nlm.nih.gov/31860387/"
- sourceId: S5
  label: "Human PK and biomarker crossover study"
  url: "https://doi.org/10.1016/j.jnutbio.2013.07.008"
```

## References

```yaml
- sourceId: S1
  title: "Disodium pyrroloquinoline quinone"
  authorsOrOrganization: "National Center for Biotechnology Information, PubChem"
  year: 2026
  url: "https://pubchem.ncbi.nlm.nih.gov/compound/91864988"
  kind: "Chemical database record"
  insight: "Identity, formula, CAS number, molecular weight, and synonyms."
  limitation: "Database record and computed descriptors; not a pharmacology or clinical study."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S2
  title: "Safety of pyrroloquinoline quinone disodium salt as a novel food pursuant to Regulation (EC) No 258/97"
  authorsOrOrganization: "EFSA Panel on Dietetic Products, Nutrition and Allergies"
  year: 2017
  url: "https://doi.org/10.2903/j.efsa.2017.5058"
  kind: "Regulatory scientific opinion"
  insight: "20 mg/day adult intended use, toxicology, human safety-study summary, ADME limitations, renal uncertainty."
  limitation: "Relied partly on applicant data and unpublished studies; human studies were not comprehensive renal assessments."
  funding: "not-assessed"
  sponsorshipStatus: "Applicant dossier evaluated by EFSA"
  conflictsOfInterest: "not-assessed in the opinion record"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S3
  title: "GRAS Notice-(GRN) 1118 Agency Response Letter"
  authorsOrOrganization: "U.S. Food and Drug Administration, Center for Food Safety and Applied Nutrition"
  year: 2023
  url: "https://www.fda.gov/media/173618/download"
  kind: "Regulatory response letter"
  insight: "FDA had no questions regarding notifier-defined GRAS beverage uses and described identity and manufacturing."
  limitation: "FDA did not make its own GRAS determination, evaluate health claims, or determine drug-law issues."
  funding: "Notifier-sponsored submission"
  sponsorshipStatus: "Industry-submitted regulatory dossier"
  conflictsOfInterest: "Notifier and consultant interests are intrinsic to the submission"
  conflictOfInterestStatus: "Disclosed by context"

- sourceId: S4
  title: "Commission Implementing Regulation (EU) 2018/quinoline quinone disodium salt as a novel food under Regulation (EU) 2015/2283 of the European Parliament and of the Council and amending Commission Implementing Regulation (EU) 2017/2470"
  authorsOrOrganization: "European Commission"
  year: 2018
  url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32018R1122"
  kind: "EU legal act"
  insight: "Union authorization, 20 mg/day maximum for adult supplements, exclusion of pregnancy/lactation, labeling requirements."
  limitation: "Food-use authorization is not an efficacy or drug approval."
  funding: "not-applicable"
  sponsorshipStatus: "Initial application by Mitsubishi Gas Chemical Company"
  conflictsOfInterest: "Applicant proprietary-data interests documented in the act"
  conflictOfInterestStatus: "Disclosed"

- sourceId: S5
  title: "Dietary pyrroloquinoline quinone (PQQ) alters indicators of inflammation and mitochondrial-related metabolism in human subjects"
  authorsOrOrganization: "Calliandra B. Harris, Winyoo Chowanadisai, Darya O. Mishchuk, Mike A. Satre, Carolyn M. Slupsky, Robert B. Rucker"
  year: 2013
  url: "https://doi.org/10.1016/j.jnutbio.2013.07.008"
  kind: "Peer-reviewed human crossover study"
  insight: "Serum peak around 2–3 hours, approximately 0.1% urinary parent recovery, and short-term biomarker changes in n=10."
  limitation: "Very small healthy sample, brief exposure, indirect mitochondrial measures, no clinical outcomes."
  funding: "Mitsubishi Gas and Chemical Company; California Vitamin Settlement Fund"
  sponsorshipStatus: "Partly industry-funded; PQQ supplied by Mitsubishi"
  conflictsOfInterest: "Funding and product supply disclosed; funders reported no role in design, analysis, or publication"
  conflictOfInterestStatus: "Disclosed"

- sourceId: S6
  title: "Effect of the Antioxidant Supplement Pyrroloquinoline Quinone Disodium Salt (BioPQQ™) on Cognitive Functions"
  authorsOrOrganization: "Yuji Itoh, Kyoko Hine, Hiroshi Miura, Tatsuo Uetake, Masahiko Nakano, Naohiro Takemura, Kaoru Sakatani"
  year: 2016
  url: "https://pubmed.ncbi.nlm.nih.gov/26782228/"
  kind: "Peer-reviewed randomized placebo-controlled human trial"
  insight: "41 healthy older adults; 20 mg/day for 12 weeks; selected Stroop and Touch-M findings."
  limitation: "Small sample, selective endpoints, subgroup finding, limited duration."
  funding: "not-assessed in the abstract"
  sponsorshipStatus: "Manufacturer-affiliated author; BioPQQ product study"
  conflictsOfInterest: "Mitsubishi Gas and Chemical author affiliation"
  conflictOfInterestStatus: "Disclosed by affiliation"

- sourceId: S7
  title: "Effects of Antioxidant Supplements (BioPQQ™) on Cerebral Blood Flow and Oxygen Metabolism in the Prefrontal Cortex"
  authorsOrOrganization: "Masahiko Nakano, Yuta Murayama, Lizhen Hu, Kazuto Ikemoto, Tatsuo Uetake, Kaoru Sakatani"
  year: 2016
  url: "https://pubmed.ncbi.nlm.nih.gov/27526146/"
  kind: "Peer-reviewed randomized human neuroimaging study"
  insight: "20 healthy adults; 20 mg/day for 12 weeks; small NIRS changes in prefrontal physiology."
  limitation: "Small surrogate-endpoint study; no independent clinical outcome."
  funding: "not-assessed"
  sponsorshipStatus: "Manufacturer and contractor affiliations present"
  conflictsOfInterest: "Mitsubishi Gas and Chemical and CX Medical affiliations"
  conflictOfInterestStatus: "Disclosed by affiliation"

- sourceId: S8
  title: "Effect of Dietary Pyrroloquinoline Quinone Disodium Salt on Cognitive Function in Healthy Volunteers: A Randomized, Double-Blind, Placebo-Controlled, Parallel-Group Study"
  authorsOrOrganization: "Yoshiaki Shiojima, Megumi Takahashi, Ryohei Takahashi, Hiroyoshi Moriyama, Debasis Bagchi, Manashi Bagchi, Masanori Akanuma"
  year: 2022
  url: "https://pubmed.ncbi.nlm.nih.gov/34415830/"
  kind: "Peer-reviewed randomized placebo-controlled human trial"
  insight: "64 randomized; 58 completers; 21.5 mg/day for 12 weeks; multiple Cognitrax-domain findings."
  limitation: "Small sample, multiple cognitive outcomes, short duration, industry-linked affiliations."
  funding: "not-assessed"
  sponsorshipStatus: "Industry-linked affiliations including Ryusendo and Dr. Herbs"
  conflictsOfInterest: "Affiliations disclose commercial research roles"
  conflictOfInterestStatus: "Disclosed by affiliation"

- sourceId: S9
  title: "Pyrroloquinoline quinone disodium salt improves brain function in both younger and older adults"
  authorsOrOrganization: "Masanori Tamakoshi, Tomomi Suzuki, Eiichiro Nishihara, Shinichiro Nakamura, Kazuto Ikemoto"
  year: 2023
  url: "https://doi.org/10.1039/D2FO01515C"
  kind: "Peer-reviewed double-blind placebo-controlled human study"
  insight: "20 mg/day for 12 weeks; overall memory findings and age-stratified cognitive results."
  limitation: "Small short study with multiple analyses and product-manufacturer commissioning."
  funding: "Mitsubishi Gas Chemical Company commissioned the clinical contractor"
  sponsorshipStatus: "Industry-commissioned study using BioPQQ"
  conflictsOfInterest: "Manufacturer involvement disclosed in the article"
  conflictOfInterestStatus: "Disclosed"

- sourceId: S10
  title: "Effects of Oral Supplementation with Pyrroloquinoline Quinone on Stress, Fatigue, and Sleep"
  authorsOrOrganization: "Masahiko Nakano, Tetsuro Yamamoto, Hisayoshi Okamura, Akira Tsuda, Yasuyuki Kowatari"
  year: 2012
  url: "https://www.ffhdj.com/index.php/ffhd/article/view/81"
  kind: "Human open-label clinical study"
  insight: "17 adults; 20 mg/day for 8 weeks; self-report stress, fatigue, quality-of-life, and sleep changes."
  limitation: "No placebo or blinding; small sample; subjective outcomes."
  funding: "not-assessed"
  sponsorshipStatus: "Manufacturer-affiliated author"
  conflictsOfInterest: "Mitsubishi Gas and Chemical affiliation"
  conflictOfInterestStatus: "Disclosed by affiliation"

- sourceId: S11
  title: "Effects of Pyrroloquinoline Quinone (PQQ) Supplementation on Aerobic Exercise Performance and Indices of Mitochondrial Biogenesis in Untrained Men"
  authorsOrOrganization: "Paul S. Hwang, Steven B. Machek, Thomas D. Cardaci, Dylan T. Wilburn, Caelin S. Kim, Emiliya S. Suezaki, Darryn S. Willoughby"
  year: 2020
  url: "https://pubmed.ncbi.nlm.nih.gov/31860387/"
  kind: "Peer-reviewed randomized placebo-controlled exercise trial"
  insight: "23 men; 20 mg/day for six weeks with endurance training; PGC-1α increased but performance and body composition did not."
  limitation: "Small all-male sample, short duration, surrogate mitochondrial marker."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S12
  title: "Pyrroloquinoline Quinone Stimulates Mitochondrial Biogenesis through cAMP Response Element-binding Protein Phosphorylation and Increased PGC-1α Expression"
  authorsOrOrganization: "Winyoo Chowanadisai, Kristina A. Bauerly, Edwin Tchaparian, Alex Wong, Geoffrey A. Cortopassi, Robert B. Rucker"
  year: 2010
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2804159/"
  kind: "Peer-reviewed cell mechanistic study"
  insight: "Mouse hepatocyte model linking PQQ exposure to CREB, PGC-1α, respiration, and mitochondrial-related markers."
  limitation: "In vitro mouse-cell exposure; does not establish human pharmacology, mitochondrial number, or clinical benefit."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S14
  title: "Pyrroloquinoline Quinone Disodium"
  authorsOrOrganization: "United States Pharmacopeia"
  year: 2021
  url: "https://doi.org/10.31003/USPNF_M10495_03_01"
  kind: "Pharmacopeial monograph"
  insight: "Anhydrous and hydrate specifications, chemical identity, and quality definition."
  limitation: "Quality standard, not efficacy or clinical-safety evidence."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
```

## Legal

FDA GRN 1118 closed on July 31, 2023 with a “no questions” response for specified beverage uses. The letter states that FDA did not make its own GRAS determination, did not evaluate labeling claims, and did not resolve all other FD&C Act issues. This is not FDA approval of PQQ as a drug or proof of efficacy. [S3] ([hfpappexternal.fda.gov](https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=1118&set=grasnotices))

The EU authorized PQQ disodium salt as a novel food in 2018 for adult food supplements at up to 20 mg/day, excluding pregnant and lactating women, with specific naming and labeling requirements. EFSA’s safety opinion supported that intended use but identified limited ADME and renal-assessment data. [S2][S4] ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058))

```yaml
- jurisdiction: "United States"
  status: "FDA no-questions GRAS response for notifier-defined food uses"
  scope: "Specified beverage categories and concentrations"
  notEstablished: "Drug approval, efficacy approval, or universal safety certification"
- jurisdiction: "European Union"
  status: "Authorized novel food"
  maximum: "20 mg/day in adult food supplements"
  exclusions: "Pregnant and lactating women"
- regulatoryInterpretation: "Food-use safety determinations do not validate mitochondrial-count, longevity, fatigue-treatment, or disease-treatment claims."
```

## Research Metadata
- **Total research steps**: 63
- **Search queries executed**: 7
- **Citations found**: 14
- **Task ID**: resp_06fa4c734ef9c41b016ac94bcb025c87d29fe4afe85b155de1
- **Execution time**: 662.75 seconds

## Citations
1. [Safety of pyrroloquinoline quinone disodium salt as a novel food pursuant to Regulation (<fc>EC</fc>) No 258/97 - - 2017 - EFSA Journal - Wiley Online Library](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058?utm_source=openai)
2. [Disodium pyrroloquinoline quinone | C14H4N2Na2O8 | CID 91864988 - PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/91864988?utm_source=openai)
3. [Dietary pyrroloquinoline quinone (PQQ) alters indicators of inflammation and mitochondrial-related metabolism in human subjects](https://escholarship.org/content/qt9w23d73d/qt9w23d73d.pdf)
4. [Safety of pyrroloquinoline quinone disodium salt as a novel food pursuant to Regulation (<fc>EC</fc>) No 258/97 - - 2017 - EFSA Journal - Wiley Online Library](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.5058)
5. [Pyrroloquinoline quinone disodium salt improves brain function in both younger and older adults - PubMed](https://pubmed.ncbi.nlm.nih.gov/36807425/)
6. [Effect of the Antioxidant Supplement Pyrroloquinoline Quinone Disodium Salt (BioPQQ™) on Cognitive Functions - PubMed](https://pubmed.ncbi.nlm.nih.gov/26782228/)
7. [Effects of Antioxidant Supplements (BioPQQ™) on Cerebral Blood Flow and Oxygen Metabolism in the Prefrontal Cortex - PubMed](https://pubmed.ncbi.nlm.nih.gov/27526146/)
8. [Effects of Oral Supplementation with Pyrroloquinoline Quinone on Stress, Fatigue, and Sleep | Functional Foods in Health and Disease - Online ISSN: 2160-3855; Print ISSN: 2378-7007](https://www.ffhdj.com/index.php/ffhd/article/view/81)
9. [Effects of Pyrroloquinoline Quinone (PQQ) Supplementation on Aerobic Exercise Performance and Indices of Mitochondrial Biogenesis in Untrained Men - PubMed](https://pubmed.ncbi.nlm.nih.gov/31860387/?utm_source=openai)
10. [Pyrroloquinoline Quinone Stimulates Mitochondrial Biogenesis through cAMP Response Element-binding Protein Phosphorylation and Increased PGC-1α Expression - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2804159/?utm_source=openai)
11. [GRAS Notices](https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=1118&set=grasnotices)
12. [Disodium pyrroloquinoline quinone | C14H4N2Na2O8 | CID 91864988 - PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/91864988)
13. [Effects of Pyrroloquinoline Quinone (PQQ) Supplementation on Aerobic Exercise Performance and Indices of Mitochondrial Biogenesis in Untrained Men - PubMed](https://pubmed.ncbi.nlm.nih.gov/31860387/)
14. [Pyrroloquinoline Quinone Stimulates Mitochondrial Biogenesis through cAMP Response Element-binding Protein Phosphorylation and Increased PGC-1α Expression - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2804159/)
