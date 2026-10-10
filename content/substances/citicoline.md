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

Deep Research synthesis: Citicoline — compact evidence extension — returned Deep Research evidence record.

## Description

Citicoline is CDP-choline, not dietary choline itself: it is a nucleotide containing a choline moiety and a cytidine-derived moiety, and exogenous doses are extensively metabolized. Human studies report rises in circulating choline plus pyrimidine metabolites; later work found uridine, rather than reliably detectable cytidine, after oral dosing. Spain authorizes citicoline-sodium medicines for neurological/cognitive disorders associated with stroke and head trauma, whereas EU food law separately permits citicoline as a novel-food ingredient under defined limits. These medicinal, nutritional and research contexts are not interchangeable. Cognizin-branded cognition studies also require attention to commercial sponsorship and related method-of-use patents.

Deep Research synthesis: The full returned Deep Research report is preserved in the pending acquisition folder for citicoline.

## Evidence note

Evidence is indication- and endpoint-specific. ICTUS and COBRIT found no functional/cognitive benefit in acute ischemic stroke and traumatic brain injury; a 2020 Cochrane review likewise found little or no stroke benefit with low-certainty evidence. A 2021 industry-funded older-adult trial missed its primary working-memory endpoint but improved secondary episodic-memory measures; EFSA concluded in 2024 that a memory cause-effect relationship was not established. Parent-citicoline half-life remains unresolved because human disposition studies primarily measured radiolabel or metabolites. The current extension adds null vascular-dementia evidence, a biased open post-stroke signal, a negative pediatric ADHD pilot, preliminary TBI and glaucoma findings, and the 2025 EU refusal of the proposed memory claim; these do not establish a general nootropic or neuroprotective effect.

<!-- Deep Research integration: citicoline -->

**Full Deep Research detail retained from the returned report:**

---
slug: citicoline
name: Citicoline
aliases: [CDP-choline, cytidine diphosphate choline, cytidine 5′-diphosphocholine, citicoline sodium, Cognizin]
reviewedAt: '2026-10-10'
editorialStatus: sourced-draft
reportType: additive-research-extension
baseRecordReviewedAt: '2026-10-04'
targetRecord: citicoline
halfLife:
  label: Not established for unchanged citicoline
  low: null
  high: null
  sourceId: dinsdale1983
  observationId: citicoline-unresolved
---

### Citicoline — compact evidence extension

**Merge scope.** Extend only `citicoline`. The existing Library deliverable was consulted; this file is a research extension, not an applied repository patch. Preserve unrelated records, existing identity metadata, and curated identifiers. Branded ingredient, sodium-salt medicine, oral supplement and injectable preparations must retain separate formulation fields. Source IDs below are stable Markdown footnote IDs.

### Essence / evidence note

Citicoline is a phospholipid-pathway intermediate, not interchangeable evidence for dietary choline, choline chloride/bitartrate, Alpha-GPC, phosphatidylcholine/lecithin, cytidine or uridine. Metabolic precursor availability does not establish clinical benefit.[^efsa2013][^wurtman2000] **ICTUS and COBRIT were negative on their prespecified clinical outcomes.** The 2020 Cochrane stroke synthesis found little or no benefit, with low-certainty evidence.[^davalos2012][^zafonte2012][^cochrane2020] The industry-funded 2021 older-adult trial missed its primary working-memory endpoint despite positive secondary episodic/composite scores; EFSA’s 2024 assessment did not establish a memory cause–effect relationship.[^nakazaki2021][^efsa2024] **A terminal half-life for unchanged citicoline remains unestablished** in the retrieved human disposition studies.[^dinsdale1983][^lopez1987]

### Identity, formulation and dose basis

The EU food specification identifies citicoline’s inner salt as **C14H26N4O11P2, 488.32 g/mol, CAS 987-78-0**, with a specified microbial production process and ≥98% dry-basis assay. Health Canada separately identifies the **monosodium salt, CAS 33818-15-4**. Cognizin is the branded citicoline ingredient used in some trials, not a different active molecule or proof of equivalence between finished products.[^eu-novel-food-2026][^hc-citicoline-sodium][^nakazaki2021]

**Calculated stoichiometry, not measured bioavailability:** one citicoline molecule contains one choline moiety, C5H14NO+, approximately 104.17 g/mol. Replacing one acidic hydrogen with sodium gives anhydrous monosodium C14H25N4NaO11P2, approximately 510.30 g/mol. Thus:

