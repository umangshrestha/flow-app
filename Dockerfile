FROM node:16.17.0
WORKDIR /code
# moving node dependecies
COPY package*.json /code/
# moving prisma schema to the database
COPY prisma /code/
RUN npm install -g npm@latest
RUN npm install
RUN npx prisma generate


