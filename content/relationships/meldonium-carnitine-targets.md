---
id: meldonium-carnitine-targets
label: Meldonium targets in carnitine metabolism
relation: carnitine synthesis and transport
members:
  - substance:meldonium
  - tag:bbox1
  - tag:octn2
memberRoles:
  substance:meldonium: Drug
  tag:bbox1: Biosynthesis enzyme
  tag:octn2: Transport protein
sourceUrl: https://pubmed.ncbi.nlm.nih.gov/24571165/
sourceUrls:
  - https://pubmed.ncbi.nlm.nih.gov/24571165/
  - https://pubmed.ncbi.nlm.nih.gov/18981167/
  - https://pubmed.ncbi.nlm.nih.gov/27983775/
directedSteps:
  - from: substance:meldonium
    to: tag:bbox1
    label: Inhibits in enzyme assays
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/24571165/
  - from: substance:meldonium
    to: tag:octn2
    label: Competes for transport
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/18981167/
      - https://pubmed.ncbi.nlm.nih.gov/27983775/
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

Biochemical and transport assays support two distinct interactions with the machinery that regulates carnitine availability.
