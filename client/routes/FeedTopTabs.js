import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Feed from "../screens/Feed";
import { useDashboardContext } from "../utils/useDashboardContext";
import { useAuthContext } from "../utils/useAuthContext";

export default function FeedTopTabs() {
  const { Navigator, Screen } = createMaterialTopTabNavigator();
  const [state] = useDashboardContext();
  const { user } = useAuthContext();

  return (
    <Navigator>
      <Screen name="Supported" component={Feed} />
      <Screen name="Posted" component={Feed} />
      {(state.selectedUser?.username === user.username || !state.selectedUser) && (
        <>
          <Screen name="New" component={Feed} />
          <Screen name="All" component={Feed} />
        </>
      )}
    </Navigator>
  );
}
