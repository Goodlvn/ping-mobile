import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import UserSettings from "../screens/UserSettings";
import Header from '../components/Header';
import { useAuthContext } from "../utils/useAuthContext";

export default function UserSettingsStack({navigation}) {
  const { Navigator, Screen } = createStackNavigator();
  const { logout } = useAuthContext();

  return (
    <Navigator>
      <Screen
        name="Settings"
        component={UserSettings}
        options={{
          headerTitle: () => <Header navigation={navigation} title="User Settings"/>,
          headerRight: () => <Button onPress={logout} title="Logout" />,
        }}
      />
    </Navigator>
  );
}
