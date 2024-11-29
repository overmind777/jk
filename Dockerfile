FROM node:18.20.5-alpine as builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

#prod
FROM node:18.20.5-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "dev"]