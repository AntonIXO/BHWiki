import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";
import type { Hyperedge, Substance, Tag, TagKind } from "./types";

const YAML_WRITE = { lineWidth: 0, aliasDuplicateObjects: false } as const;
const conceptFolders = ["class", "chemical-family", "mechanism", "target", "neurotransmitter", "enzyme", "exposure", "legal"] as const;
type ConceptFolder = (typeof conceptFolders)[number];

const substanceProse = [
  ["Summary", "summary"],
  ["Description", "description"],
  ["Evidence note", "evidenceNote"],
] as const;
const substanceLists = [
  ["Doses", "doses"],
  ["Pharmacokinetics", "pkObservations"],
  ["Modifiers", "modifiers"],
  ["Effects", "effects"],
  ["Outcomes", "outcomes"],
  ["Mechanisms", "mechanisms"],
  ["Cautions", "cautions"],
  ["Claims", "claims"],
  ["Interactions", "interactions"],
  ["Experience links", "experienceLinks"],
  ["References", "references"],
  ["Legal", "legal"],
] as const;

const substanceProseFields = new Set<string>(substanceProse.map(([, field]) => field));
const substanceListFields = new Set<string>(substanceLists.map(([, field]) => field));
const substanceHeadings = new Map<string, { field: string; kind: "prose" | "list" }>();
for (const [title, field] of substanceProse) substanceHeadings.set(title, { field, kind: "prose" });
for (const [title, field] of substanceLists) substanceHeadings.set(title, { field, kind: "list" });
substanceHeadings.set("Duration", { field: "timeline", kind: "list" });

export class ContentFormatError extends Error {
  constructor(file: string, message: string) {
    super(`${file}: ${message}`);
    this.name = "ContentFormatError";
  }
}

export type ContentRecord =
  | { collection: "substances"; record: Substance; order: number }
  | { collection: "tags"; record: Tag; order: number }
  | { collection: "relationships"; record: Hyperedge; order: number };

const yamlEngine = {
  parse: (input: string): object => {
    const value = parseYaml(input, { schema: "core", uniqueKeys: true });
    return isRecord(value) ? value : {};
  },
};

