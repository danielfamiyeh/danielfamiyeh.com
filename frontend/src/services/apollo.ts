import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

const cache = new InMemoryCache();
const { VUE_APP_APOLLO_SERVER } = process.env;

const apolloClient = new ApolloClient({
  uri: VUE_APP_APOLLO_SERVER,
  cache
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
});
