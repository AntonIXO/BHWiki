# Automated editorial proposal

- Proposal ID: proposal:a04118e8a76b907fd53c5b622ffa6a0d
- Substance: phospholipids
- Suggestion type: new-claim
- Source: [Lipid Nanoparticle-Mediated Delivery of CRISPR-Cas9 Components for Genome Editing.](https://pubmed.ncbi.nlm.nih.gov/42771313/)
- PMID: 42771313
- DOI: 10.1007/978-1-0716-5547-4_10
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Lipid nanoparticles (LNPs) are a clinically validated nonviral platform for the delivery of CRISPR-associated components. Composed of ionizable lipids, phospholipids, cholesterol, and PEG-lipids, LNPs enable the efficient encapsulation, protection, and cytosolic delivery of therapeutic cargo such as DNA, RNA, or proteins. The clinical relevance of LNPs has already been shown by multiple FDA-approved therapies, including siRNA-based treatments and mRNA vaccines. Compared with viral vectors, LNPs offer several advantages, including reduced immunogenicity, absence of genomic integration, scalable manufacturing, and flexibility in cargo size, while supporting transient expression, which is desirable for genome editing applications. However, challenges remain, including limited tissue specificity and inefficient endosomal escape. Recent advances in lipid chemistry optimization and surface modification have improved delivery performance. Among available formulation techniques, microfluidic mixing has emerged as a preferred method due to its reproducibility, scalability, and precise control over particle properties. This protocol describes a standardized microfluidic workflow for reproducible LNP formulation, providing practical guidance on lipid preparation, nanoparticle assembly, and quality control.

## Proposed structured change

```json
{
  "claim": "Phospholipids are a component of lipid nanoparticles used to encapsulate, protect, and deliver therapeutic cargo, including CRISPR-associated components."
}
```

## Model rationale

The abstract identifies phospholipids as one of the lipid nanoparticle components and associates the resulting LNP formulation with encapsulation, protection, and cytosolic delivery. It does not isolate the specific contribution of phospholipids from the other components.

## Verbatim evidence from the abstract

> Composed of ionizable lipids, phospholipids, cholesterol, and PEG-lipids, LNPs enable the efficient encapsulation, protection, and cytosolic delivery of therapeutic cargo such as DNA, RNA, or proteins.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
