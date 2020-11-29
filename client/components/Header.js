import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({navigation, title}) {
  const handlePress = () => {
    navigation.openDrawer();
  }

  return (
    <View>
      <MaterialIcons name="menu" size={28} />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {

  },

})