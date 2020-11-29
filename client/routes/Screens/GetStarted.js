import React from 'react'
import { Text, Button, View } from 'react-native';

import { globalStyles } from '../styles';

export default function GetStarted({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>Ping</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("Login")} />
      <Button title="Create an Account" onPress={() => navigation.navigate("Register")} />
    </View>
  )
}
