# this repo is some files to add mocking by apollo server to graphql-engine

## prerequiements

- node.js version 8+

## steps

1. `$ docker-compose up -d` (might change value of `docker-compose.yml` postgres's volume) `/Users/jason/git/youtube-collector-postgre-model/postgresql_db_data` to your local path)
2. visit adminer on `http://localhost:8083` and login with `System : PostgreSQL, Server : postgres, Username : example, Password : example`.
3. click `SQL command` and execute your sql to create a new table
4. visit graphql-engine on `http://localhost:8082/` with `adminsecret`
5. make sure Line 15(uri) and Line 21(x-hasura-admin-secret) values in `remoteSchema.js` is in align with `docker-compose.yaml`.
6. `$ yarn` and `$ node index.js`
