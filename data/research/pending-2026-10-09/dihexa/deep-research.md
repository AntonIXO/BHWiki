# Research Report: Research exactly Dihexa (slug dihexa). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover chemical identity, preclinical HGF/c-Met/cognition evidence, explicit human trials/PK search and absence if verified, no clinical dose or efficacy claims from rodents, mechanistic tumor-risk concern versus observed human harm, patents/authors and COI. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: dihexa
title: Dihexa
x-shape:
  category: compound
  subtype: research-chemical
---

## Summary

Dihexa is a synthetic angiotensin-IV-derived peptidomimetic, also reported as PNB-0408. Its published program reports rat brain penetration, prolonged rat exposure, synaptogenic activity, and improved performance in memory-deficit models. However, the principal Dihexa pharmacokinetic/behavioral paper carries a 2021 Notice of Concern, while the 2012 HGF/Met and 2014 HGF/c-Met papers were retracted in April 2025 after a Washington State University investigation found falsified and/or fabricated data in specified figures and data. [S1][S2][S4][S6][S7]

As of **October 9, 2026**, exact-name searches located no registered Dihexa/PNB-0408 human trial and no published human Dihexa pharmacokinetic study. Human dose, efficacy, safety, half-life, interactions, and adverse-event outcomes are therefore unestablished. The tumor concern is mechanistic and pathway-based, not an observed Dihexa-specific human harm signal. [S8][S9][S10]

```yaml
- evidence_stage: "Cell and animal research only"
  human_trial_status: "No directly indexed Dihexa/PNB-0408 trial located as of 2026-10-09"
  human_pk_status: "No published human PK study located"
  clinical_dose: "None established"
  key_integrity_issue: "Central HGF/c-Met paper retracted in 2025"
  sourceIds: [S2, S4, S6, S7, S9]
```

## Description

The identity used here is the CAS-linked PubChem record: **N-(1-oxohexyl)-L-tyrosyl-N-(6-amino-6-oxohexyl)-L-isoleucinamide**, commonly abbreviated N-hexanoic-Tyr-Ile-(6)-aminohexanoic amide. It has molecular formula **C27H44N4O5**, molecular weight **504.7 g/mol**, CAS **1401708-83-5**, and PubChem CID **129010512**. Structurally, it is a hexanoylated Tyr-Ile peptidomimetic with a 6-aminohexanamide terminus, not native angiotensin IV. [S1][S2]

PubChem also exposes a separate Dihexa/PNB-0408 index entry. This article keys chemical identity to the CAS-linked record rather than merging registry entries without stereochemical verification. [S1][S1b]

```yaml
- common_name: "Dihexa"
  development_code: "PNB-0408"
  systematic_name: "N-(1-oxohexyl)-L-tyrosyl-N-(6-amino-6-oxohexyl)-L-isoleucinamide"
  formula: "C27H44N4O5"
  molecular_weight: "504.7 g/mol"
  cas: "1401708-83-5"
  pubchem_cid: 129010512
  scaffold: "Hexanoyl-Tyr-Ile-6-aminohexanamide"
  classification: "Angiotensin-IV-derived peptidomimetic"
  sourceIds: [S1, S1b, S2]
```

## Evidence note

The strongest mechanistic and cognitive claims originated from one Washington State University-associated research program involving Joseph W. Harding, John W. Wright, Leen H. Kawas, and collaborators. The 2013 Dihexa paper is indexed with a 2021 Notice of Concern. The 2012 HGF/Met paper and the 2014 HGF/c-Met paper were retracted on April 29, 2025. The 2014 retraction notice states that Figures 1B and 2A/C, plus data submitted in an erratum, contained falsified and/or fabricated data; it identifies Kawas and Harding as solely responsible for those findings. [S3][S4][S6][S7]

