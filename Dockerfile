FROM node:19.1.0
WORKDIR /app
COPY package*.json ./
COPY . .
WORKDIR /app/service1/
RUN npm install --force
WORKDIR /app/service2/
RUN npm install --force

WORKDIR /app
RUN npm install --force

EXPOSE 4040
EXPOSE 5050

CMD [ "npm", "start" ]
