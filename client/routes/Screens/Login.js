import React from 'react'
import { Text, Button, View, TextInput } from 'react-native';

import { globalStyles } from '../styles';

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => console.log("create an account")} />
    </View>
  )
}