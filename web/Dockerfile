FROM node:24-alpine AS builder

ARG REACT_APP_BASE_URL="https://google.com"
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY server.js ./
EXPOSE 80
CMD ["node", "server.js"]
