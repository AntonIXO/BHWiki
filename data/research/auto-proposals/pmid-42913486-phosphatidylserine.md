# Automated editorial proposal

- Proposal ID: proposal:6e68cd9c7aed7203d3d1b2ab5e7d9102
- Substance: phosphatidylserine
- Suggestion type: new-claim
- Source: [Immunologic and Plasma-Dependent Mechanisms of Chronic Hemolysis and Hyperhemolysis in Sickle Cell Disease.](https://pubmed.ncbi.nlm.nih.gov/42913486/)
- PMID: 42913486
- DOI: 10.1182/blood.2026033478
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Sickle cell disease (SCD) is characterized by chronic hemolytic anemia and a propensity to acute exacerbations such as post-transfusion hyperhemolysis syndrome (HHS). While erythrocyte injury is secondary to hemoglobin S polymerization, the underlying pathophysiologic driver, the mechanism by which sickle erythrocytes are then removed from circulation is largely regulated by the immune system. Multiple pathways potentially play a role, driven by pathological changes within both the cellular and humoral immune system. The review examines what is known regarding changes to the outer membrane of the sickle erythrocyte (including the expression of phosphatidylserine (PS), mannose, CD47 and CD95/Fas), the role of plasma-derived opsonins (including Gas6, MFG-E8, Protein S, MBL, TSP1, IgG and C3b) and the macrophage receptors that recognize and bind these molecules (including TREM2, TIM4, MerTK, integrins αvβ3/5, CD206, CD209/DC-SIGN, SIRPα, FasL, FcR, and CR). Drawing upon the results of investigations by our group and others, we conclude with a proposed model for clearance of erythrocytes in SCD, in which chronic hemolysis predominantly occurs through extravascular erythrophagocytosis, whereas acute hemolytic events involve a shift towards intravascular hemolysis via complement assembly into the membrane attack complex, Fas-mediated erythronecroptosis, and heme-mediated ferroptosis. The process by which transfusion may accelerate these pathways and induce HHS is also considered.

## Proposed structured change

```json
{
  "claim": "Phosphatidylserine is expressed on the outer membrane of sickle erythrocytes and is considered in the immune-mediated mechanisms of their clearance.",
  "context": "sickle cell disease"
}
```

## Model rationale

The review identifies phosphatidylserine expression as a pathological change in the outer membrane of sickle erythrocytes within its discussion of immune-regulated erythrocyte removal.

## Verbatim evidence from the abstract

> The review examines what is known regarding changes to the outer membrane of the sickle erythrocyte (including the expression of phosphatidylserine (PS), mannose, CD47 and CD95/Fas)

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
