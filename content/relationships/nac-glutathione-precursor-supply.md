---
id: nac-glutathione-precursor-supply
label: NAC and glutathione precursor supply
relation: precursor-support
members:
  - substance:n-acetylcysteine-019fe218
  - tag:glutathione-precursor
memberRoles:
  substance:n-acetylcysteine-019fe218: cysteine-equivalent source
  tag:glutathione-precursor: biochemical precursor mechanism
sourceUrl: https://ods.od.nih.gov/factsheets/ImmuneFunction-HealthProfessional/
directedSteps:
  - from: substance:n-acetylcysteine-019fe218
    to: tag:glutathione-precursor
    label: provides cysteine equivalents
    sourceUrls:
      - https://ods.od.nih.gov/factsheets/ImmuneFunction-HealthProfessional/
x-shape:
  - id
  - label
  - relation
  - members
  - memberRoles
  - description
  - sourceUrl
  - directedSteps
x-order: 9007199254740991
---

## Description

NAC provides cysteine equivalents that can support glutathione synthesis. This biochemical connection does not imply a clinical benefit from every exposure.
