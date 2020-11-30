import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  split,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/",
});

const authLink = setContext(async () => {
  const token = await AsyncStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const authHttpLink = authLink.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: "ws://localhost:8080/graphql",
  options: { reconnect: true },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authHttpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
