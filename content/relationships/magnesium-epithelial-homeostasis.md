---
id: magnesium-epithelial-homeostasis
label: Magnesium epithelial homeostasis network
relation: magnesium-homeostasis
members:
  - substance:magnesium
  - tag:magnesium-homeostasis
  - tag:trpm6
  - tag:slc41a1
  - tag:cnnm2
memberRoles:
  substance:magnesium: transported ion
  tag:magnesium-homeostasis: physiological process
  tag:trpm6: apical epithelial uptake component
  tag:slc41a1: experimental cellular Mg efflux component
  tag:cnnm2: renal basolateral handling component
sourceUrl: https://pubmed.ncbi.nlm.nih.gov/12032568/
sourceUrls:
  - https://pubmed.ncbi.nlm.nih.gov/12032568/
  - https://pubmed.ncbi.nlm.nih.gov/22031603/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC3059432/
directedSteps:
  - from: substance:magnesium
    to: tag:trpm6
    label: Mg2+ is the transported ion in TRPM6-dependent epithelial uptake
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/12032568/
  - from: tag:trpm6
    to: tag:magnesium-homeostasis
    label: Human TRPM6 mutations disrupt intestinal and renal magnesium homeostasis
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/12032568/
  - from: tag:slc41a1
    to: tag:magnesium-homeostasis
    label: SLC41A1 mediates Na+-dependent Mg2+ extrusion in human-cell experiments
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/22031603/
  - from: tag:cnnm2
    to: tag:magnesium-homeostasis
    label: Human CNNM2 mutations cause renal magnesium wasting
    sourceUrls:
      - https://pmc.ncbi.nlm.nih.gov/articles/PMC3059432/
x-shape:
  - id
  - label
  - relation
  - members
  - memberRoles
  - sourceUrl
  - sourceUrls
  - directedSteps
  - description
x-order: 9007199254740991
---

## Description

Human genetic and cell-transport evidence links TRPM6, SLC41A1, and CNNM2 to distinct parts of magnesium handling; the arrows represent the specific supported relationships and do not imply that all proteins form one physical complex.

