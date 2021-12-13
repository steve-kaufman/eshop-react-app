FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY tsconfig.json .
COPY src src
COPY public public

RUN yarn build


FROM stevekaufman/react-server

COPY --from=builder /app/build /react-app

CMD [ "serve", "/react-app" ]
