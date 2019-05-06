
all: build up test

build:
	docker build -t ecsd-tech-test .

up:
	docker run -it -d -p 3000:3000 ecsd-tech-test:latest

test:
	python3.7 src/test/e2e/test_array.py