| Explicitly specified ingredient mass | Calculation | Theoretical choline-equivalent |
|---|---|---:|
| 500 mg anhydrous citicoline inner salt | 500 × 104.17 / 488.32 | **106.7 mg; 21.33% by mass** |
| 500 mg anhydrous citicoline monosodium salt | 500 × 104.17 / 510.30 | **102.1 mg; 20.41% by mass** |

These are calculations from chemical identity, not estimates of brain acetylcholine exposure. Hydration, assay and the manufacturer’s stated dose basis matter. Do not automatically convert a label reading “citicoline (as sodium salt)” into free-inner-salt equivalents; retain the reported dose until the product specification establishes its basis. Spanish oral labeling uses precisely this salt wording.[^eu-novel-food-2026][^hc-citicoline-sodium][^aemps-somazina]

**Dose interpretation:** the following are studied exposures or jurisdiction-specific label limits, not a universal supplementation schedule. Milligrams in trials are reported as the investigators stated them; they are not milligrams of choline.

### Human pharmacokinetics — analyte-specific

| Source / exposure | What was measured | Supported interpretation |
|---|---|---|
| Dinsdale; six adults, single **300 mg oral 14C-CDP-choline** | Total plasma radioactivity; fecal, urinary and expired-carbon recovery. Less than 1% recovered in feces over five days; radioactivity peaks around 1 and 24 hours. | Extensive absorption of **label-derived material**, not demonstrated ≥99% absolute bioavailability of intact parent. Carbon dioxide and urinary elimination include metabolic products. Neither peak is a parent-specific Tmax.[^dinsdale1983] |
| López-Coviella; oral **2 g**, and human **30-minute IV infusion** | Parent CDP-choline and circulating choline/cytidine. Parent became undetectable almost immediately after infusion stopped; metabolites remained elevated for at least six hours. | IV bypasses intestinal absorption but does not prevent rapid hydrolysis. Assay non-detection is not a fitted terminal elimination half-life. Only the human component of this mixed human/animal paper is used.[^lopez1987] |
| Wurtman; 12 mildly hypertensive, otherwise healthy adults; randomized oral **500, 2,000 or 4,000 mg** | Choline elevated approximately 5, 8 or 10 hours respectively; uridine 5–6 hours; cytidine not reliably detectable, <100 nM. | These are **metabolite concentration windows**, not parent half-life or duration of cognitive benefit. The later uridine-dominant result must remain distinct from the older cytidine assay findings.[^wurtman2000] |

**Schema constraint:** no validated unchanged-parent terminal half-life, absolute oral parent bioavailability, parent Cmax or clinical-effect onset/duration is entered from these studies. Radiolabel persistence, excretion-phase durations and metabolite peaks cannot populate a parent decay model. Likewise, precursor delivery does not demonstrate intact citicoline crossing the human blood–brain barrier.[^dinsdale1983][^lopez1987][^wurtman2000]

### Cognitive tests and aging — not established everyday benefit

| Population / design | Exact exposure | Finding and boundary |
|---|---|---|
| **Older adults with age-associated memory impairment**, n=100, randomized double-blind placebo-controlled; Nakazaki 2021 | Cognizin **500 mg/day, 12 weeks** | **Primary Spatial Span working memory: no significant benefit.** Secondary paired-associate episodic memory: change 0.15 vs 0.06, P=.0025; composite memory: 3.78 vs 0.72, P=.0052. These are test scores, not reduced dementia incidence or improved independence. Industry-funded; multiplicity correction used.[^nakazaki2021] |
| Older volunteers 50–85, n=95; Spiers 1996 | **1,000 mg/day, three months**; subsequent selected n=32 crossover **2,000 mg/day, two months per condition** | Initial delayed-recall benefit confined to a **post hoc low-memory subgroup**; selected crossover favored citicoline. Not confirmation of a general memory effect in all older adults.[^spiers1996] |
| Healthy women 40–60, n=60, small three-arm trial; McGlade 2012 | **250 or 500 mg/day, 28 days** | Selected sustained-attention error measures improved; endpoint/dose results were not uniformly significant. Industry-affiliated authors; independent replication and real-world importance remain unresolved.[^mcglade2012] |
| Healthy adolescent males 13–18, n=75; McGlade, online 2015 / issue 2019 | Cognizin **250 or 500 mg/day, 28 days** | Attention and psychomotor-speed tests favored citicoline (P=.02 and .03). Male-only short trial; **not an ADHD treatment trial**, school-performance trial or long-term pediatric safety study.[^mcglade2019] |