function fail(file: string, message: string): never {
  throw new ContentFormatError(file, message);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function yamlText(value: unknown): string {
  const text = stringifyYaml(value, YAML_WRITE);
  return text.endsWith("\n") ? text : `${text}\n`;
}

function document(data: Record<string, unknown>, sections: string[]): string {
  return `---\n${yamlText(data)}---\n\n${sections.join("\n")}\n`;
}

function proseSection(title: string, text: unknown, file: string): string {
  if (typeof text !== "string" || !text.trim()) fail(file, `${title} is empty`);
  return `## ${title}\n\n${text}\n`;
}

function listSection(title: string, value: unknown): string {
  return `## ${title}\n\n\`\`\`yaml\n${yamlText(value)}\`\`\`\n`;
}

function readSections(file: string, content: string, allowed: Map<string, { field: string; kind: "prose" | "list" }>, required: string[]): Record<string, unknown> {
  const parts = content.replace(/\r\n/g, "\n").split(/^## /m);
  const preamble = parts.shift() ?? "";
  if (preamble.trim()) fail(file, "text before the first heading is not allowed");
  const found = new Map<string, unknown>();
  for (const part of parts) {
    const breakAt = part.indexOf("\n");
    const title = (breakAt === -1 ? part : part.slice(0, breakAt)).trim();
    const spec = allowed.get(title);
    if (!spec) fail(file, `unknown heading ${title}`);
    if (found.has(spec.field)) fail(file, `duplicate heading ${title}`);
    const body = breakAt === -1 ? "" : part.slice(breakAt + 1);
    found.set(spec.field, spec.kind === "prose" ? readProse(file, title, body) : readList(file, title, body));
  }
  for (const title of required) {
    const spec = allowed.get(title);
    if (!spec || !found.has(spec.field)) fail(file, `missing heading ${title}`);
  }
  return Object.fromEntries(found);
}

function readProse(file: string, title: string, body: string): string {
  if (body.includes("```")) fail(file, `${title} must be prose, not a code fence`);
  const text = body.replace(/^\n+/, "").replace(/\n+$/, "");
  if (!text.trim()) fail(file, `${title} is empty`);
  return text;
}

function readList(file: string, title: string, body: string): unknown[] {
  const trimmed = body.replace(/^\n+/, "").replace(/\n+$/, "");
  const match = /^```yaml\n([\s\S]*)\n```$/.exec(trimmed);
  if (!match) fail(file, `${title} must contain one yaml fence`);
  let value: unknown;
  try {
    value = parseYaml(match[1] ?? "", { schema: "core", uniqueKeys: true });
  } catch (error) {
    fail(file, `${title} YAML could not be parsed (${error instanceof Error ? error.message : "invalid YAML"})`);
  }
  if (!Array.isArray(value)) fail(file, `${title} must be a YAML list`);
  return value;
}

function frontmatter(file: string, source: string): { data: Record<string, unknown>; content: string } {
  let parsed: { data: unknown; content: string };
  try {
    parsed = matter(source, { engines: { yaml: yamlEngine } });
  } catch (error) {
    fail(file, `frontmatter could not be parsed (${error instanceof Error ? error.message : "invalid YAML"})`);
  }
  if (!isRecord(parsed.data)) fail(file, "frontmatter must be a YAML map");
  return { data: parsed.data, content: parsed.content };
}

function bookkeeping(file: string, data: Record<string, unknown>): { order: number; shape: string[] } {
  const { "x-order": order, "x-shape": shape, ...rest } = data;
  if (!Array.isArray(shape) || shape.some((key) => typeof key !== "string" || !key)) fail(file, "x-shape must list the record fields");
  if (new Set(shape).size !== shape.length) fail(file, "x-shape repeats a field");
  const sort = order === undefined ? Number.MAX_SAFE_INTEGER : order;
  if (typeof sort !== "number" || !Number.isInteger(sort) || sort < 0) fail(file, "x-order must be a nonnegative integer");
  for (const key of Object.keys(rest)) {
    if (!shape.includes(key)) fail(file, `${key} is not listed in x-shape`);
  }
  return { order: sort, shape };
}

function assemble(file: string, shape: string[], parts: Record<string, unknown>): Record<string, unknown> {
  const record: Record<string, unknown> = {};
  for (const key of shape) {
    if (!Object.prototype.hasOwnProperty.call(parts, key)) fail(file, `x-shape field ${key} has no value`);
    record[key] = parts[key];
  }
  for (const key of Object.keys(parts)) {
    if (!shape.includes(key)) fail(file, `${key} is not listed in x-shape`);
  }
  return record;
}

function stem(relativePath: string): string {
  return path.basename(relativePath, ".md");
}

function substanceRecord(relativePath: string, source: string): ContentRecord {
  const file = relativePath;
  const { data, content } = frontmatter(file, source);
  for (const field of [...substanceProseFields, ...substanceListFields]) {
    if (field in data) fail(file, `${field} belongs under a heading, not in frontmatter`);
  }
  const { order, shape } = bookkeeping(file, data);
  const sections = readSections(file, content, substanceHeadings, [...substanceProse.map(([title]) => title), ...substanceLists.map(([title]) => title)]);
  const parts: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (key !== "x-order" && key !== "x-shape") parts[key] = value;
  }
  for (const [field, value] of Object.entries(sections)) {
    if (field === "timeline") continue;
    parts[field] = value;
  }
  if (sections.timeline !== undefined) {
    if (!isRecord(parts.kinetics)) fail(file, "Duration requires a kinetics map in frontmatter");
    parts.kinetics = { ...parts.kinetics, timeline: sections.timeline };
  }
  const record = assemble(file, shape, parts) as Substance;
  if (record.slug !== stem(relativePath)) fail(file, `slug ${String(record.slug)} does not match the filename`);
  return { collection: "substances", record, order };
}

function tagRecord(relativePath: string, source: string, expectedKind: TagKind): ContentRecord {
  const file = relativePath;
  const { data, content } = frontmatter(file, source);
  if ("description" in data) fail(file, "description belongs under Definition");
  const { order, shape } = bookkeeping(file, data);
  const sections = readSections(file, content, new Map([["Definition", { field: "description", kind: "prose" }]]), ["Definition"]);
  const parts: Record<string, unknown> = { ...sections };
  for (const [key, value] of Object.entries(data)) {
    if (key !== "x-order" && key !== "x-shape") parts[key] = value;
  }
  const record = assemble(file, shape, parts) as Tag;
  if (record.id !== stem(relativePath)) fail(file, `id ${String(record.id)} does not match the filename`);
  if (record.kind !== expectedKind) fail(file, `kind ${String(record.kind)} does not match the ${expectedKind} folder`);
  return { collection: "tags", record, order };
}

function edgeRecord(relativePath: string, source: string): ContentRecord {
  const file = relativePath;
  const { data, content } = frontmatter(file, source);
  if ("description" in data) fail(file, "description belongs under Description");
  const { order, shape } = bookkeeping(file, data);
  const sections = readSections(file, content, new Map([["Description", { field: "description", kind: "prose" }]]), ["Description"]);
  const parts: Record<string, unknown> = { ...sections };
  for (const [key, value] of Object.entries(data)) {
    if (key !== "x-order" && key !== "x-shape") parts[key] = value;
  }
  const record = assemble(file, shape, parts) as Hyperedge;
  if (record.id !== stem(relativePath)) fail(file, `id ${String(record.id)} does not match the filename`);
  return { collection: "relationships", record, order };
}

function expectedTagKind(relativePath: string): TagKind {
  const [folder, kind] = relativePath.split("/");
  if (folder === "effects") return "effect";
  if (folder === "outcomes") return "outcome";
  if (folder === "concepts" && conceptFolders.includes(kind as ConceptFolder)) return kind as TagKind;
  fail(relativePath, "concepts belong in effects/, outcomes/, or concepts/<kind>/");
}

export function parseContentSource(relativePath: string, source: string): ContentRecord {
  const normalized = relativePath.replaceAll("\\", "/");
  const folder = normalized.split("/")[0];
  if (folder === "substances") return substanceRecord(normalized, source);
  if (folder === "relationships") return edgeRecord(normalized, source);
  if (folder === "effects" || folder === "outcomes" || folder === "concepts") return tagRecord(normalized, source, expectedTagKind(normalized));
  fail(normalized, "file is outside the content tree");
}

function singularCopy(record: Record<string, unknown>, shape: string[], skip: Set<string>, file: string): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const key of shape) {
    if (skip.has(key)) continue;
    if (key === "kinetics" && isRecord(record.kinetics)) {
      const kinetics: Record<string, unknown> = {};
      for (const [name, value] of Object.entries(record.kinetics)) {
        if (name !== "timeline") kinetics[name] = value;
      }
      data.kinetics = kinetics;
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(record, key)) fail(file, `cannot serialize missing ${key}`);
    data[key] = record[key];
  }
  data["x-shape"] = shape;
  return data;
}

