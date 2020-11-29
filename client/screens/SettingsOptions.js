import React from 'react'
import { View, Button } from 'react-native';

export default function SettingsOptions({navigation}) {
  return (
    <View>
      <Button title="Update Profile" onPress={() => navigation.navigate("Settings")}/>
      <Button title="Delete Account" onPress={() => navigation.navigate("Delete")} />
    </View>
  )
}
