FROM node:0.12

ADD . /LoginPage
WORKDIR /LoginPage

RUN npm install

EXPOSE 8080

CMD npm start