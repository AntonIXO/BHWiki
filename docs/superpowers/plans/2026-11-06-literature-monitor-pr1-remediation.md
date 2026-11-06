# Literature monitor Europe PMC mapping remediation plan

**Goal:** Fix the metadata defects that the PR #1 review traced to the literature generator: the journal is always null, authors keep a trailing period, and matched terms contain case duplicates.

**Architecture:** All changes stay in the pure mapping layer, `src/lib/literature-monitor.ts`. The impure script `scripts/monitor-literature.ts` drops its private `termMatches` and calls a new exported `matchWatchTerms`, so the tests can cover it without network access or environment variables.

**Tech Stack:** TypeScript, `node:test` through `tsx --test`, Bun scripts.

**Spec reference:** Review comment on PR #1: <https://github.com/AntonIXO/BHWiki/pull/1#issuecomment-6697648522>.

**Out of scope:** The raw Europe PMC payload with author emails in committed manifests. The worker that writes `data/research/auto-proposals/manifest-*.json` is not in this repository, so that fix belongs in the worker.

---

## Task 1: Map core-format journal and clean author names

**Files**
- Modify: `src/lib/literature-monitor.ts` (`europePmcPaper`)
- Test: `tests/literature-monitor.test.ts`

**Consumes:** a Europe PMC `resultType=core` record (`journalInfo.journal.{medlineAbbreviation,isoabbreviation,title}`, `authorString`).
**Produces:** `LiteraturePaper.journal` (an abbreviation string, or null only when the source has no journal) and `LiteraturePaper.authors` without terminal punctuation.

### Step 1: Write the failing test

```ts
test("maps a Europe PMC core record's journal and author names", () => {
  const paper = europePmcPaper(
    {
      pmid: "42880479",
      doi: "10.1016/j.fct.2026.116460",
      title: "Evaluating the biological effects of caffeine-related compounds methylliberine and theacrine.",
      authorString: "Santillo MF, Sprando RL, Yourick JJ.",
      journalInfo: {
        journal: {
          title: "Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association",
          medlineAbbreviation: "Food Chem Toxicol",
          isoabbreviation: "Food Chem Toxicol",
        },
      },
      abstractText: "Methylliberine and theacrine were profiled.",
      firstPublicationDate: "2026-10-15",
    },
    { slug: "caffeine", name: "Caffeine", aliases: [], tags: [] },
    ["Caffeine"],
  );
  assert.equal(paper.journal, "Food Chem Toxicol");
  assert.deepEqual(paper.authors, ["Santillo MF", "Sprando RL", "Yourick JJ"]);
});
```

### Step 2: Confirm the test fails

`bunx tsx --test tests/literature-monitor.test.ts` should fail with `journal` equal to `null`.

### Step 3: Minimal implementation

In `europePmcPaper`, read `journalTitle` first, then fall back to `journalInfo.journal.medlineAbbreviation`, then `isoabbreviation`, then `title`. Strip a terminal `.` from `authorString` before splitting on commas.

### Step 4: Confirm the test passes

`bunx tsx --test tests/literature-monitor.test.ts`

### Step 5: Commit

```bash
git add src/lib/literature-monitor.ts tests/literature-monitor.test.ts
git commit -m "fix(literature): map Europe PMC core journal and author names"
```

---

## Task 2: Case-insensitive matched-term deduplication

**Files**
- Modify: `src/lib/literature-monitor.ts` (`uniqueTerms`, `mergePaper`, new export `matchWatchTerms`)
- Modify: `scripts/monitor-literature.ts` (remove `termMatches`, call `matchWatchTerms`)
- Test: `tests/literature-monitor.test.ts`

**Consumes:** a `WatchTarget`, the tag-label map, and a Europe PMC record.
**Produces:** `matchedTerms` with one entry per case-insensitive term, keeping the casing seen first. The Europe PMC query no longer repeats a term in different casing.

### Step 1: Write the failing tests

```ts
test("matches watch terms once regardless of casing", () => {
  const terms = matchWatchTerms(
    { slug: "caffeine", name: "Caffeine", aliases: ["CYP1A2"], tags: ["stimulant", "cyp1a2"] },
    new Map([["stimulant", "Stimulant"], ["cyp1a2", "CYP1A2"]]),
    { title: "Caffeine as a stimulant", abstractText: "CYP1A2 metabolises caffeine." },
  );
  assert.deepEqual(terms, ["Caffeine", "CYP1A2", "stimulant"]);
});

test("merging duplicate papers keeps one matched term per casing-insensitive value", () => {
  // two papers sharing a PMID with matchedTerms ["Caffeine"] and ["caffeine", "sleep"]
  assert.deepEqual(deduplicatePapers(papers)[0].matchedTerms, ["Caffeine", "sleep"]);
});
```

### Step 2: Confirm the tests fail

`bunx tsx --test tests/literature-monitor.test.ts` should fail because `matchWatchTerms` is not exported and the merge result contains `caffeine`.

### Step 3: Minimal implementation

Make `uniqueTerms` dedupe on `toLocaleLowerCase()` while keeping the first casing. Use it in `mergePaper`. Add `matchWatchTerms(target, tagLabels, result)` to the library. It builds the same candidate list as `termMatches`, normalises the title and abstract text, and filters with `uniqueTerms`. In the script, replace `termMatches(target, result)` with `matchWatchTerms(target, tagLabels, result)`.

### Step 4: Confirm the tests pass

`bunx tsx --test tests/literature-monitor.test.ts`

### Step 5: Commit

```bash
git add src/lib/literature-monitor.ts scripts/monitor-literature.ts tests/literature-monitor.test.ts
git commit -m "fix(literature): dedupe matched terms case-insensitively"
```

---

## Verification

1. `bun run test` passes in full.
2. `bunx tsc --noEmit` passes.
3. Smoke run: `bun run content:research-monitor -- --max-substances=1 --limit=5 --no-llm --spool=<tmp>`. The spooled papers should have a non-null `journal`, author names without a trailing period, and no case-duplicate `matchedTerms`.
