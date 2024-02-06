FROM node:21

WORKDIR /app

COPY ./apis/devotionApp /app

RUN npm install

EXPOSE 3000

CMD ["node", "api/index.js"]