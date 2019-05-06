# Excute Python Tests

## Setup Python locally
You need to install the following to run the test:
Open a Terminal and enter:
- Install python3.7
- sudo easy_install pip
- Pip3.7 install selenium

## Install Chromedriver
If already installed and at SYSTEM PATH - go straight to Execute Tests 

Chrome needs to be installed locally:
Goto URL: http://chromedriver.storage.googleapis.com/index.html

Goto URL, to add chromedriver as SYSTEM PATH:
url - https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/

OR

Add the `executable_path="{CHROMEDRIVER_DIRECTORY}"` to `self.driver = webdriver.Chrome()`

## Execute Tests
Python needs to be told which directory to look at before tests are executable:
Open a Terminal and enter:
- export PYTHONPATH=$HOME/{WORKING_DIRECTORY}/qa-tech-test/
Note: this needs to be done on same terminal to execute tests

- `make build` = `docker build -t ecsd-tech-test .`
- `make up` = `docker run -it -p 3000:3000 ecsd-tech-test:latest`
- `make test` = `python3.7 src/test/e2e/test_array.py`

OR

- `make all` which does all 3 commands above