```yaml
- paper: "Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents"
  year: 2013
  status: "Notice of Concern published in 2021"
  consequence: "Rat PK, BBB, and behavioral findings require qualification"
  sourceIds: [S2, S7]
- paper: "Development of angiotensin IV analogs as hepatocyte growth factor/Met modifiers"
  year: 2012
  status: "Retracted April 29, 2025"
  stated_reason: "Falsified and/or fabricated data in Figures 3A and 4"
  sourceIds: [S5, S6]
- paper: "The procognitive and synaptogenic effects of angiotensin IV-derived peptides are dependent on activation of the hepatocyte growth factor/c-Met system"
  year: 2014
  status: "Retracted April 29, 2025"
  stated_reason: "Falsified and/or fabricated data in specified figures and erratum data"
  sourceIds: [S3, S4]
```

## Doses

No human or clinical dose exists. Published quantities below are historical **animal-study parameters only** and are not human doses, human-equivalent doses, or efficacy guidance. The 2 mg/kg oral cognitive experiment belongs to the retracted 2014 paper; the PK doses belong to the 2013 paper carrying a Notice of Concern. [S2][S3][S4][S7]

```yaml
- species: "Rat"
  route: "Intravenous"
  dose: "10 mg/kg"
  purpose: "In-vivo PK"
  evidence_status: "Notice-of-Concern paper"
  sourceIds: [S2, S7]
- species: "Rat"
  route: "Intraperitoneal"
  dose: "20 mg/kg"
  purpose: "In-vivo PK"
  evidence_status: "Notice-of-Concern paper"
  sourceIds: [S2, S7]
- species: "Rat"
  route: "Oral"
  dose: "2 mg/kg"
  purpose: "Scopolamine-amnesia Morris water maze experiment"
  evidence_status: "Reported in retracted 2014 paper"
  sourceIds: [S3, S4]
- human_clinical_dose: "None established"
  sourceIds: [S9, S10]
```

## Pharmacokinetics

The 2013 rat study reported a rat-serum in-vitro half-life of **335.5 ± 9.5 minutes** and an in-vivo terminal half-life after 10 mg/kg IV dosing of **18,256 ± 7,787 minutes** in a small cohort of three rats. It also reported radiolabeled brain accumulation above vascular-space correction at 30 minutes. These findings are animal-specific and come from the paper carrying a Notice of Concern. [S2][S7]

No human absorption, distribution, metabolism, excretion, bioavailability, metabolite, plasma-concentration, cerebrospinal-fluid, or half-life data were located. [S9]

```yaml
- rat_serum_stability_half_life: "335.5 ± 9.5 min; in-vitro rat serum"
  sourceIds: [S2]
- rat_iv_terminal_half_life: "18,256 ± 7,787 min; n=3"
  sourceIds: [S2]
- brain_penetration: "Radiolabeled brain accumulation reported in rats at 30 min"
  sourceIds: [S2]
- human_pk: "No published human PK located"
  sourceIds: [S9]
- interpretation: "Rodent PK cannot establish human accumulation, schedule, or safety"
  sourceIds: [S2, S7, S9]
```

## Modifiers

Experimental modifiers were used as mechanistic probes rather than clinical co-treatments. In the retracted 2014 study, an HGF antagonist and c-Met-directed shRNA were reported to suppress Dihexa-associated spine formation and electrophysiological changes. [S3][S4]

```yaml
- modifier: "HGF antagonist Hinge"
  reported_effect: "Blocked Dihexa-associated spinogenesis and mEPSC-frequency increase"
  status: "Finding reported in retracted paper"
  sourceIds: [S3, S4]
- modifier: "c-Met shRNA"
  reported_effect: "Blocked reported HGF-, Dihexa-, and Nle1-AngIV-associated spine induction"
  status: "Finding reported in retracted paper"
  sourceIds: [S3, S4]
- modifier_class: "HGF/c-MET pathway manipulation"
  human_validation: "None located"
  sourceIds: [S3, S8, S9]
```

## Effects

