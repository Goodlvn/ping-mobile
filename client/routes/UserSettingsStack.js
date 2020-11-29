import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsOptions from '../screens/SettingsOptions';
import UserSettings from "../screens/UserSettings";
import DeleteUser from "../screens/DeleteUser";
import Header from "../components/Header";

export default function UserSettingsStack({ navigation }) {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="Options"
        component={SettingsOptions}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Settings" />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={UserSettings}
      />
      <Screen
        name="Delete"
        component={DeleteUser}
      />
    </Navigator>
  );
}
