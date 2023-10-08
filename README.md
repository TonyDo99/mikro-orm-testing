## Authors

- [@TonyDo99](https://github.com/TonyDo99)

# Installation

In this problem solve number 2 you will need some configuration to work properly with this. Please follow the guide below to get started.

## Docker configuration

Follow here to install docker: [Documentaion](https://docs.docker.com/get-docker/)

**Mac OS or Linux**

```bash
docker run -d \
    --name db-challenge-code \
    -e POSTGRES_PASSWORD=randompassword \
    -e POSTGRES_USER=tonyphat \
    -e POSTGRES_DB=dbchallengecode \
    -p 5432:5432 postgres
```

**Window**

```bash
docker run --name db-challenge-code -e POSTGRES_PASSWORD=randompassword -e POSTGRES_USER=tonyphat -e POSTGRES_DB=dbchallengecode -p 5432:5432 postgres
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```ruby
API_END_POINT=`https://www.alphavantage.co/query`
PORT=3000
DB_HOST=`localhost`
DB_NAME=`dbchallengecode`
DB_USER=`tonyphat`
DB_PASSWORD=`randompassword`
DB_PORT=5432
DB_TYPE=`postgresql`
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/TonyDo99/mikro-orm-testing
```

## Install dependencies

```bash
  yarn install
```

## Running the app

```bash
# run your local
$ yarn run start:local

# build for development environment
$ yarn run build:dev

# build for test environment
$ yarn run build:test

# build for staging environment
$ yarn run build:stg

# build for production environment
$ yarn run build:prod

```

## Test

```bash
# tests
$ yarn run test

# tests watch
$ yarn run test:watch

# tests debug
$ yarn run test:debug

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## API Documentation

```ruby
GraphQL: https://<domain-name>:<port>/api/graphql
```
