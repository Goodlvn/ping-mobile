import React from 'react'
import { Button, View } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Map({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Button title="Map Pin" onPress={() => navigation.navigate("Single Ping")} />
    </View>
  )
}