export function serializeContent(relativePath: string, parsed: ContentRecord): string {
  const file = relativePath;
  if (parsed.collection === "substances") {
    const record = parsed.record as unknown as Record<string, unknown>;
    const shape = Object.keys(record);
    const data = singularCopy(record, shape, new Set([...substanceProseFields, ...substanceListFields]), file);
    data["x-order"] = parsed.order;
    const sections = [
      ...substanceProse.map(([title, field]) => proseSection(title, record[field], file)),
      ...substanceLists.map(([title, field]) => listSection(title, record[field])),
    ];
    const kinetics = record.kinetics;
    if (isRecord(kinetics) && Object.prototype.hasOwnProperty.call(kinetics, "timeline")) {
      const durationAt = sections.findIndex((section) => section.startsWith("## Modifiers"));
      sections.splice(durationAt, 0, listSection("Duration", kinetics.timeline));
    }
    return document(data, sections);
  }
  if (parsed.collection === "tags") {
    const record = parsed.record as unknown as Record<string, unknown>;
    const shape = Object.keys(record);
    const data = singularCopy(record, shape, new Set(["description"]), file);
    data["x-order"] = parsed.order;
    return document(data, [proseSection("Definition", record.description, file)]);
  }
  const record = parsed.record as unknown as Record<string, unknown>;
  const shape = Object.keys(record);
  const data = singularCopy(record, shape, new Set(["description"]), file);
  data["x-order"] = parsed.order;
  return document(data, [proseSection("Description", record.description, file)]);
}

