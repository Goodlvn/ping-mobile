import React, { useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import Ping from "../components/Ping";
import PingIcons from "../components/PingIcons";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";

import { useQuery } from "@apollo/client";
import { FETCH_PINGS_QUERY, NEW_PING_SUBSCRIPTION } from "../utils/graphql";
import { useAuthContext } from "../utils/useAuthContext";
import { useDashboardContext } from "../utils/useDashboardContext";
import Actions from "../utils/dashboardActions";

export default function Feed({ navigation, route }) {
  const [state, dispatch] = useDashboardContext();
  const { subscribeToMore, data } = useQuery(FETCH_PINGS_QUERY);
  const { user } = useAuthContext();

  useEffect(() => {
    load();
    const unsubscribe = newPingSubscription();
    return () => unsubscribe();
  }, []);

  function newPingSubscription() {
    return subscribeToMore({
      document: NEW_PING_SUBSCRIPTION,
      updateQuery: (prevPings, { subscriptionData }) => {
        if (!subscriptionData) return prevPings;
        const pingAdded = subscriptionData.data.newPing;
        return {
          ...prevPings,
          getPings: [pingAdded, ...prevPings.getPings],
        };
      },
    });
  }

  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        let errMssg = "Access to location is needed to run the app";
        return errMssg;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = await location.coords;

      dispatch({
        type: Actions.UPDATE_USER_POSITION,
        payload: { latitude, longitude },
      });
    } catch (err) {
      console.log(err);
    }
  }

  const displayedUserId = state.selectedUser?.id || user.id;

  const supportedPings = data?.getPings.filter((ping) => {
    const isUserPresent = ping.support.filter((supporter) => {
      return (
        supporter.user?.id === displayedUserId && supporter.supported === true
      );
    });
    return isUserPresent.length > 0;
  });

  const newPings = data?.getPings.filter((ping) => {
    const isUserPresent = ping.support.filter((supporter) => {
      return supporter.user?.id === displayedUserId;
    });
    return isUserPresent.length === 0;
  });

  const authoredPings = data?.getPings.filter((ping) => {
    return ping.author.id === displayedUserId;
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Single Ping", item.id)}
      >
        <Ping
          item={item}
          user={user}
          background={{ backgroundColor: "#D5E2F0" }}
        >
          <PingIcons
            item={item}
            user={user}
            navigation={navigation}
            route={route}
          />
        </Ping>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          style={styles.feed}
          data={
            route.name === "Supported"
              ? supportedPings
              : route.name === "Posted"
              ? authoredPings
              : route.name === "New"
              ? newPings
              : data.getPings
          }
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.container}>LOADING...</Text>
      )}
      <TouchableRipple
        onPress={() => navigation.navigate("New Ping")}
        style={styles.pingBtn}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Entypo style={styles.newPing} name="typing" size={24} color="white" />
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  logo: {
    width: 50,
    height: 50,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  username: {
    fontSize: 23,
  },
  body: {
    marginTop: 15,
  },
  feed: {
    marginTop: 0,
  },
  pingBtn: {
    padding: 12,
    borderRadius: 50,
    width: 50,
    backgroundColor: "#1B90E3",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  newPing: {
    right: 0,
    // NOTE: on the ios simulator it looks good with right at 0
  },
});
