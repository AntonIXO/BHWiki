# Automated editorial proposal

- Proposal ID: proposal:4271a45a0ea24de66b012aac34db59a4
- Substance: adrenaline
- Suggestion type: new-claim
- Source: [Protocols for Diagnosis and Management of Arthropod Bite Allergies in Humans.](https://pubmed.ncbi.nlm.nih.gov/42918995/)
- PMID: 42918995
- DOI: 10.1007/978-1-0716-5635-8_21
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Allergic diseases have increased significantly in recent decades, with a higher incidence of severe manifestations such as anaphylaxis. This increase is attributed mainly to environmental factors associated with the Western lifestyle that alter the epithelial barrier, promoting sensitization to allergens, such as those from arthropods. Hymenoptera (bees and wasps) are the most implicated arthropods. The sting introduces a venom composed of highly sensitizing proteins that are capable of triggering reactions ranging from local and mild to potentially fatal systemic reactions. The incidence is higher in rural areas, adults, and exposed professionals such as beekeepers. On the other hand, tick bites can sensitize individuals to alpha-gal, causing allergic reactions 2-6 h later. This delay in the response leads to an underdiagnosis of this allergic disease. The diagnosis is based on the clinical history and complementary tests such as skin tests, specific IgE tests, basophil activation tests, and tryptase determination, although false negatives may occur, especially after a recent reaction or in patients with mastocytosis. Treatment includes preventive measures, adrenaline for systemic reactions, and specific immunotherapy, which are effective at reducing the risk of future severe reactions and improving quality of life. Novel oral immunotherapy food could be an effective alternative in the treatment of alpha-gal allergy.

## Proposed structured change

```json
{
  "claim": "Adrenaline is included in the treatment of systemic reactions to arthropod bites and stings.",
  "context": "arthropod bite and sting allergies"
}
```

## Model rationale

The abstract explicitly states that treatment includes adrenaline for systemic reactions.

## Verbatim evidence from the abstract

> Treatment includes preventive measures, adrenaline for systemic reactions, and specific immunotherapy

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
