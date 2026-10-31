# Automated editorial proposal

- Proposal ID: proposal:4a5e98bcabcf7202c85111fd68076de5
- Substance: oxycodone-01a08b04
- Suggestion type: new-reference
- Source: [Haemodynamic and Respiratory Effects of Dexmedetomidine as an Adjuvant to Oxycodone Patient-Controlled Analgesia After Lumbar Spinal Fusion: A Post Hoc Analysis of the DoseRespDex Randomised Controlled Trial.](https://pubmed.ncbi.nlm.nih.gov/42929478/)
- PMID: 42929478
- DOI: 10.1111/aas.70362
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Purpose</h4>Dexmedetomidine has been studied as an adjunct to opioid patient-controlled analgesia (PCA) because of its opioid-sparing properties and limited respiratory depression. However, potential dose-dependent haemodynamic effects should be considered, and data on dexmedetomidine administered via PCA remain limited.<h4>Methods</h4>In this post hoc analysis of a randomised, double-blind, placebo-controlled trial, 98 adults undergoing lumbar spinal fusion were randomised 1:1:1:1 to 24-h PCA with oxycodone 1 mg/mL alone (D0; placebo referring to normal saline replacing dexmedetomidine in the PCA syringe) or combined with dexmedetomidine 2.5 μg/mL (D2), 5 μg/mL (D5) or 10 μg/mL (D10). Outcomes of interest for the present analysis included mean arterial pressure (MAP), heart rate (HR), respiratory parameters and adverse events. Plasma dexmedetomidine concentrations were analysed as a pre-planned pharmacokinetic sub-analysis.<h4>Results</h4>Mean changes over time differed significantly between groups for MAP (p = 0.005) and HR (p < 0.001). Plasma dexmedetomidine concentrations increased across the D2, D5 and D10 groups, with observed median peak concentrations of 0.15, 0.31 and 0.55 ng/mL in D2, D5 and D10. Over 72 h, MAP was lower in D5 versus D0 (-11.2 mmHg, 95% confidence interval [CI] -19.9 to -2.5, p = 0.004) and D10 versus D0 (-9.1 mmHg, 95% CI -17.4 to -0.8, p = 0.032). All dexmedetomidine doses reduced HR versus D0 (D2: -10.2; D5: -9.9; D10: -11.9 bpm; all p < 0.01), without differing from each other. Haemodynamic changes resolved by 48 h. No bradycardia occurred, and no between-group differences were detected in the measured respiratory variables.<h4>Conclusion</h4>Dexmedetomidine as an adjunct to oxycodone PCA produced transient haemodynamic effects without differences in bradycardia or in the measured respiratory variables. Although higher doses resulted in higher plasma concentrations, the magnitude of haemodynamic effects did not follow a clear dose-response pattern in the range studied. Dexmedetomidine 5 μg/mL combined with oxycodone 1 mg/mL may represent a reasonable candidate dose for further investigation.<h4>Editorial comment</h4>In this post hoc analysis of patients undergoing posterolateral spinal fusion, adjunctive dexamethasone (2.5, 5 or 10 mg/mL), administered alongside oxycodone PCA (1 mg/mL), resulted in a transient, minor decrease in mean arterial blood pressure and in heart rate at the highest doses, with no effect on respiratory parameters and with no adverse events. No correlation between plasma concentrations of dexmedetomidine and haemodynamic parameters was demonstrated.<h4>Trial registration</h4>NCT02454881, EudraCT 2014-003252-31.

## Proposed structured change

```json
{
  "title": "Haemodynamic and Respiratory Effects of Dexmedetomidine as an Adjuvant to Oxycodone Patient-Controlled Analgesia After Lumbar Spinal Fusion: A Post Hoc Analysis of the DoseRespDex Randomised Controlled Trial.",
  "studyDesign": "Post hoc analysis of a randomised, double-blind, placebo-controlled trial",
  "population": "98 adults undergoing lumbar spinal fusion",
  "intervention": "24-h PCA with oxycodone 1 mg/mL alone or combined with dexmedetomidine 2.5, 5 or 10 μg/mL",
  "registration": [
    "NCT02454881",
    "EudraCT 2014-003252-31"
  ]
}
```

## Model rationale

Directly evaluates oxycodone patient-controlled analgesia alone and combined with dexmedetomidine in adults after lumbar spinal fusion.

## Verbatim evidence from the abstract

> In this post hoc analysis of a randomised, double-blind, placebo-controlled trial, 98 adults undergoing lumbar spinal fusion were randomised 1:1:1:1 to 24-h PCA with oxycodone 1 mg/mL alone (D0; placebo referring to normal saline replacing dexmedetomidine in the PCA syringe) or combined with dexmedetomidine 2.5 μg/mL (D2), 5 μg/mL (D5) or 10 μg/mL (D10).
> NCT02454881, EudraCT 2014-003252-31.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
