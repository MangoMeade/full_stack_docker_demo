FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8070

EXPOSE 5173

CMD ["npm", "run", "dev"]
