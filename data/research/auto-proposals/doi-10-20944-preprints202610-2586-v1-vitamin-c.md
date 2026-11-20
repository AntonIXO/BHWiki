# Automated editorial proposal

- Proposal ID: proposal:ebe68f310955deb69d36e27083ba653e
- Substance: vitamin-c
- Suggestion type: new-effect
- Source: [Endogenous Ascorbate Synthesis Confounds Oral Bioavailability Testing of Liposomal Vitamin C in Sprague Dawley Rats: Evidence from a Four-Arm Pharmacokinetic Study Including an Untreated Control](https://doi.org/10.20944/preprints202610.2586.v1)
- PMID: not indexed
- DOI: 10.20944/preprints202610.2586.v1
- Published: 2026-10-27
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background: </h4> Liposomal vitamin C is marketed almost entirely on enhanced oral bioavailability, and preclinical rodent pharmacokinetic studies are routinely commissioned to support that positioning. Rats, unlike humans, retain a functional L-gulonolactone oxidase and synthesise ascorbate endogenously. Whether a rat can detect a difference in oral vitamin C delivery at all is seldom tested, because untreated control arms are seldom included. <h4>Methods:</h4> A spray-dried liposomal vitamin C powder was characterised by dynamic light scattering and administered to young adult male Sprague Dawley rats as a single oral dose in a four-arm design: reverse osmosis water, liposomal vitamin C at 1000 and at 2000 mg per kg body weight, and commercially available ascorbic acid at 2000 mg per kg as an active comparator. Plasma was sampled at seven time points to 24 hours and vitamin C quantified by liquid chromatography coupled to mass spectrometry. Non-compartmental pharmacokinetic parameters were derived for three animals per arm. Group means, dispersion and Welch two-tailed comparisons were recomputed by the present authors from the individual parameter values. <h4>Results:</h4> At the matched 2000 mg per kg dose, the liposomal arm showed 3.08 times the mean maximum plasma concentration (0.40 against 0.13 micrograms per millilitre) and 2.14 times the mean area under the curve (3.92 against 1.83 hour-micrograms per millilitre) of the ascorbic acid comparator. Neither difference reached statistical significance at three animals per arm (p = 0.19 and p = 0.18). The untreated control arm recorded a mean area under the curve of 1.65, statistically indistinguishable from the ascorbic acid arm (p = 0.90), and the liposomal arm at 1000 mg per kg recorded 0.69, below the untreated animals. Maximum concentration occurred at the terminal 24-hour sampling point in most animals, and absolute plasma concentrations across all arms, controls included, were one to two orders of magnitude below the accepted physiological range for rat plasma ascorbate. Dynamic light scattering returned a mean vesicle diameter of 392.7 nanometres and a zeta potential of minus 1.4 millivolts. <h4>Conclusions:</h4> A 2000 mg per kg oral dose of unencapsulated ascorbic acid produced plasma exposure indistinguishable from administering nothing. The Sprague Dawley rat therefore cannot resolve oral vitamin C bioavailability at these doses, because endogenous synthesis dominates the measured pool. The directionally consistent advantage of the liposomal formulation is compatible with enhanced delivery but is not established by these data. We argue that rodent pharmacokinetic studies of vitamin C formulations are uninterpretable without an untreated control arm, and that species incapable of ascorbate synthesis, or human crossover designs, are the appropriate test systems.

## Proposed structured change

```json
{
  "finding": "In young adult male Sprague Dawley rats receiving a matched 2000 mg/kg oral dose, liposomal vitamin C produced higher mean maximum plasma concentration and area under the curve than ascorbic acid, but neither difference was statistically significant with three animals per arm.",
  "population": "young adult male Sprague Dawley rats",
  "intervention": "liposomal vitamin C",
  "comparator": "commercially available ascorbic acid",
  "dose": "2000 mg per kg"
}
```

## Model rationale

The study observed a numerically higher pharmacokinetic exposure for liposomal vitamin C, but the abstract explicitly states that the differences did not reach statistical significance.

## Verbatim evidence from the abstract

> At the matched 2000 mg per kg dose, the liposomal arm showed 3.08 times the mean maximum plasma concentration (0.40 against 0.13 micrograms per millilitre) and 2.14 times the mean area under the curve (3.92 against 1.83 hour-micrograms per millilitre) of the ascorbic acid comparator. Neither difference reached statistical significance at three animals per arm (p = 0.19 and p = 0.18).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
