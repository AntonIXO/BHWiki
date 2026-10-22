import LibraryHome from "@/components/library-home";
import { getCatalog, getConcepts } from "@/lib/repository";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }: { searchParams: Promise<{ tag?: string; q?: string }> }) {
  const { tag, q } = await searchParams;
  const [substances, tags] = await Promise.all([getCatalog(), getConcepts()]);
  const concepts = tags.map(({ id, label, kind, aliases }) => ({ id, label, kind, aliases }));
  return <LibraryHome substances={substances} concepts={concepts} initialQuery={typeof q === "string" ? q : ""} initialTag={tags.some((item) => item.id === tag) ? tag : ""} />;
}
