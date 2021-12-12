FROM node:16-alpine AS deps

RUN apk update && apk add git
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i --silent --also=dev

FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
RUN npm run build:client

FROM node:16-alpine AS runner
WORKDIR /usr/src/app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /usr/src/app/apps/client/next.config.js ./
COPY --from=builder /usr/src/app/apps/client/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/apps/client/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/dist/apps/client/.next ./.next

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

# USER nextjs

ENV PORT_SSR=4200
EXPOSE ${PORT_SSR}
ENV NODE_ENV development

CMD ["npm", "run", "serve:client", "--verbose"]
