FROM node:16.14.0-alpine as base

RUN npm i -g pnpm

FROM base as deps

WORKDIR /app

COPY package.json package-lock.json .npmrc ./

RUN npm ci

###############

FROM base as builder

WORKDIR /app

COPY --from=deps /app ./
COPY ./ ./

RUN pnpm build

###############

FROM nginx:1.22.1-alpine

COPY --from=builder ./app/build ./usr/share/nginx/html
COPY ./default.conf ./etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]