Reported preclinical effects include increased dendritic-spine density and synaptic-marker colocalization in rat hippocampal cultures, increased AMPA-mediated miniature EPSC frequency, HGF-dependent c-Met phosphorylation in cell assays, and improved Morris water maze performance in scopolamine-impaired rats. The central mechanistic paper reporting several of these findings is retracted, and the principal Dihexa PK/behavior paper carries a Notice of Concern. [S2][S3][S4][S7]

```yaml
- endpoint: "Dendritic spinogenesis"
  model: "Cultured rat hippocampal neurons and hippocampal slices"
  result: "Increase reported"
  evidence_status: "Mechanistic source retracted"
  sourceIds: [S3, S4]
- endpoint: "Synaptogenesis / synaptic markers"
  model: "Cultured rat hippocampal neurons"
  result: "Increase reported"
  evidence_status: "Mechanistic source retracted"
  sourceIds: [S3, S4]
- endpoint: "Morris water maze"
  model: "Scopolamine-impaired rats"
  result: "Deficit reversal reported"
  evidence_status: "Animal-only; key source retracted or under Notice of Concern"
  sourceIds: [S2, S3, S4, S7]
- human_cognition: "No human efficacy outcome located"
  sourceIds: [S9]
```

## Outcomes

No Dihexa human trial outcome, human PK outcome, human safety outcome, or human adverse-event series was located as of October 9, 2026. “No observed human harm” therefore means that no human exposure dataset was found; it is not evidence that the compound is safe. Animal cognitive performance is not clinical efficacy. [S9][S10]

```yaml
- human_efficacy: "None established"
  sourceIds: [S9]
- human_safety: "None established"
  sourceIds: [S9, S10]
- observed_human_harm: "No documented Dihexa-specific human harm signal located"
  interpretation: "Absence reflects lack of verified human exposure data"
  sourceIds: [S9, S10]
- clinical_translation: "Unresolved and unsupported by human data"
  sourceIds: [S2, S4, S7, S9]
```

## Mechanisms

The proposed mechanism is allosteric modulation of hepatocyte growth factor, increasing HGF-dependent activation of the receptor tyrosine kinase c-MET. The 2014 paper reported a Dihexa–HGF dissociation constant of **6.52 × 10−11 M**, enhanced c-MET phosphorylation at low HGF concentrations, and blockade by HGF antagonism or c-MET knockdown. Because that paper was retracted, these findings are historical claims rather than established mechanisms. [S3][S4]

HGF/c-MET signaling normally participates in growth, survival, motility, morphogenesis, angiogenesis, invasion, and metastasis. Thus, tumor promotion is a biologically plausible concern if a compound chronically potentiates this pathway, especially in pre-existing pathway-dependent tumors. That is a mechanistic inference from cancer biology, not evidence that Dihexa causes cancer in humans. [S8]

```yaml
- proposed_target: "Hepatocyte growth factor (HGF)"
  proposed_action: "Allosteric modulation or potentiation"
  evidence_status: "Reported; principal paper retracted"
  sourceIds: [S3, S4]
- receptor: "c-MET / MET"
  proposed_action: "Enhanced HGF-dependent receptor phosphorylation"
  evidence_status: "Reported; not clinically validated"
  sourceIds: [S3, S4]
- downstream_processes: "Growth, survival, motility, morphogenesis, angiogenesis, invasion"
  sourceIds: [S8]
- tumor_risk: "Mechanistic concern, not an observed Dihexa-specific human outcome"
  sourceIds: [S8, S9]
```

## Cautions

The principal uncertainties are human exposure status, product identity and formulation, dose, accumulation, long-term tissue effects, and the validity of compromised foundational data. The reported long rat half-life is not a human half-life and comes from a paper under Notice of Concern. [S2][S7]

No human tumor signal has been established, but the absence of human harm data prevents a meaningful safety comparison. The tumor-risk concern should therefore be described as **theoretical but biologically grounded**, not as a demonstrated adverse effect. [S8][S9]

