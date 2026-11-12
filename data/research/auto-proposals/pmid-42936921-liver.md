# Automated editorial proposal

- Proposal ID: proposal:9c7488350501467d0a693002f76bd808
- Substance: liver
- Suggestion type: new-claim
- Source: [Frailty Rather Than Sonographic Muscle Measurement Predicts Outcome in Liver Cirrhosis.](https://pubmed.ncbi.nlm.nih.gov/42936921/)
- PMID: 42936921
- DOI: 10.1002/jcsm.70373
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Sarcopenia and frailty are frequent in patients with liver cirrhosis and are associated with morbidity and mortality. Given the limitations of computed tomography (CT) for routine assessment of muscle loss and the need for practical bedside assessment, we aimed to compare sonographic muscle thickness measurement and the Clinical Frailty Scale (CFS) for their prognostic value in patients with liver cirrhosis.<h4>Methods</h4>In this study, data of prospectively recruited patients with liver cirrhosis (both in- and outpatients) treated at a tertiary care centre were retrospectively analysed. Sonographic muscle thickness measurement was used to calculate the feather thigh muscle thickness index (fTMTI) and the compression thigh muscle thickness index (cTMTI). Frailty was assessed using the Clinical Frailty Scale. Patients were followed for liver transplantation or death.<h4>Results</h4>In total, 153 patients were included with a median Model for End-Stage Liver Disease (MELD) of 18 (Interquartile range (IQR) 10; 24). Ninety-five patients (62.0%) were male, and 70 patients (46%) were recruited in the outpatient setting. During the 90-day follow-up period, 71 patients (46.4%) either died or underwent liver transplantation. Outpatients had more muscle mass than inpatients and a lower CFS (fTMTI 19.1 mm/m vs. 12.1 mm/m, p < 0.001 and CFS 3 vs. 5, p < 0.001). In multivariable Cox-regression models adjusted for age and MELD score, a higher CFS remained independently associated with mortality and liver transplantation (LT) (HR 1.25 (1.14; 1.63), p < 0.001), whereas fTMTI and cTMTI were not consistently associated with a poorer prognosis (fTMTI HR 1.52 (0.68; 3.42), p = 0.300; cTMTI HR 1.01 (0.61; 1.68), p > 0.9). Subgroup analyses in men confirmed a superior prognostic value of CFS (HR 1.51 (1.17; 1.94), p = 0.001) over sonographic muscle thickness measurement (cTMTI HR 0.94 (0.84; 1.04), p = 0.200; fTMTI HR 0.93 (0.88; 1.00), p = 0.039).<h4>Conclusion</h4>CFS is robustly associated with poorer prognosis in patients with liver cirrhosis and seems to be superior to sonographic muscle thickness measurement of the thigh.

## Proposed structured change

```json
{
  "claim": "In patients with liver cirrhosis, a higher Clinical Frailty Scale score was independently associated with mortality or liver transplantation over 90 days, whereas sonographic thigh muscle thickness indices were not consistently associated with poorer prognosis.",
  "population": "Patients with liver cirrhosis",
  "outcome": "90-day mortality or liver transplantation",
  "effect": "Adjusted hazard ratio for CFS 1.25 (95% CI 1.14–1.63; p < 0.001); fTMTI HR 1.52 (95% CI 0.68–3.42; p = 0.300) and cTMTI HR 1.01 (95% CI 0.61–1.68; p > 0.9)"
}
```

## Model rationale

The abstract reports a prospective cohort of 153 patients in which frailty measured by CFS had stronger prognostic value than sonographic thigh muscle thickness measurements.

## Verbatim evidence from the abstract

> In multivariable Cox-regression models adjusted for age and MELD score, a higher CFS remained independently associated with mortality and liver transplantation (LT) (HR 1.25 (1.14; 1.63), p < 0.001), whereas fTMTI and cTMTI were not consistently associated with a poorer prognosis (fTMTI HR 1.52 (0.68; 3.42), p = 0.300; cTMTI HR 1.01 (0.61; 1.68), p > 0.9).
> CFS is robustly associated with poorer prognosis in patients with liver cirrhosis and seems to be superior to sonographic muscle thickness measurement of the thigh.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
