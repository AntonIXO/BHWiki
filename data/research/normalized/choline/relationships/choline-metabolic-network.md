---
id: choline-metabolic-network
label: Choline metabolic network
relation: metabolic-routing
members:
  - substance:choline
  - tag:chka
  - tag:pcyt1a
  - tag:pemt
  - tag:phosphatidylcholine-biosynthesis
  - tag:chat
  - tag:acetylcholine
  - tag:chdh
  - tag:betaine-one-carbon-metabolism
  - tag:bhmt
  - tag:gut-microbial-tmao-generation
  - tag:fmo3
  - tag:plasma-tmao
memberRoles:
  "substance:choline": nutrient-substrate
  "tag:chka": enzyme
  "tag:pcyt1a": enzyme
  "tag:pemt": enzyme
  "tag:phosphatidylcholine-biosynthesis": phospholipid-pathway
  "tag:chat": enzyme
  "tag:acetylcholine": neurotransmitter-product
  "tag:chdh": enzyme
  "tag:betaine-one-carbon-metabolism": methyl-metabolism-pathway
  "tag:bhmt": enzyme
  "tag:gut-microbial-tmao-generation": host-microbiome-pathway
  "tag:fmo3": host-enzyme
  "tag:plasma-tmao": measured-downstream-metabolite
sourceUrl: https://doi.org/10.2903/j.efsa.2016.4484
sourceUrls:
  - https://doi.org/10.2903/j.efsa.2016.4484
  - https://pubmed.ncbi.nlm.nih.gov/23614584/
  - https://pubmed.ncbi.nlm.nih.gov/33872583/
  - https://www.ncbi.nlm.nih.gov/gene/?term=CHKA%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
  - https://www.ncbi.nlm.nih.gov/gene/?term=PCYT1A%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
  - https://www.ncbi.nlm.nih.gov/gene/?term=PEMT%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
  - https://www.ncbi.nlm.nih.gov/gene/?term=CHDH%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
  - https://www.ncbi.nlm.nih.gov/gene/?term=BHMT%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
  - https://www.ncbi.nlm.nih.gov/gene/?term=CHAT%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
  - https://www.ncbi.nlm.nih.gov/gene/?term=FMO3%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D
directedSteps:
  - from: substance:choline
    to: tag:chka
    label: Choline is phosphorylated by choline kinase at entry to the CDP-choline pathway.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484
      - https://www.ncbi.nlm.nih.gov/gene/?term=CHKA%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: tag:chka
    to: tag:pcyt1a
    label: Phosphocholine generated after choline phosphorylation feeds the PCYT1A-controlled CDP-choline pathway.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484
      - https://www.ncbi.nlm.nih.gov/gene/?term=PCYT1A%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: tag:pcyt1a
    to: tag:phosphatidylcholine-biosynthesis
    label: PCYT1A catalysis supports phosphatidylcholine formation through the CDP-choline pathway.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484

  - from: tag:pemt
    to: tag:phosphatidylcholine-biosynthesis
    label: PEMT provides an endogenous phosphatidylethanolamine-methylation route to phosphatidylcholine.
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/17490963/
      - https://www.ncbi.nlm.nih.gov/gene/?term=PEMT%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: substance:choline
    to: tag:chat
    label: Choline serves as a substrate for choline acetyltransferase.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484
      - https://www.ncbi.nlm.nih.gov/gene/?term=CHAT%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: tag:chat
    to: tag:acetylcholine
    label: Choline acetyltransferase catalyzes acetylcholine synthesis from choline and acetyl-CoA.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484

  - from: substance:choline
    to: tag:chdh
    label: Choline dehydrogenase initiates oxidation of choline toward betaine.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484
      - https://www.ncbi.nlm.nih.gov/gene/?term=CHDH%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: tag:chdh
    to: tag:betaine-one-carbon-metabolism
    label: Choline oxidation supplies the betaine-related one-carbon pathway.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484

  - from: tag:betaine-one-carbon-metabolism
    to: tag:bhmt
    label: Betaine-dependent one-carbon metabolism uses BHMT for homocysteine remethylation.
    sourceUrls:
      - https://doi.org/10.2903/j.efsa.2016.4484
      - https://www.ncbi.nlm.nih.gov/gene/?term=BHMT%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: substance:choline
    to: tag:gut-microbial-tmao-generation
    label: Susceptible choline-containing exposures can be metabolized by intestinal microbes to trimethylamine.
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/23614584/
      - https://pubmed.ncbi.nlm.nih.gov/33872583/

  - from: tag:gut-microbial-tmao-generation
    to: tag:fmo3
    label: Gut-derived trimethylamine becomes substrate for host FMO3-mediated oxidation.
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/23614584/
      - https://www.ncbi.nlm.nih.gov/gene/?term=FMO3%5Bgene%5D+AND+Homo+sapiens%5Borgn%5D

  - from: tag:fmo3
    to: tag:plasma-tmao
    label: FMO3-mediated trimethylamine oxidation contributes to circulating TMAO.
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/23614584/
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

Schema-native directed relationship graph linking choline to phosphatidylcholine synthesis, acetylcholine synthesis, betaine-dependent one-carbon metabolism, and the microbiome-dependent TMA/TMAO route. The graph represents biochemical routing only and does not assert that any downstream metabolite or mechanism causes a clinical cognitive or cardiovascular benefit or harm.
