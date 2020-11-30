import React, { useState } from "react";
import { Button, View, ScrollView } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { useMutation } from "@apollo/client";

import { globalStyles } from "../styles/global";
import { useAuthContext } from "../utils/useAuthContext";
import Actions from '../utils/dashboardActions';
import { useDashboardContext } from '../utils/useDashboardContext';
import { useForm } from "../utils/useForm";
import { LOGIN_USER } from "../utils/graphql";

export default function Login() {
  const authContext = useAuthContext();
  const [_, dispatch] = useDashboardContext();
  const [errors, setErrors] = useState({});
  const initialState = { username: "", password: "" };
  const { handleChange, handleSubmit, values } = useForm(loginCb, initialState);

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(_, result) {
      console.log(authContext.login);
      authContext.login(result.data.login);
      dispatch({ type: Actions.SELECT_USER, payload: result.data.login})
    }
  });

  function loginCb() {
    loginUser();
  }

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <TextInput
          label="Username"
          mode="outlined"
          autoCapitalize="none"
          value={values.username}
          error={errors.username ? true : false}
          onChangeText={(val) => handleChange("username", val)}
        />
        <HelperText type="error" visible={errors.username ? true : false}>{errors.username}</HelperText>
        <TextInput
          label="Password"
          mode="outlined"
          autoCapitalize="none"
          value={values.password}
          error={errors.password ? true : false}
          onChangeText={(val) => handleChange("password", val)}
        />
        <HelperText type="error" visible={errors.password ? true : false}>{errors.password}</HelperText>
        <Button title="Login" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
}
