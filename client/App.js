import React from 'react';
import { View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { client } from './ApolloProvider';

import Feed from "./screens/Feed";


export default function App() {

  return (
    <ApolloProvider client={client}>
      <View>
        <Feed />
      </View>
    </ApolloProvider>
  );
}

