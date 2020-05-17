# this file is actual for heroku deply
# do not use it for local development
FROM node:10

WORKDIR /usr/src/front

# check this line on heroku
ENV API_URL=https://containerized-back.herokuapp.com/api
ENV NODE_ENV=production
ENV PORT=3000
ENV APP_ID=some
ENV API_KEY=some

COPY package*.json ./

RUN npm install

COPY . .