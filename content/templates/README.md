# Article templates

Copy a template into the matching folder and rename it to the slug or id. The filename and the `slug` or `id` in the header must match. `content/templates/` is not published.

Each article is one Markdown file:

- The header holds singular facts: identity, half-life, kinetics summary, tags, and review status.
- Headings hold the prose contributors rewrite: summary, description, evidence note, concept definition, or relationship description.
- A section that repeats — doses, pharmacokinetic observations, effects, claims, references — contains one `yaml` fence. `null` means the source did not report that number. Do not leave a value out to mean zero.
- `x-shape` lists every field of the record in the order the publisher fingerprints. Add a field to `x-shape` when you add it to the article. Leave `x-order` unchanged; omit it on a new file and it sorts after the current articles.
- An unrecognized heading, a second fence in one section, or a paragraph before the first heading fails the check. The failure names the file. `bun run content:validate` runs the same checks as CI.

Effects go in `content/effects/`. Measured outcomes go in `content/outcomes/`. Other concepts go in `content/concepts/<kind>/`, and the folder must match `kind`. Relationships go in `content/relationships/`. Substances go in `content/substances/`.

Keep `editorialStatus` as `sourced-draft` until a reviewer records the review. Link claims to reference ids. Use original wording. Do not copy Effect Index, PsychonautWiki, or Wikipedia prose.

For optional study metadata, numerical results, interactions, timing semantics, effect details and directed mechanism steps, see [research enrichment](research-enrichment.md).

## Unresolved identities and preparations

A mixture, tissue extract or unresolved research code may use `pubchemCid: null`. In that case, `formula`, `molecularWeight` and `smiles` must all be `Not established`. Do not assign a surrogate compound identifier or draw a structure for a mixture. The profile still needs a source reference; imported Molekul profiles use `molekul-profile`. Existing molecular identities retain their PubChem attribution.
