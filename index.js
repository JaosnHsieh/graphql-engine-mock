const {
  ApolloServer,
  gql,
  mergeSchemas,
  addMockFunctionsToSchema,
} = require('apollo-server');
const { createSchema } = require('./remoteSchema');

(async () => {
  const remoteSchema = await createSchema();
  //https://github.com/apollographql/graphql-tools/issues/1160
  const mocks = {
    String: () => 'Fix',
    DateTime: () => {
      return new Date();
    },
    timestamp: () => {
      return new Date();
    },
  };
  const server = new ApolloServer({ schema: remoteSchema, mocks: mocks });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
