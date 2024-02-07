FROM node:21

WORKDIR /apis/devotionApp

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]