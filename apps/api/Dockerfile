FROM node:14-alpine
RUN apk update && apk add git
ENV NODE_ENV=production
ENV PORT=3333

EXPOSE ${PORT}

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "nx.json", "./"]

RUN npm install --silent --also=dev
COPY . /usr/src/app
RUN npm run build:api

CMD ["npm", "run", "serve:api"]
