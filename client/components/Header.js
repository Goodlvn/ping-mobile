import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({navigation, title}) {
  const handlePress = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons style={styles.icon} name="menu" size={28} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    position: "absolute",
    left: 16
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1
  }
})