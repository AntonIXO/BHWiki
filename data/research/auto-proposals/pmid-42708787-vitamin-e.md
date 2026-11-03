# Automated editorial proposal

- Proposal ID: proposal:2bd746fe27952057de88171d3f40cc32
- Substance: vitamin-e
- Suggestion type: new-reference
- Source: [&lt;b&gt;Protective effects of &lt;i&gt;Astragalus microcephalus&lt;/i&gt; polysaccharides combined with vitamin E and selenium against &lt;i&gt;mercury-induced&lt;/i&gt; ovarian toxicity in female rats&lt;/b&gt;.](https://pubmed.ncbi.nlm.nih.gov/42708787/)
- PMID: 42708787
- DOI: 10.36721/pjps.2026.39.12.349.1
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Exposure to mercury (Hg) is well-established to induce menstrual cycle disorders and disrupt sex hormone functions. Astragalus species, characterized by their potent antioxidant and anti-apoptotic properties, have shown potential in mitigating these adverse effects by promoting folliculogenesis and restoring hormonal balance.<h4>Objectives</h4>This study aimed to evaluate the protective effects of Astragalus microcephalus polysaccharides (APS), both alone and in combination with vitamin E and selenium (Vit E+Se), against ovarian damage and oxidative stress induced by mercuric chloride toxicity in rats.<h4>Methods</h4>Thirty-six female Wistar rats were synchronized via vaginal smear and randomly assigned to six groups: Control, Mercury (0.43 mg/kg HgCl2), APS (2.7 g/kg), Vit E+Se, Mercury+APS and Mercury+Vit E+Se. Following a 15-day subacute exposure period, serum levels of estradiol, LH and FSH were measured. Oxidative stress markers and ovarian histopathology were evaluated. Apoptotic and inflammatory pathways were assessed through immunohistochemical staining of Caspase-3, AIF and NF-κB.<h4>Results</h4>Hg-induced reductions in hormone levels were significantly restored to near control levels in the APS-treated groups and antioxidant levels were notably elevated in these groups, indicating mitigation of oxidative stress. Furthermore, immunohistochemical analysis revealed a significant reduction in stromal and follicular degeneration and a decrease in apoptotic activity in the ovaries of rats treated with APS.<h4>Conclusion</h4>APS exerts a significant protective effect against mercury-induced ovarian toxicity. This protection is mediated through the attenuation of oxidative stress, inflammation and apoptosis, as evidenced by the modulation of Caspase-3, AIF and NF-κB pathways. The results suggest that APS, particularly in synergy with vitamin E and selenium, offers a potential therapeutic strategy for managing heavy metal-induced reproductive damage.

## Proposed structured change

```json
{
  "title": "Protective effects of Astragalus microcephalus polysaccharides combined with vitamin E and selenium against mercury-induced ovarian toxicity in female rats",
  "studyPopulation": "female Wistar rats",
  "intervention": "vitamin E and selenium combined with Astragalus microcephalus polysaccharides",
  "model": "mercuric chloride-induced ovarian toxicity"
}
```

## Model rationale

The abstract directly evaluates vitamin E with selenium, both alone as a treatment group and in combination with Astragalus microcephalus polysaccharides, in a rat model of mercury-induced ovarian toxicity.

## Verbatim evidence from the abstract

> This study aimed to evaluate the protective effects of Astragalus microcephalus polysaccharides (APS), both alone and in combination with vitamin E and selenium (Vit E+Se), against ovarian damage and oxidative stress induced by mercuric chloride toxicity in rats.
> Thirty-six female Wistar rats were synchronized via vaginal smear and randomly assigned to six groups: Control, Mercury (0.43 mg/kg HgCl2), APS (2.7 g/kg), Vit E+Se, Mercury+APS and Mercury+Vit E+Se.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
