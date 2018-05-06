# ECSD Tech Test
Welcome to the ECSD Tech Test 

Please make a copy of this repository

## Running the application

### Docker

You will need to have [docker] installed and running to start the site.

- `docker build -t ecsd-tech-test .` from docker folder
- `docker run -it -p 3000:3000 ecsd-tech-test:latest`
- Visit `localhost:3000` in a browser

### Local Version
You will need to have [node] and [yarn] both installed on your machine to run the app.

- Clone this repository and make sure you are in this directory (the one containing `README.md`!)
- Run `yarn && yarn start` to start the app
- Visit `localhost:3000` in a browser

## Challenge 
Once the app is started follow the instructions on the screen

## Limitations
There are no limitations set on this. If you are struggling to select elements you are free to edit the app source code where needed.
What we are looking for is a good understanding of what makes a robust test and a good understanding of engineering principles.

Note: you will not find the challenge answers in the application. Although you could hack the challenge or spam the API that verifies your answer you still need to submit your test for us to review. 

## Submit your test
Once completed push the solution up to your own repository and link ECS the url 

Good Luck!


[node]: https://nodejs.org/en/
[yarn]: https://yarnpkg.com/en/
