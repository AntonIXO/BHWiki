# Automated editorial proposal

- Proposal ID: proposal:a7a288996ad503bef8eb462932fe0245
- Substance: liver
- Suggestion type: new-reference
- Source: [Liver biopsy confirms precise and efficient correction of SERPINA1 after in vivo Base Editing in a Patient with Alpha-1 Antitrypsin Deficiency.](https://pubmed.ncbi.nlm.nih.gov/42971508/)
- PMID: 42971508
- DOI: 10.1016/j.jhep.2026.09.028
- Published: 2027-10-20
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Alpha-1 antitrypsin deficiency (AATD) caused by the PI*ZZ genotype (Glu342Lys) is characterized by hepatic accumulation of misfolded AAT-Z protein and reduced circulating AAT levels, leading to progressive liver disease and pulmonary emphysema. Gene correction therapy represents a potentially curative approach by directly correcting the underlying genetic defect. We report the first clinical case with direct assessment of hepatic gene correction by liver biopsy following in vivo base editing in a patient with AATD.<h4>Methods/case presentation</h4>We report the case of a 66-year-old male patient with PI*ZZ AATD who underwent gene correction therapy within the YOLT-202 phase I/Ia clinical trial (clinical trial.gov ID NCT07193615). Ten weeks after treatment a liver biopsy was performed to assess hepatic histology in the context of pre-existing F2 fibrosis identified by elastography before treatment. Liver tissue was analyzed for correction of the Pi*ZZ variant using Sanger and Illumina sequencing, including assessment of bystander and off-target editing. Serum levels and biological activity of AAT were assessed longitudinally using an elastase inhibition assay.<h4>Results</h4>Liver biopsy showed no evidence of hepatic inflammation and demonstrated correction of the PI*ZZ variant in 54% of alleles by Sanger and 57% by Illumina sequencing without detectable off-target signals. Following a transient post-treatment increase in transaminases, liver enzymes returned to baseline. Monthly measurements demonstrated sustained circulating AAT levels with preserved biological activity, as assessed by elastase inhibition, throughout follow-up.<h4>Conclusions</h4>In vivo base editing achieved substantial and precise hepatic correction of the pathogenic SERPINA1 PI*ZZ variant, without concerning histological findings or detectable bystander or off-target editing. Sustained biologically active AAT levels support feasibility and potential of this approach for the treatment of AATD.

## Proposed structured change

```json
{
  "title": "Liver biopsy confirms precise and efficient correction of SERPINA1 after in vivo Base Editing in a Patient with Alpha-1 Antitrypsin Deficiency",
  "studyType": "phase I/Ia clinical trial case report",
  "trialId": "NCT07193615",
  "patient": "66-year-old male with PI*ZZ AATD"
}
```

## Model rationale

Provides a clinical case report with direct liver-biopsy assessment after in vivo base editing for AATD.

## Verbatim evidence from the abstract

> We report the case of a 66-year-old male patient with PI*ZZ AATD who underwent gene correction therapy within the YOLT-202 phase I/Ia clinical trial (clinical trial.gov ID NCT07193615).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
