import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import UserSettings from "../screens/UserSettings";
import { useAuthContext } from "../utils/useAuthContext";

export default function UserSettingsStack() {
  const { Navigator, Screen } = createStackNavigator();
  const { logout } = useAuthContext();

  return (
    <Navigator>
      <Screen
        name="Settings"
        component={UserSettings}
        options={{
          headerRight: () => <Button onPress={logout} title="Logout" />,
        }}
      />
    </Navigator>
  );
}
