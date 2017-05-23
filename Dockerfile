FROM node:7.10

ADD . /LoginPage
WORKDIR /LoginPage

RUN npm install

EXPOSE 8080

CMD npm start