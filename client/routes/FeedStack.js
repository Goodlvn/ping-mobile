import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SinglePing from "../screens/SinglePing";
import Header from "../components/Header";
import FeedTopTabs from "./FeedTopTabs";
import NewPing from '../components/NewPing';

export default function FeedStack({ navigation }) {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="Feeds"
        component={FeedTopTabs}
        options={{
          headerTitle: () => (
            <Header navigation={navigation}/>
          ),
        }}
      />
      <Screen name="Single Ping" component={SinglePing} />
      <Screen name="New Ping" component={NewPing} />
    </Navigator>
  );
}
