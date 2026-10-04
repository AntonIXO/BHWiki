---
id: tadalafil-pde5-signaling
label: Tadalafil PDE5 pathway
relation: inhibits
members:
  - substance:tadalafil
  - tag:pde5
  - tag:cgmp-signaling
  - tag:smooth-muscle-relaxation
memberRoles:
  substance:tadalafil: inhibitor
  tag:pde5: enzyme target
  tag:cgmp-signaling: preserved signaling
  tag:smooth-muscle-relaxation: downstream tissue response
sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
directedSteps:
  - from: substance:tadalafil
    to: tag:pde5
    label: inhibits
    sourceUrls:
      - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
  - from: tag:pde5
    to: tag:cgmp-signaling
    label: inhibition reduces cyclic-GMP degradation
    sourceUrls:
      - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
  - from: tag:cgmp-signaling
    to: tag:smooth-muscle-relaxation
    label: supports relaxation
    sourceUrls:
      - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
x-shape:
  - id
  - label
  - relation
  - members
  - memberRoles
  - description
  - sourceUrl
  - directedSteps
x-order: 62
---

## Description

Label-described pulmonary vascular pathway; it does not demonstrate athletic enhancement or establish the BPH symptom mechanism.

