# Automated editorial proposal

- Proposal ID: proposal:88c3f1d27fdbefc397ac621976aca595
- Substance: magnesium
- Suggestion type: new-effect
- Source: [Forgotten electrolytes: magnesium and calcium flux during dialysis.](https://pubmed.ncbi.nlm.nih.gov/42973431/)
- PMID: 42973431
- DOI: 10.1097/mnh.0000000000001230
- Published: 2026-11-03
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Purpose of review</h4>Calcium and magnesium remain incompletely individualized in contemporary dialysis prescriptions despite growing evidence linking their concentrations to cardiovascular outcomes, vascular calcification, mineral metabolism, and mortality. The 2025 Kidney Disease: Improving Global Outcomes (KDIGO) Controversies Conference report on chronic kidney disease (CKD)-mineral and bone disorder (MBD) and recent kinetic studies of intradialytic ion fluxes make a focused review of these "forgotten" divalent cations timely.<h4>Recent findings</h4>Intradialytic calcium mass transfer is influenced by patient- and prescription-level factors, and total serum calcium incompletely reflects biologically relevant calcium flux; ionized calcium may decline during dialysis as hemoconcentration increases albumin concentration and alkalosis increases albumin-bound calcium. Small randomized trials show that raising dialysate magnesium improves serum resistance to calcification, but whether higher dialysate magnesium improves clinical outcomes remains unknown. The 2025 KDIGO report retains the 1.25-1.50 mmol/l dialysate calcium range and identifies individualized calcium mass-transfer assessment as a research priority. Dial-Mag, a large pragmatic trial comparing higher versus conventional dialysate magnesium concentrations, is ongoing.<h4>Summary</h4>Recent evidence challenges the assumption that standardized dialysate calcium and magnesium prescriptions are optimal for all patients. Future studies should define patient-specific targets, validate practical methods to assess peridialytic calcium and magnesium levels and intradialytic flux, and determine whether individualized dialysate prescriptions improve clinical outcomes.

## Proposed structured change

```json
{
  "effect": "Higher dialysate magnesium improves serum resistance to calcification in small randomized trials."
}
```

## Model rationale

The abstract reports a beneficial biomarker effect of raising dialysate magnesium, without establishing clinical outcome benefits.

## Verbatim evidence from the abstract

> Small randomized trials show that raising dialysate magnesium improves serum resistance to calcification

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
