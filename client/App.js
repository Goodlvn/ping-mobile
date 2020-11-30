import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloProvider";

import AppNavigator from "./routes/AppNavigator";
import { AuthProvider } from "./utils/useAuthContext";
import { DashboardProvider } from './utils/useDashboardContext';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <DashboardProvider>
          <AppNavigator />
        </DashboardProvider>
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
