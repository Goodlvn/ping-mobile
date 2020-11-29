import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Register from '../screens/Register';

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Landing" component={Landing} options={{headerShown: false}}/>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  )
}
