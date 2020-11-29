import React from 'react'
import { Text, Button, View, TextInput } from 'react-native';

import { globalStyles } from '../styles';

export default function Register() {
  return (
    <View style={globalStyles.container}>
      <Text>Register Screen</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Confirm Password" />
      <Button title="Register" onPress={() => console.log("create an account")} />
    </View>
  )
}