**Regulatory interpretation:** EFSA weighed the memory evidence, including inconsistent corroboration in other populations, and did **not** establish the proposed memory relationship. That assessment is narrower than “citicoline never affects any test,” but incompatible with presenting a proven general memory-maintenance benefit.[^efsa2024]

### Vascular cognitive impairment and Alzheimer disease

| Evidence | Exposure / outcome | Interpretation |
|---|---|---|
| Cohen 2003; **30 vascular-dementia patients**, double-blind randomized placebo-controlled | **500 mg twice daily for 12 months**; no advantage in neuropsychological performance or MRI measures | Direct long-term null finding; do not omit it in favor of uncontrolled positive studies.[^cohen2003] |
| IDEALE 2013; **349 older adults with mild vascular cognitive impairment**, open nonrandomized controlled study | **500 mg twice daily, nine months**; MMSE remained stable relative to declining controls; **no ADL/IADL difference** | A cognitive-screening signal with substantial allocation/masking bias, not demonstrated preservation of daily independence.[^cotroneo2013] |
| Alvarez 1999; **30 Alzheimer patients**, randomized double-blind placebo-controlled | **1,000 mg/day, 12 weeks**; selected subgroup/ADAS-total findings; ADAS-cog comparisons were not convincingly positive | Small, subgroup-dependent evidence. EEG/perfusion changes are biomarkers, not proof of disease modification or a validated APOE-guided treatment rule.[^alvarez1999] |

A 2023 systematic review located additional positive cognitive studies but judged their overall quality poor, with substantial bias favoring treatment. Its pooled signal is context, not independent confirmation; retrospective add-on combinations are not upgraded to randomized citicoline monotherapy evidence.[^bonvicini2023]

### Stroke, traumatic brain injury and recovery

| Study / outcome level | Exposure and result | Boundary |
|---|---|---|
| **ICTUS 2012**, n=2,298; patient-important global recovery | Started within 24 hours; **1,000 mg every 12 hours IV for three days, then oral, total six weeks**. Ninety-day global recovery OR **1.03 (95% CI 0.86–1.25)**; stopped for futility. | **Negative prespecified outcome** in moderate-to-severe acute ischemic stroke. Ferrer-funded. No significant safety difference does not imply efficacy.[^davalos2012][^nct00331890] |
| **Cochrane 2020**, 10 RCTs / 4,281 participants; clinical outcomes | **500–2,000 mg/day**, oral/IV/combined. Mortality RR **0.94 (0.83–1.07)**; little or no difference in disability, functional or neurological recovery. | **Low-certainty evidence**, high risk of bias, poor harms reporting; no included quality-of-life assessment. Six trials were industry-sponsored.[^cochrane2020] |
| **COBRIT 2012**, n=1,213; functional/cognitive global outcome | **2,000 mg/day orally/enterally for 90 days**. Ninety-day global OR **0.98 (0.83–1.15)**; 180-day OR **0.87 (0.72–1.04)**. | **Negative prespecified outcome**; stopped for futility. Low adherence limits interpretation but does not turn the trial positive; adherence analyses did not establish benefit.[^zafonte2012][^nct00545662] |
| Post-stroke cognition; Alvarez-Sabín 2013, n=347, open randomized usual-care comparison | **1,000 mg/day for 12 months**, beginning six weeks after first ischemic stroke. Attention/executive and temporal-orientation domains favored treatment; only **199** had one-year neuropsychological assessment. | Attrition and open treatment weaken inference. Functional independence result, mRS≤2, **57.3% vs 48.7%, P=.186**, was not significant. Not reversal of ICTUS.[^alvarez-sabin2013] |
| **New conflicting TBI pilot**, n=60; Shakeri Bavali Oleyayi 2026 | **1,000 mg/day, 90 days**, single-center triple-blind placebo-controlled. Primary MMSE **25.2 vs 21.5, P<.001**; Barthel and GOSE secondary outcomes also favored treatment. | Preliminary positive evidence in mild-to-moderate TBI; not a replication at COBRIT scale. Published online **1 September 2026**; journal issue dated **3 November 2026**. Included by online date, not future issue date.[^shakeri2026] |
| Citicoline–amantadine trial, n=45; Badre 2026 | Three active-treatment arms, no placebo. Citicoline: **1 g every 12 hours for seven days, then 500 mg twice daily**; the abstract’s phase-duration wording is ambiguous | Combination was not significantly better than amantadine alone; citicoline-alone outcomes were poorer. Does not establish an added citicoline benefit or a safe general-purpose “stack.”[^badre2026] |

