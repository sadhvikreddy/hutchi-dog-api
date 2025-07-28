FROM node:22.17.1-alpine3.22 AS build

WORKDIR /app

COPY backend/package.json ./
COPY backend/tsconfig*.json ./
COPY backend/src/ ./src
COPY backend/etc/secrets/firebase-auth.json ./etc/secrets/
RUN npm install --omit=dev
RUN npm run build
EXPOSE 9999
CMD [ "npm", "run", "start" ]