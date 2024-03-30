FROM node:19.1.0
WORKDIR /app
COPY package*.json ./
COPY . .


WORKDIR /app
RUN npm install --force

EXPOSE 5050

CMD [ "npm", "start" ]
