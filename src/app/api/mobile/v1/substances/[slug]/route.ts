import { getCatalog, getConcepts, getSubstance } from "@/lib/repository";
import { indexEntities } from "@/lib/entities";
import { mobileError, mobileSubstanceResponse, validMobileSlug } from "@/lib/mobile-api";

export const dynamic = "force-dynamic";

const CACHE_CONTROL = "public, max-age=60, stale-while-revalidate=300";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  if (!validMobileSlug(slug)) {
    return Response.json(
      mobileError("invalid_request", "Invalid substance identifier."),
      { status: 400 },
    );
  }

  try {
    const item = await getSubstance(slug);
    if (!item) {
      return Response.json(
        mobileError("not_found", "This substance is unavailable."),
        { status: 404 },
      );
    }

    const [catalog, concepts] = await Promise.all([getCatalog(), getConcepts()]);
    const related = indexEntities(catalog, concepts)
      .relatedSubstances(slug, item.tags, 6)
      .map(({ item: relatedItem }) => relatedItem);

    return Response.json(
      mobileSubstanceResponse(item, related),
      { headers: { "Cache-Control": CACHE_CONTROL } },
    );
  } catch {
    return Response.json(
      mobileError("unavailable", "This substance is temporarily unavailable."),
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
