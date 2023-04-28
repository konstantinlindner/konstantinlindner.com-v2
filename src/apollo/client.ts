import { ApolloClient, InMemoryCache } from "@apollo/client";

import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const token = `094984e1af351236429d0b40974190`;

const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }),
  };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
