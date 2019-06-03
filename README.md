# ECSD Tech Test
Welcome to the ECSD Tech Test 

Please make a clone of this repository

## Running the application

### To run the Local Version of the App
You will need to have [node] and [yarn] both installed on your machine to run the app.

- Clone this repository and make sure you are in this directory (the one containing `README.md`!)
- Run `yarn && yarn start` to start the app
- Visit `localhost:3000` in a browser

### To run the Docker Version of the App 

You will need to have [docker] installed and running to build the image.
If you are new to docker please read the docker docs in order to understand how to build and run a container.

- `docker build -t ecsd-tech-test .`
- `docker run -it -p 3000:3000 ecsd-tech-test:latest`
- Visit `localhost:3000` in a browser

## Challenge 
Once the app is started follow the instructions on the screen and complete the solution in the folder `/src/test/e2e/`
Your submission should be able to work in CI without any set up or configuration from our side.

Each part of the challenge gets increasingly harder. The futher you progress the more we will be impressed.
Complete as much as you can!
Once you see that green tick you are done.

## Limitations
There are no limitations set on this. If you are struggling to select elements you are free to edit the app source code where needed.
What we are looking for is a good understanding of what makes a robust test and a good understanding of engineering principles.

Note: you will not find the challenge answers in the application. Although you could hack the challenge or spam the API that verifies your answer, you still need to submit your test for us to review. 


## Bonus
Have your tests start and tear down the app.

BDD frameworks are great, but are they always appropriate? You decide.

## Submit your test
Once completed push the solution up to your own repository and link ECS the url along with run instructions.

## Note
Please stick to contributing from one account, it makes you look better.

Good Luck!

[docker]: https://docs.docker.com/get-started/
[node]: https://nodejs.org/en/
[yarn]: https://yarnpkg.com/en/
