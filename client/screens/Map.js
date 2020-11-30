import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
// import MapView from "react-native-maps";
import { useDashboardContext } from "../utils/useDashboardContext";
import { useQuery } from "@apollo/client";
import { FETCH_PINGS_QUERY } from "../utils/graphql";
// import MapPins from "../components/MapPins";



export default function Map({ navigation }) {
  // const [{ userPosition }] = useDashboardContext();
  // const { data } = useQuery(FETCH_PINGS_QUERY);

  // const Pins = data.getPings.map(ping => <MapPins key={ping.id} latt={ping.location.coordinates[1]} long={ping.location.coordinates[0]} username={ping.author.username} body={ping.body} id={ping.id} navigation={navigation} />);

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
  //       {Pins}
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
