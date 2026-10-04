---
id: alpha-gpc-choline-acetylcholine
label: Alpha-GPC choline precursor pathway
relation: precursor-pathway
members:
  - substance:alpha-gpc
  - tag:choline-precursor
  - tag:acetylcholine
memberRoles:
  substance:alpha-gpc: choline-source
  tag:choline-precursor: precursor-mechanism
  tag:acetylcholine: downstream-neurotransmitter
sourceUrl: https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2026.10008
sourceUrls:
  - https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2026.10008
directedSteps:
  - from: substance:alpha-gpc
    to: tag:choline-precursor
    label: Orally absorbed L-alpha-GPC serves as a source of choline.
    sourceUrls:
      - https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2026.10008
  - from: tag:choline-precursor
    to: tag:acetylcholine
    label: Choline is a precursor used in acetylcholine synthesis.
    sourceUrls:
      - https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2026.10008
x-shape:
  - id
  - label
  - relation
  - members
  - memberRoles
  - description
  - sourceUrl
  - sourceUrls
  - directedSteps
x-order: 9007199254740991
---

## Description

Alpha-GPC has a supported precursor-level relationship: oral exposure supplies choline, and choline participates in acetylcholine synthesis. This graph does not assert that a particular Alpha-GPC dose raises brain acetylcholine in humans or that the pathway causes a clinical cognitive benefit.