### Pediatric, visual and exercise claims

**Pediatric ADHD: negative pilot.** Hübner 2024 was double-blind, placebo-controlled and crossover in children 7–12. The matching registry reports 27 recruited/22 completing, **250 mg/day for 28 days per period**, with a 28-day washout. No significant benefit on assessed parameters; no adverse effects reported. Small numbers cannot establish broad pediatric safety. The registry was posted after enrollment began.[^hubner2024][^rbr-3jpnxqw]

**Vision — keep outcome types separate.** A multicenter glaucoma crossover trial used **500 mg/day oral solution** and found a modest primary **patient-reported VFQ-25 quality-of-life** advantage (P=.0413); treatment-sequence and placebo improvements complicate interpretation. It does not demonstrate prevention of blindness.[^rossetti2023] Separately, a 29-person randomized trial used **500 mg/day for 12 months** and reported PERG/VEP and retinocortical-conduction improvements. These are **electrophysiological biomarkers**; the reported MRI association was not significant. “Synaptic plasticity” is an interpretation, not a directly established patient-important outcome. Neither trial establishes healthy-person visual enhancement or interchangeability with eye drops/injections.[^parisi2025]

**Exercise:** no citicoline-specific strength/endurance claim is entered. A retrieved 2026 cycling trial tested citicoline inside a carbohydrate/caffeine/other-ingredient mixture; it cannot isolate citicoline’s contribution. Alpha-GPC and other choline-product results are excluded.[^hannon2026]

### Mechanisms, subjective effects and biomarker boundaries

Citicoline’s role in phosphatidylcholine synthesis and human choline/pyrimidine-metabolite availability supports a **precursor mechanism**, not demonstrated treatment efficacy. Plasma choline/uridine, EEG, MRI and retinal electrophysiology belong in biomarker/mechanism records, not a pooled “cognition improved” outcome.[^efsa2013][^wurtman2000][^alvarez1999][^parisi2025] No reproducible subjective “focus,” stimulation, motivation or energy effect is entered from these sources. The glaucoma quality-of-life result remains a distinct patient-reported outcome, not a general nootropic experience.[^rossetti2023]

### Cautions and adverse effects

**Contraindications / parasympathetic effects:** Spanish labeling contraindicates hypersensitivity to citicoline/excipients and **parasympathetic hypertonia**. This is a label caution, not proof that ordinary oral doses universally cause a cholinergic syndrome. Injectable use requires slow professional administration; persistent intracranial hemorrhage has a product-specific **1,000 mg/day ceiling with very slow IV delivery**.[^aemps-somazina-injectable]

**Reported reactions:** the Spanish injectable label lists very rare reports, including hallucinations, headache/vertigo, **hypertension or hypotension**, dyspnea, nausea/vomiting/diarrhea, flushing/rash/urticaria/purpura, chills and edema. Its frequency category includes individual reports and is not a precise incidence estimate from controlled trials.[^aemps-somazina-injectable] Canadian guidance lists headache/GI disturbance. Oral Somazina’s colorant/preservatives can cause allergy; sorbitol matters in hereditary fructose intolerance.[^hc-cognitive-2025][^aemps-somazina]

**Trial safety:** the 2021 selected older-adult trial found no serious adverse events or significant between-group BP/laboratory safety differences over 12 weeks. This does not establish multi-year safety or safety in major organ disease.[^nakazaki2021] Cochrane found harms incompletely reported; a nonsignificant safety comparison must not be rewritten as “risk-free.”[^cochrane2020]

**Special populations:** pregnancy data are insufficient; Spain restricts use to clear necessity. Canada advises professional review during pregnancy/breastfeeding. Adequate human milk-transfer and infant-outcome evidence was not identified; no lactation safety claim is entered.[^aemps-somazina][^hc-cognitive-2025] The retrieved labels provide no evidence-based renal/hepatic impairment dose algorithm. Normal laboratory results in selected trial participants are not dedicated renal/hepatic PK studies. Pediatric medicinal experience is limited; adult food-use permissions do not authorize pediatric use.[^aemps-somazina][^nakazaki2021][^eu-novel-food-2026]

### Interactions — distinguish label evidence from hypotheses

