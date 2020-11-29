import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { useMutation } from "@apollo/client";

import { globalStyles } from "../styles/global";
import { useAuthContext } from "../utils/useAuthContext";
import { useForm } from "../utils/useForm";
import { REGISTER_USER } from "../utils/graphql";

export default function Register() {
  const authContext = useAuthContext();
  const [errors, setErrors] = useState({});
  const initialState = { username: "", email: "", password: "", confirmPassword: "" };
  const { handleChange, handleSubmit, values } = useForm(registerCb, initialState);

  const [addUser] = useMutation(REGISTER_USER, {
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(_, result) {
      authContext.login(result.data.register);
    }
  })

  function registerCb() {
    addUser();
  }

  return (
    <View style={globalStyles.container}>
      <TextInput
        label="Username"
        mode="outlined"
        value={values.username}
        error={errors.username ? true : false}
        onChangeText={(val) => handleChange("username", val)}
      />
      <HelperText type="error" visible={errors.username ? true : false}>{errors.username}</HelperText>
      <TextInput
        label="Email"
        mode="outlined"
        value={values.username}
        error={errors.username ? true : false}
        onChangeText={(val) => handleChange("username", val)}
      />
      <HelperText type="error" visible={errors.username ? true : false}>{errors.username}</HelperText>
      <TextInput
        label="Password"
        mode="outlined"
        value={values.username}
        error={errors.username ? true : false}
        onChangeText={(val) => handleChange("username", val)}
      />
      <HelperText type="error" visible={errors.username ? true : false}>{errors.username}</HelperText>
      <TextInput
        label="Confirm Password"
        mode="outlined"
        value={values.username}
        error={errors.username ? true : false}
        onChangeText={(val) => handleChange("username", val)}
      />
      <HelperText type="error" visible={errors.username ? true : false}>{errors.username}</HelperText>
      <Button
        title="Register"
        onPress={() => console.log("create an account")}
      />
    </View>
  );
}
