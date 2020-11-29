import React from "react";
import { Text, Button, View, TextInput } from "react-native";

import { globalStyles } from "../styles/global";

export default function Register() {
  return (
    <View style={globalStyles.container}>
      <Text>Register Screen</Text>
      <TextInput style={globalStyles.authInput} placeholder="Username" />
      <TextInput style={globalStyles.authInput} placeholder="Email" />
      <TextInput style={globalStyles.authInput} placeholder="Password" />
      <TextInput
        style={globalStyles.authInput}
        placeholder="Confirm Password"
      />
      <Button
        title="Register"
        onPress={() => console.log("create an account")}
      />
    </View>
  );
}
