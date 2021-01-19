import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from "@apollo/client";
import cookie from "js-cookie";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  // uri: "http://localhost:3301/api",
  uri: "https://api.loelblog.com/api",
});

const authLink = setContext((_, { headers }) => {
  const token = cookie.get("accessToken");
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  }
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([authLink, errorLink, httpLink]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
