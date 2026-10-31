# Automated editorial proposal

- Proposal ID: proposal:21894578bc5e6365f2a90074a6053ead
- Substance: trehalose
- Suggestion type: new-effect
- Source: [Preservation of Thermophilic Fungi: Laboratory Protocols for Short- and Long-Term Storage.](https://pubmed.ncbi.nlm.nih.gov/42911337/)
- PMID: 42911337
- DOI: 10.1007/978-1-0716-5623-5_15
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Fungal preservation is critical for safeguarding genetic stability and viability for research and industrial applications. Methods are generally categorized into short- and long-term storage. Short-term maintenance relies on constant sub-culturing, which is technologically simple but labor-intensive and carries risks of phenotypic changes, mutations, or contamination. Alternative intermediate methods include storage under mineral oil, distilled water stasis (Castellani method), and silica gel. For permanent preservation, lyophilization (freeze-drying) and cryopreservation at ultra-low temperatures (liquid nitrogen or -80°C freezers) are preferred as they effectively halt cellular metabolism. Thermophilic fungi present a unique challenge due to their extreme sensitivity to subminimum temperatures below 20°C. Recent research indicates that the freezing block method at -20°C and lyophilization are the most effective strategies for these isolates, maintaining viability for up to 5 years. The use of cryoprotectants, such as glycerol, skim milk, or trehalose, is essential in these protocols to minimize cellular damage caused by ice crystal formation. Ultimately, since no universal protocol exists, the choice of method must be tailored to the specific fungal species and available laboratory resources.

## Proposed structured change

```json
{
  "effect": "Used as a cryoprotectant in fungal preservation protocols to minimize cellular damage caused by ice crystal formation.",
  "context": "Thermophilic fungi preservation"
}
```

## Model rationale

The abstract identifies trehalose as a cryoprotectant used in preservation protocols and links cryoprotectant use to minimizing damage from ice crystal formation.

## Verbatim evidence from the abstract

> The use of cryoprotectants, such as glycerol, skim milk, or trehalose, is essential in these protocols to minimize cellular damage caused by ice crystal formation.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
