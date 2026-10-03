import { cpSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { researchFixture } from "../tests/fixtures/research";
import { serializeContent } from "../src/lib/content-markdown";
import { validateContent } from "../src/lib/validate-content";
const { corpus } = researchFixture();
validateContent(corpus);
const directory = mkdtempSync(path.join(tmpdir(), "bhwiki-research-fixture-"));
cpSync("content", directory, { recursive: true });
for (const [order, record] of corpus.substances.entries())
  writeFileSync(
    path.join(directory, "substances", `${record.slug}.md`),
    serializeContent(`substances/${record.slug}.md`, {
      collection: "substances",
      record,
      order,
    }),
  );
for (const [order, record] of corpus.tags.entries()) {
  const relative =
    record.kind === "effect"
      ? `effects/${record.id}.md`
      : record.kind === "outcome"
        ? `outcomes/${record.id}.md`
        : `concepts/${record.kind}/${record.id}.md`;
  writeFileSync(
    path.join(directory, relative),
    serializeContent(relative, { collection: "tags", record, order }),
  );
}
for (const [order, record] of corpus.hyperedges.entries())
  writeFileSync(
    path.join(directory, "relationships", `${record.id}.md`),
    serializeContent(`relationships/${record.id}.md`, {
      collection: "relationships",
      record,
      order,
    }),
  );
console.log(directory);
