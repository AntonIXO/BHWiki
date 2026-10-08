# Runner and import pitfalls

## Execution and terminal state

- Verify the installed runner's supported reasoning values. The pinned runner used in October 2026 rejected `ultra` even though the account catalogue exposed it; `max` was its highest selectable value. Record that scope instead of claiming account-wide maximum capability. Recheck after runner updates.
- Authentication readiness and HTTP 200 responses establish access, not research completion. The authenticated backend has returned overload errors and `incomplete chunked read` failures after accepting requests. The MCP result may have `isError: false` while its text says `Research failed:`; inspect both.
- A tool's 300-second observation timeout does not prove that the research stopped. Poll its exact handle or inspect the authoritative process/job state. The `openai-codex` provider used here cannot recover completed reports through `research_status`; record that limitation. Do not launch duplicates merely because observation expired.
- Prefer one isolated call when diagnosing backend failures. High-concurrency batches produced widespread failures; do not assume concurrency was the cause without evidence. Back off after repeated terminal failures, preserve the queue, and report the actual error.
- `Missing X server` from a browser tool is an infrastructure failure, not evidence that Deep Research mode was selected. Follow the entrypoint's Chrome retry rule. Do not silently change runners or claim research acquisition from a browser that never opened.

## Literal captures and manifests

- Use a unique attempt directory such as `data/research/runs/<slug>/<timestamp>/`. Never let retries overwrite earlier reports or combine stale files with a later failed manifest.
- Persist the tool's literal result inside the active client/session context, before context-manager shutdown. A completed response can otherwise be lost to an exception during teardown. Initialize capture variables before the call; never refer to an unassigned `raw` or `out` variable in failure handling.
- Write manifests atomically and preserve the underlying exception, including nested task-group errors. Mark teardown failure separately if the report was already saved. Keep tool-return status distinct from local extraction/import status.
- The MCP wrapper can echo the entire request, including sample `BHWIKI_FILE` envelopes. Strip the exact echoed request before extracting the response; do not ingest the prompt's example as an article. Require one matching article, unique safe content-relative paths, and a completed task ID/report before treating extraction as successful.
- Preserve literal input hashes separately from normalized-file hashes. Record each repair. Never modify the original report to make it match repaired Markdown.
- A saved report with a completed task ID can survive an overwritten failure manifest. Recover only by linking the exact literal report, its task ID, matching envelopes, and retained runner evidence. A different historical ChatGPT URL is not provenance for those files.
- Do not fill unknown model, reasoning, execution surface, or run timestamps with plausible values. Distinguish configured model from observed resolution; distinguish original run time from recovery inspection time. Missing evidence stays missing and the acquisition gate stays unsatisfied.
- Historical browser captures may lack modern runner metadata. Preserve their original URL, method and hashes; flag missing mode/model/reasoning evidence instead of manufacturing it to pass the gate.
- Keep credentials out of commands that print data, prompts, reports and repository files. Inspect auth readiness through the CLI rather than printing the credential JSON.

## Evidence-preserving repairs

- Quote YAML scalars containing `: `, quote dates and identifier strings, and check duplicate keys before reserialization. Repair malformed fences/headings explicitly; do not discard text after a parse error.
- Optional numeric `study.sampleSize` and `study.durationDays` cannot be `null`. Omit unknown optional values and retain their uncertainty in prose; never replace them with zero.
- Repair source-ID typos by matching the actual reference's PMID/DOI. Do not drop an observation or assign an arbitrary source merely to satisfy validation. Preserve existing discovery URLs and inspect URL corruption, including mixed percent-encoding and raw non-Latin path fragments.
- Effects and outcomes need the correct concept kind. A measured gastrointestinal symptom score is distinct from a subjective symptom concept. Supply a sourced companion or use an equivalent canonical concept; do not relabel unrelated findings.
- Substance slugs and concept IDs cannot collide. If a family concept already occupies a requested substance slug, migrate its structured references to a distinct family ID, preserve its definition/source trail, and validate every affected claim and relationship. Avoid broad replacements that alter longer IDs or prose.
- Relationship participants use `substance:<slug>` and `tag:<id>`, not `target:`, `mechanism:` or `neurotransmitter:` prefixes. Preserve roles and directed-step qualifications.
- Two discrete plasma peaks must not become a continuous interval to fit a chart schema. Keep them as separate supported observations or retain the two times in sourced prose. Never turn radiolabel/metabolite timing into a parent-drug elimination curve.
- A missing `disclosureUrl` is not permission to insert the bibliography URL. Inspect the declaration first; otherwise retain funding/COI prose and mark the assessment unknown. Do not infer commercial independence from public funding when in-kind industry support or declared interests are also present.

## Integration and coverage

- Reconcile against the current article before replacement. Preserve supported identity, source IDs, outcomes, doses, PK, timing, modifiers, identification, legal and interaction records. Where records conflict, inspect the source and document the correction rather than keeping contradictory duplicates.
- Archive applied normalized directories before the next integration; the integration script processes every active directory. Reprocessing an old acquisition can overwrite later corrections or change canonical source metadata.
- Preserve integration history and provenance for each attempt. Update queue status only after the actual current article and companions validate; a historical import manifest does not prove a current identity stub contains that research.
- Run corpus, bibliography, disclosure and round-trip checks. Update expected content snapshots only after reviewing the intended changes. Passing counts and hashes do not establish scientific accuracy or complete topic coverage.
- Verify rendered outcomes and source disclosures, including collapsed source cards, study controls and empty states. Headless local-wiki render checks are application QA, not a substitute Deep Research runner. Keep existing browser-test failures visible in the final verification report.
- Do not mark the overall queue complete while requested topics or acquisition gates remain unresolved. Keep substantive progress, verified waits and recurring external blockers distinct.
