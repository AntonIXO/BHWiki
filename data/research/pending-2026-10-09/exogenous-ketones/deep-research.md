# Research Report: Research exactly exogenous ketones (slug exogenous-ketones). Return a compact complete BHWiki Markdown article only, <=4500 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover ketone salts versus ketone monoester and D/L beta-hydroxybutyrate, product-specific human exercise/cognition/glycemic trials including nulls, ketosis biomarker versus clinical benefit, analyte PK, sodium/mineral/GI burden, sponsor patents and industry ties. Every factual claim needs a source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus; use not-assessed when unknown. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: exogenous-ketones
x-shape: substance
---

# Exogenous ketones

## Summary
```yaml
- finding: "Exogenous ketones are orally supplied beta-hydroxybutyrate (βHB), ketone esters, or ketone precursors that raise circulating ketones without fasting or carbohydrate restriction."
  sourceId: EK-01
- finding: "Ketone monoesters generally produce faster and higher D-/R-βHB exposure than matched ketone salts, while salts add sodium, potassium, calcium, or magnesium and often contain racemic D/L-βHB."
  sourceId: EK-01
- finding: "The most reproducible human effect is transient ketonemia; acute glucose lowering is also fairly consistent, but exercise and cognition outcomes are mixed and long-term clinical benefits are unproven."
  sourceId: EK-03
- conclusion: "A higher blood βHB value is a pharmacodynamic biomarker, not evidence by itself of improved fat loss, endurance, cognition, vascular health, or disease outcomes."
  sourceId: EK-03
```

## Description
```yaml
- form: "Ketone salts"
  description: "βHB anions bound to mineral cations, commonly sodium, potassium, calcium, or magnesium; commercial products may be racemic and therefore contain both D-/R- and L-/S-βHB."
  sourceId: EK-01
- form: "Ketone monoester"
  description: "(R)-3-hydroxybutyl (R)-3-hydroxybutyrate; intestinal hydrolysis yields D-/R-βHB and R-1,3-butanediol, which the liver further converts to βHB."
  sourceId: EK-02
- form: "D-/R-βHB"
  description: "The physiological βHB stereoisomer and the principal oxidative substrate measured in most human ketone-ester trials."
  sourceId: EK-01
- form: "L-/S-βHB"
  description: "The less-studied stereoisomer; it is metabolized more slowly after racemic salt ingestion, persists longer in blood, and its human signaling role remains uncertain."
  sourceId: EK-01
- form: "Precursors and mixed products"
  description: "R-1,3-butanediol products such as Ketone-IQ and Avela generate βHB indirectly; free D-βHB plus R-1,3-butanediol products such as Kenetik are chemically distinct from the monoester."
  sourceId: EK-13
- products: "Human trials have used ΔG/ketone monoester products associated with TΔS/HVMN, KetoneAid KME/KMES, ΔG Ketone Performance, KE4, Ketone-IQ, Kenetik, and Avela."
  sourceId: EK-09
```

## Evidence note
```yaml
- evidence_base: "Most studies are acute, randomized crossover experiments with small samples, often in healthy adults; clinical trials in obesity or type 2 diabetes are also small and short."
  sourceId: EK-03
- product_specificity: "Results cannot be transferred automatically between salts, monoesters, free D-βHB, and R-1,3-butanediol because their stereochemistry, cation load, absorption, and βHB time-courses differ."
  sourceId: EK-01
- sponsor_tie: "The Avela study was funded by Genomatica; three authors were Intertek employees who had provided paid consultancy services to Genomatica, and the funder participated in study design and the publication decision."
  sourceId: EK-17
- industry_affiliation: "The 2019 gastrointestinal study included an HVMN Inc. affiliation in the PubMed record, making its tolerability findings product- and sponsor-context dependent."
  sourceId: EK-19
- patents: "A USF patent by D’Agostino, Arnold, and Kesl covers mineral βHB compositions used to produce sustained ketosis; a TΔS patent lists ketone bodies/esters for reducing muscle breakdown and names Clarke/Cox-linked inventors."
  sourceId: EK-P1
- interpretation: "Patents, product supply, or industry funding establish commercial ties or intellectual-property claims, not proof that clinical efficacy claims are correct."
  sourceId: EK-P1
```

