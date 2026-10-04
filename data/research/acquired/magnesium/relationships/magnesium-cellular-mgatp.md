---
id: magnesium-cellular-mgatp
label: Magnesium cellular uptake and Mg-nucleotide coupling
relation: supports
members:
  - substance:magnesium
  - tag:trpm7
  - tag:mg-atp-complex
memberRoles:
  substance:magnesium: Mg2+ ion
  tag:trpm7: cellular Mg2+-permeable channel-kinase
  tag:mg-atp-complex: magnesium-nucleotide biochemical complex
sourceUrl: https://pubmed.ncbi.nlm.nih.gov/12887921/
sourceUrls:
  - https://pubmed.ncbi.nlm.nih.gov/12887921/
  - https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
directedSteps:
  - from: substance:magnesium
    to: tag:trpm7
    label: TRPM7 provides a cellular Mg2+-permeable pathway in experimental systems
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/12887921/
  - from: substance:magnesium
    to: tag:mg-atp-complex
    label: Mg2+ coordinates ATP and related nucleotides in enzyme systems
    sourceUrls:
      - https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
x-shape: [id, label, relation, members, memberRoles, sourceUrl, sourceUrls, directedSteps, description]
---
## Description

Cellular magnesium availability is supported by Mg2+-permeable pathways such as TRPM7 and is functionally coupled to magnesium-nucleotide complexes used by energy-dependent enzymes; this mechanistic relationship does not itself establish a supplementation benefit in magnesium-replete humans.
