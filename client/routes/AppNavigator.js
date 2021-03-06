import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomeDrawer from "./HomeDrawer";
import { useAuthContext } from "../utils/useAuthContext";

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
  const { user } = useAuthContext();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <NavigationContainer>
        <Navigator>
          {user ? (
            <Screen
              name="Home"
              component={HomeDrawer}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Screen
                name="Landing"
                component={Landing}
                options={{ headerShown: false, animationTypeForReplace: "pop" }}
              />
              <Screen name="Login" component={Login} />
              <Screen name="Register" component={Register} />
            </>
          )}
        </Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}
