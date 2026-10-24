# Automated editorial proposal

- Proposal ID: proposal:4f2ef4cb9b391f70ff0b1cb34711810a
- Substance: choline
- Suggestion type: new-reference
- Source: [A fluorescent choline kinase alpha inhibitor for intraoperative molecular imaging during resection of canine NSCLC tumors.](https://pubmed.ncbi.nlm.nih.gov/42905852/)
- PMID: 42905852
- DOI: 10.1126/scitranslmed.aea4947
- Published: 2026-10-21
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Choline kinase α (ChoKα) is a biomarker of lung cancer, is overexpressed in 60% of human pulmonary malignancies, and is associated with an aggressive phenotype and poor clinical outcome. Patients with lung cancer who undergo surgery have a recurrence rate of 30 to 50%, indicating a potential need for better tumor detection modalities. A near-infrared fluorescent ChoKα-targeting imaging agent, JAS239 (λ<sub>ex</sub>, λ<sub>em</sub>: 745, 775 nanometers), was developed for intraoperative identification of tumors, their margins, and local metastases. In lung cancer cells, JAS239 inhibited phosphocholine production, reduced viability in a dose-dependent manner, and accumulated in the cytoplasm where ChoKα is active. JAS239 had favorable pharmacokinetics and pharmacodynamics for imaging metastatic lung lesions in mice. In situ and ex vivo fluorescence imaging of primary lung tumors in a canine clinical trial showed distinct tumor identification and margin delineation with a tumor-to-background ratio of 5.0 ± 0.6 and a contrast-to-variance ratio of 2.0 ± 0.2 at 0.5 milligram/kilogram. Fluorescence imaging identified a clinically significant event where an occult lesion was found after primary tumor resection. Fluorescence imaging also identified a close surgical margin, which prompted further investigation. Immunohistochemistry for ChoKα showed overexpression in canine lung tumors proportional to tumor fluorescence. Ex vivo human tumor painting demonstrated preferential JAS239 localization with a tumor-to-background ratio of 1.5 ± 0.1 and a contrast-to-variance ratio of 0.9 ± 0.1. These studies establish JAS239 as a safe and effective imaging agent for intraoperative lung tumor detection, warranting further evaluation for human patients with lung cancer.

## Proposed structured change

```json
{
  "title": "A fluorescent choline kinase alpha inhibitor for intraoperative molecular imaging during resection of canine NSCLC tumors.",
  "studyContext": "Canine clinical trial with supporting lung cancer cell, mouse, and ex vivo human tumor studies",
  "agent": "JAS239"
}
```

## Model rationale

The abstract reports preclinical and canine clinical-trial evaluation of a fluorescent choline kinase alpha-targeting imaging agent relevant to choline-related oncology research.

## Verbatim evidence from the abstract

> A near-infrared fluorescent ChoKα-targeting imaging agent, JAS239 (λ<sub>ex</sub>, λ<sub>em</sub>: 745, 775 nanometers), was developed for intraoperative identification of tumors, their margins, and local metastases.
> In situ and ex vivo fluorescence imaging of primary lung tumors in a canine clinical trial showed distinct tumor identification and margin delineation

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
