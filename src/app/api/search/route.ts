import { getCatalog, getConcepts } from "@/lib/repository";
import { searchCatalog } from "@/lib/search";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const query = params.get("q") || "";
  const limit = Number(params.get("limit") || 20);
  const offset = Number(params.get("offset") || 0);
  const selected = params.getAll("tag");
  const invalid = query.length > 200
    || selected.length > 20
    || !Number.isInteger(limit) || limit < 1 || limit > 50
    || !Number.isInteger(offset) || offset < 0 || offset > 10000;
  if (invalid) return Response.json({ error: "Invalid search parameters." }, { status: 400 });
  try {
    const [catalog, concepts] = await Promise.all([getCatalog(), getConcepts()]);
    const results = searchCatalog(catalog, concepts, {
      q: query,
      category: params.get("category") || undefined,
      tags: selected,
    });
    return Response.json({
      items: results.slice(offset, offset + limit),
      total: results.length,
      nextOffset: offset + limit < results.length ? offset + limit : null,
    }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "The library is temporarily unavailable." }, { status: 503 });
  }
}
