import React, { useState } from "react";
import { Text, Button, View, ScrollView, StyleSheet } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { useMutation } from "@apollo/client";

import { globalStyles } from "../styles/global";
import { useAuthContext } from "../utils/useAuthContext";
import { useForm } from "../utils/useForm";
import { REGISTER_USER } from "../utils/graphql";

export default function Register() {
  const authContext = useAuthContext();
  const [errors, setErrors] = useState({});
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { handleChange, handleSubmit, values } = useForm(
    registerCb,
    initialState
  );

  const [addUser] = useMutation(REGISTER_USER, {
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(_, result) {
      authContext.login(result.data.register);
    },
  });

  function registerCb() {
    addUser();
  }

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <TextInput
          label="Username"
          mode="outlined"
          value={values.username}
          error={errors.username ? true : false}
          onChangeText={(val) => handleChange("username", val)}
        />
        <HelperText type="error" visible={errors.username ? true : false}>
          {errors.username}
        </HelperText>
        <TextInput
          label="Email"
          mode="outlined"
          value={values.email}
          error={errors.email ? true : false}
          onChangeText={(val) => handleChange("email", val)}
        />
        <HelperText type="error" visible={errors.email ? true : false}>
          {errors.email}
        </HelperText>
        <TextInput
          label="Password"
          mode="outlined"
          value={values.password}
          error={errors.password ? true : false}
          onChangeText={(val) => handleChange("password", val)}
        />
        <HelperText type="error" visible={errors.password ? true : false}>
          {errors.password}
        </HelperText>
        <TextInput
          label="Confirm Password"
          mode="outlined"
          value={values.confirmPassword}
          error={errors.confirmPassword ? true : false}
          onChangeText={(val) => handleChange("confirmPassword", val)}
        />
        <HelperText
          type="error"
          visible={errors.confirmPassword ? true : false}
        >
          {errors.confirmPassword}
        </HelperText>
        <Button title="Register" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
