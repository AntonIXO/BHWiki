# syntax=docker/dockerfile:1
FROM oven/bun:1.3.14 AS bun
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
# The production image never needs database access while building.
ENV NEXT_TELEMETRY_DISABLED=1 BHWIKI_DATA_MODE=bundled
RUN bun run build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=127.0.0.1 PORT=3086
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/content ./content
RUN mkdir -p .next/cache && chown node:node .next/cache
USER node
EXPOSE 3086
CMD ["node", "server.js"]