## Doses
```yaml
- category: "Ketone monoester"
  studied_doses: "Approximately 0.3–0.75 g/kg body mass, including 25 g, 0.5 g/kg, 590 mg/kg, and 750 mg/kg protocols; lower-dose product studies used 5 or 10 g R-βHB."
  sourceId: EK-07
- category: "Pre-meal monoester"
  studied_dose: "12 g βHB 15 minutes before each meal for 14 days in adults with obesity."
  sourceId: EK-14
- category: "Type 2 diabetes monoester"
  studied_dose: "0.5 g/kg body mass before a mixed-meal tolerance test."
  sourceId: EK-16
- category: "Ketone salts"
  studied_dose: "Dose is product-specific because the βHB-to-cation ratio varies; matched human PK experiments delivered approximately 12 or 24 g βHB."
  sourceId: EK-01
- category: "R-1,3-butanediol"
  studied_dose: "Avela was tested as 11.5 g at 0, 30, and 60 minutes, totaling 34.5 g in one day."
  sourceId: EK-17
- qualification: "These are research exposures, not validated clinical dosing schedules or evidence-based recommendations."
  sourceId: EK-03
```

## Pharmacokinetics
```yaml
- comparison: "After matched βHB ingestion, D-βHB Cmax was approximately 2.8 mmol/L with monoester versus 1.0 mmol/L with the studied sodium/potassium salt; concentrations generally returned toward baseline within 3–4 hours."
  sourceId: EK-01
- stereochemistry: "The studied salt contained approximately 50% L-βHB; L-βHB remained elevated for more than 8 hours and was not detectable at 24 hours, whereas D-βHB was more rapidly cleared and converted to breath acetone."
  sourceId: EK-01
- food_effect: "A meal reduced monoester D-βHB Cmax by approximately 33%, from about 3.3 mmol/L fasted to 2.2 mmol/L fed."
  sourceId: EK-01
- repeated_dosing: "Three monoester drinks given over 9 hours maintained D-βHB above 1 mmol/L; serial oral dosing and nasogastric infusion produced similar D-βHB exposure."
  sourceId: EK-01
- low_dose_product: "In a 14-person crossover study, 10 g KME peaked near 2.4 mmol/L at 15 minutes, while 10 g KMES peaked near 2.1 mmol/L at 30 minutes; both were near baseline by 120 minutes."
  sourceId: EK-12
- precursor: "Three 11.5-g Avela servings produced mean BHB Cmax 2.10 ± 0.97 mmol/L over 300 minutes, with a slower rise than a direct monoester."
  sourceId: EK-17
- excretion: "Urinary D- and L-βHB excretion was less than 1.5% of ingested βHB in the matched PK study."
  sourceId: EK-01
- acid_base: "The studied monoester lowered blood pH by about 0.10, whereas the salt increased urine pH from approximately 5.7 to 8.5; serum electrolytes remained within the reported normal range in that experiment."
  sourceId: EK-01
- measurement: "Common handheld blood meters quantify D-/R-βHB and do not measure L-/S-βHB, so they can underrepresent total βHB after racemic salts."
  sourceId: EK-01
```

## Modifiers
```yaml
- modifier: "Fed versus fasted state"
  effect: "Food lowers and may delay D-βHB exposure after monoester ingestion."
  sourceId: EK-01
- modifier: "Formulation"
  effect: "Salt cation ratio, D/L composition, ester hydrolysis, free-acid content, and precursor metabolism materially alter Cmax, Tmax, duration, taste, and tolerability."
  sourceId: EK-01
- modifier: "Dose and frequency"
  effect: "Higher doses raise βHB more but increase the opportunity for GI symptoms, mineral exposure, acid-base shifts, and urinary loss."
  sourceId: EK-12
- modifier: "Exercise"
  effect: "Exercise changes substrate demand and may expose adverse GI or acid-base effects; performance results vary by intensity, carbohydrate availability, and timing."
  sourceId: EK-05
- modifier: "Carbohydrate co-ingestion"
  effect: "Monoester without carbohydrate improved running economy in one study, whereas co-ingestion with carbohydrate did not; other studies reported benefit when ketone ester and carbohydrate were combined."
  sourceId: EK-07
- modifier: "Body size, sex, and metabolic status"
  effect: "Small studies suggest differences in BHB kinetics by sex, BMI, obesity, impaired glucose tolerance, or type 2 diabetes, but these findings are not sufficiently replicated for individualized prediction."
  sourceId: EK-16
- modifier: "Assay"
  effect: "Blood βHB responds faster than urine ketones or breath acetone after oral ketones; analyte choice can therefore change the apparent size and duration of ketosis."
  sourceId: EK-01
```

## Effects
```yaml
- acute_metabolic: "Monoesters and salts reliably increase circulating βHB; monoesters generally produce higher D-/R-βHB exposure than matched salts."
  sourceId: EK-01
- glucose: "Acute exogenous ketone ingestion lowers mean blood glucose in aggregate human data, with a larger pooled effect for monoesters than salts."
  sourceId: EK-03
- lipolysis: "Exogenous βHB lowers circulating free fatty acids and glycerol, consistent with suppression of adipose lipolysis rather than simple enhancement of whole-body fat mobilization."
  sourceId: EK-01
- exercise_substrate: "Ketone ester ingestion changes lactate, glycerol, or glucose kinetics in some exercise protocols, but measured ketone oxidation is not equivalent to broad carbohydrate sparing or improved performance."
  sourceId: EK-08
- vascular_markers: "Fourteen days of pre-meal monoester ingestion improved brachial flow-mediated dilation and reduced ex-vivo LPS-stimulated monocyte caspase-1 activation in adults with obesity."
  sourceId: EK-14
- appetite_tolerability: "Participants report taste, aftertaste, appetite change, nausea, bloating, headache, or other mild GI symptoms with rates depending on compound and dose."
  sourceId: EK-12
```

