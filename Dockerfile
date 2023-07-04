FROM node:18.16.0-alpine

WORKDIR /app

ARG DATABASE_USER

ENV DATABASE_USER ${DATABASE_USER}

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]