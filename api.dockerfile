FROM node:carbon

MAINTAINER Jairo Rodrigues

EXPOSE 3000

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]


# FROM node:latest
# COPY . /app
# WORKDIR /app
# RUN npm install
# ENTRYPOINT npm start
# EXPOSE 3000
