import {
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

export const client = new ApolloClient({
  link: authHttpLink,
  cache: new InMemoryCache(),
});