## Outcomes
```yaml
- domain: "Exercise—positive or conditional"
  result: "The early Cox trial reported approximately 2% better 30-minute cycling performance with ketone ester plus carbohydrate versus carbohydrate alone. Professional rugby players receiving βHB monoester plus carbohydrate completed sustained high-intensity tests about 2.1% faster, but sprint and power tests did not improve."
  sourceId: EK-04
- domain: "Exercise—economy without carbohydrate"
  result: "In 11 male endurance runners, monoester without carbohydrate improved running economy by an average of 4.1% versus carbohydrate alone, but time to exhaustion did not differ and the effect disappeared with carbohydrate co-ingestion."
  sourceId: EK-07
- domain: "Exercise—null"
  result: "In eight endurance-trained runners, ketone monoester raised exercise βHB to approximately 1.0–1.3 mmol/L but did not improve 10-km time-trial performance, running economy, lactate, RPE, reaction time, or multitasking."
  sourceId: EK-05
- domain: "Exercise—negative"
  result: "A ketone diester impaired time-trial performance in professional cyclists; negative or null results limit the claim that exogenous ketosis is a general ergogenic aid."
  sourceId: EK-06
- domain: "Cognition—conditional positive"
  result: "In nine men after mental fatigue, 25 g ΔG monoester reduced the exercise-associated decline in choice-reaction accuracy from 3.4% with placebo to 1.3%, but other cognitive measures did not differ."
  sourceId: EK-09
- domain: "Cognition—chronic small trial"
  result: "In 14 adults with obesity, 12 g βHB three times daily for 14 days improved DSST performance by 2.7 correct responses and increased extracranial cerebrovascular flow by approximately 11–12%; fasting BDNF did not change."
  sourceId: EK-15
- domain: "Cognition—nulls"
  result: "Ketone salts did not improve cognitive responses after high-intensity exercise in healthy college-aged men; a low-dose monoester also failed to improve cognitive tests in 12 trained females despite raising βHB by about 1.8 mmol/L and lowering glucose by about 0.6 mmol/L."
  sourceId: EK-10
- domain: "Glycemia—aggregate"
  result: "A meta-analysis found mean glucose lower by approximately 0.54 mmol/L after exogenous ketones; the pooled effect was about −0.61 mmol/L for monoesters versus −0.24 mmol/L for salts."
  sourceId: EK-03
- domain: "Glycemia—obesity"
  result: "Fourteen days of 12-g pre-meal KME lowered postprandial glucose by 8.0% and 24-hour average glucose by 7.8% versus placebo."
  sourceId: EK-14
- domain: "Glycemia—type 2 diabetes"
  result: "In 10 adults with type 2 diabetes, 0.5 g/kg KME raised βHB from approximately 0.3 to 4.3 mmol/L, lowered 2-hour postprandial glucose by about 18% and 4-hour glucose by about 12%, and reduced early glucose appearance by 28%; endogenous glucose production and insulin did not differ."
  sourceId: EK-16
- domain: "Clinical endpoints"
  result: "The cited human trials did not establish durable reductions in HbA1c, cardiovascular events, seizures, neurodegeneration, mortality, sustained weight loss, or disease modification."
  sourceId: EK-03
```

## Mechanisms
```yaml
- fuel: "D-βHB enters tissues through monocarboxylate transporters, is converted to acetoacetate and acetyl-CoA, and can contribute to mitochondrial oxidation in brain, heart, skeletal muscle, and kidney."
  sourceId: EK-02
- anti_lipolysis: "βHB activates HCAR2/GPR109A signaling in adipose tissue, lowering cAMP-dependent hormone-sensitive lipase activity and reducing free-fatty-acid release; this inhibits endogenous ketogenesis."
  sourceId: EK-01
- glucose: "Observed glucose lowering may involve reduced hepatic glucose output, altered insulin dynamics, delayed intestinal glucose appearance, or reduced lipolysis; the dominant mechanism differs by meal and population."
  sourceId: EK-16
- brain: "Exogenous ketones provide an alternative cerebral fuel and may affect cerebral blood flow; improved DSST performance in obesity was associated with cerebrovascular changes, but causality was not demonstrated."
  sourceId: EK-15
- signaling: "βHB can act as a signaling metabolite through HDAC inhibition, protein β-hydroxybutyrylation, redox effects, and inflammasome-related pathways; human supplement trials mainly show short-term biomarker changes."
  sourceId: EK-02
- D_L_difference: "D-/R-βHB is more rapidly oxidized and generates more breath acetone than L-/S-βHB; extrapolating D-βHB findings to racemic salts is therefore uncertain."
  sourceId: EK-01
- diet_difference: "Supplement-derived ketosis raises blood βHB without the low-insulin, high-free-fatty-acid adaptation produced by fasting or a ketogenic diet; the same blood biomarker can therefore represent different physiology."
  sourceId: EK-01
```

