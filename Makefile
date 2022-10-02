.PHONY: all dependencies build

all: dependencies build

dependencies:
	npm ci

build:
	npm run generate
