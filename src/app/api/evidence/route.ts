import { getEvidenceRecord } from "@/lib/repository";
export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!key || key.length > 250 || !/^[a-z0-9~-]+$/.test(key))
    return Response.json({ error: "Invalid evidence key" }, { status: 400 });
  const record = await getEvidenceRecord(key);
  return record
    ? Response.json(record)
    : Response.json(
        { error: "This evidence record is unavailable or has changed." },
        { status: 404 },
      );
}
