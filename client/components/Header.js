import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Actions from "../utils/dashboardActions";
import { useAuthContext } from "../utils/useAuthContext";
import { useDashboardContext } from "../utils/useDashboardContext";

export default function Header({ navigation }) {
  const { user } = useAuthContext();
  const [state, dispatch] = useDashboardContext();

  const handlePress = () => {
    navigation.openDrawer();
  };

  const userProfile = () => {
    dispatch({ type: Actions.SELECT_USER, payload: user });
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
        <Image
          style={styles.headerLogo}
          source={require("../assets/nodes.png")}
        />
        <Text style={styles.headerText}>
          {state.selectedUser?.username || user.username}
        </Text>
      </View>
      <TouchableRipple
        onPress={userProfile}
        style={styles.pingBtn}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <MaterialIcons
          style={styles.newPing}
          name="person"
          size={28}
          color="white"
        />
      </TouchableRipple>
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
    // left: -150
    // NOTE: the placement allows it to work in ios simulator
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
    padding: 6,
    borderRadius: 50,
    width: 40,
    backgroundColor: "#43B804",
    alignItems: "center",
    position: "absolute",
    right: 16,
  },
  newPing: {
    right: 0,
    // NOTE: on the ios simulator it looks good with right at 0
  },
});
