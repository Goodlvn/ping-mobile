import React from 'react'
import { Text, Button, View } from 'react-native';

import { globalStyles } from './styles';

export default function Register() {
  return (
    <View style={globalStyles.container}>
      <Text>Register Screen</Text>
      <Button title="Register" onPress={() => console.log("create an account")} />
    </View>
  )
}