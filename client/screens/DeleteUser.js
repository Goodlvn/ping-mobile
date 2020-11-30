import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function DeleteUser() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Password</Text>
      <Input
        placeholder="Password..."
        secureTextEntry={true}
      />
      <Button title="Delete Account" raised />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  }
})
