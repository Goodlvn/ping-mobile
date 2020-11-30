import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
// import MapView from "react-native-maps";
// import { MapView } from "react-native-maps";

// import { globalStyles } from "../styles/global";

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HI REST OF APP</Text>
    </View>
    // <MapView
    //   style={{ flex: 1 }}
    //   initialRegion={{
    //     latitude,
    //     longitude,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421
    //   }}
    // >

    // </MapView>
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
