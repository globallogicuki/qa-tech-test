FROM node:14.18.0
COPY . /tech-test
WORKDIR /tech-test
RUN yarn install
ENTRYPOINT yarn start

.