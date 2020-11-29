import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from './Screens/GetStarted';
import Login from './Screens/Login';
import Register from './Screens/Register';

const { Navigator, Screen } = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Get Started" component={GetStarted} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  )
}
