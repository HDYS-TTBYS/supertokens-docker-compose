FROM golang:1.18-alpine

ARG APP_NAME
ARG API_DOMAIN
ARG WEB_SITE_DOMAIN
ARG API_BASE_PATH
ARG WEB_SITE_BASE_PATH
ARG CONNECTION_URL
ARG API_KEYS

WORKDIR /go/src/backend

RUN apk update
COPY ./ ./
RUN go install github.com/cosmtrek/air@latest
RUN go mod tidy
EXPOSE 8000

CMD ["air", "-c", ".air.toml"]
