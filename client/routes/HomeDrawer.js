import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';

import FeedStack from './FeedStack';
import UserSettingsStack from './UserSettingsStack';

const { Navigator, Screen } = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Navigator >
      <Screen name="Feed" component={FeedStack} />
      <Screen name="User Settings" component={UserSettingsStack}/>
    </Navigator>
  )
}
