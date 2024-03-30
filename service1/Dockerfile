FROM node:19.1.0
WORKDIR /app
COPY package*.json ./
COPY . .


WORKDIR /app
RUN npm install --force

EXPOSE 4040

CMD [ "npm", "start" ]
