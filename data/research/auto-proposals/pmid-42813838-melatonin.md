# Automated editorial proposal

- Proposal ID: proposal:292dbf78861c662d1e9f8b6f4a120163
- Substance: melatonin
- Suggestion type: new-effect
- Source: [Influence of Intravenous Norepinephrine Administration on Melatonin Plasma Concentration in Awake and Anaesthetised Healthy Adult Volunteers.](https://pubmed.ncbi.nlm.nih.gov/42813838/)
- PMID: 42813838
- DOI: 10.1111/jpi.70188
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Melatonin (MEL) is an endogenous hormone that regulates circadian rhythm, immune function and oxidative stress responses. Norepinephrine (NE), an endogenous catecholamine, increases blood pressure through the sympathetic nervous system and is commonly administered intraoperatively or in the clinically ill patient for hemodynamic support. Although endogenous NE is known to stimulate MEL synthesis, the effects of exogenous intravenous NE on plasma MEL concentration, particularly under general anaesthesia (GA), remain poorly characterised. This study examined the influence of intravenous NE on plasma MEL concentrations in healthy volunteers, both awake and under general anaesthesia. A secondary analysis was conducted using data from a prospective, single-centre, cross-over study involving volunteers who received stepwise NE infusions while awake and under total intravenous general anaesthesia. Arterial blood samples were collected to determine plasma MEL and NE concentrations. Linear mixed-effects modelling was used to assess the relationship between NE and MEL concentrations. A total of 36 healthy volunteers were enroled, yielding 417 MEL-NE samples. Intravenous NE administration was significantly associated with higher plasma MEL concentration, corresponding to an estimated 26% increase in MEL per 1 standard-deviation increase in NE concentration (Estimate = 0.230, p < 0.001). MEL concentrations were approximately 43% higher in the awake phase compared to GA (Estimate = 0.356, p < 0.001). GA did not significantly modify the NE-MEL association (Estimate = -0.02877, p = 0.528). Substantial positive correlation was observed between baseline MEL concentrations and the magnitude of the response to NE administration (r = 0.74). In conclusion, intravenous NE increases plasma MEL concentrations in both awake and anaesthetised individuals. Substantial interindividual variation in MEL response suggests underlying physiological differences. Future studies should explore the long-term effects of NE administration on MEL concentrations. Trial Registration: The study is registered in the Dutch Trial Register (NL9312).

## Proposed structured change

```json
{
  "effect": "Intravenous norepinephrine administration was associated with higher plasma melatonin concentrations, with an estimated 26% increase per 1 standard-deviation increase in norepinephrine concentration.",
  "population": "Healthy adult volunteers, awake and under general anaesthesia"
}
```

## Model rationale

The abstract reports a statistically significant positive association between intravenous norepinephrine administration and plasma melatonin concentration.

## Verbatim evidence from the abstract

> Intravenous NE administration was significantly associated with higher plasma MEL concentration, corresponding to an estimated 26% increase in MEL per 1 standard-deviation increase in NE concentration

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
