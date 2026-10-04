import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCorpus, parseContentSource, serializeContent, type ContentRecord } from "../src/lib/content-markdown";
import { validateContent } from "../src/lib/validate-content";
import { validateCanonicalSources, validateEditorialMetadata } from "../src/lib/publication-metadata";

export type ResearchInput = { relativePath: string; source: string };
const companionPath = /^(?:effects|outcomes|relationships|concepts\/(?:class|chemical-family|mechanism|target|neurotransmitter|enzyme|exposure|legal))\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

/** Validate the complete proposed corpus before any acquisition file can replace content. */
export function prepareResearchImport(root: string, slug: string, inputs: ResearchInput[]) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("Invalid research topic slug");
  const articlePath = `substances/${slug}.md`;
  if (inputs.filter((input) => input.relativePath === articlePath).length !== 1)
    throw new Error("Each Deep Research import requires exactly one matching substance article");
  if (new Set(inputs.map((input) => input.relativePath)).size !== inputs.length)
    throw new Error("Duplicate research output path");
  const contentRoot = path.join(root, "content");
  const corpus = loadCorpus(contentRoot);
  const prepared: { relativePath: string; source: string; compiled: string; parsed: ContentRecord }[] = [];
  for (const input of inputs) {
    if (input.relativePath !== articlePath && !companionPath.test(input.relativePath))
      throw new Error(`Only same-topic concepts and relationships may accompany an article: ${input.relativePath}`);
    if (/\uE200|\uE201|\uE202|turn\d+(?:search|view)\d+|\[insert(?: |\])/i.test(input.source))
      throw new Error(`Unresolved citation token or placeholder: ${input.relativePath}`);
    const parsed = parseContentSource(input.relativePath, input.source);
    const currentPath = path.join(contentRoot, input.relativePath);
    if (existsSync(currentPath)) {
      const previous = parseContentSource(input.relativePath, readFileSync(currentPath, "utf8"));
      if (previous.collection === "substances" && previous.record.editorialStatus === "editorially-reviewed")
        throw new Error(`Research acquisition cannot replace independently reviewed content: ${slug}`);
      if (previous.collection !== "substances" && JSON.stringify(parsed.record) !== JSON.stringify(previous.record))
        throw new Error(`An existing shared concept/relationship needs a separate reviewed correction: ${input.relativePath}`);
      parsed.order = previous.order;
    }
    if (parsed.collection === "substances") {
      if (parsed.record.editorialStatus !== "sourced-draft") throw new Error("Automated research must remain a sourced draft");
      corpus.substances = [...corpus.substances.filter((s) => s.slug !== slug), parsed.record];
    } else if (parsed.collection === "tags") {
      corpus.tags = [...corpus.tags.filter((t) => t.id !== parsed.record.id), parsed.record];
    } else {
      corpus.hyperedges = [...corpus.hyperedges.filter((r) => r.id !== parsed.record.id), parsed.record];
    }
    const compiled = serializeContent(input.relativePath, parsed);
    const roundTrip = parseContentSource(input.relativePath, compiled);
    if (JSON.stringify(roundTrip.record) !== JSON.stringify(parsed.record))
      throw new Error(`Research record changed during Markdown round trip: ${input.relativePath}`);
    prepared.push({ ...input, compiled, parsed });
  }
  validateContent(corpus);
  validateCanonicalSources(corpus.substances.flatMap((s) => s.references));
  validateEditorialMetadata(corpus.substances, JSON.parse(readFileSync(path.join(contentRoot, "editorial.json"), "utf8")));
  return prepared;
}

function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const args = process.argv.slice(2);
  let slug = "", article = "", sourceUrl = "";
  let apply = false;
  const companions: { relativePath: string; localPath: string }[] = [];
  while (args.length) {
    const flag = args.shift();
    if (flag === "--apply") { apply = true; continue; }
    const value = args.shift();
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${flag}`);
    if (flag === "--slug") slug = value;
    else if (flag === "--article") article = value;
    else if (flag === "--source-url") sourceUrl = value;
    else if (flag === "--companion") {
      const separator = value.indexOf("=");
      if (separator < 1) throw new Error("Companion argument must be content-relative-path=downloaded-local-path");
      companions.push({ relativePath: value.slice(0, separator), localPath: value.slice(separator + 1) });
    } else throw new Error(`Unknown flag ${flag}`);
  }
  if (!slug || !article) throw new Error("Usage: content:research --slug TOPIC --article DOWNLOAD.md [--companion outcomes/ID.md=DOWNLOAD.md] [--source-url CHAT_URL] [--apply]");
  if (sourceUrl) {
    const url = new URL(sourceUrl);
    if (url.protocol !== "https:" || url.hostname !== "chatgpt.com" || url.username || url.password)
      throw new Error("Research provenance must be a public ChatGPT HTTPS URL");
  }
  const files = [{ relativePath: `substances/${slug}.md`, localPath: article }, ...companions];
  const prepared = prepareResearchImport(root, slug, files.map((f) => ({ relativePath: f.relativePath, source: readFileSync(f.localPath, "utf8") })));
  if (!apply) { console.log(`Validated ${slug} and ${prepared.length - 1} companion files; no content written.`); return; }
  const archive = path.join(root, "data/research/downloads", slug);
  const recorded = prepared.map((file) => {
    const hash = createHash("sha256").update(file.source).digest("hex");
    const archiveRelative = `${hash.slice(0, 12)}/${file.relativePath}`;
    const archivePath = path.join(archive, archiveRelative);
    mkdirSync(path.dirname(archivePath), { recursive: true });
    writeFileSync(archivePath, file.source);
    return { path: file.relativePath, archive: archiveRelative, sha256: hash };
  });
  const snapshots = prepared.map((file) => {
    const destination = path.join(root, "content", file.relativePath);
    return { destination, previous: existsSync(destination) ? readFileSync(destination, "utf8") : null };
  });
  // All checks precede writes; acquisition originals remain available for scientific review.
  try {
    prepared.forEach((file, i) => {
      mkdirSync(path.dirname(snapshots[i].destination), { recursive: true });
      writeFileSync(snapshots[i].destination, file.compiled);
    });
  } catch (error) {
    snapshots.forEach(({ destination, previous }) => {
      if (previous !== null) writeFileSync(destination, previous);
      else if (existsSync(destination)) unlinkSync(destination);
    });
    throw error;
  }
  writeFileSync(path.join(archive, "manifest.json"), JSON.stringify({ topic: slug, sourceUrl: sourceUrl || null, importedAt: new Date().toISOString(), method: "One topic per ChatGPT Deep Research using Chrome", editorialStatus: "sourced-draft", files: recorded }, null, 2) + "\n");
  console.log(`Imported ${slug} and ${prepared.length - 1} companion files after corpus, citation, disclosure and round-trip validation.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
