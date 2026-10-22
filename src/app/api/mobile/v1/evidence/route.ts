import { getEvidenceRecord } from "@/lib/repository";
import { mobileError, mobileEvidenceResponse } from "@/lib/mobile-api";

export const dynamic = "force-dynamic";

const CACHE_CONTROL = "public, max-age=60, stale-while-revalidate=300";
const evidenceKeyPattern = /^[a-z0-9~-]+$/;

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!key || key.length > 250 || !evidenceKeyPattern.test(key)) {
    return Response.json(
      mobileError("invalid_request", "Invalid evidence key."),
      { status: 400 },
    );
  }

  try {
    const item = await getEvidenceRecord(key);
    if (!item) {
      return Response.json(
        mobileError("not_found", "This evidence record is unavailable or has changed."),
        { status: 404 },
      );
    }

    return Response.json(
      mobileEvidenceResponse(item),
      { headers: { "Cache-Control": CACHE_CONTROL } },
    );
  } catch {
    return Response.json(
      mobileError("unavailable", "Evidence is temporarily unavailable."),
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
