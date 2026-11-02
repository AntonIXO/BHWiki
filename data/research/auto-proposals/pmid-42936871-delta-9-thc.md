# Automated editorial proposal

- Proposal ID: proposal:569527d1bf8e25336600f1a5c45f0beb
- Substance: delta-9-thc
- Suggestion type: new-reference
- Source: [Rapid identification of marijuana using copper-phosphine ion complexation and commercialized paper spray ionization-mass spectrometry.](https://pubmed.ncbi.nlm.nih.gov/42936871/)
- PMID: 42936871
- DOI: 10.1039/d6ay01885h
- Published: 2026-10-27
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Regulatory changes enacted through the 2018 Agriculture Improvement Act established the distinction between legal hemp and illicit marijuana based on a 0.3% Δ<sup>9</sup>-tetrahydrocannabinol (Δ<sup>9</sup>-THC) dry-weight threshold, reshaping analytical requirements for forensic laboratories. The influx of cannabis submissions and the quantitative requirements for marijuana identification have contributed to controlled substance backlogs and operational strain, prompting the adoption of more conservative semi-quantitative 1% decision-point methodologies. Differentiating hemp and marijuana is further complicated by the isomeric nature of Δ<sup>9</sup>-THC and cannabidiol (CBD), often requiring time-intensive chromatographic methods, including gas chromatography and liquid chromatography. This study provides a rapid, direct mass spectrometry approach for marijuana identification using copper-phosphine ion complexation and commercialized paper spray ionization-mass spectrometry (PSI-MS). Thirteen cannabinoids and a deuterated internal standard, Δ<sup>9</sup>-THC-<i>d</i><sub><i>9</i></sub>, were characterized in the presence of [Cu(PPh<sub>3</sub>)<sub>2</sub>(ACN)<sub>2</sub>]BF<sub>4</sub>, generating characteristic copper-bound, oxidized cannabinoid species. A [Cu+2PPh<sub>3</sub>+Δ<sup>9</sup>-THC+O-2H]<sup>+</sup> complex was observed at <i>m</i>/<i>z</i> 915, whereas CBD did not form an observable complex, thereby eliminating CBD interference for Δ<sup>9</sup>-THC quantitation. A semi-quantitative 1% decision-point assay was established by fortifying cannabis samples with Δ<sup>9</sup>-THC-<i>d</i><sub><i>9</i></sub> at a 1% administrative threshold and determining whether the post-decarboxylation Δ<sup>9</sup>-THC content exceeds the 1% administrative threshold. Validation studies established selectivity, accuracy, precision, expanded uncertainty, carryover, and limit of detection. The validated method was applied to methanolic extracts of 36 decarboxylated authentic cannabis samples, resulting in a 94% corrected identification rate, with two misidentifications due to high cannabinol (CBN) concentrations. The developed method enables marijuana identification in approximately 4 minutes, enhancing laboratory throughput and potentially minimizing casework backlogs.

## Proposed structured change

```json
{
  "title": "Rapid identification of marijuana using copper-phosphine ion complexation and commercialized paper spray ionization-mass spectrometry",
  "studyFocus": "Rapid semi-quantitative identification of Δ9-THC in cannabis using copper-phosphine ion complexation and paper spray ionization-mass spectrometry",
  "keyFindings": [
    "A [Cu+2PPh3+Δ9-THC+O-2H]+ complex was observed at m/z 915.",
    "CBD did not form an observable complex, eliminating CBD interference for Δ9-THC quantitation.",
    "The validated method was applied to 36 decarboxylated authentic cannabis samples and produced a 94% corrected identification rate.",
    "The method enabled marijuana identification in approximately 4 minutes."
  ]
}
```

## Model rationale

The abstract reports a validated analytical method directly relevant to Δ9-THC identification and quantitation, including performance on authentic cannabis samples.

## Verbatim evidence from the abstract

> This study provides a rapid, direct mass spectrometry approach for marijuana identification using copper-phosphine ion complexation and commercialized paper spray ionization-mass spectrometry (PSI-MS).
> The validated method was applied to methanolic extracts of 36 decarboxylated authentic cannabis samples, resulting in a 94% corrected identification rate, with two misidentifications due to high cannabinol (CBN) concentrations.
> The developed method enables marijuana identification in approximately 4 minutes, enhancing laboratory throughput and potentially minimizing casework backlogs.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
