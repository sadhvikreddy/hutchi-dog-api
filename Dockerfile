FROM node:22.17.1-alpine3.22 AS build

WORKDIR /app

COPY backend/package.json ./
COPY backend/tsconfig*.json ./
COPY backend/src/ ./src
COPY ./firebase-auth.json ./
RUN npm install --omit=dev
RUN npm run build
EXPOSE 9999
CMD [ "node", "dist/server.js" ]