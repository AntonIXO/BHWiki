# Automated editorial proposal

- Proposal ID: proposal:666fab678249a94a6d0008a774b74cd0
- Substance: alanine
- Suggestion type: ignore
- Source: [Refining Genetic Instruments for Dietary Intake Mendelian Randomization Using Phenome-Wide Association Studies.](https://pubmed.ncbi.nlm.nih.gov/42820398/)
- PMID: 42820398
- DOI: 10.1002/gepi.70059
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Most Mendelian randomization (MR) of dietary intake use the full set of genome-wide significant (GWS) variants in the instrumental variable (IV), likely biasing causal estimates due to pleiotropy. To characterize the common methods to handle pleiotropy in dietary intake MR, we conducted a scoping review of the literature on dietary intake MR studies. We extracted information on IV construction, assessment of pleiotropy, and sensitivity analyzes revealing that only 20% of studies used an IV with functional plausibility. In the absence of functionally-informed IVs, we tested if two-sample MR using GWS variants filtered for pleiotropic associations through phenome-wide association studies (PheWAS) could identify diet-health relationships supported by existing nutrition science, focusing on oily fish and alcohol intake, the latter of which has a functionally-informed IV for comparison (rs1229984 in the ADH1B gene). To further explore this question, we performed multivariable MR and employed MR-CAUSE. The numerous models consistently supported that oily fish reduced triglycerides. In contrast, GWS and PheWAS-filtered IVs suggested that alcohol decreased alanine aminotransferase levels, whereas the functional IV (rs1229984) found the opposite expected relationship. Isolating the direct effect of dietary intake from GWS IV remains challenging. Future work should focus on identifying functional variants impacting dietary behavior.

## Proposed structured change

```json
{}
```

## Model rationale

The matched term appears only as part of the outcome biomarker name alanine aminotransferase; the study examined oily fish and alcohol intake, not alanine intake or supplementation, so it does not support a substance-specific entry for alanine.

## Verbatim evidence from the abstract

> focusing on oily fish and alcohol intake
> alcohol decreased alanine aminotransferase levels

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
