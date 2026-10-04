---
id: gaba-transport-metabolism
label: GABA transport and metabolism
relation: transport-and-metabolism
members:
  - substance:gaba
  - tag:gaba-transporter-1
  - tag:gaba-transaminase
  - tag:succinate-semialdehyde-dehydrogenase
memberRoles:
  substance:gaba: substrate
  tag:gaba-transporter-1: uptake transporter
  tag:gaba-transaminase: first catabolic enzyme
  tag:succinate-semialdehyde-dehydrogenase: downstream catabolic enzyme
sourceUrl: https://www.uniprot.org/uniprotkb/P30531/entry
sourceUrls:
  - https://www.uniprot.org/uniprotkb/P30531/entry
  - https://www.uniprot.org/uniprotkb/H3BRN4/entry
  - https://www.uniprot.org/uniprotkb/P51649/entry
directedSteps:
  - from: substance:gaba
    to: tag:gaba-transporter-1
    label: Substrate for sodium- and chloride-dependent uptake
    sourceUrls:
      - https://www.uniprot.org/uniprotkb/P30531/entry
  - from: substance:gaba
    to: tag:gaba-transaminase
    label: Transaminated to succinate semialdehyde
    sourceUrls:
      - https://www.uniprot.org/uniprotkb/H3BRN4/entry
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
---

## Description

GAT1 transports extracellular GABA into cells. GABA transaminase then forms succinate semialdehyde, and ALDH5A1 oxidizes that intermediate to succinate in the GABA shunt.
