import { loadCorpus } from "./content-markdown";
import { validateContent } from "./validate-content";

const corpus = loadCorpus();
validateContent(corpus);

export const tags = corpus.tags;
export const substances = corpus.substances;
export const hyperedges = corpus.hyperedges;
