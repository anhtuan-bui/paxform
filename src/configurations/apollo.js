import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GQL_URL = process.env.REACT_APP_WP_GQL_URL;

const httpLink = createHttpLink({
    uri: GQL_URL,
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

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;