import { pageMetadata } from "@/lib/seo";
import { ConceptIndex, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
export async function generateMetadata({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return pageMetadata({ path: "/concepts", title: "Mechanisms & concepts", description: "Explore chemical families, targets, enzymes, and other concepts that connect substances and evidence.", search: await searchParams });
}
export default async function ConceptsPage({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return <ConceptIndex section="concepts" searchParams={await searchParams}/>;
}