```yaml
- human_safety_profile: "Unavailable"
  sourceIds: [S9, S10]
- long_term_exposure: "Uncharacterized"
  sourceIds: [S2, S7, S9]
- tumor_concern: "Pathway-based theoretical concern"
  sourceIds: [S8]
- data_integrity: "Two central papers retracted; one Dihexa-focused paper carries Notice of Concern"
  sourceIds: [S4, S6, S7]
- clinical_dose_claims: "None supported"
  sourceIds: [S2, S3, S9]
```

## Claims

```yaml
- claim: "Dihexa improves human cognition"
  status: "Unsupported; no human efficacy trial located"
  sourceIds: [S9]
- claim: "Dihexa is a proven HGF/c-MET activator"
  status: "Unconfirmed; principal mechanistic paper retracted"
  sourceIds: [S3, S4]
- claim: "Dihexa crosses the blood-brain barrier"
  status: "Reported in rats; human BBB exposure unknown"
  sourceIds: [S2, S7]
- claim: "Rodent doses define a human dose"
  status: "False; no clinical dose exists"
  sourceIds: [S2, S3, S9]
- claim: "Dihexa causes cancer"
  status: "Not demonstrated; only a pathway-based mechanistic concern"
  sourceIds: [S8, S9]
- claim: "Dihexa is safe in humans"
  status: "Unsupported; human exposure data were not located"
  sourceIds: [S9, S10]
```

## Interactions

No human drug–drug, drug–disease, pharmacodynamic, or pharmacokinetic interaction studies were located. Experimental HGF antagonists and c-MET knockdown were used as pathway probes, not as evidence for clinical interaction management. [S3][S4][S9]

```yaml
- clinical_ddi_studies: "None located"
  sourceIds: [S9]
- experimental_hgf_modifier: "Hinge antagonist"
  implication: "Mechanistic probe only"
  sourceIds: [S3, S4]
- experimental_target_modifier: "c-MET shRNA"
  implication: "Mechanistic probe only"
  sourceIds: [S3, S4]
- pathway_context: "HGF/MET signaling intersects growth, survival, motility, and angiogenesis biology"
  sourceIds: [S8]
```

## Experience links

No validated human experience dataset was located. Vendor, forum, and anecdotal reports are not used as evidence because identity, dose, formulation, and exposure cannot be verified from the clinical literature. [S9]

```yaml
- clinicaltrials_dihexa: "https://clinicaltrials.gov/search?term=dihexa"
- clinicaltrials_pnb0408: "https://clinicaltrials.gov/search?term=PNB-0408"
- pubmed_dihexa: "https://pubmed.ncbi.nlm.nih.gov/?term=dihexa"
- chemical_record: "https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
- sourceIds: [S1, S9]
```

## References

