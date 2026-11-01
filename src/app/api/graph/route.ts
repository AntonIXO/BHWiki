import { getKnowledgeGraph } from "@/lib/repository";

export const dynamic = "force-dynamic";
const CACHE_CONTROL = "public, max-age=60, stale-while-revalidate=300";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const focus = params.get("focus")?.trim() || undefined;
  const rawLimit = params.get("limit");
  const limit = rawLimit === null ? 5000 : Number(rawLimit);
  if (params.getAll("focus").length > 1 || params.getAll("limit").length > 1 ||
      (focus && (focus.length > 120 || !/^(?:(?:substance|tag):)?[a-z0-9][a-z0-9-]*$/.test(focus))) ||
      !Number.isInteger(limit) || limit < 20 || limit > 5000) {
    return Response.json({ error: "Provide a valid substance/concept identifier and an integer limit between 20 and 5000." }, { status: 400 });
  }
  try {
    return Response.json(await getKnowledgeGraph({ focus, limit }), { headers: { "Cache-Control": CACHE_CONTROL } });
  } catch {
    return Response.json({ error: "The knowledge graph is temporarily unavailable." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
