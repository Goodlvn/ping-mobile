import React from 'react'
import { Text, Button, View } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Landing({ navigation }) {

  return (
    <View style={globalStyles.getStarted}>
      <Text>Ping</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("Login")} />
      <Button title="Create an Account" onPress={() => navigation.navigate("Register")} />
    </View>
  )
}
