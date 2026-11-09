import { getSubstances, getConcepts } from "@/lib/repository";
import { buildLlmsTxt } from "@/lib/seo";

export const dynamic = "force-dynamic";
export async function GET() {
  const [substances, concepts] = await Promise.all([getSubstances(), getConcepts()]);
  return new Response(buildLlmsTxt(substances, concepts), { headers: { "Content-Type": "text/plain; charset=utf-8", "X-Content-Type-Options": "nosniff" } });
}