## Cautions
```yaml
- GI: "GI symptoms are usually mild but vary by ketone compound, dose, timing, and exercise; reported symptoms include nausea, bloating, abdominal discomfort, diarrhea, reflux, belching, and urge to defecate."
  sourceId: EK-19
- taste: "Monoesters frequently have strong bitterness or aftertaste; salt-containing mixtures may improve acceptability but add mineral exposure."
  sourceId: EK-12
- mineral_load: "In one matched human salt formulation, each drink delivered approximately 3.2–6.4 g of inorganic cation; sodium, potassium, calcium, and magnesium burdens vary widely by product."
  sourceId: EK-01
- acid_base: "Monoester ingestion can transiently lower blood pH, while salt ingestion can increase urinary alkalinity; exercise-related ventilation and perceived exertion may be affected in some protocols."
  sourceId: EK-01
- L_BHB: "L-/S-βHB persists longer and is less characterized in humans; a blood meter that reports only D-/R-βHB cannot quantify total exposure after racemic salts."
  sourceId: EK-01
- clinical_population: "Safety studies often excluded chronic disease, renal disease, diabetes, pregnancy, or other high-risk groups; the available type 2 diabetes trials were small and short."
  sourceId: EK-12
- duration: "Long-term safety, repeated high-dose mineral exposure, durable metabolic effects, and hard clinical outcomes remain insufficiently studied."
  sourceId: EK-03
- interpretation: "Transient hyperketonemia should not be interpreted as equivalent to nutritional adaptation, therapeutic ketosis, or protection from ketoacidosis."
  sourceId: EK-01
```

## Claims
```yaml
- claim: "Exogenous ketones induce ketosis."
  assessment: "Accurate only as a blood-ketonemia statement; they raise circulating βHB but generally suppress lipolysis and endogenous ketone production rather than reproducing hepatic ketogenesis."
  sourceId: EK-01
- claim: "They burn more body fat."
  assessment: "Not established; circulating free fatty acids and glycerol commonly fall after ingestion, indicating reduced adipose lipolysis."
  sourceId: EK-01
- claim: "They improve endurance."
  assessment: "Not established as a general effect; positive, null, and negative exercise trials coexist, with outcome dependence on formulation, carbohydrate, intensity, and timing."
  sourceId: EK-05
- claim: "They improve cognition."
  assessment: "Possible in selected stress, obesity, or exercise contexts, but several controlled studies found no cognitive benefit."
  sourceId: EK-09
- claim: "They lower glucose."
  assessment: "Acute lowering is supported, especially for monoesters and post-meal testing; durable diabetes treatment benefit remains unproven."
  sourceId: EK-03
- claim: "They cause weight loss."
  assessment: "Insufficient human evidence for sustained weight loss attributable to exogenous ketones; ketone drinks also provide metabolizable energy."
  sourceId: EK-03
- claim: "They are anti-inflammatory or longevity agents."
  assessment: "Mechanistic and ex-vivo signals exist, but human clinical disease outcomes have not been established."
  sourceId: EK-14
- claim: "They are free of GI effects."
  assessment: "False as a blanket claim; GI effects and palatability problems are documented and product-dependent."
  sourceId: EK-19
```

## Interactions
```yaml
- interaction: "Food and mixed meals"
  evidence: "Meals reduce monoester D-βHB Cmax; pre-meal dosing has lowered postprandial glucose in obesity and type 2 diabetes, but timing effects are not standardized."
  status: "human evidence"
  sourceId: EK-01
- interaction: "Carbohydrate during exercise"
  evidence: "Carbohydrate co-ingestion has produced both positive and null performance findings; it can change glucose availability, acid-base load, and the apparent contribution of ketones."
  status: "human evidence"
  sourceId: EK-07
- interaction: "Glucose-lowering medication"
  evidence: "Additive glucose lowering or hypoglycemia is pharmacologically plausible, but controlled supplement–drug interaction studies are not established in the cited trials."
  status: "evidence gap"
  sourceId: EK-16
- interaction: "SGLT2 inhibitors"
  evidence: "SGLT2 inhibitors are recognized ketone-raising contexts, but direct coadministration studies with exogenous ketones were not established in the cited human literature."
  status: "evidence gap"
  sourceId: EK-03
- interaction: "Renal, potassium, sodium, or blood-pressure pharmacology"
  evidence: "Salt products add cations, so interaction potential depends on mineral composition and renal handling; direct clinical interaction data are limited."
  status: "pharmacologic plausibility, not demonstrated"
  sourceId: EK-01
- interaction: "MCTs, ketogenic diets, or other ketone precursors"
  evidence: "Combined formulations exist and may increase total ketone, calorie, and GI exposure, but standardized human interaction profiles are unavailable."
  status: "evidence gap"
  sourceId: EK-P1
```