export function contentDirectory(): string {
  // An explicit, server-owned alternate corpus supports isolated integration tests.
  if (process.env.BHWIKI_CONTENT_DIRECTORY) {
    if (process.env.BHWIKI_DATA_MODE !== "bundled") throw new Error("An alternate content directory requires explicit bundled mode");
    const directory = path.resolve(process.env.BHWIKI_CONTENT_DIRECTORY);
    if (!existsSync(path.join(directory, "substances"))) throw new Error("Invalid alternate content directory");
    return directory;
  }
  const candidates = [
    path.join(process.cwd(), "content"),
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../content"),
  ];
  for (const candidate of candidates) {
    if (existsSync(path.join(candidate, "substances"))) return candidate;
  }
  throw new Error("BHWiki content directory not found. Expected a content/substances directory.");
}

function markdownFiles(directory: string, relative: string): string[] {
  const absolute = path.join(directory, relative);
  if (!existsSync(absolute)) fail(relative || "content", "missing directory");
  const found: string[] = [];
  for (const entry of readdirSync(absolute, { withFileTypes: true })) {
    const child = relative ? `${relative}/${entry.name}` : entry.name;
    if (relative === "" && (entry.name === "templates" || entry.name === "editorial.json")) continue;
    if (entry.isDirectory()) {
      if (relative === "concepts" && !conceptFolders.includes(entry.name as ConceptFolder)) fail(child, "unknown concept folder");
      if (relative !== "" && relative !== "concepts") fail(child, "unexpected directory");
      found.push(...markdownFiles(directory, child));
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".md")) fail(child, "only markdown files belong in the content tree");
    found.push(child);
  }
  return found;
}

function takeOrder(file: string, order: number, seen: Map<number, string>): number {
  if (order === Number.MAX_SAFE_INTEGER) return order;
  const previous = seen.get(order);
  if (previous) fail(file, `x-order ${order} is already used by ${previous}`);
  seen.set(order, file);
  return order;
}

export function loadCorpus(directory = contentDirectory()): { substances: Substance[]; tags: Tag[]; hyperedges: Hyperedge[] } {
  const files = markdownFiles(directory, "").filter((file) => !file.startsWith("templates/"));
  const substances: { order: number; record: Substance; file: string }[] = [];
  const tags: { order: number; record: Tag; file: string }[] = [];
  const hyperedges: { order: number; record: Hyperedge; file: string }[] = [];
  const substanceOrder = new Map<number, string>();
  const tagOrder = new Map<number, string>();
  const edgeOrder = new Map<number, string>();
  for (const file of files) {
    if (file.startsWith("templates/")) continue;
    const source = readFileSync(path.join(directory, file), "utf8").replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
    const parsed = parseContentSource(file, source);
    if (parsed.collection === "substances") substances.push({ order: takeOrder(file, parsed.order, substanceOrder), record: parsed.record, file });
    else if (parsed.collection === "tags") tags.push({ order: takeOrder(file, parsed.order, tagOrder), record: parsed.record, file });
    else hyperedges.push({ order: takeOrder(file, parsed.order, edgeOrder), record: parsed.record, file });
  }
  const byOrder = <T extends { order: number; record: { slug?: string; id?: string } }>(items: T[]) =>
    items.sort((a, b) => a.order - b.order || String(a.record.slug ?? a.record.id).localeCompare(String(b.record.slug ?? b.record.id)));
  return {
    substances: byOrder(substances).map((item) => item.record),
    tags: byOrder(tags).map((item) => item.record),
    hyperedges: byOrder(hyperedges).map((item) => item.record),
  };
}

export function corpusFingerprint(corpus: { substances: Substance[]; tags: Tag[]; hyperedges: Hyperedge[] }): string {
  return createHash("sha256").update(JSON.stringify(corpus)).digest("hex");
}
