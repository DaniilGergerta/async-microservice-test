FROM node:18.17.1-alpine

WORKDIR /backend
USER root
RUN chown -R node:node /backend

RUN apk add g++ make py3-pip
RUN npm i -g npm

COPY --chown=node:node package.json .
COPY --chown=node:node .env ./

RUN npm install

COPY --chown=node:node . .

RUN npm uninstall bcrypt
RUN npm install bcrypt
RUN npm run build

RUN mkdir -p /static

EXPOSE 4000

ENTRYPOINT ["npm", "run", "start:prod"]