```yaml
- sourceId: S1
  exactTitle: "N-(1-Oxohexyl)-L-tyrosyl-N-(6-amino-6-oxohexyl)-L-isoleucinamide | C27H44N4O5 | CID 129010512 - PubChem"
  namedAuthorsOrOrganization: "National Center for Biotechnology Information, PubChem"
  year: 2026
  httpsUrl: "https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  kind: "Chemical database record"
  insight: "CAS-linked chemical name, formula, molecular weight, and CID"
  limitation: "Identity record; not efficacy or safety evidence"
  funding: "NCBI/NIH infrastructure; record does not state study funding"
  sponsorshipStatus: "Public government database"
  conflictsOfInterest: "None reported"
  conflictOfInterestStatus: "Not reported for database record"

- sourceId: S1b
  exactTitle: "Dihexa (PNB-0408) | C27H44N4O5 | CID 125355097 - PubChem"
  namedAuthorsOrOrganization: "National Center for Biotechnology Information, PubChem"
  year: 2026
  httpsUrl: "https://pubchem.ncbi.nlm.nih.gov/compound/Dihexa-_PNB-0408"
  kind: "Chemical database record"
  insight: "Indexes the PNB-0408 synonym"
  limitation: "Separate registry entry; not merged here with the CAS-linked record"
  funding: "NCBI/NIH infrastructure; not otherwise stated"
  sponsorshipStatus: "Public government database"
  conflictsOfInterest: "None reported"
  conflictOfInterestStatus: "Not reported for database record"

- sourceId: S2
  exactTitle: "Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents"
  namedAuthorsOrOrganization: "Alene T. McCoy, Caroline C. Benoist, John W. Wright, Leen H. Kawas, Jyote M. Bule-Ghogare, Mingyan Zhu, Suzanne M. Appleyard, Gary A. Wayman, Joseph W. Harding"
  year: 2013
  httpsUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3533412/"
  kind: "Original preclinical paper"
  insight: "Dihexa rat PK, brain penetration, serum stability, and behavioral reports"
  limitation: "2021 Notice of Concern; no human data"
  funding: "Not stated in the retrieved article record"
  sponsorshipStatus: "Washington State University academic research"
  conflictsOfInterest: "No complete statement located in the retrieved record"
  conflictOfInterestStatus: "Incomplete"

- sourceId: S3
  exactTitle: "The procognitive and synaptogenic effects of angiotensin IV-derived peptides are dependent on activation of the hepatocyte growth factor/c-met system"
  namedAuthorsOrOrganization: "Caroline C. Benoist, Leen H. Kawas, Mingyan Zhu, Katherine A. Tyson, Lori Stillmaker, Suzanne M. Appleyard, John W. Wright, Gary A. Wayman, Joseph W. Harding"
  year: 2014
  httpsUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4201273/"
  kind: "Original preclinical paper; retracted"
  insight: "Reported HGF binding, c-MET signaling, synaptogenesis, and rat cognition"
  limitation: "Retracted in 2025 after WSU data-integrity findings"
  funding: "Not stated in the retrieved article record"
  sponsorshipStatus: "Washington State University and M3 Biotechnology affiliations"
  conflictsOfInterest: "Kawas, Wright, and Harding had M3 Biotechnology affiliations"
  conflictOfInterestStatus: "Commercial affiliation disclosed"

- sourceId: S4
  exactTitle: "Retraction notice to “The Procognitive and Synaptogenic Effects of Angiotensin IV-Derived Peptides Are Dependent on Activation of the Hepatocyte Growth Factor/c-Met System” [J Pharmacol Exp Ther 351 (2014) 390-402]"
  namedAuthorsOrOrganization: "Caroline C. Benoist, Leen H. Kawas, Mingyan Zhu, Katherine A. Tyson, Lori Stillmaker, Suzanne M. Appleyard, John W. Wright, Gary A. Wayman, Joseph W. Harding"
  year: 2025
  httpsUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13095468/"
  kind: "Retraction notice"
  insight: "States that specified figures and erratum data contained falsified and/or fabricated data"
  limitation: "Does not independently validate remaining Dihexa literature"
  funding: "Not applicable to the retraction notice"
  sponsorshipStatus: "Journal/editorial record"
  conflictsOfInterest: "Original authors retained in the notice; M3 affiliations appear in the record"
  conflictOfInterestStatus: "Affiliations disclosed"

- sourceId: S5
  exactTitle: "Development of angiotensin IV analogs as hepatocyte growth factor/Met modifiers"
  namedAuthorsOrOrganization: "Leen H. Kawas, Alene T. McCoy, Brent J. Yamamoto, John W. Wright, Joseph W. Harding"
  year: 2012
  httpsUrl: "https://pubmed.ncbi.nlm.nih.gov/22129598/"
  kind: "Original preclinical paper; retracted"
  insight: "Reported HGF/Met modulation by angiotensin-IV analogs"
  limitation: "Retracted in 2025"
  funding: "Research Support, Non-U.S. Government listed by PubMed"
  sponsorshipStatus: "Washington State University academic research"
  conflictsOfInterest: "No complete statement located in the retrieved record"
  conflictOfInterestStatus: "Incomplete"

- sourceId: S6
  exactTitle: "Retraction notice to “Development of Angiotensin IV Analogs as Hepatocyte Growth Factor/Met Modifiers” [J Pharmacol Exp Ther 340 (2012) 539-548]"
  namedAuthorsOrOrganization: "Leen H. Kawas, Alene T. McCoy, Brent J. Yamamoto, John W. Wright, Joseph W. Harding"
  year: 2025
  httpsUrl: "https://pubmed.ncbi.nlm.nih.gov/40312092/"
  kind: "Retraction notice"
  insight: "States that Figures 3A and 4 contained falsified and/or fabricated data"
  limitation: "Retraction notice is not a clinical safety assessment"
  funding: "Not applicable"
  sponsorshipStatus: "Journal/editorial record"
  conflictsOfInterest: "Original author affiliations are retained"
  conflictOfInterestStatus: "Affiliations disclosed"

- sourceId: S7
  exactTitle: "Notice of Concern: McCoy AT, Benoist CC, Wright JW, Kawas LH, Bule-Ghogare JM, Zhu M, Appleyard SM, Wayman GA, and Harding JW (2013) Evaluation of Metabolically Stabilized Angiotensin IV Analogs as Procognitive/Antidementia Agents, J Pharmacol Exp Ther, 344: 141-154; DOI: 10.1124/jpet.112.199497"
  namedAuthorsOrOrganization: "The Journal of Pharmacology and Experimental Therapeutics; original authors McCoy et al."
  year: 2021
  httpsUrl: "https://pubmed.ncbi.nlm.nih.gov/34551989/"
  kind: "Expression of concern"
  insight: "Flags the main Dihexa PK/behavior paper"
  limitation: "Does not itself determine whether every result is invalid"
  funding: "Not applicable"
  sponsorshipStatus: "Journal notice"
  conflictsOfInterest: "Not stated in notice"
  conflictOfInterestStatus: "Not assessed"

- sourceId: S8
  exactTitle: "Targeting the HGF/Met Signaling Pathway in Cancer"
  namedAuthorsOrOrganization: "Fabiana Cecchi, Daniel C. Rabe, Douglas P. Bottaro"
  year: 2010
  httpsUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3412517/"
  kind: "Peer-reviewed cancer-biology review"
  insight: "Describes HGF/MET roles in oncogenesis, invasion, angiogenesis, and metastasis"
  limitation: "Not Dihexa-specific and does not demonstrate Dihexa toxicity"
  funding: "Not stated in the retrieved article record"
  sponsorshipStatus: "National Cancer Institute academic/government authorship"
  conflictsOfInterest: "Not stated in the retrieved record"
  conflictOfInterestStatus: "Not assessed"

- sourceId: S9
  exactTitle: "ClinicalTrials.gov search page for “dihexa”"
  namedAuthorsOrOrganization: "U.S. National Library of Medicine"
  year: 2026
  httpsUrl: "https://clinicaltrials.gov/search?term=dihexa"
  kind: "Clinical-trial registry search"
  insight: "No directly indexed Dihexa study located; companion PNB-0408 search also used"
  limitation: "Registry absence cannot exclude unregistered human exposure"
  funding: "U.S. government database infrastructure"
  sponsorshipStatus: "Public federal registry"
  conflictsOfInterest: "None reported"
  conflictOfInterestStatus: "Not applicable"

- sourceId: S10
  exactTitle: "Bulk Drug Substances Nominated for Use in Compounding Under Section 503A | Updated April 22, 2026"
  namedAuthorsOrOrganization: "U.S. Food and Drug Administration"
  year: 2026
  httpsUrl: "https://www.fda.gov/media/94155/download?attachment="
  kind: "Regulatory document"
  insight: "Dihexa Acetate is shown as removed from Category 2 because the nomination was withdrawn"
  limitation: "Administrative compounding status; not approval or clinical safety evidence"
  funding: "U.S. federal agency"
  sponsorshipStatus: "Federal regulator"
  conflictsOfInterest: "None reported"
  conflictOfInterestStatus: "Not applicable"

- sourceId: S11
  exactTitle: "External Review of Innovation and Entrepreneurship at WSU"
  namedAuthorsOrOrganization: "Washington State University"
  year: 2017
  httpsUrl: "https://research.wsu.edu/documents/2017/03/external-review-of-innovation-and-entrepreneurship-at-wsu.pdf"
  kind: "Institutional innovation report"
  insight: "Identifies Joseph Harding and John Wright as faculty inventors associated with M3’s growth-factor-modulator and patent-disclosure program"
  limitation: "Institutional summary, not a patent claim chart or clinical validation"
  funding: "Not stated"
  sponsorshipStatus: "University report"
  conflictsOfInterest: "Institutional and commercialization context is inherent"
  conflictOfInterestStatus: "Context disclosed"
```

