import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { isCompositeType } from "graphql";

const httpLink = createHttpLink({
  uri: "https://v1.paxfolio.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  let token = localStorage.getItem("clientToken");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: relayStylePagination()
      },
    },
  },
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

export default client;
