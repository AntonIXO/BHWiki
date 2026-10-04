---
id: gaba-receptor-interactions
label: GABA receptor interactions
relation: agonist-at
members:
  - substance:gaba
  - tag:gaba-a-receptor
  - tag:gaba-b-receptor
memberRoles:
  substance:gaba: endogenous ligand
  tag:gaba-a-receptor: ionotropic target family
  tag:gaba-b-receptor: metabotropic target
sourceUrl: https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=72
sourceUrls:
  - https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=72
  - https://www.guidetopharmacology.org/GRAC/PharmacologySearchForward?accTypes=hgncId&numInts=all&order=rank&searchAcc=4507&species=Human&submitAcc=Search+pharmacology+data
directedSteps:
  - from: substance:gaba
    to: tag:gaba-a-receptor
    label: Endogenous agonist
    sourceUrls:
      - https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=72
  - from: substance:gaba
    to: tag:gaba-b-receptor
    label: Agonist
    sourceUrls:
      - https://www.guidetopharmacology.org/GRAC/PharmacologySearchForward?accTypes=hgncId&numInts=all&order=rank&searchAcc=4507&species=Human&submitAcc=Search+pharmacology+data
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

GABA activates both ionotropic GABA-A receptor channels and metabotropic GABA-B receptors; this receptor biology does not establish central target engagement after oral supplementation.

