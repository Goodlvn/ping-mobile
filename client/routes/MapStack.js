import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/Header";
import Map from "../screens/Map";
import SinglePing from "../screens/SinglePing";

export default function MapStack({navigation}) {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator>
      <Screen
        name="Pings Map"
        component={Map}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Ping Pins"/>
          ),
        }}
      />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  );
}
