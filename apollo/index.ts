import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from "@apollo/client";
import cookie from "js-cookie";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === "production" ? "https://api.loelblog.com/graphql" : "http://localhost:3301/graphql",
  // uri: "https://api.loelblog.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = cookie.get("accessToken");
  const user = localStorage.getItem("user");

  if (!token) {
    if (user) localStorage.removeItem("user");
    return;
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
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
