import { getCatalog, getConcepts } from "@/lib/repository";
import LibraryPrototypeHarness from "./prototype-harness";

export const dynamic = "force-dynamic";

export default async function LibraryPrototypePage() {
  const [substances, concepts] = await Promise.all([getCatalog(), getConcepts()]);
  return <LibraryPrototypeHarness substances={substances} concepts={concepts.map(({ id, label, kind, aliases }) => ({ id, label, kind, aliases }))} />;
}