| Coexposure | Classification / action boundary |
|---|---|
| **Levodopa** | **Labeled potentiation** in Spain; magnitude and required dose adjustment are not specified. Do not automatically reduce levodopa from a supplement calculation.[^aemps-somazina] |
| **Meclofenoxate / centrophenoxine** | Spanish label says not to coadminister. Preserve existing `citicoline-meclofenoxate` interaction.[^aemps-somazina-injectable] |
| Other **dopaminergic or cholinergic drugs**, including cholinesterase inhibitors | **Regulatory precaution:** Canada advises professional review. This does not prove a clinically quantified interaction with every dopamine agonist, stimulant or cholinergic agent.[^hc-cognitive-2025] |
| **Anticholinergics** | Pharmacodynamic opposition is a **hypothesis**, not a demonstrated citicoline antidote or established dose-adjustment rule. The Canadian monograph’s separate anticholinergic warning is assigned to huperzine products, not its citicoline row; do not copy it as a citicoline-specific proven interaction.[^hc-cognitive-2025] |
| **Other choline sources** | Count actual choline-equivalent exposure separately. Additive exposure is plausible from human metabolism, but these studies do not establish combination efficacy or a quantified toxicity threshold. Do not transfer another choline compound’s cardiovascular/TMAO findings to citicoline.[^wurtman2000] |

### Regulatory and product-quality status — checked 10 October 2026

| Jurisdiction | Status and limits |
|---|---|
| **Spain** | AEMPS lists Somazina sodium-salt medicines for stroke-/head-trauma-associated neurological/cognitive disorders. Product-specific adult oral/injectable dose **500–2,000 mg/day**. National medicinal authorization is distinct from the negative clinical-evidence assessment above.[^aemps-somazina][^aemps-somazina-injectable] |
| **EU foods** | Union-list permission: supplements **500 mg/day**; foods for special medical purposes **250 mg/serving, up to 1,000 mg/day**; labeling excludes children. Applies to the specified ingredient, not every formulation or disease claim.[^eu-novel-food-2026] |
| **EU memory claim** | Following EFSA 2024, Regulation **2025/2223** refused the proposed memory claim; effective **25 November 2025**. This is **not a ban on the authorized novel-food ingredient**.[^efsa2024][^eu-memory-claim-2025] |
| **United States** | Dietary supplements are not FDA-preapproved for effectiveness. FDA’s 2019 letter specifically challenged disease-treatment claims for a seller’s CDP-choline/citicoline product as unapproved-drug claims. Neither supplement sale nor a food-safety/GRAS assertion demonstrates medicinal approval. No U.S. citicoline medicinal approval is established by the regulator records cited here.[^fda-supplements][^fda-warning-2019] |
| **Canada** | The 2025 adult oral NHP monograph supports specified licensing claims: sustained attention **250–1,000 mg/day**, older-adult cognitive health **500–1,000 mg/day**, maximum **500 mg/single dose**. This is a product-licensing framework, not blanket approval of every retail product or stroke/TBI treatment; verify the actual product licence and label.[^hc-cognitive-2025] |

**Quality boundary:** specification compliance, dose basis, excipients, batch assay and finished-product identity must be checked separately from efficacy. The EU ≥98% dry-basis ingredient specification is not a certificate for an arbitrary online product. No representative citicoline-market adulteration/contamination survey or comparative batch assay was verified here; do not imply either universal purity or a demonstrated citicoline-wide contamination problem.[^eu-novel-food-2026][^fda-supplements]

### Conversion / merge notes

Retain `citicoline-unresolved` with null half-life values and `modelEligible: false`. Preserve existing outcome IDs `nakazaki-spatial-span-primary`, `nakazaki-paired-associate-secondary`, `spiers-verbal-memory`, `mcglade-attention`, `ictus-global-recovery`, `cochrane-stroke-disability`, and `cobrit-global-recovery`; do not change null primary outcomes into positive “effects.” Add new study-specific outcomes rather than replacing the pivotal studies. Keep regulatory permissions under `legal`, contraindications under `cautions`, and labeled/theoretical interactions distinguishable.

Preserve the existing `citicoline-cognition-patent` entry without using it as efficacy evidence. Patent ownership/status was not reverified under this report’s restricted evidence-source set; **unknown patent disclosures do not mean absence of patent interests**. No unrelated relationship, nutrient or substance record is rewritten. No general subjective enhancement entry is proposed.

