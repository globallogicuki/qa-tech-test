FROM node:9.11.1
COPY . /tech-test
WORKDIR /tech-test
RUN ls -ltr
RUN yarn install
ENTRYPOINT yarn start