## Experience links
```yaml
- label: "KetoneAid KME versus KME/salt: taste, appetite, GI symptoms, and R-βHB"
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10708260/"
  sourceId: EK-12
- label: "Exogenous ketone drink GI symptom study"
  url: "https://pubmed.ncbi.nlm.nih.gov/31034254/"
  sourceId: EK-19
- label: "ΔG monoester during simulated soccer: participant-reported and cognitive outcomes"
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9607595/"
  sourceId: EK-09
- label: "Avela R-1,3-butanediol: home BHB monitoring, GI symptoms, headache, and sleepiness"
  url: "https://doi.org/10.3389/fphys.2023.1195702"
  sourceId: EK-17
- label: "HVMN/ΔG monoester in obesity: glucose, vascular function, and tolerability"
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7993591/"
  sourceId: EK-14
- note: "These are controlled participant-reported endpoints, not consumer testimonials or efficacy recommendations."
  sourceId: EK-12
```

## References
```yaml
- sourceId: EK-01
  title: "On the Metabolism of Exogenous Ketones in Humans"
  authors: "Brianna J. Stubbs, Patrick J. Cox, Robert D. Evans, Peter Santer, James J. Miller, Oliver K. Faull, et al."
  year: 2017
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5670148/"
  kind: "peer-reviewed human randomized crossover pharmacokinetic study"
  insight: "Direct comparison of ketone ester and sodium/potassium ketone salt; D/L kinetics, food effect, acid-base effects, urinary excretion, and repeated dosing."
  limitation: "Small, healthy, acute, formulation-specific sample."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-02
  title: "Why a d-β-hydroxybutyrate monoester?"
  authors: "Arianna Soto-Mota, Hanne Vansant, Robert D. Evans, Kieran Clarke"
  year: 2020
  url: "https://doi.org/10.1042/BST20190240"
  kind: "peer-reviewed biochemical review"
  insight: "Explains D-/R-βHB monoester chemistry, precursor metabolism, stereochemistry, and physiological rationale."
  limitation: "Review; not a new clinical efficacy trial."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-03
  title: "Effects of Exogenous Ketone Supplementation on Blood Glucose: A Systematic Review and Meta-analysis"
  authors: "Kaja Falkenhain, Ali Daraei, Shelby C. Forbes, Jonathan P. Little"
  year: 2022
  url: "https://doi.org/10.1093/advances/nmac036"
  kind: "systematic review and meta-analysis of human trials"
  insight: "Pooled βHB increase and glucose reduction; stronger glucose effect for monoesters than salts."
  limitation: "Mostly acute studies; aggregate data limit mediation and long-term clinical inference."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-04
  title: "Nutritional Ketosis Alters Fuel Preference and Thereby Endurance Performance in Athletes"
  authors: "Patrick J. Cox, Tim Kirk, Thomas Ashmore, Kim Willerton, Robert Evans, Alan Smith, et al."
  year: 2016
  url: "https://doi.org/10.1016/j.cmet.2016.07.010"
  kind: "peer-reviewed human exercise trial"
  insight: "Early positive ketone-ester-plus-carbohydrate cycling result."
  limitation: "Athlete sample, acute protocol, and product/formulation-specific findings."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-05
  title: "No Benefit of Ingestion of a Ketone Monoester Supplement on 10-km Running Performance"
  authors: "Mark Evans, Fionn T. McSwiney, Aidan J. Brady, Brendan Egan"
  year: 2019
  url: "https://pubmed.ncbi.nlm.nih.gov/31730565/"
  kind: "peer-reviewed double-blind randomized crossover exercise trial"
  insight: "Null 10-km performance and cognition result despite increased βHB."
  limitation: "n=8 and acute running protocol."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-06
  title: "Ketone Diester Ingestion Impairs Time-Trial Performance in Professional Cyclists"
  authors: "J. J. Leckey, M. L. Ross, M. Quod, J. A. Hawley, Louise M. Burke"
  year: 2017
  url: "https://doi.org/10.3389/fphys.2017.00806"
  kind: "peer-reviewed human exercise trial"
  insight: "Negative performance result relevant to claims of universal ergogenicity."
  limitation: "Acute diester protocol and professional-cyclist sample."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-07
  title: "Acute Ingestion of a Ketone Monoester without Co-ingestion of Carbohydrate Improves Running Economy in Male Endurance Runners"
  authors: "Aidan J. Brady, Brendan Egan"
  year: 2023
  url: "https://doi.org/10.1249/MSS.0000000000003278"
  kind: "peer-reviewed randomized crossover exercise trial"
  insight: "4.1% running-economy improvement without carbohydrate but no time-to-exhaustion benefit."
  limitation: "n=11, all male, acute ramp exercise."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-08
  title: "Ketone Monoester Ingestion Alters Metabolism and Simulated Rugby Performance in Professional Players"
  authors: "Oliver Peacock, Javier T. Gonzalez, Simon Roberts, Alan A. Smith, Scott Drawer, Keith Stokes"
  year: 2022
  url: "https://doi.org/10.1123/ijsnem.2021-0346"
  kind: "peer-reviewed randomized crossover team-sport trial"
  insight: "2.1% faster sustained high-intensity tests, with no sprint or power improvement."
  limitation: "n=9 professional male rugby players; simulated match protocol."
  funding: "PepsiCo, British Heart Foundation, MRC, BBSRC, and related institutional sources reported in the publication record."
  sponsorshipStatus: "mixed academic and external funding"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-09
  title: "Ketone Ester Supplementation Improves Some Aspects of Cognitive Function during a Simulated Soccer Match after Induced Mental Fatigue"
  authors: "Manuel D. Quinones, Peter W. R. Lemon"
  year: 2022
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9607595/"
  kind: "peer-reviewed double-blind randomized crossover trial"
  insight: "ΔG product, 25 g, attenuated one cognitive decline measure during intermittent exercise."
  limitation: "n=9 men; most cognitive outcomes were null."
  funding: "not-assessed"
  sponsorshipStatus: "product-specific commercial supplement"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-10
  title: "Exogenous Ketone Salts Do Not Improve Cognitive Responses after a High-Intensity Exercise Protocol in Healthy College-Aged Males"
  authors: "Hunter S. Waldman, Steven A. Basham, F. Gregory Price, James W. Smith, Hasan Chander, Aaron C. Knight, et al."
  year: 2018
  url: "https://doi.org/10.1139/apnm-2017-0724"
  kind: "peer-reviewed human exercise-cognition trial"
  insight: "Null cognition result with ketone salts."
  limitation: "Healthy young male sample and salt-specific formulation."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-11
  title: "No Benefit of Ingesting a Low-Dose Ketone Monoester Supplement on Markers of Cognitive Performance in Females"
  authors: "Anna K. Huber, Eric K. O’Neal, Gaven A. Barker, Craig R. Witt, David A. Lara, Valerie N. Forsythe, Andrew P. Koutnik, Dominic P. D’Agostino, Walter Staiano, Brendan Egan, Hunter S. Waldman"
  year: 2023
  url: "https://doi.org/10.1007/s41465-023-00275-w"
  kind: "peer-reviewed randomized crossover cognition trial"
  insight: "No improvement in cognitive tests in trained females despite βHB elevation."
  limitation: "Small sample and acute low-dose protocol."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-12
  title: "Tolerability and Acceptability of an Exogenous Ketone Monoester and Ketone Monoester/Salt Formulation in Humans"
  authors: "Mickey L. Bolyard, Christina M. Graziano, Kevin R. Fontaine, R. Drew Sayer, Gordon Fisher, Eric P. Plaisance"
  year: 2023
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10708260/"
  kind: "peer-reviewed randomized crossover tolerability and PK study"
  insight: "KetoneAid KME/KMES 5- and 10-g products produced dose-responsive R-βHB with mild GI, appetite, headache, and taste effects."
  limitation: "n=14 healthy young adults; short-term tolerability only."
  funding: "not-assessed"
  sponsorshipStatus: "commercial products purchased for study"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-13
  title: "The Effect of Novel Exogenous Ketone Supplements on Blood Beta-Hydroxybutyrate and Glucose"
  authors: "Kaja Falkenhain, Ali Daraei, Jonathan P. Little"
  year: 2023
  url: "https://doi.org/10.1080/19390211.2023.2179152"
  kind: "peer-reviewed randomized crossover pilot"
  insight: "Compared KE4, Ketone-IQ, and Kenetik; monoester produced the largest and fastest βHB response."
  limitation: "n=12, no inert placebo, acute exposure."
  funding: "Natural Sciences and Engineering Research Council of Canada reported in the publication record."
  sponsorshipStatus: "product-comparison study"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-14
  title: "14-Day Ketone Supplementation Lowers Glucose and Improves Vascular Function in Obesity: A Randomized Crossover Trial"
  authors: "Jeremy J. Walsh, Helena Neudorf, Jonathan P. Little"
  year: 2020
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7993591/"
  kind: "peer-reviewed randomized crossover metabolic trial"
  insight: "Pre-meal HVMN/ΔG KME lowered postprandial and 24-hour glucose and improved FMD in adults with obesity."
  limitation: "n=14, 14 days, surrogate vascular and ex-vivo inflammatory outcomes."
  funding: "not-assessed"
  sponsorshipStatus: "commercial product used; academic trial"
  conflictsOfInterest: "Jonathan P. Little was identified as Chief Scientific Officer of a not-for-profit institute; no commercial conflict was stated in the cited record."
  conflictOfInterestStatus: "disclosed"
- sourceId: EK-15
  title: "Short-term Ketone Monoester Supplementation Improves Cerebral Blood Flow and Cognition in Obesity: A Randomized Cross-over Trial"
  authors: "Jeremy J. Walsh, Hannah G. Caldwell, Helena Neudorf, Philip N. Ainslie, Jonathan P. Little"
  year: 2021
  url: "https://doi.org/10.1113/JP281988"
  kind: "peer-reviewed randomized crossover cognition and cerebrovascular trial"
  insight: "Fourteen days of 12-g thrice-daily βHB improved DSST and extracranial cerebrovascular measures."
  limitation: "n=14, surrogate outcomes, no proof of durable cognitive benefit."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-16
  title: "A Ketone Monoester Drink Reduces Postprandial Blood Glucose Concentrations in Adults with Type 2 Diabetes: A Randomised Controlled Trial"
  authors: "Alistair J. Monteyne, Kaja Falkenhain, Gráinne Whelehan, et al."
  year: 2024
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11058041/"
  kind: "peer-reviewed double-blind randomized crossover type 2 diabetes trial"
  insight: "0.5 g/kg KME lowered early and total postprandial glucose exposure through delayed glucose appearance."
  limitation: "n=10 and single-meal acute design."
  funding: "CIHR, NSERC, and Exeter–UBCO Sports Health Science Fund reported in the publication."
  sponsorshipStatus: "academic and public-grant funded"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-17
  title: "An Open-label, Acute Clinical Trial in Adults to Assess Ketone Levels, Gastrointestinal Tolerability, and Sleepiness Following Consumption of (R)-1,3-butanediol (Avela™)"
  authors: "James Lowder, Shafagh Fallah, Carolina Venditti, Kathy Musa-Veloso, Vassili Kotlov"
  year: 2023
  url: "https://doi.org/10.3389/fphys.2023.1195702"
  kind: "peer-reviewed open-label uncontrolled product PK/tolerability study"
  insight: "Avela R-1,3-butanediol produced delayed βHB elevation and generally mild GI symptoms."
  limitation: "n=26, no placebo, home-based self-measurement, product-specific."
  funding: "Genomatica Inc."
  sponsorshipStatus: "industry-funded"
  conflictsOfInterest: "Three authors were Intertek employees and paid consultants to Genomatica; the funder participated in design and publication decision."
  conflictOfInterestStatus: "disclosed"
- sourceId: EK-19
  title: "Gastrointestinal Effects of Exogenous Ketone Drinks Are Infrequent, Mild, and Vary According to Ketone Compound and Dose"
  authors: "Brianna J. Stubbs, Patrick J. Cox, Tim Kirk, Robert D. Evans, Kieran Clarke"
  year: 2019
  url: "https://pubmed.ncbi.nlm.nih.gov/31034254/"
  kind: "peer-reviewed human tolerability study"
  insight: "GI symptoms vary by ketone compound, dose, and exercise; symptoms were generally mild."
  limitation: "Short-term and product-specific; PubMed record includes an HVMN affiliation."
  funding: "not-assessed"
  sponsorshipStatus: "industry-affiliated"
  conflictsOfInterest: "HVMN Inc. affiliation appears in the publication record."
  conflictOfInterestStatus: "disclosed"
- sourceId: EK-P1
  title: "Compositions and Methods for Producing Elevated and Sustained Ketosis"
  authors: "Dominic Paul D’Agostino, Patrick Arnold, Shannon Kesl; University of South Florida"
  year: 2015
  url: "https://digitalcommons.usf.edu/usf_patents/58/"
  kind: "patent record"
  insight: "Claims mineral βHB compositions, including combinations with medium-chain fatty acids, for sustained ketosis."
  limitation: "Patent claims are not clinical efficacy evidence."
  funding: "not-assessed"
  sponsorshipStatus: "university intellectual property"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
- sourceId: EK-P2
  title: "Ketone Body and Ketone Body Ester for Reducing Muscle Breakdown"
  authors: "Kieran Clarke, Peter J. Cox, et al.; TΔS Ltd"
  year: 2020
  url: "https://patents.google.com/patent/EP3030231B1/en"
  kind: "European patent record"
  insight: "Claims ketone bodies and esters for muscle-protein or muscle-breakdown applications."
  limitation: "Patent scope and inventorship do not validate performance or recovery outcomes."
  funding: "not-assessed"
  sponsorshipStatus: "commercial intellectual property"
  conflictsOfInterest: "Commercial patent ownership is explicit."
  conflictOfInterestStatus: "disclosed"
- sourceId: EK-L1
  title: "FDA 101: Dietary Supplements"
  authors: "U.S. Food and Drug Administration"
  year: 2023
  url: "https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements"
  kind: "official U.S. regulatory guidance"
  insight: "FDA does not preapprove dietary supplements for safety, effectiveness, or labeling before sale."
  limitation: "U.S.-specific; product classification depends on formulation and claims."
  funding: "U.S. government"
  sponsorshipStatus: "official government source"
  conflictsOfInterest: "none stated"
  conflictOfInterestStatus: "not-applicable"
- sourceId: EK-L2
  title: "Dietary Supplement Labeling Guide: Chapter VI. Claims"
  authors: "U.S. Food and Drug Administration"
  year: "not-assessed"
  url: "https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-vi-claims"
  kind: "official U.S. regulatory guidance"
  insight: "Structure/function claims are not preapproved but require substantiation, notification, and the required disclaimer; disease claims can change regulatory status."
  limitation: "Guidance is not a product-specific legal opinion."
  funding: "U.S. government"
  sponsorshipStatus: "official government source"
  conflictsOfInterest: "none stated"
  conflictOfInterestStatus: "not-applicable"
```

