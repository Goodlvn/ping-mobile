import React from 'react';
import { View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { client } from './ApolloProvider';

<<<<<<< HEAD
import Feed from "./screens/Feed";

=======
import AuthStack from './routes/AuthStack';
import FeedBottomTabs from './routes/FeedBottomTabs';
>>>>>>> origin

export default function App() {

  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <View>
        <Feed />
=======
      <View style={styles.container}>
        {/* <AuthStack /> */}
        <FeedBottomTabs />
>>>>>>> origin
      </View>
    </ApolloProvider>
  );
}

