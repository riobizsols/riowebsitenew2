# ── Stage 1: build React frontend ───────────────────────────────────────────
FROM node:20-alpine AS frontend-build
WORKDIR /app

# Native deps for some npm packages / image tooling
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY public ./public
COPY scripts ./scripts
COPY src ./src

# Prefer plain CRA build in Docker (image optimize script is optional)
RUN npm run build:prod

# ── Stage 2: production Node server (Express serves API + build) ────────────
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3003

RUN apk add --no-cache wget

COPY Backend/package.json Backend/package-lock.json* ./
RUN npm ci --omit=dev --legacy-peer-deps || npm install --omit=dev --legacy-peer-deps

COPY Backend/ ./
# React build lives next to server.js (resolveBuildPath prefers Backend/build)
COPY --from=frontend-build /app/build ./build

# Persist visitor / chat JSON data via volume
RUN mkdir -p /app/data && chown -R node:node /app
USER node

EXPOSE 3003
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3003/api/health || exit 1

CMD ["node", "server.js"]
