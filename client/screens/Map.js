import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { MapView, Permissions } from "expo";

import { globalStyles } from "../styles/global";

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView>
        {/* <Button title="Map Pin" onPress={() => navigation.navigate("Single Ping")} /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

})