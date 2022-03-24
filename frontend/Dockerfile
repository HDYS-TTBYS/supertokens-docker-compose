FROM node:17.7.2-alpine3.14

ARG APP_NAME
ARG API_DOMAIN
ARG WEB_SITE_DOMAIN
ARG API_BASE_PATH
ARG WEB_SITE_BASE_PATH

WORKDIR /frontend  
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./
EXPOSE 3000

CMD ["yarn", "start"]
