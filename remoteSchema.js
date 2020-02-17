const {
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas,
  addMockFunctionsToSchema,
} = require('graphql-tools');
const { HttpLink } = require('apollo-link-http');
const { setContext } = require('apollo-link-context');

const fetch = require('node-fetch');

const createSchema = async () => {
  try {
    const http = new HttpLink({
      uri: 'http://localhost:8082/v1/graphql',
      fetch,
    });

    const link = setContext((request, previousContext) => ({
      headers: {
        'x-hasura-admin-secret': `adminsecret`,
      },
    })).concat(http);
    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
      schema,
      link,
    });
    addMockFunctionsToSchema({ schema: executableSchema });

    return executableSchema;
  } catch (err) {
    console.log('errors', err);
  }
};

module.exports = {
  createSchema,
};
