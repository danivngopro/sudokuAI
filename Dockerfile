FROM node:14.18-alpine AS build
WORKDIR /usr/src/app
RUN echo "@bit:registry=https://node.bit.dev" >> ~/.npmrc
RUN echo "//node.bit.dev/:_authToken={$BIT_TOKEN}" >> ~/.npmrc
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm install && npm run build

FROM node:14.18-alpine AS prod
WORKDIR /usr/src/app
RUN echo "@bit:registry=https://node.bit.dev" >> ~/.npmrc
RUN echo "//node.bit.dev/:_authToken={$BIT_TOKEN}" >> ~/.npmrc
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist
RUN npm run install:prod
ENTRYPOINT [ "node", "/usr/src/app/dist/index.js" ]
EXPOSE 5000
