import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import NewPing from "../components/NewPing";
import { useAuthContext } from "../utils/useAuthContext";
import { useDashboardContext } from "../utils/useDashboardContext";

export default function Header({ navigation, route }) {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useAuthContext();
  const [state] = useDashboardContext();
  const handlePress = () => {
    navigation.openDrawer();
  };
  console.log(route);

  return (
    <View style={styles.header}>
      <MaterialIcons
        style={styles.icon}
        name="menu"
        size={28}
        onPress={handlePress}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/nodes.png")}
        />
        <Text style={styles.headerText}>
          {state.selectedUser?.username || user.username}
        </Text>
      </View>
      {route.name !== "User Settings" && (
        <TouchableRipple
          onPress={() => setIsVisible(!isVisible)}
          style={styles.pingBtn}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Entypo
            style={styles.newPing}
            name="typing"
            size={24}
            color="white"
          />
        </TouchableRipple>
      )}
      <NewPing isVisible={isVisible} />
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
    flexDirection: "row",
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
  pingBtn: {
    padding: 7,
    borderRadius: 50,
    width: 40,
    backgroundColor: "#1B90E3",
    alignItems: "center",
    position: "absolute",
    right: 16,
  },
  newPing: {
    right: 10,
  },
});
