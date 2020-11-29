import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { globalStyles } from "../styles/global";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text>Login</Text>
        <TextInput style={globalStyles.authInput} placeholder="Email" />
        <TextInput style={globalStyles.authInput} placeholder="Password" />
        <Button
          title="Login"
          onPress={() => console.log("create an account")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
