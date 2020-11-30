import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import SinglePing from "../screens/SinglePing";
import Header from "../components/Header";
import FeedTopTabs from "./FeedTopTabs";

export default function FeedStack({ navigation }) {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="Supported"
        component={FeedTopTabs}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Ping Feed" />
          ),
        }}
      />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  );
}
