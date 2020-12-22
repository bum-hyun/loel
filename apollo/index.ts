import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const GRAPHQL_URL = "http://localhost:3301/api";

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