**Search limits:** targeted primary-study/registry and official-regulator verification, not a new exhaustive systematic review. Reviews were used for context and study location, not to substitute for accessible primary trials. Abstract-only sources cannot establish undisclosed funding or COI. Publication date, online-first date and trial date were kept separate where material. Links identify the primary publication, registry or official regulator record. Some full-text declarations remained inaccessible; link inclusion does not imply full-text disclosure verification.

<!-- Deep Research source-link ledger -->

Every HTTPS link returned by this run is represented in References. Links whose full publication metadata was not recoverable remain explicitly labeled as source links.

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
- id: dr-citicoline-citicoline-pk-1
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated universal terminal half-life was established in the returned report.
  sourceId: dr-citicoline-s1
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
  title: Long-term treatment with citicoline may improve poststroke vascular cognitive impairment
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
- id: dr-citicoline-s1
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.2903/j.efsa.2013.3421
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s3
  title: Ingredient record
  authors: Not assessed
  year: 2026
  url: https://webprod.hc-sc.gc.ca/nhpid-bdipsn/ingredReq?id=13786
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s6
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1016/0197-0186(87
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s8
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1016/S0006-2952(00
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s10
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1093/jn/nxab119
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s11
  title: Full text
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8349115/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s13
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1001/archneur.1996.00550050071026
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s14
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.4236/fns.2012.36103
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s16
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1177/1087054715593633
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s17
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.2903/j.efsa.2024.8861
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s19
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1159/000071116
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s21
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.2147/CIA.S38420
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s22
  title: PubMed
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/10669911/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s23
  title: PubMed
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/36678257/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s24
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.3390/nu15020386
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s26
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1016/S0140-6736(12
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s27
  title: Registry
  authors: Not assessed
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00331890
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s29
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1001/jama.2012.13256
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s30
  title: Disclosure text
  authors: Not assessed
  year: 2026
  url: https://jamanetwork.com/journals/jama/fullarticle/1392561
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s31
  title: Registry
  authors: Not assessed
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00545662
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s33
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1002/14651858.CD013066.pub2
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s34
  title: Disclosure text
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8406786/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s36
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1159/000346602
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s38
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1016/j.neuroscience.2026.08.058
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s39
  title: PubMed
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41027417/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s40
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1177/08977151251375914
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s42
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1097/WNF.0000000000000602
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s43
  title: Registry
  authors: Not assessed
  year: 2026
  url: https://ensaiosclinicos.gov.br/rg/RBR-3jpnxqw
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s44
  title: PubMed
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/36639525/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s45
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1007/s00417-022-05947-5
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s46
  title: Full text
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10199108/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s47
  title: PubMed
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41517474/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s48
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.3390/jcm15010223
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s49
  title: Full text
  authors: Not assessed
  year: 2026
  url: https://www.mdpi.com/2077-0383/15/1/223
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s50
  title: PubMed
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42552237/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s51
  title: DOI
  authors: Not assessed
  year: 2026
  url: https://doi.org/10.1152/ajpendo.00139.2026
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s52
  title: Official label
  authors: Not assessed
  year: 2026
  url: https://cima.aemps.es/cima/dochtml/ft/53168/FT_53168.html
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-s57
  title: Information for Consumers on Using Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/dietary-supplements/information-consumers-using-dietary-supplements
  kind: Official regulatory guidance
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-link-1
  title: Deep Research source link
  authors: Deep Research returned source; metadata not separately normalized
  year: 2026
  url: https://doi.org/10.1016/0197-0186(87)90049-0
  kind: Deep Research source link
  insight: Direct link returned by the completed Deep Research report; the article's Evidence note preserves the associated finding and limitation.
  limitation: Bibliographic metadata was not separately normalized from the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-link-2
  title: Deep Research source link
  authors: Deep Research returned source; metadata not separately normalized
  year: 2026
  url: https://doi.org/10.1016/S0006-2952(00)00436-6
  kind: Deep Research source link
  insight: Direct link returned by the completed Deep Research report; the article's Evidence note preserves the associated finding and limitation.
  limitation: Bibliographic metadata was not separately normalized from the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-citicoline-link-3
  title: Deep Research source link
  authors: Deep Research returned source; metadata not separately normalized
  year: 2026
  url: https://doi.org/10.1016/S0140-6736(12)60813-7
  kind: Deep Research source link
  insight: Direct link returned by the completed Deep Research report; the article's Evidence note preserves the associated finding and limitation.
  limitation: Bibliographic metadata was not separately normalized from the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
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
