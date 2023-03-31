FROM node:lts-alpine as build-stage
RUN mkdir app
WORKDIR /app


COPY package.json ./

RUN npm install

COPY . .

FROM nginx:1.21.6-alpine as production-stage
COPY --from=build-stage /app  /usr/share/nginx/html
EXPOSE 8090
CMD ["nginx","-g","daemon off;"]

