import React from 'react'
import { Text, Button, View } from 'react-native';

import { globalStyles } from './styles';

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text>Sign in Screen</Text>
      <Button title="Sign In" onPress={() => console.log("sign in")} />
      <Button title="Create an Account" onPress={() => console.log("create an account")} />
    </View>
  )
}
