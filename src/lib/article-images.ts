import images from "./article-images.json";
import type { Substance } from "./types";

export type ArticleImage = { src: string; alt: string; kind: string; sourceUrl: string; credit: string };

/** Only downloaded assets with a recorded source are eligible for article illustrations. */
export function articleImage(substance: Pick<Substance, "slug" | "name" | "pubchemCid">): ArticleImage | undefined {
  const image = (images as Record<string, ArticleImage>)[substance.slug];
  if (image) return image;
  if (substance.pubchemCid !== null) return {
    src: `/molecules/${substance.slug}.png`,
    alt: `${substance.name} molecular structure`,
    kind: "structure",
    sourceUrl: `https://pubchem.ncbi.nlm.nih.gov/compound/${substance.pubchemCid}`,
    credit: "PubChem",
  };
}
