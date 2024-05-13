FROM node:20.11.1

WORKDIR /app

COPY package*.json ./

RUN npm install --force -g @angular/cli \
    && npm install --force

COPY . .

RUN npm run build 
