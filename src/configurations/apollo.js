import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

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
        posts: relayStylePagination(),
      },
    },
  },
});

const cache1 = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: false,
          merge(existing, incoming) {
            const edges = existing ? [...existing.edges] : [];
            incoming.edges.forEach((edge, index) => {
              edges[index] = edge;
            });

            return {
              cursor: incoming.pageInfo.endCursor,
              edges: edges,
            };
          },

          read(existing) {
            if (existing) {
              console.log(existing);
              return {
                cursor: existing.cursor,
                edges: Object.values(existing),
              };
            }
          },
        },
      },
    },
  },
});

const cache2 = new InMemoryCache({
  typePolicies: {
    Publication: {
      merge: true,
    },
    Query: {
      posts: {
        merge: true,

      }
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

export default client;
