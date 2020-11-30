import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SupportIcon from "./SupportIcon";

import { useMutation } from "@apollo/client";
import { SUPPORT_PING } from "../utils/graphql";

export default function PingIcons({ item, user, navigation, route }) {
  const [supportMutation] = useMutation(SUPPORT_PING, {
    onError(err) {
      console.log(err);
    },
  });

  function handleSupport(suppBool) {
    const alreadySupported = item.support.filter((supporter) => {
      return supporter.supported === suppBool && supporter.user.id === user.id;
    });
    if (alreadySupported.length === 0) {
      supportMutation({ variables: { pingId: item.id, support: suppBool } });
    } else {
      console.log("already interacted with this");
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
      }}
    >
      {/* Support icon and count */}
      <TouchableOpacity onPress={() => handleSupport(true)}>
        <View style={{ flexDirection: "row" }}>
          <SupportIcon />
          {item.supportCount === 0 ? (
            <Text></Text>
          ) : (
            <Text style={styles.count}>{item.supportCount}</Text>
          )}
        </View>
      </TouchableOpacity>

      {/* Dissmiss Button icon and count */}
      <TouchableOpacity onPress={() => handleSupport(false)}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            style={styles.icon}
            name="minuscircle"
            size={15}
            color="#717378"
          />
          {item.dismissCount === 0 ? (
            <Text></Text>
          ) : (
            <Text style={styles.count}>{item.dismissCount}</Text>
          )}
        </View>
      </TouchableOpacity>

      {/* Comment icon and count */}
      <TouchableOpacity
        onPress={() =>
          route.name !== "Single Ping" &&
          navigation.navigate("Single Ping", item.id)
        }
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            style={styles.icon}
            name="comment"
            size={15}
            color="#717378"
          />
          {item.commentCount === 0 ? (
            <Text></Text>
          ) : (
            <Text style={styles.count}>{item.commentCount}</Text>
          )}
        </View>
      </TouchableOpacity>
      {/* Content Type */}
      <TouchableOpacity
        onPress={() =>
          route.name !== "Single Ping" &&
          navigation.navigate("Single Ping", item.id)
        }
      >
        <View style={{ flexDirection: "row" }}>
          {item.imageUrl ? (
            <Entypo
              style={styles.icon}
              name="image-inverted"
              size={15}
              color="#717378"
            />
          ) : (
            <Ionicons
              style={styles.icon}
              name="ios-paper"
              size={15}
              color="#717378"
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "column",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 15,
    color: "#aaa",
  },
  body: {
    marginTop: 10,
    fontSize: 18,
    color: "#555",
  },
  feed: {
    marginTop: 0,
  },
  avatar: {
    margin: 3,
  },
  icon: {
    marginLeft: 20,
    marginRight: 2,
  },
  count: {
    color: "#717378",
    marginLeft: 3,
  },
});
