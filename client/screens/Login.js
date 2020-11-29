import React from "react";
import { Text, Button, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useMutation } from "@apollo/client";

import { globalStyles } from "../styles/global";
import { useAuthContext } from "../utils/useAuthContext";
import { useForm } from "../utils/useForm";
import { LOGIN_USER } from "../utils/graphql";

export default function Login() {
  const authContext = useAuthContext();
  const initialState = { username: "", password: "" };
  const { handleChange, handleSubmit, values } = useForm();

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: values,
    onError(err) {},
  });

  return (
    <View style={globalStyles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={values.username}
        onChangeText={(val) => handleChange("username", val)}
      />
      <TextInput
        placeholder="Password"
        value={values.password}
        onChangeText={(val) => handleChange("password", val)}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}
