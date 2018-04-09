# ECSD Tech Test
Welcome to the ECSD Tech Test 


## Running the application

### Docker Version
You will need to have [docker] installed and running to start the site.

- Run `docker run -it --rm <IMAGE NAME TBC>` to start the app
- Visit `localhost` in a browser

OR

- Clone this repository and switch to the `docker` directory
- Run `./build.sh && ./run.sh`
- Visit `localhost` in a browser

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
Once completed push your submission into your forked repository. This will trigger one of our CI jobs to alert the appropriate people of your submission.


[node]: https://nodejs.org/en/
[yarn]: https://yarnpkg.com/en/
