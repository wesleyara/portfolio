FROM node

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN set -x \
  && yarn test \
  && yarn lint \
  && echo "Build successful"
