import { getCatalog, getConcepts } from "@/lib/repository";
import { searchCatalog } from "@/lib/search";
import { mobileCatalogResponse, mobileError } from "@/lib/mobile-api";

export const dynamic = "force-dynamic";

const CACHE_CONTROL = "public, max-age=60, stale-while-revalidate=300";
const tagPattern = /^[a-z0-9][a-z0-9-]{0,120}$/;

function invalidCatalogRequest(params: URLSearchParams): boolean {
  const query = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const limit = Number(params.get("limit") ?? 500);
  const offset = Number(params.get("offset") ?? 0);
  const tags = params.getAll("tag");
  return query.length > 200
    || category.length > 120
    || tags.length > 20
    || tags.some((tag) => !tagPattern.test(tag))
    || !Number.isInteger(limit)
    || limit < 1
    || limit > 500
    || !Number.isInteger(offset)
    || offset < 0
    || offset > 10000;
}

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  if (invalidCatalogRequest(params)) {
    return Response.json(
      mobileError("invalid_request", "Invalid catalog parameters."),
      { status: 400 },
    );
  }

  const query = params.get("q") ?? "";
  const category = params.get("category") || undefined;
  const tags = params.getAll("tag");
  const limit = Number(params.get("limit") ?? 500);
  const offset = Number(params.get("offset") ?? 0);

  try {
    const [catalog, concepts] = await Promise.all([getCatalog(), getConcepts()]);
    const results = searchCatalog(catalog, concepts, { q: query, category, tags });
    return Response.json(
      mobileCatalogResponse(results, concepts, { offset, limit }),
      { headers: { "Cache-Control": CACHE_CONTROL } },
    );
  } catch {
    return Response.json(
      mobileError("unavailable", "The BHWiki library is temporarily unavailable."),
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
