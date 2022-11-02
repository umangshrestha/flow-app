FROM node:16.17.0

WORKDIR /code
COPY package*.json /code/
COPY prisma /code/
RUN npm install -g npm@latest
RUN npm install
RUN npx prisma generate