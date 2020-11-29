import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './Screens/Feed';
import SinglePing from './Screens/SinglePing';

export default function FeedStack() {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Feed" component={Feed} />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  )
}
