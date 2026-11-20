# Automated editorial proposal

- Proposal ID: proposal:6f135492816e4c7f8f0636ce96a1725d
- Substance: glycine
- Suggestion type: new-effect
- Source: [Genetic basis of glycine and L-serine toxicity in &lt;i&gt;Staphylococcus aureus&lt;/i&gt; and the case for glycine as an antibiotic adjuvant.](https://pubmed.ncbi.nlm.nih.gov/42949621/)
- PMID: 42949621
- DOI: 10.1128/jb.00309-26
- Published: 2026-10-28
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> The toxicity of the amino acids glycine and L-serine at high concentrations in bacteria was discovered decades ago. In this work, we used transposon insertion sequencing (Tn-seq) experiments to determine the genes necessary to tolerate excess L-serine, diglycine, or glycine in the human pathogen <i>Staphylococcus aureus</i>. Our results indicate that intracellular accumulation of specific counterbalancing amino acids-such as alanine in the presence of excess glycine-is the primary mechanism of resistance to amino acid toxicity. Consistent with this model, specific amino acid and peptide uptake transporters were required for fitness in each treatment; the peptide transporter DtpT was crucial for fitness in excess L-serine or glycine, and the alanine transporter AapA was necessary for fitness in diglycine. Tn-seq results also identified the cystine/cysteine uptake transporter TcyABC as necessary in excess L-serine, suggesting that both peptide and cysteine uptake contribute to L-serine tolerance. In addition to uptake mechanisms, glycine and diglycine toxicity is neutralized by D-alanine aminotransferase (Dat), which is required for D-alanine synthesis. The requirement for Dat and DtpT function-but not AapA-in excess glycine is explained by excess glycine inhibiting alanine uptake. Building on this finding, we found that combined treatment with glycine and the alanine analog antibiotic D-cycloserine was strongly synergistic in inhibiting <i>S. aureus</i> growth. Overall, our findings identify targetable mechanisms underlying excess amino acid tolerance in <i>S. aureus</i>, with implications for developing novel combination treatments using the accessible and biocompatible amino acids glycine and L-serine.<h4>Importance</h4>Growing evidence supports the beneficial effects of glycine and L-serine supplementation in combating bacterial infections. Previous researchers have found that combining antibiotic treatment with high glycine concentrations has additive effects with many antibiotics, even reversing resistance to antibiotics in some bacteria. <i>In vivo</i>, activating glycine and L-serine metabolism heightens the sensitivity of bacterial pathogens to the host complement system, and studies of glycine or L-serine treatments show low toxicity and reduced inflammation in mouse and human subjects. This study reveals that glycine may be an effective antibiotic adjuvant with D-cycloserine, and treatment with glycine or L-serine could potentiate other drugs that target alanine or cysteine metabolism, respectively.

## Proposed structured change

```json
{
  "effect": "Combined treatment with glycine and D-cycloserine was strongly synergistic in inhibiting Staphylococcus aureus growth."
}
```

## Model rationale

The abstract directly reports a synergistic growth-inhibitory effect for glycine combined with D-cycloserine.

## Verbatim evidence from the abstract

> combined treatment with glycine and the alanine analog antibiotic D-cycloserine was strongly synergistic in inhibiting <i>S. aureus</i> growth.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
