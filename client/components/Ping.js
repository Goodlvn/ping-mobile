import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

import Actions from "../utils/dashboardActions";
import { useDashboardContext } from "../utils/useDashboardContext";

export default function Ping({ item, children, background }) {
  const [_, dispatch] = useDashboardContext();
  const navigation = useNavigation();

  const displayProfile = (user) => {
    dispatch({ type: Actions.SELECT_USER, payload: user });
    navigation.navigate("Supported")
  };

  return (
    <View style={[styles.item, background]}>
      <TouchableOpacity underlayColor="white">
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          {item.author.imageUrl ? (
            <Avatar
              onPress={() => displayProfile(item.author)}
              size="medium"
              rounded
              source={{
                uri: item.author.imageUrl,
              }}
            />
          ) : (
            <Avatar
              onPress={() => displayProfile(item.author)}
              size="medium"
              rounded
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
              }}
            />
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 15,
            }}
          >
            <Text
              style={styles.username}
              onPress={() => displayProfile(item.author)}
            >
              @{item.author.username}
            </Text>
            <Text style={styles.time}>
              {" "}
              • {moment(Number(item.createdAt)).fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.body}>{item.body}</Text>
      {children}
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
    color: "#717378",
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
});
