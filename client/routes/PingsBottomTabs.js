import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedStack from './FeedStack';
import MapStack from './MapStack';

export default function PingsBottomTabs() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator>
      <Screen name="WrittenPings" component={FeedStack} />
      <Screen name="MapPings" component={MapStack} />
    </Navigator>
  )
}
