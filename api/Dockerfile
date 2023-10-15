FROM node:16

WORKDIR /home/node/api

COPY package*.json ./

RUN npm i -g nodemon

RUN npm i

COPY . .

CMD ["yarn", "dev"]