## Legal
```yaml
- jurisdiction: "United States"
  rule: "Dietary supplements are not FDA-approved for safety or effectiveness before marketing; FDA oversight is largely post-market and claim-dependent."
  sourceId: EK-L1
- claim_rule: "Structure/function claims require truthful, non-misleading substantiation, FDA notification within the applicable period, and the standard disclaimer; claims to diagnose, treat, cure, or prevent disease can be treated as drug claims."
  sourceId: EK-L2
- GRAS_context: "The Avela publication reports GRAS status for R-1,3-butanediol up to 34.5 g/day and an FDA no-questions letter for a D-βHB ester at use levels up to 75 g/day in specified foods; these are ingredient/use-level determinations, not efficacy approvals."
  sourceId: EK-17
- patent_context: "Patents protect claimed compositions or uses and do not establish that a commercial product is FDA-approved or clinically effective."
  sourceId: EK-P1
- scope: "Legal status varies by stereochemistry, mineral composition, ester or precursor identity, labeling, disease claims, and jurisdiction; no single legal status applies to all products called exogenous ketones."
  sourceId: EK-L1
```

## Research Metadata
- **Total research steps**: 72
- **Search queries executed**: 8
- **Citations found**: 22
- **Task ID**: resp_0fe83907fb28ed92016ac94bacc45887d299eb6ecc8323fc2f
- **Execution time**: 672.72 seconds