## Legal

No FDA-approved Dihexa product or human-use authorization was identified in the reviewed sources. The FDA document concerns a **Dihexa acetate compounding nomination** that was withdrawn; withdrawal is neither approval nor a finding of safety. [S9][S10]

Washington State University records describe Harding and Wright as faculty inventors associated with M3 Biotechnology’s growth-factor-modulator patent program. The 2014 Dihexa paper lists Kawas, Wright, and Harding with M3 affiliations, documenting a commercial-interest relationship relevant to interpretation of the foundational evidence. Patent or licensing activity does not establish clinical efficacy. [S3][S11]

```yaml
- regulatory_status: "No FDA approval identified"
  sourceIds: [S9, S10]
- fda_compounding_record: "Dihexa Acetate nomination withdrawn; not an approval"
  sourceIds: [S10]
- patent_context: "WSU/M3 growth-factor-modulator patent program associated with Harding and Wright"
  sourceIds: [S11]
- author_commercial_context: "Kawas, Wright, and Harding had M3 Biotechnology affiliations in the 2014 paper"
  sourceIds: [S3]
- jurisdictional_scope: "Legal treatment varies by jurisdiction; no blanket authorization inferred"
  sourceIds: [S9, S10, S11]
```

## Research Metadata
- **Total research steps**: 83
- **Search queries executed**: 11
- **Citations found**: 14
- **Task ID**: resp_096c6540d3c0289a016ac9512fa48087d2943cad1a2587f5ec
- **Execution time**: 590.61 seconds

