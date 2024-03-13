FROM node:18-alpine

WORKDIR /shoekicks2.0/

COPY public/ /shoekicks2.0/public
COPY src/ /shoekicks2.0/src
COPY package*.json /shoekicks2.0/

ENV REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_51OssNiSA8M310S6LeHyVt8yxauM3FyK0cR8DVtmwPFdMc08a7sEA6NpGthdMS4Q4eGpm119fpLCXJeaVCghhlMg500wfIgmenm

RUN npm install --force 

CMD ["npm", "start"]