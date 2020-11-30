import React from "react";
import { View, StyleSheet } from 'react-native';
import { Input, Button } from "react-native-elements";

export default function NewPing() {

  return (
    <View style={styles.text}>
      <Input placeholder="What's poppin..." />
      <Button style={styles.postBtn} title="Post" raised />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
})