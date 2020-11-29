import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../screens/Map';
import SinglePing from '../screens/SinglePing';

export default function MapStack() {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator>
      <Screen name="Feed" component={Map} />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  )
}
