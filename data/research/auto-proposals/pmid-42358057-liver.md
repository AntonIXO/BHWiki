# Automated editorial proposal

- Proposal ID: proposal:03852b8857d0183b48ea8492cc105ac1
- Substance: liver
- Suggestion type: new-effect
- Source: [Evaluating Associations Between Cumulative Use of Chronic Liver Injury-Inducing Antiretroviral Therapy and Hepatocellular Carcinoma, by Chronic Liver Disease Status.](https://pubmed.ncbi.nlm.nih.gov/42358057/)
- PMID: 42358057
- DOI: 10.1097/qai.0000000000003923
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Prolonged exposure to hepatotoxic antiretroviral therapy (ART) could lead to chronic liver injury, which might increase risk of hepatocellular carcinoma (HCC). We used causal inference methods to evaluate if cumulative exposure to ART with known mechanisms of chronic liver injury is associated with HCC among people with HIV (PWH), by chronic liver disease (CLD) status.<h4>Methods</h4>We conducted a cohort study of antiretroviral-naive PWH with and without diagnosed CLD who initiated ART in the Veterans Affairs between 1999 and 2023. Exposure to ART with known mechanism of chronic liver injury (mitochondrial toxicity or accumulation of toxic intermediates) was determined monthly through prescription fills. Incident HCC was identified by Veterans Affairs National Cancer Registry and/or recorded diagnoses. Marginal structural models estimated odds ratios (ORs) with 95% confidence intervals (CIs) of HCC associated with cumulative exposure to chronic liver injury-inducing ART compared with ART without chronic liver injury mechanisms, by CLD status.<h4>Results</h4>Among 11,854 PWH without CLD and 6771 PWH with CLD, we observed 112 and 378 HCC events, respectively. Among PWH without CLD, ≥4 years of exposure to chronic liver injury-inducing ART was associated with HCC when compared with ≥4 years of use of ART without chronic liver injury mechanisms (OR = 4.02 [95% CI: 1.00-16.24]). Among PWH with CLD, ≥4 years of exposure to chronic liver injury-inducing ART was not associated with HCC (OR = 1.36; 95% CI: 0.68-2.72).<h4>Conclusion</h4>Four or more years of ART with a chronic liver injury mechanism was associated with HCC among PWH without CLD, but not those with CLD.

## Proposed structured change

```json
{
  "outcome": "hepatocellular carcinoma (HCC)",
  "exposure": "cumulative exposure to antiretroviral therapy with known mechanisms of chronic liver injury",
  "comparator": "antiretroviral therapy without chronic liver injury mechanisms",
  "population": "people with HIV without diagnosed chronic liver disease",
  "exposureDuration": "≥4 years",
  "effectMeasure": "odds ratio",
  "estimate": 4.02,
  "confidenceInterval": "1.00-16.24"
}
```

## Model rationale

In a cohort of people with HIV without diagnosed chronic liver disease, at least four years of exposure to chronic liver injury-inducing antiretroviral therapy was associated with hepatocellular carcinoma compared with antiretroviral therapy without chronic liver injury mechanisms.

## Verbatim evidence from the abstract

> Among PWH without CLD, ≥4 years of exposure to chronic liver injury-inducing ART was associated with HCC when compared with ≥4 years of use of ART without chronic liver injury mechanisms (OR = 4.02 [95% CI: 1.00-16.24]).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
