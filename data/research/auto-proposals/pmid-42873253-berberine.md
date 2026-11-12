# Automated editorial proposal

- Proposal ID: proposal:085bb471818d6695c03b2001690efd6e
- Substance: berberine
- Suggestion type: new-reference
- Source: [A stem-engineering strategy for thermally stable aptamer sensors: application to smartphone-based visual detection of berberine.](https://pubmed.ncbi.nlm.nih.gov/42873253/)
- PMID: 42873253
- DOI: 10.1039/d6an01077f
- Published: 2026-10-27
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> The prolonged or excessive use of berberine (Ber) can induce drug resistance and adverse reactions, necessitating the development of simple, sensitive, and rapid on-site detection methods. In contrast to conventional sequence truncation, we rationally extended the stem region of the aptamer to elevate its melting temperature, complemented by loop-region base mutagenesis. The obtained aptamer (BBRE7M9) exhibits substantially enhanced thermal stability, which is 6 °C and 10 °C higher than those of BBR38S-3A10C and BBR4S3, respectively. Its dissociation equilibrium constant remained stable at 1.42-1.86 μM across 22-40 °C. Circular dichroism, molecular docking, site-directed mutagenesis, and displacement assays collectively indicated that Ber binds within a hydrophobic minor groove constituted by C8, A9, T10, T17, and T18. This confined microenvironment restricts intramolecular motions and suppresses non-radiative transitions, triggering a fluorescence turn-on response. Upon integration with a smartphone-based portable dark-box platform, the sensor exhibited a linear response over 0-800 nM with a detection limit of 53.9 nM and satisfactory selectivity. This stem-elongation approach demonstrates a practical route to enhancing aptamer thermal stability, and the mechanistic elucidation of the key binding sites provides a structural basis for designing berberine-aptamer-based turn-on fluorescent probes. More broadly, this strategy may also serve as a reference for optimizing other aptamer sensors that suffer from similar temperature-induced signal attenuation.

## Proposed structured change

```json
{
  "title": "A stem-engineering strategy for thermally stable aptamer sensors: application to smartphone-based visual detection of berberine",
  "finding": "The BBRE7M9 aptamer showed enhanced thermal stability, a dissociation equilibrium constant of 1.42-1.86 μM across 22-40 °C, and enabled smartphone-based fluorescence detection of berberine over 0-800 nM with a detection limit of 53.9 nM.",
  "context": "Analytical detection method; not evidence of a therapeutic or adverse effect of berberine."
}
```

## Model rationale

This abstract reports a berberine-specific aptamer sensor and quantitative analytical performance that may be relevant as a reference for berberine detection methods.

## Verbatim evidence from the abstract

> The obtained aptamer (BBRE7M9) exhibits substantially enhanced thermal stability, which is 6 °C and 10 °C higher than those of BBR38S-3A10C and BBR4S3, respectively.
> Its dissociation equilibrium constant remained stable at 1.42-1.86 μM across 22-40 °C.
> Upon integration with a smartphone-based portable dark-box platform, the sensor exhibited a linear response over 0-800 nM with a detection limit of 53.9 nM and satisfactory selectivity.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
