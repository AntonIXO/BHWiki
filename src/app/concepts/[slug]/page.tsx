import { ConceptArticle, conceptMetadata, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }>; searchParams: Promise<ReadingSearchParams> };
export async function generateMetadata({ params, searchParams }: Props) { return conceptMetadata((await params).slug, await searchParams, "concepts"); }
export default async function ConceptPage({ params, searchParams }: Props) {
  return <ConceptArticle section="concepts" slug={(await params).slug} searchParams={await searchParams}/>;
}
