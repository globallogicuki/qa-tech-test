FROM node:9.11.1

WORKDIR /
RUN git clone 'https://github.com/L0wry/custom-tech-test.git' \
 && mv 'custom-tech-test' 'tech-test'
WORKDIR /tech-test
RUN yarn

ENTRYPOINT yarn start
