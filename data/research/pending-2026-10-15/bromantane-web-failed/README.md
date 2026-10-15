# Bromantane web Deep Research — failed acquisition

- Topic/slug: `bromantane`
- Surface: signed-in Chrome ChatGPT account
- Conversation: https://chatgpt.com/c/6acff6b8-0f84-83eb-982c-496a46ef74b9
- Activation marker in outbound request: `$ deep-research`
- Model selector verified immediately before submission: exact visible label `Pro, 5 of 5`
- Research indicator: rendered Deep Research run with planning, source search, PK verification, and final answering stages
- Completion state: response card ended with `This response couldn’t load`; no returned Markdown/report was recoverable
- Import state: not imported; `bromantane` remains queued in `data/research/topics.json`
- Limitation: a failed response is not evidence and must not be replaced with locally synthesized research

## Retry

- Conversation: https://chatgpt.com/c/6acff9db-355c-83ed-bf66-999faa0c40c1
- Activation marker: `$ deep-research Deep Research run`
- Model selector: `Pro, 5 of 5`
- Research stages observed: BHWiki schema identification, source-search iterations, condensed source-use details, final answering
- Completion state: response card again ended with `This response couldn’t load`; no Markdown/report recovered

- `https://chatgpt.com/c/6acffe62-9338-83eb-9e9c-971f1a3c995f` — third browser attempt on 2026-10-15. The automation appended a bromantane prompt to an already-running lisdexamfetamine composer, so the submitted message contained two topics. The request was left running and is explicitly unverified; it must not be imported as either article. A clean one-topic retry was then submitted separately at `https://chatgpt.com/c/local-chatgpt%3A94df6bae-91db-4791-ad61-234965cfe4b3`.
