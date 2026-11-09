import { pageMetadata } from "@/lib/seo";
import { ConceptIndex, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
export async function generateMetadata({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return pageMetadata({ path: "/effects", title: "Subjective effects", description: "Explore reported experiences, their definitions, substance connections, and supporting evidence.", search: await searchParams });
}
export default async function EffectsPage({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return <ConceptIndex section="effects" searchParams={await searchParams}/>;
}
