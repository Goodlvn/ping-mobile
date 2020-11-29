import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloProvider";

import Feed from "./screens/FeedDummy";
import AppNavigator from "./routes/AppNavigator";
import { AuthProvider } from "./utils/useAuthContext";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
