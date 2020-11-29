import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Feed from "../screens/FeedDummy";
import SinglePing from "../screens/SinglePing";
import Header from "../components/Header";
import { useAuthContext } from "../utils/useAuthContext";

export default function FeedStack({navigation}) {
  const { Navigator, Screen } = createStackNavigator();
  const { logout } = useAuthContext();

  return (
    <Navigator>
      <Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: () => <Header navigation={navigation} title="Ping Feed"/>,
          headerRight: () => <Button onPress={logout} title="Logout" />,
        }}
      />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  );
}
