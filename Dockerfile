FROM node:lts AS build

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN $SENTRY_AUTH_TOKEN
ENV NODE_ADAPTER true
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build
RUN npm ci --omit=dev


FROM node:lts-slim AS run

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000
CMD ["npm", "start"]
