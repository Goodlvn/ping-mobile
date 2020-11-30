import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useAuthContext } from '../utils/useAuthContext';

export default function Header({ navigation, title }) {
  const { user } = useAuthContext();
  const handlePress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        style={styles.icon}
        name="menu"
        size={28}
        onPress={handlePress}
      />
      <View style={styles.headerTitle}>
        <Image style={styles.headerLogo} source={require("../assets/nodes.png")}/>
        <Text style={styles.headerText}>{user.username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    flexDirection: "row"
  },
  headerLogo: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1,
  },
});
