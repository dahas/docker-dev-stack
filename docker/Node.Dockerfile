FROM node:12-slim

WORKDIR /usr/src/app
COPY . .

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 8080
