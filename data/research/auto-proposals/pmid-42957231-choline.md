# Automated editorial proposal

- Proposal ID: proposal:b7843d786d0f8b5538528bd15b35542b
- Substance: choline
- Suggestion type: new-reference
- Source: [Usefulness of Texture Analysis in &lt;sup&gt;11&lt;/sup&gt;C-Choline PET/CT for Patients With Prostate Cancer.](https://pubmed.ncbi.nlm.nih.gov/42957231/)
- PMID: 42957231
- DOI: 10.21873/invivo.14523
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background/aim</h4>Texture analysis provides quantitative evaluation of intratumoral heterogeneity of radiopharmaceutical uptake. ComBat harmonization, which reduces batch effects, has been applied in several <sup>18</sup>F-fluorodeoxyglucose (FDG) positron emission tomography (PET)/computed tomography (CT) texture analysis studies. In addition, <sup>11</sup>C-Choline PET/CT has been reported to be useful for evaluating urological tumors, including prostate cancer. This study investigated whether texture parameters derived from <sup>11</sup>C-Choline PET/CT are associated with prostate cancer aggressiveness.<h4>Patients and methods</h4>A retrospective analysis was performed in 18 patients diagnosed with prostate cancer who underwent <sup>11</sup>C-Choline PET/CT examinations. Six texture features were evaluated: entropy, homogeneity, dissimilarity, intensity variability (IV), size-zone variability (SZV) and zone percentage (ZP). Correlation coefficients between the six texture parameters and Gleason score were calculated.<h4>Results</h4>Among the evaluated texture parameters, SZV showed the strongest correlation with Gleason score (ρ=0.45), followed by IV (ρ=0.44), entropy (ρ=0.08), homogeneity (ρ=0.04), ZP (ρ=0.03), and dissimilarity (ρ=-0.02).<h4>Conclusion</h4>SZV and IV derived from <sup>11</sup>C-Choline PET/CT showed correlations with Gleason score and warrant further investigation as potential imaging biomarkers of prostate cancer aggressiveness.

## Proposed structured change

```json
{
  "title": "Usefulness of Texture Analysis in <sup>11</sup>C-Choline PET/CT for Patients With Prostate Cancer",
  "studyDesign": "Retrospective analysis",
  "population": "18 patients diagnosed with prostate cancer who underwent <sup>11</sup>C-Choline PET/CT examinations",
  "findings": {
    "SZV": "Strongest correlation with Gleason score (ρ=0.45)",
    "IV": "Correlation with Gleason score (ρ=0.44)"
  },
  "conclusion": "SZV and IV derived from <sup>11</sup>C-Choline PET/CT may warrant further investigation as imaging biomarkers of prostate cancer aggressiveness."
}
```

## Model rationale

The abstract reports a retrospective prostate cancer imaging study linking texture parameters from radiolabeled 11C-choline PET/CT with Gleason score. It is relevant as an imaging reference, but does not evaluate oral choline or choline supplementation.

## Verbatim evidence from the abstract

> A retrospective analysis was performed in 18 patients diagnosed with prostate cancer who underwent <sup>11</sup>C-Choline PET/CT examinations.
> Among the evaluated texture parameters, SZV showed the strongest correlation with Gleason score (ρ=0.45), followed by IV (ρ=0.44)
> SZV and IV derived from <sup>11</sup>C-Choline PET/CT showed correlations with Gleason score and warrant further investigation as potential imaging biomarkers of prostate cancer aggressiveness.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
