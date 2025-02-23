FROM node:18

WORKDIR /home/app

COPY . /home/app
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
