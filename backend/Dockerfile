FROM node:20.14.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 4000
CMD ["node", "server.js"]