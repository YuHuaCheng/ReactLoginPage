FROM node:7.10

ADD . /LoginPage
WORKDIR /LoginPage

RUN npm install

EXPOSE 8088

CMD npm start