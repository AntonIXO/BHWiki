# Automated editorial proposal

- Proposal ID: proposal:f504b5a010fcd918808464463f0cdc7a
- Substance: quercetin
- Suggestion type: new-claim
- Source: [Exploring <em>Psidium guajava </em>L. Leaf Fractions as a Sustainable Source of Antiviral Compounds for the Inhibition of SARS-CoV-2 Spike–ACE2 Interaction (Wuhan and Omicron) and 3CLpro Activity](https://doi.org/10.20944/preprints202610.2141.v1)
- PMID: not indexed
- DOI: 10.20944/preprints202610.2141.v1
- Published: 2026-10-22
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> The leaves of Psidium guajava L. (guava) are an underutilized resource containing diverse bioactive metabolites. The present study evaluated the inhibitory potential of P. guajava leaf fractions against two SARS-CoV-2 molecular targets: the Spike RBD–ACE2 interaction of the Wuhan and Omicron BA.1 variants, and 3CLpro enzymatic activity. A methanolic extract was fractionated by vacuum liquid chromatography, and fraction F14 was then separated into subfractions F14A–F14D through the use of Sephadex LH-20. The activity was evaluated using colorimetric Spike RBD–ACE2 binding assays and a fluorometric 3CLpro assay. F14 and its subfractions inhibited the Spike RBD–ACE2 interaction of the Wuhan variant, whereas against Omicron BA.1, all fractions showed IC₅₀ values &lt;1.25 mg mL−1. F14, F14C, and F14D also inhibited 3CLpro, with IC₅₀ values &lt;1.25 mg mL−1. F14D demonstrated the most consistent inhibitory profile across all the three targets and was selected for further characterization by LC–HRMS. The three major constituents were tentatively assigned as a myricetin hexoside, a quercetin hexoside, and a quercetin pentoside. Overall, the results of this study suggest that F14D contains bioactive constituents with potential inhibitory activity against SARS-CoV-2 molecular targets, although further studies are required to determine their antiviral activity.

## Proposed structured change

```json
{
  "claim": "Quercetin hexoside and quercetin pentoside were tentatively assigned among the three major constituents of guava leaf fraction F14D, which showed inhibitory activity against SARS-CoV-2 Spike RBD–ACE2 interaction and 3CLpro in biochemical assays; activity was not attributed to isolated quercetin compounds.",
  "scope": "Psidium guajava leaf fraction F14D; tentative constituent identification"
}
```

## Model rationale

The abstract reports tentative identification of two quercetin glycosides in F14D and inhibitory activity for the fraction, but does not establish that either quercetin glycoside independently caused the observed effects or demonstrate antiviral activity in cells or organisms.

## Verbatim evidence from the abstract

> The three major constituents were tentatively assigned as a myricetin hexoside, a quercetin hexoside, and a quercetin pentoside.
> F14D demonstrated the most consistent inhibitory profile across all the three targets and was selected for further characterization by LC–HRMS.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
