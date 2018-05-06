FROM node:9.11.1
COPY . /tech-test
WORKDIR /tech-test
RUN yarn install
ENTRYPOINT yarn start

