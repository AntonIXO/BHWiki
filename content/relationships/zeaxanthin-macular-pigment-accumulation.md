---
id: zeaxanthin-macular-pigment-accumulation
label: Zeaxanthin contributes to human macular pigment accumulation
relation: contributes-to
members:
  - substance:zeaxanthin
  - tag:macular-pigment-accumulation
  - tag:macular-pigment-optical-density
memberRoles:
  substance:zeaxanthin: oral xanthophyll exposure
  tag:macular-pigment-accumulation: retinal accumulation mechanism
  tag:macular-pigment-optical-density: measured retinal-pigment outcome
sourceUrl: https://pubmed.ncbi.nlm.nih.gov/17084803/
sourceUrls:
  - https://pubmed.ncbi.nlm.nih.gov/17084803/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC5503818/
directedSteps:
  - from: substance:zeaxanthin
    to: tag:macular-pigment-accumulation
    label: oral supplementation can increase zeaxanthin-associated pigment in human retinal macular regions
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/17084803/
      - https://pmc.ncbi.nlm.nih.gov/articles/PMC5503818/
  - from: tag:macular-pigment-accumulation
    to: tag:macular-pigment-optical-density
    label: retinal pigment accumulation can alter measured macular pigment optical density, subject to spatial reference and measurement method
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/17084803/
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

Human supplementation studies support a directed link from oral zeaxanthin exposure to retinal macular-pigment accumulation and from that accumulation to MPOD measurements. LUXEA also demonstrates an important measurement caveat: zeaxanthin can accumulate at both the foveal target and parafoveal reference location, so a differential HFP value can underestimate accumulation unless the spatial response is considered.

