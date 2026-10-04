---
id: gaba-biosynthesis
label: GABA biosynthesis from glutamate
relation: biosynthesis
members:
  - tag:glutamate
  - tag:glutamate-decarboxylase
  - substance:gaba
memberRoles:
  tag:glutamate: precursor
  tag:glutamate-decarboxylase: catalyst
  substance:gaba: product
sourceUrl: https://www.uniprot.org/uniprotkb/Q99259/entry
sourceUrls:
  - https://www.uniprot.org/uniprotkb/Q99259/entry
directedSteps:
  - from: tag:glutamate
    to: substance:gaba
    label: PLP-dependent decarboxylation catalyzed by glutamate decarboxylase
    sourceUrls:
      - https://www.uniprot.org/uniprotkb/Q99259/entry
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

Human glutamate decarboxylase converts L-glutamate to GABA through a pyridoxal-phosphate-dependent decarboxylation reaction.

