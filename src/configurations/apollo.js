import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://v1.paxfolio.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
