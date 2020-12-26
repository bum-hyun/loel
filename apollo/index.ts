import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import cookie from "js-cookie";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:3301/api",
});

const authLink = setContext((_, { headers }) => {
  const token = cookie.get("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
