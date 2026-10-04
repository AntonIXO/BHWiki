---
id: phosphatidylcholine-tmao-pathway
label: "Phosphatidylcholine to microbiota-dependent TMAO"
relation: produces-metabolite-via-host-microbiome
members:
  - substance:phosphatidylcholine
  - tag:plasma-tmao
memberRoles:
  substance:phosphatidylcholine: dietary-precursor
  tag:plasma-tmao: measured-metabolite
sourceUrl: https://pubmed.ncbi.nlm.nih.gov/23614584/
sourceUrls:
  - https://pubmed.ncbi.nlm.nih.gov/23614584/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC3701945/
directedSteps:
  - from: substance:phosphatidylcholine
    to: tag:plasma-tmao
    label: "Oral phosphatidylcholine can generate TMAO through microbiota-dependent metabolism"
    sourceUrls:
      - https://pmc.ncbi.nlm.nih.gov/articles/PMC3701945/
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

Stable-isotope human challenge data detected labeled TMAO after labeled phosphatidylcholine ingestion; antibiotic suppression of intestinal microbiota nearly abolished the signal, which returned after microbiota recovery. This graph represents metabolite formation only, not cardiovascular causality.

```mermaid
flowchart LR
  PC["substance:phosphatidylcholine"] -->|"microbiota-dependent metabolite formation"| TMAO["tag:plasma-tmao"]
```
