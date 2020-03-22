# this file is actual for heroku deply
# do not use it for local development
FROM node:10

WORKDIR /usr/src/front

# check this line on heroku
ENV API_URL=https://containerized-back.herokuapp.com/api
ENV NODE_ENV=production
ENV PORT=3000
ENV APP_ID=15169770c87cc52
ENV API_KEY=117d1888adf17b41d8382087e378bb364ef10925

COPY package*.json ./

RUN npm install

COPY . .