## Citations
1. [Source 1](https://clinicaltrials.gov/search?term=dihexa")
2. [Source 2](https://clinicaltrials.gov/search?term=PNB-0408")
3. [Source 3](https://pubmed.ncbi.nlm.nih.gov/?term=dihexa")
4. [Source 4](https://pubchem.ncbi.nlm.nih.gov/compound/129010512")
5. [Source 5](https://pubchem.ncbi.nlm.nih.gov/compound/Dihexa-_PNB-0408")
6. [Source 6](https://pmc.ncbi.nlm.nih.gov/articles/PMC3533412/")
7. [Source 7](https://pmc.ncbi.nlm.nih.gov/articles/PMC4201273/")
8. [Source 8](https://pmc.ncbi.nlm.nih.gov/articles/PMC13095468/")
9. [Source 9](https://pubmed.ncbi.nlm.nih.gov/22129598/")
10. [Source 10](https://pubmed.ncbi.nlm.nih.gov/40312092/")
11. [Source 11](https://pubmed.ncbi.nlm.nih.gov/34551989/")
12. [Source 12](https://pmc.ncbi.nlm.nih.gov/articles/PMC3412517/")
13. [Source 13](https://www.fda.gov/media/94155/download?attachment=")
14. [Source 14](https://research.wsu.edu/documents/2017/03/external-review-of-innovation-and-entrepreneurship-at-wsu.pdf")
