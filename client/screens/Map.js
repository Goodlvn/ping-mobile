import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import MapView from "react-native-maps";
import { useDashboardContext } from "../utils/useDashboardContext";

export default function Map({ navigation }) {
  const [{ userPosition }] = useDashboardContext();

  // if (userPosition.latitude) {
  //   return (

  //     <MapView
  //       showsUserLocation
  //       style={{ flex: 1 }}
  //       initialRegion={{
  //         latitude: userPosition.latitude,
  //         longitude: userPosition.longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421
  //       }}
  //     >

  //     </MapView>
  //   );
  // } else {
  return (
    <View style={styles.container}>
      <Text>LOADING...</Text>
    </View>
  );
  // }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

})
