import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedStack from "./FeedStack";
import MapStack from "./MapStack";

const { Navigator, Screen } = createBottomTabNavigator();

export default function FeedBottomTabs() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Ping Feed" component={FeedStack} />
        <Screen name="Ping Map" component={MapStack} />
      </Navigator>
    </NavigationContainer>
  );
}