## Citations
1. [Source 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10708260/")
2. [Source 2](https://pubmed.ncbi.nlm.nih.gov/31034254/")
3. [Source 3](https://pmc.ncbi.nlm.nih.gov/articles/PMC9607595/")
4. [Source 4](https://doi.org/10.3389/fphys.2023.1195702")
5. [Source 5](https://pmc.ncbi.nlm.nih.gov/articles/PMC7993591/")
6. [Source 6](https://pmc.ncbi.nlm.nih.gov/articles/PMC5670148/")
7. [Source 7](https://doi.org/10.1042/BST20190240")
8. [Source 8](https://doi.org/10.1093/advances/nmac036")
9. [Source 9](https://doi.org/10.1016/j.cmet.2016.07.010")
10. [Source 10](https://pubmed.ncbi.nlm.nih.gov/31730565/")
11. [Source 11](https://doi.org/10.3389/fphys.2017.00806")
12. [Source 12](https://doi.org/10.1249/MSS.0000000000003278")
13. [Source 13](https://doi.org/10.1123/ijsnem.2021-0346")
14. [Source 14](https://doi.org/10.1139/apnm-2017-0724")
15. [Source 15](https://doi.org/10.1007/s41465-023-00275-w")
16. [Source 16](https://doi.org/10.1080/19390211.2023.2179152")
17. [Source 17](https://doi.org/10.1113/JP281988")
18. [Source 18](https://pmc.ncbi.nlm.nih.gov/articles/PMC11058041/")
19. [Source 19](https://digitalcommons.usf.edu/usf_patents/58/")
20. [Source 20](https://patents.google.com/patent/EP3030231B1/en")
21. [Source 21](https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements")
22. [Source 22](https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-vi-claims")
