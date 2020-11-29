import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "./Screens/Feed";
import Map from "./Screens/Map";
import FeedStack from "./FeedStack";
import MapStack from "./MapStack";

const { Navigator, Screen } = createBottomTabNavigator();

export default function FeedBottomTabs() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Ping Feed" component={Feed} />
        <Screen name="Ping Map" component={Map} />
      </Navigator>
    </NavigationContainer>
  );
}
