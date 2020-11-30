import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Feed from "../screens/Feed";

export default function FeedTopTabs() {
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  return (
    <Navigator>
      <Screen name="Supported" component={Feed} />
      <Screen name="Posted" component={Feed} />
      <Screen name="New" component={Feed} />
    </Navigator>
  );
}
